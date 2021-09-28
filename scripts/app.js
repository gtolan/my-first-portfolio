'use strict';
// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../serviceWorker.js',  { scope: '/' }).then(function(reg) {
    
    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
    
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}



function MyApp() {
// Initialize App.
    addProto(MyApp)
    addEvents(domEl, this)
   
}
window.onload = function() {
  window.myApp = new MyApp();
};




// Template for messages.
MyApp.MESSAGE_TEMPLATE =
    '<div class="message-container" id="message-container">' +
      '<div class="spacing">' +
      '<div class="close-card message-icon-right" onclick="MyApp.prototype.closeMess();">&times;</div>' +

      '<div class="messageForm"><div class="message-panel"><div class="input-label">Subject</div><input type="text" class="input-subject"></div>' +
    '<div class="message-panel"><div class="input-label">Subject</div><input type="text" class="input-subject"></div>' +
      '</div>' +
    '</div>';


//Scroll animation Events

window.onscroll = function(){

 if (window.matchMedia("(min-width: 1000px)").matches && domEl.main.classList.contains('homePage')){
     console.log('min width 1000px');
            domEl.aboutCard.style.transform = "scale(1)";
            domEl.aboutCard.style.marginTop = "0px";
            domEl.aboutCard.classList.add('card-active');
            
            domEl.blogCard.classList.remove('card-active');
            domEl.blogCard.style.transform = "scale(1)";
            domEl.blogCard.style.marginTop = "0px"; 
        
            domEl.libraryCard.classList.remove('card-active');
            domEl.libraryCard.style.top = "0px"; 
            domEl.libraryCard.style.transform = "scale(1)";
     
     
     //do nothing
 } else if (window.matchMedia("(max-width: 1000px)").matches && this.domEl.main.classList.contains('homePage')){

        var scrollPos = window.pageYOffset;
        if(scrollPos < 190){
    //        console.log('kick it.. first break.. 200px of anim division');
            //do Nothing
            domEl.blogCard.style.transform = "scale(1)";
            domEl.blogCard.style.marginTop = "0px"; 
            domEl.aboutCard.style.transform = "scale(1)";
            domEl.aboutCard.style.marginTop = "0px";
            domEl.libraryCard.style.top = "0px"; 
            domEl.blogCard.classList.add('card-active');
            domEl.aboutCard.classList.remove('card-active');
            domEl.libraryCard.classList.remove('card-active');
           
            
        } else if (scrollPos > 190 && scrollPos < 240 && domEl.main.classList.contains('homePage')){
            domEl.blogCard.style.transform = "scale(.8)";
            domEl.blogCard.style.marginTop = "-60px";  
            if(domEl.blogCard.classList.contains('pop-container')) {
                domEl.blogCard.style.marginTop = "0px";
            }
            if(domEl.aboutCard.classList.contains('pop-container')) {
                domEl.aboutCard.style.marginTop = "0px";
            }
            if(domEl.libraryCard.classList.contains('pop-container')) {
                domEl.libraryCard.style.marginTop = "0px";
            }
            domEl.libraryCard.style.top = "0px"; 
            domEl.blogCard.classList.add('card-active');
            domEl.aboutCard.classList.remove('card-active');
            domEl.libraryCard.classList.remove('card-active');

        }
        else if (scrollPos > 240 && scrollPos < 460  && domEl.main.classList.contains('homePage')){
            domEl.aboutCard.style.transform = "scale(1)";
            
            if(domEl.aboutCard.classList.contains('pop-container')) {
                domEl.aboutCard.style.marginTop = "0px";
            }else {
                domEl.aboutCard.style.marginTop = "-112px"; 
            }
            if(domEl.blogCard.classList.contains('pop-container')) {
                domEl.blogCard.style.marginTop = "0px";
            }
            if(domEl.libraryCard.classList.contains('pop-container')) {
                domEl.libraryCard.style.marginTop = "0px";
            }
            domEl.libraryCard.style.top = "0px"; 
            domEl.aboutCard.classList.add('card-active');
            domEl.blogCard.classList.remove('card-active');
            domEl.libraryCard.classList.remove('card-active');
            //animated first tab
       

        } else if (scrollPos > 460 && scrollPos < 550  && (domEl.main.classList.contains('homePage'))){
            domEl.libraryCard.classList.add('card-active');
            domEl.aboutCard.classList.remove('card-active');
            domEl.blogCard.classList.remove('card-active');
            domEl.libraryCard.style.transform = "scale(1)";

            domEl.libraryCard.style.top = "-116px"; 
            if(domEl.libraryCard.classList.contains('pop-container')) {
                domEl.libraryCard.style.top = "0px"; 
            }
            if(domEl.blogCard.classList.contains('pop-container')) {
                domEl.blogCard.style.marginTop = "0px";
            }
            if(domEl.aboutCard.classList.contains('pop-container')) {
                domEl.aboutCard.style.marginTop = "0px";
            }
            domEl.blogCard.style.transform = "scale(.6)"; 
            domEl.aboutCard.style.transform = "scale(.8)";
            
     
        }

        else {
//            console.log('im at the end of the page now..')
        }
        
    } else {
        
            domEl.aboutCard.style.transform = "scale(1)";
            domEl.aboutCard.style.marginTop = "0px";
            domEl.blogCard.style.transform = "scale(1)";
            domEl.blogCard.style.marginTop = "0px"; 
             
            if(domEl.libraryCard.classList.contains('pop-container')) {
                domEl.libraryCard.classList.add('card-active');
            }
        if(domEl.aboutCard.classList.contains('pop-container')) {
                domEl.aboutCard.classList.add('card-active');
            }
        if(domEl.blogCard.classList.contains('pop-container')) {
                domEl.blogCard.classList.add('card-active');
            }
    
            domEl.libraryCard.style.top = "0px"; 
            domEl.libraryCard.style.transform = "scale(1)";
    
    }
   }
//    



//TODO: remove all global vars :/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

function toast(text) {
    
    var x = document.getElementById("snackbarSuccessLog")
    x.classList.add('show');
    x.innerHTML = text;
    setTimeout(function(){ x.className = x.className.replace("show", "");x.innerHTML = ''; }, 3000);
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function openSkill(evt, skillName) {
    var i, tabcontent, tablinks;
    tabcontent = domEl.qualifications.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = domEl.qualifications.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
}
function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = domEl.projectTable.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = domEl.projectTable.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
}



