// ==UserScript==
// @name        DevUtils
// @namespace   slidav.Desmos
// @version     0.8.0
// @author      SlimRunner (David Flores)
// @description Developer utilities.
// @grant       none
// @match       http://*/*
// @match       https://*/*
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  const utils = Object.create(null);

  utils.MIME = Object.freeze({
    image: {
      bmp: "image/bmp",
      gif: "image/gif",
      ico: "image/vnd.microsoft.icon",
      jpeg: "image/jpeg",
      png: "image/png",
      svg: "image/svg+xml",
      tiff: "image/tiff",
      webp: "image/webp",
    },
  });

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

  // Function to download a raw URI data to a file
  utils.downloadURI = function (uri, filename) {
    var a = document.createElement("a");
    a.href = uri;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
    }, 0);
  };

  utils.savePage = () => {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(document);
    const title = document.title
      .replace(/[^.a-zA-Z0-9 _-]/g, "")
      .replace(/(\s)+/g, "$1");
    utils.download(HTML, `${title}.html`, "text/html; charset=UTF-8");
  };

  utils.saveElement = (elem) => {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(elem);
    const title = `${elem.tagName.toLowerCase()}-${document.title}`
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

  utils.shuffleLines = (text) => {
    return utils.shuffle(text.split("\n")).join("\n");
  };

  utils.randInt = (start, end = null) => {
    if (end === null) {
      [start, end] = [0, start];
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    const minCeiled = Math.ceil(start);
    const maxFloored = Math.floor(end);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  };

  utils.shuffle = (arr) => {
    let out = [...arr];
    for (let i = 0, j; i < arr.length; ++i) {
      j = utils.randInt(0, arr.length);
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  };

  utils.range = function* (start, end = null, step = 1) {
    if (end === null) {
      [start, end] = [0, start];
    }
    if ((end - start) * step < 0) {
      return;
    } else if (step >= 1) {
      for (let i = start; i < end; i += step) {
        yield i;
      }
    } else {
      for (let i = start; i > end; i += step) {
        yield i;
      }
    }
  };

  utils.divSet = function* (start, end, divisor, offset = 0) {
    let s = Math.sign(end - start);
    if (start === end) {
      yield start;
      return;
    } else if (divisor === 0) {
      return;
    }
    const mod = (n, m) => {
      const rem = n % m;
      return n * m >= 0 ? rem : rem ? rem + m : 0;
    };
    const st = Math.abs(divisor);
    const n = mod(offset, st);
    let i = start;
    if (i % st !== n) {
      i += s >= 0 ? st - mod(i - n, st) : -mod(i - n, st);
      if (!(s >= 0 ? i <= end : i >= end)) return;
    }
    while (s >= 0 ? i <= end : i >= end) {
      yield i;
      i += s * st;
    }
  };

  utils.isBalanced = (text, pairs) => {
    const pairMap = new Map(pairs);
    const closeSet = new Set(pairMap.values());
    const N = text.length;
    const stack = [];

    for (let char of text) {
      if (pairMap.has(char)) {
        stack.push(pairMap.get(char));
      } else if (closeSet.has(char) && char != stack.pop()) {
        return false;
      }
    }

    return !stack.length;
  };

  let utilname = "utils";
  let index = 0;
  while (typeof window[utilname] !== "undefined") {
    if (index > 1000) {
      throw new Error("Too many attempts to find a utils name.");
    }
    console.warn(`${utilname} was taken.`);
    utilname = `utils${index++}`;
  }

  window[utilname] = utils;
  console.log(`Assigned ${utilname} to window`);
})();
