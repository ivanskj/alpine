import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.57hJEAFd.js";import{u as d}from"./asyncData.DTbhgYx5.js";import f from"./Ellipsis.CGCNwqkf.js";import y from"./ComponentPlaygroundData.DuobwjYZ.js";import"./TabsHeader.DI89qrnH.js";import"./ComponentPlaygroundProps.DFgHeIPE.js";import"./ProseH4.Bqs215Z-.js";import"./ProseCodeInline.DXQFZm9_.js";import"./Badge.CiPwJb0D.js";import"./MDCSlot.BBFyCjCT.js";import"./slot.DTeBMn1c.js";import"./ProseP.lvEGWZtM.js";import"./index.DDwFxNye.js";import"./ComponentPlaygroundSlots.vue.CkEzM8g5.js";import"./ComponentPlaygroundTokens.vue.BOPG2qSl.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-94dfdb3f"]]);export{V as default};
