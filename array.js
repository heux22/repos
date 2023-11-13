
///////// Array /////////

var projectPages = [];


function createIframe(src, width, height) {
    var iframe1 = document.createElement('iframe');
    iframe1.src = 'smatrollen.html';
    iframe1.width = 600;
    iframe1.height = 600;
    projectPages.push(iframe1);
    return iframe1;
}


function createIframe(src, width, height) {
    var iframe2 = document.createElement('iframe');
    iframe2.src = 'vasttrafik.html';
    iframe2.width = 400;
    iframe2.height = 400;
    projectPages.push(iframe2);
    return iframe2;
}

function createIframe(src, width, height) {
    var iframe3 = document.createElement('iframe');
    iframe3.src = 'customerjourney.html';
    iframe3.width = 400;
    iframe3.height = 400;
    projectPages.push(iframe3);
    return iframe3;
}

// document.getElementById("smatrollen").innerHTML = projectPages[0];
// document.getElementById("vasttrafik").innerHTML = projectPages[1];
// document.getElementById("customerjourney").innerHTML = projectPages[2];



// let slideIndex = 1;
// showSlides(slideIndex);

// // // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


/////// Småtrollen modal /////////

// // Välj modal //
var modalSmat = document.getElementById('modalSmatrollen');
  
// Ange knapp //
var btnSmat = document.getElementById('openSmatrollen');

// X för att kunna stänga //
var spanSmat = document.getElementsByClassName('close')[0];

// Öppna modal //
btnSmat.onclick = function() {
  modalSmat.style.display = 'block';
}

// Stäng med X //
spanSmat.onclick = function() {
  modalSmat.style.display = 'none';
}


// // Klicka utanför stäng //
window.onclick = function(event) {
  if (event.target === modalSmat) {
    modalSmat.style.display = 'none';
  } 
}

// Sidan som ska visas i modalen //
document.getElementById('openSmatrollen').addEventListener('click', function() {
    document.getElementById('modalSmatrollen').style.display = 'block';
    document.getElementById('iframeSmatrollen').src = 'smatrollen.html'; 
  });
  
  // resna iframe vid avslut //
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modalSmatrollen').style.display = 'none';
    document.getElementById('iframeSmatrollen').src = '';
  });

