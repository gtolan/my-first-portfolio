// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/swGT.js',  { scope: '/' }).then(function(reg) {
    
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



'use strict';


function MyApp() {
// Initialize App.
    this.elements()
    this.init()
}






MyApp.prototype.infoMess = function (){
    domEl.infoCard.classList.toggle('active');
}




MyApp.prototype.hideFabAnim = function (){
var fabPanel = document.getElementById('fabPanel');
    if(fabPanel.style.maxHeight = 247 || fabPanel.style.height > 100) {
        var fabTwoIconOne = document.getElementById('fabTwoIconOne');
        var fabTwoIconTwo = document.getElementById('fabTwoIconTwo');
        fabButtonOne.classList.remove('fabButtonOneToolbar');
        var fabButtonTwo = document.getElementById('fabButtonTwo');
        fabButtonTwo.classList.remove('fabButtonTwoToolbar');     
    } else {
        console.log('ran else hide fab')
    }
}

MyApp.prototype.fabRipplerSmall = function () {
  domEl.fabTwo[0].classList.add('fab-click-small-blue');
  setTimeout(function(){
    var fabTwo = document.getElementsByClassName('fab-blue-ripple')[0];
    fabTwo.classList.remove('fab-click-small-blue');
  }, 270)
}

MyApp.prototype.openModal = function (){
  window.scrollTo(0, 0);
  var dropCircle = document.getElementsByClassName('dropCircle')[0];
  dropCircle.addEventListener('click', MyApp.prototype.closeModal);
  dropCircle.classList.toggle('dropCircle-overlay');
  setTimeout(function(){
    var dropInner = document.getElementsByClassName('dropCircle-center')[0];
    dropInner.classList.toggle('drop-inner-explode');
  },40);
 setTimeout(function(){
    var dropInner = document.getElementsByClassName('dropCircle-center')[0];
    dropInner.innerHTML = "Modal<br><p style='font-size:14px'>*Press anywhere to close</p>";
  },2000);
  
}

MyApp.prototype.closeModal = function () {
    var dropCircle = document.getElementsByClassName('dropCircle')[0];
    dropCircle.classList.toggle('dropCircle-overlay');
    var dropInner = document.getElementsByClassName('dropCircle-center')[0];
    dropInner.classList.toggle('drop-inner-explode');
}

MyApp.prototype.expandFab = function () {
    var fabButtonOne = document.getElementById('fabButtonOne');
    var fabTwoIconOne = document.getElementById('fabTwoIconOne');
    var fabTwoIconTwo = document.getElementById('fabTwoIconTwo');
    fabButtonOne.classList.toggle('fabButtonOneToolbar');
    var fabButtonTwo = document.getElementById('fabButtonTwo');
    fabButtonTwo.classList.toggle('fabButtonTwoToolbar');
    fabTwoIconTwo.classList.toggle('hiddentool');
    fabTwoIconTwo.classList.toggle('fabTwoImg');
    fabTwoIconOne.classList.toggle('hiddentool');
    fabTwoIconOne.classList.toggle('fabTwoImg');
    
}

MyApp.prototype.welcomeAnimation = function () {
  window.scrollTo(0, 0);  
    var jumbo = document.getElementsByClassName('jumbotron-header')[0];
    jumbo.classList.add('extraHue');
    domEl.welcomeAnimButton.disabled = true;  
setTimeout(function (){
    var header = document.getElementsByClassName('header-text', 'welcome')[0]; 
    header.classList.add('scaleDiv');
},150) 
setTimeout(function (){
    var header = document.getElementsByClassName('header-text', 'welcome')[0]; 
    header.classList.remove('scaleDiv');
},1150) 
setTimeout(function(){    
  var elem = document.getElementById("headerText"); 
  var letter = 0;
  elem.innerText = '';
  var welcomeMess = "Welcome to Gerard Tolan.com ";
  var welcomeArr = welcomeMess.split('');
  var typeIt = setInterval(typing, 140);
  function typing() {
    if (letter == welcomeArr.length) {
      clearInterval(typeIt);
    } else {
                if (letter == 7 || letter == 17 ){ 
                console.log(letter);
                 var space = '&nbsp;';
                    elem.innerHTML += space;

                }
                else if (letter == 10) {
                    var space = '<br>';
                            elem.innerHTML += space;
                }
      elem.innerText += welcomeArr[letter]; 
      letter++; 
    }
  }

},1200)
    setTimeout(function(){
            var jumbo = document.getElementsByClassName('jumbotron-header')[0];
            jumbo.classList.remove('extraHue');
            }, 3000);
    setTimeout(function(){
            domEl.homeImage.classList.add('pulse');}
             ,5000);
    setTimeout(function(){
            domEl.highlightDiv.classList.add('home');
            }, 6000);
    setTimeout(function(){
            domEl.homeImage.classList.remove('pulse');
            },6800); 
    setTimeout(function(){
            domEl.highlightText.classList.add('home');
            domEl.highlightText.innerText = "This is a Home navigation button";
            }, 7500);
    setTimeout(function(){  
            domEl.highlightText.innerText = '';
            }, 9200);
    setTimeout(function(){
            domEl.highlightDiv.classList.remove('home');
            domEl.highlightText.classList.remove('home');
            domEl.tabsSection[0].classList.add('pulse');
            }, 9500)
    setTimeout(function(){
            domEl.highlightText.classList.add('tabsSection');
            domEl.highlightDiv.classList.add('tabsSection');
            }, 10500);  
    setTimeout(function(){
            domEl.highlightText.innerText = "This is tab slider navigation";
            }, 11500);
    
    setTimeout(function(){
            domEl.slideTab[1].click();
            
            }, 12500)
     setTimeout(function(){
             domEl.highlightText.innerText = "";
            
            }, 13000)
    setTimeout(function(){
   
    domEl.highlightText.classList.remove('tabsSection');
    domEl.highlightDiv.classList.remove('tabsSection');
            }, 13500)
    setTimeout(function(){
            
            domEl.slideTab[0].click();
            }, 14500);  
    setTimeout(function(){
            
            
            }, 16500)
    setTimeout(function(){
            domEl.highlightText.innerText = "";
            domEl.tabsSection[0].classList.remove('pulse');
            domEl.slideTab[2].click();
            domEl.welcomeAnimButton.disabled = false;
            }, 17000)
};
    

MyApp.prototype.openModalRight = function () {
  window.scrollTo(0, 0);
  var dropRight = document.getElementsByClassName('dropCircle-right')[0];
  dropRight.classList.toggle('dropCircle-overlay-right');
  dropRight.addEventListener('click', MyApp.prototype.closeModalRight);
  setTimeout(function(){
    var dropInner = document.getElementsByClassName('dropCircleInner-right')[0];
    dropInner.classList.toggle('drop-inner-explode-right');
  },40);
 setTimeout(function(){
    var dropInner = document.getElementsByClassName('dropCircleInner-right')[0];
    dropInner.innerHTML = "Modal<br><p style='font-size:14px'>*Press anywhere to close</p>";
  },2000);
}

MyApp.prototype.closeModalRight = function () {
    var dropCircleRight = document.getElementsByClassName('dropCircle-right')[0];
    dropCircleRight.classList.toggle('dropCircle-overlay-right');
    var dropInner = document.getElementsByClassName('dropCircleInner-right')[0];
    dropInner.classList.toggle('drop-inner-explode');
}

MyApp.prototype.animOne = function() {
    window.scrollTo(0, 0);
    var featureOne = document.getElementById('featOne');
    var featureTwo = document.getElementById('featTwo');
    var featOneText = document.getElementsByClassName('featOneText')[0];
    featOneText.classList.toggle('featOneText-show');
    featureOne.classList.toggle('active');
    featureTwo.classList.toggle('featureTwo-active');
    console.log('feature one active');
 
    setTimeout(function(){
        window.addEventListener('click', MyApp.prototype.closeFeature);
    }, 2500); 
}

MyApp.prototype.closeFeature = function () {
      var featureOne = document.getElementById('featOne');
        var featureTwo = document.getElementById('featTwo');
        var featOneText = document.getElementsByClassName('featOneText')[0];
        featOneText.classList.toggle('featOneText-show');
        featureOne.classList.toggle('active');
        featureTwo.classList.toggle('featureTwo-active');  
        window.removeEventListener('click', MyApp.prototype.closeFeature);
    }


MyApp.prototype.emailinputLabel = function (){
        var subjectLabel = document.getElementById('subjectLabel');
        var emailLabel = document.getElementById('emailLabel');
        var subject = document.getElementsByName('subject')[0].value;
        var email = document.getElementsByName('email')[0].value;
    if (email.length > 0) {
        emailLabel.style.display = "none";
         console.log('ran email key up' + email.length);
    } else if(email.length == 0) {
    console.log('key up  - else');
        emailLabel.style.display = "block";
    } else {
        console.log('else ran')
    }
};

MyApp.prototype.subjectinputLabel = function (){
        const subjectLabel = document.getElementById('subjectLabel');
        const emailLabel = document.getElementById('emailLabel');
        const subject = document.getElementsByName('subject')[0].value;
        const email = document.getElementsByName('email')[0].value;
    if(subject.length > 0){ 
        subjectLabel.style.display = "none";
        console.log('ran ssubject key up' + subject.length);
    } else if(subject.length == 0) {
        subjectLabel.style.display = "block"; 
    } else {
        console.log('else ran')
    }
};


MyApp.prototype.closeSideNav = function (){
    domEl.menuButton.click();
}

MyApp.prototype.fabToolClass = function (){
    domEl.fabToolButton.classList.toggle('button-toolbar');
    domEl.fabToolButton.firstElementChild.classList.toggle('fabToolBarImg');
    var iconOne = document.getElementById('iconOne');
    var iconTwo = document.getElementById('iconTwo');
    iconOne.classList.toggle('hiddentool');
    iconTwo.classList.toggle('hiddentool');
};

MyApp.prototype.fabRipplerSmall = function () {
  domEl.fabGreen.classList.add('successFab-click');
  setTimeout(function(){
      var fabGreen = document.getElementById('successFabGreen');
      fabGreen.classList.remove('successFab-click');
  }, 280)
};

MyApp.prototype.closeIndividualBlogPosts = function (){
        setTimeout(function(){
            var blogP = document.getElementById('blog-posts');
            var posts = blogP.getElementsByTagName('LI');
            var x;
            for(x = 0; x < posts.length;x++){
            if(posts[x].classList.contains('blog-active')){
               posts[x].classList.remove('blog-active');  
            }
            }
             
        }, 100);
};    
    
domEl.sendMessageButton.addEventListener('click', event => {
    event.preventDefault();
    domEl.sendMessageButton.classList.add('hvr-shutter-out-horizontal');
    setTimeout(domEl.sendMessageButton.classList.remove('hvr-shutter-out-horizontal'), 3000);
    
    var database = firebase.database();
    
      const subject = document.getElementsByName('subject')[0].value;
      const email = document.getElementsByName('email')[0].value;
      const comment = document.getElementsByName('message')[0].value;
   
    if (email.length > 0 && comment.length > 0) {

//        console.log(email, comment, subject);
        toast('Your message has been sent /:)');
        firebase.database().ref('messages').push({
                subject: subject,
                email: email,
                comment: comment,
         });
        domEl.messageForm.reset();
        var subjectLabel = document.getElementById('subjectLabel');
        var emailLabel = document.getElementById('emailLabel');
        subjectLabel.style.display = "block";
        emailLabel.style.display = "block";
 
        setTimeout(MyApp.prototype.closeMess, 1000);


    
    }
});

MyApp.prototype.linkHomePage = function() {
    domEl.closeMessageCard.click();
    setTimeout(MyApp.prototype.hamburgerNavAnimation, 700);
    setTimeout(MyApp.prototype.linkhomeImage, 750); 
}
    
MyApp.prototype.linkhomeImage = function() {
     domEl.aboutCardCloseButton.click();
     domEl.blogCardCloseButton.click();
     domEl.libraryCardCloseButton.click();
    MyApp.prototype.clearCardClass();
    if(domEl.blogCard.classList.contains('card-active')){
        domEl.blogCard.classList.remove('card-active'); 
    };
     if(domEl.libraryCard.classList.contains('card-active')){
        domEl.libraryCard.classList.remove('card-active');
         
    };
    domEl.aboutCard.classList.add('card-active');
    var slide = document.getElementsByClassName('tabTwo')[0];
    slide.style.marginLeft = '33%';
            slide.innerHTML = "About me";
    
};

MyApp.prototype.openLatestProject = function() {
    var url = 'https://www.delkopro.co.uk'
    window.open(url,'_blank');
};

MyApp.prototype.showBlogPost = function() {
  var posts = domEl.blogPosts.getElementsByTagName('LI');
    var x;
    for(x = 0; x < posts.length;x++){
      posts[x].classList.remove('blog-active')  ;
    
    if(domEl.blogCard.classList.contains('pop-container')){
        posts[x].addEventListener('click', MyApp.prototype.showBlogPostInsideCard);
    } else if (domEl.blogCard.classList.contains('pop-container') === 'false'){
//        console.log('false');
    } else {
//        console.log('false 2');
        MyApp.prototype.openBlogCard();
        var x;
    for(x = 0; x < posts.length;x++){
      posts[x].classList.remove('blog-active')  ;
    }
        this.classList.add('blog-active');
//        this.lastElementChild.style.display = "block";
    }
};
};

MyApp.prototype.showBlogPostInsideCard = function() {
    var posts = domEl.blogPosts.getElementsByTagName('LI');
    var x;
    for(x = 0; x < posts.length;x++){
      posts[x].classList.remove('blog-active');
    }; 
    this.classList.add('blog-active');
}

MyApp.prototype.clearCardClass = function() {
    if(domEl.aboutCard.classList.contains('background-container')){
        domEl.aboutCard.classList.remove('background-container');
    };
     if(domEl.aboutCard.classList.contains('pop-container')){
        domEl.aboutCard.classList.remove('pop-container');
    };
    if(domEl.blogCard.classList.contains('background-container')){
        domEl.blogCard.classList.remove('background-container');
    };
    if(domEl.blogCard.classList.contains('pop-container')){
        domEl.blogCard.classList.remove('pop-container');
    };
};

MyApp.prototype.linkAboutPageCard = function() {
    domEl.closeMessageCard.click();
    MyApp.prototype.closeBlogCard();
    MyApp.prototype.closeLibraryCard();
    if(domEl.sideNav.classList.contains('showSideNav')){
    setTimeout(MyApp.prototype.closeSideNav, 700);
    }
    setTimeout(MyApp.prototype.openAboutCard, 1000);
    var slide = document.getElementsByClassName('tabTwo')[0];
    slide.style.marginLeft = '33%';
            slide.innerHTML = "About me";
    
};

MyApp.prototype.linkBlogPageCard = function() {
    domEl.closeMessageCard.click();
    MyApp.prototype.closeAboutCard();
    MyApp.prototype.closeLibraryCard();
    if(domEl.sideNav.classList.contains('showSideNav')){
    setTimeout(MyApp.prototype.closeSideNav, 700);
    }    
    setTimeout(MyApp.prototype.openBlogCard, 1000); 
    
    const slide = document.getElementsByClassName('tabTwo')[0];
    slide.style.marginLeft = '0%';
                slide.innerHTML = "Blog";
    };

MyApp.prototype.linkContactPageCard = function() {
    MyApp.prototype.closeAboutCard();
    MyApp.prototype.closeLibraryCard();
//    closeBlogCard();
    MyApp.prototype.closeBlogCard();
        if(domEl.sideNav.classList.contains('showSideNav')){
    setTimeout(MyApp.prototype.closeSideNav, 700);
    } 
    setTimeout(MyApp.prototype.displayMessage, 1000); 
};

MyApp.prototype.linkLibraryPageCard = function() {
    domEl.closeMessageCard.click();
    MyApp.prototype.closeAboutCard();
    MyApp.prototype.closeBlogCard();
    if(domEl.sideNav.classList.contains('showSideNav')){
    setTimeout(MyApp.prototype.closeSideNav, 700);
    } 
        setTimeout(MyApp.prototype.openLibraryCard, 1000); 
    
    const slide = document.getElementsByClassName('tabTwo')[0];
    slide.style.marginLeft = '67%';
                slide.innerHTML = "Library";
    };



//menu animationfunction myFunction(x) {
MyApp.prototype.hamburgerNavAnimation = function() {
    domEl.menuButton.classList.toggle('menu-button-active');
    domEl.hamburgerButton.classList.toggle('no-hamburgler');
    domEl.sideNav.classList.toggle('showSideNav');
    domEl.main.classList.toggle('main-filter');
    domEl.overlay.classList.toggle('overlay');
    domEl.main.classList.toggle('bodyFixed');
};

MyApp.prototype.cardActive = function (){
    if(this.classList.contains('card-active')){
//        console.log('already active');
    } else {
        MyApp.prototype.removeActive();
        if(this.classList.contains('pop-container')){
            //do not add the actvive class
            this.classList.add('card-active');
        }else {
        this.classList.add('card-active');
            if(this.classList.contains('unpop-container')){
        this.classList.remove('unpop-container');
        }
    };

        var cardValue = this.getAttribute('value');
        var slide = document.getElementsByClassName('tabTwo')[0];
        if(cardValue === '1'){
            slide.style.marginLeft = '0%';
            slide.innerHTML = "Blog";

        }else if(cardValue === '2'){
            slide.style.marginLeft = '33%';
            slide.innerHTML = "About me";

        }else if(cardValue === '3'){
            slide.style.marginLeft = '67%';
            slide.innerHTML = "Library";

            
        }else {
//            console.log('not sure where to slide');
        }
    }
};

MyApp.prototype.removeActive = function (){
    var x;
    for(x = 0; x < domEl.card.length; x++){
        domEl.card[x].classList.remove('card-active');
    }
};

MyApp.prototype.openAboutSkills = function(){
   if(domEl.aboutCard.classList.contains('unpop-container')){
       domEl.aboutCard.classList.remove('unpop-container');
   };
    if(domEl.aboutCard.classList.contains('pop-container')){
//        console.log('do nothing');
    } else {
       setTimeout(MyApp.prototype.openAboutCard, 700); 
    }   
};

MyApp.prototype.openAboutCard = function(){
    domEl.homeImage.addEventListener('click', MyApp.prototype.linkhomeImage);
    var cardsOuter = document.getElementsByClassName('cardOuter');
    cardsOuter[0].style.display = "none";
    cardsOuter[2].style.display = "none";
    if(domEl.main.classList.contains('homePage')){
        domEl.main.classList.remove('homePage')
    };
    if(domEl.aboutCard.classList.contains('card-active')){
        //do nothing
    } else {
       domEl.aboutCard.classList.add('card-active');
        if(domEl.blogCard.classList.contains('card-active')){
       domEl.blogCard.classList.remove('card-active');
        }
    }
   if(domEl.aboutCard.classList.contains('unpop-container')){
       domEl.aboutCard.classList.remove('unpop-container');
   };
    domEl.aboutCardOpenButton.style.display = "none";
    domEl.aboutCardCloseButton.style.display = "block";
    domEl.blogCard.classList.add('background-container');
    domEl.libraryCard.classList.add('background-container');
    domEl.qualifications.style.display = "block";
    domEl.education.style.display = "block";
    domEl.history.style.display = "block";
    domEl.projects.style.display = "block";
    domEl.projectTable.style.display = "block";
    
    domEl.aboutCard.classList.add('pop-container');
        var x;
    for(x = 0; x < domEl.expandButtons.length; x++){
  domEl.expandButtons[x].classList.add('expandButton-Active')
    };
    document.getElementById("defaultOpenProjects").click();
    document.getElementById("defaultOpenSkills").click();
     var slide = document.getElementsByClassName('tabTwo')[0];
    slide.style.marginLeft = '33%';
                slide.innerHTML = "About me";
};

MyApp.prototype.openBlogCard = function(){
    domEl.homeImage.addEventListener('click', MyApp.prototype.linkhomeImage);
    var cardsOuter = document.getElementsByClassName('cardOuter');
    cardsOuter[1].style.display = "none";
    cardsOuter[2].style.display = "none";
    if(domEl.main.classList.contains('homePage')){
        domEl.main.classList.remove('homePage')
    };
    if(domEl.blogCard.classList.contains('card-active')){
        //do nothing
    } else {
       domEl.blogCard.classList.add('card-active');
        if(domEl.aboutCard.classList.contains('card-active')){
       domEl.aboutCard.classList.remove('card-active')
        }
        if(domEl.libraryCard.classList.contains('card-active')){
       domEl.libraryCard.classList.remove('card-active')
        }
    }
    domEl.blogCardOpenButton.style.display = "none";
    domEl.blogCardCloseButton.style.display = "block";
    domEl.aboutCard.classList.add('background-container');
    domEl.libraryCard.classList.add('background-container');
    domEl.blogCard.classList.add('pop-container');
    var posts = domEl.blogPosts.getElementsByTagName('LI');
 
    domEl.blogCard.style.marginLeft = "0%";

     var slide = document.getElementsByClassName('tabTwo')[0];
    slide.style.marginLeft = '0%';
                slide.innerHTML = "Blog";
};

MyApp.prototype.openLibraryCard = function(){
    domEl.homeImage.addEventListener('click', MyApp.prototype.linkhomeImage);
    var cardsOuter = document.getElementsByClassName('cardOuter');
    cardsOuter[0].style.display = "none";
    cardsOuter[1].style.display = "none";
    if (window.matchMedia("(max-width: 1000px)").matches && domEl.main.classList.contains('homePage')){
         window.scrollTo(0, 0);}

    domEl.aboutCard.classList.add('background-container');
    domEl.blogCard.classList.add('background-container');
    domEl.libraryCard.classList.add('pop-container');
    if(domEl.main.classList.contains('homePage')){
        domEl.main.classList.remove('homePage')
    };
    if(domEl.libraryCard.classList.contains('card-active')){
        //do nothing
    } else {
       domEl.libraryCard.classList.add('card-active');
        if(domEl.aboutCard.classList.contains('card-active')){
       domEl.aboutCard.classList.remove('card-active')
        }
        if(domEl.blogCard.classList.contains('card-active')){
       domEl.blogCard.classList.remove('card-active')
        }
    }
    domEl.libraryCardOpenButton.style.display = "none";
    domEl.libraryCardCloseButton.style.display = "block";
    domEl.libraryCard.style.marginLeft = "0%";
    
         var slide = document.getElementsByClassName('tabTwo')[0];
    slide.style.marginLeft = '67%';
                slide.innerHTML = "Library";

};

MyApp.prototype.closeAboutCard = function(){
    domEl.homeImage.removeEventListener('click', MyApp.prototype.linkhomeImage);
    var cardsOuter = document.getElementsByClassName('cardOuter');
    cardsOuter[0].style.display = "inline-block";
    cardsOuter[2].style.display = "inline-block";
    domEl.main.classList.add('homePage')
    domEl.aboutCard.classList.remove('pop-container');
    domEl.aboutCard.classList.add('unpop-container');
    domEl.qualifications.style.display = "none";
    domEl.education.style.display = "none";
    domEl.history.style.display = "none";
    domEl.projects.style.display = "block";
    domEl.projectTable.style.display = "none";
    var x;
    for(x = 0; x < domEl.expandButtons.length; x++){
  domEl.expandButtons[x].classList.remove('expandButton-Active')
    };
    domEl.aboutCardOpenButton.style.display = "block";
    domEl.aboutCardCloseButton.style.display = "none";
    domEl.aboutCard.style.display = "inline-block";
    var showCards = function() {
        domEl.blogCard.classList.remove('background-container');
    domEl.libraryCard.classList.remove('background-container');
    }
    setTimeout(showCards, 500);
    setTimeout(function(){domEl.aboutCard.classList.remove('unpop-container');}, 2000);
};


MyApp.prototype.closeBlogCard = function(){
    domEl.homeImage.removeEventListener('click', MyApp.prototype.linkhomeImage);
      var cardsOuter = document.getElementsByClassName('cardOuter');
    cardsOuter[1].style.display = "inline-block";
    cardsOuter[2].style.display = "inline-block";
        domEl.main.classList.add('homePage')
  
    domEl.blogCard.classList.remove('pop-container');
    domEl.blogCardOpenButton.style.display = "block";
    domEl.blogCardCloseButton.style.display = "none";
    domEl.aboutCard.style.display = "inline-block";

    var showCards = function() {
        domEl.aboutCard.classList.remove('background-container');
        domEl.libraryCard.classList.remove('background-container');
    }
    setTimeout(showCards, 500);
};


MyApp.prototype.closeLibraryCard = function (){
    domEl.homeImage.removeEventListener('click', MyApp.prototype.linkhomeImage);
    var cardsOuter = document.getElementsByClassName('cardOuter');
    cardsOuter[0].style.display = "inline-block";
    cardsOuter[1].style.display = "inline-block";
    var acc = document.getElementsByClassName("accordion");
//var i;
//
//for (i = 0; i < acc.length; i++) {
//    if(acc[i].classList.contains('active')){
//        acc[i].classList.remove('active');
////        console.log('ran close acctive class');
//        var panel = acc[i].nextElementSibling;
//        if (panel.style.maxHeight){
//          panel.style.maxHeight = null;
//        };
//}
//}
    domEl.main.classList.add('homePage');
    domEl.libraryCard.classList.remove('pop-container');
    domEl.libraryCardOpenButton.style.display = "block";
    domEl.libraryCardCloseButton.style.display = "none";
    domEl.libraryCard.style.display = "inline-block";
    
    var showCards = function() {
        domEl.aboutCard.classList.remove('background-container');
    domEl.blogCard.classList.remove('background-container');
    }
    setTimeout(showCards, 750);
};


MyApp.prototype.closeSideNav = function() {
    var x = document.getElementsByTagName("BODY")[0];
    if(domEl.sideNav.classList.contains('showSideNav')){
        domEl.sideNav.classList.remove('showSideNav');
        domEl.hamburgerButton.classList.toggle("no-hamburgler");
        domEl.main.classList.toggle('bodyFixed');
        domEl.main.classList.toggle('main-filter');
        if(domEl.overlay.classList.contains('overlay')){
            domEl.overlay.classList.remove('overlay');
//            console.log('closed and removed overlay')
        }

    }
    if(domEl.menuButton.classList.contains('menu-button-active')){
     domEl.menuButton.classList.remove('menu-button-active');   
    }
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



window.onload = function() {
  window.myApp = new MyApp();
};



window.onscroll = function(){
//console.log('test')
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
 } else if (window.matchMedia("(max-width: 1000px)").matches && domEl.main.classList.contains('homePage')){
        var height = domEl.main.clientHeight;
//         console.log(domEl.main.clientHeight); 
//         console.log(window.pageYOffset);
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
//            console.log('HELLO');
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
//            console.log('HELLO');
            domEl.aboutCard.classList.add('card-active');
            domEl.blogCard.classList.remove('card-active');
            domEl.libraryCard.classList.remove('card-active');
            //animated first tab
       

        } else if (scrollPos > 460 && scrollPos < 550  && domEl.main.classList.contains('homePage')){
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

MyApp.prototype.displayMessage = function() {
    window.scrollTo(0, 0);
 var div = document.getElementById('messageContainer');
    domEl.messageContainer.style.display = "block";

  if (!div) {
    var container = document.createElement('DIV');
      console.log('ran message button');
    domEl.main.appendChild(container);
    container.id = "messageContainer";
    container.innerHTML = MyApp.MESSAGE_TEMPLATE;
    div = container.firstChild;
    var closeButton = document.createElement('DIV');
        closeButton.classList.add('close-card', 'message-icon-right');
        closeButton.onclick = function() {
          domEl.main.removeChild(domEl.messageContainer);
        }
    
   
  }


//  this.messageInput.focus();
};
MyApp.prototype.closeMess = function() {
    domEl.messageContainer.style.display = "none";
}

MyApp.prototype.formActive = function (){
    var x;
//    var y = this.index(this);
//    console.log(this);
    for(x = 0; x < domEl.inputLabel.length; x++){
        domEl.messagePanel[x].classList.remove('message-panel-active'); 
        domEl.inputLabel[x].classList.remove('input-label-active');
        console.log('ran delee class');
    }
    this.classList.add('message-panel-active');
    this.firstElementChild.classList.add('input-label-active');
};



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



