import{_ as t}from"./preload-helper-41c905a7.js";const s=(r,e)=>{const o=r[e];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((i,_)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(_.bind(null,new Error("Unknown variable dynamic import: "+e)))})};async function n({params:r}){const e=await s(Object.assign({"../../../lib/posts/1.svx":()=>t(()=>import("./1-e758f98b.js"),["./1-e758f98b.js","./index-aca39e59.js"],import.meta.url),"../../../lib/posts/2.svx":()=>t(()=>import("./2-56db895e.js"),["./2-56db895e.js","./index-aca39e59.js","../assets/2-c12348e4.css"],import.meta.url),"../../../lib/posts/3.svx":()=>t(()=>import("./3-5e80d6c4.js"),["./3-5e80d6c4.js","./index-aca39e59.js"],import.meta.url),"../../../lib/posts/test.svx":()=>t(()=>import("./test-c245c8ab.js"),["./test-c245c8ab.js","./index-aca39e59.js"],import.meta.url),"../../../lib/posts/tester.svx":()=>t(()=>import("./tester-37ff2485.js"),["./tester-37ff2485.js","./index-aca39e59.js"],import.meta.url),"../../../lib/posts/tue_10_jan.svx":()=>t(()=>import("./tue_10_jan-a1bfead1.js"),["./tue_10_jan-a1bfead1.js","./index-aca39e59.js"],import.meta.url),"../../../lib/posts/tuesday_morning_10_jan.svx":()=>t(()=>import("./tuesday_morning_10_jan-2f3186f5.js"),["./tuesday_morning_10_jan-2f3186f5.js","./index-aca39e59.js"],import.meta.url)}),`../../../lib/posts/${r.path}.svx`),{title:o,date:i}=e.metadata;return{content:e.default,title:o,date:i}}const m=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{m as _,n as l};