"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1642],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},p="Monday",u={unversionedId:"integrations/sources/monday",id:"integrations/sources/monday",title:"Monday",description:"Overview",source:"@site/../docs/integrations/sources/monday.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/monday",permalink:"/integrations/sources/monday",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/monday.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Mixpanel",permalink:"/integrations/sources/mixpanel"},next:{title:"Mongo DB",permalink:"/integrations/sources/mongodb-v2"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Connect using <code>OAuth 2.0</code> option:",id:"connect-using-oauth-20-option",level:3},{value:"Connect using <code>API Token</code> option:",id:"connect-using-api-token-option",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monday"},"Monday"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Monday supports full refresh syncs"),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"Several output streams are available from this source:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.developer.monday.com/docs/items-queries"},"Items")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.developer.monday.com/docs/groups-queries#groups-queries"},"Boards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.developer.monday.com/docs/teams-queries"},"Teams")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.developer.monday.com/docs/updates-queries"},"Updates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.developer.monday.com/docs/users-queries-1"},"Users"))),(0,o.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,o.kt)("h3",{id:"features"},"Features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,o.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,o.kt)("p",null,"The Monday connector should not run into Monday API limitations under normal usage. Please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monday API Token")),(0,o.kt)("p",null,"OR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monday Access Token")),(0,o.kt)("h3",{id:"connect-using-oauth-20-option"},"Connect using ",(0,o.kt)("inlineCode",{parentName:"h3"},"OAuth 2.0")," option:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"OAuth2.0")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization Method"),".."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"authenticate your Monday account"),"."),(0,o.kt)("li",{parentName:"ol"},"Proceed the authentication using your credentials for your Monday account.")),(0,o.kt)("h3",{id:"connect-using-api-token-option"},"Connect using ",(0,o.kt)("inlineCode",{parentName:"h3"},"API Token")," option:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate an API Token as described ",(0,o.kt)("a",{parentName:"li",href:"https://api.developer.monday.com/docs/authentication"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"Use the generated ",(0,o.kt)("inlineCode",{parentName:"li"},"api_token")," in the Airbyte connection.")),(0,o.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,o.kt)("p",null,"You can find your Oauth application in Monday main page -> Profile picture (bottom left corner) -> Developers -> My Apps -> Select your app."),(0,o.kt)("p",null,"You can get the API token for Monday by going to Profile picture (bottom left corner) -> Admin -> API."),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-23"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8172"},"8172")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Add oauth2.0 support")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"8429")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-18"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8016"},"8016")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udc1b Source Monday: fix pagination and schema bug")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2021-11-07"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7168"},"7168")),(0,o.kt)("td",{parentName:"tr",align:"left"},"\ud83c\udf89 New Source: Monday")))))}m.isMDXComponent=!0}}]);