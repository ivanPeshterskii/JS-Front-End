function solve() {
   // Get input elements (towns, searchText, result)
   const townsListElements = document.getElementById('towns').children;
   const searchTextElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   const searchValue = searchTextElement.value;

   // Convet HTMLCollection to an array
   const townElements = Array.from(townsListElements);

   let count = 0;
   // Bold and underline the matched towns
   townElements.forEach(townElement => {
      const isMatch = townElement.textContent.toLowerCase().includes(searchValue.toLowerCase());

      if (!isMatch) {
         // Clean up old matches
         townElement.style.textDecoration = '';
         townElement.style.fontWeight = '';
         townElement.style.opacity = '';
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
