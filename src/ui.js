export default function ui() {
    /* theme button */
    const button = document.getElementById('theme-button');

    function resetButton() {
        button.style.animation = 'none';
        button.offsetHeight;
        button.style.animation = null;
        button.removeEventListener('animationend', resetButton)
    }

    button.addEventListener('click', () => {
        button.style.animation = 'fastrotate 0.8s ease-in-out forwards';
        button.addEventListener('animationend', resetButton);
    })

    /* hover node */
    const label = document.querySelector('.skill-text');
    const labelOverlay = document.querySelector('.skills-text-overlay');
    let prevNode;

    function getText(element){
        const url = element.target.src;
        const text = url.split('/')[5].slice(0,-3);
        document.documentElement.style.setProperty('--label-maxchars', text.length);
        return text;
    }

    function resetLabel() {
        labelOverlay.style.background = 'transparent';
        labelOverlay.style.animation = 'none';
        labelOverlay.offsetHeight;
        labelOverlay.style.animation = null;
        labelOverlay.removeEventListener('animationend', resetLabel)
    }
    
    document.addEventListener('mouseover', e => {
        if(e.target.className !== 'node-img') return;

        /* Change Label */
        const labelText = getText(e);
        label.textContent = labelText;

        /* Animate */
        if (prevNode === undefined || e.target.src !== prevNode.src){
            resetLabel();
            labelOverlay.style.background = 'white';
        }
        labelOverlay.style.animation = 'typewriter var(--typing-speed) steps(var(--label-maxchars)) forwards';
        labelOverlay.addEventListener('animationend', resetLabel);
        prevNode = e.target;
    })
}