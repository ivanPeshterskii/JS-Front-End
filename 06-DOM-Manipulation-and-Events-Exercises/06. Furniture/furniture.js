document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const formElement = document.getElementById('input');
    const shopFormElement = document.getElementById('shop');
    let furnitures = [];

    formElement.addEventListener('submit', (e) => {
        // PRevent refresh
        e.preventDefault();

        // Parse input
        const inputText = formElement.querySelector('textarea').value;
        furnitures = JSON.parse(inputText);

        // Create furniture elemnets
        const furnitureElements = furnitures.map(createFurnitureElement);

        // Attach to table
        const shopTbodyElement = shopFormElement.querySelector('tbody');
        // shopTbodyElement.innerHTML = '';
        shopTbodyElement.append(...furnitureElements);
    });

    shopFormElement.addEventListener('submit', shopSubmitHandler);

    function createFurnitureElement(data, index) {
        const imgElement = document.createElement('img');
        imgElement.src = data.img;

        const firstTdElement = document.createElement('td');
        firstTdElement.appendChild(imgElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = data.name;

        const seconTdElement = document.createElement('td');
        seconTdElement.appendChild(nameElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = data.price;

        const thirdTdElement = document.createElement('td');
        thirdTdElement.appendChild(priceElement);

        const decFactorElement = document.createElement('p');
        decFactorElement.textContent = data.decFactor;

        const fourthTdElement = document.createElement('td');
        fourthTdElement.appendChild(decFactorElement);

        const markElement = document.createElement('input');
        markElement.type = 'checkbox';

        const fifthTdElement = document.createElement('td');
        fifthTdElement.appendChild(markElement);

        const furnitureElement = document.createElement('tr');
        furnitureElement.setAttribute('data-id', index);
        furnitureElement.append(
            firstTdElement,
            seconTdElement,
            thirdTdElement,
            fourthTdElement,
            fifthTdElement,
        );

        return furnitureElement;
    }

    function shopSubmitHandler(e) {
        e.preventDefault();

        // Get selected furnitures
        const furnitureElements = shopFormElement.querySelectorAll('tbody tr');
        const selectedFurnitures = Array.from(furnitureElements)
            .filter(el => {
                const markInput = el.querySelector('input[type=checkbox]');

                return markInput.checked;
            })
            .map(el => {
                const index = Number(el.getAttribute('data-id'));

                return furnitures[index];
            });

        // Get output textarea
        const resultTextarea = shopFormElement.querySelector('textarea');

        // Show list of bought items
        resultTextarea.textContent = `Bought furniture: ${selectedFurnitures.map(furniture => furniture.name).join(', ')}`;

        // show total price
        const totalPrice = selectedFurnitures.reduce((total, fur) => total + fur.price, 0);
        resultTextarea.textContent += '\n';
        resultTextarea.textContent += `Total price: ${totalPrice}`

        // show Average decoration factor
        const averageDecFactor = selectedFurnitures.reduce((acc, furniture) => acc + furniture.decFactor, 0) / selectedFurnitures.length;
        resultTextarea.textContent += '\n';
        resultTextarea.textContent += `Average decoration factor: ${averageDecFactor}`;
    }
}
