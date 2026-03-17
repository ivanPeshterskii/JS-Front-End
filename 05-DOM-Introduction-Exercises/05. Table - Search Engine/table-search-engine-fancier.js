function solve() {
   // Get inputs (rows, searchText)
   const tableRowElements = document.querySelectorAll('.container tbody tr');
   const searchElement = document.getElementById('searchField');

   // Deselect old rows
   tableRowElements.forEach(tr => tr.classList.remove('select'));

   // Search matches
   for (const tableRow of tableRowElements) {
      const isMatch = Array
         .from(tableRow.children)
         .some(td => td.textContent.includes(searchElement.value));

      if (isMatch) {
         tableRow.classList.add('select');
      }
   }

   // Clear input
   searchElement.value = '';
}
