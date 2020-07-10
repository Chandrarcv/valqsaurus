(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return g}));var o=a(1),i=a(9),n=(a(0),a(216)),r=a(217),s=(a(222),a(224)),b=(a(118),{id:"time_series",title:"Time Series Forecasting"}),l={id:"planning/time_series",title:"Time Series Forecasting",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/planning/time_series.mdx",permalink:"/docs/planning/time_series",sidebar:"sideBar",previous:{title:"Sample Budgeting Scenarios",permalink:"/docs/planning/budget-allocation"},next:{title:"Simulate Tab",permalink:"/docs/simulation/simulation"}},c=[{value:"Forecast options",id:"forecast-options",children:[]},{value:"Advanced options",id:"advanced-options",children:[{value:"1. Auto Forecast",id:"1-auto-forecast",children:[]},{value:"2. Linear Trend",id:"2-linear-trend",children:[]},{value:"3. Moving Average",id:"3-moving-average",children:[]},{value:"4. Weighted Moving Average",id:"4-weighted-moving-average",children:[]}]}],d={rightToc:c};function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{style:{textAlign:"justify"}},'ValQ has in-built Time Series Forecasting capabilities that allows you to make forecast based on past data collected over a period of time. To access this powerful feature, all you have to do is click on "Auto Forecast" button as shown below.')," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/plan11.png")}))),Object(n.b)("h2",{id:"forecast-options"},"Forecast options"),Object(n.b)("p",null,"Clicking on Auto Forecast will give you the options to configure time series forecasting that make predictions\ndesgined to suit your needs.       "),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf1.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"},className:"table-center"},Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null})),Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Options"),Object(n.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"1"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Target Node"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Node for which forecast is done")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"2"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Target Period"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Period for which forecast is done")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"3"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Forecast Basis"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Criteria based on which forecast is performed")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"4"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Past Data Series & Weights"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Choose the past data series here and it's weights are given in descending order")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"5"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Source Periods"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Choose the duration of past data considered for forecast")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"6"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Add Growth"),Object(n.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Growth component can be added here on absolute or percentage terms")))))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"advanced-options"},"Advanced options"),Object(n.b)("p",null,"Advanced options let's you choose the Forecasting Method, Distribution Method after configuring the\nTarget and Forecast Basis options."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf2.png")})))," ",Object(n.b)("br",null),Object(n.b)("h3",{id:"1-auto-forecast"},"1. Auto Forecast"),Object(n.b)("div",{style:{textAlign:"justify"}},"Auto Forecast option automatically makes prediction of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. Growth component can be added as absolute value or percentage growth when needed. This option does not need Distribution Method as ValQ performs time series forecasting automatically.")," ",Object(n.b)("br",null),Object(n.b)("p",null,"Let's understand how ValQ performs time series forecasting with examples to predict 2020 results."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(n.b)("div",{style:{textAlign:"justify"}},"In the below example, forecasting is done for node 'Overall Result' for the year 2020 based on 2019 actuals data with weight as 1 and growth not incorporated.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf3.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(n.b)("div",{style:{textAlign:"justify"}},"The below figure shows the results of Auto Forecasting as per the above configuration with three choices of forecast i.e. Optimized, Balanced and Conservative. Notice that the Net Growth of Conservative is 0.00% as we didn't add growth in the Forecast Basis option.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf3.2.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(n.b)("div",{style:{textAlign:"justify"}},"Here's another example where forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 actuals with weight as 2 and 1 respectively and 10% growth. Auto Forecast is the Forecast Method applied in this example.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf4.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(n.b)("div",{style:{textAlign:"justify"}},"The below figure shows the results of Auto Forecasting as per the above configuration with three choices of forecast i.e. Optimized, Balanced and Conservative. Notice that the Net Growth of Conservative is 10% as we have added 10% growth in the Forecast Basis option.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf4.2.png")})))," ",Object(n.b)("br",null),Object(n.b)("h3",{id:"2-linear-trend"},"2. Linear Trend"),Object(n.b)("div",{style:{textAlign:"justify"}},"Linear Trend method applies Linar Regression to make prediction of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. Growth component can be added as absolute value or percentage growth when needed and Distribution Method can selected as Match or M2M(+1).")," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(n.b)("div",{style:{textAlign:"justify"}},"In this example forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 full year actuals with weight as 2 and 1 respectively and 10% growth. The Forecast Method applied in this example is Linear Trend with 'Match' as Distribution Method.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf8.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(n.b)("div",{style:{textAlign:"justify"}},"The below figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying Linear Trend method and Match distributes the total to it's periods based on the distribution of only recent Past Series Data selected with weight in Forecast Basis, here 2019 actuals with weight as 2.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf8.2.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(n.b)("div",{style:{textAlign:"justify"}},"Here's another example where forecasting is done for node 'Overall Result' for the year 2020 based on 2019 and 2018 full year actuals with weight as 2 and 1 respectively and 10% growth. The Forecast Method applied in this example is Linear Trend with 'M2M' as Distribution Method.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf7.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(n.b)("div",{style:{textAlign:"justify"}},"The below figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying Linear Trend method and M2M distributes the total to it's periods based on the distribution of all Past Series Data selected with weights in Forecast Basis.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf7.2.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,"Note that distribution of 2020 period values is the only differnce between the above two examples because of the change in\nDistribution Method. "),Object(n.b)("h3",{id:"3-moving-average"},"3. Moving Average"),Object(n.b)("div",{style:{textAlign:"justify"}},"Moving Average method computes forecast results of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. This method makes prediction by calculating Moving Average of Past Data Series period values. Growth component can be added as absolute value or percentage growth when needed and Distribution Method can selected as Match or M2M(+1).")," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(n.b)("div",{style:{textAlign:"justify"}},"In this example forecasting is done for node 'Overall Result' for the year 2020 based on Jul - Dec period values of 2019 and 2018 actuals with weight as 1 for both and no growth. The Forecast Method applied in this example is Moving Average with M2M as Distribution Method.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf5.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(n.b)("div",{style:{textAlign:"justify"}},"The below figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying moving Average method and M2M distributes the total to it's periods based on the distribution of all Past Series Data selected with weights in Forecast Basis.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf5.2.png")})))," ",Object(n.b)("br",null),Object(n.b)("h3",{id:"4-weighted-moving-average"},"4. Weighted Moving Average"),Object(n.b)("div",{style:{textAlign:"justify"}},"Weighted Moving Average method computes forecast results of Target Node for the Target Period based on Past Data Series & Weights and Source Periods. This method makes prediction by calculating Weighted Moving Average of Past Data Series period values with weights applied to it. Growth component can be added as absolute value or percentage growth when needed and Distribution Method can selected as Match or M2M(+1).")," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Configuration for Forecasting")),Object(n.b)("div",{style:{textAlign:"justify"}},"In this example forecasting is done for node 'Overall Result' for the year 2020 based on Jul - Dec period values of 2019 and 2018 actuals with weight as 2 for Oct-Dec and 1 for Jul-Sep and no growth. The Forecast Method applied in this example is Weighted Moving Average with M2M as Distribution Method.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf6.1.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Preview of Forecast Results")),Object(n.b)("div",{style:{textAlign:"justify"}},"The below figure shows the results of forecasting done based on the above configuration. The total for 2020 is predicted by applying Weighted Moving Average method and M2M distributes the total to it's periods based on the distribution of all Past Series Data selected with weights in Forecast Basis.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(s.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(r.a)("/doc-images/plan/tsf6.2.png")})))," ",Object(n.b)("br",null))}g.isMDXComponent=!0}}]);