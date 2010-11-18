viewastext.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ viewastext.showFirefoxContextMenu(e); }, false);
};

viewastext.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-viewastext").hidden = gContextMenu.onImage;
};

window.addEventListener("load", viewastext.onFirefoxLoad, false);
