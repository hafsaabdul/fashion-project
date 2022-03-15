// the next butto which isnt working 
const productContainer = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const pretBtn = [...document.querySelectorAll('.pre-btn')];

productContainer.forEach((item,i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollleft += containerWidth;
    })
    pretBtn[i].addEventListener('click', () =>{
        item.scrollleft -= containerWidth;
    })
})

// black and white on the screen
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('.fa-sun');
    if(themeToggler.classList.contains('.fa-sun')){
        document.querySelector('body').classList.add('active');}
        else{
            document.querySelector('body').classList.remove('active');
        }
}

// the product page the 1st slide to be able to change the image ,,,, and its not working 
const productImages = document.querySelectorAll('.product-images');
const productImageSlide = document.querySelector('.image-slider');

let activeImageSlide = 0;

productImages.forEach((item,i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = 'url(';$;{item.src}')';
        activeImageSlide = i;
    })
})


// the size buttons 
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click',() => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})

// for the featured images 
document.querySelectorAll('.small-image-1').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-1').src =amages.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-2').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-2').src =amages.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-3').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-3').src =amages.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-4').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-4').src =amages.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-5').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-5').src =amages.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-6').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-6').src =amages.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-7').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-7').src =amages.getAttribute('src');
    }
});
document.querySelectorAll('.small-image-8').forEach(amages => {
    amages.onclick = () => {
        document.querySelector('.big-image-8').src =amages.getAttribute('src');
    }
})

