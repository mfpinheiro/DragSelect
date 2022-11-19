"use strict";(self.webpackChunkdrag_select_docs=self.webpackChunkdrag_select_docs||[]).push([[928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(d,".").concat(c)]||u[c]||p[c]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3,description:"DragSelect Methods (API)"},o="Methods",i={unversionedId:"API/Methods",id:"API/Methods",title:"Methods",description:"DragSelect Methods (API)",source:"@site/docs/API/Methods.mdx",sourceDirName:"API",slug:"/API/Methods",permalink:"/docs/API/Methods",draft:!1,editUrl:"https://github.com/ThibaultJanBeyer/DragSelect/docs/API/Methods.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"DragSelect Methods (API)"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/API/Events"},next:{title:"Classes",permalink:"/docs/API/Classes"}},d={},s=[{value:"Methods",id:"methods-1",level:2},{value:"Functionality",id:"functionality",level:3},{value:"Pub/Sub",id:"pubsub",level:3},{value:"Settings",id:"settings",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Selection",id:"selection",level:3},{value:"Selectables",id:"selectables",level:3},{value:"Pointer",id:"pointer",level:3},{value:"DropZones",id:"dropzones",level:3},{value:"Example",id:"example",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"methods"},"Methods"),(0,l.kt)("p",null,"DragSelect exposes some useful methods.\nWhen the function is saved into a variable ",(0,l.kt)("inlineCode",{parentName:"p"},"const ds = new DragSelect()")," you have access to all its inner functions. You can simply use them like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const ds = new DragSelect({});\nds.methodName(method_props);\n")),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"functionality"},"Functionality"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"properties"),(0,l.kt)("th",{parentName:"tr",align:null},"usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stop")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Will teardown/stop the whole functionality")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Reset the functionality after a stop/teardown")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"break")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Utility to override DragSelect internal functionality. Breaks out of current flow. Read ",(0,l.kt)("a",{parentName:"td",href:"/docs/guided-examples/CustomDnD"},"Custom Drag and Drop")," for more info.")))),(0,l.kt)("h3",{id:"pubsub"},"Pub/Sub"),(0,l.kt)("p",null,"| ",(0,l.kt)("inlineCode",{parentName:"p"},"subscribe")," | (event_name, callback:(callback_object) => void):number | Subscribes to an event, see the ",(0,l.kt)("a",{parentName:"p",href:"Events"},"Events API")," for infos on the names and callback_object.\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"unsubscribe")," | (event_name, callback, id) | Unsubscribes from an event, either pass the exact same callback method as when subscribing or the ID which is returned from the subscribe method\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"publish")," | (event_name, callback_object:any) | Publishes an event, see the ",(0,l.kt)("a",{parentName:"p",href:"Events"},"Events API")," for infos on the names and callback_object.\nRead the ",(0,l.kt)("a",{parentName:"p",href:"Events"},"Events API")," for more information"),(0,l.kt)("h3",{id:"settings"},"Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"properties"),(0,l.kt)("th",{parentName:"tr",align:null},"usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setSettings")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"Settings"},"Settings")),(0,l.kt)("td",{parentName:"tr",align:null},"Update any setting dynamically, see ",(0,l.kt)("a",{parentName:"td",href:"/docs/guided-examples/Updating-Settings"},"Updating Settings"))))),(0,l.kt)("h3",{id:"interaction"},"Interaction"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"properties"),(0,l.kt)("th",{parentName:"tr",align:null},"usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isDragging")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the user is currently drag n dropping elements (instead of selection)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isMultiSelect")),(0,l.kt)("td",{parentName:"tr",align:null},"event:KeyboardEvent"),(0,l.kt)("td",{parentName:"tr",align:null},"MouseEvent")))),(0,l.kt)("h3",{id:"selection"},"Selection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"properties"),(0,l.kt)("th",{parentName:"tr",align:null},"usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getSelection")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns all currently selected nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addSelection")),(0,l.kt)("td",{parentName:"tr",align:null},"elements:","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement, triggerCallback:boolean, dontAddToSelectables:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"adds one or multiple elements to the selection. If boolean is set to true: callback will be called afterwards. Adds them to the selectables if they're not yet in the set (can be turned off by setting the last boolean to true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"removeSelection")),(0,l.kt)("td",{parentName:"tr",align:null},"elements:","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement, triggerCallback:boolean, removeFromSelectables:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"removes one or multiple elements to the selection. If boolean is set to true: callback will be called afterwards. If last boolean is set to true, it also removes them from the possible selectable nodes if they were.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"toggleSelection")),(0,l.kt)("td",{parentName:"tr",align:null},"elements:","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement, triggerCallback:boolean, removeFromSelectables:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"toggles one or multiple elements to the selection. If element is not in selection it will be added, if it is already selected, it will be removed. If ",(0,l.kt)("inlineCode",{parentName:"td"},"triggerCallback")," is set to true: callback will be called afterward. If ",(0,l.kt)("inlineCode",{parentName:"td"},"removeFromSelectables")," is set to true: will NOT add elements to the list of selectable elements but will remove elements from the selectables if they are toggled off. (By default the toggling will add elements to the list of selectables and will not remove them).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setSelection")),(0,l.kt)("td",{parentName:"tr",align:null},"elements:","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement, triggerCallback:boolean, dontAddToSelectables:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"sets the selection to one or multiple elements. If boolean is set to true: callback will be called afterwards. Adds them to the selectables if they're not yet in the set (can be turned off by setting the last boolean to true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clearSelection")),(0,l.kt)("td",{parentName:"tr",align:null},"elements:","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement, triggerCallback:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Removes all elements from the selection. If callback is set to true: callback will be called afterwards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"clearSelection")),(0,l.kt)("td",{parentName:"tr",align:null},"triggerCallback:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Unselect / Deselect all current selected Nodes")))),(0,l.kt)("h3",{id:"selectables"},"Selectables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"properties"),(0,l.kt)("th",{parentName:"tr",align:null},"usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addSelectables")),(0,l.kt)("td",{parentName:"tr",align:null},"elements:","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement, addToSelection:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds elements that can be selected. Don\u2019t worry, nodes are never added twice. ",(0,l.kt)("inlineCode",{parentName:"td"},"addToSelection"),": elements will also be added to current selection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"removeSelectables")),(0,l.kt)("td",{parentName:"tr",align:null},"elements:","[HTMLElement ","|"," SVGElement]"," ","|"," HTMLElement ","|"," SVGElement, removeFromSelection:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove elements from the set of elements that can be selected. ",(0,l.kt)("inlineCode",{parentName:"td"},"removeFromSelection"),": elements will also be removed from current selection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getSelectables")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns array with all nodes that can be selected.")))),(0,l.kt)("h3",{id:"pointer"},"Pointer"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"properties"),(0,l.kt)("th",{parentName:"tr",align:null},"usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getInitialCursorPosition")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the registered x, y coordinates the cursor had when first clicked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getCurrentCursorPosition")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns current x, y coordinates of the cursor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getPreviousCursorPosition")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns last registered x, y coordinates of the cursor (after last callback)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getInitialCursorPositionArea")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the registered x, y coordinates relative to the area the cursor had when first clicked")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getCurrentCursorPositionArea")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns current x, y coordinates of the cursor relative to the area")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getPreviousCursorPositionArea")),(0,l.kt)("td",{parentName:"tr",align:null},"/"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns last registered x, y coordinates of the cursor relative to the area (after last callback)")))),(0,l.kt)("h3",{id:"dropzones"},"DropZones"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"method"),(0,l.kt)("th",{parentName:"tr",align:null},"properties"),(0,l.kt)("th",{parentName:"tr",align:null},"usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getZoneByCoordinates")),(0,l.kt)("td",{parentName:"tr",align:null},"coordinates:{ x:number, y:number } (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the first drop target under the current mouse position, or, if provided at the coordinates.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getItemsDroppedByZoneId")),(0,l.kt)("td",{parentName:"tr",align:null},"zoneId:string"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the items dropped into a specific zone (by zone.id)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getItemsInsideByZoneId")),(0,l.kt)("td",{parentName:"tr",align:null},"zoneId:string, addClasses:boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the items that are visually inside a specific zone (by zone.id). ",(0,l.kt)("inlineCode",{parentName:"td"},"addClasses"),": also add the respective CSS classes to those elements if they don\u2019t have them yet.")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const ds = new DragSelect({});\nds.setSettings({ selectables: document.querySelectorAll('.selectable') });\nds.getSelection();\n")))}p.isMDXComponent=!0}}]);