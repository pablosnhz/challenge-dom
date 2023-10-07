const hamburgerIcon = document.querySelector('.nav__hamburguer');
const navOverlay = document.querySelector('.nav__overlay')
let currentDropdown = navOverlay;


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
            if(!isActive(subMenu, 'nav__inner--show')){
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav__inner--show');

            currentDropdown = subMenu;
        }

    }
})

function isActive(element, string){
    return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown){
    if(isActive(currentDropdown, 'nav__inner--show')){
        currentDropdown.classList.remove('nav__inner--show');
    }
}

//cierra el menu cuando el tamano es mayor que 768, height reset
window.addEventListener('resize', ()=> {
    closeDropdown(currentElement);

    if(window.innerWidth > 768){
        const navInners = document.querySelectorAll('.nav__inner');

        navInners.forEach(navInner => {
            navInner.style.height = '';
        })
    }
})