    export default function createHome() {
        const homeDiv = document.createElement(`div`);
        
        homeDiv.setAttribute(`id`, `homeDiv`);

        const restaurantName = document.createElement(`h1`);
        restaurantName.setAttribute(`id`, `restaurantName`);
        restaurantName.innerHTML = `The Rockefeller<br>Restaurant`;

        homeDiv.appendChild(restaurantName);

        content.appendChild(homeDiv);
    }   