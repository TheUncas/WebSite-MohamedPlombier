document.querySelectorAll('[data-current-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

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
