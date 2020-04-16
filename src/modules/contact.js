export default function() {
    const content = document.getElementById(`content`);
    const contactDiv = document.createElement(`div`);

    function createContactDiv() {
        contactDiv.setAttribute(`id`, `contactDiv`);


        const contactForm = document.createElement(`div`);
        contactForm.setAttribute(`id`, `contactForm`);

        function createHeader() {
            const contactHeader = document.createElement(`h2`);
            contactHeader.setAttribute(`id`, `contactHeader`);
            contactHeader.textContent = `Contact us`;
            contactForm.appendChild(contactHeader);
        }

        function createFirstDiv() {
            const inputDiv = document.createElement(`div`);
            inputDiv.classList.add(`inputDiv`);

            const para = document.createElement(`p`);
            para.textContent = `Your name:`;
            inputDiv.appendChild(para);

            const input = document.createElement(`input`);
            input.setAttribute(`type`, `text`);
            input.classList.add(`nameEmail`);
            inputDiv.appendChild(input);

            contactForm.appendChild(inputDiv);
        }

        function createSecondDiv() {
            const inputDiv = document.createElement(`div`);
            inputDiv.classList.add(`inputDiv`);

            const para = document.createElement(`p`);
            para.textContent = `Your Email:`;
            inputDiv.appendChild(para);

            const input = document.createElement(`input`);
            input.setAttribute(`type`, `email`);
            input.classList.add(`nameEmail`);
            inputDiv.appendChild(input);

            contactForm.appendChild(inputDiv);
        }

        function createThirdDiv() {
            const inputDiv = document.createElement(`div`);
            inputDiv.setAttribute(`id` ,`messageInput`);

            const para = document.createElement(`p`);
            para.textContent = `Message:`;
            inputDiv.appendChild(para);   
            
            const textArea = document.createElement(`textarea`);
            textArea.setAttribute(`id`, `message`)
            inputDiv.appendChild(textArea);

            contactForm.appendChild(inputDiv);
        }

        function createButton() {
            const btn = document.createElement(`button`);
            btn.setAttribute(`id`, `submitButton`);
            btn.textContent = `Submit`;
            btn.addEventListener(`mousedown`, () => {
                btn.classList.add(`click`);
            });
            btn.addEventListener(`mouseup`, () => {
                btn.classList.remove(`click`);
            })

            contactForm.appendChild(btn);
        }

        function create() {
            createHeader();
            createFirstDiv();
            createSecondDiv();
            createThirdDiv();
            createButton();

            contactDiv.appendChild(contactForm);
        }

        return create();
    }

    function loadMenu() {
        createContactDiv();
        content.appendChild(contactDiv);
    }

    return loadMenu();
}