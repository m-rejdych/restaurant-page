export default function() {
    const content = document.getElementById(`content`);
    const homeDiv = document.createElement(`div`);
    
    function createHome() {

        homeDiv.setAttribute(`id`, `homeDiv`);

        const restaurantName = document.createElement(`h1`);
        restaurantName.setAttribute(`id`, `restaurantName`);
        restaurantName.innerHTML = `The Rockefeller<br>Restaurant`;

        homeDiv.appendChild(restaurantName);
    }   

    function loadHome() {
        createHome();
        content.appendChild(homeDiv);
    }

    return loadHome();
};