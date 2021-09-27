var addEvents = function (domEl,App){

  domEl.menuButton.addEventListener('click', App.hamburgerNavAnimation);
  domEl.aboutCardOpenButton.addEventListener('click', App.openAboutCard);
  domEl.blogCardOpenButton.addEventListener('click', App.openBlogCard);
  domEl.blogCardCloseButton.addEventListener('click', App.closeBlogCard);
  domEl.aboutCardCloseButton.addEventListener('click', App.closeAboutCard);
  domEl.aboutLink.addEventListener('click', App.linkAboutPageCard);
  domEl.blogLink.addEventListener('click', App.linkBlogPageCard);
  domEl.libraryLink.addEventListener('click', App.linkLibraryPageCard);
  domEl.contactLink.addEventListener('click', App.linkContactPageCard);
  domEl.homeLink.addEventListener('click', App.linkHomePage);
  domEl.skillsButton.addEventListener('click', App.openAboutSkills);
  domEl.projectsButton.addEventListener('click', App.openAboutSkills);
  domEl.libraryCardOpenButton.addEventListener('click', App.openLibraryCard);
  domEl.messageFabButton.addEventListener('click', App.displayMessage);
  domEl.libraryCardCloseButton.addEventListener('click', App.closeLibraryCard);
  domEl.delkoproLink.addEventListener('click', App.openLatestProject);
  domEl.libraryList.addEventListener('click', App.openLibraryCard);
  domEl.sendMessageButton.addEventListener('click', App.sendMessage);
  domEl.fabToolButton.addEventListener('click',App.fabToolClass);
  domEl.overlay.addEventListener('click', App.closeSideNav);
  domEl.subject[0].addEventListener('keyup', App.subjectinputLabel);
  domEl.email[0].addEventListener('keyup', App.emailinputLabel);
  domEl.infoLink.addEventListener('click', App.infoMess);
  domEl.fabGreen.addEventListener('click', App.fabRipplerSmall);
  domEl.welcomeAnimButton.addEventListener('click', App.welcomeAnimation)
  domEl.openAnimOne.addEventListener('click', App.animOne);
  domEl.openCircleRight.addEventListener('click', App.openModalRight);
  domEl.openCircle.addEventListener('click', App.openModal);
  domEl.fabTwo[0].addEventListener('click', App.fabRipplerSmall);   
  domEl.fabPanelButton.addEventListener('click', App.hideFabAnim);
  domEl.fabToolTwo.addEventListener('click', App.expandFab);
    
  var x;
    for(x = 0; x < domEl.card.length; x++){
        domEl.card[x].addEventListener('click', App.cardActive);
    };
    var posts = domEl.blogPosts.getElementsByTagName('LI');
    for(x = 0; x < posts.length;x++){
      posts[x].addEventListener('click', App.showBlogPost);
    };

    for(x = 0; x < domEl.slideTab.length;x++){
        domEl.slideTab[0].addEventListener('click', App.linkBlogPageCard);
        domEl.slideTab[1].addEventListener('click', App.linkAboutPageCard);
         domEl.slideTab[2].addEventListener('click', App.linkLibraryPageCard);
    }

    for(x = 0; x < domEl.messagePanel.length; x++){
        domEl.messagePanel[x].addEventListener('click', App.formActive);
    }

    for(x = 0; x < domEl.closeBlogActive.length;x++){
        domEl.closeBlogActive[x].addEventListener('click', App.closeIndividualBlogPosts);
    }
}