import{d as m,I as i,r as f,b as o,c as a,M as e,X as _,f as u,F as h,Z as v,n as k,a1 as b,p as w,i as g,e as I,l as x}from"./entry.57hJEAFd.js";const B=t=>(w("data-v-987d1b30"),t=t(),g(),t),S={key:1,class:"loaded"},C=["poster"],V=["src"],$=["src","type"],N=["autoplay","src"],E=B(()=>I("button",null,null,-1)),F=[E],P=m({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,c=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const s=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(s==null?void 0:s[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(s==null?void 0:s[1])||""}/hqdefault.jpg`}}}),p=f(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var s,l;return r.src||((l=(s=r.sources)==null?void 0:s[0])==null?void 0:l.src)||!1});return(s,l)=>{const y=b;return o(),a("div",{class:k(["video-player",{loaded:e(p)}])},[(e(c)?e(c).poster:t.poster)?(o(),_(y,{key:0,src:e(c)?e(c).poster:t.poster},null,8,["src"])):u("",!0),e(p)?(o(),a("div",S,[e(c)?e(c).name==="youtube"?(o(),a("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(c).src},null,8,N)):u("",!0):(o(),a("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(d)?(o(),a("source",{key:0,src:e(d)},null,8,V)):u("",!0),(o(!0),a(h,null,v(t.sources,n=>(o(),a("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,$))),128))],8,C))])):u("",!0),e(p)?u("",!0):(o(),a("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>p.value=!0)},F))],2)}}}),q=x(P,[["__scopeId","data-v-987d1b30"]]);export{q as default};
