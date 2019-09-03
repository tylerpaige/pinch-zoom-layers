/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sketches/main/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/sketches/main/css/styles.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/sketches/main/css/styles.scss ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v4.0 | 20180602\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block; }\n\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n  display: none; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nfooter {\n  text-align: center;\n  width: 100%;\n  padding: 10px 5px;\n  color: #999999;\n  font-family: sans-serif;\n  font-size: 15px; }\n\nhtml,\nbody {\n  height: 100%;\n  overflow: hidden; }\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0; }\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 auto;\n  width: 100%;\n  padding: 0 10px; }\n\n.parent {\n  width: 100%;\n  max-width: 450px; }\n\n.aspect-ratio-sizer {\n  padding-top: 129.41176%;\n  position: relative; }\n\n.layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #f5eeff;\n  background: #eee;\n  padding: 1.4em 1.7em;\n  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n  line-height: 1.25;\n  font-family: sans-serif;\n  font-size: 20px;\n  color: #444; }\n  .layer:before, .layer:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 200%;\n    height: 200%;\n    transform: scale(0.5);\n    transform-origin: top left;\n    pointer-events: none; }\n  .layer:before {\n    border: 2px solid red; }\n  .layer:after {\n    border: 1px solid lime; }\n\n.layer.is-exiting {\n  transform: scale(5) !important;\n  opacity: 0 !important;\n  transition: transform 175ms ease-in, opacity 50ms linear; }\n\n.layer.is-resetting {\n  transition: transform 175ms ease-in, opacity 50ms linear; }\n\n.layer.will-exit {\n  background-color: #FFD95B;\n  color: #3B2E02; }\n\n.layer.is-zooming {\n  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.33);\n  transition: box-shadow 125ms linear; }\n\n.instructions {\n  background: white;\n  padding: 0.4em 0.7em;\n  border-radius: 1em;\n  display: inline-block; }\n\n.instructions--release {\n  display: none;\n  position: relative;\n  z-index: 100; }\n\nhtml.will-exit .instructions--start {\n  display: none; }\n\nhtml.will-exit .instructions--release {\n  display: inline-block; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/sketches/main/css/styles.scss":
/*!*******************************************!*\
  !*** ./src/sketches/main/css/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/sass-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/sketches/main/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"singleton":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/sketches/main/js/constants.js":
/*!*******************************************!*\
  !*** ./src/sketches/main/js/constants.js ***!
  \*******************************************/
/*! exports provided: LIMINAL_MAX_SCALE, LIMINAL_MIN_OPACITY, THRESHOLD_FACTOR, PINCH_THRESHOLD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMINAL_MAX_SCALE", function() { return LIMINAL_MAX_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMINAL_MIN_OPACITY", function() { return LIMINAL_MIN_OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THRESHOLD_FACTOR", function() { return THRESHOLD_FACTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINCH_THRESHOLD", function() { return PINCH_THRESHOLD; });
var LIMINAL_MAX_SCALE = 1.5;
var LIMINAL_MIN_OPACITY = 0.5;
var THRESHOLD_FACTOR = 0.66;
var PINCH_THRESHOLD = 1;


/***/ }),

/***/ "./src/sketches/main/js/index.js":
/*!***************************************!*\
  !*** ./src/sketches/main/js/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.scss */ "./src/sketches/main/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/sketches/main/js/util.js");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-management */ "./src/sketches/main/js/state-management.js");
/* harmony import */ var _touch_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./touch-events */ "./src/sketches/main/js/touch-events.js");
var _this = undefined;






var init = function init() {
  var root = document.getElementById('root');
  var els = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getElements"])(root);
  var state = _state_management__WEBPACK_IMPORTED_MODULE_2__["getDefault"](els);
  root.addEventListener('touchstart', _touch_events__WEBPACK_IMPORTED_MODULE_3__["handlePointerDown"].bind(_this, state, els));
  root.addEventListener('touchmove', _touch_events__WEBPACK_IMPORTED_MODULE_3__["handlePointerMove"].bind(_this, state, els));
  root.addEventListener('touchend', _touch_events__WEBPACK_IMPORTED_MODULE_3__["handlePointerUp"].bind(_this, state, els));
};

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/sketches/main/js/interaction-handlers.js":
/*!******************************************************!*\
  !*** ./src/sketches/main/js/interaction-handlers.js ***!
  \******************************************************/
/*! exports provided: showTriggerHint, hideTriggerHint, pinchZoom, zoomIn, cancelZoom, startPinchZoom, endPinchZoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTriggerHint", function() { return showTriggerHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideTriggerHint", function() { return hideTriggerHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinchZoom", function() { return pinchZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIn", function() { return zoomIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelZoom", function() { return cancelZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startPinchZoom", function() { return startPinchZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endPinchZoom", function() { return endPinchZoom; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/sketches/main/js/constants.js");


var showTriggerHint = function showTriggerHint(layer) {
  layer.classList.add('will-exit');
  document.documentElement.classList.add('will-exit');
};

var hideTriggerHint = function hideTriggerHint(layer) {
  layer.classList.remove('will-exit');
  document.documentElement.classList.remove('will-exit');
};

var startPinchZoom = function startPinchZoom(layer) {
  layer.classList.add('is-zooming');
};

var endPinchZoom = function endPinchZoom(layer) {
  layer.classList.remove('is-zooming');
};

var pinchZoom = function pinchZoom(layer, pinchAmount) {
  var scale = pinchAmount * (_constants__WEBPACK_IMPORTED_MODULE_0__["LIMINAL_MAX_SCALE"] - 1) + 1;
  var opacity = 1 - pinchAmount * (1 - _constants__WEBPACK_IMPORTED_MODULE_0__["LIMINAL_MIN_OPACITY"]);
  layer.style.transform = "scale(".concat(scale, ")");
  layer.style.opacity = opacity;
};

var zoomIn = function zoomIn(layer) {
  document.documentElement.classList.remove('will-exit');
  document.documentElement.classList.add('is-exiting');
  layer.classList.add('is-exiting');
};

var cancelZoom = function cancelZoom(layer) {
  layer.classList.add('is-resetting');
  layer.style.opacity = 1;
  layer.style.transform = 'scale(1)';
  setTimeout(function () {
    layer.classList.remove('is-resetting');
  }, 200);
};



/***/ }),

/***/ "./src/sketches/main/js/state-management.js":
/*!**************************************************!*\
  !*** ./src/sketches/main/js/state-management.js ***!
  \**************************************************/
/*! exports provided: getDefault, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefault", function() { return getDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/sketches/main/js/constants.js");


var getDefault = function getDefault(els) {
  var bb = els.root.getBoundingClientRect();
  var minorAxis = Math.min(bb.width, bb.height);
  var zoomThreshold = minorAxis * _constants__WEBPACK_IMPORTED_MODULE_0__["THRESHOLD_FACTOR"];
  return {
    zoomThreshold: zoomThreshold,
    pinchAmount: 0,
    activeLayerIndex: els.layers.length - 1,
    startingDistance: 0,
    triggerHintIsVisible: false
  };
};

var reset = function reset(state) {
  state.pinchAmount = 0;
  state.startingDistance = 0;
};



/***/ }),

/***/ "./src/sketches/main/js/touch-events.js":
/*!**********************************************!*\
  !*** ./src/sketches/main/js/touch-events.js ***!
  \**********************************************/
/*! exports provided: handlePointerDown, handlePointerMove, handlePointerUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePointerDown", function() { return handlePointerDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePointerMove", function() { return handlePointerMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlePointerUp", function() { return handlePointerUp; });
/* harmony import */ var _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction-handlers */ "./src/sketches/main/js/interaction-handlers.js");
/* harmony import */ var _state_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-management */ "./src/sketches/main/js/state-management.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/sketches/main/js/constants.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/sketches/main/js/util.js");





var handlePointerDown = function handlePointerDown(state, els, e) {
  if (!e.touches || e.touches.length < 2) {
    return;
  }

  var activeLayer = els.layers[state.activeLayerIndex];
  _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__["startPinchZoom"](activeLayer);
  var distance = Object(_util__WEBPACK_IMPORTED_MODULE_3__["touchesToDistance"])(e.touches);
  state.startingDistance = distance;
};

var handlePointerMove = function handlePointerMove(state, els, e) {
  if (!e.touches || e.touches.length < 2) {
    return;
  }

  var distance = Object(_util__WEBPACK_IMPORTED_MODULE_3__["touchesToDistance"])(e.touches);
  var distanceDelta = distance - state.startingDistance;
  var pinchAmount = distanceDelta / state.zoomThreshold;

  if (distance != state.distance) {
    handlePinch(pinchAmount, state, els);
  }

  state.pinchAmount = pinchAmount;
  return state;
};

var handlePinch = function handlePinch(pinchAmount, state, els) {
  // As user pinches, the top-most layer should grow and fade out
  // but not completely
  var activeLayer = els.layers[state.activeLayerIndex];
  _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__["pinchZoom"](activeLayer, pinchAmount);

  if (pinchAmount >= _constants__WEBPACK_IMPORTED_MODULE_2__["PINCH_THRESHOLD"] && !state.triggerHintIsVisible) {
    _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__["showTriggerHint"](activeLayer);
    state.triggerHintIsVisible = true;
  } else if (pinchAmount < _constants__WEBPACK_IMPORTED_MODULE_2__["PINCH_THRESHOLD"] && state.triggerHintIsVisible) {
    _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__["hideTriggerHint"](activeLayer);
    state.triggerHintIsVisible = false;
  }
};

var handlePointerUp = function handlePointerUp(state, els, e) {
  // if distance is above zoomThreshold, trigger
  // a layer switch
  var activeLayer = els.layers[state.activeLayerIndex];
  var nextLayerIndex = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getNextLayerIndex"])(els.layers, state.activeLayerIndex);
  var nextLayer = els.layers[nextLayerIndex];
  _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__["endPinchZoom"](activeLayer);

  if (state.pinchAmount >= _constants__WEBPACK_IMPORTED_MODULE_2__["PINCH_THRESHOLD"]) {
    _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__["zoomIn"](activeLayer);
    state.activeLayerIndex = nextLayerIndex;
  } else {
    _interaction_handlers__WEBPACK_IMPORTED_MODULE_0__["cancelZoom"](activeLayer);
  }

  _state_management__WEBPACK_IMPORTED_MODULE_1__["reset"](state);
};



/***/ }),

/***/ "./src/sketches/main/js/util.js":
/*!**************************************!*\
  !*** ./src/sketches/main/js/util.js ***!
  \**************************************/
/*! exports provided: touchesToDistance, calculateDistance, getNextLayerIndex, getElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchesToDistance", function() { return touchesToDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateDistance", function() { return calculateDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextLayerIndex", function() { return getNextLayerIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElements", function() { return getElements; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var touchesToDistance = function touchesToDistance(touches) {
  var pos1 = [touches[0].clientX, touches[0].clientY];
  var pos2 = [touches[1].clientX, touches[1].clientY];
  return calculateDistance(pos1, pos2);
};

var calculateDistance = function calculateDistance(pos1, pos2) {
  var _pos = _slicedToArray(pos1, 2),
      x1 = _pos[0],
      y1 = _pos[1];

  var _pos2 = _slicedToArray(pos2, 2),
      x2 = _pos2[0],
      y2 = _pos2[1];

  var a = Math.abs(x2 - x1);
  var b = Math.abs(y2 - y1);
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

var getNextLayerIndex = function getNextLayerIndex(layers, activeIndex) {
  return activeIndex > 0 ? activeIndex - 1 : layers.length - 1;
};

var getElements = function getElements(root) {
  var layers = root.querySelectorAll('.layer');
  return {
    root: root,
    layers: layers
  };
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map