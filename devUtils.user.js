// ==UserScript==
// @name        DevUtils
// @namespace   slidav.Desmos
// @version     0.3.1
// @author      SlimRunner (David Flores)
// @description Developer utilities.
// @grant       none
// @match       http://*/*
// @match       https://*/*
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  const utils = {};

  // Function to download data to a file
  utils.download = function (data, filename, type) {
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

  utils.getPage = () => {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(document);
    const title = document.title
      .replace(/[^.a-zA-Z0-9 _-]/g, "")
      .replace(/(\s)+/g, "$1");
    utils.download(HTML, `${title}.html`, "text/html; charset=UTF-8");
  };
  
  utils.darkToggle = (v = 80) => {
    const body = document.body.parentElement;
    if (!body.style.filter) {
      body.style.filter = `invert(${v}%)`;
    } else {
      body.style.filter = "";
    }
  };

  utils.reverseLines = (text) => {
    return text.split("\n").reverse().join("\n");
  };

  let utilname = "utils";
  let index = 0;
  while (typeof window[utilname] === "undefined") {
    if (index > 1000) {
      throw new Error("Too many attempts to find a utils name.");
    }
    console.warn(
      `${utilname} was taken.`
    );
    utilname = `utils${index++}`;
  }

  window[utilname] = utils;
  console.log(`Assigned ${utilname} to window`);
})();
