const loadAbout = () => {


    
        const container = document.querySelector('#container');
        const pageContent = document.createElement('div');
        pageContent.classList.add('page-content');
        const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 123 456 789'

  const address = document.createElement('p')
  address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA'

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = '/home/linn/Restaurant-Page/images/images.jpeg'
  restaurantLocation.alt = 'Mozzafiato restaurant location'

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);
  pageContent.appendChild(contact);
        
    
    
        container.appendChild(pageContent);
    
}

export default loadAbout;