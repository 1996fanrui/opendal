"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[6578],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(7462),n=(a(7294),a(3905));const r={title:"New Committer Landing Guide",sidebar_position:3},o=void 0,l={unversionedId:"contributing/committer",id:"contributing/committer",title:"New Committer Landing Guide",description:"This document primarily serves as a guide for new committers to OpenDAL.",source:"@site/docs/contributing/committer.md",sourceDirName:"contributing",slug:"/contributing/committer",permalink:"/docs/contributing/committer",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/contributing/committer.md",tags:[],version:"current",lastUpdatedBy:"Mingzhuo Yin",lastUpdatedAt:1692956865,formattedLastUpdatedAt:"Aug 25, 2023",sidebarPosition:3,frontMatter:{title:"New Committer Landing Guide",sidebar_position:3},sidebar:"docs",previous:{title:"Verify",permalink:"/docs/contributing/verify"},next:{title:"Reference",permalink:"/docs/category/reference"}},s={},c=[{value:"Submit CLA",id:"submit-cla",level:2},{value:"Setup ASF Account",id:"setup-asf-account",level:2},{value:"Setup LDAP Password",id:"setup-ldap-password",level:3},{value:"Link ASF Account to GitHub",id:"link-asf-account-to-github",level:3},{value:"Email Settings",id:"email-settings",level:2},{value:"Receive Email",id:"receive-email",level:3},{value:"Send Email",id:"send-email",level:3},{value:"Subscribe Mailing List",id:"subscribe-mailing-list",level:3},{value:"Setup 1password",id:"setup-1password",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This document primarily serves as a guide for new committers to OpenDAL."),(0,n.kt)("p",null,'Upon receiving an invitation email from OpenDAL\'s PPMC, a new committer should consider whether to accept. If they decide in favor, they should select "Reply All" and express their decision.'),(0,n.kt)("h2",{id:"submit-cla"},"Submit CLA"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the ICLA from ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/contributor-agreements.html#clas"},"https://www.apache.org/licenses/contributor-agreements.html#clas"),". If a corporation assigns employees to work on an Apache project, please download the CCLA."),(0,n.kt)("li",{parentName:"ol"},"Complete the ICLA based on your particulars. Please note:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The address field should be filled out accurately and in detail."),(0,n.kt)("li",{parentName:"ul"},"You need to choose a unique ApacheID that hasn't been taken. Check ",(0,n.kt)("a",{parentName:"li",href:"https://people.apache.org/committer-index.html"},"https://people.apache.org/committer-index.html")," to see which IDs are still available."))),(0,n.kt)("li",{parentName:"ol"},"Sign document by hand or by electronic signature",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Manually sign a printed copy, then scan it to produce a pdf."),(0,n.kt)("li",{parentName:"ul"},"Digitally draw a signature on the document: ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/cla-faq.html#printer"},"Detail Instruction"),"."),(0,n.kt)("li",{parentName:"ul"},"Sign the document using PGP: ",(0,n.kt)("a",{parentName:"li",href:"https://www.apache.org/licenses/contributor-agreements.html#submitting"},"Detail Instruction"),"."))),(0,n.kt)("li",{parentName:"ol"},"Send your icla.pdf (and icla.pdf.asc if PGP-signed) to ",(0,n.kt)("a",{parentName:"li",href:"mailto:secretary@apache.org"},"secretary@apache.org"),".")),(0,n.kt)("p",null,"After waiting for some time, you will receive an email notifying you that your CLA has been successfully recorded."),(0,n.kt)("h2",{id:"setup-asf-account"},"Setup ASF Account"),(0,n.kt)("p",null,'When receive an email with the subject "Welcome to the Apache Software Foundation" from ',(0,n.kt)("a",{parentName:"p",href:"mailto:root@apache.org"},"root@apache.org"),", we can begin setting up ASF account."),(0,n.kt)("h3",{id:"setup-ldap-password"},"Setup LDAP Password"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("a",{parentName:"li",href:"https://id.apache.org/reset/enter"},"https://id.apache.org/reset/enter")," and enter your ApacheID."),(0,n.kt)("li",{parentName:"ol"},"Check your email and click the provided link to reset your password.")),(0,n.kt)("h3",{id:"link-asf-account-to-github"},"Link ASF Account to GitHub"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("a",{parentName:"li",href:"https://gitbox.apache.org/boxer/"},"https://gitbox.apache.org/boxer/")," and enter your ApacheID and password."),(0,n.kt)("li",{parentName:"ol"},'Click "Authenticate with GitHub" and follow the given instructions to link your ASF account to GitHub.'),(0,n.kt)("li",{parentName:"ol"},'Check your email titled "',"[GitHub]",' @asfgit has invited you to join the @apache organization" and accept the invitation.'),(0,n.kt)("li",{parentName:"ol"},"Wait momentarily, and the website will refresh on its own."),(0,n.kt)("li",{parentName:"ol"},"(If you not enable 2FA on GitHub) Please follow the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication"},"instruction"),".")),(0,n.kt)("p",null,"Your ApacheID and GitHub ID will now both appear on ",(0,n.kt)("a",{parentName:"p",href:"https://gitbox.apache.org/boxer/"},"https://gitbox.apache.org/boxer/"),". Congrats on successfully linking your ASF account to GitHub!"),(0,n.kt)("h2",{id:"email-settings"},"Email Settings"),(0,n.kt)("p",null,"Note: Apache does not provide a mailbox directly."),(0,n.kt)("h3",{id:"receive-email"},"Receive Email"),(0,n.kt)("p",null,"You can change your forwarding email address at ",(0,n.kt)("a",{parentName:"p",href:"https://id.apache.org/"},"Apache Account Utility Platform")),(0,n.kt)("h3",{id:"send-email"},"Send Email"),(0,n.kt)("p",null,"To send emails using your apache.org address, configure your email client to leverage the ",(0,n.kt)("inlineCode",{parentName:"p"},"mail-relay")," service. For specifics, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://infra.apache.org/committer-email.html"},"this guide"),"."),(0,n.kt)("p",null,"Here's an illustration for Gmail users:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Open Gmail settings and select "See all settings".'),(0,n.kt)("li",{parentName:"ol"},'Navigate to "Accounts and Import", then locate "Send mail as".'),(0,n.kt)("li",{parentName:"ol"},'Click "Add another email address" and enter your name and apache.org email address.'),(0,n.kt)("li",{parentName:"ol"},"Input the SMTP server information:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"SMTP Server: mail-relay.apache.org"),(0,n.kt)("li",{parentName:"ul"},"Port: 587"),(0,n.kt)("li",{parentName:"ul"},"Username: your apacheID"),(0,n.kt)("li",{parentName:"ul"},"Password: your apacheID password"),(0,n.kt)("li",{parentName:"ul"},"Secured connection using TLS"))),(0,n.kt)("li",{parentName:"ol"},'Click "Add account" and you will receive an email from Gmail that need to confirm.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gmail Settings",src:a(9724).Z,width:"1540",height:"1184"})),(0,n.kt)("h3",{id:"subscribe-mailing-list"},"Subscribe Mailing List"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Send email to ",(0,n.kt)("a",{parentName:"li",href:"mailto:dev-subscribe@opendal.apache.org"},"dev-subscribe@opendal.apache.org")),(0,n.kt)("li",{parentName:"ol"},'You will receive an email with the subject "confirm subscribe to ',(0,n.kt)("a",{parentName:"li",href:"mailto:dev@opendal.apache.org"},"dev@opendal.apache.org"),'"'),(0,n.kt)("li",{parentName:"ol"},'Reply to the email with "Confirm" in the body')),(0,n.kt)("p",null,'If you receive an email with the subject "WELCOME to ',(0,n.kt)("a",{parentName:"p",href:"mailto:dev@opendal.apache.org"},"dev@opendal.apache.org"),'", you have successfully subscribed to the mailing list.'),(0,n.kt)("h2",{id:"setup-1password"},"Setup 1password"),(0,n.kt)("p",null,"OpenDAL offers a 1password open source team license for conducting local integration tests (Thanks to 1Password!). Once you have been added to OpenDAL's committer list, one of the PPMC members will invite you to join the team."),(0,n.kt)("p",null,"Please download your preferred clients to begin using it. Here are some important notes regarding the use of 1Password: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can create your own vault that is accessible only by yourself. Neither the 1password team nor OpenDAL PPMC members can access it unless you choose to share it."),(0,n.kt)("li",{parentName:"ul"},"Please refrain from modifying secrets in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Services")," vault as this could disrupt our integration tests."),(0,n.kt)("li",{parentName:"ul"},"Ensure that you keep all secrets secure and avoid sharing them with others or making them public. Do not commit them anywhere else.")))}m.isMDXComponent=!0},9724:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/gmail-smtp-setting-395a35a58111a24514d710547fb9e278.jpg"}}]);