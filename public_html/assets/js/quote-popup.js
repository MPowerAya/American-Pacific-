document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('quote-modal');
  const closeBtn = document.querySelector('.modal-close');
  const iframe = document.getElementById('smartmoving-iframe');

  const baseUrl = "https://portal.smartmoving.com/embedded/?companyId=e91e46c9-4380-4d39-a04b-b1cc01294012&branchId=9a047235-280a-45d4-8e02-b1cc01294217&mode=short";

  // OPEN MODAL from calculate buttons
  document.querySelectorAll('.calculate-quote, .calculate-quote-2').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      iframe.src = baseUrl;
      modal.style.display = 'flex';
    });
  });

  // OPEN MODAL from form submit with ZIP values
  const zipForm = document.getElementById('zip-form');
  if (zipForm) {
    zipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const oldZip = document.getElementById('old-zip').value.trim();
      const newZip = document.getElementById('new-zip').value.trim();

      const finalUrl = `${baseUrl}&originPostalCode=${encodeURIComponent(oldZip)}&destinationPostalCode=${encodeURIComponent(newZip)}`;
      iframe.src = finalUrl;
      modal.style.display = 'flex';
    });
  }

  // CLOSE modal
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    iframe.src = "";
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      iframe.src = "";
    }
  });
});