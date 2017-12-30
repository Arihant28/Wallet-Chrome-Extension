chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    
    function httpGet(theUrl) {
        if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            setTimeout(function() {
                chrome.tabs.create({ url: "file:///home/akshay/Desktop/Story/test/document.docx" });
            }, 5000);
            
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                return xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "http://0.0.0.0:8080/crawl?url=" + theUrl, false);
        xmlhttp.send();
    }
    httpGet(tab.url);

});
