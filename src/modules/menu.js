const loadMenu = () => {
    const container = document.querySelector('#container');
        const pageContent = document.createElement('div');
        pageContent.classList.add('page-content');
        // pageContent.textContent = "this is the menu page!!";
        const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Salsiccia",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Gamberi",
      "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepe",
      "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Disgustoso",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Colorato",
      "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pomodoro",
      "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Crema",
      "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Carne",
      "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    )
  );

    
        pageContent.appendChild(menu);
        container.appendChild(pageContent);
    
}

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = ` ../images/pizzas/${name.toLowerCase()}.png`;
    foodImage.alt = `${name}`;
   
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
}

export default loadMenu;