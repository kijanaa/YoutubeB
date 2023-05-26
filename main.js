const icone = document.querySelector('i')
console.log(icone);


icone.addEventListener('click', function () {
    console.log('icone cliked');

const btnButton = document.querySelector('.btn') 
console.log(btnButton);   

btnButton.addEventListener('click', function () {
    console.log('bouton clicked');
    btnButton.innerText = 'Abonné';
})

    icone.classList.toggle('fa-smile-wink');
    icone.classList.toggle('happy'); 
})


