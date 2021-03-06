var viewastext = {
    onLoad: function() {
    // initialization code
        this.initialized = true;
        this.strings = document.getElementById("viewastext-strings");
    },

    onMenuItemCommand: function(e) {
                         /*var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]*/
                         /*.getService(Components.interfaces.nsIPromptService);*/
                         /*promptService.alert(wendow, this.strings.getString("helloMessageTitle"),*/
                         /*this.strings.getString("helloMessage"));*/
       if (!gContextMenu.linkURL) {
           return
       }
       function so_clearInnerHTML(obj) {
           /*so long as obj has children, remove them*/
           while(obj.firstChild) obj.removeChild(obj.firstChild);
       }

        var link_url = gContextMenu.linkURL;
        var client = new XMLHttpRequest();
        client.open("GET", link_url, true);
        /*client.overrideMimeType('text/plain');*/
        client.send();
        client.onreadystatechange = function() {
            if(this.readyState == 4) {
                var newTab = gBrowser.addTab();
                var newTabBrowser = gBrowser.getBrowserForTab(newTab);
                gBrowser.selectedTab = newTab;
                newTabBrowser.addEventListener("load", function () {
                    var doc = newTabBrowser.contentDocument;
                    var regex = "/?([^/]*)$";
                    /*This breaks everything.*/
                    /*doc.URL = link_url;*/
                    var pre = doc.createElement('pre');
                    var tn = doc.createTextNode(client.responseText);
                    doc.title = unescape(link_url.match(regex)[1]);
                    pre.appendChild(tn);
                    doc.body.appendChild(pre);
                }, true)
            }
        }
    },
};

window.addEventListener("load", viewastext.onLoad, false);
