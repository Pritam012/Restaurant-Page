import loadHome from "./modules/home";
import loadAbout from "./modules/about";
import loadMenu from "./modules/menu";

function loadPage () {
    const container = document.querySelector('#container');

    const button1 = document.createElement('button');
    button1.textContent = "Home";

    const button2 = document.createElement('button');
    button2.textContent = "About";

    const button3 = document.createElement('button');
    button2.textContent = "Menu";

    button1.addEventListener('click' , () => {
        clearContent();
        loadHome();
    })

    button2.addEventListener('click' , () => {
        clearContent();
        loadAbout();
    })
    button3.addEventListener('click' , () => {
        clearContent();
        loadMenu();
    })


    
  


   container.appendChild(button1);
   container.appendChild(button2);
   container.appendChild(button3);
}

function clearContent () {
    const content = document.querySelector('#container');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) 
        {content.removeChild(pageContent);
        }
}

export default loadPage;