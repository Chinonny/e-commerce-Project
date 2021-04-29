window.addEventListener("scroll", () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-list');
const iconToggle = document.querySelector('.icon-toggle');
const ulList = document.querySelector('.list-dropdown');
const mega = document.querySelector('.mega');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mega.classList.toggle('mega-active');
});

iconToggle.addEventListener('click', () => {
    ulList.classList.toggle('active');
});

//toggle nav-link

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", linkAction));

function linkAction() {
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");


//remove mobile menu
const navList = document.querySelector(".nav-list");
navList.classList.remove("show");    

}


//bags image carousel
let slideIndex = 0;


const carousel = () => {
    let i;
    const slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } 
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
};
//glideshow carousel
carousel();

const glide = document.getElementById("glide1")

if(glide)
new Glide(glide, {
    type: "carousel",
    startAt: 0,
    perView: 5,
    hoverPause: false,
    animationDuration: 800,
    autoplay: 1000,
    breakpoints: {
        1200: {
            perView: 3,
        },
        768: {
            perView: 2,
        },
        567: {
            perView: 1,
        }
    }
}).mount();


//select cart div
let cart = document.querySelector('.cart-icon');
let select = document.querySelector('.select');
let button = document.querySelectorAll('.add-cartbtn');

for (b of button) {
    b.addEventListener('click', (e) => {
        const addOne = Number(cart.getAttribute('data-count') || 0);
        cart.setAttribute('data-count', addOne + 1);
        cart.classList.add('count');
        
      /*  //toggle addtocart btn
        if (b.innerHTML === "Add to Cart") {
            b.innerHTML = "Added to Cart";
        } else {
            b.innerHTML = "Add to Cart"
        }   */
  //copy and paste elements
  const parent = e.target.parentNode;
  const clone = parent.cloneNode(true);
  select.appendChild(clone);
  clone.lastElementChild.innerText = 'Buy Now';
    if (clone) {
        cart.onclick = () => {
            select.classList.toggle('display');
        }
    }
        
    });
    
}

let cartBtn = document.querySelectorAll('.add-cartbtn');

cartBtn.forEach(n => n.addEventListener("click", toggleText));

   function toggleText() {
        if (this.innerHTML === "Add to Cart") {
            this.innerHTML = "Added to Cart";
        } else {
                this.innerHTML = "Add to Cart";
            } 
        }

    //set and clear interval
     function removeAdded() {
        if (this.innerHTML === 'Added to Cart') {
            return this.innerHTML = 'Add to Cart';
    } else {

    }
}    
      
    
      
   
   