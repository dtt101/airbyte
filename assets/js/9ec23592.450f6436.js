"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8453],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5158:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={},c="Step 5: Declare the Schema",p={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/declare-schema",id:"connector-development/tutorials/cdk-tutorial-python-http/declare-schema",title:"Step 5: Declare the Schema",description:"The discover method of the Airbyte Protocol returns an AirbyteCatalog: an object which declares all the streams output by a connector and their schemas. It also declares the sync modes supported by the stream \\(full refresh or incremental\\). See the catalog tutorial for more information.",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/5-declare-schema.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/declare-schema",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/declare-schema",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/5-declare-schema.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 4: Connection Checking",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/connection-checking"},next:{title:"Step 6: Read Data",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/read-data"}},l={},u=[],m={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-5-declare-the-schema"},"Step 5: Declare the Schema"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"discover")," method of the Airbyte Protocol returns an ",(0,o.kt)("inlineCode",{parentName:"p"},"AirbyteCatalog"),": an object which declares all the streams output by a connector and their schemas. It also declares the sync modes supported by the stream ","(","full refresh or incremental",")",". See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/beginners-guide-to-catalog"},"catalog tutorial")," for more information."),(0,o.kt)("p",null,"This is a simple task with the Airbyte CDK. For each stream in our connector we'll need to: 1. Create a python ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"source.py")," which extends ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpStream")," 2. Place a ",(0,o.kt)("inlineCode",{parentName:"p"},"<stream_name>.json")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"source_<name>/schemas/")," directory. The name of the file should be the snake","_","case name of the stream whose schema it describes, and its contents should be the JsonSchema describing the output from that stream."),(0,o.kt)("p",null,"Let's create a class in ",(0,o.kt)("inlineCode",{parentName:"p"},"source.py")," which extends ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpStream"),". You'll notice there are classes with extensive comments describing what needs to be done to implement various connector features. Feel free to read these classes as needed. But for the purposes of this tutorial, let's assume that we are adding classes from scratch either by deleting those generated classes or editing them to match the implementation below."),(0,o.kt)("p",null,"We'll begin by creating a stream to represent the data that we're pulling from the Exchange Rates API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class ExchangeRates(HttpStream):\n    url_base = "https://api.exchangeratesapi.io/"\n\n    # Set this as a noop.\n    primary_key = None\n\n    def next_page_token(self, response: requests.Response) -> Optional[Mapping[str, Any]]:\n        # The API does not offer pagination, so we return None to indicate there are no more pages in the response\n        return None\n\n    def path(\n        self, \n        stream_state: Mapping[str, Any] = None, \n        stream_slice: Mapping[str, Any] = None, \n        next_page_token: Mapping[str, Any] = None\n    ) -> str:\n        return ""  # TODO\n\n    def parse_response(\n        self,\n        response: requests.Response,\n        stream_state: Mapping[str, Any],\n        stream_slice: Mapping[str, Any] = None,\n        next_page_token: Mapping[str, Any] = None,\n    ) -> Iterable[Mapping]:\n        return None  # TODO\n')),(0,o.kt)("p",null,"Note that this implementation is entirely empty -- we haven't actually done anything. We'll come back to this in the next step. But for now we just want to declare the schema of this stream. We'll declare this as a stream that the connector outputs by returning it from the ",(0,o.kt)("inlineCode",{parentName:"p"},"streams")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from airbyte_cdk.sources.streams.http.auth import NoAuth\n\nclass SourcePythonHttpTutorial(AbstractSource):\n\n    def check_connection(self, logger, config) -> Tuple[bool, any]:\n        ...\n\n    def streams(self, config: Mapping[str, Any]) -> List[Stream]:\n        # NoAuth just means there is no authentication required for this API and is included for completeness.\n        # Skip passing an authenticator if no authentication is required.\n        # Other authenticators are available for API token-based auth and Oauth2. \n        auth = NoAuth()  \n        return [ExchangeRates(authenticator=auth)]\n")),(0,o.kt)("p",null,"Having created this stream in code, we'll put a file ",(0,o.kt)("inlineCode",{parentName:"p"},"exchange_rates.json")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas/")," folder. You can download the JSON file describing the output schema ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-cdk/python/docs/tutorials/http_api_source_assets/exchange_rates.json"},"here")," for convenience and place it in ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas/"),"."),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," schema file in place, let's see if the connector can now find this schema and produce a valid catalog:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"python main.py discover --config sample_files/config.json\n")),(0,o.kt)("p",null,"you should see some output like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'{"type": "CATALOG", "catalog": {"streams": [{"name": "exchange_rates", "json_schema": {"$schema": "http://json-schema.org/draft-04/schema#", "type": "object", "properties": {"base": {"type": "string"}, "rates": {"type": "object", "properties": {"GBP": {"type": "number"}, "HKD": {"type": "number"}, "IDR": {"type": "number"}, "PHP": {"type": "number"}, "LVL": {"type": "number"}, "INR": {"type": "number"}, "CHF": {"type": "number"}, "MXN": {"type": "number"}, "SGD": {"type": "number"}, "CZK": {"type": "number"}, "THB": {"type": "number"}, "BGN": {"type": "number"}, "EUR": {"type": "number"}, "MYR": {"type": "number"}, "NOK": {"type": "number"}, "CNY": {"type": "number"}, "HRK": {"type": "number"}, "PLN": {"type": "number"}, "LTL": {"type": "number"}, "TRY": {"type": "number"}, "ZAR": {"type": "number"}, "CAD": {"type": "number"}, "BRL": {"type": "number"}, "RON": {"type": "number"}, "DKK": {"type": "number"}, "NZD": {"type": "number"}, "EEK": {"type": "number"}, "JPY": {"type": "number"}, "RUB": {"type": "number"}, "KRW": {"type": "number"}, "USD": {"type": "number"}, "AUD": {"type": "number"}, "HUF": {"type": "number"}, "SEK": {"type": "number"}}}, "date": {"type": "string"}}}, "supported_sync_modes": ["full_refresh"]}]}}\n')),(0,o.kt)("p",null,"It's that simple! Now the connector knows how to declare your connector's stream's schema. We declare only one stream since our source is simple, but the principle is exactly the same if you had many streams."),(0,o.kt)("p",null,"You can also dynamically define schemas, but that's beyond the scope of this tutorial. See the ",(0,o.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/full-refresh-stream#defining-the-streams-schema"},"schema docs")," for more information."))}h.isMDXComponent=!0}}]);