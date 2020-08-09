const navSlide = () => {
    const framework = document.querySelector('.framework');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   
    framework.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animate Links
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            } else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //framework animation
        framework.classList.toggle('toggle');
    });
    
}

navSlide();