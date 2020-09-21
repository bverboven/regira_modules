import { toArray, last, skip, take } from "./array-utility";
import { flattenObject } from "./object-utility";

function byteStringToBlob(byteString, filename, type) {
  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  // write the ArrayBuffer to a blob, and you're done
  const blob = new Blob([ab], { type });
  blob.name = filename;
  return blob;
}
function base64StringToBlob(byteString, type, sliceSize = 512) {
  // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript#answer-16245768

  const byteArrays = [];

  for (let offset = 0; offset < byteString.length; offset += sliceSize) {
    const slice = byteString.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type });
  return blob;
}

export const isFile = item => item != null && item instanceof Blob;
export const createUrl = blob => URL.createObjectURL(blob);
export const revokeUrl = url => URL.revokeObjectURL(url);
export const getFilename = uri => {
  if (!uri || !uri.includes("/")) {
    return uri;
  }
  if (uri.endsWith("/")) {
    throw new Error("filename cannot end with a '/'");
  }
  return last(uri.split("/").filter(x => x));
};
export const getExtension = filename => {
  const filenameSegments = filename.split(".");
  const filenameSegmentsWithoutFirst = skip(filenameSegments, 1);
  const ext = last(filenameSegmentsWithoutFirst);
  return ext ? "." + ext : "";
};
export const getFilenameWithoutExtension = uri => {
  const filename = getFilename(uri);
  const filenameSegments = filename.split(".");
  return take(filenameSegments, filenameSegments.length - 1 || 1).join(".");
};
export const toFormData = (files, data, { filesParameterName = "files" } = {}) => {
  var flattenedData = flattenObject(data);
  const formData = toArray(files).reduce((r, f) => {
    r.append(filesParameterName, f, f.name);
    return r;
  }, new FormData());
  return Object.entries(flattenedData).reduce((r, e) => {
    r.append(e[0], e[1]);
    return r;
  }, formData);
};

export const fileToBlob = async (file, filename, type) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve(
        byteStringToBlob(
          reader.result,
          filename || file.name,
          type || file.type
        )
      );
    reader.readAsBinaryString(file);
  });
};
export const base64ToBlob = (base64, filename, type) => {

  const hasType = base64.substr(0, 100).includes(',');
  const input = hasType
    ? base64.substr(base64.indexOf(',') + 1)
    : base64;

  if (!type && hasType) {
    type = base64.substr(0, base64.indexOf(',')).split(":")[1].split(";")[0];
  }

  const decodedInput = atob(input);

  const blob = base64StringToBlob(decodedInput, type);
  blob.name = filename;
  return blob;

  // https://stackoverflow.com/questions/12168909/blob-from-dataurl/36183379#answer-12300351
  let byteString = null;

  if (base64.startsWith("data:")) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const segments = base64.split(",");
    byteString = atob(last(segments));
    if (!type) {
      type = segments[0].split(":")[1].split(";")[0];
    }
  } else {
    byteString = base64;
  }

  return byteStringToBlob(byteString, filename, type);
};
export const urlToBlob = async (url, filename/*, type*/) => {
  const blob = await fetch(url).then(r => r.blob());
  if (filename) {
    blob.name = filename;
  }
  // if (type) {
  //   blob.type = type;
  // }
  return blob;
};
export const blobToBase64 = async blob => {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.readAsDataURL(blob);
  });
};

export const readAllText = async blob => {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.readAsText(blob);
  });
};
export const writeAllText = (content, filename, type) => {
  const blob = new Blob([content], { type });
  if (filename) {
    blob.name = filename;
  }
  return blob;
};

export const saveAs = (blob, filename) => {
  // http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js
  const saveAs = (function (e) {
    "use strict";
    if (
      e == null ||
      (typeof navigator !== "undefined" &&
        /MSIE [1-9]\./.test(navigator.userAgent))
    ) {
      return null;
    }
    var t = e.document,
      n = function () {
        return e.URL || e.webkitURL || e;
      },
      r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
      o = "download" in r,
      a = function (e) {
        var t = new MouseEvent("click");
        e.dispatchEvent(t);
      },
      i = /constructor/i.test(e.HTMLElement) || e.safari,
      f = /CriOS\/[\d]+/.test(navigator.userAgent),
      u = function (t) {
        (e.setImmediate || e.setTimeout)(function () {
          throw t;
        }, 0);
      },
      s = "application/octet-stream",
      d = 1e3 * 40,
      c = function (e) {
        var t = function () {
          if (typeof e === "string") {
            n().revokeObjectURL(e);
          } else {
            e.remove();
          }
        };
        setTimeout(t, d);
      },
      l = function (e, t, n) {
        t = [].concat(t);
        var r = t.length;
        while (r--) {
          var o = e["on" + t[r]];
          if (typeof o === "function") {
            try {
              o.call(e, n || e);
            } catch (a) {
              u(a);
            }
          }
        }
      },
      p = function (e) {
        if (
          /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
            e.type
          )
        ) {
          return new Blob([String.fromCharCode(65279), e], { type: e.type });
        }
        return e;
      },
      v = function (t, u, d) {
        if (!d) {
          t = p(t);
        }
        var v = this,
          w = t.type,
          m = w === s,
          y,
          h = function () {
            l(v, "writestart progress write writeend".split(" "));
          },
          S = function () {
            if ((f || (m && i)) && e.FileReader) {
              var r = new FileReader();
              r.onloadend = function () {
                var t2 = f
                  ? r.result
                  : r.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                var n = e.open(t2, "_blank");
                if (!n) e.location.href = t2;
                v.readyState = v.DONE;
                h();
              };
              r.readAsDataURL(t);
              v.readyState = v.INIT;
              return;
            }
            if (!y) {
              y = n().createObjectURL(t);
            }
            if (m) {
              e.location.href = y;
            } else {
              var o = e.open(y, "_blank");
              if (!o) {
                e.location.href = y;
              }
            }
            v.readyState = v.DONE;
            h();
            c(y);
          };
        v.readyState = v.INIT;
        if (o) {
          y = n().createObjectURL(t);
          setTimeout(function () {
            r.href = y;
            r.download = u;
            a(r);
            h();
            c(y);
            v.readyState = v.DONE;
          });
          return;
        }
        S();
      },
      w = v.prototype,
      m = function (e, t, n) {
        return new v(e, t || e.name || "download", n);
      };
    if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
      return function (e, t, n) {
        t = t || e.name || "download";
        if (!n) {
          e = p(e);
        }
        return navigator.msSaveOrOpenBlob(e, t);
      };
    }
    w.abort = function () { };
    w.readyState = w.INIT = 0;
    w.WRITING = 1;
    w.DONE = 2;
    w.error = w.onwritestart = w.onprogress = w.onwrite = w.onabort = w.onerror = w.onwriteend = null;
    return m;
  })(
    (typeof self !== "undefined" && self) ||
    (typeof window !== "undefined" && window) ||
    this.content
  );
  return saveAs(blob, filename || blob.name || "file");
};

// utility
export default {
  isFile,
  createUrl,
  revokeUrl,
  getFilename,
  getExtension,
  getFilenameWithoutExtension,
  toFormData,

  fileToBlob,
  base64ToBlob,
  urlToBlob,
  blobToBase64,

  readAllText,
  writeAllText,

  saveAs
};
