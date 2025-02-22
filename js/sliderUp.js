(function(){
    const sliders = [...document.querySelectorAll('.objetivos_text')];
    const buttonUp = document.querySelector('#up');
    const buttonDown = document.querySelector('#down');
    let value;

    buttonUp.addEventListener('click',()=>{
        changePosition(-1);
    })

    buttonDown.addEventListener('click',()=>{
        changePosition(1);
    })

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.objetivos_text--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('objetivos_text--show');
        
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('objetivos_text--show');
        console.log(value);
    }


})();