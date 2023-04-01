const loadAbout = () => {


    
        const container = document.querySelector('#container');
        const pageContent = document.createElement('div');
        pageContent.classList.add('page-content');
        pageContent.textContent = "this is the about page!!";
        
    
    
        container.appendChild(pageContent);
    
}

export default loadAbout;