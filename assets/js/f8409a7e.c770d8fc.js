"use strict";(self.webpackChunkdrag_select_docs=self.webpackChunkdrag_select_docs||[]).push([[206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=l.createContext({}),c=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return a?l.createElement(b,o(o({ref:t},u),{},{components:a})):l.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),n=a(7294),r=a(6010),o=a(2389),s=a(7392),i=a(7094),c=a(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:o,defaultValue:p,values:m,groupId:b,className:h}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),y=(0,s.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,n.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:D}=(0,c.o5)();if(null!=b){const e=v[b];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,a=S.indexOf(t),l=k[a].value;l!==N&&(D(t),T(l),null!=b&&w(b,String(l)))},j=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:j,onClick:x},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,n.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return n.createElement(p,(0,l.Z)({key:String(t)},e))}},9568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var l=a(7462),n=(a(7294),a(3905)),r=a(5488),o=a(5162),s=a(2719);const i={sidebar_position:2},c="Getting Started",u={unversionedId:"intro",id:"intro",title:"Getting Started",description:"DragSelect is a small but professional, cross platform library with no dependencies that adds a selection mechanism similar to your operating system to the browser. It allows you to select multiple elements and drag and drop them around.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/ThibaultJanBeyer/DragSelect/docs/intro.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DragSelect",permalink:"/docs/info"},next:{title:"Guided Examples",permalink:"/docs/category/guided-examples"}},d={},p=[{value:"\ud83e\udde9 Installation (Install it)",id:"-installation-install-it",level:2},{value:"\ud83c\udfb8 That&#39;s it, you&#39;re ready to rock! (Use it)",id:"-thats-it-youre-ready-to-rock-use-it",level:2},{value:"\ud83c\udfac Aaaand action! (See it)",id:"-aaaand-action-see-it",level:2},{value:"Within a scroll-able Area",id:"within-a-scroll-able-area",level:3},{value:"With DropZones",id:"with-dropzones",level:3},{value:"\ud83d\udcda What next?",id:"-what-next",level:2},{value:"Learn",id:"learn",level:3}],m={toc:p};function b(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"DragSelect is a small but professional, cross platform library with no dependencies that adds a selection mechanism similar to your operating system to the browser. It allows you to select multiple elements and drag and drop them around.  "),(0,n.kt)("p",null,"Let's discover how to use ",(0,n.kt)("strong",{parentName:"p"},"DragSelect in less than 2 minutes"),". You don\u2019t believe me? It\u2019s very easy, you\u2019ll see!"),(0,n.kt)("h2",{id:"-installation-install-it"},"\ud83e\udde9 Installation (Install it)"),(0,n.kt)("p",null,"You can download the binary files and add them to your document.\nOr better use a Content Delivery Network (CDN).\nOr even better install it via a package manager like NPM:"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"npm i -S dragselect\n"))),(0,n.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"yarn add dragselect\n"))),(0,n.kt)(o.Z,{value:"download",label:"Download",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dragselect.com/v2/DragSelect.js"},"DragSelect")," (",(0,n.kt)("a",{parentName:"li",href:"https://dragselect.com/v2/ds.min.js"},"minified"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dragselect.com/v2/DragSelect.es6m.js"},"DragSelect ES6 Module")," (",(0,n.kt)("a",{parentName:"li",href:"https://dragselect.com/v2/ds.es6m.min.js"},"minified"),")"),(0,n.kt)("li",{parentName:"ul"},"From our website:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://dragselect.com/v2/ds.min.js"><\/script>\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We don't recommend the direct linking for production set-up since you'll not benefit from versioning. Please use ",(0,n.kt)("inlineCode",{parentName:"p"},"npm")," if you can."))),(0,n.kt)(o.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"modules",label:"Modules",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script type=module src="https://unpkg.com/dragselect@latest/dist/DragSelect.es6m.js"><\/script>\n')),(0,n.kt)("p",null,"Or Minified:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script type=module src="https://unpkg.com/dragselect@latest/dist/ds.es6m.min.js"><\/script>\n'))),(0,n.kt)(o.Z,{value:"traditional",label:"Traditional",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/dragselect@latest/dist/DragSelect.js"><\/script>\n')),(0,n.kt)("p",null,"Or Minified:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/dragselect@latest/dist/ds.min.js"><\/script>\n'))))),(0,n.kt)(o.Z,{value:"bower",label:"Bower (deprecated)",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"bower install --save dragselect\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note: the Bower project is deprecated. Please use npm instead. If you have to use bower, you'll have to build the project after installing it via ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run rollup"))))),(0,n.kt)("h2",{id:"-thats-it-youre-ready-to-rock-use-it"},"\ud83c\udfb8 That's it, you're ready to rock! (Use it)"),(0,n.kt)("p",null,"DragSelect supports ",(0,n.kt)("inlineCode",{parentName:"p"},"module.exports"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"AMD Modules")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"define"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"es6 modules")," with ",(0,n.kt)("inlineCode",{parentName:"p"},".es6m")," versions and has a fallback to global namespace for maximum out of the box support:"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"es6",label:"ES6",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import DragSelect from 'dragselect';\n\nconst ds = new DragSelect({\n  selectables: document.querySelectorAll('.selectable'),\n});\n\nds.subscribe('callback', (e) => {\n  console.log(e);\n});\n"))),(0,n.kt)(o.Z,{value:"commonjs",label:"CommonJS",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const DragSelect = require('dragselect');\n\nconst ds = new DragSelect({\n  selectables: document.querySelectorAll('.selectable'),\n});\n\nds.subscribe('callback', (e) => {\n  console.log(e);\n});\n"))),(0,n.kt)(o.Z,{value:"amd",label:"AMD",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"require(['dragselect'], function (DragSelect) {\n  const ds = new DragSelect({\n    selectables: document.querySelectorAll('.selectable'),\n  });\n\n  ds.subscribe('callback', (e) => {\n    console.log(e);\n  });\n});\n"))),(0,n.kt)(o.Z,{value:"global",label:"Global",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const ds = new DragSelect({\n  selectables: document.querySelectorAll('.selectable'),\n});\n\nds.subscribe('callback', (e) => {\n  console.log(e);\n});\n"))),(0,n.kt)(o.Z,{value:"cdn",label:"From CDN",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import DragSelect from 'https://unpkg.com/dragselect@latest/dist/ds.es6m.min.js'\n\nconst ds = new DragSelect({\n  selectables: document.querySelectorAll('.selectable'),\n});\n\nds.subscribe('callback', (e) => {\n  console.log(e)\n});\n")))),(0,n.kt)("h2",{id:"-aaaand-action-see-it"},"\ud83c\udfac Aaaand action! (See it)"),(0,n.kt)("iframe",{height:"400",style:{width:"100%"},scrolling:"no",title:"DragSelect",src:"https://codepen.io/ThibaultJanBeyer/embed/prpwYG?default-tab=result&editable=true&theme-id=dark",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0},"See ",(0,n.kt)("a",{href:"https://codepen.io/ThibaultJanBeyer/pen/prpwYG"},"this Pen about DragSelect")," on CodePen."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Pssst: try using your keyboard only or selecting multiple elements with Shift. It just works ;-)")),(0,n.kt)("h3",{id:"within-a-scroll-able-area"},"Within a scroll-able Area"),(0,n.kt)("iframe",{height:"400",style:{width:"100%"},scrolling:"no",title:"DragSelect with Scrollable AREA",src:"https://codepen.io/ThibaultJanBeyer/embed/Nvobgq?default-tab=result&editable=true&theme-id=dark",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0},"See ",(0,n.kt)("a",{href:"https://codepen.io/ThibaultJanBeyer/pen/Nvobgq"},"this Pen about DragSelect")," on CodePen."),(0,n.kt)("h3",{id:"with-dropzones"},"With DropZones"),(0,n.kt)("iframe",{height:"400",style:{width:"100%"},scrolling:"no",title:"DragSelect with Scrollable AREA",src:"https://codepen.io/ThibaultJanBeyer/embed/bGKgVxp?default-tab=result&editable=true&theme-id=dark",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0},"See ",(0,n.kt)("a",{href:"https://codepen.io/ThibaultJanBeyer/pen/bGKgVxp"},"this Pen about DragSelect")," on CodePen."),(0,n.kt)("h2",{id:"-what-next"},"\ud83d\udcda What next?"),(0,n.kt)("p",null,"Most importantly:"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"If you like what you see, make sure to "," ",(0,n.kt)(s.Z,{href:"https://github.com/ThibaultJanBeyer/DragSelect","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star ThibaultJanBeyer/DragSelect on GitHub",mdxType:"GitHubButton"},"Star")," DragSelect"),(0,n.kt)("li",null,"Tell all your friends/colleagues."),(0,n.kt)("li",null,"If you think it is worth continuing developing & maintaining DragSelect, please"," ",(0,n.kt)(s.Z,{href:"https://github.com/sponsors/ThibaultJanBeyer","data-icon":"octicon-heart","aria-label":"Sponsor @ThibaultJanBeyer on GitHub",mdxType:"GitHubButton"},"Sponsor")," or ",(0,n.kt)("a",{href:"https://github.com/ThibaultJanBeyer/DragSelect/blob/master/CONTRIBUTING.md"},"contribute"),"!")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Creating and maintaining useful tools is a lot of work. Thank you :-)")),(0,n.kt)("h3",{id:"learn"},"Learn"),(0,n.kt)("p",null,"This page is just a very brief introduction showcasing a limited set of the many features.\nDragSelect is ultra extensible and feature rich!\nMake sure to read the guides and the documentation. If you\u2019re stuck feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ThibaultJanBeyer/DragSelect"},"reach out on Github"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/category/API"},"API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/category/guided-examples"},"Guided Examples"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://thibaultjanbeyer.com/"},(0,n.kt)("img",{alt:"Typewriter Gif",src:a(2561).Z,width:"456",height:"440"}))))}b.isMDXComponent=!0},2561:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/typewriter-f265bd0576a7a0fd9c62883006f9339e.gif"}}]);