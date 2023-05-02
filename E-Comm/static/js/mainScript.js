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
        const basketCount = document.getElementById('basketCount');
        const checkoutSymbol = document.getElementById('checkoutSymbol');

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
        
        checkoutSymbol.addEventListener('mouseover', () => {
            checkoutSymbol.style.cursor = 'pointer';
            checkoutSymbol.addEventListener('click', () => {
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

    // Sign in / Create account
        const signIn = document.getElementById('sign-in');
        const signInSymbol = document.getElementById('signInSymbol')
        signIn.addEventListener('mouseover', () => {
            signIn.style.cursor = 'pointer';
            signIn.addEventListener('click', () => {
                window.location.href = '/signIn'
            });
        });
        if (localStorage.getItem('loggedIn') === 'true') {
            signInSymbol.className = 'fas fa-sign-out-alt'
            signInSymbol.addEventListener('mouseover', () => {
                signInSymbol.style.cursor = 'pointer';
                signInSymbol.addEventListener('click', () => {
                    localStorage.setItem('loggedIn', 'false');
                    signInSymbol.className = 'fas fa-sign-in-alt'
                    alert('Logged out')
                    location.reload();
                });
            });
        } else if (localStorage.getItem('loggedIn') === 'false') {
            signInSymbol.className = 'fas fa-sign-in-alt'
            signInSymbol.addEventListener('mouseover', () => {
                signInSymbol.style.cursor = 'pointer';
                signInSymbol.addEventListener('click', () => {
                    window.location.href = '/signIn'
                    signInSymbol.className = 'fas fa-sign-out-alt'
                });
            });
        }
}

// Products
    handbag = {
        'title': 'Rose Handbag',
        'price': 67.99,
        'desc': 'Handbag description unavailable',
        'image': '/static/handbag.png',
        'quantity': 0,
        'discount': 0.75, // 25%
    }
    purse = {
        'title': 'Purse',
        'price': 42.00,
        'desc': 'Purse description unavailable',
        'image': '/static/purse.png',
        'quantity': 0,
        'discount': 0.95, // 5%
    }
    handbag2 = {
        'title': 'Tan Handbag',
        'price': 64.00,
        'desc': 'Handbag description unavailable',
        'image': '/static/handbag2.png',
        'quantity': 0,
        'discount': 0,
    }
    leatherJacket = {
        'title': 'Leather Jacket',
        'price': 128.00,
        'desc': 'Leather jacket description unavailable',
        'image': '/static/leather jacket.png',
        'quantity': 0,
        'discount': 0,
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

            // Leather Jacket
            listdesc[3].innerHTML = leatherJacket.desc;
            listimage[3].src = leatherJacket.image;
            listimage[3].width = 175;
            listtitle[3].innerHTML = leatherJacket.title;
            listprice[3].innerHTML = '$' + leatherJacket.price.toFixed(2);

        // Product event listeners
            // Handbag
            listimage[0].addEventListener('mouseover', () => {
                listimage[0].style.cursor = 'pointer';
                listimage[0].addEventListener('click', () => {
                    window.location.href = '/rose-handbag';
                });
            });

            // Purse
            listimage[1].addEventListener('mouseover', () => {
                listimage[1].style.cursor = 'pointer';
                listimage[1].addEventListener('click', () => {
                    window.location.href = '/purse';
                });
            });

            // Handbag2
            listimage[2].addEventListener('mouseover', () => {
                listimage[2].style.cursor = 'pointer';
                listimage[2].addEventListener('click', () => {
                    window.location.href = '/handbag2'
                });
            });

            // Leather Jacket
            listimage[3].addEventListener('mouseover', () => {
                listimage[3].style.cursor = 'pointer';
                listimage[3].addEventListener('click', () => {
                    window.location.href = '/leatherJacket'
                });
            });
    }



// Product page
    function product(itemQuantity, checkoutQuantity) {
    // Increase/decrease quantity (Add to Cart)
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

        // Add to cart and basket
            const basketCount = document.getElementById('basketCount');
            const addToCart = document.getElementById('addToCart');
            if (localStorage.getItem(itemQuantity) === null) {
                localStorage.setItem(itemQuantity, 0)
            }
            let itemQuantVar = localStorage.getItem(itemQuantity);

            addToCart.addEventListener('click', () => {

                let i = Number(localStorage.getItem('basketCount'))
                let ls = Number(i) + Number(quantityField.value)
                localStorage.setItem('basketCount', ls)
                basketCount.innerHTML = localStorage.getItem('basketCount');
                itemQuantVar = Number(itemQuantVar) + Number(quantityField.value);
                localStorage.setItem(itemQuantity, itemQuantVar);

                if (localStorage.getItem(checkoutQuantity) === null) {
                    localStorage.setItem(checkoutQuantity, itemQuantVar)
                }
                
            });
    }





    function checkout(itemQuantity, checkoutQuantity, itemTitle) {
        const checkoutList = document.getElementById('checkoutList')
        function cartUpdate(itemName, quantity) {
            const basketCount = document.getElementById('basketCount');
            var i = -1;
            var divContainer = document.createElement('div')

            // Checkout List Append
            for (var key in itemName) {
                i++;
                if (itemName.hasOwnProperty(key)) {
                    var listClass = ['list-titleC', 'list-priceC', 'list-descC', 'list-imageC', 'list-quantityC', 'list-discountC']
                    var listItem = document.createElement('li');
                    listItem.className = listClass[i]
                    if (listItem.className === 'list-titleC' || listItem.className === 'list-descC') {
                        listItem.innerHTML = itemName[key];
                    } else if (listItem.className === 'list-imageC') {

                    // Item image
                        var img = document.createElement('img');
                        img.src = itemName[key];
                        img.width = 175;
                        listItem.appendChild(img);

                    // Clear cart element and functions
                        var clearCart = document.createElement('div');
                        var clearCartLi = document.createElement('li');
                        clearCartLi.innerHTML = quantity;
                        clearCart.appendChild(clearCartLi);
                        clearCartLi.className = 'fas fa-trash-alt';
                        clearCart.className = 'checkout-single';
                        clearCart.addEventListener('click', () => {
                        // Total checkout price update
                            let checkoutTotalPrice1 = document.getElementById('checkoutTotalPrice');
                            let finale = localStorage.getItem('finalCheckoutPrice') - itemName.price;
                            localStorage.setItem('finalCheckoutPrice', finale);
                            checkoutTotalPrice1.innerHTML = 'Total: $' + finale.toFixed(2);
                        // Individual total item price update
                            if (localStorage.getItem(itemQuantity) > 1) {
                                let itemQ = localStorage.getItem(itemQuantity) - 1;

                                localStorage.setItem(itemQuantity, itemQ);
                                clearCartLi.innerHTML = itemQ;
                                let checkoutQ = localStorage.getItem(checkoutQuantity) - 1;
                                localStorage.setItem(checkoutQuantity, checkoutQ);
                                let basketCount2 = localStorage.getItem('basketCount') - 1;
                                basketCount.innerHTML = basketCount2;
                                localStorage.setItem('basketCount', basketCount2);
                            } else {

                                clearCart.parentNode.remove();
                                localStorage.setItem(itemQuantity, 0);
                                localStorage.removeItem(checkoutQuantity);
                                let basketCount2 = localStorage.getItem('basketCount') - 1;
                                basketCount.innerHTML = basketCount2;
                                localStorage.setItem('basketCount', basketCount2);
                            }   
                        });
                        divContainer.appendChild(clearCart);
                    } else if (listItem.className === 'list-priceC') {

                    // Price
                        var listItemPrice = '$' + itemName[key];
                        var listItemPriceElement = document.createElement('p');
                        listItemPriceElement.innerHTML = listItemPrice;
                        listItem.appendChild(listItemPriceElement);

                // Total Price
                    } else if (listItem.className === 'list-quantityC') {
                    var totalPrice = itemName.price * quantity;
                    var totalPriceD = 'Total: $' + totalPrice.toFixed(2);
                    const tPn = itemName.title;
                    listItem.innerHTML = totalPriceD;
                    clearCart.addEventListener('click', () => {
                        var totalPriceReduce = itemName.price * localStorage.getItem(itemQuantity);
                        var totalPriceReduce2 = 'Total: $' + totalPriceReduce.toFixed(2);
                        listItem.innerHTML = totalPriceReduce2;
                        localStorage.setItem(tPn, 0);
                    });
                    localStorage.setItem(tPn, totalPrice);
                    } else if (listItem.className === 'list-discountC') {
                        if (itemTitle.discount !== 0) {
                            alert(itemTitle.discount)
                        }
                    } else {
                        return;
                    }
                    divContainer.appendChild(listItem);
            
                    divContainer.style.height = '200px';
                }
                checkoutList.appendChild(divContainer);
            }

            // Update checkoutTotalPrice
            var checkoutTotalPrice = document.getElementById('checkoutTotalPrice');
            var checkoutTotalPriceNumber = Number(localStorage.getItem('Rose Handbag')) + Number(localStorage.getItem('Purse')) + Number(localStorage.getItem('Tan Handbag')) + Number(localStorage.getItem('Leather Jacket'));
            var checkoutTotalPriceStr = 'Total: $'+ checkoutTotalPriceNumber.toFixed(2);
            localStorage.setItem('finalCheckoutPrice', checkoutTotalPriceNumber);
            checkoutTotalPrice.innerHTML = checkoutTotalPriceStr;
        }
        
        // Actuate onPageLoad
        window.addEventListener('load', () => {
            if (localStorage.getItem(checkoutQuantity) === null) {
                return;
            } else if (localStorage.getItem(checkoutQuantity) !== null) {
                x = localStorage.getItem(itemQuantity);
                cartUpdate(itemTitle, Number(x));
            }
        }) 

        // Clear all items
        clearAllCheckout = document.getElementById('clearAllCheckout');
        clearAllCheckout.addEventListener('click', () => {
            localStorage.setItem('basketCount', 0);
            localStorage.setItem(itemQuantity, 0);
            localStorage.removeItem(checkoutQuantity);
            basketCount.innerHTML = 0;
            checkoutList.innerHTML = '';
        });
        const proceedToCheckoutQnt = localStorage.getItem('basketCount');
        const checkoutBtn = document.getElementById('checkoutBtn');
        checkoutBtn.innerHTML = 'Proceed to payment (' + proceedToCheckoutQnt + ' items)';
        checkoutBtn.addEventListener('click', () => {
            window.location.pathname = '/payment';
        })
    }

function createAccount() {
    function isEmail(input) {
        // Regular expression for matching email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Return true if input matches email format, false otherwise
        return emailRegex.test(input);
    }
    const signUpBtn = document.getElementById('signUpBtn');
    signUpBtn.addEventListener('click', function() {
        // Get the values of the email and password fields
        var email = document.getElementById("emailUp").value;
        var password = document.getElementById("passwordUp").value;

        if (isEmail(email)) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("You have successfully created an account!");

        window.location.href = '/signIn';
        } else {
            alert("Email invalid")
        }


    });
}

function signIn() {
    const signInBtn = document.getElementById('signInBtn')
    signInBtn.addEventListener('click', function() {
        var email = localStorage.getItem('email');
        var password = localStorage.getItem('password');
        

        if (document.getElementById('emailIn').value === email && document.getElementById('passwordIn').value === password) {
            const signInSymbol = document.getElementById('signInSymbol')
            signInSymbol.className = 'fas fa-sign-out-alt'
            localStorage.setItem('loggedIn', 'true');
            window.location.href = '/';
        } else {
            alert('Incorrect username or password')
        }
    });
}




// Initialize
if (window.location.pathname === '/') {
    universal() 
    main()
}

if (window.location.pathname === '/checkout') {
    universal()
    if (localStorage.getItem('handbagQuantity') !== null) {
        checkout('handbagQuantity', 'handbagCheckOut', handbag)
    }
    if (localStorage.getItem('purseQuantity') !== null) {
        checkout('purseQuantity', 'purseCheckOut', purse)
    }
    if (localStorage.getItem('handbag2Quantity') !== null) {
        checkout('handbag2Quantity', 'handbag2CheckOut', handbag2)
    }
    if (localStorage.getItem('leatherJacketQuantity') !== null) {
        checkout('leatherJacketQuantity', 'leatherJacketCheckout', leatherJacket)
    }
}

if (window.location.pathname === '/payment') {
    universal()
    payment()
}

if (window.location.pathname === '/signIn') {
    universal()
    signIn()
}

if (window.location.pathname === '/createAccount') {
    universal()
    createAccount()
}


// Products 

if (window.location.pathname === '/rose-handbag') {
    universal()
    product('handbagQuantity', 'handbagCheckOut')
}

if (window.location.pathname === '/purse') {
    universal()
    product('purseQuantity', 'purseCheckOut')
}

if (window.location.pathname === '/handbag2') {
    universal()
    product('handbag2Quantity', 'handbag2CheckOut')
}

if (window.location.pathname === '/leatherJacket') {
    universal()
    product('leatherJacketQuantity', 'leatherJacketCheckout')
}

});
