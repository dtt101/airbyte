"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[6174],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=o,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67154:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={description:"Common issues and their workarounds when trying to deploy Airbyte"},l="On Deploying",c={unversionedId:"troubleshooting/on-deploying",id:"troubleshooting/on-deploying",title:"On Deploying",description:"Common issues and their workarounds when trying to deploy Airbyte",source:"@site/../docs/troubleshooting/on-deploying.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/on-deploying",permalink:"/troubleshooting/on-deploying",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/troubleshooting/on-deploying.md",tags:[],version:"current",frontMatter:{description:"Common issues and their workarounds when trying to deploy Airbyte"},sidebar:"mySidebar",previous:{title:"Troubleshooting & FAQ",permalink:"/troubleshooting/"},next:{title:"On Setting up a New Connection",permalink:"/troubleshooting/new-connection"}},u={},p=[{value:"Stuck in onboarding, can\u2019t skip or do anything",id:"stuck-in-onboarding-cant-skip-or-do-anything",level:2},{value:"Git says file names are too long.",id:"git-says-file-names-are-too-long",level:2},{value:"I have run <code>docker-compose up</code> and can not access the interface",id:"i-have-run-docker-compose-up-and-can-not-access-the-interface",level:2},{value:"<code>docker.errors.DockerException</code>: Error while fetching server API version",id:"dockererrorsdockerexception-error-while-fetching-server-api-version",level:2},{value:"Getting a weird error related to setting up the Airbyte server when running Docker Compose -- wondering if this is because I played around with Airbyte in a past version?",id:"getting-a-weird-error-related-to-setting-up-the-airbyte-server-when-running-docker-compose----wondering-if-this-is-because-i-played-around-with-airbyte-in-a-past-version",level:2}],d={toc:p};function h(e){var n=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"on-deploying"},"On Deploying"),(0,i.kt)("h2",{id:"stuck-in-onboarding-cant-skip-or-do-anything"},"Stuck in onboarding, can\u2019t skip or do anything"),(0,i.kt)("p",null,"To fully reset Airbyte, you also need to delete the docker volumes associated with Airbyte. This is where data is stored. Assuming that you are running Airbyte by running ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up"),", then what you need to do is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Turn off Airbyte completely: ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose down -v")),(0,i.kt)("li",{parentName:"ul"},"Turn Airbyte back on: ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up"))),(0,i.kt)("p",null,"that should handle you getting reset to the beginning. I would be curious if we can see the logs associated with the failure you are seeing. I would say if after you reset you run into it again we can debug that."),(0,i.kt)("h2",{id:"git-says-file-names-are-too-long"},"Git says file names are too long."),(0,i.kt)("p",null,"If you are cloning the repo, you might run into a problem where git indicates that certain filenames are too long and it therefore can't create the local file. So if you received this error after cloning the repo, run the following commands in ",(0,i.kt)("em",{parentName:"p"},"git bash"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte\ngit config core.longpaths true\ngit reset --hard HEAD\n")),(0,i.kt)("p",null,"However it's worth pointing out that the ",(0,i.kt)("inlineCode",{parentName:"p"},"core.longpaths")," option is defaulted to false for a reason, so use with caution. This git configuration is only changed within the cloned Airbyte repo, so you won't need to worry about changing this setting for other repositories. Find more details about this issue in ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows"},"this stack overflow question"),"."),(0,i.kt)("p",null,"Instead of cloning the repo, you can alternatively download the latest Airbyte release ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/releases"},"here"),". Unzip the downloaded file, access the unzipped file using PowerShell terminal, and run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up"),". After this, you should see the Airbyte containers in the Docker application as in the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(88504).Z,width:"1265",height:"617"})),(0,i.kt)("h2",{id:"i-have-run-docker-compose-up-and-can-not-access-the-interface"},"I have run ",(0,i.kt)("inlineCode",{parentName:"h2"},"docker-compose up")," and can not access the interface"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you see a blank screen and not a loading icon:")),(0,i.kt)("p",null,"Check your web browser version; Some old versions of web browsers doesn't support our current Front-end stack."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you see a loading icon or the message ",(0,i.kt)("inlineCode",{parentName:"li"},"Cannot reach the server")," persist:")),(0,i.kt)("p",null,"Check if all Airbyte containers are running, executing: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker ps")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'CONTAINER ID   IMAGE                            COMMAND                  CREATED        STATUS        PORTS                              NAMES\nf45f3cfe1e16   airbyte/scheduler:1.11.1-alpha   "/bin/bash -c \'./wai\u2026"   2 hours ago    Up 2 hours                                      airbyte-scheduler\nf02fc709b130   airbyte/server:1.11.1-alpha      "/bin/bash -c \'./wai\u2026"   2 hours ago    Up 2 hours   8000/tcp, [...] :::8001->8001/tcp  airbyte-server\n153b2b322870   airbyte/webapp:1.11.1-alpha      "/docker-entrypoint.\u2026"   2 hours ago    Up 2 hours   :::8000->80/tcp                    airbyte-webapp\nb88d94652268   airbyte/db:1.11.1-alpha          "docker-entrypoint.s\u2026"   2 hours ago    Up 2 hours   5432/tcp                           airbyte-db\n0573681a10e0   temporalio/auto-setup:1.7.0      "/entrypoint.sh /bin\u2026"   2 hours ago    Up 2 hours   6933-6935/tcp, [...]               airbyte-temporal\n')),(0,i.kt)("p",null,"You must see 5 containers running. If you are not seeing execute the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose down -v"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up")),(0,i.kt)("p",{parentName:"li"},"Keep in mind the commands above will delete ALL containers, volumes and data created by Airbyte."),(0,i.kt)("p",{parentName:"li"},"We do not recommend this is you already deploy and have connection created."))),(0,i.kt)("p",null,"First, let's check the server logs by running ",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs airbyte-server | grep ERROR"),".",(0,i.kt)("br",{parentName:"p"}),"\n","If this command returns any output, please run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs airbyte-server > airbyte-server.log"),".",(0,i.kt)("br",{parentName:"p"}),"\n","This command will create a file in the current directory. We advise you to send a message on our ","#","issues on Slack channel"),(0,i.kt)("p",null,"If you don't have any server errors let's check the scheduler, ",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs airbyte-scheduler | grep ERROR"),".",(0,i.kt)("br",{parentName:"p"}),"\n","If this command returns any output, please run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker logs airbyte-scheduler > airbyte-scheduler.log"),".",(0,i.kt)("br",{parentName:"p"}),"\n","This command will create a file in the current directory. We advise you to send a message on our ","#","issues on Slack channel"),(0,i.kt)("p",null,"If there is no error printed in both cases, we recommend running: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker restart airbyte-server airbyte-scheduler"),(0,i.kt)("br",{parentName:"p"}),"\n","Wait a few moments and try to access the interface again."),(0,i.kt)("h2",{id:"dockererrorsdockerexception-error-while-fetching-server-api-version"},(0,i.kt)("inlineCode",{parentName:"h2"},"docker.errors.DockerException"),": Error while fetching server API version"),(0,i.kt)("p",null,"If you see the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"docker.errors.DockerException: Error while fetching server API\nversion: ('Connection aborted.', FileNotFoundError(2, 'No such file or\ndirectory'))\n")),(0,i.kt)("p",null,"It usually means that Docker isn't running on your machine ","(","and a running Docker daemon is required to run Airbyte",")",". An easy way to verify this is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker ps"),", which will show ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?")," if the Docker daemon is not running on your machine."),(0,i.kt)("p",null,"This happens ","(","sometimes",")"," on Windows system when you first install ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),". You need to restart your machine."),(0,i.kt)("h2",{id:"getting-a-weird-error-related-to-setting-up-the-airbyte-server-when-running-docker-compose----wondering-if-this-is-because-i-played-around-with-airbyte-in-a-past-version"},"Getting a weird error related to setting up the Airbyte server when running Docker Compose -- wondering if this is because I played around with Airbyte in a past version?"),(0,i.kt)("p",null,"If you are okay with losing your previous Airbyte configurations, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose down -v")," and that should fix things then ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up"),"."))}h.isMDXComponent=!0},88504:function(e,n,t){n.Z=t.p+"assets/images/airbyte_deploy_windows_docker-8bbda82e84f01f8999b1553bec80d9fc.png"}}]);