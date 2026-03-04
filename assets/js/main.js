document.querySelectorAll('[data-current-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const devisModal = document.getElementById('devis-popup');
if (devisModal) {
  const closeModal = () => {
    devisModal.classList.remove('is-open');
    devisModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  document.querySelectorAll('[data-devis-open]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      devisModal.classList.add('is-open');
      devisModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    });
  });

  devisModal.querySelectorAll('[data-devis-close]').forEach((closer) => {
    closer.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && devisModal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

if (window.jQuery) {
  $(function () {
    const $header = $('header');
    $(window).on('scroll', function () {
      $header.toggleClass('is-scrolled', $(window).scrollTop() > 8);
    });

    $('.button, .cta, .realisation-card').on('mouseenter', function () {
      $(this).css('transform', 'translateY(-1px)');
    }).on('mouseleave', function () {
      $(this).css('transform', 'translateY(0)');
    });
  });
}
