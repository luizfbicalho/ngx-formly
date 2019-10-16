var __extends=this&&this.__extends||function(){var n=function(s,l){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var l in s)s.hasOwnProperty(l)&&(n[l]=s[l])})(s,l)};return function(s,l){function e(){this.constructor=s}n(s,l),s.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"/y6N":function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},"9s36":function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FieldArrayType } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-repeat-section\'</span>,\n  template: <span class="hljs-string">`\n    &lt;div *ngFor="let field of field.fieldGroup; let i = index;" class="row"&gt;\n      &lt;formly-field class="col" [field]="field"&gt;&lt;/formly-field&gt;\n      &lt;div class="col-sm-2 d-flex align-items-center"&gt;\n        &lt;button class="btn btn-danger" type="button" (click)="remove(i)"&gt;Remove&lt;/button&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div style="margin:30px 0;"&gt;\n      &lt;button class="btn btn-primary" type="button" (click)="add()"&gt;{{ to.addText }}&lt;/button&gt;\n    &lt;/div&gt;\n  `</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> RepeatTypeComponent <span class="hljs-keyword">extends</span> FieldArrayType {}\n'},TBXa:function(n,s,l){"use strict";l.r(s);var e=l("Mlb/"),a=l("QZuW"),t=function(){function n(){this.form=new a.FormGroup({}),this.model={investments:[{}]},this.options={},this.fields=[{key:"investments",type:"repeat",templateOptions:{addText:"Add another investment"},fieldArray:{fieldGroup:[{className:"col-sm-4",type:"input",key:"investmentName",templateOptions:{label:"Name of Investment:",required:!0}},{type:"input",key:"investmentDate",className:"col-sm-4",templateOptions:{type:"date",label:"Date of Investment:"}},{type:"input",key:"stockIdentifier",className:"col-sm-4",templateOptions:{label:"Stock Identifier:",addonRight:{class:"fa fa-code",onClick:function(n,s,l){return console.log(n,s,l)}}}}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"Repeating Section",description:"\n              This demonstrates using\n              <code>formly-form</code> inside of a custom type in order to accomplish repeating fields.\n            ",component:t,files:[{file:"app.component.html",content:l("/y6N"),filecontent:l("qpFb")},{file:"app.component.ts",content:l("oL8F"),filecontent:l("mZCT")},{file:"app.module.ts",content:l("Y2Rk"),filecontent:l("sBLl")},{file:"repeat-section.type.ts",content:l("9s36"),filecontent:l("Yfk3")}]}]},p=function(){},r=l("n91+"),m=l("aUi8"),i=l("xRU+"),c=l("l9Gt"),d=l("tb2p"),u=l("5swT"),f=l("rGUg"),y=l("qEw3"),g=l("KL5v"),h=l("WPgD"),j=l("wR1y"),b=l("Ok0y"),v=l("ItXI"),k=l("kY9M"),w=l("vk2e"),C=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return __extends(s,n),s}(l("B/Is").a),F=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function x(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,1,"formly-field",[["class","col"]],[[4,"display",null],[8,"className",0]],null,null,b.b,b.a)),e["\u0275did"](2,16760832,null,0,v.a,[k.b,e.ComponentFactoryResolver,e.Injector],{field:[0,"field"],className:[1,"className"]},null),(n()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","col-sm-2 d-flex align-items-center"]],null,null,null,null,null)),(n()(),e["\u0275eld"](4,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],(function(n,s,l){var e=!0;return"click"===s&&(e=!1!==n.component.remove(n.context.index)&&e),e}),null,null)),(n()(),e["\u0275ted"](-1,null,["Remove"]))],(function(n,s){n(s,2,0,s.context.$implicit,"col")}),(function(n,s){n(s,1,0,e["\u0275nov"](s,2).field.hide?"none":"",e["\u0275nov"](s,2).field.className?e["\u0275nov"](s,2).field.className:e["\u0275nov"](s,2).className)}))}function R(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,x)),e["\u0275did"](1,278528,null,0,w.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](2,0,null,null,2,"div",[["style","margin:30px 0;"]],null,null,null,null,null)),(n()(),e["\u0275eld"](3,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],(function(n,s,l){var e=!0;return"click"===s&&(e=!1!==n.component.add()&&e),e}),null,null)),(n()(),e["\u0275ted"](4,null,["",""]))],(function(n,s){n(s,1,0,s.component.field.fieldGroup)}),(function(n,s){n(s,4,0,s.component.to.addText)}))}var N=e["\u0275ccf"]("formly-repeat-section",C,(function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"formly-repeat-section",[],null,null,null,R,F)),e["\u0275did"](1,49152,null,0,C,[],null,null)],null,null)}),{field:"field"},{},[]),_=l("fYis"),T=l("mSm0"),M=l("g/x9"),O=l("Ea/l"),S=l("cXvR"),I=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,s,l){var a=!0,t=n.component;return"submit"===s&&(a=!1!==e["\u0275nov"](n,2).onSubmit(l)&&a),"reset"===s&&(a=!1!==e["\u0275nov"](n,2).onReset()&&a),"ngSubmit"===s&&(a=!1!==t.submit()&&a),a}),null,null)),e["\u0275did"](1,16384,null,0,a["\u0275angular_packages_forms_forms_z"],[],null,null),e["\u0275did"](2,540672,null,0,a.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,a.ControlContainer,null,[a.FormGroupDirective]),e["\u0275did"](4,16384,null,0,a.NgControlStatusGroup,[[4,a.ControlContainer]],null,null),(n()(),e["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,M.b,M.a)),e["\u0275prd"](512,null,O.a,O.a,[k.b,e.ComponentFactoryResolver,e.Injector,[2,a.FormGroupDirective]]),e["\u0275did"](7,966656,null,0,S.a,[O.a,k.b],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),e["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Submit"]))],(function(n,s){var l=s.component;n(s,2,0,l.form),n(s,7,0,l.form,l.model,l.fields,l.options)}),(function(n,s){var l=s.component;n(s,0,0,e["\u0275nov"](s,4).ngClassUntouched,e["\u0275nov"](s,4).ngClassTouched,e["\u0275nov"](s,4).ngClassPristine,e["\u0275nov"](s,4).ngClassDirty,e["\u0275nov"](s,4).ngClassValid,e["\u0275nov"](s,4).ngClassInvalid,e["\u0275nov"](s,4).ngClassPending),n(s,8,0,!l.form.valid)}))}var G=e["\u0275ccf"]("formly-app-example",t,(function(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,A,I)),e["\u0275did"](1,49152,null,0,t,[],null,null)],null,null)}),{},{},[]),D=l("o3+a"),L=l("9b0e"),B=l("6YJn"),P=l("dvHj"),U=l("C0xW"),q=l("W9sv"),Y=l("m6lo"),J=l("S6Ld"),W=l("cTZo"),K=l("Kfqh"),V=l("Ienz"),X=l("KuLc"),Z=l("Z7++"),$=l("2lML"),z=l("pgVP"),E=l("pk7F"),H=l("T8+l"),Q=l("0hby"),nn=l("tVba"),sn=l("XX7/"),ln=l("pLrJ"),en=l("U5/R"),an=l("TqxR"),tn=l("soK0"),on=l("1k+g"),pn=l("pAed"),rn=l("VtvF"),mn=l("lN7U"),cn=l("NPi3"),dn=l("PCNd"),un=l("WCiw"),fn=l("Vtge"),yn=l("+5Wd"),gn=l("+R4m"),hn=l("SSYk"),jn=l("KJU8"),bn=l("eTA3"),vn=l("o12O"),kn=l("iWYX"),wn=l("h18T"),Cn=function(){},Fn=l("qk26"),xn=l("P+xK");l.d(s,"ConfigModuleNgFactory",(function(){return Rn}));var Rn=e["\u0275cmf"](p,[],(function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,c.a,d.a,u.a,f.a,y.a,g.a,h.a,j.a,N,_.a,T.a,G]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[e.LOCALE_ID,[2,w["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,D.c,D.c,[]),e["\u0275mpd"](4608,L.c,L.c,[L.i,L.e,e.ComponentFactoryResolver,L.h,L.f,e.Injector,e.NgZone,w.DOCUMENT,B.b,[2,w.Location]]),e["\u0275mpd"](5120,L.j,L.k,[L.c]),e["\u0275mpd"](5120,P.b,P.c,[L.c]),e["\u0275mpd"](4608,U.e,q.c,[[2,q.g],[2,q.l]]),e["\u0275mpd"](5120,Y.c,Y.j,[L.c]),e["\u0275mpd"](4608,J.a,J.a,[]),e["\u0275mpd"](4608,W.a,W.a,[]),e["\u0275mpd"](4608,a.FormBuilder,a.FormBuilder,[]),e["\u0275mpd"](4608,a["\u0275angular_packages_forms_forms_o"],a["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](4608,O.a,O.a,[k.b,e.ComponentFactoryResolver,e.Injector,[2,a.FormGroupDirective]]),e["\u0275mpd"](1073742336,w.CommonModule,w.CommonModule,[]),e["\u0275mpd"](1073742336,K.b,K.b,[]),e["\u0275mpd"](1073742336,D.d,D.d,[]),e["\u0275mpd"](1073742336,V.a,V.a,[]),e["\u0275mpd"](1073742336,B.a,B.a,[]),e["\u0275mpd"](1073742336,X.g,X.g,[]),e["\u0275mpd"](1073742336,Z.ScrollingModule,Z.ScrollingModule,[]),e["\u0275mpd"](1073742336,L.g,L.g,[]),e["\u0275mpd"](1073742336,q.l,q.l,[[2,q.d],[2,U.f]]),e["\u0275mpd"](1073742336,P.e,P.e,[]),e["\u0275mpd"](1073742336,q.v,q.v,[]),e["\u0275mpd"](1073742336,$.j,$.j,[]),e["\u0275mpd"](1073742336,Y.i,Y.i,[]),e["\u0275mpd"](1073742336,Y.f,Y.f,[]),e["\u0275mpd"](1073742336,z.c,z.c,[]),e["\u0275mpd"](1073742336,E.c,E.c,[]),e["\u0275mpd"](1073742336,H.b,H.b,[]),e["\u0275mpd"](512,k.b,k.b,[]),e["\u0275mpd"](1024,k.a,(function(n){return[{wrappers:[{name:"form-field",component:Q.a}]},{types:[{name:"input",component:nn.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:sn.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:ln.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:en.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:an.a,wrappers:["form-field"]}]},{types:[{name:"select",component:tn.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:on.a}],extensions:[{name:"addons",extension:{postPopulate:pn.a}}]},rn.b(n),{types:[{name:"repeat",component:C}]}]}),[k.b]),e["\u0275mpd"](1073742336,rn.a,rn.a,[k.b,[2,k.a]]),e["\u0275mpd"](1073742336,mn.h,mn.h,[]),e["\u0275mpd"](1073742336,cn.b,cn.b,[]),e["\u0275mpd"](1073742336,dn.a,dn.a,[]),e["\u0275mpd"](1073742336,a["\u0275angular_packages_forms_forms_d"],a["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,a.ReactiveFormsModule,a.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,un.a,un.a,[]),e["\u0275mpd"](1073742336,fn.a,fn.a,[]),e["\u0275mpd"](1073742336,yn.a,yn.a,[]),e["\u0275mpd"](1073742336,gn.a,gn.a,[]),e["\u0275mpd"](1073742336,hn.a,hn.a,[]),e["\u0275mpd"](1073742336,jn.a,jn.a,[]),e["\u0275mpd"](1073742336,bn.a,bn.a,[]),e["\u0275mpd"](1073742336,vn.a,vn.a,[]),e["\u0275mpd"](1073742336,kn.a,kn.a,[]),e["\u0275mpd"](1073742336,wn.a,wn.a,[]),e["\u0275mpd"](1073742336,Cn,Cn,[]),e["\u0275mpd"](1073742336,Fn.t,Fn.t,[[2,Fn.y],[2,Fn.p]]),e["\u0275mpd"](1073742336,p,p,[]),e["\u0275mpd"](1024,Fn.n,(function(){return[[{path:"",component:xn.a,data:o}]]}),[])])}))},Y2Rk:function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-keyword">import</span> { RepeatTypeComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./repeat-section.type\'</span>;\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: <span class="hljs-string">\'repeat\'</span>, component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},Yfk3:function(n,s,l){"use strict";l.r(s),s.default='import { Component } from \'@angular/core\';\nimport { FieldArrayType } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-repeat-section\',\n  template: `\n    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">\n      <formly-field class="col" [field]="field"></formly-field>\n      <div class="col-sm-2 d-flex align-items-center">\n        <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>\n      </div>\n    </div>\n    <div style="margin:30px 0;">\n      <button class="btn btn-primary" type="button" (click)="add()">{{ to.addText }}</button>\n    </div>\n  `,\n})\nexport class RepeatTypeComponent extends FieldArrayType {}\n'},mZCT:function(n,s,l){"use strict";l.r(s),s.default="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model = {\n    investments: [{}],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'investments',\n      type: 'repeat',\n      templateOptions: {\n        addText: 'Add another investment',\n      },\n      fieldArray: {\n        fieldGroup: [\n          {\n            className: 'col-sm-4',\n            type: 'input',\n            key: 'investmentName',\n            templateOptions: {\n              label: 'Name of Investment:',\n              required: true,\n            },\n          },\n          {\n            type: 'input',\n            key: 'investmentDate',\n            className: 'col-sm-4',\n            templateOptions: {\n              type: 'date',\n              label: 'Date of Investment:',\n            },\n          },\n          {\n            type: 'input',\n            key: 'stockIdentifier',\n            className: 'col-sm-4',\n            templateOptions: {\n              label: 'Stock Identifier:',\n              addonRight: {\n                class: 'fa fa-code',\n                onClick: (to, fieldType, $event) => console.log(to, fieldType, $event),\n              },\n            },\n          },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},oL8F:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model = {\n    investments: [{}],\n  };\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'investments\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'repeat\'</span>,\n      templateOptions: {\n        addText: <span class="hljs-string">\'Add another investment\'</span>,\n      },\n      fieldArray: {\n        fieldGroup: [\n          {\n            className: <span class="hljs-string">\'col-sm-4\'</span>,\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n            key: <span class="hljs-string">\'investmentName\'</span>,\n            templateOptions: {\n              label: <span class="hljs-string">\'Name of Investment:\'</span>,\n              required: <span class="hljs-literal">true</span>,\n            },\n          },\n          {\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n            key: <span class="hljs-string">\'investmentDate\'</span>,\n            className: <span class="hljs-string">\'col-sm-4\'</span>,\n            templateOptions: {\n              <span class="hljs-keyword">type</span>: <span class="hljs-string">\'date\'</span>,\n              label: <span class="hljs-string">\'Date of Investment:\'</span>,\n            },\n          },\n          {\n            <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n            key: <span class="hljs-string">\'stockIdentifier\'</span>,\n            className: <span class="hljs-string">\'col-sm-4\'</span>,\n            templateOptions: {\n              label: <span class="hljs-string">\'Stock Identifier:\'</span>,\n              addonRight: {\n                <span class="hljs-keyword">class</span>: <span class="hljs-string">\'fa fa-code\'</span>,\n                onClick: <span class="hljs-function">(<span class="hljs-params">to, fieldType, $event</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(to, fieldType, $event),\n              },\n            },\n          },\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},qpFb:function(n,s,l){"use strict";l.r(s),s.default='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},sBLl:function(n,s,l){"use strict";l.r(s),s.default="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { RepeatTypeComponent } from './repeat-section.type';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      types: [\n        { name: 'repeat', component: RepeatTypeComponent },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    RepeatTypeComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);