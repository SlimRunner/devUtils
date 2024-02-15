// ==UserScript==
// @name        DevUtils
// @namespace   slidav.Desmos
// @version     0.2.2
// @author      SlimRunner (David Flores)
// @description Developer utilities.
// @grant       none
// @match       http://*/*
// @match       https://*/*
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  window.utils = {};

  // Function to download data to a file
  window.utils.download = function (data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) {
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    } else {
      // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  };

  window.utils.getPage = () => {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(document);
    const title = document.title
      .replace(/[^.a-zA-Z0-9 _-]/g, "")
      .replace(/(\s)+/g, "$1");
    window.utils.download(HTML, `${title}.html`, "text/html; charset=UTF-8");
  };
  
  window.utils.darkToggle = (v = 80) => {
    const body = document.body.parentElement;
    if (!body.style.filter) {
      body.style.filter = `invert(${v}%)`;
    } else {
      body.style.filter = "";
    }
  }
})();
