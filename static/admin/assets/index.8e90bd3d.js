import{p as H,v as j,T as te,a as L,g as $,i as q,b as V,c as Y,d as K,s as ae,e as C,r as re,F as Q,f as ne,G as ie,N as se,h as le,R as A,j as J,k as b,u as X,l as oe,m as ce,n as me,o as ue,q as fe,t as pe,w as de}from"./vendor.7bcf450c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=i(r);fetch(r.href,a)}})();const ye=async({schema:e,optimizedDocumentNode:t})=>{const i=[],a=j(t,{OperationDefinition:c=>c.name?c:{...c,name:{kind:"Name",value:"QueryOperation"}}}),s=new te(e),l=c=>{var h;return{...c,selectionSet:{...c.selectionSet||{kind:"SelectionSet",selections:[]},selections:[...((h=c.selectionSet)==null?void 0:h.selections)||[],...ge]}}},m=(c,h)=>{let g=h;const w=[];return c.forEach(D=>{g=g[D],Array.isArray(g)||g.kind==="Field"&&w.push(g.name.value)}),w},o=(c,h,g,w,D)=>{const N=m(w,D[0]),d=E=>{var O,R;const P=[];return j(E,L(s,{Field:{enter:y=>{var _,S,F;if(s.enter(y),y.name.value!==E.name.value)if((_=y.selectionSet)!=null&&_.selections.length){const U=d(y);return P.push({name:y.name.value,alias:((S=y.alias)==null?void 0:S.value)||y.name.value,fields:U.fields}),!1}else P.push({name:y.name.value,alias:((F=y.alias)==null?void 0:F.value)||y.name.value})},leave:y=>{s.leave(y)}}})),P!=null&&P.length?{name:E.name.value,alias:((O=E.alias)==null?void 0:O.value)||E.name.value,fields:P}:{name:E.name.value,alias:((R=E.alias)==null?void 0:R.value)||E.name.value}},v=d(c),M=(E=>{if(!E)return[];const O=((y,_)=>y.reduce((S,F)=>({...S,[F[_]]:[...S[F[_]]||[],F]}),{}))(E,"alias"),R=[];return Object.entries(O).forEach(([y,_])=>{const S=[];_.forEach(x=>{var I;(I=x.fields)==null||I.forEach(ee=>S.push(ee))});const F=_[0].name,U=_[0].alias;S!=null&&S.length?R.push({name:F,alias:U,fields:S}):R.push({name:F,alias:U})}),R})(v.fields);M!=null&&M.length?i.push({name:v.name,alias:v.alias,fields:M,path:N}):i.push({name:v.name,alias:v.alias,path:N})},f={InlineFragment:{enter:c=>{s.enter(c)},leave:c=>{s.leave(c)}},Field:{enter:(c,h,g,w,D)=>{s.enter(c);const N=s.getType();if(N){const d=$(N);if(q(d)&&d.name==="Node"||V(d)&&d.getTypes().every(k=>k.getInterfaces().some(M=>M.name==="Node"))||Y(d)&&d.getInterfaces().some(v=>v.name==="Node"))return l(c)}}}},u={InlineFragment:{enter:c=>{s.enter(c)},leave:c=>{s.leave(c)}},Field:{enter:(c,h,g,w,D)=>{s.enter(c);const N=s.getType();if(N){const d=$(N);if(q(d)&&d.name==="Node"||V(d)&&d.getTypes().every(k=>k.getInterfaces().some(M=>M.name==="Node"))||Y(d)&&d.getInterfaces().some(v=>v.name==="Node"))return o(c,h,g,w,D),!1}}}},p=j(a,L(s,f));return j(p,L(s,u)),{formifiedQuery:p,blueprints:i}},be=H(`
 query Sample {
  ...on Document {
    _internalSys: _sys {
      path
    }
  }
 }`),ge=be.definitions[0].selectionSet.selections,he=K({tsTypes:{},schema:{context:{},services:{},events:{}},id:"(machine)",initial:"initializing",states:{initializing:{invoke:{src:"initializer",onDone:[{actions:["storeFormAndData","notifyParent"],target:"ready"}],onError:[{actions:"handleError",target:"error"}]}},ready:{},error:{}}},{actions:{notifyParent:ae(e=>({type:"DOCUMENT_READY",value:e.id})),handleError:(e,t)=>{console.error(t.data)},storeFormAndData:C((e,t)=>({...e,form:t.data.form,data:t.data.data}))},services:{initializer:async e=>{const i=await e.cms.api.tina.request(`query GetNode($id: String!) {
        node(id: $id) {
          ...on Document {
            _internalValues: _values
            _internalSys: _sys {
              breadcrumbs
              basename
              filename
              path
              extension
              relativePath
              title
              template
              collection {
                name
                slug
                label
                path
                format
                matches
                templates
                fields
                __typename
              }
              __typename
            }
          }
        }
      }`,{variables:{id:e.id}}),n=e.cms.api.tina.schema;if(!n)throw new Error("Schema must be provided");const r=n.getCollection(i.node._internalSys.collection.name);let a;if(r.templates?a=r.templates.find(u=>{if(typeof u=="string")throw new Error("Global templates not supported");return u.name===i.node._internalSys.template}):a=r,!a)throw new Error(`Unable to find template for node ${i.node._internalSys.path}`);const s=re({collection:r,basename:i.node._internalSys.filename,schema:n,template:a}),l=async u=>{try{const p=`#graphql
              mutation UpdateDocument($collection: String!, $relativePath: String!, $params: DocumentMutation!) {
                updateDocument(collection: $collection, relativePath: $relativePath, params: $params) {
                  __typename
                }
              }
            `;await e.cms.api.tina.request(p,{variables:{collection:i.node._internalSys.collection.name,relativePath:i.node._internalSys.relativePath,params:n.transformPayload(i.node._internalSys.collection.name,u)}}),e.cms.alerts.success("Document saved!")}catch(p){e.cms.alerts.error("There was a problem saving your document"),console.error(p)}},m={id:e.id,label:i.node._internalSys.title||i.node._internalSys.collection.label,initialValues:i.node._internalValues,fields:s.fields,onSubmit:l},o=e.formifyCallback;return{form:Ee(m,e.cms,u=>o?o(u,e.cms):u.createForm(u.formConfig),!0),data:i.node}}}}),ve=(e,t)=>({createForm:r=>new Q(r),createGlobalForm:(r,a)=>new Q({...r,global:{global:!0,...a}})}),Ee=(e,t,i,n=!1,r)=>{const{createForm:a,createGlobalForm:s}=ve(),l="SKIPPED";let m,o;const f=()=>{o=l};if(!o){if(i?m=i({formConfig:e,createForm:a,createGlobalForm:s,skip:f},t):m=a(e),!(m instanceof Q)){if(o===l)return;throw new Error("formify must return a form or skip()")}return m}},Z={id:null,data:null,selectedDocument:null,blueprints:[],documentMap:{},iframe:null},Se=K({tsTypes:{},schema:{context:{},services:{},events:{}},id:"(machine)",type:"parallel",states:{pipeline:{initial:"idle",states:{idle:{entry:"clear",on:{ADD_QUERY:{target:"initializing"},SUBDOCUMENTS:{target:"pending"},IFRAME_MOUNTED:{actions:"setIframe"}}},initializing:{invoke:{src:"initializer",onDone:[{actions:"storeInitialValues",target:"pending"}],onError:[{actions:"handleError",target:"error"}]}},waiting:{on:{DOCUMENT_READY:{target:"pending"}}},pending:{invoke:{src:"setter",onDone:[{target:"ready"}],onError:[{actions:"handleMissingDocument",target:"waiting"}]}},ready:{entry:"resolveData",invoke:{src:"onChangeCallback"},on:{NAVIGATE:{target:"idle"},REMOVE_QUERY:{target:"idle"},SELECT_DOCUMENT:{actions:"selectDocument"},FIELD_CHANGE:{target:"pending"}}},error:{}}}}},{actions:{handleError:(e,t)=>console.error(t.data),handleMissingDocument:C((e,t)=>{if(B=B+1,B>50)throw new Error("infinite loop");if(t.data instanceof z){if(e.documentMap[t.data.id]||!t.data.id)return e;const i={ref:le(he.withContext({id:t.data.id,cms:e.cms,formifyCallback:e.formifyCallback,form:null,data:null}))};return{...e,documentMap:{...e.documentMap,[t.data.id]:{...i,skipFormRegister:t.data.skipFormRegister}}}}else return console.error(t.data),e}),clear:C(e=>(e.cms.forms.all().forEach(t=>{e.cms.forms.remove(t.id)}),{...Z,formifyCallback:e.formifyCallback,cms:e.cms,iframe:e.iframe})),storeInitialValues:C((e,t)=>({...e,...t.data})),selectDocument:C((e,t)=>({...e,selectedDocument:t.value})),setIframe:C((e,t)=>({...e,iframe:t.value})),resolveData:C((e,t)=>{var i,n;return e.iframe&&((n=(i=e.iframe)==null?void 0:i.contentWindow)==null||n.postMessage({type:"updateData",id:e.id,data:t.data.data})),{...e,data:t.data.data}})},services:{setter:async e=>{const t=(n,r=[])=>{const a={};return we(n)?n:(Object.entries(n).map(([s,l])=>{if(Array.isArray(l))a[s]=l.map(m=>t(m,[...r,s]));else{const m=e.blueprints.find(o=>{var f;return((f=o.path)==null?void 0:f.join("."))===[...r,s].join(".")});m?a[s]=_e(l,m,e):a[s]=t(l,[...r,s])}}),a)};return{data:t(e.data)}},initializer:async(e,t)=>{const i=e.cms.api.tina,n=await i.getSchema(),r=H(t.value.query),a=await i.getOptimizedQuery(r);if(!a)throw new Error("Unable to optimize query");const{blueprints:s,formifiedQuery:l}=await ye({schema:n,optimizedDocumentNode:a});return{data:await e.cms.api.tina.request(ne(l),{variables:t.value.variables}),blueprints:s,id:t.value.id}},onChangeCallback:e=>(t,i)=>{const n=e.cms.api.tina.schema;Object.values(e.documentMap).forEach(r=>{var m,o,f;if(r.skipFormRegister)return;const a=(m=r.ref.getSnapshot())==null?void 0:m.context,s=(o=a==null?void 0:a.data)==null?void 0:o._internalSys.collection.name,l=n.getCollection(s||"");a!=null&&a.form&&((f=l.ui)!=null&&f.global?e.cms.plugins.add(new ie(a.form)):e.cms.forms.add(a.form))}),e.cms&&(e.cms.events.subscribe("forms:fields:onChange",()=>{t({type:"FIELD_CHANGE"})}),e.cms.events.subscribe("forms:reset",()=>{t({type:"FIELD_CHANGE"})}))}}});class z extends Error{constructor(t,i,n){super(t),this.name="QueryError",this.id=i,this.skipFormRegister=n}}let B=0;const W=typeof Symbol<"u";function we(e){const t=typeof e;return t==="string"||t==="number"||t==="boolean"||W===!0&&t==="symbol"||e==null||W===!0&&e instanceof Symbol||e instanceof String||e instanceof Number||e instanceof Boolean}const _e=(e,t,i)=>{var n,r,a,s,l;if(e!=null&&e._internalSys){const m=(n=e._internalSys)==null?void 0:n.path,o=i.documentMap[m],f=(a=(r=o==null?void 0:o.ref)==null?void 0:r.getSnapshot())==null?void 0:a.context,u=f==null?void 0:f.form;if(!u){const g=(((s=t.path)==null?void 0:s.length)||0)>2;throw new z("Unable to resolve form for initial document",m,g)}const p=(l=f.data)==null?void 0:l._internalSys;if(!p)throw new Error(`No system information found for document ${m}`);const c=u.fields,h=T({id:m,fields:c,sys:p,values:u.values,fieldsToInclude:t.fields,context:i});return{...f.data,...h}}return e},T=({id:e,fields:t,sys:i,values:n,fieldsToInclude:r,context:a})=>{const s={};return n&&(r==null||r.forEach(l=>{var o,f;const m=t.find(u=>l.name===u.name);if(m){const u=Fe({id:e,field:m,sys:i,value:n[m.name],fieldsToInclude:(f=r.find(({name:p})=>p===m.name))==null?void 0:f.fields,context:a});u&&(s[l.alias]=u)}else if(l.name==="id")s[l.alias]=e;else if(l.name==="_sys"){if(l.alias!=="_internalSys"){const u={};(o=l.fields)==null||o.forEach(p=>{u[p.alias]=i[p.name]}),s[l.alias]=u}}else l.name==="__typename"?s[l.alias]=se.dataTypeName(t[0].namespace.slice(0,t[0].namespace.length-1)):l.name==="_values"&&l.alias!=="_internalValues"&&(s[l.alias]=n)})),s},Fe=({id:e,field:t,sys:i,value:n,fieldsToInclude:r,context:a})=>{var s,l,m;switch(t.type){case"reference":if(!n)return;if(typeof n=="string"){const o=a.documentMap[n],f=(l=(s=o==null?void 0:o.ref)==null?void 0:s.getSnapshot())==null?void 0:l.context,u=f==null?void 0:f.form;if(!u)throw new z("Unable to resolve form for document",n,!0);const p=(m=f.data)==null?void 0:m._internalSys;if(!p)throw new Error(`No system information found for document ${e}`);return T({id:n,fields:u.fields,sys:p,values:u.values,fieldsToInclude:r,context:a})}throw new Error('Unexpected value for type "reference"');case"object":if(t.fields){if(typeof t.fields=="string")throw new Error("Global templates not supported");if(t.fields,t.list){if(Array.isArray(n))return n.map(o=>{if(typeof t.fields=="string")throw new Error("Global templates not supported");return T({id:e,fields:t.fields,sys:i,values:o,fieldsToInclude:r,context:a})})}else return T({id:e,fields:t.fields,sys:i,values:n,fieldsToInclude:r,context:a})}if(t.templates&&t.list)return!n||!Array.isArray(n)?void 0:n.map(o=>{let f;return Object.entries(t.templates).forEach(([u,p])=>{if(u===o._template){if(typeof p=="string")throw new Error("Global templates not supported");f=p}}),{_template:o._template,...T({id:e,fields:f.fields,sys:i,values:o,fieldsToInclude:r,context:a})}});default:return n}},De=e=>{const[t,i]=A.useState(null);return A.useEffect(()=>{e.iframeRef.current&&window.addEventListener("message",n=>{n.data.type==="open"&&i(n.data)})},[e.iframeRef.current]),J("div",{className:"tina-tailwind",children:[t&&b(Ne,{payload:t,iframeRef:e.iframeRef},t.id),b("div",{className:"h-full overflow-scroll",children:b("div",{className:"",children:b("div",{className:"col-span-5 ",children:b("div",{className:"h-screen flex flex-col",children:b("div",{className:"relative flex-1 bg-gray-300 col-span-2 overflow-scroll flex items-center justify-center",children:b("iframe",{ref:e.iframeRef,className:"h-full w-full bg-white",src:e.url})})})})})})]})},Ne=e=>{const t=X(),i=A.useMemo(()=>Se.withContext({...Z,cms:t,formifyCallback:e.formifyCallback}),[]),[n,r]=oe(i);return A.useEffect(()=>{n.matches("pipeline.ready")?t.events.dispatch({type:"forms:register",value:"complete"}):n.matches("pipeline.initializing")&&t.events.dispatch({type:"forms:register",value:"start"})},[JSON.stringify(n.value)]),A.useEffect(()=>{e.iframeRef.current&&(r({type:"IFRAME_MOUNTED",value:e.iframeRef.current}),e.payload.type==="open"&&r({type:"ADD_QUERY",value:e.payload}),window.addEventListener("message",a=>{a.data.type==="close"&&r({type:"REMOVE_QUERY"})}))},[e.iframeRef.current]),null},Me=new Object().HEAD||"main",G=ce({branch:Me,clientId:"e02174a7-4087-4351-bc95-af6ebabac0c7",token:"3eb177ea43fec7f046e0878c885c4d96997101a5",build:{outputFolder:"admin",publicFolder:"static"},media:{tina:{mediaRoot:"media",publicFolder:"static"}},schema:{collections:[{label:"Chapter",name:"materials",path:"content/courses/Property/materials",fields:[{label:"Title",name:"title",type:"string"},{label:"Link Title",name:"linktitle",type:"string"},{label:"Published",name:"published",type:"boolean"},{label:"Type",name:"type",type:"string",list:!1,options:[{value:"book",label:"Book"}]},{label:"Chapter Number",name:"weight",type:"number"},{label:"Learning Objectives",name:"objectives",type:"object",list:!0,ui:{itemProps:e=>({label:e.objective})},fields:[{label:"Objective",name:"objective",type:"string"},{label:"Explanation",name:"explanation",type:"string",ui:{component:"textarea"}}]},{label:"Introduction",name:"body",type:"string",isBody:!0,ui:{component:"textarea"}},{label:"Components",name:"components",type:"object",list:!0,templates:[{label:"Module",name:"module",ui:{itemProps:e=>({label:"Module: "+e.title})},fields:[{label:"Title",name:"title",type:"string"},{label:"File",name:"filename",type:"reference",collections:["modules"]}]},{label:"Case",name:"case",ui:{itemProps:e=>({label:"Case: "+e.title})},fields:[{label:"Title",name:"title",type:"string"},{label:"File",name:"filename",type:"reference",collections:["cases"]}]},{label:"Exercise",name:"exercise",ui:{itemProps:e=>({label:"Exercise: "+e.title})},fields:[{label:"Title",name:"title",type:"string"},{label:"File",name:"filename",type:"reference",collections:["exercises"]}]}]}]},{label:"Cases",name:"cases",path:"content/courses/Property/cases",fields:[{label:"Style of Cause",name:"style",type:"string"},{label:"Short Style",name:"short",type:"string"},{label:"Reporter",name:"reporter",type:"string"},{label:"Tags",name:"tags",type:"string",list:!0},{label:"Public Domain",name:"public",type:"boolean"},{label:"Sources",name:"sources",type:"object",list:!0,fields:[{label:"Source Name",name:"source_name",type:"string"},{label:"Source URL",name:"source_url",type:"string"},{label:"License URL",name:"license",type:"string"},{label:"Attribution",name:"attribution",type:"string"}]},{label:"Body",name:"body",type:"string",isBody:!0,ui:{component:"textarea"}}]},{label:"Modules",name:"modules",path:"content/courses/Property/modules",fields:[{label:"Title",name:"title",type:"string"},{label:"Short Title",name:"short",type:"string"},{label:"Tags",name:"tags",type:"string",list:!0},{label:"Body",name:"body",type:"string",isBody:!0,ui:{component:"textarea"}}]},{label:"Exercises",name:"exercises",path:"content/courses/Property/exercises",fields:[{label:"Title",name:"title",type:"string"},{label:"Short Title",name:"short",type:"string"},{label:"Tags",name:"tags",type:"string",list:!0},{label:"Body",name:"body",type:"string",isBody:!0,ui:{component:"textarea"}}]},{label:"Resources",name:"resources",path:"content/resources",fields:[{label:"Title",name:"title",type:"string"},{label:"Date",name:"date",type:"string"},{label:"Summary",name:"summary",type:"string"},{label:"Body",name:"body",type:"string",isBody:!0,ui:{component:"textarea"}}]}]}}),Pe=({outputFolder:e})=>(X().flags.set("tina-preview",e),null),Ce=()=>J(ue,{...G,client:{apiUrl:"https://content.tinajs.io/content/e02174a7-4087-4351-bc95-af6ebabac0c7/github/main"},children:[b(Pe,{outputFolder:G.build.outputFolder}),b(fe,{preview:De,config:G})]}),Re=()=>{const{setEdit:e}=pe();return e(!0),b("div",{children:"Going into edit mode"})};function Ae(){return b(me,{editMode:b(Ce,{}),children:b(Re,{})})}de.render(b(A.StrictMode,{children:b(Ae,{})}),document.getElementById("root"));
//# sourceMappingURL=index.8e90bd3d.js.map
