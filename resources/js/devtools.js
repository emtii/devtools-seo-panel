/**
 * Devtools
 *
 * @author:     emtii
 * @date:       30.03.15
 *
 */


var extName    = "Em Tii SEO";
var extIcon    = "../img/16x16.png";
var extHtml    = "../../public/index.html";


chrome.devtools.panels.create(
    extName,
    extIcon,
    extHtml,
    function() {
        // @TODO: (optional) callback
    }
);

// @TODO: magic...