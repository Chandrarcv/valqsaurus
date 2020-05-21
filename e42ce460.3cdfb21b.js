(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),i=n(9),a=(n(0),n(209)),o=n(211),c=(n(215),{id:"simulation",title:"Simulate Tab",sidebar_label:"Simulate Tab"}),u={id:"simulation/simulation",title:"Simulate Tab",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/simulation/simulation.mdx",permalink:"/valqsaurus/docs/simulation/simulation",sidebar_label:"Simulate Tab",sidebar:"sideBar",previous:{title:"View History",permalink:"/valqsaurus/docs/planning/others/view-history"},next:{title:"Analyze Tab",permalink:"/valqsaurus/docs/analysis/variance_analysis"}},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{style:{textAlign:"justify"}},"By default, you will see the below screen upon clicking on the Simulate tab.")," ",Object(a.b)("br",null),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/Simulation/sim1.png")})),Object(a.b)("br",null),Object(a.b)("div",{style:{textAlign:"justify"}},"The Simulate tab consists of two panels:  ",Object(a.b)("br",null)," ",Object(a.b)("br",null),Object(a.b)("p",null,"The one on the left side is called ",Object(a.b)("strong",{parentName:"p"},"Navigation Panel")," where you can create multiple Scenarios, perform Simulations, view\nthe Key Inputs and KPIs, etc.")),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/Simulation/sim2.png")})),Object(a.b)("div",{style:{textAlign:"justify"}}," ",Object(a.b)("br",null),Object(a.b)("p",null,"The right side panel denotes the ",Object(a.b)("strong",{parentName:"p"},"Canvas")," which represents the visual with different Nodes where the simulation\ncan be done at each Node Level (see Figure below).")),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/Simulation/sim3.png")}))," ",Object(a.b)("br",null),"In the next section, you will learn about the common functionalities of the features in the Simulate tab.")}b.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,d=b["".concat(o,".").concat(p)]||b[p]||f[p]||a;return n?i.a.createElement(d,c({ref:t},s,{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";var r=n(0),i=n(48);t.a=function(){return Object(r.useContext)(i.a)}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(214);var r=n(210);function i(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},212:function(e,t,n){var r=n(66),i=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},213:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(i){}}return!0}},214:function(e,t,n){"use strict";var r=n(17),i=n(34),a=n(212),o="".startsWith;r(r.P+r.F*n(213)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},215:function(e,t,n){"use strict";var r=n(1),i=n(0),a=n.n(i),o=n(35),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,u=e.href,s=n||u,l=c.test(s),b=Object(i.useRef)(!1),f="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(i.useEffect)((function(){return!f&&l&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,l]),s&&l?a.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(s),b.current=!0)},innerRef:function(e){var n,r;f&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):a.a.createElement("a",Object(r.a)({},e,{href:s}))}}}]);