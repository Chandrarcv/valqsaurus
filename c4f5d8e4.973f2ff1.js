/*! For license information please see c4f5d8e4.973f2ff1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56,10],{179:function(e,t,a){"use strict";a.r(t);var n=a(1),r=(a(242),a(0)),l=a.n(r),c=a(205),i=a.n(c),o=a(211),s=a(207),u=a(200),d=a(201),m=a(180),h=a.n(m),f=[{title:l.a.createElement(l.a.Fragment,null,"Modeling"),link:"/docs/model/new",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-modeling.png",description:l.a.createElement(l.a.Fragment,null,"Model your business by capturing 1000+ business variables across various functions in ValQ.")},{title:l.a.createElement(l.a.Fragment,null,"Visualization"),link:"/docs/general/getting-started",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-visualization.png",description:l.a.createElement(l.a.Fragment,null,"Visualize your business model instantly by connecting your Key Drivers to Key Performance Indicators.")},{title:l.a.createElement(l.a.Fragment,null,"Simulation"),link:"/docs/simulation/simulation",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-simulation.png",description:l.a.createElement(l.a.Fragment,null,"Perform what-if analysis, run on-the-fly simulations and compare multiple business scenarios with ValQ.")},{title:l.a.createElement(l.a.Fragment,null,"Planning"),link:"/docs/planning/overview",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-planning.png",description:l.a.createElement(l.a.Fragment,null,"Plan, budget and forecast your business operations efficiently and optimize your goals.")},{title:l.a.createElement(l.a.Fragment,null,"Advanced Analysis"),link:"/docs/analysis/variance-analysis",imageUrl:"https://cdn.valq.com/wp-content/uploads/valq-key-features-advanced-analytics.png",description:l.a.createElement(l.a.Fragment,null,"Run in-depth and nimble Variance Analysis with minimal clicks.")}];function v(e){var t=e.imageUrl,a=e.title,n=e.description,r=e.link,c=Object(d.a)(t),o=Object(d.a)(r);return l.a.createElement(s.a,{className:i()("col col--4",h.a.feature),to:o},c&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:h.a.featureImage,src:c,alt:a})),l.a.createElement("h3",null,a),l.a.createElement("p",null,n))}t.default=function(){var e=Object(u.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(o.a,{title:t.title+" - Modern Digital Planning",description:"ValQ - Modern Digital Planning"},l.a.createElement("header",{className:i()("hero hero--primary",h.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:h.a.buttons},l.a.createElement(s.a,{className:i()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(d.a)("docs/general/getting-started")},"Get Started")))),l.a.createElement("main",null,f&&f.length&&l.a.createElement("section",{className:h.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},f.map((function(e,t){return l.a.createElement(v,Object(n.a)({key:t},e))})))))))}},205:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},210:function(e,t,a){"use strict";var n=a(35);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},211:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(217),c=a(200),i=a(201),o=a(1),s=a(9),u=a(207),d=a(212),m=a(213),h=a.n(m),f=a(205),v=a.n(f),p=a(118),b=a.n(p),g=function(){return r.a.createElement("span",{className:v()(b.a.toggle,b.a.moon)})},E=function(){return r.a.createElement("span",{className:v()(b.a.toggle,b.a.sun)})},k=function(e){var t=Object(c.a)().isClient;return r.a.createElement(h.a,Object(o.a)({disabled:!t,icons:{checked:r.a.createElement(g,null),unchecked:r.a.createElement(E,null)}},e))},y=function(){var e=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):""),t=e[0],a=e[1];n.useEffect((function(){document.documentElement.setAttribute("data-theme",t)}),[t]),n.useEffect((function(){try{var e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}}),[a]);var r=n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a]);return[t,r]},_=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],l=Object(n.useState)(0),c=l[0],i=l[1],o=Object(n.useState)(0),s=o[0],u=o[1],d=Object(n.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]),m=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-s,a=window.innerHeight;e<s||(c&&e>c?r(!1):e+a<t&&r(!0),i(e))};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[c,s]),{navbarRef:d,isNavbarVisible:a}},w=a(119),N=a.n(w);function O(e){var t=e.to,a=e.href,n=e.label,l=(e.position,Object(s.a)(e,["to","href","label","position"])),c=Object(i.a)(t);return r.a.createElement(u.a,Object(o.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:c},l),n)}var j=function(){var e,t=Object(c.a)().siteConfig,a=void 0===t?{}:t,l=a.baseUrl,s=a.themeConfig,m=void 0===s?{}:s,h=m.navbar,f=void 0===h?{}:h,p=m.disableDarkMode,b=void 0!==p&&p,g=f.title,E=f.logo,w=void 0===E?{}:E,j=f.links,C=void 0===j?[]:j,S=f.hideOnScroll,x=void 0!==S&&S,M=Object(n.useState)(!1),T=M[0],F=M[1],P=Object(n.useState)(!1),B=P[0],D=P[1],L=y(),X=L[0],q=L[1],I=_(x),A=I.navbarRef,R=I.isNavbarVisible,U=Object(n.useCallback)((function(){document.body.style.overflow="hidden",F(!0)}),[F]),V=Object(n.useCallback)((function(){document.body.style.overflow="visible",F(!1)}),[F]),H=Object(n.useCallback)((function(e){return q(e.target.checked?"dark":"")}),[q]),z=Object(i.a)(w.src);return r.a.createElement("nav",{ref:A,className:v()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":T},e[N.a.navbarHideable]=x,e[N.a.navbarHidden]=!R,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:U,onKeyDown:U},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:l},null!=w&&r.a.createElement("img",{className:"navbar__logo",src:z,alt:w.alt}),null!=g&&r.a.createElement("strong",{className:B?N.a.hideLogoText:""},g)),C.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(O,Object(o.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},C.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(O,Object(o.a)({},e,{key:t}))})),!b&&r.a.createElement(k,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===X,onChange:H}),r.a.createElement(d.a,{handleSearchBarToggle:D,isSearchBarExpanded:B}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:V}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:V,to:l},null!=w&&r.a.createElement("img",{className:"navbar__logo",src:z,alt:w.alt}),null!=g&&r.a.createElement("strong",null,g)),!b&&T&&r.a.createElement(k,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===X,onChange:H})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},C.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(O,Object(o.a)({className:"menu__link"},e,{onClick:V})))})))))))},C=a(120),S=a.n(C);function x(e){var t=e.to,a=e.href,n=e.label,l=Object(s.a)(e,["to","href","label"]),c=Object(i.a)(t);return r.a.createElement(u.a,Object(o.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),n)}var M=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var T=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,o=n.links,s=void 0===o?[]:o,u=n.logo,d=void 0===u?{}:u,m=Object(i.a)(d.src);return a?r.a.createElement("footer",{className:v()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(x,e))}))):null)}))),(d||l)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:S.a.footerLogoLink},r.a.createElement(M,{alt:d.alt,url:m})):r.a.createElement(M,{alt:d.alt,url:m})),l))):null};a(121);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,o=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,m=e.children,h=e.title,f=e.noFooter,v=e.description,p=e.image,b=e.keywords,g=e.permalink,E=e.version,k=h||s+" \xb7 "+o,y=p||u,_=d+Object(i.a)(y),w=Object(i.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:_}),y&&r.a.createElement("meta",{property:"twitter:image",content:_}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),g&&r.a.createElement("meta",{property:"og:url",content:d+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(j,null),r.a.createElement("div",{className:"main-wrapper"},m),!f&&r.a.createElement(T,null))}},212:function(e,t,a){"use strict";a(49),a(24),a(19),a(18),a(71);var n=a(0),r=a.n(n),l=a(205),c=a.n(l),i=a(210),o=a(200),s=!1;t.a=function(e){var t=Object(n.useRef)(!1),l=Object(n.useRef)(null),u=Object(i.b)(),d=Object(o.a)().siteConfig,m=(void 0===d?{}:d).baseUrl,h=function(){t.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=m+a.url;document.createElement("a").href=n,u.push(n)}}),t.current=!0)},f=function(){s?h():Promise.all([a.e(79).then(a.bind(null,222)),Promise.all([a.e(75),a.e(78)]).then(a.bind(null,226)),a.e(49).then(a.t.bind(null,225,7))]).then((function(e){var t=e[0].default,a=e[1].default;s=!0,window.searchData=t,window.DocSearch=a,h()}))},v=Object(n.useCallback)((function(t){l.current.contains(t.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:v,onBlur:v,ref:l}))}},213:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=m(l),i=m(a(205)),o=m(a(11)),s=m(a(214)),u=m(a(215)),d=a(216);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},h.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},214:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},215:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},216:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},221:function(e,t,a){var n=a(17),r=a(20),l=a(23),c=/"/g,i=function(e,t,a,n){var r=String(l(e)),i="<"+t;return""!==a&&(i+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),i+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(i),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},242:function(e,t,a){"use strict";a(221)("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);