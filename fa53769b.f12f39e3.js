(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var i=a(1),n=a(9),o=(a(0),a(232)),l=a(233),r=a(239),c={id:"getting-started",title:"General features of ValQ Custom Visual",sidebar_label:"General features of ValQ Custom Visual"},s={id:"general/getting-started",title:"General features of ValQ Custom Visual",description:'import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.',source:"@site/docs/general/getting-started.mdx",permalink:"/docs/general/getting-started",sidebar_label:"General features of ValQ Custom Visual"},u=[{value:"What is a Value Driver Modeling?",id:"what-is-a-value-driver-modeling",children:[]},{value:"Instructions for valQ Custom Visual",id:"instructions-for-valq-custom-visual",children:[]},{value:"Input Data",id:"input-data",children:[]},{value:"Tree Drill Down",id:"tree-drill-down",children:[]},{value:"Zoom and Pan",id:"zoom-and-pan",children:[]},{value:"Expand/Collapse of Tree View",id:"expandcollapse-of-tree-view",children:[]},{value:"Value Display and Simulation Period",id:"value-display-and-simulation-period",children:[]},{value:"Sub Models - Filters",id:"sub-models---filters",children:[]},{value:"KPIs",id:"kpis",children:[]},{value:"Data Simulation",id:"data-simulation",children:[]},{value:"Key Inputs",id:"key-inputs",children:[]},{value:"Scenarios Functionality",id:"scenarios-functionality",children:[]},{value:"Constraints",id:"constraints",children:[]},{value:"Visualization",id:"visualization",children:[]},{value:"Contextual Help Information",id:"contextual-help-information",children:[]}],b={rightToc:u};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-a-value-driver-modeling"},"What is a Value Driver Modeling?"),Object(o.b)("p",null,"Explanation of the concept of a Value Driver Models with a business scenario."),Object(o.b)(r.a,{video:"https://player.vimeo.com/video/287274214",responsive:!0,width:640,height:480,mdxType:"Vimeo"}),Object(o.b)("h2",{id:"instructions-for-valq-custom-visual"},"Instructions for valQ Custom Visual"),Object(o.b)("p",null,"The valQ Custom Visual provides various components that the Designer can\nuse in conjunction with Microsoft Power BI. The valQ custom visual also\noffers many configuration options."),Object(o.b)("p",null,"In this guide, we will describe the common end user functionality using\na demo as an example. It is however important to understand that your\nspecific implementation may differ."),Object(o.b)("p",null,"Once your designer has implemented and configured the valQ Custom\nVisual, it will be accessed the same way you access your current Power\nBI Apps."),Object(o.b)("p",null,"When you open a valQ Custom Visual, it will open in a similar manner at\nthe screenshot below:"),Object(o.b)("img",{alt:"valQ Screen",src:Object(l.a)("/doc-images/4.1.png")}),Object(o.b)("div",{style:{fontStyle:"italic",textAlign:"center"}}," ValQ Screen "),Object(o.b)("p",null,"The left panel is the navigation panel and on the canvas you will find\nthe value driver tree. By default, the tree is open on collapsed mode at\na level defined by the designer. This is typically completely collapsed."),Object(o.b)("p",null,"As part of the New Release, you will be able to hide the Navigation\nPanel in the Runtime by clicking the Collapse button as shown in the\nbelow Figure."),Object(o.b)("img",{alt:"Hiding Navigation Panel in Runtime",src:Object(l.a)("/doc-images/navp.png")}),Object(o.b)("p",null,"As part of the New Release, you can also switch over from Table View\nMode to Tree View Mode and vice versa using the button as shown in the\nbelow Figure."),Object(o.b)("img",{alt:"Table/Tree View Mode",src:Object(l.a)("/doc-images/tbt.png")}),Object(o.b)("h2",{id:"input-data"},"Input Data"),Object(o.b)("p",null,"The valQ Custom Visual works with two input data series \u2013 the primary\nand the comparison data series. A common way of using this is to compare\nForecast vs Budget, Budget vs Last Year Actuals etc. The data series is\nat a certain time grain. This would typically be 1 year by 12 months or\na multiyear view like 5 years plan by year."),Object(o.b)("p",null,"The selecting of the time series will often be based on Filters or\nVariables. A typical scenario is where the designer has defined 4\nvariables on the underlying data sources:"),Object(o.b)("p",null,"Primary:"),Object(o.b)("p",null,"Version: ie. Defaulted to Forecast"),Object(o.b)("p",null,"Year: ie. Defaulted to Current Year"),Object(o.b)("p",null,"Comparison:"),Object(o.b)("p",null,"Version ie. Defaulted to Budget"),Object(o.b)("p",null,"Year ie. Defaulted to Current Year"),Object(o.b)("p",null,"This allows the users to compare different versions and years in the\nvalue driver tree model."),Object(o.b)("p",null,"The valQ Custom Visual can display individual periods but can also apply\ntime aggregation such as Full Year, Year-to-Date. You can see the\ncurrently selected Value Display aggregation on the Navigation Panel. In\nthe screenshot above, Full Year is selected. The primary value displayed\non the Widgets is therefore in this instance the Full Year aggregated\ndata."),Object(o.b)("h2",{id:"tree-drill-down"},"Tree Drill Down"),Object(o.b)("p",null,"Nodes that has children will have an expand \u2018>\u2019 button to the right of\nthe Widget as highlighted below:"),Object(o.b)("img",{alt:"Nodes with children",src:Object(l.a)("/doc-images/4.2.png")}),Object(o.b)("p",null,"You can drill down the tree by clicking the expand button."),Object(o.b)("p",null,"The tree will focus on the branches that are being expanded. You can\ncollapse any specific node by clicking the \u2018<\u2019 collapse button on the\nright of a widget."),Object(o.b)("p",null,"Value Driver Trees are in reality networks. The same driver may impact\nmultiple aspects of the Tree. The component therefore contains a concept\nof linked nodes. Such nodes have a link"),Object(o.b)("img",{alt:"..image::\\/doc-images/image4",src:Object(l.a)("/doc-images/media/image4.png")})," icon that you can click which will jump to where the linked node is defined and highlight the node:",Object(o.b)("img",{alt:"Link",src:Object(l.a)("/doc-images/4.3.png")}),Object(o.b)("img",{alt:"Linked Nodes",src:Object(l.a)("/doc-images/4.4.png")}),Object(o.b)("p",null,"To collapse all nodes, click on the collapse icon on the bottom left of\nthe canvas ",Object(o.b)("img",{alt:"..image::\\/doc-images/image7",src:Object(l.a)("/doc-images/media/image7.png")})),Object(o.b)("h2",{id:"zoom-and-pan"},"Zoom and Pan"),Object(o.b)("p",null,"Value Driver Trees can be large. You can zoom and pan the canvas view.\nIf you are using an iPad or iPhone, you can zoom by pinching and pan by\ndragging the same way you would navigate a map."),Object(o.b)("p",null,"If you are using a mouse with a scroll wheel, you can point your curser\nanywhere in the canvas and scroll the wheel to zoom in and out."),Object(o.b)("p",null,"To pan, click and hold the left bottom of the mouse and drag the tree\naround."),Object(o.b)("p",null,"You can also use the zoom button to zoom if your device doesn\u2019t support\nother options ",Object(o.b)("img",{alt:"..image::\\/doc-images/image8",src:Object(l.a)("/doc-images/media/image7.png")})),Object(o.b)("h2",{id:"expandcollapse-of-tree-view"},"Expand/Collapse of Tree View"),Object(o.b)("p",null,"As part of the New Release, you will be able to expand/collapse the Node\nHierarchy at the required level using the Go To Level button (see Figure\nbelow)."),Object(o.b)("img",{alt:"Expand/collapse one level",src:Object(l.a)("/doc-images/exl.png")}),Object(o.b)("p",null,"For our example, the Node Hierarchy level has been selected as third\nlevel."),Object(o.b)("h2",{id:"value-display-and-simulation-period"},"Value Display and Simulation Period"),Object(o.b)("img",{alt:"Value Display",src:Object(l.a)("/doc-images/4.5.png")}),Object(o.b)("p",null,"With the \u2018Value Display\u2019 functionality you can choose the time\naggregation you want to display as the primary value. The designer can\nlink certain nodes to a user selected scaling. You can select the scale\nyou wish to display by selecting this under the Value Display section.\nNote that the options here can be configured so they may differ. It is\nimportant to note that not all notes are scaled using this as the value\ndriver tree typically contains both amounts, prices, rates and physical\nvolumes."),Object(o.b)("p",null,"In addition to the primary display value, the designer can also choose a\nsecondary value to be displayed. I.e. if you are showing Full Year as\nprimary, in the below example, it has been configured to visualize the\nMonth data as secondary:"),Object(o.b)("img",{alt:"Value Display",src:Object(l.a)("/doc-images/4.6.png")}),Object(o.b)("p",null,"The time aggregation and display relates to the Simulation Period\nselected."),Object(o.b)("p",null,"When ",Object(o.b)("strong",{parentName:"p"},"Month")," is selected, it shows the first month of the simulation\ninterval selected. By default, the simulation period is the selected\nperiod and the future. This is an important concept as when we simulate,\nwe generally don\u2019t want to apply a change to the past as we can\u2019t change\nit. It is possible to also set the \u2018to\u2019 period in a simulation, just\nclick ",Object(o.b)("img",{alt:"..image::\\/doc-images/image11",src:Object(l.a)("/doc-images/media/image10.png")})," and highlight the\nmonth you want as the end period of a simulation. This is however a\nspecial scenario."),Object(o.b)("img",{alt:"Simulation Period",src:Object(l.a)("/doc-images/4.7.png")}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"YTD")," \u2013 the selected period -1 is the year to date data (eg. selected\nsimulation period is September to December, the YTD data will be from\nJan to August)."),Object(o.b)("p",null,"Note: Simulation of future periods will not impact the YTD data."),Object(o.b)("img",{alt:"Value Display and Simulation Period",src:Object(l.a)("/doc-images/4.8.png")}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Full Year")," \u2013 Shows the full year cumulated data"),Object(o.b)("img",{alt:"Value Display and Simulation Period",src:Object(l.a)("/doc-images/4.9.png")}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Sim. Period")," \u2013 to simulate a specific period, for example a 3 month\nrolling forecast from September to November, click the first month\nSeptember then click ",Object(o.b)("img",{alt:"..image::\\/doc-images/image15",src:Object(l.a)("/doc-images/media/image10.png")}),"and\nclick the last month November for simulation. You can then choose to\nonly show the values aggregated for the selected simulation periods"),Object(o.b)("img",{alt:"Value Display and Simulation Period",src:Object(l.a)("/doc-images/4.10.png")}),Object(o.b)("p",null,"As part of the New Release, you will be able to view the Tooltip for all\nthe Value Displays. For our example, the Tooltip for the Month Value\nDisplay is shown in the below Figure."),Object(o.b)("img",{alt:"Tooltip for Month Value Display",src:Object(l.a)("/doc-images/vd1.png")}),Object(o.b)("p",null,"Similarly you can view the Tooltip for other Value Displays."),Object(o.b)("h2",{id:"sub-models---filters"},"Sub Models - Filters"),Object(o.b)("p",null,"If your Value Driver Tree is large, the designer may have defined\nspecific sub views. These would be listed under the Sub Models Section\nof the Navigation Panel. When clicking on one of these views, the tree\nwill be filtered and the specific node will be made the top node.\nCalculation dependencies are still respected but this significantly\nimproves the navigation as it focuses the tree on a specific area."),Object(o.b)("p",null,"In this example, the options defined are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open all company level: Net Profit"),Object(o.b)("li",{parentName:"ul"},"Open per department: Mining, Processing or the operational tree for\nMill Throughput")),Object(o.b)("img",{alt:"Sub Models \u2013 Filters",src:Object(l.a)("/doc-images/4.11.png")}),Object(o.b)("h2",{id:"kpis"},"KPIs"),Object(o.b)("p",null,"The Navigation Panel can be configured to list a set of KPI\u2019s from the\nvalue driver tree. You are able to navigate to each of them for a fast\nview on the simulation impact on a given KPI. Click on the KPI to\nnavigate to the node."),Object(o.b)("img",{alt:"KPIs",src:Object(l.a)("/doc-images/4.12.png")}),Object(o.b)("h2",{id:"data-simulation"},"Data Simulation"),Object(o.b)("p",null,"There are 2 options to simulate:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Hover over a desired node to simulate, slide the scaling button to\nright for positive impact or left for negative impact. The\nsimulation will be showed on the right hand side. A window will open\ndisplaying the changes. The pencil icon will display the change in\npercentage that has been made:",Object(o.b)("img",{alt:"..image::\\/doc-images/image19",src:Object(l.a)("/doc-images/media/image17.png")}),", and a legend with percentage showing if the adjust has made the scenario better or worse ",Object(o.b)("img",{alt:"..image::\\/doc-images/image20",src:Object(l.a)("/doc-images/media/image18.png")}),".")),Object(o.b)("img",{alt:"Data Simulation",src:Object(l.a)("/doc-images/4.13.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click on the arrow icon of the node",Object(o.b)("img",{alt:"..image::\\/doc-images/image22",src:Object(l.a)("/doc-images/media/image20.png")})," then click \u2018Edit Key Input\u2019 ",Object(o.b)("img",{alt:"..image::\\/doc-images/image23",src:Object(l.a)("/doc-images/media/image21.png")})," and manually edit the changes in simulation per period. Click X to close manual input table.")),Object(o.b)("p",null,"Notes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can update the periods highlighted in YELLOW based on the\nselected simulation period.")),Object(o.b)("img",{alt:"Simulation Periods",src:Object(l.a)("/doc-images/4.14.png")}),Object(o.b)("p",null,"The edit icon will indicate the months that have been edited."),Object(o.b)("img",{alt:"Simulation Periods",src:Object(l.a)("/doc-images/4.15.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can update the \u2018Variation\u2019 column which will overwrite the\nnumbers in the selected simulation periods. Any manual updates in\nperiod will not be overwritten by the \u2018Variation\u2019 column. In the\nexample below, in blue are the months which were manually edited and\nin orange are highlighted the variation and in this case the month\nto which the variation was applied.")),Object(o.b)("img",{alt:"Simulation Periods",src:Object(l.a)("/doc-images/4.16.png")}),Object(o.b)("p",null,"Click reset icon to return to the original data"),Object(o.b)("img",{alt:"..image::\\/doc-images/image27",src:Object(l.a)("/doc-images/media/image25.png")}),".",Object(o.b)("p",null,'As part of the New Release, you can simulate the Node having "0" as the\nvalue. When the slider is moved to the right end, it will show positive\nvalues and when the slider is moved to the left end, it will show\nnegative values. The property of the Simulation remains the same for the\nChange Percentage, Manual, Growth Percentage and Constant options.'),Object(o.b)("img",{alt:'Simulated Node having "0" as values',src:Object(l.a)("/doc-images/zero1.png")}),Object(o.b)("p",null,"From the above Figure, you can observe that the Growth Percentage has\nbeen selected as an option."),Object(o.b)("h2",{id:"key-inputs"},"Key Inputs"),Object(o.b)("p",null,"Key Inputs is available on the left side panel to directly simulate key\ncost drivers without going into the node details."),Object(o.b)("p",null,"Click the \u2018Edit Key Input\u2019 icon"),Object(o.b)("img",{alt:"..image::\\/doc-images/image28",src:Object(l.a)("/doc-images/media/image26.png")}),Object(o.b)("p",null,"and manually edit the changes in simulation per periods."),Object(o.b)("img",{alt:"Key Inputs",src:Object(l.a)("/doc-images/4.17.png")}),Object(o.b)("p",null,"Notes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Can update the periods highlighted in YELLOW based on the selected\nsimulation period. All the changes in the Key Assumptions are\nhighlighted in the left side panel side.")),Object(o.b)("img",{alt:"Simulation Periods",src:Object(l.a)("/doc-images/4.18.png")}),Object(o.b)("p",null,"Click X to close manual input table."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click a Key Assumption or Key Performance Indicator and it will\nhighlight the source nodes to further check the details.")),Object(o.b)("img",{alt:"Key Inputs",src:Object(l.a)("/doc-images/4.19.png")}),Object(o.b)("p",null,"All simulations are highlighted in the upper right corner."),Object(o.b)("img",{alt:"..image::\\/doc-images/image32",src:Object(l.a)("/doc-images/media/image30.png")}),Object(o.b)("p",null,"Click ",Object(o.b)("img",{alt:"..image::\\/doc-images/image33",src:Object(l.a)("/doc-images/media/image31.png")})," to return to the\noriginal selected version without any simulation."),Object(o.b)("p",null,"When more number of simulations are done, you will be able to view the\nMore button in the upper right corner. By clicking the More button, you\nwill be able to see the remaining simulations as shown in the below\nFigure."),Object(o.b)("img",{alt:"Simulations - More option button",src:Object(l.a)("/doc-images/more.png")}),Object(o.b)("h2",{id:"scenarios-functionality"},"Scenarios Functionality"),Object(o.b)("p",null,"You can create multiple scenarios in parallel, compare them as well as\nsharing the collection with others."),Object(o.b)("p",null,"This is how you do it."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a Scenario 1 by clicking the \u201c+\u201d button in the Navigation\nPanel (see Figure below).")),Object(o.b)("img",{alt:"Create Scenario",src:Object(l.a)("/doc-images/sf1.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can view the Context Drop Down Menu as shown in the below\nFigure.")),Object(o.b)("img",{alt:"Context Drop Down Menu",src:Object(l.a)("/doc-images/sf2.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After clicking the Context Drop Down Menu, you will be able to view\nthe Menu items such as Copy Scenario, Edit and Delete Functions (see\nFigure below).")),Object(o.b)("img",{alt:"Context Drop Down Menu Items",src:Object(l.a)("/doc-images/sf3.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When you click the \u201cCopy Scenario\u201d Menu Item, you will be able to\ncreate the Scenario 2 with the same configuration as done for\nScenario 1.")),Object(o.b)("img",{alt:"Scenario 1",src:Object(l.a)("/doc-images/sf4.png")}),Object(o.b)("p",null,"The above Figure shows the settings for Scenario 1. When you click the\n\u201cCopy Scenario\u201d Menu Item, you will be able to view the Scenario 2\nbeing created with the same set of configuration done for Scenario 1\n(see Figure below)."),Object(o.b)("img",{alt:"Scenario 2",src:Object(l.a)("/doc-images/sf5.png")}),Object(o.b)("p",null,"The copied scenario is the replicate of the last scenario (e.g. Scenario\n2 will have the same data from the copied Scenario 1."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"By clicking the \u201cEdit\u201d Menu Item, you will be able to edit the\nScenario (see Figure below).")),Object(o.b)("img",{alt:"Scenario 1 Edit",src:Object(l.a)("/doc-images/sf6.png")}),Object(o.b)("p",null,"From the above Figure, you can observe that you will be able to edit the\nlabels for the Title and Description for the selected Scenario."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"By clicking the \u201cDelete\u201d Menu Item, you will be able to delete the\nentire Scenario."),Object(o.b)("li",{parentName:"ul"},"Click \u2018Create a new Scenario and make it the active scenario\u2019 icon\nas shown below")),Object(o.b)("img",{alt:"Create a new Scenario and make it the active scenario\nicon",src:Object(l.a)("/doc-images/sfi1.png")}),Object(o.b)("p",null,"This will create a new Scenario and will highlight the created Scenario\nas the active scenario."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click \u2018Compare Scenario\u2019 icon to generate a report comparison format\nwith the key Assumptions and KPI\u2019s (see Figure below).")),Object(o.b)("img",{alt:"Compare Scenario icon",src:Object(l.a)("/doc-images/sfi2.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Comparison report compares all scenarios that have been created in\nthe active collection. It also shows the Simulated Data Scenario\n(Baseline: Full Year), Comparison Version (Full Year) and Simulated\nData Scenario Year to Date (Baseline: YTD)."),Object(o.b)("li",{parentName:"ul"},"From the below Figure, the GREEN fonts denotes the most favorable\nresults and the RED fonts denotes the least favorable result in the\nscenario comparison report.")),Object(o.b)("img",{alt:"Full Year Scenario Comparison",src:Object(l.a)("/doc-images/sf7.png")}),Object(o.b)("img",{alt:"Full Year Scenario Comparison",src:Object(l.a)("/doc-images/sf8.png")}),Object(o.b)("p",null,'As part of the New Release, you will be able to download the excel file\nof the compared scenarios based on your choice by clicking the "Download\nto Excel" option in the Scenario Comparison screen as shown below.'),Object(o.b)("img",{alt:"Download option in Scenario Comparison screen",src:Object(l.a)("/doc-images/scom1.png")}),Object(o.b)("p",null,"You can select the Scenario and download the excel file as shown in the\nbelow Figure."),Object(o.b)("img",{alt:"Scenario selection",src:Object(l.a)("/doc-images/scom2.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You have the option to make additional simulation in the new\nscenario or click the icon appearing in the top most right pane to\nreturn to the original selected version without any simulation and\nthen make a new simulation (see Figure below).")),Object(o.b)("img",{alt:"Reset All icon",src:Object(l.a)("/doc-images/sfi3.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click the Download icon located in the Scenarios Section to extract\nthe report in xml format (see Figure below).")),Object(o.b)("img",{alt:"Download icon",src:Object(l.a)("/doc-images/sfi4.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click the icon for write back functionality (see Figure below). By\nclicking this option you will be able to write back/post valQ data\nto a configured URL in the server.")),Object(o.b)("img",{alt:"Write back icon",src:Object(l.a)("/doc-images/sfi5.png")}),Object(o.b)("p",null,"By clicking the Configure URL to write back the current scenario option,\nyou will be able to select any one among the two different options to\nwrite back the current scenario to the configured URL in the server (see\nFigure below)."),Object(o.b)("img",{alt:"Write back options",src:Object(l.a)("/doc-images/wb1.png")}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The created Scenarios can be reordered based on our choice by a\nsimple drag and drop options. For our example, you have reordered\nthe Scenarios as shown in the below Figure.")),Object(o.b)("img",{alt:"Reordered Scenarios",src:Object(l.a)("/doc-images/sf9.png")}),Object(o.b)("p",null,"Based on the reordered scenarios, you will be able to view the\nComparison Report with the similar reordered hierarchy as shown in the\nbelow Figure."),Object(o.b)("img",{alt:"Comparison Report with reordered Scenarios",src:Object(l.a)("/doc-images/sf10.png")}),Object(o.b)("h2",{id:"constraints"},"Constraints"),Object(o.b)("p",null,"Constraints are also available in the left side panel that identifies\nthe metrics that are overcapacity (highlighted in RED fonts) or still\nhave opportunities for further improvements (WHITE fonts)."),Object(o.b)("p",null,"Notes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"RED fonts means over capacity as compared to the maximum limit.\n(e.g. Production Rate 1.680 tonnes per hour is over capacity as\ncompared to the maximum limit of 1.600 tonnes per hour)."),Object(o.b)("li",{parentName:"ul"},"WHITE fonts means still have opportunities for improvement as\ncompared to the maximum limit.")),Object(o.b)("img",{alt:"Constraints",src:Object(l.a)("/doc-images/4.23.png")}),Object(o.b)("img",{alt:"Constraints",src:Object(l.a)("/doc-images/4.24.png")}),Object(o.b)("h2",{id:"visualization"},"Visualization"),Object(o.b)("p",null,"Visualization is available in the left side Navigation panel which helps\nthe users view the Tree in the Table or Tree format based on their\nchoice. By using the View Mode, the user can select three different view\nmodes namely Full, Standard and Minimal to view the Tree or Table\nFormat."),Object(o.b)("p",null,'The below Figure represents the Tree View Format with the View Mode\nbeing selected as "Full". Here you can observe that the Nodes will be\ndisplayed in Full mode.'),Object(o.b)("img",{alt:"Visualization - Display as Tree and View Mode selected as\nFull",src:Object(l.a)("/doc-images/4.25.png")}),Object(o.b)("p",null,'The below Figure represents the Table View Format with the View Mode\nbeing selected as "Standard". Here you can observe that the Table view\nwill show the Primary value, Comparison value, Variance and Variance %\nvalues for the Full Year.'),Object(o.b)("img",{alt:"Visualization - Display as Table and View Mode selected as\nStandard",src:Object(l.a)("/doc-images/4.26.png")}),Object(o.b)("p",null,'When the View Mode is selected as "Full", then you will be able to view\nthe Table with Primary value, Comparison value, Variance and Variance %\nvalues for the Full Year and also the same set of values for the Month.'),Object(o.b)("p",null,'When the View Mode is selected as "Minimal", then you will be able to\nview only the Primary value and Comparison value for the Full Year.'),Object(o.b)("h2",{id:"contextual-help-information"},"Contextual Help Information"),Object(o.b)("p",null,"As part of the New Release, the Contextual Help Information feature has\nbeen included in the Advance Editor window by which the user can be\ndirected to the specific help page. For our example, navigate to the\nSettings Tab and click the Navigation Panel. You can view the Contextual\nHelp Information icon (see Figure below)."),Object(o.b)("img",{alt:"Icon for Contextual Help Information",src:Object(l.a)("/doc-images/con1.png")}),Object(o.b)("p",null,"By clicking the Contextual Help Information icon, you will be redirected\nto the Help Information page for the Navigation Panel."))}d.isMDXComponent=!0},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var i=a(0),n=a.n(i);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),h=i,p=b["".concat(l,".").concat(h)]||b[h]||d[h]||o;return a?n.a.createElement(p,r({ref:t},s,{components:a})):n.a.createElement(p,r({ref:t},s))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(237);var i=a(234);function n(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},234:function(e,t,a){"use strict";var i=a(0),n=a(48);t.a=function(){return Object(i.useContext)(n.a)}},235:function(e,t,a){var i=a(66),n=a(23);e.exports=function(e,t,a){if(i(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(e))}},236:function(e,t,a){var i=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[i]=!1,!"/./"[e](t)}catch(n){}}return!0}},237:function(e,t,a){"use strict";var i=a(17),n=a(34),o=a(235),l="".startsWith;i(i.P+i.F*a(236)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return l?l.call(t,i,a):t.slice(a,a+i.length)===i}})},239:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(0),n=a.n(i),o=function(e){return n.a.createElement("div",null,n.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},n.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}}}]);