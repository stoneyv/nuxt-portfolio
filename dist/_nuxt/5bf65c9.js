(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,14],{254:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){},props:["to","href"],data:function(){return{x:0,y:0}}},l=r(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{height:"100%"},style:"transition: 1s transform ease; transform: translateX("+t.x+"px) translateY(-"+t.y+"px);",on:{mouseout:function(e){t.x=0,t.y=0},mouseover:function(e){t.x=0,t.y=10}}},[t.to?r("NuxtLink",{attrs:{to:t.to,prefetch:""}},[t._t("default")],2):t._e(),t._v(" "),t.href?r("a",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._t("default")],2):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},255:function(t,e,r){"use strict";r.r(e);var n={props:{src:{type:String,required:!0},alt:{type:String,required:!0},type:{type:String,required:!0}},methods:{imgSrc:function(){try{return r(256)("./".concat(this.src,""))}catch(t){return null}},imgSrcFallback:function(){try{return r(257)("./".concat(this.src))}catch(t){return null}}}},l=r(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",[r("source",{staticClass:"object-fit-cover",attrs:{srcSet:t.imgSrc(),alt:t.alt,type:"image/webp"}}),t._v(" "),r("source",{staticClass:"object-fit-cover",attrs:{srcSet:t.imgSrcFallback(),alt:t.alt,type:"image/png"}}),t._v(" "),r("img",{staticClass:"object-fit-cover",attrs:{src:t.imgSrcFallback(),alt:t.alt,loading:"lazy"}})])}),[],!1,null,"39a15bec",null);e.default=component.exports},278:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},type:{type:String,default:function(){return null}}},mounted:function(){}},l=r(45),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[t.next?r("HoverableCard",{attrs:{to:"/"+t.type+"/"+t.next.slug}},[r("article",{staticClass:"card card-fullheight has-background-primary"},[t.next.img?r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-2by1"},[r("WebP",{attrs:{src:t.type+"/"+t.next.img,alt:t.next.img_alt,type:"post"}})],1)]):t._e(),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"content is-flex is-justify-content-space-evenly"},[r("div",{staticClass:"has-text-centered"},[r("p",{staticClass:"heading title is-size-6"},[t._v("Next "+t._s(t.type))]),t._v(" "),r("p",{staticClass:"has-text-weight-light title is-size-6"},[t._v("\n                "+t._s(t.next.title)+"\n              ")])])])])])]):t._e()],1),t._v(" "),r("div",{staticClass:"column"},[t.prev?r("HoverableCard",{attrs:{to:"/"+t.type+"/"+t.prev.slug}},[r("article",{staticClass:"card card-fullheight has-background-primary"},[t.prev.img?r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-2by1"},[r("WebP",{attrs:{src:t.type+"/"+t.prev.img,alt:t.prev.img_alt,type:"post"}})],1)]):t._e(),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"content is-flex is-justify-content-space-evenly"},[r("div",{staticClass:"has-text-centered"},[r("p",{staticClass:"heading title is-size-6"},[t._v("Previous "+t._s(t.type))]),t._v(" "),r("p",{staticClass:"has-text-weight-light title is-size-6"},[t._v("\n                "+t._s(t.prev.title)+"\n              ")])])])])])]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebP:r(255).default,HoverableCard:r(254).default})}}]);