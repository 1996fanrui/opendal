"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[6427],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8796:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={title:"Release",sidebar_position:1},i=void 0,l={unversionedId:"contributing/release",id:"contributing/release",title:"Release",description:"This document mainly introduces",source:"@site/docs/contributing/release.md",sourceDirName:"contributing",slug:"/contributing/release",permalink:"/docs/contributing/release",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/website/docs/contributing/release.md",tags:[],version:"current",lastUpdatedBy:"Jun Ouyang",lastUpdatedAt:1690168269,formattedLastUpdatedAt:"Jul 24, 2023",sidebarPosition:1,frontMatter:{title:"Release",sidebar_position:1},sidebar:"docs",previous:{title:"Contributing",permalink:"/docs/category/contributing"},next:{title:"Verify",permalink:"/docs/contributing/verify"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Preparation",id:"preparation",level:2},{value:"GitHub Release",id:"github-release",level:2},{value:"Bump Version",id:"bump-version",level:3},{value:"Create a GitHub Release",id:"create-a-github-release",level:3},{value:"ASF Release",id:"asf-release",level:2},{value:"Create an ASF Release",id:"create-an-asf-release",level:3},{value:"Upload artifacts to the SVN dist repo",id:"upload-artifacts-to-the-svn-dist-repo",level:3},{value:"Rescure",id:"rescure",level:3},{value:"Voting",id:"voting",level:2},{value:"OpenDAL Community Vote",id:"opendal-community-vote",level:3},{value:"Incubator Community Vote",id:"incubator-community-vote",level:3},{value:"Official Release",id:"official-release",level:2},{value:"Publish artifacts to SVN RELEASE branch",id:"publish-artifacts-to-svn-release-branch",level:3},{value:"Send the announcement",id:"send-the-announcement",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document mainly introduces\nhow the release manager releases a new version in accordance with the Apache requirements."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Source Release")," is the key point which Apache values, also, is necessary for a release. And OpenDAL will only have source release."),(0,r.kt)("p",null,"Please remember that publishing software has legal consequences."),(0,r.kt)("p",null,"This guide complements the foundation-wide policies and guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.apache.org/legal/release-policy.html"},"Release Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-distribution"},"Release Distribution Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infra.apache.org/release-publishing.html"},"Release Creation Process"))),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This section is the requirements for the release manager who is the first time to be a release manager")),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing/reference/setup_gpg"},"Setup GPG Key")," to make sure the GPG key has been set up."),(0,r.kt)("h2",{id:"github-release"},"GitHub Release"),(0,r.kt)("h3",{id:"bump-version"},"Bump Version"),(0,r.kt)("p",null,"OpenDAL will release all packages in the same version."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bump version in ",(0,r.kt)("inlineCode",{parentName:"li"},"Cargo.toml"),"."),(0,r.kt)("li",{parentName:"ul"},"For the nodejs binding, bump version in ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/nodejs/package.json")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/nodejs/npm/*/package.json"),"."),(0,r.kt)("li",{parentName:"ul"},"For the java binding, bump version in ",(0,r.kt)("inlineCode",{parentName:"li"},"bindings/java/pom.xml"),"."),(0,r.kt)("li",{parentName:"ul"},"Update ",(0,r.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md"),", refer to ",(0,r.kt)("a",{parentName:"li",href:"/docs/contributing/reference/generate_release_note"},"Generate Release Note")," for more information."),(0,r.kt)("li",{parentName:"ul"},"If there are breaking changes in ",(0,r.kt)("inlineCode",{parentName:"li"},"core"),", please also update ",(0,r.kt)("inlineCode",{parentName:"li"},"core/src/docs/upgrade.md"),"."),(0,r.kt)("li",{parentName:"ul"},"After all those changes, submit a PR with name ",(0,r.kt)("inlineCode",{parentName:"li"},"Bump to version x.y.z"),".")),(0,r.kt)("p",null,"Take ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-opendal/pull/2366"},"Bump to version 0.36.0")," as an example."),(0,r.kt)("h3",{id:"create-a-github-release"},"Create a GitHub Release"),(0,r.kt)("p",null,"After bump version PR gets merged, we can create a GitHub release:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a tag at ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Bump Version")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"Patch up version")," commit: ",(0,r.kt)("inlineCode",{parentName:"li"},'git tag -s "v0.36.0"'),", please correctly check out the corresponding commit instead of directly tagging on the main branch."),(0,r.kt)("li",{parentName:"ul"},"Push tags to GitHub: ",(0,r.kt)("inlineCode",{parentName:"li"},"git push --tags"),"."),(0,r.kt)("li",{parentName:"ul"},"Create Release on the newly created tag",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If there are breaking changes, please add the content from ",(0,r.kt)("inlineCode",{parentName:"li"},"upgrade.md")," before.")))),(0,r.kt)("h2",{id:"asf-release"},"ASF Release"),(0,r.kt)("p",null,"If any step in the ASF Release process fails and requires code changes,\nwe will abandon that version and prepare for the next one.\nOur release page will only display ASF releases instead of GitHub Releases."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opendal_version"),": the version for opendal, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"release_version"),": the version for voting, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0-rc1"),"."))),(0,r.kt)("h3",{id:"create-an-asf-release"},"Create an ASF Release"),(0,r.kt)("p",null,"After GitHub Release has been created, we can start to create ASF Release."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Checkout to released tag."),(0,r.kt)("li",{parentName:"ul"},"Use the release script to create a new release: ",(0,r.kt)("inlineCode",{parentName:"li"},"OPENDAL_VERSION=<opendal_version> OPENDAL_VERSION_RC=<release_version> ./scripts/release.sh")),(0,r.kt)("li",{parentName:"ul"},"Push the newly created branch to GitHub")),(0,r.kt)("p",null,"This script will create a new release under ",(0,r.kt)("inlineCode",{parentName:"p"},"dist"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"> tree dist\ndist\n\u251c\u2500\u2500 apache-opendal-incubating-0.36.0-src.tar.gz\n\u251c\u2500\u2500 apache-opendal-incubating-0.36.0-src.tar.gz.asc\n\u2514\u2500\u2500 apache-opendal-incubating-0.36.0-src.tar.gz.sha512\n")),(0,r.kt)("h3",{id:"upload-artifacts-to-the-svn-dist-repo"},"Upload artifacts to the SVN dist repo"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SVN is required for this step.")),(0,r.kt)("p",null,"The svn repository of the dev branch is: ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/incubator/opendal"},"https://dist.apache.org/repos/dist/dev/incubator/opendal")),(0,r.kt)("p",null,"First, checkout OpenDAL to local directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# As this step will copy all the versions, it will take some time. If the network is broken, please use svn cleanup to delete the lock before re-execute it.\nsvn co https://dist.apache.org/repos/dist/dev/incubator/opendal opendal-dist-dev\n")),(0,r.kt)("p",null,"Then, upload the artifacts:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"${release_version}")," here should be like ",(0,r.kt)("inlineCode",{parentName:"p"},"0.36.0-rc1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd opendal-dist-dev\n# create a directory named by version\nmkdir ${release_version}\n# copy source code and signature package to the versioned directory\ncp ${repo_dir}/dist/* ${release_version}/\n# check svn status\nsvn status\n# add to svn\nsvn add ${release_version}\n# check svn status\nsvn status\n# commit to SVN remote server\nsvn commit -m "Prepare for ${release_version}"\n')),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/incubator/opendal/"},"https://dist.apache.org/repos/dist/dev/incubator/opendal/")," to make sure the artifacts are uploaded correctly."),(0,r.kt)("h3",{id:"rescure"},"Rescure"),(0,r.kt)("p",null,"If you accidentally published wrong or unexpected artifacts, like wrong signature files, wrong sha256 files,\nplease cancel the release for the current ",(0,r.kt)("inlineCode",{parentName:"p"},"release_version"),", ",(0,r.kt)("em",{parentName:"p"},"increase th RC counting")," and reinitiate a release with the new ",(0,r.kt)("inlineCode",{parentName:"p"},"release_version"),"."),(0,r.kt)("h2",{id:"voting"},"Voting"),(0,r.kt)("p",null,"As an incubating project, OpenDAL requires votes from both the OpenDAL Community and Incubator Community."),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opendal_version"),": the version for opendal, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"release_version"),": the version for voting, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0-rc1"),"."))),(0,r.kt)("h3",{id:"opendal-community-vote"},"OpenDAL Community Vote"),(0,r.kt)("p",null,"OpenDAL Community Vote should send email to: ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@opendal.apache.org"},"dev@opendal.apache.org"),":"),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[VOTE] Release Apache OpenDAL(incubating) ${release_version} - OpenDAL Vote Round 1\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello, Apache OpenDAL(incubating) Community,\n\nThis is a call for a vote to release Apache OpenDAL(incubating) version ${opendal_version}.\n\nThe tag to be voted on is ${opendal_version}.\n\nThe release candidate:\n\nhttps://dist.apache.org/repos/dist/dev/incubator/opendal/${release_version}/\n\nKeys to verify the release candidate:\n\nhttps://downloads.apache.org/incubator/opendal/KEYS\n\nGit branch for the release:\n\nhttps://github.com/apache/incubator-opendal/tree/release-${release_version}\n\nPlease download, verify, and test.\n\nThe VOTE will pass after got 3 binding approve.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache opendal, please see https://opendal.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nMore detailed checklist please refer to:\nhttps://github.com/apache/incubator-opendal/tree/main/scripts\n\nTo compile from source, please refer to:\nhttps://github.com/apache/incubator-opendal/blob/main/CONTRIBUTING.md\n\nThanks\n\n${name}\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/c211gqq2yl15jbxqk4rcnq1bdqltjm5l"},"https://lists.apache.org/thread/c211gqq2yl15jbxqk4rcnq1bdqltjm5l")),(0,r.kt)("p",null,"After at least 3 +1 binding vote (from OpenDAL Podling PMC member and committers) and no veto, claim the vote result:"),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Result][VOTE] Release Apache OpenDAL(incubating) ${release_version} - OpenDAL Vote Round 1\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello, Apache OpenDAL(incubating) Community,\n\nThe vote to release Apache OpenDAL(Incubating) ${release_version} has passed.\n\nThe vote PASSED with 3 binding +1 and 0 -1 vote:\n\nBinding votes:\n\n- xxx\n- yyy\n- zzz\n\nVote thread: ${vote_thread_url}\n\nThanks\n\n${name}\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/xk5myl10mztcfotn59oo59s4ckvojds6"},"https://lists.apache.org/thread/xk5myl10mztcfotn59oo59s4ckvojds6")),(0,r.kt)("h3",{id:"incubator-community-vote"},"Incubator Community Vote"),(0,r.kt)("p",null,"Incubator Community Vote should send email to: ",(0,r.kt)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org"),":"),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[VOTE] Release Apache OpenDAL(incubating) ${release_version} - Incubator Vote Round 1\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello Incubator PMC,\n\nThe Apache OpenDAL community has voted and approved the release of Apache\nOpenDAL(incubating) ${release_version}. We now kindly request the IPMC members\nreview and vote for this release.\n\nOpenDAL is a data access layer that allows users to easily and efficiently\nretrieve data from various storage services in a unified way.\n\nOpenDAL community vote thread:\n\n${community_vote_thread_url}\n\nVote result thread:\n\n${community_vote_result_thread_url}\n\nThe release candidate:\n\nhttps://dist.apache.org/repos/dist/dev/incubator/opendal/${release_version}/\n\nThis release has been signed with a PGP available here:\n\nhttps://downloads.apache.org/incubator/opendal/KEYS\n\nGit branch for the release:\n\nhttps://github.com/apache/incubator-opendal/tree/release-${release_version}\n\nPlease download, verify, and test.\n\nThe VOTE will pass after got 3 binding approve.\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nTo learn more about apache opendal, please see https://opendal.apache.org/\n\nChecklist for reference:\n\n[ ] Download links are valid.\n[ ] Checksums and signatures.\n[ ] LICENSE/NOTICE files exist\n[ ] No unexpected binary files\n[ ] All source files have ASF headers\n[ ] Can compile from source\n\nMore detailed checklist please refer to:\nhttps://github.com/apache/incubator-opendal/tree/main/scripts\n\nTo compile from source, please refer to:\nhttps://github.com/apache/incubator-opendal/blob/main/CONTRIBUTING.md\n\nThanks\n\n${name}\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/sjdzs89p2x4tlb813ow7lhdhdfcvhysx"},"https://lists.apache.org/thread/sjdzs89p2x4tlb813ow7lhdhdfcvhysx")),(0,r.kt)("p",null,"After at least 72 hours with at least 3 +1 binding vote (from Incubator PMC member) and no veto, claim the vote result:"),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Release Apache OpenDAL(incubating) ${release_version} - Incubator Vote Round 1\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi Incubator PMC,\n\nThe vote to release Apache OpenDAL(incubating) ${release_version} has passed with\n4 +1 binding and 3 +1 non-binding votes, no +0 or -1 votes.\n\nBinding votes\uff1a\n\n- xxx\n- yyy\n- zzz\n\nNon-Binding votes:\n\n- aaa\n\nVote thread: ${incubator_vote_thread_url}\n\nThanks for reviewing and voting for our release candidate.\n\nWe will proceed with publishing the approved artifacts and sending out the announcement soon.\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/h3x9pq1djpg76q3ojpqmdr3d0o03fld1"},"https://lists.apache.org/thread/h3x9pq1djpg76q3ojpqmdr3d0o03fld1")),(0,r.kt)("h2",{id:"official-release"},"Official Release"),(0,r.kt)("h3",{id:"publish-artifacts-to-svn-release-branch"},"Publish artifacts to SVN RELEASE branch"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"opendal_version"),": the version for opendal, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"release_version"),": the version for voting, like ",(0,r.kt)("inlineCode",{parentName:"li"},"0.36.0-rc1"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/incubator/opendal/${release_version} https://dist.apache.org/repos/dist/release/incubator/opendal/${opendal_version} -m "Release ${opendal_version}"\n')),(0,r.kt)("h3",{id:"send-the-announcement"},"Send the announcement"),(0,r.kt)("p",null,"Send the release announcement to ",(0,r.kt)("inlineCode",{parentName:"p"},"dev@opendal.apache.org")," and CC ",(0,r.kt)("inlineCode",{parentName:"p"},"announce@apache.org"),"."),(0,r.kt)("p",null,"Title:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[ANNOUNCE] Release Apache OpenDAL(incubating) ${opendal_version}\n")),(0,r.kt)("p",null,"Content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi all,\n\nThe Apache OpenDAL(incubating) community is pleased to announce\nthat Apache OpenDAL(incubating) ${opendal_version} has been released!\n\nOpenDAL is a data access layer that allows users to easily and efficiently\nretrieve data from various storage services in a unified way.\n\nThe notable changes since ${opendal_version} include:\n1. xxxxx\n2. yyyyyy\n3. zzzzzz\n\nPlease refer to the change log for the complete list of changes:\nhttps://github.com/apache/incubator-opendal/releases/tag/v${opendal_version}\n\nApache OpenDAL website: https://opendal.apache.org/\n\nDownload Links: https://opendal.apache.org/download\n\nOpenDAL Resources:\n- Issue: https://github.com/apache/incubator-opendal/issues\n- Mailing list: dev@opendal.apache.org\n\nThanks\nOn behalf of Apache OpenDAL community\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/oy77n55brvk72tnlb2bjzfs9nz3cfd0s"},"https://lists.apache.org/thread/oy77n55brvk72tnlb2bjzfs9nz3cfd0s")))}u.isMDXComponent=!0}}]);