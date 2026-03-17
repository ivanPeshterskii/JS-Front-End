function solve() {
   // Get inputs (rows, searchText)
   const tableRowElements = document.querySelectorAll('.container tbody tr');
   const searchElement = document.getElementById('searchField');

   // Deselect old rows
   tableRowElements.forEach(tr => tr.classList.remove('select'));

   // Search matches
   for (const tableRow of tableRowElements) {
      if (!searchElement.value) {
         return;
      }

      const isMatch = tableRow.textContent.toLowerCase().includes(searchElement.value.toLowerCase());

      if (isMatch) {
         tableRow.classList.add('select');
      }
   }

   // Clear input
   searchElement.value = '';
}
