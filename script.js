'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i =0; i< btnShowModal.length; i++){
    btnShowModal[i].addEventListener('click' , openModal)
};



btnCloseModal.addEventListener('click' , closeModal)

overlay.addEventListener('click' , closeModal) //why we didnt cal the function like closemodal() ?? bcz if we write like that, the js will excecute it immediatly when our live code run.

document.addEventListener('keydown' , function(e){
    // console.log(modal.classList.contains('hidden')); 
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
