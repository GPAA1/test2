(function(){"use strict";var e={7257:function(e,l,a){var n=a(5102),t=a(9269);function o(e,l){const a=(0,t.up)("router-view");return(0,t.wg)(),(0,t.j4)(a)}var u=a(7617);const r={},i=(0,u.Z)(r,[["render",o]]);var s=i,d=a(751),m={config:{},plugins:{}},c=a(2201);a(4719);const p={id:"q-app"};var v=(0,t.aZ)({__name:"StartView",setup(e){const l=(0,c.tv)(),a=window.localStorage.getItem("enter");return"enabled"==a?l.push({name:"home"}):l.push({name:"login"}),(e,l)=>((0,t.wg)(),(0,t.iD)("div",p))}});const f=v;var b=f,h=a(6237);const g="https://slonrobot.ru/api/";function _(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"recommendations/create",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}function w(){return new Promise(((e,l)=>{const a=g+"recommendations/get",n=new XMLHttpRequest;n.onload=()=>{e(JSON.parse(n.response))},n.open("GET",a,!1),n.send()}))}function y(e){return new Promise(((l,a)=>{const n=g+`recommendations/delete-bot?id=${e}`,t=new XMLHttpRequest;t.onload=()=>{l(JSON.parse(t.response))},t.open("GET",n,!1),t.send()}))}function V(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"chanel/add-channel",n=new XMLHttpRequest;n.open("POST",a,!1),n.send(l)}function k(e){return new Promise(((l,a)=>{const n=g+`recommendations/into-channel?channel=${e}`,t=new XMLHttpRequest;t.onload=()=>{l(JSON.parse(t.response))},t.open("GET",n,!1),t.send()}))}function q(e){const l=new FormData;for(const t in e)l.append(t,e[t]);const a=g+"recommendations/delete",n=new XMLHttpRequest;n.open("Delete",a,!1),n.send(l)}const W={class:"btns"};var H=(0,t.aZ)({__name:"DatePick",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:l}){const a=["утро","день","вечер"],n={"утро":"morning","день":"day","вечер":"evening"},o=(0,h.iH)(0),u=(0,h.iH)(""),r=(0,t.Fl)((()=>{const e=[];for(let l=0;l<10;l+=1){const a=new Date;a.setDate(a.getDate()+1+l+o.value),e.push(a.getDate()+"."+(a.getMonth()+1))}return e}));function i(e){if(u.value){let l=u.value.split("_");l||(l=[u.value]);const a=l.includes(e);return a?"green":"primary"}return"primary"}function s(e){if(u.value){let l=u.value.split("_");l||(l=[u.value]);const a=l.includes(e);a?(l=l.filter((l=>l!==e)),u.value=l.join("_")):u.value+="_"+e}else u.value+=e;l("update:modelValue",u.value)}return(e,l)=>{const u=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.iD)(t.HY,null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.value,(e=>((0,t.wg)(),(0,t.iD)("div",{class:"btns",key:e},[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(a,(l=>(0,t.Wm)(u,{onClick:a=>s(`${n[l]}/${e}`),class:"btn",key:`${e}-${l}`,label:`${e} (${l})`,color:i(`${n[l]}/${e}`)},null,8,["onClick","label","color"]))),64))])))),128)),(0,t._)("div",W,[(0,t.Wm)(u,{onClick:l[0]||(l[0]=e=>o.value-=10),class:"btn",color:"primary",label:"Предыдущие даты"}),(0,t.Wm)(u,{onClick:l[1]||(l[1]=e=>o.value+=10),class:"btn",color:"primary",label:"Следуйщие даты"})])],64)}}}),Z=a(570),U=a(1410),z=a.n(U);const T=(0,u.Z)(H,[["__scopeId","data-v-0d92e748"]]);var C=T;z()(H,"components",{QBtn:Z.Z});var O=(0,t.aZ)({__name:"RecommendationCreated",setup(e){const l=(0,h.iH)(""),a=(0,h.iH)(""),n=(0,h.iH)(""),o=(0,h.iH)(""),u=(0,h.iH)(""),r=(0,h.iH)(""),i=(0,h.iH)(""),s=(0,h.iH)(""),d=(0,h.iH)(""),m=(0,h.iH)(""),c=(0,h.iH)(""),p=(0,h.iH)(""),v=(0,h.iH)("");async function f(){s.value||alert("Вы не ввели даты брони"),_({username:l.value,title:a.value,link:n.value,price_standart:o.value,price_now:u.value,format:r.value,number_posts:Number(i.value),data_list:s.value,allowed_dates:s.value,requisites:d.value,deadline:m.value,info:c.value,subscribers:p.value,coverage:v.value}),b(),alert("вы создали предложение!!!")}function b(){l.value="",o.value="",u.value="",r.value="",i.value="",s.value="",d.value="",m.value="",c.value=""}return(e,h)=>{const g=(0,t.up)("q-input"),_=(0,t.up)("q-btn"),w=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(w,{"q-pa-md":"",onSubmit:f,onReset:b,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{filled:"",modelValue:a.value,"onUpdate:modelValue":h[0]||(h[0]=e=>a.value=e),label:"Заголовок канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:l.value,"onUpdate:modelValue":h[1]||(h[1]=e=>l.value=e),label:"Юзернейм канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:n.value,"onUpdate:modelValue":h[2]||(h[2]=e=>n.value=e),label:"Ссылка на канал",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:o.value,"onUpdate:modelValue":h[3]||(h[3]=e=>o.value=e),hint:"Пожалуйста хоть что-то введите",label:"Стандартная цена","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:u.value,"onUpdate:modelValue":h[4]||(h[4]=e=>u.value=e),hint:"Пожалуйста хоть что-то введите",label:"Текущая цена","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:r.value,"onUpdate:modelValue":h[5]||(h[5]=e=>r.value=e),hint:"Пожалуйста хоть что-то введите",label:"Формат размещения","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:i.value,"onUpdate:modelValue":h[6]||(h[6]=e=>i.value=e),hint:"Пожалуйста введите целое число",label:"Необходимо постов","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:v.value,"onUpdate:modelValue":h[7]||(h[7]=e=>v.value=e),hint:"Пожалуйста введите целое число",label:"Охват","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:p.value,"onUpdate:modelValue":h[8]||(h[8]=e=>p.value=e),hint:"Пожалуйста введите целое число",label:"Число подписот","lazy-rules":"",rules:[e=>e&&e.length>0&&Number.isInteger(Number(e))||"Пожалуйста введите целой блй число"]},null,8,["modelValue","rules"]),(0,t.Wm)(C,{modelValue:s.value,"onUpdate:modelValue":h[9]||(h[9]=e=>s.value=e)},null,8,["modelValue"]),(0,t.Wm)(g,{filled:"",modelValue:d.value,"onUpdate:modelValue":h[10]||(h[10]=e=>d.value=e),hint:"Пожалуйста хоть что-то введите",label:"Реквизиты","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:m.value,"onUpdate:modelValue":h[11]||(h[11]=e=>m.value=e),hint:"Пожалуйста хоть что-то введите",label:"Дедлайн оплат","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(g,{filled:"",modelValue:c.value,"onUpdate:modelValue":h[12]||(h[12]=e=>c.value=e),hint:"Пожалуйста хоть что-то введите",label:"Дополнительная информация","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(_,{label:"Создать!!",type:"submit",color:"primary"}),(0,t.Wm)(_,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})}}}),Q=a(3276),j=a(6931);const S=O;var D=S;z()(O,"components",{QForm:Q.Z,QInput:j.Z,QBtn:Z.Z});var I=a(3201);const $=["src"],N={class:"q-pa-md"},M="-1001959790816",P="6569483795:AAGXGV2Awd_fVhgy_20sjDpdfGJMaf6Ex6w";var R=(0,t.aZ)({__name:"RecommendationInto",props:{username:{}},emits:["return"],setup(e,{emit:l}){const a=e,o=(0,h.iH)(),u=(0,h.iH)(),r=(0,h.iH)(!1),i=[{name:"name",required:!0,label:"Id предложения",align:"left",field:e=>e.id,sortable:!0},{name:"chanel",align:"left",label:"Юзернейм канала войденного в опт",field:"chanel",sortable:!0},{name:"username",align:"left",label:"username пользователя",field:"username",sortable:!0},{name:"booking_date",align:"left",label:"Забронированные даты",field:"booking_date"},{name:"path_check",align:"left",label:"Чек",field:"path_check"},{name:"creatives",align:"left",label:"Посты пользователя",field:"creatives"}];async function s(e){const l=e.row.idUser,a=e.value.split("///");a.shift();const n=o.value.find((e=>e.idUser===l));await d(`__________${n.user.username}__________`);for(const t of a)if(t.includes("*")){const[e,l]=t.split("*"),[a,n]=l.split("%");"photo"===n?await m(e,a):"video"===n?await c(e,a):"animation"===n&&await p(e,a)}else await d(t);await d(`__________${n.user.username}__________`)}async function d(e){const l={chat_id:M,text:e,parse_mode:"HTML"};await fetch(`https://api.telegram.org/bot${P}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})}async function m(e,l){const a={chat_id:M,caption:e,parse_mode:"HTML",photo:l};await fetch(`https://api.telegram.org/bot${P}/sendPhoto`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}async function c(e,l){const a={chat_id:M,caption:e,parse_mode:"HTML",video:l};await fetch(`https://api.telegram.org/bot${P}/sendVideo`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}async function p(e,l){const a={chat_id:M,caption:e,parse_mode:"HTML",animation:l};await fetch(`https://api.telegram.org/bot${P}/sendAnimation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})}function v(e){u.value=e.value,r.value=!0}function f(){l("return")}return(0,t.bv)((async()=>{const e=await k(a.username);e.forEach((e=>{e.username="@"+e.user.username})),o.value=e})),(e,l)=>{const a=(0,t.up)("q-btn"),d=(0,t.up)("q-td"),m=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(n.uT,{name:"move-top"},{default:(0,t.w5)((()=>[r.value?((0,t.wg)(),(0,t.iD)("div",{key:0,onClick:l[0]||(l[0]=e=>r.value=!1),class:"popup-check"},[(0,t._)("img",{class:"img-check",src:u.value,alt:"check"},null,8,$)])):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(a,{onClick:f,unelevated:"",color:"blue",label:"<- Вернуться в список предложений"}),(0,t._)("div",N,[(0,t.Wm)(m,{flat:"",bordered:"",title:"Пользователи записавшиемся в опт",dense:"",rows:o.value,columns:i,"row-key":"name"},{"body-cell-path_check":(0,t.w5)((e=>[(0,t.Wm)(d,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>v(e),label:"Открыть чек"},null,8,["onClick"])])),_:2},1032,["props"])])),"body-cell-creatives":(0,t.w5)((e=>[(0,t.Wm)(d,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(a,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>s(e),label:"Отправить посты в админку"},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])],64)}}}),x=a(5311),L=a(7282);const F=(0,u.Z)(R,[["__scopeId","data-v-1257a4ee"]]);var J=F;z()(R,"components",{QBtn:Z.Z,QTable:x.Z,QTd:L.Z});const B={class:"q-pa-md"},E={class:"q-mt-md"};var X=(0,t.aZ)({__name:"RecommendationNow",setup(e){const l=(0,h.iH)([]),a=(0,h.iH)("recommendation-all"),n=(0,h.iH)(""),o=(0,h.iH)([]),u=(0,t.Fl)((()=>o.value.map((e=>e.id)))),r=[{name:"id",required:!0,label:"Id предложения",align:"left",field:e=>e.id,sortable:!0},{name:"username",align:"left",label:"Юзернейм",field:"username",sortable:!0},{name:"link",align:"left",label:"Ссылка на канал",field:"link",sortable:!0},{name:"title",align:"left",label:"Название канала",field:"title",sortable:!0},{name:"price_standart",align:"left",label:"Стандартная цена",field:"price_standart",sortable:!0},{name:"price_now",align:"left",label:"Текущая цена",field:"price_now"},{name:"format",align:"left",label:"Формат",field:"format"},{name:"number_posts",align:"left",label:"Число постов",field:"number_posts"},{name:"coverage",align:"left",label:"Охват",field:"coverage",sortable:!0},{name:"subscribers",align:"left",label:"Число подписчиков",field:"subscribers",sortable:!0},{name:"data_list",align:"left",label:"Даты брони",field:"data_list",sortable:!0},{name:"requisites",align:"left",label:"Ревизиты",field:"requisites",sortable:!0},{name:"deadline",align:"left",label:"Дедлайн формирования поста",field:"deadline",sortable:!0},{name:"info",align:"left",label:"Информация",field:"info",sortable:!0},{name:"actions",align:"left",label:"Удалить подборку в боте",field:"id"}];function i(){return 0===o.value.length?"":`${o.value.length} выбранных преддожений`}function s(){q(u.value),l.value=l.value.filter((e=>!u.value.includes(e.id)))}function d(e){y(e.value)}async function m(e){n.value=e,a.value="recommendation-into"}return(0,t.bv)((async()=>{l.value=await w(),console.log(l.value)})),(e,c)=>{const p=(0,t.up)("q-btn"),v=(0,t.up)("q-checkbox"),f=(0,t.up)("q-td"),b=(0,t.up)("q-tr"),h=(0,t.up)("q-table");return(0,t.wg)(),(0,t.iD)(t.HY,null,["recommendation-all"===a.value?((0,t.wg)(),(0,t.j4)(p,{key:0,onClick:s,label:"Удалить выбранные предложения",disable:0===o.value.length,color:"green"},null,8,["disable"])):(0,t.kq)("",!0),(0,t._)("div",B,["recommendation-all"===a.value?((0,t.wg)(),(0,t.j4)(h,{key:0,flat:"",bordered:"",title:"Предложения","selected-rows-label":i,selection:"multiple",selected:o.value,"onUpdate:selected":c[0]||(c[0]=e=>o.value=e),rows:l.value,columns:r,"row-key":"id"},{"body-selection":(0,t.w5)((e=>[(0,t.Wm)(b,{props:e,onClick:l=>m(e.row.username)},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{modelValue:e.selected,"onUpdate:modelValue":l=>e.selected=l},null,8,["modelValue","onUpdate:modelValue"]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.row,((l,a)=>((0,t.wg)(),(0,t.j4)(f,{key:a,props:e},{default:(0,t.w5)((()=>[(0,t.Uk)((0,I.zw)(l),1)])),_:2},1032,["props"])))),128))])),_:2},1032,["props","onClick"])])),"body-cell-actions":(0,t.w5)((e=>[(0,t.Wm)(f,{class:"actions",props:e},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{size:"sm",rounded:"",unelevated:"",color:"purple",onClick:l=>d(e),label:"Удалить подборку в боте"},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["selected","rows","columns"])):"recommendation-into"===a.value?((0,t.wg)(),(0,t.j4)(J,{key:1,onReturn:c[1]||(c[1]=e=>a.value="recommendation-all"),username:n.value},null,8,["username"])):(0,t.kq)("",!0),(0,t._)("div",E," Выбранные Id предложений: "+(0,I.zw)(u.value),1)])],64)}}}),G=a(8231),Y=a(9109);const A=(0,u.Z)(X,[["__scopeId","data-v-61fc6735"]]);var K=A;z()(X,"components",{QBtn:Z.Z,QTable:x.Z,QTr:G.Z,QCheckbox:Y.Z,QTd:L.Z});var ee=(0,t.aZ)({__name:"ChannelCreated",setup(e){const l=(0,h.iH)(""),a=(0,h.iH)(""),n=(0,h.iH)(""),o=(0,h.iH)(""),u=(0,h.iH)(""),r=(0,h.iH)(""),i=(0,h.iH)(""),s=(0,h.iH)(""),d=(0,h.iH)("");async function m(){V({category:l.value,username:a.value,title:n.value,link:o.value,participants_count:u.value,coverage:r.value,advertising_price:i.value,recommendations:s.value,communication:d.value}),c(),alert("ВЫ добавли новый канал в каталог!!!")}function c(){l.value="",a.value="",n.value="",o.value="",u.value="",r.value="",i.value="",s.value="",d.value=""}return(e,p)=>{const v=(0,t.up)("q-input"),f=(0,t.up)("q-btn"),b=(0,t.up)("q-form");return(0,t.wg)(),(0,t.j4)(b,{"q-pa-md":"",onSubmit:m,onReset:c,class:"q-gutter-md form"},{default:(0,t.w5)((()=>[(0,t.Wm)(v,{filled:"",modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=e=>l.value=e),label:"Категория канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=e=>a.value=e),label:"Юзернейм канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:n.value,"onUpdate:modelValue":p[2]||(p[2]=e=>n.value=e),label:"Название канала",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:o.value,"onUpdate:modelValue":p[3]||(p[3]=e=>o.value=e),label:"Ссылочка на канал",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:u.value,"onUpdate:modelValue":p[4]||(p[4]=e=>u.value=e),label:"Количество подписчиков",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:r.value,"onUpdate:modelValue":p[5]||(p[5]=e=>r.value=e),label:"Охват",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:i.value,"onUpdate:modelValue":p[6]||(p[6]=e=>i.value=e),label:"Цена рекламы",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:s.value,"onUpdate:modelValue":p[7]||(p[7]=e=>s.value=e),label:"Число рекомендаций",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(v,{filled:"",modelValue:d.value,"onUpdate:modelValue":p[8]||(p[8]=e=>d.value=e),label:"Контакты для связи",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(f,{label:"Создать!!",type:"submit",color:"primary"}),(0,t.Wm)(f,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})}}});const le=ee;var ae=le;z()(ee,"components",{QForm:Q.Z,QInput:j.Z,QBtn:Z.Z});const ne={id:"q-app-home",style:{"min-height":"100vh"}},te={class:"q-pa-md"};var oe=(0,t.aZ)({__name:"HomeView",setup(e){const l=(0,c.tv)(),a=(0,h.iH)("recommendation-create");async function n(){window.localStorage.setItem("enter",""),await l.push({name:"login"})}return(e,l)=>{const o=(0,t.up)("q-btn"),u=(0,t.up)("q-space"),r=(0,t.up)("q-tab"),i=(0,t.up)("q-tabs"),s=(0,t.up)("q-toolbar");return(0,t.wg)(),(0,t.iD)("div",ne,[(0,t._)("div",te,[(0,t.Wm)(s,{class:"bg-primary text-white shadow-2 rounded-borders"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{flat:"",label:"Админка"}),(0,t.Wm)(u),(0,t.Wm)(i,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),shrink:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"recommendation-create",label:"Создать Предложение"}),(0,t.Wm)(r,{name:"recommendation-now",label:"Текущие Предложения"}),(0,t.Wm)(r,{name:"channel-create",label:"Добавить канал в каталог"})])),_:1},8,["modelValue"])])),_:1})]),"recommendation-create"===a.value?((0,t.wg)(),(0,t.j4)(D,{key:0})):"recommendation-now"===a.value?((0,t.wg)(),(0,t.j4)(K,{key:1})):"channel-create"===a.value?((0,t.wg)(),(0,t.j4)(ae,{key:2})):(0,t.kq)("",!0),(0,t.Wm)(o,{onClick:n,unelevated:"",class:"exit",color:"red",label:"Выйти"})])}}}),ue=a(366),re=a(3139),ie=a(3204),se=a(5748);const de=(0,u.Z)(oe,[["__scopeId","data-v-8e55d266"]]);var me=de;z()(oe,"components",{QToolbar:ue.Z,QBtn:Z.Z,QSpace:re.Z,QTabs:ie.Z,QTab:se.Z});const ce={id:"q-app-login"},pe={class:"q-pa-md"};var ve=(0,t.aZ)({__name:"LoginView",setup(e){const l=(0,c.tv)(),a=(0,h.iH)(""),n=(0,h.iH)("");async function o(){"admin"===a.value&&"admin"===n.value&&(window.localStorage.setItem("enter","enabled"),await l.push({name:"home"}))}function u(){a.value="",n.value=""}return(e,l)=>{const r=(0,t.up)("q-input"),i=(0,t.up)("q-btn"),s=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",ce,[(0,t._)("div",pe,[(0,t.Wm)(s,{onSubmit:o,onReset:u,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{filled:"",modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e),label:"Логин",hint:"Пожалуйста хоть что-то введите","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t.Wm)(r,{filled:"",type:"password",modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=e=>n.value=e),hint:"Пожалуйста хоть что-то введите",label:"Пароль","lazy-rules":"",rules:[e=>e&&e.length>0||"Пожалуйста хоть что-то введите"]},null,8,["modelValue","rules"]),(0,t._)("div",null,[(0,t.Wm)(i,{label:"Войти????",type:"submit",color:"primary"}),(0,t.Wm)(i,{label:"Сбросить",type:"reset",color:"primary",flat:"",class:"q-ml-sm"})])])),_:1})])])}}});const fe=(0,u.Z)(ve,[["__scopeId","data-v-46ba5197"]]);var be=fe;z()(ve,"components",{QForm:Q.Z,QInput:j.Z,QBtn:Z.Z});const he=[{path:"/",component:b,name:"start",meta:{start:!0}},{path:"/home",name:"home",component:me,meta:{auth:!0}},{path:"/login",name:"login",component:be,meta:{login:!0}}],ge=(0,c.p7)({history:(0,c.PO)("/"),routes:he});ge.beforeEach((async(e,l,a)=>{const n=window.localStorage.getItem("enter");e.meta?.auth?"enabled"===n?a():a({name:"login"}):e.meta?.login?"enabled"!==n?a():a({name:"home"}):a()}));var _e=ge;(0,n.ri)(s).use(_e).use(d.Z,m).mount("#app")}},l={};function a(n){var t=l[n];if(void 0!==t)return t.exports;var o=l[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(l,n,t,o){if(!n){var u=1/0;for(d=0;d<e.length;d++){n=e[d][0],t=e[d][1],o=e[d][2];for(var r=!0,i=0;i<n.length;i++)(!1&o||u>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(r=!1,o<u&&(u=o));if(r){e.splice(d--,1);var s=t();void 0!==s&&(l=s)}}return l}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,t,o]}}(),function(){a.n=function(e){var l=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(l,{a:l}),l}}(),function(){a.d=function(e,l){for(var n in l)a.o(l,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:l[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={143:0};a.O.j=function(l){return 0===e[l]};var l=function(l,n){var t,o,u=n[0],r=n[1],i=n[2],s=0;if(u.some((function(l){return 0!==e[l]}))){for(t in r)a.o(r,t)&&(a.m[t]=r[t]);if(i)var d=i(a)}for(l&&l(n);s<u.length;s++)o=u[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self["webpackChunkbot_admin"]=self["webpackChunkbot_admin"]||[];n.forEach(l.bind(null,0)),n.push=l.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7257)}));n=a.O(n)})();
//# sourceMappingURL=app.2d06cb04.js.map