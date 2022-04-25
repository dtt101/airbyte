"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5334],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33096:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},p="QuickBooks",s={unversionedId:"integrations/sources/quickbooks",id:"integrations/sources/quickbooks",title:"QuickBooks",description:"Overview",source:"@site/../docs/integrations/sources/quickbooks.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/quickbooks",permalink:"/integrations/sources/quickbooks",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/quickbooks.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Qualaroo",permalink:"/integrations/sources/qualaroo"},next:{title:"Recharge",permalink:"/integrations/sources/recharge"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"CHANGELOG",id:"changelog",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickbooks"},"QuickBooks"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The QuickBooks source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("p",null,"This source wraps the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/singer-io/tap-quickbooks"},"Singer QuickBooks Tap"),"."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This Source is capable of syncing the following ",(0,i.kt)("a",{parentName:"p",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/most-commonly-used/account"},"Streams"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account"},"Accounts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/billpayment"},"BillPayments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/budget"},"Budgets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/bill"},"Bills")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/class"},"Classes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/creditmemo"},"CreditMemos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer"},"Customers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/department"},"Departments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/deposit"},"Deposits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/employee"},"Employees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/estimate"},"Estimates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice"},"Invoices")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/item"},"Items")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/journalentry"},"JournalEntries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/payment"},"Payments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/paymentmethod"},"PaymentMethods")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchase"},"Purchases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/purchaseorder"},"PurchaseOrders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/refundreceipt"},"RefundReceipts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/salesreceipt"},"SalesReceipts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxagency"},"TaxAgencies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxcode"},"TaxCodes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/taxrate"},"TaxRates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/term"},"Terms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/timeactivity"},"TimeActivities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/transfer"},"Transfers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendorcredit"},"VendorCredits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/vendor"},"Vendors"))),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create an ",(0,i.kt)("a",{parentName:"li",href:"https://developer.intuit.com/app/developer/qbo/docs/get-started"},"Intuit Developer account")),(0,i.kt)("li",{parentName:"ol"},"Create an app"),(0,i.kt)("li",{parentName:"ol"},"Obtain credentials")),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Client ID"),(0,i.kt)("li",{parentName:"ul"},"Client Secret"),(0,i.kt)("li",{parentName:"ul"},"Realm ID"),(0,i.kt)("li",{parentName:"ul"},"Refresh token")),(0,i.kt)("p",null,"The easiest way to get these credentials is by using Quickbook's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.intuit.com/app/developer/qbo/docs/develop/authentication-and-authorization/oauth-2.0-playground"},"OAuth 2.0 playground")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important note:")," The refresh token expires every 100 days. You will need to manually revisit the Oauth playground to obtain a refresh token every 100 days, or your syncs will expire. We plan on offering full Oauth support soon so you don't need to redo this process manually."),(0,i.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.5")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10346"},"10346")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update label ",(0,i.kt)("inlineCode",{parentName:"td"},"Quickbooks")," -> ",(0,i.kt)("inlineCode",{parentName:"td"},"QuickBooks"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.4")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8960"},"8960")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4986"},"4986")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Using number data type for decimal fields instead string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4539"},"4539")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for Kubernetes support")))))}m.isMDXComponent=!0}}]);