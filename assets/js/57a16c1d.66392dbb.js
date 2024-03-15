"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[7757],{3016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=n(1527),s=n(2175);function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,r.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,r.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," append"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," scan"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," presign"]}),"\n",(0,r.jsxs)(t.li,{className:"task-list-item",children:[(0,r.jsx)(t.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"root"}),": Set the work dir for backend."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"container"}),": Set the container name for backend."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"endpoint"}),": Set the endpoint for backend."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"account_name"}),": Set the account_name for backend."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"account_key"}),": Set the account_key for backend."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Refer to public API docs for more information."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.p,{children:["This example works on ",(0,r.jsx)(t.a,{href:"https://github.com/Azure/Azurite",children:"Azurite"})," for local developments."]}),"\n",(0,r.jsx)(t.h3,{id:"start-local-blob-service",children:"Start local blob service"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:'docker run -p 10000:10000 mcr.microsoft.com/azure-storage/azurite\naz storage container create --name test --connection-string "DefaultEndpointsProtocol=http;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"init-opendal-operator",children:"Init OpenDAL Operator"}),"\n",(0,r.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust,no_run",children:'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Azblob;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create azblob backend builder.\n    let mut builder = Azblob::default();\n    // Set the root for azblob, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/path/to/dir");\n    // Set the container name, this is required.\n    builder.container("test");\n    // Set the endpoint, this is required.\n    //\n    // For examples:\n    // - "http://127.0.0.1:10000/devstoreaccount1"\n    // - "https://accountname.blob.core.windows.net"\n    builder.endpoint("http://127.0.0.1:10000/devstoreaccount1");\n    // Set the account_name and account_key.\n    //\n    // OpenDAL will try load credential from the env.\n    // If credential not set and no valid credential in env, OpenDAL will\n    // send request without signing like anonymous user.\n    builder.account_name("devstoreaccount1");\n    builder.account_key("Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==");\n\n    // `Accessor` provides the low level APIs, we will use `Operator` normally.\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}var l=n(5431),i=n(2860);const c={title:"Azblob"},u=void 0,d={id:"services/azblob",title:"Azblob",description:"Azure Storage Blob services support.",source:"@site/docs/services/azblob.mdx",sourceDirName:"services",slug:"/services/azblob",permalink:"/docs/services/azblob",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/azblob.mdx",tags:[],version:"current",lastUpdatedBy:"Weijie Guo",lastUpdatedAt:1710500423,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{title:"Azblob"},sidebar:"docs",previous:{title:"AtomicServer",permalink:"/docs/services/atomicserver"},next:{title:"Azdls",permalink:"/docs/services/azdls"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function b(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Azure Storage Blob services support."}),"\n","\n",(0,r.jsx)(o,{components:e.components}),"\n",(0,r.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(i.Z,{value:"rust",label:"Rust",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("container".to_string(), "test".to_string());\n    map.insert("endpoint".to_string(), "http://127.0.0.1:10000/devstoreaccount1".to_string());\n    map.insert("account_name".to_string(), "devstoreaccount1".to_string());\n    map.insert("account_key".to_string(), "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Azblob, map)?;\n    Ok(())\n}\n'})})}),(0,r.jsx)(i.Z,{value:"node.js",label:"Node.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("azblob", {\n    root: "/path/to/dir",\n    container: "test",\n    endpoint: "http://127.0.0.1:10000/devstoreaccount1",\n    account_name: "devstoreaccount1",\n    account_key: "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==",\n  });\n}\n'})})}),(0,r.jsx)(i.Z,{value:"python",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import opendal\n\nop = opendal.Operator("azblob",\n    root="/path/to/dir",\n    container="test",\n    endpoint="http://127.0.0.1:10000/devstoreaccount1",\n    account_name="devstoreaccount1",\n    account_key="Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==",\n)\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},2860:(e,t,n)=>{n.d(t,{Z:()=>o});n(959);var r=n(6259);const s={tabItem:"tabItem_CbVR"};var a=n(1527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},5431:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(959),s=n(6259),a=n(2990),o=n(8903),l=n(3133),i=n(563),c=n(351),u=n(3026);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=b({queryString:n,groupId:s}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=c??m;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=n(3499);const f={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var v=n(1527);function j(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(k,{...e,...t})]})}function y(e){const t=(0,x.Z)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(t))}},2175:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(959);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);