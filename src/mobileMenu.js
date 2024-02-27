export default function mobileMenu () {
    const button = document.getElementById('hamburger');
    const menu = document.getElementById('mobile-menu')

    let isOpen = false;

    const open = () => {
        menu.classList.remove('mobile-hidden');
        document.body.style.overflowY = 'hidden';
        isOpen = true;
    }
    const close = () => {
        menu.classList.add('mobile-hidden');
        document.body.style.overflowY = 'scroll';
        isOpen = false;
        menu.removeEventListener('animationend', close);
    }

    button.addEventListener('click', () => {
        if (!isOpen){
            open();
            menu.style.animation = 'slideIn 150ms forwards';
        }else{
            menu.style.animation = 'slideOut 150ms forwards';
            menu.addEventListener('animationend', close)
        } 
        document.addEventListener('click', (e) => {
            if (e.target.className === 'header__link' || e.target.id === 'mobile-button' || e.target.id === 'logo'){
                console.log(e.target.id)
                close();
            }
        })

    })



}