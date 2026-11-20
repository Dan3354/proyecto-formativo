const hamburgerBtn= document.getElementById('hamburger-b tn');
const navlinks= document.getElementById('navlinks');

// Alternar la clase 'active' al hecer clic en la hamburguesa
hamburgerBtn.addEventListener('click' , ()=> {
    navlinks.classList.toggle('active');
});

//opcional: cerrar el menu automaticamente al hacer clic en cualquier enlace
document.querySelectorAll('.nav-links a') .forEach(link =>{
link.eddEventlistener('clinck',() =>{
    navlinks.classList.remove('active');
});
});