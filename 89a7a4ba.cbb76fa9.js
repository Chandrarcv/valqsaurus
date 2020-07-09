(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),b=a(9),l=(a(0),a(216)),r=a(217),i=(a(222),a(224)),o=(a(118),{id:"data-series",title:"Data Series"}),s={id:"model/data-series",title:"Data Series",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/model/data-series.mdx",permalink:"/docs/model/data-series",sidebar:"sideBar",previous:{title:"Node",permalink:"/docs/model/node"},next:{title:"Settings",permalink:"/docs/model/settings"}},c=[{value:"1. Data Series Manager",id:"1-data-series-manager",children:[]},{value:"2. Time Aggregation Labels",id:"2-time-aggregation-labels",children:[]},{value:"3. Data Sorting",id:"3-data-sorting",children:[]},{value:"Additional Properties of Data Series Tab",id:"additional-properties-of-data-series-tab",children:[]}],d={rightToc:c};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",{style:{textAlign:"justify"}},"Using the Data Series tab, you will be able to configure the data series settings for the model created in valQ. There are 3 different options as listed below under the data series settings in ValQ (see Figure below).")," ",Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#1-data-series-manager"}),"Data Series Manager")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#2-time-aggregation-labels"}),"Time Aggregation Labels")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#3-data-sorting"}),"Data Sorting"))),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds1.png")}))),Object(l.b)("h2",{id:"1-data-series-manager"},"1. Data Series Manager"),Object(l.b)("p",null,"Data Series Manager helps you to configure the Periods and Data Series for the model."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds2.png")})))," ",Object(l.b)("br",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Periods")," ",Object(l.b)("br",null)," ",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"Period(s) per data series"),": Enter the number of periods in the data here. ",Object(l.b)("br",null),"\n",Object(l.b)("strong",{parentName:"p"},"Period Label(s)"),": Enter the periods labels here with a comma separating each label.",Object(l.b)("br",null),"\nThe changes made here to the Period Labels will be reflected in all the 4 tabs on ValQ - Model,\nPlan, Simulate and Analyze incluidng the Pop Up screens."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Data Series")," ",Object(l.b)("br",null)," "),Object(l.b)("div",{style:{textAlign:"justify"}},"First, toggle to add a comparison data series when needed. In case there are two data series to the model, you can keep one as Baseline data series and the other as Comparison data series. The data series can be actuals and budget, multiple years data, etc. The names of the series are Baseline and Comparison by default, you can double click on the name or click on the pencil icon beside the name to change it to customize.")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"justify"}},"For our example, we have the data source having periods from Jan to Dec, Budget and Forecast values. The Budget values will be the Comparison values and the Forecast values will be the Baseline values. Follow the below steps for configuring the values in the Data Series Manager.")," ",Object(l.b)("br",null),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Set the property Period(s) per data series to the value 5."),Object(l.b)("li",{parentName:"ol"},"Configure the Period Labels as Jan, Feb, Mar, Apr, May (see Figure\nabove)."),Object(l.b)("li",{parentName:"ol"},"Enable the property Include comparison data series. You can view\nboth the Baseline and Comparison values."),Object(l.b)("li",{parentName:"ol"},"When the property Include comparison data series is disabled, then\nyou will be able to view only the Baseline Series."),Object(l.b)("li",{parentName:"ol"},"When you click the Baseline label, you will be able view the\nBaseline values as Forecast values as shown below. Now the label\nhas been changed to Sales Forecast.")),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds3.png")}))),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"When you click the Comparison label, you will be able view the\nComparison values as the Budget values as shown below. Now the label\nhas been changed to Sales Budget.")),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds4.png")}))),Object(l.b)("p",null,"Based on the above set of configuration steps, you will be able to view\nthe valQ screen as shown below."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds5.png")})))," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"justify"}},"You can observe from the above Figure that the data series names are displyed on top of the screen, the period labels are displayed in the tootltip and after simulating the node 'East', you will be able to view the Baseline data in comparison with simulated Baseline data."),Object(l.b)("h2",{id:"2-time-aggregation-labels"},"2. Time Aggregation Labels"),Object(l.b)("div",{style:{textAlign:"justify"}},"Using the option Time Aggregation Labels, you will be able to configure the aggregaton labels of the periodic variances. The changes made here will get reflected in the nodes and Value Display of Simulate tab.")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds6.png")})))," ",Object(l.b)("br",null),Object(l.b)("p",null,"Based on the above configuration, you will be able to view the valQ\nscreen as shown below."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds7.png")})))," ",Object(l.b)("br",null),Object(l.b)("p",null,"In the below Figure, you can see the Period Labels and Time Aggregation\nLabels as highlighted in the valQ screen under Simulate tab."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds8.png")}))),Object(l.b)("h2",{id:"3-data-sorting"},"3. Data Sorting"),Object(l.b)("div",{style:{textAlign:"justify"}},"Using the Data Sorting settings, you will be able to view and customize your data source. You will be able to select the Sort fields, sort the data by Ascending or Descending Order and select the Start With field with the required period (see Figure below).")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds9.png")})))," ",Object(l.b)("br",null),Object(l.b)("p",null,"In the below example, we Choose the sort field as Quarter, sort by Ascending order and\nStart with Quarter 4 and updated the table. The result is shown in the Figure below.  "),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(i.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Tab",src:Object(r.a)("/doc-images/model/ds10.png")}))),Object(l.b)("h2",{id:"additional-properties-of-data-series-tab"},"Additional Properties of Data Series Tab"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Area"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data Series Manager"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Periods"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Period(s)   per data series: It indicates the number of values in the series. As an   example, the series with Jan, Feb and Mar can be entered as 3 periods.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Period   Label(s): The Labels can be given as Jan, Feb, Mar (being separated by   commas.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data   Series"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"By   enabling this property, you will be able to include the Comparison Data   Series.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The   Preview shows all the available Data Series (both Baseline and Comparison)   and the Additional Series.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Time Aggregation Labels"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"These   labels are used in the navigation panel, nodes and popup screens.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Active   period"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This   property sets only one period of interest. A Label and a three letter   abbreviation can be provided for this property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Till   Prior Period"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This   property sets Total value from beginning to a specific period. A Label and a   three letter abbreviation can be provided for this property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"All   periods"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This   property sets Total value of all periods in the series. A Label and a three   letter abbreviation can be provided for this property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Simulation   Period"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This   property sets a specific set of continuous periods. A Label and a three   letter abbreviation can be provided for this property.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Data   Sorting"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The data can be sorted   using the below filters:   ",Object(l.b)("br",null),"  1. Choose Sort Field(s) from the data source   ",Object(l.b)("br",null),"  2. Sort By: Ascending/Descending    ",Object(l.b)("br",null)," 3. Start with entry from the data source")))))}p.isMDXComponent=!0}}]);