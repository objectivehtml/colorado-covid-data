(function(e){function t(t){for(var n,c,o=t[0],f=t[1],i=t[2],l=0,d=[];l<o.length;l++)c=o[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var f=s[o];0!==a[f]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/colorado-covid-data/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],f=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=f;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("explorer")],1)},r=[],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.response?s("form",{staticClass:"container mx-auto"},[s("select-field",{attrs:{name:"test",label:"County",value:e.filters.COUNTY},on:{input:e.fetch},model:{value:e.filters.COUNTY,callback:function(t){e.$set(e.filters,"COUNTY",t)},expression:"filters.COUNTY"}},[s("option",{attrs:{value:""}},[e._v(" All Counties ")]),e._l(e.extractUniqueValues(e.response,"COUNTY"),(function(t){return s("option",{key:t},[e._v(" "+e._s(t)+" ")])}))],2),e.response?s("canvas",{ref:"chart"}):e._e()],1):e._e(),e.activity?s("div",{staticClass:"absolute top-0 left-0 flex w-full h-full justify-center items-center"},[s("activity-indicator",{attrs:{type:"SquareFold"}})],1):e._e()])},o=[],f=(s("a623"),s("4de4"),s("4160"),s("a630"),s("c975"),s("d81d"),s("13d5"),s("b0c0"),s("4fad"),s("c1f9"),s("b64b"),s("d3b7"),s("ac1f"),s("6062"),s("3ca3"),s("841c"),s("159b"),s("ddb0"),s("2b3d"),s("ade3")),i=s("3835"),u=s("bc3a"),l=s.n(u),d=s("30ef"),j=s.n(d),b=s("fd9b"),p=s.n(b),h=s("e65c"),m=s("42bc"),v=(s("55a0"),s("95b2")),y="https://opendata.arcgis.com/datasets/1456d8d43486449292e5784dcd9ce4a7_0.geojson";Object(h["b"])({"square-fold":m["a"]});var g={name:"Explorer",components:{ActivityIndicator:h["a"],SelectField:v["a"]},data:function(){return{source:y,name:null,response:null,activity:!1,filters:{COUNTY:this.get("county")}}},mounted:function(){this.fetch()},methods:{extractUniqueValues:function(e,t){var s=e&&e.features.reduce((function(e,s){var n=s.properties;return e.push(n[t]),e}),[]);return Array.from(new Set(s)).sort()},contains:function(e,t){return Object.keys(t).every((function(s){return Object.keys(e).indexOf(s)>-1&&t[s]==e[s]}))},filter:function(e){var t=this,s=Object.entries(this.filters).filter((function(e){var t=Object(i["a"])(e,2),s=(t[0],t[1]);return!!s}));return e=Object.assign({},Object.fromEntries(s),e),this.response.features.filter((function(s){var n=s.properties;return t.contains(n,e)}))},dates:function(){return this.extractUniqueValues(this.response,"Date").sort()},get:function(e,t){var s=new URLSearchParams(window.location.search).get(e);return"undefined"===typeof s?t:s},fetch:function(){var e=this;this.activity=!0,l.a.get(y).then((function(t){var s=t.data;e.activity=!1,e.response=s,e.name=s.name,e.$nextTick(e.render)}))},render:function(){var e=this;console.log(JSON.stringify(this.filter({Desc_:"Total Testing Rate Per 100,000 People in Colorado by County"})));var t=this.extractUniqueValues(this.response,"Desc_"),s={"Total COVID-19 Tests Performed in Colorado by County":{Metric:"Total Tests Performed"}},n=this.dates().reduce((function(e,s){return Object.assign(e,Object(f["a"])({},s,t.reduce((function(e,t){return Object.assign(e,Object(f["a"])({},t,null))}),{})))}),{}),a=p()({count:t.length,luminosity:"bright"}),r=t.map((function(t,r){e.filter(Object.assign({Desc_:t},s[t])).forEach((function(e){var s=e.properties;n[s.Date][t]=s.Value||s.Rate}));var c=Object.entries(n).map((function(e){var s=Object(i["a"])(e,2),n=(s[0],s[1]);return n[t]}));if(c.filter((function(e){return null!==e})).length)return{fill:!1,label:t,data:c,borderColor:a[r],backgroundColor:a[r]}})).filter((function(e){return!!e}));new j.a(this.$refs.chart,{type:"line",data:{datasets:r,labels:Object.keys(n).map((function(e){var t=new Date(e);return(t.getMonth()>8?t.getMonth()+1:"0"+(t.getMonth()+1))+"/"+(t.getDate()>9?t.getDate():"0"+t.getDate())}))},options:{scales:{yAxes:[{ticks:{suggestedMin:50,suggestedMax:100}}]}}})}}},k=g,O=s("2877"),w=Object(O["a"])(k,c,o,!1,null,null,null),x=w.exports,z={name:"App",components:{Explorer:x}},_=z,C=(s("034f"),Object(O["a"])(_,a,r,!1,null,null,null)),T=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(T)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.6f7761d9.js.map