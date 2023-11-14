"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Welcome to Apache OpenDAL",sidebar_position:1},i=void 0,l={unversionedId:"overview",id:"overview",title:"Welcome to Apache OpenDAL",description:"OpenDAL represents Open Data Access Layer. Our vision is to access data freely.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/docs/overview.md",tags:[],version:"current",lastUpdatedBy:"Suyan",lastUpdatedAt:1699966454,formattedLastUpdatedAt:"Nov 14, 2023",sidebarPosition:1,frontMatter:{title:"Welcome to Apache OpenDAL",sidebar_position:1},sidebar:"docs",next:{title:"Quickstart",permalink:"/docs/quickstart"}},s={},p=[{value:"What OpenDAL does?",id:"what-opendal-does",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Why OpenDAL?",id:"why-opendal",level:2},{value:"1. Free from services",id:"1-free-from-services",level:3},{value:"2. Free from implementations",id:"2-free-from-implementations",level:3},{value:"3. Free to integrate",id:"3-free-to-integrate",level:3},{value:"4. Free to zero cost",id:"4-free-to-zero-cost",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"OpenDAL represents ",(0,n.kt)("strong",{parentName:"p"},"Open")," ",(0,n.kt)("strong",{parentName:"p"},"D"),"ata ",(0,n.kt)("strong",{parentName:"p"},"A"),"ccess ",(0,n.kt)("strong",{parentName:"p"},"L"),"ayer. Our vision is to ",(0,n.kt)("strong",{parentName:"p"},"access data freely"),"."),(0,n.kt)("h2",{id:"what-opendal-does"},"What OpenDAL does?"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5351546/222356748-14276998-501b-4d2a-9b09-b8cff3018204.png",alt:null})),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"See the page for quick start with multiple languages: ",(0,n.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Quickstart"),"."),(0,n.kt)("h2",{id:"why-opendal"},"Why OpenDAL?"),(0,n.kt)("p",null,'The vision of OpenDAL is access data freely, where "free" refers to four essential aspects:'),(0,n.kt)("h3",{id:"1-free-from-services"},"1. Free from services"),(0,n.kt)("p",null,"OpenDAL must enable users to access various storage services ranging from ",(0,n.kt)("inlineCode",{parentName:"p"},"s3")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"dropbox")," via its own native API. It should provide a unified API for accessing all these services."),(0,n.kt)("p",null,"For example, we DO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add support for ",(0,n.kt)("a",{parentName:"li",href:"https://www.google.com/drive/"},"Google Drive"),": It allows users to access and manage their data on the ",(0,n.kt)("a",{parentName:"li",href:"https://www.google.com/drive/"},"Google Drive"),"."),(0,n.kt)("li",{parentName:"ul"},"Add support for ",(0,n.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/object-storage-service"},"Object Storage Service (OSS)")," via native API: Users can utilize Aliyun's RAM support."),(0,n.kt)("li",{parentName:"ul"},"Add support for ",(0,n.kt)("a",{parentName:"li",href:"https://supabase.com/docs/guides/storage"},"supabase storage"),": Users can visit ",(0,n.kt)("inlineCode",{parentName:"li"},"supabase storage")," now!")),(0,n.kt)("p",null,"while we DO NOT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add support for ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage"},"Google Cloud Storage(GCS)")," via ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/xml-api/overview"},"XML API"),": ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage"},"GCS")," has native ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/json_api"},"JSON API")," which more powerful"),(0,n.kt)("li",{parentName:"ul"},"Add support for structural data in ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL/PostgreSQL"),": We can treat a database as a simple key-value store, but we can't support unified access of structural data.")),(0,n.kt)("h3",{id:"2-free-from-implementations"},"2. Free from implementations"),(0,n.kt)("p",null,"OpenDAL needs to separate the various implementation details of services and enables users to write identical logic for different services."),(0,n.kt)("p",null,"For example, we DO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new capability to indicate whether ",(0,n.kt)("inlineCode",{parentName:"li"},"presign")," is supported: Users can now write logic based on the ",(0,n.kt)("inlineCode",{parentName:"li"},"can_presign")," option."),(0,n.kt)("li",{parentName:"ul"},"Add a ",(0,n.kt)("inlineCode",{parentName:"li"},"default_storage_class")," configuration for the S3 service: Configuration is specific to the S3 service."),(0,n.kt)("li",{parentName:"ul"},"Add an option for ",(0,n.kt)("inlineCode",{parentName:"li"},"content_type")," in the ",(0,n.kt)("inlineCode",{parentName:"li"},"write")," operation: It aligns with HTTP standards.")),(0,n.kt)("p",null,"while we DO NOT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add a new option in read for ",(0,n.kt)("inlineCode",{parentName:"li"},"storage_class"),": As different services could have varying values for this parameter.")),(0,n.kt)("h3",{id:"3-free-to-integrate"},"3. Free to integrate"),(0,n.kt)("p",null,"OpenDAL needs to be integrated with different systems."),(0,n.kt)("p",null,"For example, we DO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add Python binding: Python programmers can use OpenDAL."),(0,n.kt)("li",{parentName:"ul"},"Add object_store integration: ",(0,n.kt)("inlineCode",{parentName:"li"},"object_store")," users can adopt OpenDAL.")),(0,n.kt)("h3",{id:"4-free-to-zero-cost"},"4. Free to zero cost"),(0,n.kt)("p",null,"OpenDAL needs to implement features in zero cost way which means:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Users need not to pay cost for unused features."),(0,n.kt)("li",{parentName:"ul"},"Users cannot write better implementation for used features.")),(0,n.kt)("p",null,"For example, we DO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"layer")," support: Users can add logging/metrics/tracing in zero cost way."),(0,n.kt)("li",{parentName:"ul"},"Implement ",(0,n.kt)("inlineCode",{parentName:"li"},"seek")," for Reader: Users cannot write better ",(0,n.kt)("inlineCode",{parentName:"li"},"seek")," support, they all need to pay the same cost.")),(0,n.kt)("p",null,"we DO NOT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"Arc")," for metadata: Users may only need to use metadata once and never clone it. For those who do want this feature, they can add ",(0,n.kt)("inlineCode",{parentName:"li"},"Arc")," themselves.")))}u.isMDXComponent=!0}}]);