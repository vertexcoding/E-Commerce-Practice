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
    basketCount.innerHTML = localStorage.getItem('itemsInCart');
    
    basketCount.addEventListener('mouseover', () => {
        basketCount.style.cursor = 'pointer';
        basketCount.addEventListener('click', () => {
            window.location.href = '/checkout'
        });
    });

    if (localStorage.getItem('handbagCheckOut') === null) {
        handbagQuantity = 0;
    } else {
        handbagQuantity = localStorage.getItem('handbagCheckOut');
    }
    if (localStorage.getItem('basketCount') === null) {
        basketCount.innerHTML = 0;
        localStorage.setItem('basketCount', 0);
    } else {
        basketCount.innerHTML = localStorage.getItem('basketCount');
    }
}

// Products
handbag = {
    'title': 'Rose Handbag',
    'price': 67.99,
    'desc': 'Handbag description unavailable',
    'image': '/static/handbag.png',
}
purse = {
    'title': 'Tan Purse',
    'price': 42.00,
    'desc': 'Purse description unavailable',
    'image': '/static/purse.png',
}
handbag2 = {
    'title': 'Tan Handbag',
    'price': 64.00,
    'desc': 'Handbag description unavailable',
    'image': '/static/handbag2.png',
}



// Main page
    function main() {
    // Add to basket

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

        localStorage.setItem('handbagC', JSON.stringify(handbag));

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

        basketCount = document.getElementById('basketCount');
        addToCart = document.getElementById('addToCart');

        addToCart.addEventListener('click', () => {

            let i = Number(localStorage.getItem('basketCount'))
            let ls = Number(i) + Number(quantityField.value)
            localStorage.setItem('basketCount', ls)
            basketCount.innerHTML = localStorage.getItem('basketCount');
            Number(handbagQuantity) = Number(handbagQuantity) + Number(quantityValue);
            localStorage.setItem('handbagCheckOut', handbagQuantity);
            
        });
    }




    // Add to cart
    const checkoutList = document.getElementById('checkoutList');
    
    function checkout() {
        function cartUpdate(itemName) {
            var i = -1;
            var divContainer = document.createElement('div')
            // Checkout List Append
            for (var key in itemName) {
                i++;
                if (itemName.hasOwnProperty(key)) {
                    var listClass = ['list-titleC', 'list-priceC', 'list-descC', 'list-imageC']
                    var listItem = document.createElement('li');
                    listItem.className = listClass[i]
                    if (listItem.className !== 'list-imageC' && listItem.className !== 'list-priceC') {
                        listItem.innerHTML = itemName[key];
                    } else if (listItem.className === 'list-imageC') {
                    // Item image
                        var img = document.createElement('img');
                        img.src = itemName[key];
                        img.width = 175;
                        listItem.appendChild(img);
                    // Clear cart symbol
                        var clearCart = document.createElement('div');
                        var clearCartLi = document.createElement('li');
                        clearCart.appendChild(clearCartLi);
                        clearCartLi.className = 'fas fa-trash-alt';
                        clearCart.className = 'checkout-single';
                        clearCart.addEventListener('click', () => {
                            clearCart.parentNode.remove();
                        });
                        divContainer.appendChild(clearCart);
                    } else if (listItem.className === 'list-priceC') {
                    // Price
                        var listItemPrice = '$' + itemName[key];
                        var listItemPriceElement = document.createElement('p');
                        listItemPriceElement.innerHTML = listItemPrice;
                        listItem.appendChild(listItemPriceElement);
                    }
                    divContainer.appendChild(listItem);
            
                    divContainer.style.height = '200px';
                }
                checkoutList.appendChild(divContainer);
            }
        }
        cartUpdate(handbag)
        cartUpdate(purse)
/*         window.addEventListener('load', () => {
            if (localStorage.getItem('handbagCheckOut') === null) {
                return;
            } else if (localStorage.getItem('handbagCheckOut') === '1') {
                cartUpdate(handbag)
            }
        }) */

        // Clear all items
        clearAllCheckout = document.getElementById('clearAllCheckout');
        clearAllCheckout.addEventListener('click', () => {
            localStorage.setItem('basketCount', 0)
            basketCount.innerHTML = 0;
        })
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
