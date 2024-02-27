export default function ui() {
    /* theme button */
    const button = document.getElementById('theme-button');
    const root = document.querySelector(':root');
    
    if (localStorage.getItem('darkTheme') === 'true') {
        setDark();
    }

    if (localStorage.getItem('darkTheme') === null) {
        setDark();
        localStorage.setItem('darkTheme', true);
    }

    function setDark () {
        root.style.setProperty('--clr-dark', 'var(--clr-lt)');
        root.style.setProperty('--clr-light', 'var(--clr-dk)');
        root.style.setProperty('--clr-shadow', 'var(--clr-shadow-dk)');
        root.style.setProperty('--clr-card', 'var(--clr-800)');
    }

    function setLight () {
        root.style.setProperty('--clr-dark', 'var(--clr-dk)');
            root.style.setProperty('--clr-light', 'var(--clr-lt)');
            root.style.setProperty('--clr-shadow', 'var(--clr-shadow-lt)');
            root.style.setProperty('--clr-card', 'var(--clr-lt)');
    }

    function toggleTheme () {
        if (localStorage.getItem('darkTheme') === 'false') {
            localStorage.setItem('darkTheme', true);
            setDark();
        } else {
            localStorage.setItem('darkTheme', false);
            setLight();
        }    
    }

    function resetButton() {
        button.style.animation = 'none';
        button.offsetHeight;
        button.style.animation = null;
        button.removeEventListener('animationend', resetButton)
    }

    button.addEventListener('click', () => {
        toggleTheme();
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
            labelOverlay.style.background = 'var(--clr-light)';
        }
        labelOverlay.style.animation = 'typewriter var(--typing-speed) steps(var(--label-maxchars)) forwards';
        labelOverlay.addEventListener('animationend', resetLabel);
        prevNode = e.target;
    })
}