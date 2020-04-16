export default (function() {
    const body = document.querySelector(`body`);
    const content = document.getElementById(`content`);
    const nav = document.createElement(`nav`);

    function createNav() {
        nav.setAttribute(`id`, `navBar`);

        const menuTab = document.createElement(`h3`);
        menuTab.setAttribute(`id`, `menuTab`);
        menuTab.textContent = `Menu`;

        const homeTab = document.createElement(`h3`);
        homeTab.setAttribute(`id`, `homeTab`);
        homeTab.textContent = `Home`;

        const contactTab = document.createElement(`h3`);
        contactTab.setAttribute(`id`, `contactTab`);
        contactTab.textContent = `Content`;

        nav.appendChild(menuTab);
        nav.appendChild(homeTab);
        nav.appendChild(contactTab);
    };

    function loadNav() {
        createNav();
        body.insertBefore(nav, content);
    };

    return { loadNav };
})();