const baseUrl = '/jsonstore/games';

const loadBtn = document.getElementById('load-games');
const addBtn = document.getElementById('add-game');
const editBtn = document.getElementById('edit-game');
const gamesList = document.getElementById('games-list');
const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');

let currentGameId = null;

loadBtn.addEventListener('click', loadGames);
addBtn.addEventListener('click', addGame);
editBtn.addEventListener('click', editGame);

async function loadGames() {
  const response = await fetch(baseUrl);
  const data = await response.json();

  gamesList.innerHTML = '';
  Object.values(data).forEach(renderGame);
}

async function addGame() {
  const game = getFormData();
  if (!game) {
    return;
  }

  await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game),
  });

  clearForm();
  await loadGames();
}

async function editGame() {
  const game = getFormData();
  if (!game || !currentGameId) {
    return;
  }

  await fetch(`${baseUrl}/${currentGameId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(game),
  });

  clearForm();
  toggleButtons(false);
  await loadGames();
}

function renderGame(game) {
  const wrapper = document.createElement('div');
  wrapper.className = 'board-game';

  const content = document.createElement('div');
  content.className = 'content';

  const nameEl = document.createElement('p');
  nameEl.textContent = game.name;

  const typeEl = document.createElement('p');
  typeEl.textContent = game.type;

  const playersEl = document.createElement('p');
  playersEl.textContent = game.players;

  content.append(nameEl, typeEl, playersEl);

  const buttons = document.createElement('div');
  buttons.className = 'buttons-container';

  const changeBtn = document.createElement('button');
  changeBtn.className = 'change-btn';
  changeBtn.textContent = 'Change';
  changeBtn.addEventListener('click', () => {
    nameInput.value = game.name;
    typeInput.value = game.type;
    playersInput.value = game.players;
    currentGameId = game._id;
    toggleButtons(true);
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', async () => {
    await fetch(`${baseUrl}/${game._id}`, { method: 'DELETE' });
    if (currentGameId === game._id) {
      clearForm();
      toggleButtons(false);
    }
    await loadGames();
  });

  buttons.append(changeBtn, deleteBtn);
  wrapper.append(content, buttons);
  gamesList.appendChild(wrapper);
}

function getFormData() {
  const name = nameInput.value.trim();
  const type = typeInput.value.trim();
  const players = playersInput.value.trim();

  if (!name || !type || !players) {
    return null;
  }

  return { name, type, players };
}

function clearForm() {
  nameInput.value = '';
  typeInput.value = '';
  playersInput.value = '';
  currentGameId = null;
}

function toggleButtons(isEditing) {
  addBtn.disabled = isEditing;
  editBtn.disabled = !isEditing;
}
