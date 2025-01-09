// ==UserScript==
// @name        DevUtils
// @namespace   slidav.general
// @version     0.9.2
// @author      SlimRunner (David Flores)
// @description Developer utilities.
// @grant       none
// @match       http://*/*
// @match       https://*/*
// @noframes
// ==/UserScript==

(function () {
  "use strict";

  const freezeFromNull = (obj) => Object.assign(Object.create(null), obj);

  const utils = Object.create(null);
  const helpers = Object.create(null);

  const MIME = freezeFromNull({
    image: freezeFromNull({
      bmp: "image/bmp",
      gif: "image/gif",
      ico: "image/vnd.microsoft.icon",
      jpeg: "image/jpeg",
      png: "image/png",
      svg: "image/svg+xml",
      tiff: "image/tiff",
      webp: "image/webp",
    }),
  });

  // Function to download data to a file
  const download = function (data, filename, type) {
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
  const downloadURI = function (uri, filename) {
    var a = document.createElement("a");
    a.href = uri;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
    }, 0);
  };

  const savePage = () => {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(document);
    const title = document.title
      .replace(/[^.a-zA-Z0-9 _-]/g, "")
      .replace(/(\s)+/g, "$1");
    download(HTML, `${title}.html`, "text/html; charset=UTF-8");
  };

  const saveElement = (elem) => {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(elem);
    const title = `${elem.tagName.toLowerCase()}-${document.title}`
      .replace(/[^.a-zA-Z0-9 _-]/g, "")
      .replace(/(\s)+/g, "$1");
    download(HTML, `${title}.html`, "text/html; charset=UTF-8");
  };

  const darkToggle = (v = 80) => {
    const body = document.body.parentElement;
    if (!body.style.filter) {
      body.style.filter = `invert(${v}%)`;
    } else {
      body.style.filter = "";
    }
  };

  const reverseLines = (text) => {
    return text.split("\n").reverse().join("\n");
  };

  const shuffleLines = (text) => {
    return shuffle(text.split("\n")).join("\n");
  };

  const randInt = (start, end = null) => {
    if (end === null) {
      [start, end] = [0, start];
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    const minCeiled = Math.ceil(start);
    const maxFloored = Math.floor(end);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  };

  const shuffle = (arr) => {
    let out = [...arr];
    for (let i = 0, j; i < arr.length; ++i) {
      j = randInt(0, arr.length);
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  };

  const range = function* (start, end = null, step = 1) {
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

  const divSet = function* (start, end, divisor, offset = 0) {
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

  const isBalanced = (text, pairs) => {
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

  const itemInList = (item, list) => {
    if (Array.isArray(list)) {
      const set = new Set(list);
      return set.has(item);
    } else {
      throw TypeError("item must be an array");
    }
  };

  const filterDocumentByElem = (node, target, filter = (e) => false) => {
    if (node instanceof HTMLElement && target instanceof HTMLElement) {
      if (node.isSameNode(target)) {
        return;
      }
      if (node.contains(target)) {
        for (const child of Array.from(node.children)) {
          filterDocumentByElem(child, target, filter);
        }
      } else if (!filter(node)) {
        node.remove();
      }
    } else {
      throw TypeError("root and element must be HTMLElements")
    }
  };

  const spareStyleTags = (node) =>
    utils.itemInList(node.tagName.toLowerCase(), ["script", "style"]);

  const generateBraceSet = (text) => {
    if (text.length % 2 !== 0) {
      throw RangeError("Braces must come in pairs");
    }

    const output = new Map();
    if (typeof text === "string" || text instanceof String) {
      for (let i = 0; i < text.length; i += 2) {
        output.set(text.at(i), text.at(i + 1));
      }
    } else {
      throw TypeError("Argument must be a string");
    }
    return output;
  }

  utils.download = download;
  utils.downloadURI = downloadURI;
  utils.savePage = savePage;
  utils.saveElement = saveElement;
  utils.darkToggle = darkToggle;
  utils.reverseLines = reverseLines;
  utils.shuffleLines = shuffleLines;
  utils.randInt = randInt;
  utils.shuffle = shuffle;
  utils.range = range;
  utils.divSet = divSet;
  utils.isBalanced = isBalanced;
  utils.itemInList = itemInList;
  utils.filterDocumentByElem = filterDocumentByElem;

  helpers.spareStyleTags = spareStyleTags;
  helpers.generateBraceSet = generateBraceSet;
  helpers.MIME = MIME;

  let utilName = "utils";
  let index = 0;
  while (typeof window[utilName] !== "undefined") {
    if (index > 1000) {
      throw new Error("Too many attempts to find a utils name.");
    }
    console.warn(`${utilName} was taken.`);
    utilName = `utils${index++}`;
  }

  window[utilName] = utils;
  console.log(`Assigned ${utilName} to window`);
})();
