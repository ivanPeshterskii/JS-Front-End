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

      // Attach event for each div 
      titleSections.forEach(titleSection => {
         titleSection.addEventListener('click', titleSectionClickHandler);
      });

      // Attach divs to dom
      const contentElement = document.getElementById('content');
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

   function titleSectionClickHandler(e) {
      // Show div that is clicked
      const currentTitleSection = e.currentTarget;
      const titleElement = currentTitleSection.querySelector('p');
      
      titleElement.style.display = 'block';
   }
}
