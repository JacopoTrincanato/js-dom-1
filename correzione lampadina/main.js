const lamp = document.querySelector('.off-lightbulb')

const button = document.querySelector('button')

//console.log(lamp, button);


button.addEventListener('click', function () { 
    console.log(this);
    //console.log(lamp.src);
    

    console.log(lamp.getAttribute('src'), lamp.getAttribute('src').includes('yellow'));
    const isOn = lamp.getAttribute('src').includes('yellow');
    console.log(isOn);
    

    if(isOn){
        lamp.src = './white_lamp.png';
        this.innerText = 'Accendi';
    }else{
        lamp.src = './yellow_lamp.png';
        this.innerText = 'Spegni';
    }
})