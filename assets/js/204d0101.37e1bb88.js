"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1385],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,o(o({ref:e},c),{},{components:a})):n.createElement(h,o({ref:e},c))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23264:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={description:"Chargify is a SaaS billing and subscription management platform which specializes in complex billing, payment collections, and business analytics."},s="Chargify",p={unversionedId:"integrations/destinations/chargify",id:"integrations/destinations/chargify",title:"Chargify",description:"Chargify is a SaaS billing and subscription management platform which specializes in complex billing, payment collections, and business analytics.",source:"@site/../docs/integrations/destinations/chargify.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/chargify",permalink:"/integrations/destinations/chargify",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/chargify.md",tags:[],version:"current",frontMatter:{description:"Chargify is a SaaS billing and subscription management platform which specializes in complex billing, payment collections, and business analytics."},sidebar:"mySidebar",previous:{title:"End-to-End Testing Destination",permalink:"/integrations/destinations/e2e-test"},next:{title:"Google Cloud Storage (GCS)",permalink:"/integrations/destinations/gcs"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Chargify",id:"chargify-1",level:4},{value:"API Key and Project ID",id:"api-key-and-project-id",level:4},{value:"Timestamp Inference",id:"timestamp-inference",level:4},{value:"Setup the Chargify destination in Airbyte",id:"setup-the-chargify-destination-in-airbyte",level:3},{value:"CHANGELOG",id:"changelog",level:2}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chargify"},"Chargify"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Airbyte Chargify destination allows you to stream data from any ",(0,i.kt)("a",{parentName:"p",href:"https://airbyte.io/connectors?connector-type=Sources"},"Airbyte Source")," into ",(0,i.kt)("a",{parentName:"p",href:"http://chargify.com"},"Chargify")," for ",(0,i.kt)("a",{parentName:"p",href:"http://chargify.com/business-intelligence"},"custom analysis")," and ",(0,i.kt)("a",{parentName:"p",href:"http://chargify.com/events-based-billing"},"multi-attribute, usage-based billing"),". Chargify is the leading billing and subscription management software built for the evolving needs of fast-growth companies."),(0,i.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each replicated stream from Airbyte will output data into a corresponding event collection in Chargify. Event collections store data in JSON format. Each collection will inherit the name from the stream with all non-alphanumeric characters removed, except for ",(0,i.kt)("inlineCode",{parentName:"p"},".\u2019, \u2018-\u2019, \u2018_\u2019,")," and whitespace characters. When possible, the connector will try to infer the timestamp value for the record and override the special field ",(0,i.kt)("inlineCode",{parentName:"p"},"chargify.timestamp")," with it."),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the Chargify destination, you'll first need to create a ",(0,i.kt)("a",{parentName:"p",href:"https://go.chargify.com/free-trial/"},"Chargify account")," (if you don\u2019t already have one)."),(0,i.kt)("p",null,"Once you have a Chargify account, you can use the following credentials to set up the connector"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Project ID associated with the site"),(0,i.kt)("li",{parentName:"ul"},"A Master API key associated with the site")),(0,i.kt)("p",null,"You can reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@chargify.com"},"support@chargify.com")," to request your Project ID and Master API key for the Airbyte destination connector."),(0,i.kt)("p",null,"See the setup guide for more information about how to get started."),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h4",{id:"chargify-1"},"Chargify"),(0,i.kt)("p",null,"If ",(0,i.kt)("a",{parentName:"p",href:"http://chargify.com/business-intelligence/"},"Business Intelligence")," and ",(0,i.kt)("a",{parentName:"p",href:"http://chargify.com/events-based-billing"},"Events-Based Billing")," have not been enabled, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@chargify.com"},"support@chargify.com"),"."),(0,i.kt)("p",null,"Login to the Chargify application and identify which sites you want to stream data to for Events-Based Billing and Chargify Business Intelligence."),(0,i.kt)("p",null,"Chargify sites are simply containers for your Products, Customers, and Subscriptions. You can use Chargify with just one Site, although most customers will want two sites at a minimum \u2013 one for testing and one for production."),(0,i.kt)("p",null,"Reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@chargify.com"},"support@chargify.com")," to obtain your Site Project ID and Site Master API key. Note: You will need keys for each site you plan to stream data to."),(0,i.kt)("h4",{id:"api-key-and-project-id"},"API Key and Project ID"),(0,i.kt)("p",null,"The Chargify Connector requires your ",(0,i.kt)("inlineCode",{parentName:"p"},"Project ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Master Key")," for authentication. To get them, please reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@chargify.com"},"support@chargify.com"),"."),(0,i.kt)("h4",{id:"timestamp-inference"},"Timestamp Inference"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Infer Timestamp")," field lets you specify if you want the connector to infer the ",(0,i.kt)("a",{parentName:"p",href:"https://help.chargify.com/events/getting-data-in-guide.html#event-timestamps"},"chargify.timestamp")," field based on the data from the event that occurred in the source application. This feature allows for historical data synchronization enabling you to fully leverage the power of Chargify's time series analytics. By default, this property is set to true. If toggled off, chargify.timestamp will be set to the datetime when the data was recorded by Chargify."),(0,i.kt)("h3",{id:"setup-the-chargify-destination-in-airbyte"},"Setup the Chargify destination in Airbyte"),(0,i.kt)("p",null,"Now, you should have all the parameters needed to configure Chargify destination."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Project ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Master API Key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Infer Timestamp"))),(0,i.kt)("p",null,"Connect your first source and then head to the Chargify application. You can seamlessly run ",(0,i.kt)("a",{parentName:"p",href:"https://www.chargify.com/business-intelligence/"},"custom analysis")," on your data and build ",(0,i.kt)("a",{parentName:"p",href:"http://chargify.com/events-based-billing/"},"multi-attribute, usage-based pricing models"),"."),(0,i.kt)("p",null,"If you have any questions or want to get started, ",(0,i.kt)("a",{parentName:"p",href:"https://go.chargify.com/contact/"},"please reach out to a billing expert"),"."),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5973"},"#","5973")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix timestamp inference for complex schemas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5339"},"#","5339")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Chargify Destination Release!")))))}d.isMDXComponent=!0}}]);