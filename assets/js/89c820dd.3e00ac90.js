"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2008],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=s(a),c=r,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53633:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={},p="Kafka",s={unversionedId:"integrations/destinations/kafka",id:"integrations/destinations/kafka",title:"Kafka",description:"Overview",source:"@site/../docs/integrations/destinations/kafka.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/kafka",permalink:"/integrations/destinations/kafka",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google PubSub",permalink:"/integrations/destinations/pubsub"},next:{title:"Keen",permalink:"/integrations/destinations/keen"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Sync overview",id:"sync-overview",level:3},{value:"Output schema",id:"output-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Network Access",id:"network-access",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target topics",id:"target-topics",level:4},{value:"Setup the Kafka destination in Airbyte",id:"setup-the-kafka-destination-in-airbyte",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kafka"},"Kafka"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Airbyte Kafka destination allows you to sync data to Kafka. Each stream is written to the corresponding Kafka topic."),(0,i.kt)("h3",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h4",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each stream will be output into a Kafka topic."),(0,i.kt)("p",null,"Currently, this connector only writes data with JSON format. More formats ","(","e.g. Apache Avro",")"," will be supported in the future."),(0,i.kt)("p",null,"Each record will contain in its key the uuid assigned by Airbyte, and in the value these 3 fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),":  a timestamp representing when the event was pulled from the data source."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_stream"),": the name of each record's stream.")),(0,i.kt)("h4",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the Kafka destination, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Kafka cluster 1.0 or above.")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("h4",{id:"network-access"},"Network Access"),(0,i.kt)("p",null,"Make sure your Kafka brokers can be accessed by Airbyte."),(0,i.kt)("h4",{id:"permissions"},(0,i.kt)("strong",{parentName:"h4"},"Permissions")),(0,i.kt)("p",null,"Airbyte should be allowed to write messages into topics, and these topics should be created before writing into Kafka or, at least, enable the configuration in the brokers ",(0,i.kt)("inlineCode",{parentName:"p"},"auto.create.topics.enable")," ","(","which is not recommended for production environments",")","."),(0,i.kt)("p",null,"Note that if you choose to use dynamic topic names, you will probably need to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"auto.create.topics.enable")," to avoid your connection failing if there was an update to the source connector's schema. Otherwise a hardcoded topic name may be best."),(0,i.kt)("h4",{id:"target-topics"},"Target topics"),(0,i.kt)("p",null,"You can determine the topics to which messages are written via the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," configuration parameter. Messages can be written to either a hardcoded, pre-defined topic, or dynamically written to different topics based on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/namespaces"},"namespace")," or stream they came from."),(0,i.kt)("p",null,"To write all messages to a single hardcoded topic, enter its name in the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," field e.g: setting ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"my-topic-name")," will write all messages from all streams and namespaces to that topic."),(0,i.kt)("p",null,"To define the output topics dynamically, you can leverage the ",(0,i.kt)("inlineCode",{parentName:"p"},"{namespace}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{stream}")," pattern variables, which cause messages to be written to different topics based on the values present when producing the records. For example, setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"topic_pattern")," parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/{namespace}/{stream}")," means that messages from namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"n1")," and stream ",(0,i.kt)("inlineCode",{parentName:"p"},"s1")," will get written to the topic ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/n1/s1"),", and messages from ",(0,i.kt)("inlineCode",{parentName:"p"},"s2")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"airbyte_syncs/n1/s2")," etc."),(0,i.kt)("p",null,"If you define output topic dynamically, you might want to enable ",(0,i.kt)("inlineCode",{parentName:"p"},"auto.create.topics.enable")," to avoid your connection failing if there was an update to the source connector's schema. Otherwise, you'll need to manually create topics in Kafka as they are added/updated in the source, which is the recommended option for production environments."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTICE"),": a naming convention transformation will be applied to the target topic name using the ",(0,i.kt)("inlineCode",{parentName:"p"},"StandardNameTransformer")," so that some special characters will be replaced."),(0,i.kt)("h3",{id:"setup-the-kafka-destination-in-airbyte"},"Setup the Kafka destination in Airbyte"),(0,i.kt)("p",null,"You should now have all the requirements needed to configure Kafka as a destination in the UI. You can configure the following parameters on the Kafka destination ","(","though many of these are optional or have default values",")",":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bootstrap servers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Topic pattern")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test topic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sync producer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security protocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SASL JAAS config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SASL mechanism")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ACKs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Enable idempotence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compression type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Batch size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Linger ms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max in flight requests per connection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client DNS lookup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Buffer memory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max request size")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Socket connection setup timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Socket connection setup max timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Max block ms")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Request timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delivery timeout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Send buffer bytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Receive buffer bytes"))),(0,i.kt)("p",null,"More info about this can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#producerconfigs"},"Kafka producer configs documentation site"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE"),": Some configurations for SSL are not available yet."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12134"},"12134")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add PLAN Auth")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-15"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10186"},"10186")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add SCRAM-SHA-512 Auth")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-01-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9905"},"#","9905")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix SASL config read issue")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8809"},"#","8809")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6040"},"#","6040")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Change spec.json and config parser")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5125"},"#","5125")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enable ",(0,i.kt)("inlineCode",{parentName:"td"},"additionalPropertities")," in spec.json")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3746"},"#","3746")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}c.isMDXComponent=!0}}]);