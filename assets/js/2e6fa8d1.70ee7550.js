"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4625],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91971:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={},p="Pivotal Tracker",s={unversionedId:"integrations/sources/pivotal-tracker",id:"integrations/sources/pivotal-tracker",title:"Pivotal Tracker",description:"Overview",source:"@site/../docs/integrations/sources/pivotal-tracker.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/pivotal-tracker",permalink:"/integrations/sources/pivotal-tracker",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/pivotal-tracker.md",tags:[],version:"current",frontMatter:{}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide to create the API Token",id:"setup-guide-to-create-the-api-token",level:3}],m={toc:u};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pivotal-tracker"},"Pivotal Tracker"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Pivotal Tracker source supports Full Refresh syncs. It supports pulling from :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Activity"),(0,i.kt)("li",{parentName:"ul"},"Epics"),(0,i.kt)("li",{parentName:"ul"},"Labels"),(0,i.kt)("li",{parentName:"ul"},"Project Membership"),(0,i.kt)("li",{parentName:"ul"},"Projects"),(0,i.kt)("li",{parentName:"ul"},"Releases"),(0,i.kt)("li",{parentName:"ul"},"Stories")),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Output streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/api/rest/v5#Activity"},"Activity")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/api/rest/v5#Epics"},"Epics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/api/rest/v5#Labels"},"Labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/api/rest/v5#Project_Memberships"},"Project Membership")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/api/rest/v5#Projects"},"Projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/api/rest/v5#Releases"},"Releases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.pivotaltracker.com/help/api/rest/v5#Stories"},"Stories"))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The Pivotal Trakcer connector should not run into Stripe API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pivotal Trakcer API Token")),(0,i.kt)("h3",{id:"setup-guide-to-create-the-api-token"},"Setup guide to create the API Token"),(0,i.kt)("p",null,"Access your profile ",(0,i.kt)("a",{parentName:"p",href:"https://www.pivotaltracker.com/profile"},"here")," go down and click in ",(0,i.kt)("strong",{parentName:"p"},"Create New Token"),".\nUse this to pull data from Pivotal Tracker."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11060"},"11060")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}k.isMDXComponent=!0}}]);