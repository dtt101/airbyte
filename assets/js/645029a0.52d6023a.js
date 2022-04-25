"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6047],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return f}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),h=s(a),f=n,k=h["".concat(o,".").concat(f)]||h[f]||m[f]||i;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=h;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},53422:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],p={description:"Shopify is a proprietary e-commerce platform for online stores and retail point-of-sale systems."},o="Shopify",s={unversionedId:"integrations/sources/shopify",id:"integrations/sources/shopify",title:"Shopify",description:"Shopify is a proprietary e-commerce platform for online stores and retail point-of-sale systems.",source:"@site/../docs/integrations/sources/shopify.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/shopify",permalink:"/integrations/sources/shopify",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/shopify.md",tags:[],version:"current",frontMatter:{description:"Shopify is a proprietary e-commerce platform for online stores and retail point-of-sale systems."},sidebar:"mySidebar",previous:{title:"Sentry",permalink:"/integrations/sources/sentry"},next:{title:"Shortio",permalink:"/integrations/sources/shortio"}},d={},m=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"NOTE:",id:"note",level:4},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Connect using <code>API PASSWORD</code> option:",id:"connect-using-api-password-option",level:3},{value:"Connect using <code>OAuth 2.0</code> option:",id:"connect-using-oauth-20-option",level:3},{value:"Output Streams Schemas",id:"output-streams-schemas",level:3},{value:"Notes:",id:"notes",level:4},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Changelog",id:"changelog",level:2}],h={toc:m};function f(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shopify"},"Shopify"),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("p",null,"The Shopify source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("p",null,"This source can sync data for the ",(0,i.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/api/reference"},"Shopify API"),"."),(0,i.kt)("p",null,"This Source Connector is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/connector-development/cdk-python"},"Airbyte CDK"),"."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"Check out common troubleshooting issues for the BigQuery destination connector on our Discourse ",(0,i.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/tags/c/connector/11/source-shopify"},"here"),"."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/abandoned_checkouts"},"Abandoned Checkouts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/collect"},"Collects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products/customcollection"},"Custom Collections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/customers"},"Customers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/draftorder"},"Draft Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/docs/admin-api/rest/reference/discounts/discountcode"},"Discount Codes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/metafield"},"Metafields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders"},"Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/refund"},"Orders Refunds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin/rest/reference/orders/order-risk"},"Orders Risks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/products"},"Products")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/orders/transaction"},"Transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/transactions"},"Balance Transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/online-store/page"},"Pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.shopify.com/en/api/reference/discounts/pricerule"},"Price Rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/location"},"Locations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventoryItem"},"InventoryItems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-10/resources/inventorylevel"},"InventoryLevels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillmentorder"},"Fulfillment Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/fulfillment"},"Fulfillments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-07/resources/shop"},"Shop"))),(0,i.kt)("h4",{id:"note"},"NOTE:"),(0,i.kt)("p",null,"For better experience with ",(0,i.kt)("inlineCode",{parentName:"p"},"Incremental Refresh")," the following is recommended:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Order Refunds"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Order Risks"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Transactions")," should be synced along with ",(0,i.kt)("inlineCode",{parentName:"li"},"Orders")," stream."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Discount Codes")," should be synced along with ",(0,i.kt)("inlineCode",{parentName:"li"},"Price Rules")," stream.")),(0,i.kt)("p",null,"If child streams are synced alone from the parent stream - the full sync will take place, and the records are filtered out afterwards."),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"This connector support both: ",(0,i.kt)("inlineCode",{parentName:"p"},"OAuth 2.0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"API PASSWORD")," (for private applications) athentication methods."),(0,i.kt)("h3",{id:"connect-using-api-password-option"},"Connect using ",(0,i.kt)("inlineCode",{parentName:"h3"},"API PASSWORD")," option:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://YOURSTORE.myshopify.com/admin/apps/private")),(0,i.kt)("li",{parentName:"ol"},"Enable private development if it isn't enabled."),(0,i.kt)("li",{parentName:"ol"},"Create a private application."),(0,i.kt)("li",{parentName:"ol"},"Select the resources you want to allow access to. Airbyte only needs read-level access. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Note: The UI will show all possible data sources and will show errors when syncing if it doesn't have permissions to access a resource. "))),(0,i.kt)("li",{parentName:"ol"},"The password under the ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin API")," section is what you'll use as the ",(0,i.kt)("inlineCode",{parentName:"li"},"api_password")," for the integration."),(0,i.kt)("li",{parentName:"ol"},"You're ready to set up Shopify in Airbyte!")),(0,i.kt)("h3",{id:"connect-using-oauth-20-option"},"Connect using ",(0,i.kt)("inlineCode",{parentName:"h3"},"OAuth 2.0")," option:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("inlineCode",{parentName:"li"},"OAuth 2.0")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Shopify Authorization Method")),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"authenticate")),(0,i.kt)("li",{parentName:"ol"},"Proceed the authentication using your credentials for your Shopify account.")),(0,i.kt)("h3",{id:"output-streams-schemas"},"Output Streams Schemas"),(0,i.kt)("p",null,"This Source is capable of syncing the following core Streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/abandoned-checkouts#top"},"Abandoned Checkouts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/collect#top"},"Collects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/customcollection#top"},"Custom Collections")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/customer#top"},"Customers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/draftorder#top"},"Draft Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/discountcode#top"},"Discount Codes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/metafield#top"},"Metafields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/order#top"},"Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/refund#top"},"Orders Refunds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/order-risk#top"},"Orders Risks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/product#top"},"Products")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/transaction#top"},"Transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/tendertransaction"},"Tender Transactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/page#top"},"Pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/pricerule#top"},"Price Rules")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/location"},"Locations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/inventoryItem"},"InventoryItems")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2021-01/resources/inventorylevel"},"InventoryLevels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/fulfillmentorder"},"Fulfillment Orders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/fulfillment"},"Fulfillments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://shopify.dev/api/admin-rest/2022-01/resources/shop"},"Shop"))),(0,i.kt)("h4",{id:"notes"},"Notes:"),(0,i.kt)("p",null,"For better experience with ",(0,i.kt)("inlineCode",{parentName:"p"},"Incremental Refresh")," the following is recommended:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Order Refunds"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Order Risks"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Transactions")," should be synced along with ",(0,i.kt)("inlineCode",{parentName:"li"},"Orders")," stream."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Discount Codes")," should be synced along with ",(0,i.kt)("inlineCode",{parentName:"li"},"Price Rules")," stream.")),(0,i.kt)("p",null,"If child streams are synced alone from the parent stream - the full sync will take place, and the records are filtered out afterwards."),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"Shopify has some ",(0,i.kt)("a",{parentName:"p",href:"https://shopify.dev/concepts/about-apis/rate-limits"},"rate limit restrictions"),". Typically, there should not be issues with throttling or exceeding the rate limits but in some edge cases, user can receive the warning message as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\"Caught retryable error '<some_error> or null' after <some_number> tries. Waiting <some_number> seconds then retrying...\"\n")),(0,i.kt)("p",null,"This is expected when the connector hits the 429 - Rate Limit Exceeded HTTP Error. With given error message the sync operation is still goes on, but will require more time to finish."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.36"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9850"},"9850")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,i.kt)("inlineCode",{parentName:"td"},"BalanceTransactions")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.35"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10915"},"10915")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix a bug which caused ",(0,i.kt)("inlineCode",{parentName:"td"},"full-refresh")," syncs of child REST entities configured for ",(0,i.kt)("inlineCode",{parentName:"td"},"incremental"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.34"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10794"},"10794")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Minor specification re-order, fixed links in documentation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.33"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10419"},"10419")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed wrong field type for tax_exemptions for ",(0,i.kt)("inlineCode",{parentName:"td"},"Abandoned_checkouts")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10449"},"10449")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,i.kt)("inlineCode",{parentName:"td"},"tender_transactions")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.31"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10175"},"10175")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed compatibility issues for legacy user config")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.30"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-24"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9648"},"9648")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added permission validation before sync")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.29"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9248"},"9049")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,i.kt)("inlineCode",{parentName:"td"},"shop_url")," to the record for all streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.28"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9591"},"9591")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Implemented ",(0,i.kt)("inlineCode",{parentName:"td"},"OAuth2.0")," authentication method for Airbyte Cloud")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9049"},"9049")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8597"},"8597")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,i.kt)("inlineCode",{parentName:"td"},"mismatched number of tables")," for base-normalization, increased performance of ",(0,i.kt)("inlineCode",{parentName:"td"},"order_refunds")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8297"},"8297")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added Shop stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7783"},"7783")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reviewed and corrected schemas for all streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-15"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7973"},"7973")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,i.kt)("inlineCode",{parentName:"td"},"InventoryItems"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7107"},"7101")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added FulfillmentOrders, Fulfillments streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7382"},"7382")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"td"},"InventoryLevels")," primary key")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7063"},"7063")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,i.kt)("inlineCode",{parentName:"td"},"Location")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"InventoryLevels")," as streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-11"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6951"},"6951")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added support of ",(0,i.kt)("inlineCode",{parentName:"td"},"OAuth 2.0")," authorisation option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6056"},"6056")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,i.kt)("inlineCode",{parentName:"td"},"pre_tax_price")," to the ",(0,i.kt)("inlineCode",{parentName:"td"},"orders/line_items")," schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5244"},"5244")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Created data type enforcer for converting prices into numbers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5945"},"5965")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed the connector's performance for ",(0,i.kt)("inlineCode",{parentName:"td"},"Incremental refresh"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5853"},"5853")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"td"},"amount")," type in ",(0,i.kt)("inlineCode",{parentName:"td"},"order_refund")," schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5801"},"5801")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed ",(0,i.kt)("inlineCode",{parentName:"td"},"line_items/discount allocations")," & ",(0,i.kt)("inlineCode",{parentName:"td"},"duties")," parts of ",(0,i.kt)("inlineCode",{parentName:"td"},"orders")," schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5470"},"5470")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed rate limits throttling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5276"},"5276")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add status property to product schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-23"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4943"},"4943")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix products schema up to API 2021-07")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4830"},"4830")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix for streams json schemas, upgrade to API version 2021-07")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4472"},"4472")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental sync is now using updated","_","at instead of since","_","id by default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-29"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4121"},"4121")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add draft orders stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-26"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4290"},"4290")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed the bug when limiting output records to 1 caused infinity loop")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-24"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4009"},"4009")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add pages, price rules and discount codes streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for Kubernetes support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3926"},"3926")),(0,i.kt)("td",{parentName:"tr",align:"left"},"New attributes to Orders schema")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-06-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3787"},"3787")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add Native Shopify Source Connector")))))}f.isMDXComponent=!0}}]);