(function(){"use strict";var t={695:function(t,n,o){var e=o(751),r=o(641);const a={id:"app"};function i(t,n,o,e,i,u){const c=(0,r.g2)("TaxCalculator");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(c)])}var u=o(33);const c={id:"tax-calculator"},l={key:0};function f(t,n,o,a,i,f){return(0,r.uX)(),(0,r.CE)("div",c,[n[5]||(n[5]=(0,r.Lk)("h1",null,"Tax Calculator",-1)),(0,r.Lk)("form",{onSubmit:n[2]||(n[2]=(0,e.D$)(((...t)=>f.calculateTax&&f.calculateTax(...t)),["prevent"]))},[n[3]||(n[3]=(0,r.Lk)("label",{for:"income"},"Enter your income:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>i.formattedIncome=t),onInput:n[1]||(n[1]=(...t)=>f.formatIncome&&f.formatIncome(...t)),id:"income",required:""},null,544),[[e.Jo,i.formattedIncome]]),n[4]||(n[4]=(0,r.Lk)("button",{type:"submit"},"Calculate",-1))],32),null!==i.tax?((0,r.uX)(),(0,r.CE)("div",l,[(0,r.Lk)("h2",null,"Tax: €"+(0,u.v_)(f.formattedTax),1)])):(0,r.Q3)("",!0)])}var m={data(){return{income:null,tax:null,formattedIncome:""}},methods:{calculateTax(){const t=[{rate:.1,low:0,high:20550},{rate:.12,low:20551,high:83550},{rate:.22,low:83551,high:178150},{rate:.24,low:178151,high:340100},{rate:.32,low:340101,high:431900},{rate:.35,low:431901,high:647850},{rate:.37,low:647851,high:1/0}];let n=0;for(const o of t)if(this.income>o.low&&(n+=o.rate*(Math.min(this.income,o.high)-o.low)),this.income<=o.high)break;this.tax=n.toFixed(2)},formatIncome(){const t=this.formattedIncome.replace(/,/g,"");this.income=parseFloat(t),this.formattedIncome=(new Intl.NumberFormat).format(t)}},computed:{formattedTax(){return(new Intl.NumberFormat).format(this.tax)}}},h=o(262);const s=(0,h.A)(m,[["render",f],["__scopeId","data-v-0fb91db8"]]);var p=s,d={name:"App",components:{TaxCalculator:p}};const v=(0,h.A)(d,[["render",i]]);var b=v;(0,e.Ef)(b).mount("#app")}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(n,e,r,a){if(!e){var i=1/0;for(f=0;f<t.length;f++){e=t[f][0],r=t[f][1],a=t[f][2];for(var u=!0,c=0;c<e.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](e[c])}))?e.splice(c--,1):(u=!1,a<i&&(i=a));if(u){t.splice(f--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[e,r,a]}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,a,i=e[0],u=e[1],c=e[2],l=0;if(i.some((function(n){return 0!==t[n]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(c)var f=c(o)}for(n&&n(e);l<i.length;l++)a=i[l],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(f)},e=self["webpackChunktax_app_vue"]=self["webpackChunktax_app_vue"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[504],(function(){return o(695)}));e=o.O(e)})();
//# sourceMappingURL=app.a9ee5e88.js.map