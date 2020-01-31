(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(199)),c={id:"not",title:"NOT"},i={id:"references/formulas/not",title:"NOT",description:"A NOT statement returns a TRUE value if the argument is FALSE and a FALSE value if the argument is TRUE. ",source:"@site/docs/references/formulas/not.mdx",permalink:"/docs/references/formulas/not",sidebar:"functionSideBar",previous:{title:"OR",permalink:"/docs/references/formulas/or"},next:{title:"XOR",permalink:"/docs/references/formulas/xor"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A NOT statement returns a TRUE value if the argument is FALSE and a FALSE value if the argument is TRUE. "),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"NOT ( logical_test )"),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"logical_test \u2013 The condition to be evaluated. "),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a scenario in which an employee is eligible for Sales Bonus if Total Sales is greater than Sales Goal. Sales Bonus is calculated as Bonus% * Total Sales."),Object(o.b)("p",null,"To achieve this, the formula should be IF (NOT (Total Sales - Sales Goal), 0 , Bonus% * Total Sales)."),Object(o.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-gb/article/not-function-9cfc6011-a054-40c7-a140-cd4ba2d87d77"}),"NOT")))}s.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,i({ref:t},u,{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);