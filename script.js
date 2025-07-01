
  
  const fullModal = document.getElementById("fullFormModal");
  const bookBtn = document.getElementById("bookAppointment"); // your navbar button
  const closeFull = document.getElementsByClassName("close-full")[0];

  // Show modal on button click
  bookBtn.onclick = function() {
    fullModal.style.display = "block";
  }

  // Close modal when 'x' clicked
  closeFull.onclick = function() {
    fullModal.style.display = "none";
  }

  // Close modal if clicked outside
  window.onclick = function(event) {
    if (event.target == fullModal) {
      fullModal.style.display = "none";
    }
  }
