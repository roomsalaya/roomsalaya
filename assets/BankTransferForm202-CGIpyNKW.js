import{r as i,x as D,j as e,S as $,O as g,T as U,P as r,Q as M,U as T,V as A,W as B,X as L,Y as E,Z as P,$ as c,a0 as b,B as q,C as y,D as N,A as z,a1 as F,a2 as O,a3 as V,a4 as G,G as H}from"./index-sRwIQ2gq.js";import{A as Q}from"./AppMenu202-CoIFenOF.js";const W=l=>{navigator.clipboard.writeText(l).then(()=>{c.success("คัดลอกไปยังคลิปบอร์ด")}).catch(()=>{c.error("ไม่สามารถคัดลอกได้")})},X=({invoices:l,onSelect:h})=>e.jsx(b,{onClick:({key:s})=>h(s),children:l.map(s=>e.jsxs(b.Item,{children:[s.month,": ",s.total," บาท - ",s.status?"ชำระแล้ว":"รอชำระ"]},`${s.month}: ${s.total} บาท`))}),_=()=>{const[l,h]=i.useState([]),[s,w]=i.useState("เลือกใบแจ้งหนี้ที่จะชำระ"),[d,p]=i.useState(null),u=i.useRef(null),x=D();i.useEffect(()=>{(async()=>{try{const n=(await q(y(N,"invoices202"))).docs.map(o=>({id:o.id,...o.data()}));n.sort((o,m)=>{var j,f;return(((j=o.createdAt)==null?void 0:j.seconds)||0)-(((f=m.createdAt)==null?void 0:f.seconds)||0)}),h(n)}catch(t){console.error("เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้: ",t),c.error("เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้")}})()},[]);const R=a=>{w(a)},I=a=>{var n;const t=(n=a.target.files)==null?void 0:n[0];if(t){const o=URL.createObjectURL(t);p(o),c.success(`ไฟล์ "${t.name}" ได้รับการเลือกแล้ว`)}},k=()=>{p(null),c.info("ลบภาพออกแล้ว")},S=()=>{var a;(a=u.current)==null||a.click()},v=async()=>{if(!d||s==="เลือกใบแจ้งหนี้ที่จะชำระ"){c.error("กรุณาเลือกหลักฐานการชำระเงินและใบแจ้งหนี้ที่จะชำระ");return}try{if(!z.currentUser){c.error("คุณต้องเข้าสู่ระบบก่อน");return}const t=F(O,`proofs202/${Date.now()}_${Math.random()}`),o=await(await fetch(d)).blob();await V(t,o);const m=await G(t);await H(y(N,"paymentProofs202"),{invoice:s,imageUrl:m,status:"รอการอนุมัติ",timestamp:new Date}),c.success("ส่งหลักฐานการชำระเงินเรียบร้อยแล้ว"),x("/paymenthistory202",{state:{selectedText:s,selectedImage:m}})}catch(a){console.error("เกิดข้อผิดพลาดในการส่งหลักฐาน: ",a),c.error("เกิดข้อผิดพลาดในการส่งหลักฐานการชำระเงิน")}},C=()=>{x("/paymenthistory202")};return e.jsxs("div",{className:"bank-container",children:[e.jsxs("h3",{children:["แจ้งชำระค่าเช่า 202",e.jsx(Q,{})," "]}),e.jsxs($,{className:"space",direction:"vertical",size:"middle",children:[e.jsxs(g,{className:"card",title:"บัญชีสำหรับชำระหนี้",children:[e.jsxs("p",{className:"scb",children:[e.jsx("img",{src:"https://i.ibb.co/7yzngyM/scb-bank-logo.png",alt:"Bank Logo",className:"logo-image"}),"  ธนาคารไทยพาณิชย์"]}),e.jsx("p",{className:"scb",children:"ชื่อบัญชี : ธนกร แดนประเทือง"}),e.jsxs("p",{className:"bum",children:["เลขบัญชี : 403-992701-1  ",e.jsx(U,{title:"คัดลอกหมายเลขบัญชี",children:e.jsx(r,{shape:"circle",icon:e.jsx(M,{}),onClick:()=>W("403-992701-1"),className:"copy-button"})})]})]}),e.jsx(r,{icon:e.jsx(T,{}),onClick:C,className:"history-button","aria-label":"ดูประวัติการชำระเงิน",children:"ประวัติแจ้งชำระ"}),e.jsxs(g,{className:"card",title:"จำนวนเงินที่ต้องชำระ",children:[e.jsx(A,{overlay:e.jsx(X,{invoices:l,onSelect:R}),trigger:["click"],placement:"bottomRight",children:e.jsxs(r,{className:"dropdown-button",children:[s," ",e.jsx(B,{})]})}),e.jsx("pre",{}),e.jsx("input",{type:"file",id:"file-input",accept:"image/*",onChange:I,className:"file-input","aria-label":"เลือกไฟล์ภาพเพื่ออัปโหลด",ref:u,style:{display:"none"}}),e.jsx(r,{icon:e.jsx(L,{}),onClick:S,className:"upload-button","aria-label":"แนบรูปภาพ",children:"แนบรูปภาพ"}),e.jsx("pre",{}),d&&e.jsxs("div",{className:"image-preview",children:[e.jsx("img",{src:d,alt:"Selected",className:"image-preview-img"}),e.jsx(r,{icon:e.jsx(E,{}),onClick:k,className:"remove-image-button","aria-label":"ลบภาพที่แนบ",children:"ลบภาพ"})]}),e.jsx(r,{icon:e.jsx(P,{}),onClick:v,className:"submit-button","aria-label":"ส่งหลักฐานการชำระ",children:"กดส่งแจ้งหลักฐานการชำระ"})]})]})]})};export{_ as default};
