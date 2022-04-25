"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3973],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73336:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],s={},l="Introduction",u={unversionedId:"readme",id:"readme",title:"Introduction",description:"GitHub stars GitHub Workflow Status License License",source:"@site/../docs/readme.md",sourceDirName:".",slug:"/",permalink:"/",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",next:{title:"Getting Started with Airbyte Cloud",permalink:"/cloud/getting-started-with-airbyte-cloud"}},c={},p=[{value:"Quick start",id:"quick-start",level:2},{value:"Features",id:"features",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Community support",id:"community-support",level:2},{value:"Roadmap",id:"roadmap",level:2},{value:"License",id:"license",level:2}],m={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://GitHub.com/airbytehq/airbyte/stargazers/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/airbytehq/airbyte?style=social&label=Star&maxAge=2592000",alt:"GitHub stars"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/actions/workflows/gradle.yml"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/workflow/status/airbytehq/airbyte/Airbyte%20CI",alt:"GitHub Workflow Status"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/a9b1c6c0420550ad5069aca66c295223e0d05e27/LICENSE/README.md"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen",alt:"License"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/a9b1c6c0420550ad5069aca66c295223e0d05e27/LICENSE/README.md"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=license&message=ELv2&color=brightgreen",alt:"License"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data integration made simple, secure and extensible."),"\nThe new open-source standard to sync data from applications, APIs & databases to warehouses, lakes & other destinations."),(0,o.kt)("p",null,"Airbyte is on a mission to make data integration pipelines a commodity."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maintenance-free connectors you can use in minutes"),". Just authenticate your sources and warehouse, and get connectors that adapt to schema and API changes for you."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Building new connectors made trivial.")," We make it very easy to add new connectors that you need, using the language of your choice, by offering scheduling and orchestration. "),(0,o.kt)("li",{parentName:"ul"},"Designed to ",(0,o.kt)("strong",{parentName:"li"},"cover the long tail of connectors and needs"),". Benefit from the community's battle-tested connectors and adapt them to your specific needs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Your data stays in your cloud"),". Have full control over your data, and the costs of your data transfers. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No more security compliance process")," to go through as Airbyte is self-hosted. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No more pricing indexed on volume"),", as cloud-based solutions offer. ")),(0,o.kt)("p",null,"Here's a list of our ",(0,o.kt)("a",{parentName:"p",href:"/integrations/"},"connectors with their health status"),"."),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/airbytehq/airbyte.git\ncd airbyte\ndocker-compose up\n")),(0,o.kt)("p",null,"Now visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},"http://localhost:8000")),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/e378d40236b6a34e1c1cb481c8952735ec687d88/docs/quickstart/getting-started.md"},"step-by-step guide")," showing you how to load data from an API into a file, all on your computer."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Built for extensibility"),": Adapt an existing connector to your needs or build a new one with ease."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Optional normalized schemas"),": Entirely customizable, start with raw data or from some suggestion of normalized data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Full-grade scheduler"),": Automate your replications with the frequency you need."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Real-time monitoring"),": We log all errors in full detail to help you understand."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Incremental updates"),": Automated replications are based on incremental updates to reduce your data transfer costs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Manual full refresh"),": Sometimes, you need to re-sync all your data to start again."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Debugging autonomy"),": Modify and debug pipelines as you see fit, without waiting.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://airbyte.io/features/"},"See more on our website.")),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"We love contributions to Airbyte, big or small."),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/"},"Contributing guide")," on how to get started. Not sure where to start? We\u2019ve listed some ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/labels/good%20first%20issue"},"good first issues")," to start with. If you have any questions, please open a draft PR or visit our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io/"},"slack channel")," where the core team can help answer your questions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that you are able to create connectors using the language you want, as Airbyte connections run as Docker containers.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Also, we will never ask you to maintain your connector. The goal is that the Airbyte team and the community helps maintain it, let's call it crowdsourced maintenance!")),(0,o.kt)("h2",{id:"community-support"},"Community support"),(0,o.kt)("p",null,"For general help using Airbyte, please refer to the official Airbyte documentation. For additional help, you can use one of these channels to ask a question:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slack.airbyte.io"},"Slack")," ","(","For live discussion with the Community and Airbyte team",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discuss.airbyte.io/"},"Forum")," ","(","For deeper converstaions about features, connectors, or problems",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"GitHub")," ","(","Bug reports, Contributions",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/airbytehq"},"Twitter")," ","(","Get the news fast",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://airbyte.io/weekly-office-hours/"},"Weekly office hours")," ","(","Live informal 30-minute video call sessions with the Airbyte team",")")),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"Check out our ",(0,o.kt)("a",{parentName:"p",href:"https://app.harvestr.io/roadmap/view/pQU6gdCyc/airbyte-roadmap"},"roadmap")," to get informed on what we are currently working on, and what we have in mind for the next weeks, months and years."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/project-overview/licenses/"},"LICENSE")," file for licensing information, and our ",(0,o.kt)("a",{parentName:"p",href:"/project-overview/licenses/license-faq"},"FAQ")," for any questions you may have on that topic."))}d.isMDXComponent=!0}}]);