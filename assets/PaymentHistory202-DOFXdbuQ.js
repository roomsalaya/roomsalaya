import{r as s,j as t,U as x,V as p,X as i,a6 as y,C as h,D as u,E as g,a4 as j,S,a7 as k}from"./index-CHxtHWiq.js";import{A as D}from"./AppMenu202-CEO7sa_F.js";const b=()=>{const[c,d]=s.useState([]),[l,n]=s.useState(!0),r=async()=>{n(!0);try{const m=(await h(u(g,"paymentProofs202"))).docs.map(o=>{const a=o.data();return{key:o.id,item:a.invoice,detail:t.jsx(t.Fragment,{children:a.imageUrl?t.jsx("img",{src:a.imageUrl,alt:"Proof",style:{maxWidth:"200px"}}):"ไม่พบภาพ"}),status:a.status}});d(m)}catch(e){console.error("Error fetching data: ",e),j.error("เกิดข้อผิดพลาดในการดึงข้อมูล")}finally{n(!1)}};s.useEffect(()=>{r()},[]);const f=[{title:"รายการที่เลือก",dataIndex:"item",key:"item"},{title:"รายละเอียด",dataIndex:"detail",key:"detail"},{title:"สถานะ",dataIndex:"status",key:"status",render:e=>t.jsx(i,{type:"default",icon:e==="pending"?t.jsx(S,{}):t.jsx(k,{}),style:{backgroundColor:e==="pending"?"#f0f9eb":"#f4f4f4",color:e==="pending"?"#52c41a":"#faad14"},children:e==="pending"?"อนุมัติชำระ":"รออนุมัติชำระ"})}];return t.jsxs("div",{className:"payment-history-container",children:[t.jsxs("h3",{children:["ประวัติแจ้งชำระค่าเช่า 202",t.jsx(D,{})]}),t.jsx(x,{direction:"vertical",size:"middle",style:{width:"100%"},children:t.jsxs(p,{title:"รายละเอียดการชำระเงิน",children:[t.jsx(i,{onClick:r,style:{marginBottom:"16px"},children:"รีเฟรช"}),t.jsx(y,{columns:f,dataSource:c,pagination:!1,loading:l})]})})]})};export{b as default};
