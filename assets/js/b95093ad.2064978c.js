"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7617],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={},c="Code Style",p={unversionedId:"contributing-to-airbyte/code-style",id:"contributing-to-airbyte/code-style",title:"Code Style",description:"Configure Java Style for IntelliJ",source:"@site/../docs/contributing-to-airbyte/code-style.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/code-style",permalink:"/contributing-to-airbyte/code-style",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/code-style.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Monorepo Python Development",permalink:"/contributing-to-airbyte/monorepo-python-development"},next:{title:"Gradle Cheatsheet",permalink:"/contributing-to-airbyte/gradle-cheatsheet"}},s={},u=[{value:"Configure Java Style for IntelliJ",id:"configure-java-style-for-intellij",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-style"},"Code Style"),(0,a.kt)("h2",{id:"configure-java-style-for-intellij"},"Configure Java Style for IntelliJ"),(0,a.kt)("p",null,"First, download the style configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"curl https://raw.githubusercontent.com/google/styleguide/gh-pages/intellij-java-google-style.xml -o ~/Downloads/intellij-java-google-style.xml\n")),(0,a.kt)("p",null,"Install it in IntelliJ:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Preferences > Editor > Code Style")),(0,a.kt)("li",{parentName:"ol"},"Press the little cog:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Import Scheme > IntelliJ IDEA code style XML")),(0,a.kt)("li",{parentName:"ol"},"Select the file we just downloaded"))),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"GoogleStyle")," in the dropdown"),(0,a.kt)("li",{parentName:"ol"},"Change default ",(0,a.kt)("inlineCode",{parentName:"li"},"Hard wrap at")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"Wrapping and Braces")," tab to ",(0,a.kt)("strong",{parentName:"li"},"150"),"."),(0,a.kt)("li",{parentName:"ol"},"We prefer ",(0,a.kt)("inlineCode",{parentName:"li"},"import foo.bar.ClassName")," over ",(0,a.kt)("inlineCode",{parentName:"li"},"import foo.bar.*"),". Even in cases where we import multiple classes from the same package. This can be set by going to ",(0,a.kt)("inlineCode",{parentName:"li"},"Preferences > Code Style > Java > Imports")," and changing ",(0,a.kt)("inlineCode",{parentName:"li"},"Class count to use import with '*'")," to 9999 and ","`","Names count to use static import with '","*","' to 9999."),(0,a.kt)("li",{parentName:"ol"},"We add the ",(0,a.kt)("inlineCode",{parentName:"li"},"final")," keyword wherever possible. It's a drag to have to do it manually, however, so we set up the IDE to do it for us. You can either set this as the default for your IDE or you can set it just for the Airbyte project(s) that you are using.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Turn on the inspection. Go into IntelliJ Preferences...",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Editor > Inspections > Search (with the quotation marks included) \"Field may be 'final'\" > check the box"),(0,a.kt)("li",{parentName:"ol"},'Editor > Inspections > Search "local variable or parameter can be final" > check the box'),(0,a.kt)("li",{parentName:"ol"},"Apply the changes."))),(0,a.kt)("li",{parentName:"ol"},"Turn on the auto add final. Go into IntelliJ Preferences...",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Plugins - install Save Actions if not already installed."),(0,a.kt)("li",{parentName:"ol"},"Go to Save Actions in the preferences left nav (NOT Tools > Actions on Save -- that is a different tool)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Activate save actions on save > check the box"),(0,a.kt)("li",{parentName:"ol"},"Active save actions on shortcut > check the box"),(0,a.kt)("li",{parentName:"ol"},"Activate save actions on batch > check the box"),(0,a.kt)("li",{parentName:"ol"},"Add final modifier to field > check the box"),(0,a.kt)("li",{parentName:"ol"},"Add final modifier to local variable or parameter > check the box"),(0,a.kt)("li",{parentName:"ol"},"Apply the changes."))))))),(0,a.kt)("li",{parentName:"ol"},"You're done!")))}d.isMDXComponent=!0}}]);