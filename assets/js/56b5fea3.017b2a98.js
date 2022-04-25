"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2622],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={},l="HTTP-API-based Connectors",p={unversionedId:"connector-development/cdk-python/http-streams",id:"connector-development/cdk-python/http-streams",title:"HTTP-API-based Connectors",description:"The CDK offers base classes that greatly simplify writing HTTP API-based connectors. Some of the most useful features include helper functionality for:",source:"@site/../docs/connector-development/cdk-python/http-streams.md",sourceDirName:"connector-development/cdk-python",slug:"/connector-development/cdk-python/http-streams",permalink:"/connector-development/cdk-python/http-streams",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/cdk-python/http-streams.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Incremental Streams",permalink:"/connector-development/cdk-python/incremental-stream"},next:{title:"Python Concepts",permalink:"/connector-development/cdk-python/python-concepts"}},c={},h=[{value:"Overview of HTTP Streams",id:"overview-of-http-streams",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2},{value:"Stream Slicing",id:"stream-slicing",level:3},{value:"Nested Streams &amp; Caching",id:"nested-streams--caching",level:2},{value:"Example",id:"example",level:4}],m={toc:h};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http-api-based-connectors"},"HTTP-API-based Connectors"),(0,i.kt)("p",null,"The CDK offers base classes that greatly simplify writing HTTP API-based connectors. Some of the most useful features include helper functionality for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication ","(","basic auth, Oauth2, or any custom auth method",")"),(0,i.kt)("li",{parentName:"ul"},"Pagination"),(0,i.kt)("li",{parentName:"ul"},"Handling rate limiting with static or dynamic backoff timing"),(0,i.kt)("li",{parentName:"ul"},"Caching")),(0,i.kt)("p",null,"All these features have sane off-the-shelf defaults but are completely customizable depending on your use case. They can also be combined with other stream features described in the ",(0,i.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/full-refresh-stream"},"full refresh streams")," and ",(0,i.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/incremental-stream"},"incremental streams")," sections."),(0,i.kt)("h2",{id:"overview-of-http-streams"},"Overview of HTTP Streams"),(0,i.kt)("p",null,"Just like any general HTTP request, the basic ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPStream")," requires a url to perform the request, and instructions on how to parse the resulting response."),(0,i.kt)("p",null,"The full request path is broken up into two parts, the base url and the path. This makes it easy for developers to create a Source-specific base ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPStream")," class, with the base url filled in, and individual streams for each available HTTP resource. The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-stripe/source_stripe/source.py"},"Stripe CDK implementation")," is a reification of this pattern."),(0,i.kt)("p",null,"The base url is set via the ",(0,i.kt)("inlineCode",{parentName:"p"},"url_base")," property, while the path is set by implementing the abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," function."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"parse_response")," function instructs the stream how to parse the API response. This returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterable"),", whose elements are each later transformed into an ",(0,i.kt)("inlineCode",{parentName:"p"},"AirbyteRecordMessage"),". API routes whose response contains a single record generally have a ",(0,i.kt)("inlineCode",{parentName:"p"},"parse_reponse")," function that return a list of just that one response. Routes that return a list, usually have a ",(0,i.kt)("inlineCode",{parentName:"p"},"parse_response")," function that return the received list with all elements. Pulling the data out from the response is sufficient, any deserialization is handled by the CDK."),(0,i.kt)("p",null,"Lastly, the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPStream")," must describe the schema of the records it outputs using JsonSchema. The simplest way to do this is by placing a ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," file per stream in the ",(0,i.kt)("inlineCode",{parentName:"p"},"schemas")," directory in the generated python module. The name of the ",(0,i.kt)("inlineCode",{parentName:"p"},".json")," file must match the lower snake case name of the corresponding Stream. Here are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/airbyte-integrations/connectors/source-stripe/source_stripe/schemas"},"examples")," from the Stripe API."),(0,i.kt)("p",null,"You can also dynamically set your schema. See the ",(0,i.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/full-refresh-stream#defining-the-streams-schema"},"schema docs")," for more information."),(0,i.kt)("p",null,"These four elements - the ",(0,i.kt)("inlineCode",{parentName:"p"},"url_base")," property, the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," function, the ",(0,i.kt)("inlineCode",{parentName:"p"},"parse_response")," function and the schema file - are the bare minimum required to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPStream"),", and can be seen in the same ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-stripe/source_stripe/source.py#L38"},"Stripe example"),"."),(0,i.kt)("p",null,"This basic implementation gives us a Full-Refresh Airbyte Stream. We say Full-Refresh since the stream does not have state and will always indiscriminately read all data from the underlying API resource."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The CDK supports Basic and OAuth2.0 authentication via the ",(0,i.kt)("inlineCode",{parentName:"p"},"TokenAuthenticator")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Oauth2Authenticator")," classes respectively. Both authentication strategies are identical in that they place the api token in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header. The ",(0,i.kt)("inlineCode",{parentName:"p"},"OAuth2Authenticator")," goes an additional step further and has mechanisms to, given a refresh token, refresh the current access token. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"OAuth2Authenticator")," currently only supports refresh tokens and not the full OAuth2.0 loop."),(0,i.kt)("p",null,"Using either authenticator is as simple as passing the created authenticator into the relevant ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPStream")," constructor. Here is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-stripe/source_stripe/source.py#L242"},"example")," from the Stripe API."),(0,i.kt)("h2",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"Most APIs, when facing a large call, tend to return the results in pages. The CDK accommodates paging via the ",(0,i.kt)("inlineCode",{parentName:"p"},"next_page_token"),' function. This function is meant to extract the next page "token" from the latest response. The contents of a "token" are completely up to the developer: it can be an ID, a page number, a partial URL etc.. The CDK will continue making requests as long as the ',(0,i.kt)("inlineCode",{parentName:"p"},"next_page_token")," function. The CDK will continue making requests as long as the ",(0,i.kt)("inlineCode",{parentName:"p"},"next_page_token")," continues returning non-",(0,i.kt)("inlineCode",{parentName:"p"},"None")," results. This can then be used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"request_params")," and other methods in ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpStream")," to page through API responses. Here is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-stripe/source_stripe/source.py#L41"},"example")," from the Stripe API."),(0,i.kt)("h2",{id:"rate-limiting"},"Rate Limiting"),(0,i.kt)("p",null,"The CDK, by default, will conduct exponential backoff on the HTTP code 429 and any 5XX exceptions, and fail after 5 tries."),(0,i.kt)("p",null,"Retries are governed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"should_retry")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"backoff_time")," methods. Override these methods to customise retry behavior. Here is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-slack/source_slack/source.py#L72"},"example")," from the Slack API."),(0,i.kt)("p",null,"Note that Airbyte will always attempt to make as many requests as possible and only slow down if there are errors. It is not currently possible to specify a rate limit Airbyte should adhere to when making requests."),(0,i.kt)("h3",{id:"stream-slicing"},"Stream Slicing"),(0,i.kt)("p",null,"When implementing ",(0,i.kt)("a",{parentName:"p",href:"/connector-development/cdk-python/incremental-stream#streamstream_slices"},"stream slicing")," in an ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPStream")," each Slice is equivalent to a HTTP request; the stream will make one request per element returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_slices")," function. The current slice being read is passed into every other method in ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpStream")," e.g: ",(0,i.kt)("inlineCode",{parentName:"p"},"request_params"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"request_headers"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", etc.. to be injected into a request. This allows you to dynamically determine the output of the ",(0,i.kt)("inlineCode",{parentName:"p"},"request_params"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"path"),", and other functions to read the input slice and return the appropriate value."),(0,i.kt)("h2",{id:"nested-streams--caching"},"Nested Streams & Caching"),(0,i.kt)("p",null,"It's possible to cache data from a stream onto a temporary file on disk. "),(0,i.kt)("p",null,"This is especially useful when dealing with streams that depend on the results of another stream e.g: ",(0,i.kt)("inlineCode",{parentName:"p"},"/employees/{id}/details"),". In this case, we can use caching to write the data of the parent stream to a file to use this data when the child stream synchronizes, rather than performing a full HTTP request again."),(0,i.kt)("p",null,"The caching mechanism works as follows: If the request is made for the first time, the returned value will be written to disk (all requests made by the ",(0,i.kt)("inlineCode",{parentName:"p"},"read_records")," method will be written to the cache file). When the same request is made again, instead of making another HTTP request, the result will instead be read from disk. It is checked whether the required request is in the cache file, and if so, the data from this file is returned. However, if the check for the request's existence in the cache file fails, a new request will be made, and its result will be added to the cache file."),(0,i.kt)("p",null,"Caching can be enabled by overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"use_cache")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpStream")," class to return ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,i.kt)("p",null,"The caching mechanism is related to parent streams. For child streams, there is an ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpSubStream")," class inheriting from ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpStream")," and overriding the ",(0,i.kt)("inlineCode",{parentName:"p"},"stream_slices")," method that returns a generator of all parent entries."),(0,i.kt)("p",null,"To use caching in the parent/child relationship, perform the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Turn on parent stream caching by overriding the ",(0,i.kt)("inlineCode",{parentName:"li"},"use_cache")," property."),(0,i.kt)("li",{parentName:"ol"},"Inherit child stream class from ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpSubStream")," class.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Employees(HttpStream):\n    ...\n\n    @property\n    def use_cache(self) -> bool:\n        return True\n\nclass EmployeeDetails(HttpSubStream):\n    ...\n")))}u.isMDXComponent=!0}}]);