export default function about () {
    const overlay = document.getElementById('about__overlay');

    let overlayDefault = true;

    function resetAnimation() {
        overlay.style.animation = 'none';
        overlay.offsetHeight;
        overlay.style.animation = null;
        overlay.removeEventListener('animationend', resetAnimation)
    }

    document.addEventListener('click', (e) => {
        if (!e.target.parentNode.classList.contains('about__button')) return;

        if (overlayDefault){
            overlay.style.animation = 'slide 0.3s ease-in-out forwards, warp 0.3s ease-in-out forwards';
            overlay.style.left = '50%';
        }else{
            overlay.style.animation = 'slide 0.3s ease-in-out reverse, warp 0.3s ease-in-out forwards';
            overlay.style.left = '0';
        }
        overlay.addEventListener('animationend', resetAnimation);
        overlayDefault = !overlayDefault;
    });
} 