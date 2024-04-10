"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[990],{1760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=n(1527),r=n(2175);function a(e){const t={code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,s.jsx)(t.p,{children:"This service can be used to:"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," stat"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," read"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," write"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," create_dir"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," delete"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," copy"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," rename"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," list"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," scan"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," presign"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," blocking"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"root"}),": Set the work directory for backend"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"bucket"}),": Set the container name for backend"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"endpoint"}),": Customizable endpoint setting"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"credential"}),": Credentials string for GCS service OAuth2 authentication"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"credential_path"}),": Local path to credentials file for GCS service OAuth2 authentication"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"predefined_acl"}),": Predefined ACL for GCS"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"default_storage_class"}),": Default storage class for GCS"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Refer to public API docs for more information."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.h3,{id:"via-builder",children:"Via Builder"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust,no_run",children:'use anyhow::Result;\nuse opendal::services::Gcs;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // create backend builder\n    let mut builder = Gcs::default();\n\n    // set the storage bucket for OpenDAL\n    builder.bucket("test");\n    // set the working directory root for GCS\n    // all operations will happen within it\n    builder.root("/path/to/dir");\n    // set the credentials string of service account\n    builder.credential("service account credential");\n    // set the predefined ACL for GCS\n    builder.predefined_acl("publicRead");\n    // set the default storage class for GCS\n    builder.default_storage_class("STANDARD");\n\n    let op: Operator = Operator::new(builder)?.finish();\n    Ok(())\n}\n'})})]})}function i(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}var l=n(5431),c=n(2860);const o={title:"Gcs"},u=void 0,d={id:"services/gcs",title:"Gcs",description:"Google Cloud Storage Support",source:"@site/docs/services/gcs.mdx",sourceDirName:"services",slug:"/services/gcs",permalink:"/docs/services/gcs",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/opendal/tree/main/website/docs/services/gcs.mdx",tags:[],version:"current",lastUpdatedBy:"x\xb3u\xb3",lastUpdatedAt:1712766040,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{title:"Gcs"},sidebar:"docs",previous:{title:"FTP",permalink:"/docs/services/ftp"},next:{title:"Gdrive",permalink:"/docs/services/gdrive"}},p={},h=[{value:"Via Config",id:"via-config",level:3}];function m(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Google Cloud Storage Support"}),"\n","\n",(0,s.jsx)(i,{components:e.components}),"\n",(0,s.jsx)(t.h3,{id:"via-config",children:"Via Config"}),"\n","\n","\n",(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(c.Z,{value:"rust",label:"Rust",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use anyhow::Result;\nuse opendal::Operator;\nuse opendal::Scheme;\nuse std::collections::HashMap;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let mut map = HashMap::new();\n    map.insert("bucket".to_string(), "test".to_string());\n    map.insert("root".to_string(), "/path/to/dir".to_string());\n    map.insert("credential".to_string(), "authentication token".to_string());\n    map.insert("predefined_acl".to_string(), "publicRead".to_string());\n    map.insert("default_storage_class".to_string(), "STANDARD".to_string());\n\n    let op: Operator = Operator::via_map(Scheme::Gcs, map)?;\n    Ok(())\n}\n'})})}),(0,s.jsx)(c.Z,{value:"node.js",label:"Node.js",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'import { Operator } from "opendal";\nasync function main() {\n  const op = new Operator("gcs", {\n    bucket: "test",\n    root: "/path/to/dir",\n    credential: "authentication token",\n    predefined_acl: "publicRead",\n    default_storage_class: "STANDARD",\n  });\n}\n'})})}),(0,s.jsx)(c.Z,{value:"python",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import opendal\nop = opendal.Operator("gcs",\n    bucket="test",\n    root="/path/to/dir",\n    credential="authentication token",\n    predefined_acl="publicRead",\n    default_storage_class="STANDARD",\n)\n'})})})]})]})}function b(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},2860:(e,t,n)=>{n.d(t,{Z:()=>i});n(959);var s=n(6259);const r={tabItem:"tabItem_CbVR"};var a=n(1527);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},5431:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(959),r=n(6259),a=n(2990),i=n(8903),l=n(3133),c=n(563),o=n(351),u=n(3026);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[o,d]=m({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=o??b;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(3499);const x={tabList:"tabList_zxWd",tabItem:"tabItem_TcdJ"};var g=n(1527);function j(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==s&&(o(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function y(e){const t=(0,f.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},2175:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var s=n(959);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);