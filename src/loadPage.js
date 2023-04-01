import loadHome from "./modules/home";
import loadAbout from "./modules/about";
import loadMenu from "./modules/menu";

function loadPage () {
    const container = document.querySelector('#container');
    const butt = document.createElement('div');
    butt.classList.add('button-container');
    const button1 = document.createElement('div');
    button1.textContent = "Home";

    const button2 = document.createElement('div');
    button2.textContent = "Menu";

    const button3 = document.createElement('div');
    button3.textContent = "About";

    // for styling
    button1.classList.add('button');
    button2.classList.add('button');
    button3.classList.add('button');

    button1.addEventListener('click' , () => {
        clearContent();
        loadHome();
    })

    button2.addEventListener('click' , () => {
        clearContent();
        loadMenu();
    })
    button3.addEventListener('click' , () => {
        clearContent();
        loadAbout();
    })


    
  


   butt.appendChild(button1);
   butt.appendChild(button2);
   butt.appendChild(button3);
   container.appendChild(butt);
}


//clears the content 
function clearContent () {
    const content = document.querySelector('#container');
    const pageContent = document.querySelector('.page-content');
    if (pageContent) 
        {content.removeChild(pageContent);
        }
}

export default loadPage;