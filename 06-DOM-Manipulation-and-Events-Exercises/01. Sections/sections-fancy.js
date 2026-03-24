document.addEventListener('DOMContentLoaded', solve);

function solve() {
   // Get button element
   const generateButtonElement = document.querySelector('#task-input input[type=submit]');

   // Add generate event handler
   generateButtonElement.addEventListener('click', generateButtonClickHandler);

   function generateButtonClickHandler(e) {
      // Stop page from being refreshed
      e.preventDefault();

      // Read input value
      const inputElement = document.querySelector('#task-input input[type=text]')

      // Split input
      const titles = inputElement.value.split(', ');

      // Create div with hidden p for each input 
      const titleSections = titles.map(createTitleSection);

      const contentElement = document.getElementById('content');
      // Attach Events Using event delegation
      contentElement.addEventListener('click', (e) => {
         const currentTitleSection = e.target;

         if (!currentTitleSection.tagName === 'DIV') {
            return;
         }

         const titleElement = currentTitleSection.querySelector('p');

         titleElement.style.display = 'block';
      });

      // Attach divs to dom
      contentElement.append(...titleSections);
   }

   function createTitleSection(title) {
      const titleElement = document.createElement('p');
      titleElement.textContent = title;
      titleElement.style.display = 'none';

      const containerElement = document.createElement('div');
      containerElement.appendChild(titleElement);

      return containerElement;
   }
}
