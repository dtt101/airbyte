"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4236],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return d}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(o),d=n,y=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return o?r.createElement(y,i(i({ref:t},s),{},{components:o})):r.createElement(y,i({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},46678:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],c={},l="Using custom connectors",u={unversionedId:"operator-guides/using-custom-connectors",id:"operator-guides/using-custom-connectors",title:"Using custom connectors",description:"If our connector catalog does not fulfill your needs, you can build your own Airbyte connectors.",source:"@site/../docs/operator-guides/using-custom-connectors.md",sourceDirName:"operator-guides",slug:"/operator-guides/using-custom-connectors",permalink:"/operator-guides/using-custom-connectors",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/using-custom-connectors.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Sentry Integration",permalink:"/operator-guides/sentry-integration"},next:{title:"Scaling Airbyte",permalink:"/operator-guides/scaling-airbyte"}},s={},p=[{value:"1. Create a private Docker registry",id:"1-create-a-private-docker-registry",level:2},{value:"2. Authenticate to your private Docker registry",id:"2-authenticate-to-your-private-docker-registry",level:2},{value:"For Docker-compose Airbyte deployments",id:"for-docker-compose-airbyte-deployments",level:3},{value:"On GCP - Artifact Registry:",id:"on-gcp---artifact-registry",level:4},{value:"On AWS - Amazon ECR:",id:"on-aws---amazon-ecr",level:4},{value:"On Azure - Container Registry:",id:"on-azure---container-registry",level:4},{value:"On DockerHub - Repositories:",id:"on-dockerhub---repositories",level:4},{value:"Self hosted - Open source Docker Registry:",id:"self-hosted---open-source-docker-registry",level:4},{value:"For Kubernetes Airbyte deployments",id:"for-kubernetes-airbyte-deployments",level:3},{value:"3. Push your connector image to your private Docker registry",id:"3-push-your-connector-image-to-your-private-docker-registry",level:2},{value:"4. Use your custom connector in Airbyte",id:"4-use-your-custom-connector-in-airbyte",level:2},{value:"1. Click on Settings",id:"1-click-on-settings",level:3},{value:"2. Click on Sources (or Destinations)",id:"2-click-on-sources-or-destinations",level:3},{value:"3. Click on + New connector",id:"3-click-on--new-connector",level:3},{value:"4. Fill the name of your custom connector",id:"4-fill-the-name-of-your-custom-connector",level:3},{value:"5. Fill the Docker image name of your custom connector",id:"5-fill-the-docker-image-name-of-your-custom-connector",level:3},{value:"6. Fill the Docker Tag of your custom connector image",id:"6-fill-the-docker-tag-of-your-custom-connector-image",level:3},{value:"7. Fill the URL to your connector documentation",id:"7-fill-the-url-to-your-connector-documentation",level:3},{value:"8. Click on Add",id:"8-click-on-add",level:3}],m={toc:p};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-custom-connectors"},"Using custom connectors"),(0,a.kt)("p",null,"If our connector catalog does not fulfill your needs, you can build your own Airbyte connectors.\nThere are two approaches you can take while jumping on connector development project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You want to build a connector for an ",(0,a.kt)("strong",{parentName:"li"},"external")," source or destination (public API, off-the-shelf DBMS, data warehouses, etc.). In this scenario, your connector development will probably benefit the community. The right way is to open a PR on our repo to add your connector to our catalog. You will then benefit from an Airbyte team review and potential future improvements and maintenance from the community."),(0,a.kt)("li",{parentName:"ol"},"You want to build a connector for an ",(0,a.kt)("strong",{parentName:"li"},"internal")," source or destination (private API) specific to your organization. This connector has no good reason to be exposed to the community.")),(0,a.kt)("p",null,"This guide focuses on the second approach and assumes the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You followed our other guides and tutorials about connector developments."),(0,a.kt)("li",{parentName:"ul"},"You finished your connector development, running it locally on an Airbyte development instance."),(0,a.kt)("li",{parentName:"ul"},"You want to deploy this connector to a production Airbyte instance running on a VM with docker-compose or on a Kubernetes cluster.")),(0,a.kt)("p",null,"If you prefer video tutorials, ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=4YF20PODv30&ab_channel=Airbyte"},"we recorded a demo about uploading connectors images to a GCP Artifact Registry"),"."),(0,a.kt)("h2",{id:"1-create-a-private-docker-registry"},"1. Create a private Docker registry"),(0,a.kt)("p",null,"Airbyte needs to pull its Docker images from a remote Docker registry to consume a connector.\nYou should host your custom connectors image on a private Docker registry.\nHere are some resources to create a private Docker registry, in case your organization does not already have one:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Cloud provider"),(0,a.kt)("th",{parentName:"tr",align:null},"Service name"),(0,a.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google Cloud"),(0,a.kt)("td",{parentName:"tr",align:null},"Artifact Registry"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://cloud.google.com/artifact-registry/docs/docker/quickstart"},"Quickstart"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS"),(0,a.kt)("td",{parentName:"tr",align:null},"Amazon ECR"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-console.html"},"Getting started with Amazon ECR"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Azure"),(0,a.kt)("td",{parentName:"tr",align:null},"Container Registry"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal#:~:text=Azure%20Container%20Registry%20is%20a,container%20images%20and%20related%20artifacts.&text=Then%2C%20use%20Docker%20commands%20to,the%20image%20from%20your%20registry."},"Quickstart"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DockerHub"),(0,a.kt)("td",{parentName:"tr",align:null},"Repositories"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.docker.com/docker-hub/"},"DockerHub Quickstart"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Self hosted"),(0,a.kt)("td",{parentName:"tr",align:null},"Open-source Docker Registry"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.docker.com/registry/deploying/"},"Deploy a registry server"))))),(0,a.kt)("h2",{id:"2-authenticate-to-your-private-docker-registry"},"2. Authenticate to your private Docker registry"),(0,a.kt)("p",null,"To push and pull images to your private Docker registry, you need to authenticate to it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your local or CI environment (where you build your connector image) must be able to ",(0,a.kt)("strong",{parentName:"li"},"push")," images to your registry."),(0,a.kt)("li",{parentName:"ul"},"Your Airbyte instance must be able to ",(0,a.kt)("strong",{parentName:"li"},"pull")," images from your registry.")),(0,a.kt)("h3",{id:"for-docker-compose-airbyte-deployments"},"For Docker-compose Airbyte deployments"),(0,a.kt)("h4",{id:"on-gcp---artifact-registry"},"On GCP - Artifact Registry:"),(0,a.kt)("p",null,"GCP offers the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," credential helper to log in to your Artifact registry.\nPlease run the command detailed ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/artifact-registry/docs/docker/quickstart#auth"},"here")," to authenticate your local environment/CI environment to your Artifact registry.\nRun the same authentication flow on your Compute Engine instance.\nIf you do not want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud"),", GCP offers other authentication methods detailed ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/artifact-registry/docs/docker/authentication"},"here"),"."),(0,a.kt)("h4",{id:"on-aws---amazon-ecr"},"On AWS - Amazon ECR:"),(0,a.kt)("p",null,"You can authenticate to an ECR private registry using the ",(0,a.kt)("inlineCode",{parentName:"p"},"aws")," CLI:\n",(0,a.kt)("inlineCode",{parentName:"p"},"aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com"),"\nYou can find details about this command and other available authentication methods ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html"},"here"),".\nYou will have to authenticate your local/CI environment (where you build your image) ",(0,a.kt)("strong",{parentName:"p"},"and")," your EC2 instance where your Airbyte instance is running."),(0,a.kt)("h4",{id:"on-azure---container-registry"},"On Azure - Container Registry:"),(0,a.kt)("p",null,"You can authenticate to an Azure Container Registry using the ",(0,a.kt)("inlineCode",{parentName:"p"},"az")," CLI:\n",(0,a.kt)("inlineCode",{parentName:"p"},"az acr login --name <registry-name>"),"\nYou can find details about this command ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-portal#:~:text=Azure%20Container%20Registry%20is%20a,container%20images%20and%20related%20artifacts.&text=Then,%20use%20Docker%20commands%20to,the%20image%20from%20your%20registry."},"here"),"\nYou will have to authenticate both your local/CI environment/ environment (where your image is built) ",(0,a.kt)("strong",{parentName:"p"},"and")," your Azure Virtual Machine instance where the Airbyte instance is running."),(0,a.kt)("h4",{id:"on-dockerhub---repositories"},"On DockerHub - Repositories:"),(0,a.kt)("p",null,"You can use Docker Desktop to authenticate your local machine to your DockerHub registry by signing in on the desktop application using your DockerID.\nYou need to use a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/service-accounts/"},"service account")," to authenticate your Airbyte instance to your DockerHub registry."),(0,a.kt)("h4",{id:"self-hosted---open-source-docker-registry"},"Self hosted - Open source Docker Registry:"),(0,a.kt)("p",null,"It would be best to set up auth on your Docker registry to make it private. Available authentication options for an open-source Docker registry are listed ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/configuration/#auth"},"here"),".\nTo authenticate your local/CI environment and Airbyte instance you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/login/"},(0,a.kt)("inlineCode",{parentName:"a"},"docker login"))," command."),(0,a.kt)("h3",{id:"for-kubernetes-airbyte-deployments"},"For Kubernetes Airbyte deployments"),(0,a.kt)("p",null,"You can use the previous section's authentication flow to authenticate your local/CI to your private Docker registry.\nIf you provisioned your Kubernetes cluster using AWS EKS, GCP GKE, or Azure AKS: it is very likely that you already allowed your cluster to pull images from the respective container registry service of your cloud provider.\nIf you want Airbyte to pull images from another private Docker registry, you will have to do the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Secret")," in Kubernetes that will host your authentication credentials. ",(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"This Kubernetes documentation")," explains how to proceed."),(0,a.kt)("li",{parentName:"ol"},"Set the ",(0,a.kt)("inlineCode",{parentName:"li"},"JOB_KUBE_MAIN_CONTAINER_IMAGE_PULL_SECRET")," environment variable on the ",(0,a.kt)("inlineCode",{parentName:"li"},"airbyte-worker")," pod. The value must be ",(0,a.kt)("strong",{parentName:"li"},"the name of your previously created Kubernetes Secret"),".")),(0,a.kt)("h2",{id:"3-push-your-connector-image-to-your-private-docker-registry"},"3. Push your connector image to your private Docker registry"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Build and tag your connector image locally, e.g.: ",(0,a.kt)("inlineCode",{parentName:"li"},"docker build . -t my-custom-connectors/source-custom:0.1.0")),(0,a.kt)("li",{parentName:"ol"},"Create your image tag with ",(0,a.kt)("inlineCode",{parentName:"li"},"docker tag")," command. The structure of the remote tag depends on your cloud provider's container registry service. Please check their online documentation linked at the top."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"docker push <image-name>:<tag>")," to push the image to your private Docker registry.")),(0,a.kt)("p",null,"You should run all the above commands from your local/CI environment, where your connector source code is available."),(0,a.kt)("h2",{id:"4-use-your-custom-connector-in-airbyte"},"4. Use your custom connector in Airbyte"),(0,a.kt)("p",null,"At this step, you should have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A private Docker registry hosting your custom connector image."),(0,a.kt)("li",{parentName:"ul"},"Authenticated your Airbyte instance to your private Docker registry.")),(0,a.kt)("p",null,"You can pull your connector image from your private registry to validate the previous steps. On your Airbyte instance: run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker pull <image-name>:<tag>")," if you are using our ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose")," deployment, or start a pod that is using the connector image."),(0,a.kt)("h3",{id:"1-click-on-settings"},"1. Click on Settings"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_bf5c3e27-19a3-4cc0-bc40-90c80afdbcba?crop=focalpoint&fit=crop&fp-x=0.0211&fp-y=0.9320&fp-z=2.9521&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 1 screenshot"})),(0,a.kt)("h3",{id:"2-click-on-sources-or-destinations"},"2. Click on Sources (or Destinations)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_d956e987-424d-4f76-ad39-f6d6172f6acc?crop=focalpoint&fit=crop&fp-x=0.0855&fp-y=0.1083&fp-z=2.7473&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 2 screenshot"})),(0,a.kt)("h3",{id:"3-click-on--new-connector"},"3. Click on + New connector"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_52248202-6351-496d-bc8f-892c43cf7cf8?crop=focalpoint&fit=crop&fp-x=0.8912&fp-y=0.0833&fp-z=3.0763&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 3 screenshot"})),(0,a.kt)("h3",{id:"4-fill-the-name-of-your-custom-connector"},"4. Fill the name of your custom connector"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_809a22c8-ff38-4b10-8292-bce7364f111c?crop=focalpoint&fit=crop&fp-x=0.4989&fp-y=0.4145&fp-z=1.9188&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 4 screenshot"})),(0,a.kt)("h3",{id:"5-fill-the-docker-image-name-of-your-custom-connector"},"5. Fill the Docker image name of your custom connector"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_ed91d789-9fc7-4758-a6f0-50bf2f04f248?crop=focalpoint&fit=crop&fp-x=0.4989&fp-y=0.4924&fp-z=1.9188&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 5 screenshot"})),(0,a.kt)("h3",{id:"6-fill-the-docker-tag-of-your-custom-connector-image"},"6. Fill the Docker Tag of your custom connector image"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_5b6bff70-5703-4dac-b359-95b9ab8f8ce1?crop=focalpoint&fit=crop&fp-x=0.4989&fp-y=0.5703&fp-z=1.9188&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 6 screenshot"})),(0,a.kt)("h3",{id:"7-fill-the-url-to-your-connector-documentation"},"7. Fill the URL to your connector documentation"),(0,a.kt)("p",null,"This is a required field at the moment, but you can fill with any value if you do not have online documentation for your connector.\nThis documentation will be linked in the connector setting page.\n",(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_007e6465-619f-4553-8d65-9af2f5ad76bc?crop=focalpoint&fit=crop&fp-x=0.4989&fp-y=0.6482&fp-z=1.9188&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 7 screenshot"})),(0,a.kt)("h3",{id:"8-click-on-add"},"8. Click on Add"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://images.tango.us/public/screenshot_c097183f-1687-469f-852d-f66f743e8c10?crop=focalpoint&fit=crop&fp-x=0.5968&fp-y=0.7010&fp-z=3.0725&w=1200&mark-w=0.2&mark-pad=0&mark64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmsucG5n&ar=4594%3A2234",alt:"Step 8 screenshot"})))}d.isMDXComponent=!0}}]);