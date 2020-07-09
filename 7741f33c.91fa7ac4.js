(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{170:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return d})),i.d(t,"rightToc",(function(){return r})),i.d(t,"default",(function(){return m}));var o=i(1),a=i(9),n=(i(0),i(216)),l=i(217),s=i(222),b=i(224),c=(i(118),{id:"sim_features",title:"Simulate Features",sidebar_label:"Simulate Features"}),d={id:"simulation/sim_features",title:"Simulate Features",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/simulation/sim_features.mdx",permalink:"/docs/simulation/sim_features",sidebar_label:"Simulate Features",sidebar:"sideBar",previous:{title:"Simulate Tab",permalink:"/docs/simulation/simulation"},next:{title:"Analyze Tab",permalink:"/docs/analysis/general"}},r=[{value:"1. Scenarios",id:"1-scenarios",children:[]},{value:"2. Sub Models",id:"2-sub-models",children:[]},{value:"3. Simulation Period",id:"3-simulation-period",children:[]},{value:"4. Value display",id:"4-value-display",children:[]},{value:"5. Key Inputs",id:"5-key-inputs",children:[]},{value:"6. KPIs",id:"6-kpis",children:[]},{value:"7. Constraints",id:"7-constraints",children:[]},{value:"8. Visualization",id:"8-visualization",children:[]}],u={rightToc:r};function m(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{style:{textAlign:"justify"}},"Simualting a node helps in performing what-if analysis and it can be instantly done on ValQ with the help of the simulate slider present on each node. Below image is an example of what the simulation slider looks like.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim15.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"The simulation can be removed by clicking on the 'bin' icon. The arrow icon gives detail about simulation effect on the period nodes. The below image shows the period distribution of the simualted value.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim16.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"There are two more icons on top of the node, the left side one takes you to the plan tab with that node and its child nodes. The other icon as highlighted below opens up the comments section to add any comments for the selected node.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim17.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,"In this section we'll take a look at the Simulate tab and it's features. "),Object(n.b)("h2",{id:"1-scenarios"},"1. Scenarios"),Object(n.b)("div",{style:{textAlign:"justify"}},"Scenarios are particularly useful when you want to perform what-if analysis to the model and you can save each instance as an individual scenario. This way you have multiple scenarios to analyze and conduct scenario analysis.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim4.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"The scenario with the yellow tag is the active scenario. To collapse the sceanrio property click on '^' option and to add a new scenario, click on '+'. Clicking on three dots gives you options to Copy Scenario, Edit and Delete.",Object(n.b)("br",null)," ",Object(n.b)("br",null),Object(n.b)("p",null,"Copy Scenario - Creates a duplicate of the scenario that you have copied ",Object(n.b)("br",null),"\nEdit - Change the title of the scenario and add description which is optional ",Object(n.b)("br",null),"\nDelete - Deletes a scenario ",Object(n.b)("br",null)),Object(n.b)("p",null,"The URL icon is availablet to help you compare multiple scenarios, observe the\nsummary of the Scenarios and to take a look at the KPIs (see below Figure). With Manage Scenrios option\nyou can add or remove scenarios for comparison and you also have the option to download the\nscenario comparison as an excel file.  "))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim5.png")})))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"2-sub-models"},"2. Sub Models"),Object(n.b)("div",{style:{textAlign:"justify"}},"Sub Models are part of the model and a node is added as a sub model to acccess it quickly. This property is useful when there are large number of nodes and you want to get to the important nodes on click of a button. You can go to ",Object(n.b)(s.a,{to:Object(l.a)("docs/model/settings#12-sub-models"),mdxType:"Link"}," settings ")," to add or remove sub models on ValQ. Click on '^' option to collapse this property.")," ",Object(n.b)("br",null),Object(n.b)("p",null,"In the below example, sub model - 'Overall Result' displays the enitre model as it's the top node."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim6.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,"Here, the sub model - 'Midwest' displays only the particular node and it's children."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim7.png")})))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"3-simulation-period"},"3. Simulation Period"),Object(n.b)("div",{style:{textAlign:"justify"}},"ValQ model updats the simulated values based on the periods selected in the Simulation Period. You can select just one period or choose a range of period with '[to]' icon, ValQ applies simulation and fetches simulated values only to those selected periods. To change the period labels, go to ",Object(n.b)(s.a,{to:Object(l.a)("docs/model/settings#13-simulation-period"),mdxType:"Link"}," settings "),". Click on '^' option to collapse this property.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim8.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,"In the below example, simulation periods have been selected as Jan and Feb. You can observe that the simulation is applied\nonly to these two periods."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim9.png")})))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"4-value-display"},"4. Value display"),Object(n.b)("div",{style:{textAlign:"justify"}},"Value Display makes available options of aggregation like month, year to date, full year and simulated periods and scaling options. You can go to settings to change ",Object(n.b)(s.a,{to:Object(l.a)("docs/model/data-series#2-time-aggregation-labels"),mdxType:"Link"}," time aggregation labels ")," and",Object(n.b)(s.a,{to:Object(l.a)("docs/model/settings#14-value-display"),mdxType:"Link"}," scaling options "),"  to your preference. Value Display is set to full year and scaling at 0.0m by default. Click on '^' option to collapse this property.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim10.png")})))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"5-key-inputs"},"5. Key Inputs"),Object(n.b)("div",{style:{textAlign:"justify"}},"Any important node that you consider as Key Input can be added as a Key Input to view it quickly instead of searching for it in the model. The Key Input is displayed along with it's value and variance percentage when simulated. You can go to ",Object(n.b)(s.a,{to:Object(l.a)("docs/model/settings#15-key-inputs"),mdxType:"Link"}," settings "),"to add/remove Key Inputs. Click on '^' option to collapse this property.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"In the below example, we have added two Key Inputs and the node 'Chris Morris' gets highlighted on selecting the key Input 'Chris Morris'.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim11.png")})))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"6-kpis"},"6. KPIs"),Object(n.b)("div",{style:{textAlign:"justify"}},"Any important node that you consider as Key Performance Indicator can be added as a KPI to view it quickly instead of searching for it in the model. The KPI is displayed along with it's value and variance percentage when simulated. You can go to ",Object(n.b)(s.a,{to:Object(l.a)("docs/model/settings#16-kpis"),mdxType:"Link"}," settings "),"to add/remove KPIs. Click on '^' option to collapse this property.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"In the below example, the node 'Midwest' gets highlighted on selecting the KPI 'Midwest'.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ logo",src:Object(l.a)("/doc-images/Simulation/sim12.png")})))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"7-constraints"},"7. Constraints"),Object(n.b)("div",{style:{textAlign:"justify"}},"Any constraint added to the model is displayed here along with the Value Range. Click on '^' option to collapse this property.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"In the following example,  we can see the steps to add a Constraint to the model.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"A. The Value Range for 'East' Node has been set as Min = 1 Million and Max = 10 Million.  Notice that the Time Aggregation has been set as Sum of Periods and the number of periods for this node is 12. Therefore, the Value Range is taken as Min = 12 Million and Max = 24 Million.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/model/node19.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"B. After the Value Range has been set to 'East' node, the same node is added to Constraint under the Navigation Panel. To add Constraint, Model -> Settings -> Navigaton Panel -> Constraints and choose constraints from the drop down to be listed.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/model/node20.png")})))," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"justify"}},"C. The Constraint for 'East' node has been added with the Minimum and Maximum values as seen below. Notice that the node value is outisde the Value Range and the node value is displayed in red color. The value gets displayed in white colour if it lies within the range.")," ",Object(n.b)("br",null),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/model/node21.png")})))," ",Object(n.b)("br",null),Object(n.b)("h2",{id:"8-visualization"},"8. Visualization"),Object(n.b)("div",{style:{textAlign:"justify"}},"You can change the view of the model with the visualization options. By default Visualization is set to Tree display and Standard view mode.")," ",Object(n.b)("br",null),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Tree View")),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/Simulation/sim13.png")})))," ",Object(n.b)("br",null),Object(n.b)("p",null,"To view the model as table, you can click on any of the highlighted options as seen below."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Table View")),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(b.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"New Tab",src:Object(l.a)("/doc-images/Simulation/sim14.png")})))," ",Object(n.b)("br",null))}m.isMDXComponent=!0}}]);