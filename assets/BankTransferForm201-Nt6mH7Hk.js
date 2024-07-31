import{r as d,x as S,j as e,U as $,V as g,W as U,X as l,Y as M,Z as A,$ as T,a0 as E,a1 as L,a2 as B,a3 as P,a4 as o,a5 as b,C as z,D as y,E as N,A as F,N as O,O as V,P as q,Q as H,J}from"./index-CHxtHWiq.js";import{A as Q}from"./AppMenu201-bzlAm1S7.js";const W=i=>{navigator.clipboard.writeText(i).then(()=>{o.success("คัดลอกไปยังคลิปบอร์ดเรียบร้อย")}).catch(()=>{o.error("ไม่สามารถคัดลอกได้")})},X=({invoices:i,onSelect:h})=>e.jsx(b,{onClick:({key:s})=>h(s),children:i.map(s=>e.jsxs(b.Item,{children:[s.month,": ",s.total," บาท - ",s.status?"ชำระแล้ว":"รอชำระ"]},`${s.month}: ${s.total} บาท`))}),_=()=>{const[i,h]=d.useState([]),[s,w]=d.useState("เลือกใบแจ้งหนี้"),[m,p]=d.useState(null),u=d.useRef(null),x=S();d.useEffect(()=>{(async()=>{try{const t=await z(y(N,"invoices")),n=[];t.forEach(c=>{const r=c.data();n.push({id:c.id,...r})}),n.sort((c,r)=>{var j,f;return(((j=c.createdAt)==null?void 0:j.seconds)||0)-(((f=r.createdAt)==null?void 0:f.seconds)||0)}),h(n)}catch(t){console.error("เกิดข้อผิดพลาดในการดึงข้อมูลใบแจ้งหนี้: ",t)}})()},[]);const R=a=>{w(a)},I=a=>{var n;const t=(n=a.target.files)==null?void 0:n[0];if(t){const c=URL.createObjectURL(t);p(c),o.success(`ไฟล์ "${t.name}" ได้รับการเลือกแล้ว`)}},k=()=>{p(null),o.info("ลบภาพออกแล้ว")},v=()=>{var a;(a=u.current)==null||a.click()},C=async()=>{if(!m||s==="เลือกใบแจ้งหนี้"){o.error("กรุณาเลือกหลักฐานการชำระเงินและใบแจ้งหนี้");return}try{if(!F.currentUser){o.error("คุณต้องเข้าสู่ระบบก่อน");return}const t=O(V,`proofs/${Date.now()}_${Math.random()}`),c=await(await fetch(m)).blob();await q(t,c);const r=await H(t);await J(y(N,"paymentProofs"),{invoice:s,imageUrl:r,status:"รอการอนุมัติ",timestamp:new Date}),o.success("ส่งหลักฐานการชำระเงินเรียบร้อยแล้ว"),x("/paymenthistory201",{state:{selectedText:s,selectedImage:r}})}catch(a){console.error("เกิดข้อผิดพลาดในการส่งหลักฐาน: ",a),o.error("เกิดข้อผิดพลาดในการส่งหลักฐานการชำระเงิน")}},D=()=>{x("/paymenthistory201")};return e.jsxs("div",{className:"bank-container",children:[e.jsxs("h3",{children:[" แจ้งชำระค่าเช่า 201 ",e.jsx(Q,{})]}),e.jsxs($,{className:"space",direction:"vertical",size:"middle",children:[e.jsxs(g,{className:"card",title:"บัญชีสำหรับชำระหนี้",children:[e.jsxs("p",{className:"scb",children:[e.jsx("img",{src:"https://i.ibb.co/7yzngyM/scb-bank-logo.png",alt:"Bank Logo",className:"logo-image"}),"  ธนาคารไทยพาณิชย์"]}),e.jsx("p",{className:"scb",children:"ชื่อบัญชี : ธนกร แดนประเทือง"}),e.jsxs("p",{className:"bum",children:["เลขบัญชี : 403-992701-1  ",e.jsx(U,{title:"คัดลอกหมายเลขบัญชี",children:e.jsx(l,{shape:"circle",icon:e.jsx(M,{}),onClick:()=>W("4039927011"),className:"copy-button"})})]})]}),e.jsx(l,{icon:e.jsx(A,{}),onClick:D,className:"history-button","aria-label":"ดูประวัติการชำระเงิน",children:"ประวัติแจ้งชำระ"}),e.jsxs(g,{className:"card",title:"จำนวนเงินที่ต้องชำระ",children:[e.jsx(T,{overlay:e.jsx(X,{invoices:i,onSelect:R}),trigger:["click"],placement:"bottomRight",children:e.jsxs(l,{className:"dropdown-button",children:[s," ",e.jsx(E,{})]})}),e.jsx("pre",{}),e.jsx("input",{type:"file",id:"file-input",accept:"image/*",onChange:I,className:"file-input","aria-label":"เลือกไฟล์ภาพเพื่ออัปโหลด",ref:u,style:{display:"none"}}),e.jsx(l,{icon:e.jsx(L,{}),onClick:v,className:"upload-button","aria-label":"แนบรูปภาพ",children:"แนบรูปภาพ"}),e.jsx("pre",{}),m&&e.jsxs("div",{className:"image-preview",children:[e.jsx("img",{src:m,alt:"Selected",className:"image-preview-img"}),e.jsx(l,{icon:e.jsx(B,{}),onClick:k,className:"remove-image-button","aria-label":"ลบภาพที่แนบ",children:"ลบภาพ"})]}),e.jsx(l,{icon:e.jsx(P,{}),onClick:C,className:"submit-button","aria-label":"ส่งหลักฐานการชำระ",children:"กดส่งแจ้งหลักฐานการชำระ"})]})]})]})};export{_ as default};
