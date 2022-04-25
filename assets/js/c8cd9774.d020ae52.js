"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4624],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97e3:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={},c="Defining Stream Schemas",m={unversionedId:"connector-development/cdk-python/schemas",id:"connector-development/cdk-python/schemas",title:"Defining Stream Schemas",description:"Your connector must describe the schema of each stream it can output using JSONSchema.",source:"@site/../docs/connector-development/cdk-python/schemas.md",sourceDirName:"connector-development/cdk-python",slug:"/connector-development/cdk-python/schemas",permalink:"/connector-development/cdk-python/schemas",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/cdk-python/schemas.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Basic Concepts",permalink:"/connector-development/cdk-python/basic-concepts"},next:{title:"Full Refresh Streams",permalink:"/connector-development/cdk-python/full-refresh-stream"}},l={},u=[{value:"Static schemas",id:"static-schemas",level:2},{value:"Generating schemas from OpenAPI definitions",id:"generating-schemas-from-openapi-definitions",level:3},{value:"Dynamic schemas",id:"dynamic-schemas",level:2},{value:"Dynamically modifying static schemas",id:"dynamically-modifying-static-schemas",level:2},{value:"Type transformation",id:"type-transformation",level:2},{value:"Default type transformation",id:"default-type-transformation",level:3},{value:"Custom schema type transformation",id:"custom-schema-type-transformation",level:3},{value:"Performance consideration",id:"performance-consideration",level:3}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"defining-stream-schemas"},"Defining Stream Schemas"),(0,o.kt)("p",null,"Your connector must describe the schema of each stream it can output using ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSONSchema"),"."),(0,o.kt)("p",null,"The simplest way to do this is to describe the schema of your streams using one ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file per stream. You can also dynamically generate the schema of your stream in code, or you can combine both approaches: start with a ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file and dynamically add properties to it."),(0,o.kt)("p",null,"The schema of a stream is the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema"),"."),(0,o.kt)("h2",{id:"static-schemas"},"Static schemas"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema")," reads a ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas/")," directory whose name is equal to the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream.name")," property. In turn ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream.name")," by default returns the name of the class in snake case. Therefore, if you have a class ",(0,o.kt)("inlineCode",{parentName:"p"},"class EmployeeBenefits(HttpStream)")," the default behavior will look for a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas/employee_benefits.json"),". You can override any of these behaviors as you need."),(0,o.kt)("p",null,"Important note: any objects referenced via ",(0,o.kt)("inlineCode",{parentName:"p"},"$ref")," should be placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"shared/")," directory in their own ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," files."),(0,o.kt)("h3",{id:"generating-schemas-from-openapi-definitions"},"Generating schemas from OpenAPI definitions"),(0,o.kt)("p",null,"If you are implementing a connector to pull data from an API which publishes an ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI/Swagger spec"),", you can use a tool we've provided for generating JSON schemas from the OpenAPI definition file. Detailed information can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/tools/openapi2jsonschema/"},"here"),"."),(0,o.kt)("h2",{id:"dynamic-schemas"},"Dynamic schemas"),(0,o.kt)("p",null,"If you'd rather define your schema in code, override ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema")," in your stream class to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"dict")," describing the schema using ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSONSchema"),"."),(0,o.kt)("h2",{id:"dynamically-modifying-static-schemas"},"Dynamically modifying static schemas"),(0,o.kt)("p",null,"Override ",(0,o.kt)("inlineCode",{parentName:"p"},"Stream.get_json_schema")," to run the default behavior, edit the returned value, then return the edited value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"def get_json_schema(self):\n    schema = super().get_json_schema()\n    schema['dynamically_determined_property'] = \"property\"\n    return schema\n")),(0,o.kt)("h2",{id:"type-transformation"},"Type transformation"),(0,o.kt)("p",null,"It is important to ensure output data conforms to the declared json schema. This is because the destination receiving this data to load into tables may strictly enforce schema ","(","e.g. when data is stored in a SQL database, you can't put CHAT type into INTEGER column",")",". In the case of changes to API output ","(","which is almost guaranteed to happen over time",")"," or a minor mistake in jsonschema definition, data syncs could thus break because of mismatched datatype schemas."),(0,o.kt)("p",null,"To remain robust in operation, the CDK provides a transformation ability to perform automatic object mutation to align with desired schema before outputting to the destination. All streams inherited from airbyte",(0,o.kt)("em",{parentName:"p"},"cdk.sources.streams.core.Stream class have this transform configuration available. It is ","_","disabled")," by default and can be configured per stream within a source connector."),(0,o.kt)("h3",{id:"default-type-transformation"},"Default type transformation"),(0,o.kt)("p",null,"Here's how you can configure the TypeTransformer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from airbyte_cdk.sources.utils.transform import TransformConfig, Transformer\nfrom airbyte_cdk.sources.streams.core import Stream\n\nclass MyStream(Stream):\n    ...\n    transformer = Transformer(TransformConfig.DefaultSchemaNormalization)\n    ...\n")),(0,o.kt)("p",null,"In this case default transformation will be applied. For example if you have schema like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"type": "object", "properties": {"value": {"type": "string"}}}\n')),(0,o.kt)("p",null,"and source API returned object with non-string type, it would be casted to string automaticaly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"value": 12} -> {"value": "12"}\n')),(0,o.kt)("p",null,"Also it works on complex types:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"value": {"unexpected_object": "value"}} -> {"value": "{\'unexpected_object\': \'value\'}"}\n')),(0,o.kt)("p",null,"And objects inside array of referenced by $ref attribute."),(0,o.kt)("p",null,"If the value cannot be cast ","(",'e.g. string "asdf" cannot be casted to integer',")",", the field would retain its original value. Schema type transformation support any jsonschema types, nested objects/arrays and reference types. Types described as array of more than one type ","(",'except "null"',")",", types under oneOf/anyOf keyword wont be transformed."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:"),' This transformation is done by the source, not the stream itself. I.e. if you have overriden "read',"_",'records" method in your stream it wont affect object transformation. All transformation are done in-place by modifing output object before passing it to "get',"_","updated","_",'state" method, so "get',"_","updated","_",'state" would receive the transformed object.'),(0,o.kt)("h3",{id:"custom-schema-type-transformation"},"Custom schema type transformation"),(0,o.kt)("p",null,'Default schema type transformation performs simple type casting. Sometimes you want to perform more sophisticated transform like making "date-time" field compliant to rcf3339 standard. In this case you can use custom schema type transformation:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"class MyStream(Stream):\n    ...\n    transformer = Transformer(TransformConfig.CustomSchemaNormalization)\n    ...\n\n    @transformer.registerCustomTransform\n    def transform_function(orginal_value: Any, field_schema: Dict[str, Any]) -> Any:\n        # transformed_value = ...\n        return transformed_value\n")),(0,o.kt)("p",null,"Where original","_","value is initial field value and field","_","schema is part of jsonschema describing field type. For schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"type": "object", "properties": {"value": {"type": "string", "format": "date-time"}}}\n')),(0,o.kt)("p",null,"field","_","schema variable would be equal to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"type": "string", "format": "date-time"}\n')),(0,o.kt)("p",null,"In this case default transformation would be skipped and only custom transformation apply. If you want to run both default and custom transformation you can configure transdormer object by combining config flags:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"transformer = Transformer(TransformConfig.DefaultSchemaNormalization | TransformConfig.CustomSchemaNormalization)\n")),(0,o.kt)("p",null,"In this case custom transformation will be applied after default type transformation function. Note that order of flags doesn't matter, default transformation will always be run before custom."),(0,o.kt)("p",null,"In some specific cases, you might want to make your custom transform not static, e.g. Formatting a field according to the connector configuration.\nTo do so, we suggest you to declare a function to generate another, a.k.a a closure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class MyStream(Stream):\n    ...\n    transformer = TypeTransformer(TransformConfig.CustomSchemaNormalization)\n    ...\n    def __init__(self, config_based_date_format):\n        self.config_based_date_format = config_based_date_format\n        transform_function = self.get_custom_transform()\n        self.transformer.registerCustomTransform(transform_function)\n\n    def get_custom_transform(self):\n        def custom_transform_function(original_value, field_schema):\n            if original_value and "format" in field_schema and field_schema["format"] == "date":\n                transformed_value = pendulum.from_format(original_value, self.config_based_date_format).to_date_string()\n                return transformed_value\n            return original_value\n        return custom_transform_function\n')),(0,o.kt)("h3",{id:"performance-consideration"},"Performance consideration"),(0,o.kt)("p",null,"Transforming each object on the fly would add some time for each object processing. This time is depends on object/schema complexity and hardware configuration."),(0,o.kt)("p",null,"There are some performance benchmarks we've done with ads","_","insights facebook schema ","(","it is complex schema with objects nested inside arrays ob object and a lot of references",")"," and example object. Here is the average transform time per single object, seconds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"regular transform:\n0.0008423403530008121\n\ntransform without type casting (but value still being write to dict/array):\n0.000776215762666349\n\ntransform without actual value setting  (but iterating through object properties):\n0.0006788729513330812\n\njust traverse/validate through json schema and object fields:\n0.0006139181846665452\n")),(0,o.kt)("p",null,"On my PC ","(","AMD Ryzen 7 5800X",")"," it took 0.8 milliseconds per object. As you can see most time ","(","~ 75%",")"," is taken by jsonschema traverse/validation routine and very little ","(","less than 10 %",")"," by actual converting. Processing time can be reduced by skipping jsonschema type checking but it would be no warnings about possible object jsonschema inconsistency."))}d.isMDXComponent=!0}}]);