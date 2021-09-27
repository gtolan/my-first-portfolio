MyApp.prototype.init = function addEvents(domEl){
console.log('a e l')
  domEl.menuButton.addEventListener('click', this.hamburgerNavAnimation);
  domEl.aboutCardOpenButton.addEventListener('click', this.openAboutCard);
  domEl.blogCardOpenButton.addEventListener('click', this.openBlogCard);
  domEl.blogCardCloseButton.addEventListener('click', this.closeBlogCard);
  domEl.aboutCardCloseButton.addEventListener('click', this.closeAboutCard);
  domEl.aboutLink.addEventListener('click', this.linkAboutPageCard);
  domEl.blogLink.addEventListener('click', this.linkBlogPageCard);
  domEl.libraryLink.addEventListener('click', this.linkLibraryPageCard);
  domEl.contactLink.addEventListener('click', this.linkContactPageCard);
  domEl.homeLink.addEventListener('click', this.linkHomePage);
  domEl.skillsButton.addEventListener('click', this.openAboutSkills);
  domEl.projectsButton.addEventListener('click', this.openAboutSkills);
  domEl.libraryCardOpenButton.addEventListener('click', this.openLibraryCard);
  domEl.messageFabButton.addEventListener('click', this.displayMessage);
  domEl.libraryCardCloseButton.addEventListener('click', this.closeLibraryCard);
  domEl.delkoproLink.addEventListener('click', this.openLatestProject);
  domEl.libraryList.addEventListener('click', this.openLibraryCard);
  domEl.sendMessageButton.addEventListener('click', this.sendMessage);
  domEl.fabToolButton.addEventListener('click',this.fabToolClass);
  domEl.overlay.addEventListener('click', this.closeSideNav);
  domEl.subject[0].addEventListener('keyup', this.subjectinputLabel);
  domEl.email[0].addEventListener('keyup', this.emailinputLabel);
  domEl.infoLink.addEventListener('click', this.infoMess);
  domEl.fabGreen.addEventListener('click', this.fabRipplerSmall);
  domEl.welcomeAnimButton.addEventListener('click', this.welcomeAnimation)
  domEl.openAnimOne.addEventListener('click', this.animOne);
  domEl.openCircleRight.addEventListener('click', this.openModalRight);
  domEl.openCircle.addEventListener('click', this.openModal);
  domEl.fabTwo[0].addEventListener('click', this.fabRipplerSmall);   
  domEl.fabPanelButton.addEventListener('click', this.hideFabAnim);
  domEl.fabToolTwo.addEventListener('click', this.expandFab);
    
  var x;
    for(x = 0; x < domEl.card.length; x++){
        domEl.card[x].addEventListener('click', this.cardActive);
    };
    var posts = domEl.blogPosts.getElementsByTagName('LI');
    for(x = 0; x < posts.length;x++){
      posts[x].addEventListener('click', this.showBlogPost);
    };

    for(x = 0; x < domEl.slideTab.length;x++){
        domEl.slideTab[0].addEventListener('click', this.linkBlogPageCard);
        domEl.slideTab[1].addEventListener('click', this.linkAboutPageCard);
         domEl.slideTab[2].addEventListener('click', this.linkLibraryPageCard);
    }

    for(x = 0; x < domEl.messagePanel.length; x++){
        domEl.messagePanel[x].addEventListener('click', this.formActive);
    }

    for(x = 0; x < domEl.closeBlogActive.length;x++){
        domEl.closeBlogActive[x].addEventListener('click', this.closeIndividualBlogPosts);
    }
}