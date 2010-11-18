viewastext.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ viewastext.showFirefoxContextMenu(e); }, false);
};

viewastext.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  var hidden = (gContextMenu.onLink && !gContextMenu.onImage);
  document.getElementById("context-viewastext").hidden = hidden;
};

window.addEventListener("load", viewastext.onFirefoxLoad, false);
