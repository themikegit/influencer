(this["webpackJsonpinsta-table"]=this["webpackJsonpinsta-table"]||[]).push([[0],{190:function(e,t,a){e.exports=a(333)},235:function(e,t){},237:function(e,t){},248:function(e,t){},250:function(e,t){},277:function(e,t){},279:function(e,t){},280:function(e,t){},286:function(e,t){},288:function(e,t){},306:function(e,t){},309:function(e,t){},325:function(e,t){},328:function(e,t){},333:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(43),o=a.n(r),c=(a(195),a(12)),u=a(15),i=Object(u.a)(),s=a(50),m=a.n(s),d=a(72),E=a(188),h=a(23),f=a(33),p=a(24),b=a.n(p),g=(a(197),b.a.initializeApp({apiKey:"AIzaSyBot6QmX6WpYoK9aeDIYvPjioZFOGzQsfA",authDomain:"websitebrief-5c999.firebaseapp.com",databaseURL:"https://websitebrief-5c999.firebaseio.com",projectId:"websitebrief-5c999",storageBucket:"websitebrief-5c999.appspot.com",messagingSenderId:"1079494919652",appId:"1:1079494919652:web:ca63b455d9e6a4344573f1"})),v=b.a.firestore(g),C=b.a,w=(a(119),Object(n.createContext)()),y=function(e){var t=Object(n.useState)(),a=Object(f.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)((function(){b.a.auth().onAuthStateChanged((function(e){o(e.email),e?console.log("user is loged"):console.log("no user loged")}))}),[]);var c=Object(n.useState)(!1),u=Object(f.a)(c,2),i=u[0],s=u[1],p=Object(n.useState)([]),g=Object(f.a)(p,2),C=g[0],y=g[1];Object(n.useEffect)((function(){var e=b.a.firestore().collection("potentialColab").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(h.a)({id:e.id},e.data())})),a=t.filter((function(e){return"accepted"===e.status}));y(i?a:t)}));return function(){return e()}}),[i]);var k=Object(n.useState)([]),O=Object(f.a)(k,2),x=O[0],j=O[1];Object(n.useEffect)((function(){var e=b.a.firestore().collection("archivedUsers").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(h.a)({id:e.id},e.data())}));j(t)}));return function(){return e()}}),[]);var L=Object(n.useState)(),S=Object(f.a)(L,2),N=S[0],D=S[1],A=Object(n.useState)(!1),I=Object(f.a)(A,2),U=I[0],F=I[1],B=Object(n.useState)(!1),P=Object(f.a)(B,2),M=P[0],z=P[1],T=Object(n.useState)(!1),W=Object(f.a)(T,2),G=W[0],H=W[1],J=function(){return H(!1)},K=Object(n.useState)({email:"",password:""}),Q=Object(f.a)(K,2),R=Q[0],X=Q[1],Y=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().signInWithEmailAndPassword(R.email,R.password).then((function(){J(),window.location.reload()}),(function(e){console.log("Error logging in: ",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement(w.Provider,{value:{data:C,handleShow:function(){return F(!0)},show:U,DeleteUser:function(e){v.collection("potentialColab").doc(e).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}))},setShow:F,handleClose:function(){return F(!1)},check:i,setCheck:s,archiveUser:function(e){var t,a=C.filter((function(t){return t.id===e}));(t=b.a.firestore().collection("archivedUsers")).add.apply(t,Object(E.a)(a)).then((function(){console.log("done!")})),v.collection("potentialColab").doc(e).delete().then((function(){console.log("Document successfully transfered!")})).catch((function(e){console.error("Error removing document: ",e)}))},archUser:x,setDark:function(){z(!M)},darkMode:M,setdarkMode:z,updateUser:function(e,t){return D(Object(h.a)(Object(h.a)({},N),{},{status:t})),console.log("object",e,t),v.collection("potentialColab").doc(e).update({status:t}).catch((function(e){console.error("Error updating document: ",e)}))},userlog:r,handleClosemod:J,handleShowmod:function(){H(!0),console.log("hello")},submitLogin:Y,showmod:G,loginval:R,setloginval:X}},e.children)},k=a(115),O=a(85),x=a(335),j=a(336),L=a(9),S=a(81),N=a(27),D=a(74),A=a(26),I=a(187);function U(){var e=Object(n.useContext)(w).handleClose;return l.a.createElement("div",null,l.a.createElement(I.a,{initialValues:{name:"",profileLink:"",interest:"",folowersNo:"",country:"",dataAdded:"",status:"",note:""},onSubmit:function(t){C.firestore().collection("potentialColab").add(Object(h.a)({},t)),e()}},(function(e){var t=e.values,a=e.handleChange,n=e.handleSubmit;return l.a.createElement(L.a,{onSubmit:n},l.a.createElement(L.a.Label,null,"Name"),l.a.createElement(L.a.Control,Object(D.a)({type:"text",name:"name",value:t.name,onChange:a},"type","text")),l.a.createElement(L.a.Label,null,"Profile link"),l.a.createElement(L.a.Control,{name:"profileLink",value:t.profileLink,onChange:a,type:"text"}),l.a.createElement(L.a.Label,null,"Interest"),l.a.createElement(L.a.Control,{name:"interest",value:t.interest,onChange:a,type:"text"}),l.a.createElement(L.a.Label,null,"Folowers NO"),l.a.createElement(L.a.Control,{name:"folowersNo",value:t.folowersNo,onChange:a,type:"text"}),l.a.createElement(L.a.Label,null,"Country"),l.a.createElement(L.a.Control,{as:"select",name:"country",value:t.country,onChange:a,type:"text"},l.a.createElement("option",null,"NL"),l.a.createElement("option",null,"BEL"),l.a.createElement("option",null,"LUX"),l.a.createElement("option",null,"POL")),l.a.createElement(L.a.Label,null,"Data added"),l.a.createElement(L.a.Control,{name:"dataAdded",value:t.dataAdded,onChange:a,type:"text"}),l.a.createElement(L.a.Label,null,"Note"),l.a.createElement(L.a.Control,{name:"note",value:t.note,onChange:a,type:"text"}),l.a.createElement(L.a.Label,null,"Status"),l.a.createElement(L.a.Control,{as:"select",name:"status",value:t.status,onChange:a,type:"text"},l.a.createElement("option",null,"waiting"),l.a.createElement("option",null,"declined"),l.a.createElement("option",null,"accepted")),l.a.createElement(A.a,{type:"submit"},"sub"))})))}function F(){var e=Object(n.useContext)(w),t=e.show,a=e.handleClose;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{show:t,onHide:a},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,"Modal heading")),l.a.createElement(N.a.Body,null,l.a.createElement(U,null))))}function B(){var e=Object(n.useContext)(w),t=e.submitLogin,a=e.loginval,r=e.setloginval;return l.a.createElement(L.a,{onSubmit:function(e){return t(e)}},l.a.createElement(L.a.Group,{controlId:"formBasicEmail"},l.a.createElement(L.a.Label,null,"Email address"),l.a.createElement(L.a.Control,{onChange:function(e){return r(Object(h.a)(Object(h.a)({},a),{},{email:e.target.value}))},type:"email",placeholder:"Enter email"}),l.a.createElement(L.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),l.a.createElement(L.a.Group,{controlId:"formBasicPassword"},l.a.createElement(L.a.Label,null,"Password"),l.a.createElement(L.a.Control,{onChange:function(e){return r(Object(h.a)(Object(h.a)({},a),{},{password:e.target.value}))},type:"password",placeholder:"Password"})))}function P(){var e=Object(n.useContext)(w),t=e.showmod,a=e.handleClosemod,r=e.submitLogin;return l.a.createElement(N.a,{show:t},l.a.createElement(N.a.Header,{closeButton:!0},l.a.createElement(N.a.Title,null,"Modal heading")),l.a.createElement(N.a.Body,null,l.a.createElement(B,null)),l.a.createElement(N.a.Footer,null,l.a.createElement(A.a,{variant:"secondary",onClick:function(){return a()}},"Close"),l.a.createElement(A.a,{variant:"primary",onClick:function(){return r()}},"Login")))}function M(e){e.history;var t=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.auth().signOut().then((function(){window.location.reload()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=Object(n.useContext)(w),r=a.handleShow,o=a.archUser,c=a.darkMode,u=(a.setdarkMode,a.setDark),i=a.userlog,s=a.handleShowmod,E=String(i);return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{bg:c?"dark":"primary",variant:c?"dark":"light"},l.a.createElement(k.a.Brand,null,l.a.createElement(S.a,{style:{color:"white",textDecoration:"none"},to:"/"}," ","InstaTable"," ")),l.a.createElement(O.a,{style:{alignItems:"center"},className:"mr-auto"},l.a.createElement(O.a.Link,{style:{color:"white",textDecoration:"none"},onClick:function(){return r()}}," ",l.a.createElement(x.a,null)," Add new"),l.a.createElement(O.a.Link,null,l.a.createElement(S.a,{style:{color:"white",textDecoration:"none"},to:"/archive"},l.a.createElement(j.a,null)," Archived(",o.length,")")),l.a.createElement(L.a.Check,{style:{color:"white"},type:"switch",onChange:function(){return u(!c)},checked:c,id:"dark-switch",label:"Dark mode"})),i?l.a.createElement(A.a,{variant:"light",onClick:function(){return t()}}," ","Logout"," "):null,i?null:l.a.createElement(A.a,{onClick:function(){return s()},variant:"light"},"Login"),i?l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.6em",marginLeft:"10px",fontWeight:"500",color:"white",backgroundColor:"#FE5B4E",borderRadius:"50px",height:"50px",width:"50px"}}," ",l.a.createElement("h3",{style:{margin:"0"}}," ",E.substring(0,1).toUpperCase()," ")," "):null),l.a.createElement(F,null),l.a.createElement(P,null))}var z=a(82);function T(){var e=Object(n.useContext)(w),t=e.archUser,a=e.darkMode;return console.log("archUser",t),l.a.createElement(l.a.Fragment,null,l.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,variant:a?"dark":"light"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Profile Link"),l.a.createElement("th",null,"Interest"),l.a.createElement("th",null,"Folowers NO"),l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Data Added"),l.a.createElement("th",null,"Note"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name)," ",l.a.createElement("td",null,e.profileLink)," ",l.a.createElement("td",null,e.interest),l.a.createElement("td",null,e.folowersNo),l.a.createElement("td",null,e.country),l.a.createElement("td",null,e.dataAdded),l.a.createElement("td",null,e.note))})))))}var W=a(337),G=a(338);function H(){var e=Object(n.useContext)(w),t=e.check,a=e.setCheck,r=e.darkMode;return l.a.createElement(L.a.Check,{style:r?{backgroundColor:"#424A4D",color:"white",padding:"1rem",paddingLeft:"3rem"}:{backgroundColor:"white",padding:"1rem",paddingLeft:"3rem",borderBottom:"1px solid #cfd3d4"},type:"switch",onChange:function(){return a(!t)},checked:t,id:"custom-switch",label:"Show only accepted"})}function J(){var e=Object(n.useContext)(w),t=e.DeleteUser,a=e.data,r=e.archiveUser,o=e.darkMode,c=e.updateUser;return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,null),l.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,variant:o?"dark":"light"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," ",l.a.createElement(W.a,null)," "),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Profile Link"),l.a.createElement("th",null,"Interest"),l.a.createElement("th",null,"Folowers NO"),l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Data Added"),l.a.createElement("th",null,"Note"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null," ",l.a.createElement(G.a,{style:"declined"===e.status?{fill:"red",width:"10px"}:"accepted"===e.status?{fill:"green",width:"10px"}:{fill:"yellow",width:"10px"}}))," ",l.a.createElement("td",null,e.name)," ",l.a.createElement("td",null," ",l.a.createElement("a",{href:e.profileLink,target:"_blank"}," ","go to Link"," ")," ")," ",l.a.createElement("td",null,e.interest),l.a.createElement("td",null,e.folowersNo),l.a.createElement("td",null,e.country),l.a.createElement("td",null,e.dataAdded),l.a.createElement("td",null,e.note),l.a.createElement("td",{style:{display:"flex"}},l.a.createElement(L.a.Control,{style:{width:"30%"},as:"select",name:"status",onChange:function(t){return c(e.id,t.target.value)},type:"text"},l.a.createElement("option",null,"waiting"),l.a.createElement("option",null,"declined"),l.a.createElement("option",null,"accepted")),l.a.createElement(A.a,{style:{margin:"0px 10px"},variant:"outline-info",size:"sm",onClick:function(){r(e.id)}},"Archive"),l.a.createElement(A.a,{variant:"outline-warning",size:"sm",onClick:function(){t(e.id)}},"Delete")))})))))}var K=a(84),Q=a.n(K);function R(){var e=Object(n.useContext)(w).data,t=Q.a.ExcelFile,a=Q.a.ExcelFile.ExcelSheet,r=Q.a.ExcelFile.ExcelColumn,o=e;return l.a.createElement(t,null,l.a.createElement(a,{data:o,name:"Employees"},l.a.createElement(r,{label:"Name",value:"name"}),l.a.createElement(r,{label:"Profile Link",value:"profileLink"}),l.a.createElement(r,{label:"Interest",value:"interest"}),l.a.createElement(r,{label:"Followers Number",value:"folowersNo"}),l.a.createElement(r,{label:"Country",value:"country"}),l.a.createElement(r,{label:"Data added",value:"dataAdded"}),l.a.createElement(r,{label:"Note",value:"note"}),l.a.createElement(r,{label:"Status",value:"status"})))}var X=function(){return l.a.createElement("div",null,l.a.createElement(y,null,l.a.createElement(c.b,{history:i},l.a.createElement(M,null),l.a.createElement(c.a,{exact:!0,path:"/login",component:B}),l.a.createElement(c.a,{exact:!0,path:"/archive",component:T}),l.a.createElement(c.a,{exact:!0,path:"/",component:J}),l.a.createElement(R,null))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.81a704e7.chunk.js.map