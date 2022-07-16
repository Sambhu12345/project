const modal = document.querySelector('#modal');
const openmodal = document.querySelector('#modal-op');
const closemodal = document.querySelector('#close-modal');

openmodal.addEventListener('click', () => {
    modal.showModal();
})
closemodal.addEventListener('click', () => {
    modal.close();
})