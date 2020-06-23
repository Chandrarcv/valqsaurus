(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var n,o=a(1),r=a(9),i=(a(0),a(215)),c=a(216),l={id:"budget-allocation",title:"Sample Budgeting Scenarios"},s={id:"planning/budget-allocation",title:"Sample Budgeting Scenarios",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/planning/budgeting-and-allocation.mdx",permalink:"/docs/planning/budget-allocation",sidebar:"sideBar",previous:{title:"Update Plan",permalink:"/docs/planning/modify"},next:{title:"Time Series Forecasting",permalink:"/docs/planning/time_series"}},b=[{value:"Scenario 1: To allocate parent node\u2019s changes to some of the immediate child nodes",id:"scenario-1-to-allocate-parent-nodes-changes-to-some-of-the-immediate-child-nodes",children:[]},{value:"Scenario 2: To allocate a node\u2019s increase/decrease in aggregate value to some of the periods",id:"scenario-2-to-allocate-a-nodes-increasedecrease-in-aggregate-value-to-some-of-the-periods",children:[]},{value:"Scenario 3: To increase the period values of a node based on a monthly trend",id:"scenario-3-to-increase-the-period-values-of-a-node-based-on-a-monthly-trend",children:[]},{value:"Scenario 4: To perform driver-based allocation",id:"scenario-4-to-perform-driver-based-allocation",children:[]},{value:"Scenario 5: To increase the period values of a node according to a combination of trends",id:"scenario-5-to-increase-the-period-values-of-a-node-according-to-a-combination-of-trends",children:[]}],p=(n="Zoom",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"scenario-1-to-allocate-parent-nodes-changes-to-some-of-the-immediate-child-nodes"},"Scenario 1: To allocate parent node\u2019s changes to some of the immediate child nodes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For our example, expand East node. Now select the node\n'Industrials' and lock the node (see Figure below)."),Object(i.b)(p,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ logo",src:Object(c.a)("/doc-images/plan/ba1.png")}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now select the Total Cell for node 'East' as shown in the\nbelow Figure."),Object(i.b)("img",{alt:"Cell selection",src:Object(c.a)("/doc-images/plan/ba2.png")}),Object(i.b)("p",{parentName:"li"},"You can update the number by double clicking the cell and entering the\nnumber directly in the value bar. Or you can enter the number in the\npopup.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now double click the total cell and type '+10%' at the end of the\nnumber and click on 'Weight' as shown in the below Figure."),Object(i.b)("img",{alt:"Total cell value increased to 10 %",src:Object(c.a)("/doc-images/plan/ba3.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You will be able to view the 'Spread by Weights' screen."),Object(i.b)("img",{alt:"Spread by Weights",src:Object(c.a)("/doc-images/plan/ba4.png")}),Object(i.b)("p",{parentName:"li"},"By default, the current node and the current series are selected. You\ncan also select different weights to allocate. You can further decide to\nallocate the full amount or the delta amount (see Figure above)."),Object(i.b)("p",{parentName:"li"},"The 'Overwrite Values' option deletes the existing period values and\nrewrites the new allocated value. The 'Append to Values' option will add\nthe delta value to the existing period values and only the delta value\ngets allocated based on the selected weights (see Figure above). For our\nexample, the Overwrite option has been selected.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"As an end result of the Scenario 1, you will be able to view the\nInput Editor screen updated with the configured values (see Figure\nbelow). The cells which were impacted because of the allocation\noperations turns yellow."),Object(i.b)("img",{alt:"Increased 'Total Revenue' without impacting 'Other\nRevenue'",src:Object(c.a)("/doc-images/plan/ba5.png")}))),Object(i.b)("h2",{id:"scenario-2-to-allocate-a-nodes-increasedecrease-in-aggregate-value-to-some-of-the-periods"},"Scenario 2: To allocate a node\u2019s increase/decrease in aggregate value to some of the periods"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For our example, select the Node 'Cost of Sales' for April month\na. (see Figure below)."),Object(i.b)("img",{alt:"Cell Selection",src:Object(c.a)("/doc-images//pl16.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Increase the cell value by 10% and click Enter (see Figure below)."),Object(i.b)("img",{alt:"Cost of Sales for April increased by 10%",src:Object(c.a)("/doc-images//pl17.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now click the \u201cCopy To\u201d icon to copy the value from April across the\na. periods till December (see Figure below)"),Object(i.b)("img",{alt:"Copy-to icon",src:Object(c.a)("/doc-images//pl18.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After clicking the Copy to icon, the Input Editor screen looks\na. similar to the Figure shown below."),Object(i.b)("img",{alt:"Constant cell values from Apr to Dec",src:Object(c.a)("/doc-images//pl19.png")}))),Object(i.b)("h2",{id:"scenario-3-to-increase-the-period-values-of-a-node-based-on-a-monthly-trend"},"Scenario 3: To increase the period values of a node based on a monthly trend"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For our example, select the Node 'Other Costs' for Jan month (see\na. Figure below)."),Object(i.b)("img",{alt:"Cell Selection",src:Object(c.a)("/doc-images//pl22.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now click the 'Trend' icon (see Figure below)"),Object(i.b)("img",{alt:"Trend icon",src:Object(c.a)("/doc-images//pl23.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now the Trend pop up opens. For our example, select the 'By\na. Percentage' option and enter value 2 in the Increase Trend section.\nb. Now select the Overwrite Values option and click 'Apply' (see Figure\nc. below)."),Object(i.b)("img",{alt:"Increasing Trend of 2 %",src:Object(c.a)("/doc-images//pl24.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Based on the above configuration, you will be able to view the Input\na. Editor screen as shown below."),Object(i.b)("img",{alt:"Increased monthly trend",src:Object(c.a)("/doc-images//pl25.png")}))),Object(i.b)("h2",{id:"scenario-4-to-perform-driver-based-allocation"},"Scenario 4: To perform driver-based allocation"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For our example, select the Node 'Support Costs' in Total column\n(see Figure below)."),Object(i.b)("img",{alt:"Cell Selection",src:Object(c.a)("/doc-images//pl26.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now click the 'Weight' icon (see Figure below)"),Object(i.b)("img",{alt:"Weight icon",src:Object(c.a)("/doc-images//pl27.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The Spread by Weight pop up opens. For our example, select the Node\nas 'Cost of Sales'. Select the 'Overwrite Values' option and click\n'Apply' (see Figure below)."),Object(i.b)("img",{alt:"Spreads by Weights",src:Object(c.a)("/doc-images//pl28.png")})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"As an end result of the Scenario 4, you will be able to view the\nInput Editor screen loaded with the redistributed values (see Figure\nbelow)."),Object(i.b)("img",{alt:"Redistributed values",src:Object(c.a)("/doc-images//pl29.png")}))),Object(i.b)("h2",{id:"scenario-5-to-increase-the-period-values-of-a-node-according-to-a-combination-of-trends"},"Scenario 5: To increase the period values of a node according to a combination of trends"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the Node 'Rent' and lock the entire Row.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Release the lock for the cells from Jan to Mar.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now select the cell 'Jan'. Increase the value by 5% (see Figure\na. below)."),Object(i.b)("p",{parentName:"li"},"a. ",Object(i.b)("img",{alt:"Rent increased by 5% for Jan Month",src:Object(c.a)("/doc-images//pl30.png")}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now copy it across the cells. The Input Editor looks similar to the\na. Figure as shown below."),Object(i.b)("p",{parentName:"li"},"a. ",Object(i.b)("img",{alt:"Rent increased by 5% across the cells in the Row",src:Object(c.a)("/doc-images//pl31.png")}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now release the lock for the complete Row of the Node Rent.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select the cell 'Apr'. Increase the value by 10% (see Figure below)."),Object(i.b)("p",{parentName:"li"},"a. ",Object(i.b)("img",{alt:"Rent increased by 10% for Apr Month",src:Object(c.a)("/doc-images//pl32.png")}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Now copy it across the cells. The Input Editor looks similar to the\na. Figure as shown below."),Object(i.b)("p",{parentName:"li"},"a. ",Object(i.b)("img",{alt:"Rent increased by 10% from Apr till Dec",src:Object(c.a)("/doc-images//pl33.png")})))))}u.isMDXComponent=!0},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return a?o.a.createElement(m,c({ref:t},s,{components:a})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(220);var n=a(217);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},217:function(e,t,a){"use strict";var n=a(0),o=a(48);t.a=function(){return Object(n.useContext)(o.a)}},218:function(e,t,a){var n=a(66),o=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(o(e))}},219:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},220:function(e,t,a){"use strict";var n=a(17),o=a(34),r=a(218),i="".startsWith;n(n.P+n.F*a(219)("startsWith"),"String",{startsWith:function(e){var t=r(this,e,"startsWith"),a=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);