(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(199)),i={id:"cumprinc",title:"CUMPRINC"},c={id:"references/formulas/cumprinc",title:"CUMPRINC",description:"The CUMPRINC function returns cumulative principal paid on a loan between two periods.",source:"@site/docs/references/formulas/cumprinc.mdx",permalink:"/docs/references/formulas/cumprinc",sidebar:"functionSideBar",previous:{title:"CUMIPMT",permalink:"/docs/references/formulas/cumipmt"},next:{title:"RATE",permalink:"/docs/references/formulas/rate"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The CUMPRINC function returns cumulative principal paid on a loan between two periods."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"CUMPRINC (Rate, Nper, PV, start_period, end_period, Type)"),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,"Rate \u2013 The interest rate per period. "),Object(o.b)("p",null,"Nper \u2013 The total number of periods."),Object(o.b)("p",null,"PV \u2013 The present value of the loan. "),Object(o.b)("p",null,"start_period \u2013 The first payment period. "),Object(o.b)("p",null,"end_period \u2013  The last payment period."),Object(o.b)("p",null,"Type \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. "),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a $10,000 loan at an annual rate of 10% that is to be paid off in 3 years. All payments are made at the beginning of the month."),Object(o.b)("p",null,"To calculate the principal payment for a specified range of periods, say between period 12 and 18, the formula should be\nCUMPRINC (Rate/12, Number of Years*12, Loan Amount, 12, 18, 0).\nThe cumulative principal payments between 12th and 18th months is calculated to be $1882.04."),Object(o.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/CUMPRINC-function-94A4516D-BD65-41A1-BC16-053A6AF4C04D"}),"CUMPRINC")))}u.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);