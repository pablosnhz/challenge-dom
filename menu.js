const hamburgerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay')


hamburgerIcon.addEventListener('click', ()=> {
    hamburgerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show');
})

navOverlay.addEventListener('click', (e) => {
    const currentElement = e.target;
    e.preventDefault();
    //console.log(e.target.classList.value);

    if(isActive(currentElement, 'nav__parent') ){
        
        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);

        if(window.innerWidth < 768){

            let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${height}px`;

        }else{

        }

    }
})

function isActive(element, string){
    return element.classList.value.includes(string);
}
