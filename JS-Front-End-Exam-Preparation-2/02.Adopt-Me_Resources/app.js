window.addEventListener("load", solve);

function solve() {

  const adoptBtn = document.getElementById('adopt-btn');

  const typeOFAnimalField = document.getElementById('type');
  const ageField = document.getElementById('age');
  const genderField = document.getElementById('gender');

  const ul = document.getElementById('adoption-info');
  const adoptedList = document.getElementById('adopted-list');

  adoptBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const typeAnimal = typeOFAnimalField.value;
    const ageAnimal = ageField.value;
    const genderAnimal = genderField.value;

    if (!typeAnimal || !ageAnimal || !genderAnimal) {
      return;
    }

    const li = document.createElement('li');
    const article = document.createElement('article');

    const pTypeAnimal = document.createElement('p');
    const pGenderAnimal = document.createElement('p');
    const pAgeAnimal = document.createElement('p');

    const div = document.createElement('div');
    const editBtn = document.createElement('button');
    const doneBtn = document.createElement('button');

    pTypeAnimal.textContent = `Pet: ${typeAnimal}`;
    pGenderAnimal.textContent = `Gender: ${genderAnimal}`;
    pAgeAnimal.textContent = `Age: ${ageAnimal}`;

    div.className = 'buttons';
    editBtn.className = 'edit-btn';
    doneBtn.className = 'done-btn';

    editBtn.textContent = 'Edit';
    doneBtn.textContent = 'Done';

    article.appendChild(pTypeAnimal);
    article.appendChild(pGenderAnimal);
    article.appendChild(pAgeAnimal);

    div.appendChild(editBtn);
    div.appendChild(doneBtn);

    li.appendChild(article);
    li.appendChild(div);

    ul.appendChild(li);

    typeOFAnimalField.value = '';
    ageField.value = '';
    genderField.value = '';

    editBtn.addEventListener('click', () => {
      typeOFAnimalField.value = typeAnimal;
      ageField.value = ageAnimal;
      genderField.value = genderAnimal;

      li.remove();
    });

    doneBtn.addEventListener('click', () => {
      div.remove();

      const clearBtn = document.createElement('button');
      clearBtn.className = 'clear-btn';
      clearBtn.textContent = 'Clear';

      li.appendChild(clearBtn);
      adoptedList.appendChild(li);

      clearBtn.addEventListener('click', () => {
        li.remove();
      });
    });
  });
}