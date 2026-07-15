type PDFTitles = {
  title: string | null;
  subtitles: PDFTitles[];
};

class Utils {
  readonly MIME;

  constructor() {
    this.MIME = {
      bmp: "image/bmp",
      gif: "image/gif",
      ico: "image/vnd.microsoft.icon",
      jpeg: "image/jpeg",
      png: "image/png",
      svg: "image/svg+xml",
      tiff: "image/tiff",
      webp: "image/webp",
    };
  }

  download(data: BlobPart, filename: string, type: string) {
    const file = new Blob([data], { type: type });
    const anchor = document.createElement("a");
    const url = URL.createObjectURL(file);
    anchor.href = url;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(function () {
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(url);
    }, 0);
  }

  downloadURI(uri: string, filename: string) {
    const anchor = document.createElement("a");
    anchor.href = uri;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(function () {
      document.body.removeChild(anchor);
    }, 0);
  }

  savePage() {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(document);
    const title = document.title
      .replace(/[^.a-zA-Z0-9 _-]/g, "")
      .replace(/(\s)+/g, "$1");
    this.download(HTML, `${title}.html`, "text/html; charset=UTF-8");
  }

  saveElement(elem: HTMLElement) {
    const XMLS = new XMLSerializer();
    const HTML = XMLS.serializeToString(elem);
    const title = `${elem.tagName.toLowerCase()}-${document.title}`
      .replace(/[^.a-zA-Z0-9 _-]/g, "")
      .replace(/(\s)+/g, "$1");
    this.download(HTML, `${title}.html`, "text/html; charset=UTF-8");
  }

  darkToggle(value: number) {
    const body = document.body.parentElement;
    if (!body) return;
    if (!body.style.filter) {
      body.style.filter = `invert(${value}%)`;
    } else {
      body.style.filter = "";
    }
  }

  reverseLines(text: string) {
    return text.split("\n").reverse().join("\n");
  }

  shuffleLines(text: string) {
    return this.shuffle(text.split("\n")).join("\n");
  }

  randInt(start: number): number;
  randInt(start: number, end: number): number;
  randInt(start: number, end: number | null = null): number {
    if (end === null) {
      [start, end] = [0, start];
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    const minCeiled = Math.ceil(start);
    const maxFloored = Math.floor(end);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  shuffle<T>(arr: Array<T>) {
    const out: Array<T> = [...arr];
    for (let i = 0, j; i < arr.length; ++i) {
      j = this.randInt(0, arr.length);
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  range(count: number): Generator<number, void, unknown>;
  range(start: number, end: number): Generator<number, void, unknown>;
  range(
    start: number,
    end: number,
    step: number,
  ): Generator<number, void, unknown>;
  *range(
    start: number,
    end: number | null = null,
    step: number = 1,
  ): Generator<number, void, unknown> {
    if (end == null) {
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
  }

  *divSet(
    start: number,
    end: number,
    divisor: number,
    offset: number = 0,
  ): Generator<number, void, unknown> {
    let s = Math.sign(end - start);
    if (start === end) {
      yield start;
      return;
    } else if (divisor === 0) {
      return;
    }
    const mod = (n: number, m: number) => {
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
  }

  *zipgen<T extends any[]>(
    ...iters: { [K in keyof T]: Iterable<T[K]> | Iterator<T[K]> }
  ): Generator<T, void, unknown> {
    // Normalize everything into Iterators
    const iterators = iters.map((it) => {
      if (typeof it === "object" && it !== null && Symbol.iterator in it) {
        return (it as Iterable<any>)[Symbol.iterator]();
      }
      return it as Iterator<any>;
    });

    while (true) {
      const results = iterators.map((iter) => iter.next());

      // If any iterator is done, we stop
      if (results.some((res) => res.done)) {
        return;
      }

      // Yield the values as a typed tuple
      yield results.map((res) => res.value) as T;
    }
  }

  *enumerate<T>(iter: Iterable<T>): Generator<[number, T], void, unknown> {
    let i = 0;
    for (const item of iter) {
      yield [i++, item];
    }
    return;
  }

  isBalanced(text: string, pairs: Array<[string, string]>): boolean {
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
  }

  itemInList<T, A extends unknown[]>(item: T, list: A) {
    if (Array.isArray(list)) {
      const set = new Set(list);
      return set.has(item);
    } else {
      throw TypeError("item must be an array");
    }
  }

  filterDocumentByElem(
    node: Element,
    target: HTMLElement,
    filter: (e: HTMLElement) => boolean = (e) => false,
  ): void {
    if (node instanceof HTMLElement && target instanceof HTMLElement) {
      if (node.isSameNode(target)) {
        return;
      }
      if (node.contains(target)) {
        for (const child of Array.from(node.children)) {
          this.filterDocumentByElem(child, target, filter);
        }
      } else if (!filter(node)) {
        node.remove();
      }
    } else {
      throw TypeError("root and element must be HTMLElements");
    }
  }

  spareStyleTags(node: HTMLElement): boolean {
    return this.itemInList(node.tagName.toLowerCase(), ["script", "style"]);
  }

  generateBraceSet(text: string): Map<string, string> {
    if (text.length % 2 !== 0) {
      throw RangeError("Braces must come in pairs");
    }

    const output: Map<string, string> = new Map();
    if (typeof text === "string" || (text as any) instanceof String) {
      for (let i = 0; i < text.length; i += 2) {
        const idx = text.at(i);
        const val = text.at(i + 1);
        if (idx == undefined || val == undefined) continue;
        output.set(idx, val);
      }
    } else {
      throw TypeError("Argument must be a string");
    }
    return output;
  }

  getPDFOutline(root?: Element | null, tree?: any) {
    if (!((root as any) instanceof HTMLElement)) {
      throw TypeError("expects an HTML element");
    }

    if (root == undefined) {
      root = document.querySelector("#sidebarContent #outlineView");
    }

    const payload: PDFTitles = {
      title: null,
      subtitles: [],
    };
    let children = null;

    if (tree === null) {
      tree = payload;
      children = root?.querySelectorAll(":scope > .treeItem");
    } else {
      const title = root?.querySelector("a")?.textContent ?? null;
      payload.title = title;
      tree.subtitles.push(payload);
      children = root?.querySelectorAll(":scope > .treeItems > .treeItem");
    }

    children?.forEach((item) => {
      this.getPDFOutline(item, payload);
    });

    return tree;
  }

  unrollOutline(outline: PDFTitles) {
    const output: [number, string | null][] = [];
    let stack: [number, PDFTitles][] = outline.subtitles
      .toReversed()
      .map((e) => [0, e]);

    if (!(stack instanceof Array)) {
      throw TypeError("nodes should be an array");
    }

    while (stack.length > 0) {
      const [i, node] = stack.pop()!;

      for (const child of node.subtitles.toReversed()) {
        stack.push([i + 1, child]);
      }

      output.push([i, node.title]);
    }

    return output.map(([i, e]) => "  ".repeat(i) + "- " + e).join("\n");
  }

  *rangeList(
    list: string,
    itemSeparator = ",",
    rangeSeparator = "-",
  ): Generator<[number, number], void, unknown> {
    const items = list.split(itemSeparator);
    for (const rangeString of items) {
      const rangeSplit = rangeString.split(rangeSeparator);
      if (rangeSplit.length === 2) {
        const n1 = parseInt(rangeSplit[0]);
        const n2 = parseInt(rangeSplit[1]);
        yield [n1, n2];
      } else if (rangeSplit.length === 1) {
        const n1 = parseInt(rangeSplit[0]);
        yield [n1, n1];
      } else {
        yield [Number.NaN, Number.NaN];
      }
    }
    return;
  }

  addStyleSheet(rules: string, dedent = true) {
    if (dedent) {
      const TAB = /^\t/.test(rules) ? "\t" : " ";
      const tabBase = rules
        .match(new RegExp(String.raw`^${TAB}+(?!\n$)`, "gm"))
        ?.reduce((acc, curr) => Math.min(acc, curr.length), Infinity);
      if (tabBase) {
        let tab = "";
        for (let i = 0; i < tabBase; ++i) {
          tab += " ";
        }
        rules = rules.replaceAll(new RegExp(`^${TAB}{${tabBase}}`, "gm"), "");
      }
    }
    const style = document.createElement("style");
    style.textContent = rules;
    document.head.append(style);
    return style;
  }
}

let utilName = "utils";
let index = 0;
while (utilName in window) {
  if (index > 1000) {
    throw new Error("Too many attempts to find a utils name.");
  }
  console.warn(`${utilName} was taken.`);
  utilName = `utils${index++}`;
}

(window as any)[utilName] = new Utils();
