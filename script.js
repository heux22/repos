

///////// Projects modal /////////

// // Välj modal //
var modalProj = document.getElementById('projectsModal');
  
// Ange knapp //
var btn = document.getElementById('openProjects');

// X för att kunna stänga //
var span = document.getElementsByClassName('close')[0];

// Öppna modal //
btn.onclick = function() {
  modalProj.style.display = 'block';
}

// Stäng med X //
span.onclick = function() {
  modalProj.style.display = 'none';
}


// // Klick-event //
window.onclick = function(event) {
  if (event.target === modalProj) {
    modalProj.style.display = 'none';
  } 

  else if (event.target === modalCv) {
      modalCv.style.display = 'none';
  }
}

// Sidan som ska visas i modalen //
document.getElementById('openProjects').addEventListener('click', function() {
  document.getElementById('projectsModal').style.display = 'block';
  document.getElementById('iframeProjects').src = 'projectsmodal.html'; 
});

// resna iframe vid avslut //
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('projectsModal').style.display = 'none';
  document.getElementById('iframeProjects').src = '';
});




/////// CV modal /////////

// Välj modal //
var modalCv = document.getElementById('modalCv');
  
// Ange knapp //
var btnCv = document.getElementById('openCv');

// X för att kunna stänga //
var span1 = document.getElementsByClassName('close')[1];

// Öppna modal //
btnCv.onclick = function() {
  modalCv.style.display = 'block';
}

// Stäng med X //
span1.onclick = function() {
  modalCv.style.display = 'none';
}

// Sidan som ska visas i modalen //
document.getElementById('openCv').addEventListener('click', function() {
  document.getElementById('modalCv').style.display = 'block';
  document.getElementById('iframeCv').src = 'cv.html'; 
});

// resna iframe vid avslut //
document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modalCv').style.display = 'none';
  document.getElementById('iframeCv').src = '';
});










