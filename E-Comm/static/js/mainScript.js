// Main
document.addEventListener("DOMContentLoaded", () => {


// All pages
    function universal() {
    // Toggle Dark & Light mode.
    const body = document.querySelector('body');
    const titleBackground = document.querySelector('#title');
    const dropDownIcon = document.getElementsByClassName('line');
    const appearanceButton = document.getElementById('appearance');

    function appearance(backgroundColor1, fontColor, titleBackground, titleBackgroundColor, dropDownColor, buttonINNERHTML) {
    body.style.backgroundColor = backgroundColor1;
    body.style.color = fontColor;
    titleBackground.style.backgroundColor = titleBackgroundColor;
    appearanceButton.innerHTML = buttonINNERHTML;

    for (let i = 0; i < dropDownIcon.length; i++) {
        dropDownIcon[i].style.backgroundColor = dropDownColor
    }
    }

    if (localStorage.getItem('appearance') === 'darkMode') {
        darkMode()
    } else {
        lightMode()
    }

    function darkMode() {
        appearance('rgb(21, 21, 21)', 'rgb(219, 219, 219)', titleBackground, 'rgb(40, 40, 40)', 'rgb(219, 219, 219)', 'Light Mode')
    }

    function lightMode() {
        appearance('rgb(219, 219, 219)', 'rgb(21, 21, 21)', titleBackground, 'rgb(180, 180, 180)', 'rgb(21, 21, 21)', 'Dark Mode')
    }

    appearanceButton.addEventListener('click', () => {
        if (appearanceButton.innerHTML === 'Light Mode') {
            lightMode() 
            appearanceButton.innerHTML = ('Dark Mode')
            localStorage.setItem('appearance', 'lightMode')
        } else {
            darkMode()
            appearanceButton.innerHTML = ('Light Mode')
            localStorage.setItem('appearance', 'darkMode')
        }
    });

    // Drop down menu
    const menuIcon = document.querySelector('.menu-icon');
    const menuItems = document.querySelector('.menu-items');
    const home = document.getElementById('home');
    const basketCount = document.getElementById('basketCount')

    menuIcon.addEventListener('click', function() {
        menuItems.classList.toggle('show');
    });
    home.addEventListener('mouseover', () => {
        home.style.cursor = 'pointer';
        home.addEventListener('click', () => {
            window.location.href = '/'
        });
    });
    
    // Basket Count
    
    basketCount.addEventListener('mouseover', () => {
        basketCount.style.cursor = 'pointer';
        basketCount.addEventListener('click', () => {
            window.location.href = '/checkout'
        });
    });
}



// Main page
    function main() {
    // Add to basket
        handbag = {
            'title': 'Rose Handbag',
            'price': 67.99,
            'desc': 'Handbag description unavailable',
            'image': '/static/handbag.png',
        }
        localStorage.setItem('handbag', JSON.stringify(handbag));
        purse = {
            'title': 'Tan Purse',
            'price': 42.00,
            'desc': 'Purse description unavailable',
            'image': '/static/purse.png',
        }
        localStorage.setItem('purse', JSON.stringify(purse));
        handbag2 = {
            'title': 'Tan Handbag',
            'price': 64.00,
            'desc': 'Handbag description unavailable',
            'image': '/static/handbag2.png',
        }

        const listitem = document.getElementsByClassName('list-item');
        const listimage = document.getElementsByClassName('list-image');
        const listtitle = document.getElementsByClassName('list-title');
        const listdesc = document.getElementsByClassName('list-desc');
        const listprice = document.getElementsByClassName('list-price');


    // Allocating product information
        // Handbag
        listdesc[0].innerHTML = handbag.desc;
        listimage[0].src = handbag.image;
        listimage[0].width = 200;
        listtitle[0].innerHTML = handbag.title;
        listprice[0].innerHTML = '$' + handbag.price.toFixed(2);

        localStorage.setItem('handbag', JSON.stringify(handbag));

        // Purse
        listdesc[1].innerHTML = purse.desc;
        listimage[1].src = purse.image;
        listimage[1].width = 200;
        listtitle[1].innerHTML = purse.title;
        listprice[1].innerHTML = '$' + purse.price.toFixed(2);

        // Handbag2
        listdesc[2].innerHTML = handbag2.desc;
        listimage[2].src = handbag2.image;
        listimage[2].width = 175;
        listtitle[2].innerHTML = handbag2.title;
        listprice[2].innerHTML = '$' + handbag2.price.toFixed(2);

        // Product event listeners
        listimage[0].addEventListener('mouseover', () => {
            listimage[0].style.cursor = 'pointer';
            listimage[0].addEventListener('click', () => {
                window.location.href = '/rose-handbag'
            });
        });
    }



// Product page
    function product() {
    // Increase quantity
    var quantityField = document.getElementById("quantity");
        function increaseQuantity() {
            var quantityValue = parseInt(quantityField.value);
            quantityField.value = quantityValue + 1;
        }
        function decreaseQuantity() {
            var quantityValue = parseInt(quantityField.value);
            if (quantityValue > 1) {
                quantityField.value = quantityValue - 1;
            }
        }
        increase = document.getElementById('increaseQuantBtn')
        decrease = document.getElementById('decreaseQuantBtn')
        increase.addEventListener('click', () => {
            increaseQuantity()
        });
        decrease.addEventListener('click', () => {
            decreaseQuantity()
        });

    // Add to cart
    handbagSerialized = localStorage.getItem('handbag');
    handbagDeserialized = JSON.parse(handbagSerialized);

    let itemsInCart = [];
    addToCart = document.getElementById('addToCart');
    addToCart.addEventListener('click', () => {
        const quantityValue = parseInt(quantityField.value);
        itemsInCart.push(quantityValue);
        const totalItemsInCart = itemsInCart.reduce((total, quantity) => total + quantity, 0);
        localStorage.setItem('itemsInCart', JSON.stringify(totalItemsInCart));
        basketCount.innerHTML = localStorage.getItem('itemsInCart');
    });
    }

// Checkout page
    function checkout() {
        
        // Get items from local storage
        handbagSerialized = localStorage.getItem('handbag');
        const handbagDeserialized = JSON.parse(handbagSerialized);

        purseSerialized = localStorage.getItem('purse');
        const purseDeserialized = JSON.parse(purseSerialized);

        // CheckoutListItem = <ul> - checkoutList = <li>
        var checkoutListItem = document.getElementById('checkoutListItem');
        var checkoutList = document.getElementById('checkoutList');

        // Adding Items to checkout page by extracting JSON Hashmap Values and appending them to a UL
        function cartUpdate(itemName) {
            i = 0;
            for (var key in itemName) {
                if (itemName.hasOwnProperty(key)) {
                    var listClass = ['list-title', 'list-price', 'list-desc', 'list-image']
                    i++;
                    var listItem = document.createElement('li');
                    listItem.className = listClass[i]
                    listItem.innerHTML = itemName[key];
                    checkoutList.appendChild(listItem);
                }
            }
        }
        
        // Call the function
        cartUpdate(handbagDeserialized);
        cartUpdate(purseDeserialized);

    }




// Initialize
if (window.location.pathname === '/') {
    universal()
    main()
}
if (window.location.pathname === '/rose-handbag') {
    universal()
    product()
}
if (window.location.pathname === '/checkout') {
    universal()
    checkout()
}

    
});

