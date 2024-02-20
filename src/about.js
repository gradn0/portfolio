export default function about () {
    const card = document.getElementById('about__card');
    let flipped = false;

    document.addEventListener('click', (e) => {
        console.log(e.target);
        if(!e.target.classList.contains('flip-button')) return;
        if(!flipped){
            card.style.transform = 'rotateY(180deg)';
            flipped = true;
        }else{
            card.style.transform = 'rotateY(0deg)';
            flipped = false;
        }
        
    })
} 