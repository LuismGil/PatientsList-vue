(function(t){function e(e){for(var n,c,r=e[0],o=e[1],l=e[2],f=0,u=[];f<r.length;f++)c=r[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&u.push(s[c][0]),s[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},s={app:0},i=[];function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2c79":function(t,e,a){},4660:function(t,e,a){},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("1dce"),i=a.n(s),c=a("c1df"),r=a.n(c),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("PatientsScreen")],1)},l=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"text-center m-3"},[t._v(" "+t._s(t.mainTitle)+" ")]),a("PatientsTable")],1)},f=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table text-center"},[a("thead",{staticClass:"table-primary"},[a("tr",[a("th",[t._v("Nome")]),a("th",[t._v("Data de Nascimento")]),a("th",[t._v("CPF")]),a("th",[t._v("Email")]),a("th",[a("button",{staticClass:"btn btn-succes btn-add",attrs:{type:"button"},on:{click:t.openModal}},[a("i",{staticClass:"far fa-plus-square"},[t._v(" Adicionar Paciente ")])])])])]),a("tbody",t._l(t.patients,(function(e,n){return a("tr",{key:e.cpf,staticClass:"table-tr"},[a("td",{staticClass:"p-td"},[t._v(" "+t._s(e.name)+" ")]),a("td",{staticClass:"p-td"},[t._v(" "+t._s(t.moment(e.date).format("DD-MM-YYYY"))+" ")]),a("td",{staticClass:"p-td"},[t._v(" "+t._s(e.cpf)+" ")]),a("td",{staticClass:"p-td"},[t._v(" "+t._s(e.email)+" ")]),a("td",[a("button",{staticClass:"btn",on:{click:function(e){return t.removePatient(n)}}},[a("i",{staticClass:"far fa-trash-alt"})]),a("button",{staticClass:"btn",on:{click:function(a){return t.editModal(e)}}},[a("i",{staticClass:"far fa-edit"},[t._v(" Editar")])])])])})),0)]),a("h4",{directives:[{name:"show",rawName:"v-show",value:!t.patients.length,expression:"!patients.length"}],staticClass:"text-center m-3",staticStyle:{color:"black"}},[t._v(" Não tem pacientes cadastrados ")]),a("PatientsModal",{directives:[{name:"show",rawName:"v-show",value:t.myModal,expression:"myModal"}],attrs:{"selected-patient":t.selectedPatient,"action-button":t.actionButton,"dynamic-title":t.dynamicTitle},on:{closex:t.closeMyModal}})],1)},m=[],p=(a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"model"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title"},[t._v(" "+t._s(t.dynamicTitle)+" ")]),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.close}},[a("i",{staticClass:"far fa-window-close"})])]),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"modal-input"},[a("div",{staticClass:"form-group m-2"},[a("label",{attrs:{for:"name"}},[t._v("Nome")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPatient.name,expression:"newPatient.name"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.$v.newPatient.name.$error},attrs:{name:"name",type:"text"},domProps:{value:t.newPatient.name},on:{input:function(e){e.target.composing||t.$set(t.newPatient,"name",e.target.value)}}}),t.submitted&&!t.$v.newPatient.name.required?a("div",{staticClass:"invalid-feedback"},[t._v(" O nome é obrigatório ")]):t._e()]),a("div",{staticClass:"form-group m-2"},[a("label",{attrs:{for:"date"}},[t._v("Data de Nascimento")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPatient.date,expression:"newPatient.date"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.$v.newPatient.date.$error},attrs:{name:"date",type:"date"},domProps:{value:t.newPatient.date},on:{input:function(e){e.target.composing||t.$set(t.newPatient,"date",e.target.value)}}}),t.submitted&&!t.$v.newPatient.date.required?a("div",{staticClass:"invalid-feedback"},[t._v(" A data é obrigatória ")]):t._e()]),a("div",{staticClass:"form-group m-2"},[a("label",{attrs:{for:"cpf"}},[t._v("CPF")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPatient.cpf,expression:"newPatient.cpf"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.$v.newPatient.cpf.$error},attrs:{id:"cpf-id",name:"cpf",type:"text"},domProps:{value:t.newPatient.cpf},on:{change:t.onChangeEvent,input:function(e){e.target.composing||t.$set(t.newPatient,"cpf",e.target.value)}}}),t.submitted&&t.$v.newPatient.cpf.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.newPatient.cpf.required?t._e():a("p",[t._v(" O Cpf é obrigatório ")]),t.$v.newPatient.cpf.validateCpf?t._e():a("p",[t._v(" O Cpf inserido não é válido ")]),t.$v.newPatient.cpf.notCpf?t._e():a("p",[t._v(" O Cpf inserido já existe ")])]):t._e()]),a("div",{staticClass:"form-group m-2"},[a("label",{attrs:{for:"email"}},[t._v("E-mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPatient.email,expression:"newPatient.email"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.$v.newPatient.email.$error},attrs:{name:"email",type:"email"},domProps:{value:t.newPatient.email},on:{input:function(e){e.target.composing||t.$set(t.newPatient,"email",e.target.value)}}}),t.submitted&&t.$v.newPatient.email.$error?a("div",{staticClass:"invalid-feedback"},[t.$v.newPatient.email.required?t._e():a("p",[t._v(" O Email é obrigatório ")]),t.$v.newPatient.email.email?t._e():a("p",[t._v(" O Email é inválido ")]),t.$v.newPatient.email.notEmail?t._e():a("p",[t._v(" Um usuario com esse Email já existe ")])]):t._e()])]),a("br"),a("div",{staticClass:"modal-btn",attrs:{align:"center"}},[a("input",{attrs:{type:"hidden"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.actionButton,expression:"actionButton"}],staticClass:"btn btn-success m-1",attrs:{type:"button"},domProps:{value:t.actionButton},on:{click:t.updatePatient,input:function(e){e.target.composing||(t.actionButton=e.target.value)}}}),a("button",{staticClass:"btn btn-danger m-1",on:{click:t.cancel}},[t._v(" Cancelar ")])])])])])])])])],1)}),b=[],v=(a("b64b"),a("b0c0"),a("c740"),a("b5ae")),j=(a("ac1f"),a("5319"),function(t){var e=JSON.parse(localStorage.getItem("patients")),a=e.findIndex((function(e){return e.cpf===t}));return!e[a]}),h=function(t){var e=JSON.parse(localStorage.getItem("patients")),a=e.findIndex((function(e){return e.email===t}));return!e[a]},w=function(t){var e=!1;if(14!==t.length&&11!==t.length)return e;14===t.length&&(t=t.replace(".",""),t=t.replace(".",""),t=t.replace("-",""));var a=0,n=0;if("00000000000"===t)return e;for(var s=1;s<=9;++s)a+=parseInt(t.substring(s-1,s))*(11-s);return n=10*a%11,10!=n&&11!=n||(n=0),n!=parseInt(t.substring(9,10))||(e=!0),e},P=(a("fb6a"),function(t){var e=t.replace(/[^0-9]+/g,""),a=e.length,n="".concat(e.slice(0,3),"."),s="".concat(e.slice(3,6),"."),i="".concat(e.slice(6,9),"-"),c=document.getElementById("cpf-id");if(a<4)c.value=e;else if(a>=4&&a<7){var r=n+e.slice(3);c.value=r}else if(a>=7&&a<10){var o=n+s+e.slice(6);c.value=o}else if(a>=10&&a<12){var l=n+s+i+e.slice(9);c.value=l}else if(a>=12){var d=n+s+i+e.slice(9,11);c.value=d}return c.value}),g={name:"PatiensModal",props:{selectedPatient:{type:Object,default:function(){}}},data:function(){return{patients:[],newPatient:{name:"",date:"",cpf:"",email:""},actionButton:"Adicionar",dynamicTitle:"Nuevo usuario",editPatient:!1,submitted:!1}},validations:{newPatient:{name:{required:v["required"]},date:{required:v["required"]},cpf:{required:v["required"],notCpf:j,validateCPF:w},email:{required:v["required"],email:v["email"],notEmail:h}}},watch:{selectedPatient:function(t){Object.keys(t).length&&(this.newPatient.name=t.name,this.newPatient.date=t.date,this.newPatient.cpf=t.cpf,this.newPatient.email=t.email,this.dynamicTitle="Editar usuario ".concat(t.name),this.actionButton="Salvar",this.editPatient=!0)}},created:function(){this.patients=JSON.parse(localStorage.getItem("patients"))||[]},methods:{close:function(){this.$emit("closex"),this.dynamicTitle="Nuevo usuario",this.actionButton="Adicionar",this.editPatient=!1},onChangeEvent:function(t){var e=t.target;P(e.value)},updatePatient:function(){var t=this;if(this.submitted=!0,this.$v.$touch(),!(this.$v.newPatient.$pending||this.$v.newPatient.$error||this.$v.newPatient.$invalid))if(this.editPatient){var e=this.patients.findIndex((function(e){return e.cpf===t.newPatient.cpf}));this.patients[e].name=this.newPatient.name,this.patients[e].date=this.newPatient.date,this.patients[e].cpf=this.newPatient.cpf,this.patients[e].email=this.newPatient.email,localStorage.setItem("patients",JSON.stringify(this.patients)),window.location.reload()}else this.patients.push({name:this.newPatient.name,date:this.newPatient.date,cpf:this.newPatient.cpf,email:this.newPatient.email}),localStorage.setItem("patients",JSON.stringify(this.patients)),this.newPatient.name="",this.newPatient.date="",this.newPatient.cpf="",this.newPatient.email="",window.location.reload()},cancel:function(){this.newPatient.name="",this.newPatient.date="",this.newPatient.cpf="",this.newPatient.email=""}}},y=g,_=(a("de63"),a("2877")),C=Object(_["a"])(y,p,b,!1,null,"f7f91e02",null),k=C.exports,$={name:"PatientsTable",components:{PatientsModal:k},data:function(){return{patients:[],newPatient:{name:"",date:"",cpf:"",email:""},selectedPatient:{},myModal:!1}},created:function(){this.patients=JSON.parse(localStorage.getItem("patients"))||[]},methods:{openModal:function(){this.myModal=!0},closeMyModal:function(){this.selectedPatient={},this.myModal=!1},editModal:function(t){this.selectedPatient=t,this.myModal=!0},removePatient:function(t){this.patients.splice(t,1),localStorage.setItem("patients",JSON.stringify(this.patients)),window.location.reload()}}},x=$,O=(a("fa36"),Object(_["a"])(x,u,m,!1,null,null,null)),z=O.exports,M={name:"PatientsScreen",components:{PatientsTable:z},data:function(){return{mainTitle:"Lista de Pacientes"}}},S=M,N=(a("a466"),Object(_["a"])(S,d,f,!1,null,null,null)),E=N.exports,q={name:"App",components:{PatientsScreen:E}},T=q,I=Object(_["a"])(T,o,l,!1,null,null,null),B=I.exports;n["a"].prototype.moment=r.a,n["a"].config.productionTip=!1,n["a"].use(i.a),new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"5d13":function(t,e,a){},a466:function(t,e,a){"use strict";a("5d13")},de63:function(t,e,a){"use strict";a("2c79")},fa36:function(t,e,a){"use strict";a("4660")}});
//# sourceMappingURL=app.21d1f9e2.js.map