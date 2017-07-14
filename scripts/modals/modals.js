const modalComponent = () => {
  const modalTriggers = document.querySelectorAll('[data-trigger=modal]');
  
  if (modalTriggers) {
    for (const modalTrigger of modalTriggers) {
      modalTrigger.addEventListener('click', e => {
        const opts = e.target.dataset
        const targetModal = document.querySelector(`[data-id=${opts.targetModal}]`);

        targetModal.classList.toggle('modal-show');
        document.querySelector('[data-id=overlay]').classList.toggle('hide');

        /**
         * Get buttons that close modal
         * Close modal on click event
        **/
        const closeBtn = targetModal.querySelectorAll('[data-modal-close]');

        for (const btn of closeBtn) {
          btn.addEventListener('click', () => {
            targetModal.classList.toggle('modal-show');
            document.querySelector('[data-id=overlay]').classList.toggle('hide');
          });
        }
      });
    }
  }
}

export default modalComponent;