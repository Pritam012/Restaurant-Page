const loadHome = () => {
    const container = document.querySelector('#container');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.textContent = "this is the home page!!";
    


    container.appendChild(pageContent);
}

export default loadHome;