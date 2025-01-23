// toggle
const navbarNav = document.querySelector('.nav-link');
const Menu = document.querySelector('#menu');


// kondisi ketika click di logo menu
document.querySelector('#menu').onclick=()=>{
navbarNav.classList.toggle('active');
};

// kondisis ketika click di luar logo menu
document.addEventListener('click', function(e){
if (!Menu.contains(e.target)&&(!navbarNav.contains(e.target))){ {
    navbarNav.classList.remove('active'); 
}
}
})
