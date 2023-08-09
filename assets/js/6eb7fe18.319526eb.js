"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[3922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,k=u["".concat(o,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Verify",sidebar_position:2},l=void 0,s={unversionedId:"contributing/verify",id:"contributing/verify",title:"Verify",description:"To verify a release candidate, the following checklist could be used:",source:"@site/docs/contributing/verify.md",sourceDirName:"contributing",slug:"/contributing/verify",permalink:"/docs/contributing/verify",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/website/docs/contributing/verify.md",tags:[],version:"current",lastUpdatedBy:"JLer",lastUpdatedAt:1691563115,formattedLastUpdatedAt:"Aug 9, 2023",sidebarPosition:2,frontMatter:{title:"Verify",sidebar_position:2},sidebar:"docs",previous:{title:"Release",permalink:"/docs/contributing/release"},next:{title:"Reference",permalink:"/docs/category/reference"}},o={},c=[{value:"Download links are valid",id:"download-links-are-valid",level:2},{value:"Checksums and signatures",id:"checksums-and-signatures",level:2},{value:"Verify checksums and signatures",id:"verify-checksums-and-signatures",level:3},{value:"Check the file content of the source package",id:"check-the-file-content-of-the-source-package",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To verify a release candidate, the following checklist could be used:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download links are valid."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Checksums and signatures."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","LICENSE/NOTICE files exist."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","No unexpected binary files."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","All source files have ASF headers."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Can compile from source.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is NOT necessary to run all checks to cast a vote for a release candidate."),(0,r.kt)("p",{parentName:"admonition"},"However, you should clearly state which checks you did. The release manager needs to ensure that each check was done.")),(0,r.kt)("h2",{id:"download-links-are-valid"},"Download links are valid"),(0,r.kt)("p",null,"To verify the release candidate, you need to download the release candidate from the ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/incubator/opendal/"},"dist")," directory."),(0,r.kt)("p",null,'Use the following command to download all artifacts, replace "${release_version}-${rc_version}" with the version ID of the version to be released:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/opendal/${release_version}-${rc_version}/\n")),(0,r.kt)("h2",{id:"checksums-and-signatures"},"Checksums and signatures"),(0,r.kt)("p",null,"The release candidate should have a checksum and signature file."),(0,r.kt)("p",null,"For example, if the release candidate is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.36.0-rc1"),", the checksum and signature file should be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://dist.apache.org/repos/dist/dev/incubator/opendal/0.36.0-rc1/apache-opendal-0.36.0-rc1-src.tar.gz.sha512\nhttps://dist.apache.org/repos/dist/dev/incubator/opendal/0.36.0-rc1/apache-opendal-0.36.0-rc1-src.tar.gz.asc\n")),(0,r.kt)("h3",{id:"verify-checksums-and-signatures"},"Verify checksums and signatures"),(0,r.kt)("p",null,"GnuPG is recommended here. It can be installed with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get install gnupg\n# or\nyum install gnupg\n# or\nbrew install gnupg\n")),(0,r.kt)("p",null,"Firstly, import the OpenDAL release manager's public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://downloads.apache.org/incubator/opendal/KEYS > KEYS # Download KEYS\ngpg --import KEYS # Import KEYS to local\n")),(0,r.kt)("p",null,"Then, trust the public key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --edit-key <KEY-used-in-this-version> # Edit the key\n")),(0,r.kt)("p",null,"It will enter the interactive mode, use the following command to trust the key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg> trust\n")),(0,r.kt)("p",null,"And then, select the level of trust, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Please decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)\n\n  1 = I don't know or won't say\n  2 = I do NOT trust\n  3 = I trust marginally\n  4 = I trust fully\n  5 = I trust ultimately\n  m = back to the main menu\n")),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," to trust the key ultimately."),(0,r.kt)("p",null,"Now, we could start the verification."),(0,r.kt)("p",null,"We've provided a script to verify the checksum and signature of the release candidate."),(0,r.kt)("p",null,"The script is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts")," directory of our repository.\nYou can download it directly from ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/apache/incubator-opendal/main/scripts/check.sh"},"here"),"\nor check it out from the repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/incubator-opendal.git\n")),(0,r.kt)("p",null,"Run the script on a specific release candidate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./scripts/check.sh apache-opendal-${release_version}-${rc_version}-src.tar.gz\n")),(0,r.kt)("p",null,"You will see the following output if the verification is successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'gpg: Signature made Wed 21 Jul 2021 10:00:00 AM CST\ngpg:                using RSA key 0x1234567890ABCDEF\ngpg: Good signature from "Xuanwo<xuanwo@apache.org" [ultimate]\ngpg: WARNING: This key is not certified with a trusted signature!\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 1234 5678 90AB CDEF 1234  5678 90AB CDEF 1234 5678\nSuccess to verify the gpg sign\napache-opendal-0.36.0-rc1-src.tar.gz: OK\nSuccess to verify the checksum\n')),(0,r.kt)("h2",{id:"check-the-file-content-of-the-source-package"},"Check the file content of the source package"),(0,r.kt)("p",null,"Unzip ",(0,r.kt)("inlineCode",{parentName:"p"},"apache-opendal-${release_version}-${rc_version}-src.tar.gz")," and check the follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LICENSE and NOTICE files are correct for the repository."),(0,r.kt)("li",{parentName:"ul"},"All files have ASF license headers if necessary."),(0,r.kt)("li",{parentName:"ul"},"Building is OK.")))}d.isMDXComponent=!0}}]);