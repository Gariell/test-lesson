

document.addEventListener("DOMContentLoaded", function(event) {
 
  const footerCatalogs = document.querySelectorAll('.footer-catalog');

  footerCatalogs.forEach((footerCatalog) => {
    const footerSelect = footerCatalog.querySelector('.footer-catalog-list');
    const footerSelectBtn = footerCatalog.querySelector('.footer-select-btn');
    const footerSelectIcon = footerCatalog.querySelector('.footer-select-btn__icon');

    footerSelectBtn.addEventListener('click', function() {
      footerSelect.classList.toggle('footer-catalog-list_noactive');
      footerSelectIcon.classList.toggle('rotate');
    });
  })

  
});