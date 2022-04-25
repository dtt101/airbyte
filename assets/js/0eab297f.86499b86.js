"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[5186],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(o,".").concat(c)]||u[c]||d[c]||i;return a?r.createElement(k,l(l({ref:e},m),{},{components:a})):r.createElement(k,l({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60379:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],s={},o="GitHub",p={unversionedId:"integrations/sources/github",id:"integrations/sources/github",title:"GitHub",description:"Overview",source:"@site/../docs/integrations/sources/github.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/github",permalink:"/integrations/sources/github",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/github.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Freshservice",permalink:"/integrations/sources/freshservice"},next:{title:"GitLab",permalink:"/integrations/sources/gitlab"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Notes",id:"notes",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Permissions and scopes",id:"permissions-and-scopes",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:d};function c(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"github"},"GitHub"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The GitHub source supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"This connector outputs the following full refresh streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/issues#list-assignees"},"Assignees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#list-branches"},"Branches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#list-repository-collaborators"},"Collaborators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/reactions#list-reactions-for-a-commit-comment"},"Commit comment reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/reactions#list-reactions-for-an-issue-comment"},"Issue comment reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/issues#list-labels-for-a-repository"},"Issue labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/reactions#list-reactions-for-an-issue"},"Issue reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/orgs#get-an-organization"},"Organizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment"},"Pull request comment reactions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/pulls#list-commits-on-a-pull-request"},"Pull request commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#list-organization-repositories"},"Repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#list-repository-tags"},"Tags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/teams/members#list-team-members"},"TeamMembers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/teams#get-team-membership-for-a-user"},"TeamMemberships")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/teams#list-teams"},"Teams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/orgs#list-organization-members"},"Users")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/actions#workflows"},"Workflows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/actions#list-workflow-runs-for-a-repository"},"WorkflowRuns"))),(0,i.kt)("p",null,"This connector outputs the following incremental streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/issues#list-issue-comments-for-a-repository"},"Comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#list-commit-comments-for-a-repository"},"Commit comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#list-commits"},"Commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/deployments#list-deployments"},"Deployments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/activity#list-repository-events"},"Events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/issues#list-issue-events-for-a-repository"},"Issue events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/issues#list-milestones"},"Issue milestones")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/issues#list-repository-issues"},"Issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/projects#list-project-cards"},"Project cards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/projects#list-project-columns"},"Project columns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/projects#list-repository-projects"},"Projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/pulls#get-a-pull-request"},"Pull request stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/pulls#list-pull-requests"},"Pull requests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/repos#list-releases"},"Releases")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/pulls#list-review-comments-in-a-repository"},"Review comments")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/pulls#list-reviews-for-a-pull-request"},"Reviews")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/reference/activity#list-stargazers"},"Stargazers"))),(0,i.kt)("h3",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Only 4 streams ","(",(0,i.kt)("inlineCode",{parentName:"p"},"comments"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"commits"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"issues")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"review comments"),")"," from the above 17 incremental streams are pure incremental meaning that they:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"read only new records;"),(0,i.kt)("li",{parentName:"ul"},"output only new records."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Other 13 incremental streams are also incremental but with one difference, they:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"read all records;"),(0,i.kt)("li",{parentName:"ul"},"output only new records.\nPlease, consider this behaviour when using those 13 incremental streams because it may affect you API call limits."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We are passing few parameters ","(",(0,i.kt)("inlineCode",{parentName:"p"},"since"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sort")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"direction"),")"," to GitHub in order to filter records and sometimes for large streams specifying very distant ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date")," in the past may result in keep on getting error from GitHub instead of records ","(","respective ",(0,i.kt)("inlineCode",{parentName:"p"},"WARN")," log message will be outputted",")",". In this case Specifying more recent ",(0,i.kt)("inlineCode",{parentName:"p"},"start_date")," may help.\n",(0,i.kt)("strong",{parentName:"p"},'The "Start Date" configuration option does not apply to the streams below, because the Github API does not include dates which can be used for filtering:')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assignees")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"branches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collaborators")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"issue_labels")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"organizations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_commits")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_stats")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"teams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"users"))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"The Github connector should not run into Github API limitations under normal usage. Please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Github Account;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authentication")," - Select from 2 authentication methods:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authenticate via GitHub (OAuth)"),' - Only available in Airbyte Cloud. Authenticate by clicking the "Authenticate your account" button;'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Authenticate with Personal Access Token")," - Use this method for Airbyte Open-Source. Log into GitHub and then generate a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"personal access token"),". To load balance your API quota consumption across multiple API tokens, input multiple tokens separated with ",(0,i.kt)("inlineCode",{parentName:"li"},","),";"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Start Date")," - The date from which you'd like to replicate data for streams: ",(0,i.kt)("inlineCode",{parentName:"li"},"comments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"commit_comment_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"commit_comments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"commits"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"deployments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"events"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_comment_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_events"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_milestones"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issue_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"issues"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"project_cards"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"project_columns"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"projects"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_request_comment_reactions"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_requests"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pull_requeststats"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"releases"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"review_comments"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"reviews"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"stargazers"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GitHub Repositories")," - Space-delimited list of GitHub organizations/repositories, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"airbytehq/airbyte")," for single repository, ",(0,i.kt)("inlineCode",{parentName:"li"},"airbytehq/airbyte airbytehq/another-repo")," for multiple repositories. If you want to specify the organization to receive data from all its repositories, then you should specify it according to the following example: ",(0,i.kt)("inlineCode",{parentName:"li"},"airbytehq/*"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Branch (Optional)")," - Space-delimited list of GitHub repository branches to pull commits for, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"airbytehq/airbyte/master"),". If no branches are specified for a repository, the default branch will be pulled. (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"airbytehq/airbyte/master airbytehq/airbyte/my-branch"),");"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Page size for large streams (Optional)")," - The Github connector contains several streams with a large load. The page size of such streams depends on the size of your repository. Recommended to specify values between 10 and 30.")),(0,i.kt)("h3",{id:"permissions-and-scopes"},"Permissions and scopes"),(0,i.kt)("p",null,"If you use OAuth authentication method, the oauth2.0 application requests the next list of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes"},"scopes"),": ",(0,i.kt)("strong",{parentName:"p"},"repo"),", ",(0,i.kt)("strong",{parentName:"p"},"read:org"),", ",(0,i.kt)("strong",{parentName:"p"},"read:repo_hook"),", ",(0,i.kt)("strong",{parentName:"p"},"read:user"),", ",(0,i.kt)("strong",{parentName:"p"},"read:discussion"),", ",(0,i.kt)("strong",{parentName:"p"},"workflow"),". For ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"personal access token")," it need to manually select needed scopes."),(0,i.kt)("p",null,"Your token should have at least the ",(0,i.kt)("inlineCode",{parentName:"p"},"repo")," scope. Depending on which streams you want to sync, the user generating the token needs more permissions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For syncing Collaborators, the user which generates the personal access token must be a collaborator. To become a collaborator, they must be invited by an owner. If there are no collaborators, no records will be synced. Read more about access permissions ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/access-permissions-on-github"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"Syncing ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-organizations-and-teams/about-teams"},"Teams")," is only available to authenticated members of a team's ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/rest/reference/orgs"},"organization"),". ",(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/types-of-github-accounts"},"Personal user accounts")," and repositories belonging to them don't have access to Teams features. In this case no records will be synced."),(0,i.kt)("li",{parentName:"ul"},"To sync the Projects stream, the repository must have the Projects feature enabled.")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.28"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11893"},"11893")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add new streams ",(0,i.kt)("inlineCode",{parentName:"td"},"TeamMembers"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"TeamMemberships"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.27"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11678"},"11678")),(0,i.kt)("td",{parentName:"tr",align:"left"},'Fix "PAT Credentials" in spec')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.26"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11623"},"11623")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Re-factored incremental sync for ",(0,i.kt)("inlineCode",{parentName:"td"},"Reviews")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.25"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-31"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11567"},"11567")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improve code for better error handling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9251"},"9251")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add Streams Workflow and WorkflowRuns")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.23"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11212"},"11212")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improve documentation and spec for Beta")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.22"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10878"},"10878")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix error handling for unavailable streams with 404 status code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.21"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-04"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10749"},"10749")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add new stream ",(0,i.kt)("inlineCode",{parentName:"td"},"ProjectCards"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.20"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-16"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10385"},"10385")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add new stream ",(0,i.kt)("inlineCode",{parentName:"td"},"Deployments"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"ProjectColumns"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"PullRequestCommits"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.19"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10211"},"10211")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add human-readable error in case of incorrect organization or repo name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.18"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-02-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10193"},"10193")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add handling secondary rate limits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.17"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-02-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9999"},"9999")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove BAD_GATEWAY code from backoff_time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-02-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9868"},"9868")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add log message for streams that are restricted for OAuth. Update oauth scopes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.15"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-01-26"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9802"},"9802")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add missing fields for auto_merge in pull request stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-01-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9664"},"9664")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add custom pagination size for large streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-01-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9619"},"9619")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix logging for function ",(0,i.kt)("inlineCode",{parentName:"td"},"should_retry"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-01-17"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9492"},"9492")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove optional parameter ",(0,i.kt)("inlineCode",{parentName:"td"},"Accept")," for reaction`s streams to fix error with 502 HTTP status code in response")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-01-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7250"},"7250")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Use CDK caching and convert PR-related streams to incremental")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-29"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9179"},"9179")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Use default retry delays on server error responses")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8524"},"8524")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8518"},"8518")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add connection retry with Github")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-24"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8030"},"8030")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Support start date property for PullRequestStats and Reviews streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8170"},"8170")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix slow check connection for organizations with a lot of repos")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-11"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7856"},"7856")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resolve $ref fields in some stream schemas")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6833"},"6833")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix config backward compatability")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-05"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6761"},"6761")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add oauth worflow specification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-22"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6223"},"6223")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add option to pull commits from user-specified branches")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5898"},"5898")," and ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6227"},"6227")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Don't minimize any output fields & add better error handling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-15"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5949"},"5949")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add caching for all streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-09"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5860"},"5860")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add reaction streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5788"},"5788")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Handling empty repository, check method using RepositoryStats stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-01"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5757"},"5757")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add more streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-27"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5696"},"5696")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Handle negative backoff values")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5223"},"5456")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add MultipleTokenAuthenticator")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5456"},"5456")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix set up validation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-13"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5136"},"5136")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Support syncing multiple repositories/organizations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-08-03"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5156"},"5156")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Extended existing schemas with ",(0,i.kt)("inlineCode",{parentName:"td"},"users")," property for certain streams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-13"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4708"},"4708")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix bug with IssueEvents stream and add handling for rate limiting")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-07"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4590"},"4590")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix schema in the ",(0,i.kt)("inlineCode",{parentName:"td"},"pull_request")," stream")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4174"},"4174")),(0,i.kt)("td",{parentName:"tr",align:"left"},"New Source: GitHub")))))}c.isMDXComponent=!0}}]);