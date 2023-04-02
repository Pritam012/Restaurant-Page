const loadHome = () => {
    const container = document.querySelector('#container');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const homeC = document.createElement('div');
    homeC.classList.add('homeC');
    // pageContent.textContent = "this is the home page!!";
    const images = document.createElement('div');
    images.classList.add('images');
    const chefImage = document.createElement("img");
    chefImage.src = "/home/linn/Restaurant-Page/images/chef.png";
    chefImage.alt = "Chef";
    chefImage.style.cssText = "border-radius: 50%;";
    chefImage.style.height = '250px';
    chefImage.style.width = '250px';
    

    pageContent.addEventListener('mouseover', () => {
        chefImage.src = "/home/linn/Restaurant-Page/images/pizza-home.jpeg";
        chefImage.alt = "Chef-hover";
        chefImage.style.cssText = "border-radius: 50%;";
        chefImage.style.height = '250px';
        chefImage.style.width = '250px';
        
    })
    pageContent.addEventListener('mouseleave', () => {
        chefImage.src = "/images/chef.png";
        chefImage.alt = "Chef-hover";
        chefImage.style.cssText = "border-radius: 50%;";
        chefImage.style.height = '250px';
        chefImage.style.width = '250px';
        
    })
  
    
    homeC.appendChild(createParagraph("Best pizza in your country"));
    homeC.appendChild(createParagraph("Made with passion since 1908"));
    homeC.appendChild(images);
    pageContent.appendChild(homeC);
    images.appendChild(chefImage);
    homeC.appendChild(createParagraph("Order online or visit us!"));
  
     container.appendChild(pageContent);
    
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  

export default loadHome;