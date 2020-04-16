export default function() {
    const content = document.getElementById(`content`);
    const menuDiv = document.createElement(`div`);

    function createMenuDiv() {
        menuDiv.setAttribute(`id`, `menuDiv`);

        const menuCard = document.createElement(`div`);
        menuCard.setAttribute(`id`, `menuCard`);

        const menuHeader = document.createElement(`h2`);
        menuHeader.textContent = `The Menu`;
        menuHeader.setAttribute(`id`, `menuHeader`);
        menuCard.appendChild(menuHeader);

        const mealNames = [`Steak Minute`, `Crispy Chicken`, `Quattro Stagoni`,
        `Bresaola`, `Salsiccio Cipolla`, `Whole Grilled Sea Bass`, `Pasta Bolognese`,
        `Italian Ravioli`, `Pasta Carbonara`, `Lasagna`];

        for (let i = 0; i < 10; i++) {
            const para = document.createElement(`p`);
            para.textContent = mealNames[i];
            menuCard.appendChild(para);
        }

        menuDiv.appendChild(menuCard);
    }

    function loadMenu() {
        createMenuDiv();
        content.appendChild(menuDiv);
    }

    return loadMenu();
}