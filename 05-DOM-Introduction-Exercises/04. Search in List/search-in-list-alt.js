function solve() {
   // Get input elements (towns, searchText, result)
   const townsListElements = document.querySelectorAll('#towns li');
   const searchTextElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   const searchValue = searchTextElement.value;

   let count = 0;
   // Bold and underline the matched towns
   townsListElements.forEach(townElement => {
      const isMatch = townElement.textContent.toLowerCase().includes(searchValue.toLowerCase());

      if (!isMatch) {
         return;
      }

      townElement.style.textDecoration = 'underline';
      townElement.style.fontWeight = 'bold';
      townElement.style.opacity = 1;

      count++;
   });

   // Show result matches count
   resultElement.textContent = `${count} matches found`;
}
