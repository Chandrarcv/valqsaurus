(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),r=(n(0),n(199)),o=n(201),l={id:"conducting-what-if",title:"Conducting what-if analysis"},s={id:"general/conducting-what-if",title:"Conducting what-if analysis",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/general/conducting-what-if.mdx",permalink:"/docs/general/conducting-what-if",sidebar:"sideBar",previous:{title:"Understanding the Node Widget Information",permalink:"/docs/general/understanding-node-widget"},next:{title:"Getting more information about a value driver",permalink:"/docs/general/more-info-value-driver"}},c=[],d={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"One of the main aspects of the valQ Custom Visual is to be able to\nsimulate the impacts changes to key drivers such as prices have on the\nfull year forecast. As we can\u2019t change the past, such a simulated change\nshould only be applied to future period. The valQ Custom Visual have\nthis capability. When performing what-if analysis, the period that a\nsimulation should be applied from is selected in the Side Panel (current\nperiod is default):"),Object(r.b)("img",{alt:"What-if-Analysis",src:Object(o.a)("/doc-images/7.1.png")}),Object(r.b)("p",null,"Assuming that we calculate fuel cost based on litre per month and price\nas $/l and we are at the end of period 9, the simulated cost should be\ncalculated first at the monthly level with the % change applied to\nperiod 9 and onwards. Once the individual months are calculated, they\ncan then be aggregated based on the rule of the node (sum for diesel\ncost, weighted average for diesel price):"),Object(r.b)("img",{alt:"",src:Object(o.a)("/doc-images/formula.png")}),Object(r.b)("p",null,"When hovering over a node, the bottom half of the node becomes a slider.\nDrag the slider left to vary the node by a negatively, drag right for\npositive. As you drag, the values for the selected node is dynamically\nrecalculated and displayed. When releasing, the tree will immediately\nrecalculate all dependent nodes and show the result."),Object(r.b)("img",{alt:"Simulation",src:Object(o.a)("/doc-images/7.2.png")}),Object(r.b)("p",null,"A simulation change is either a pct. Change, a fixed future price or a\npct. Growth depending on the simulation model defined for the value\ndriver."),Object(r.b)("p",null,"The default method for the driver can be seen on the simulation tooltip.\nYou can also change the selected model by selecting at the bottom of the\ntooltip."),Object(r.b)("img",{alt:"Simulation Tooltip",src:Object(o.a)("/doc-images/7.3.png")}),Object(r.b)("p",null,"Understanding that a change is applied to the selected periods only is\nparticularly important to understand when displaying the Full Year value\nand the node is using a weighted average. The displayed value is the\nweighted average value for the full year, not the value for future\nperiods."),Object(r.b)("p",null,"A simplified example will help understanding this critical concept.\nLet\u2019s assume that the diesel price is $1.014 for all periods and the\nmonthly fuel consumption is constant as well at 1m litres and we have\nselected period 9 as we want to apply the simulation to the remaining\nperiods of the year."),Object(r.b)("p",null,"We now drag the slider for the fuel price to the right and the node will\nshow the new weighted average value. Let\u2019s say we drag it to the right\nso the full year weighted average is $1.030. As the first 8 periods were\n$1.014, the weighted average of $1.030 means that the simulated price\nchange is equivalent of a future fuel price of $1.20. To better\nunderstand the individual future period simulations when looking a Full\nYear aggregated number, it is useful to pay attention to the Month Data\nalso shown on the node. The real world is a little more complex as the\nprice is not necessarily the same every month and the fuel consumed is\nunlikely to be constant as well. Below is an example of such a\nsimulation based on a real data set:"),Object(r.b)("img",{alt:"Simulation",src:Object(o.a)("/doc-images/7.4.png")}),Object(r.b)("p",null,"The weighted average price was 1.014. We now simulated a 2% increase in\nthe prices selected and future periods which equates to a new weighted\naverage price of 1.030. If you look at the month Value, you can see for\nthe selected month, this equates to the higher price of 1.195."),Object(r.b)("p",null,"Multiple variations can be applied in parallel as they are expressed as\npct. The top left % indicate the cumulative impact on this particular\nnode of all simulation that impacts it."),Object(r.b)("p",null,"Any node with a variation will have the blue pen icon in the top middle\nshowing the percentage the node has been varied with. For quick what-if\nanalysis at any level and a dynamic work process from the general to the\nspecific, you can apply a simulation on any level."),Object(r.b)("p",null,"Certain nodes may have been locked from changes in the model. This is\ngenerally when there is a specific reason not to vary this node directly\nfor consistency purposes. A locked node will not have the grey pen icon"),Object(r.b)("img",{alt:"..image::\\/doc-images/image48",src:Object(o.a)("/doc-images/media/image46.png")}),"or a slider when hovering.",Object(r.b)("p",null,"Certain nodes may be displayed multiple times in the tree. An example is\nMaterial Moved as it affects Mining and Mill Throughput. In these\nscenarios, one node is linked to the other. If you simulate a change in\na linked node, the node it is pointing to is instead changed so it\napplies both to the selected node and anywhere else where the driver is\nused. If a node is a linked node, it has the Linked node text in the\nbottom right corner:"),Object(r.b)("img",{alt:"Simulation",src:Object(o.a)("/doc-images/7.5.png")}))}u.isMDXComponent=!0},199:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(o,".").concat(p)]||u[p]||h[p]||r;return n?i.a.createElement(f,l({ref:t},c,{components:n})):i.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";var a=n(0),i=n(48);t.a=function(){return Object(a.useContext)(i.a)}},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(204);var a=n(200);function i(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},202:function(e,t,n){var a=n(66),i=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},203:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(i){}}return!0}},204:function(e,t,n){"use strict";var a=n(17),i=n(34),r=n(202),o="".startsWith;a(a.P+a.F*n(203)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,n):t.slice(n,n+a.length)===a}})}}]);