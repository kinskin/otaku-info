(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"236f":function(e,t,n){},"252f":function(e,t,n){"use strict";var a=n("30f4"),r=n.n(a);r.a},"30f4":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},"4a52":function(e,t,n){"use strict";var a=n("e5a2"),r=n.n(a);r.a},"4dcc":function(e,t,n){"use strict";var a=n("539b"),r=n.n(a);r.a},"539b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid"},[n("Header"),n("router-view")],1)])},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header mt-4"},[n("div",{staticClass:"d-flex flex-row"},[n("div",{staticClass:"align-self-center"},[n("h1",{staticClass:"m-0 h3",staticStyle:{"font-family":"'Alata', sans-serif"},style:{cursor:"pointer"},on:{click:function(t){return t.preventDefault(),e.homePageRedirect(t)}}},[e._v(" OTAKU-INFO ")])]),e._l(e.routes,(function(t,a){return n("div",{key:a,staticClass:"align-self-end"},[n("router-link",{attrs:{to:t.path}},[t.path===e.pathname?n("div",{attrs:{name:t.path},on:{click:e.toggle}},[n("strong",{staticClass:"h4 mx-3 _nav font-weight-bold text-warning",attrs:{id:t.path}},[e._v(" "+e._s(t.name)+" ")])]):n("div",[n("span",{staticClass:"h4 mx-3 _nav",attrs:{id:t.path},on:{click:e.toggle}},[e._v(" "+e._s(t.name)+" ")])])])],1)}))],2)])},o=[],c=(n("99af"),n("4de4"),n("b0c0"),n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex flex-row mt-5 mb-4"},[n("div",{staticClass:"align-self-center"},[n("h1",{staticClass:"m-0 h3",staticStyle:{"font-family":"'Alata', sans-serif"},style:{cursor:"pointer"}},[e._v(" Top Anime ")])])]),n("div",{style:{overflowX:"scroll"}},[n("div",{staticClass:"d-flex flex-row"},e._l(e.animes,(function(e){return n("div",{key:e.mal_id,staticClass:"anime"},[n("MapCard",{attrs:{data:e}})],1)})),0)]),n("div",{staticClass:"d-flex flex-row mt-3"},[n("div",{staticClass:"align-self-center"},[n("h1",{staticClass:"m-0 h3",staticStyle:{"font-family":"'Alata', sans-serif"},style:{cursor:"pointer"}},[e._v(" Top Manga ")])])]),n("div",{style:{overflowX:"scroll"}},[n("div",{staticClass:"d-flex flex-row"},e._l(e.mangas,(function(e){return n("div",{key:e.mal_id,staticClass:"anime"},[n("MapCard",{attrs:{data:e}})],1)})),0)])])},m=[],l=(n("fb6a"),n("5530")),d=n("2f62"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{width:"18em",height:"35vh",position:"relative",cursor:"pointer"},on:{click:function(t){return t.preventDefault(),e.showAnimePage(e.data.type,e.data.mal_id)}}},[n("div",{style:{width:"100%",height:"100%",backgroundColor:"black",color:"white"},on:{mouseover:function(t){t.preventDefault(),!e.hoverImg&&(e.hoverImg=!e.hoverImg)},mouseleave:function(t){t.preventDefault(),e.hoverImg&&(e.hoverImg=!e.hoverImg)}}},[n("div",{style:e.hoverImg?e.hoverImgAtt:e.nonHoverImgAtt,attrs:{id:e.data.mal_id}}),e.hoverImg?n("div",{style:{width:"75%",position:"absolute",top:"50%",left:"50%",margin:0,transform:"translate(-50%, -50%)"}},[n("div",{style:{textAlign:"center"}},[e.data.rank?n("div",{staticClass:"py-3",style:{fontWeight:"bold",fontSize:"30px"}},[e._v(" "+e._s(e.data.rank)+" ")]):e._e(),n("div",{staticClass:"my-3"},[n("p",{style:{fontWeight:"bold",fontSize:"20px"}},[e._v(" "+e._s(e.data.title)+" ")])]),e._m(0)])]):e._e()])])},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{staticClass:"btn btn-md btn-danger my-3"},[e._v("Details")])])}],g=n("c1df"),h=n.n(g),v={name:"SummaryCard",props:["data"],data:function(){return{hoverImg:!1,hoverImgAtt:{height:"100%",width:"100%",backgroundImage:"url(".concat(this.data.image_url,")"),backgroundSize:"cover",backgroundPosition:"center",opacity:"0.3",transition:"0.3s"},nonHoverImgAtt:{height:"100%",width:"100%",backgroundImage:"url(".concat(this.data.image_url,")"),backgroundSize:"cover",backgroundPosition:"center"}}},methods:{dateTime:function(e){return h()(e).format("DD-MMM-YYYY")},showAnimePage:function(e,t){e=e.toLowerCase(),"manga"!==e&&(e="anime"),this.$router.push("/data/".concat(e,"/").concat(t))},toggleHover:function(){this.hoverImg=!this.hoverImg}}},b=v,j=(n("f4b3"),n("2877")),w=Object(j["a"])(b,f,p,!1,null,"27aabb02",null),_=w.exports,y={name:"Home",computed:Object(d["c"])(["topAnimes","topMangas"]),components:{MapCard:_},data:function(){return{animes:this.topAnimes,mangas:null}},methods:Object(l["a"])({},Object(d["b"])(["fetchTopAnimes","fetchTopMangas"])),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.topAnimes&&0!==e.topAnimes.length){t.next=4;break}return t.next=3,e.fetchTopAnimes();case 3:e.animes=e.topAnimes?e.topAnimes.length>20?e.topAnimes.slice(0,20):e.topAnimes:null;case 4:if(e.topMangas&&0!==e.topMangas.length){t.next=8;break}return t.next=7,e.fetchTopMangas();case 7:e.mangas=e.topMangas?e.topMangas.length>20?e.topMangas.slice(0,20):e.topMangas:null;case 8:case"end":return t.stop()}}),t)})))()},mounted:function(){this.animes=this.topAnimes?this.topAnimes.length>20?this.topAnimes.slice(0,20):this.topAnimes:null,this.mangas=this.topMangas?this.topMangas.length>20?this.topMangas.slice(0,20):this.topMangas:null}},M=y,x=(n("4dcc"),Object(j["a"])(M,u,m,!1,null,"90713ece",null)),A=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex flex-row justify-content-center mt-5 mb-4"},[n("div",{staticClass:"mx-3"},[n("button",{class:e.top?e.topActive:e.topInactive,attrs:{id:"top",name:"top"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v(" Top Anime ")])]),n("div",{staticClass:"mx-3"},[n("button",{class:e.upcoming?e.upcomingActive:e.upcomingInactive,attrs:{id:"upcoming",name:"upcoming"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v(" Upcoming Anime ")])]),n("div",{staticClass:"mx-3"},[n("button",{class:e.genre?e.genreActive:e.genreInactive,attrs:{id:"genre",name:"genre"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v(" Genre ")])])]),n("b-row",{staticClass:"mt-2"},[e.top?n("div",{style:{width:"100%"}},[n("div",{style:{overflowY:"scroll",height:"85vh"}},[n("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.topAnimes,(function(e){return n("div",{key:e.mal_id,staticClass:"anime"},[n("MapCard",{attrs:{data:e}})],1)})),0),n("div",{staticClass:"my-3 py-3 offset-5 col-2 offset-5 font-weight-bold",style:{cursor:"pointer"},on:{click:e._loadMoreTopAnime}},[e._v(" Load More ")])])]):e._e(),e.upcoming?n("div",{style:{width:"100%"}},[n("div",{style:{overflowY:"scroll",height:"85vh"}},[n("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.upcomingAnimes,(function(e){return n("div",{key:e.mal_id,staticClass:"anime"},[n("MapCard",{attrs:{data:e}})],1)})),0)])]):e._e(),e.genre?n("div",{style:{width:"100%"}},[n("div",{staticClass:"form-group offset-4 col-4 offset-4 my-3"},[n("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1",defaultValue:e.genres[0].id},on:{change:e.getGenre}},[n("option",[e._v("Select Genres")]),e._l(e.genres,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),e.genreAnimes?n("div",[n("div",{style:{overflowY:"scroll",height:"85vh"}},[n("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.genreAnimes,(function(e,t){return n("div",{key:t,staticClass:"anime"},[n("MapCard",{attrs:{data:e}})],1)})),0),n("div",{staticClass:"my-3 py-3 offset-5 col-2 offset-5 font-weight-bold",style:{cursor:"pointer"},on:{click:e._loadMoreGenreAnime}},[e._v(" Load More ")])])]):e._e()]):e._e()])],1)},C=[],O=[{id:1,name:"Action"},{id:2,name:"Adventure"},{id:3,name:"Cars"},{id:4,name:"Comedy"},{id:5,name:"Dementia"},{id:6,name:"Demons"},{id:7,name:"Mystery"},{id:8,name:"Drama"},{id:9,name:"Ecchi"},{id:10,name:"Fantasy"},{id:11,name:"Game"},{id:12,name:"Hentai"},{id:13,name:"Historical"},{id:14,name:"Horror"},{id:15,name:"Kids"},{id:16,name:"Magic"},{id:17,name:"Martial Arts"},{id:18,name:"Mecha"},{id:19,name:"Music"},{id:20,name:"Parody"},{id:21,name:"Samurai"},{id:22,name:"Romance"},{id:23,name:"School"},{id:24,name:"Sci-Fi"},{id:25,name:"Shoujo"},{id:26,name:"Shoujo Ai"},{id:27,name:"Shounen"},{id:28,name:"Shounen Ai"},{id:29,name:"Space"},{id:30,name:"Sports"},{id:31,name:"SuperPower"},{id:32,name:"Vampire"},{id:33,name:"Yaoi"},{id:34,name:"Yuri"},{id:35,name:"Harem"},{id:36,name:"Slice of Life"},{id:37,name:"Supernatural"},{id:38,name:"Military"},{id:39,name:"Police"},{id:40,name:"Psychological"},{id:41,name:"Thriller"},{id:42,name:"Seinen"},{id:43,name:"Josei"}],S=O,P={name:"Anime",data:function(){return{top:!1,topActive:"btn btn-md btn-danger",topInactive:"btn btn-md btn-outline-danger",upcoming:!1,upcomingActive:"btn btn-md btn-danger",upcomingInactive:"btn btn-md btn-outline-danger",genre:!1,genreActive:"btn btn-md btn-danger",genreInactive:"btn btn-md btn-outline-danger",genres:S,genreId:null,windowSize:window.innerHeight}},components:{MapCard:_},methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["fetchTopAnimes","fetchUpcomingAnimes","loadMoreTopAnimes","fetchGenreAnimes","loadMoreGenreAnimes"])),{},{_loadMoreTopAnime:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadMoreTopAnimes();case 2:e.fetchTopAnimes();case 3:case"end":return t.stop()}}),t)})))()},toggle:function(e){var t=e.target.id;switch(t){case"top":this.top=!0,this.upcoming=!1,this.genre=!1;break;case"upcoming":this.top=!1,this.upcoming=!0,this.genre=!1;break;case"genre":this.top=!1,this.upcoming=!1,this.genre=!0;break;default:return}},getGenre:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.genreId=e.target.value,n.next=3,t.fetchGenreAnimes(e.target.value);case 3:case"end":return n.stop()}}),n)})))()},_loadMoreGenreAnime:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadMoreGenreAnimes();case 2:e.fetchGenreAnimes(e.genreId);case 3:case"end":return t.stop()}}),t)})))()}}),computed:Object(d["c"])(["topAnimes","upcomingAnimes","genreAnimes"]),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.topAnimes&&0!==e.topAnimes.length){t.next=3;break}return t.next=3,e.fetchTopAnimes();case 3:e.fetchUpcomingAnimes();case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){this.top=!0}},R=P,T=(n("fa59"),Object(j["a"])(R,k,C,!1,null,"5ba8758b",null)),I=T.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex flex-row justify-content-center mt-5 mb-4"},[n("div",{staticClass:"mx-3"},[n("button",{class:e.top?e.topActive:e.topInactive,attrs:{id:"top",name:"top"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v(" Top Manga ")])]),n("div",{staticClass:"mx-3"},[n("button",{class:e.genre?e.genreActive:e.genreInactive,attrs:{id:"genre",name:"genre"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e._v(" Genre ")])])]),n("b-row",{staticClass:"mt-3"},[e.top?n("div",{style:{width:"100%"}},[n("div",{style:{overflowY:"scroll",height:"85vh"}},[n("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.topMangas,(function(e){return n("div",{key:e.mal_id,staticClass:"anime"},[n("MapCard",{attrs:{data:e}})],1)})),0),n("div",{staticClass:"my-3 py-3 offset-5 col-2 offset-5 font-weight-bold",style:{cursor:"pointer"},on:{click:e._loadMoreTopManga}},[e._v(" Load More ")])])]):e._e(),e.genre?n("div",{style:{width:"100%"}},[n("div",{staticClass:"form-group offset-4 col-4 offset-4 my-3"},[n("select",{staticClass:"form-control",attrs:{id:"exampleFormControlSelect1",defaultValue:e.genres[0].id},on:{change:e.getGenre}},[n("option",[e._v("Select Genres")]),e._l(e.genres,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])}))],2)]),e.genreMangas?n("div",[n("div",{style:{overflowY:"scroll",height:"85vh"}},[n("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.genreMangas,(function(e,t){return n("div",{key:t,staticClass:"anime"},[n("MapCard",{attrs:{data:e}})],1)})),0),n("div",{staticClass:"my-3 py-3 offset-5 col-2 offset-5 font-weight-bold",style:{cursor:"pointer"},on:{click:e._loadMoreGenreManga}},[e._v(" Load More ")])])]):e._e()]):e._e()])],1)},D=[],z=[{id:1,name:"Action"},{id:2,name:"Adventure"},{id:3,name:"Cars"},{id:4,name:"Comedy"},{id:5,name:"Dementia"},{id:6,name:"Demons"},{id:7,name:"Mystery"},{id:8,name:"Drama"},{id:9,name:"Ecchi"},{id:10,name:"Fantasy"},{id:11,name:"Game"},{id:12,name:"Hentai"},{id:13,name:"Historical"},{id:14,name:"Horror"},{id:15,name:"Kids"},{id:16,name:"Magic"},{id:17,name:"Martial Arts"},{id:18,name:"Mecha"},{id:19,name:"Music"},{id:20,name:"Parody"},{id:21,name:"Samurai"},{id:22,name:"Romance"},{id:23,name:"School"},{id:24,name:"Sci-Fi"},{id:25,name:"Shoujo"},{id:26,name:"Shoujo Ai"},{id:27,name:"Shounen"},{id:28,name:"Shounen Ai"},{id:29,name:"Space"},{id:30,name:"Sports"},{id:31,name:"SuperPower"},{id:32,name:"Vampire"},{id:33,name:"Yaoi"},{id:34,name:"Yuri"},{id:35,name:"Harem"},{id:36,name:"Slice of Life"},{id:37,name:"Supernatural"},{id:38,name:"Military"},{id:39,name:"Police"},{id:40,name:"Psychological"},{id:41,name:"Seinen"},{id:42,name:"Josei"},{id:43,name:"Doujinshi"},{id:44,name:"Gender Bender"},{id:45,name:"Thriller"}],$=z,H={name:"Manga",components:{MapCard:_},data:function(){return{top:!1,topActive:"btn btn-md btn-danger",topInactive:"btn btn-md btn-outline-danger",genre:!1,genreActive:"btn btn-md btn-danger",genreInactive:"btn btn-md btn-outline-danger",genres:$,genreId:null,windowSize:window.innerHeight}},methods:Object(l["a"])(Object(l["a"])({toggle:function(e){var t=e.target.id;switch(t){case"top":this.top=!0,this.genre=!1;break;case"genre":this.top=!1,this.genre=!0;break;default:return}}},Object(d["b"])(["fetchTopMangas","loadMoreTopMangas","fetchGenreMangas","loadMoreGenreMangas"])),{},{_loadMoreTopManga:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadMoreTopMangas();case 2:e.fetchTopMangas();case 3:case"end":return t.stop()}}),t)})))()},getGenre:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.genreId=e.target.value,n.next=3,t.fetchGenreMangas(e.target.value);case 3:case"end":return n.stop()}}),n)})))()},_loadMoreGenreManga:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadMoreGenreMangas();case 2:e.fetchGenreMangas(e.genreId);case 3:case"end":return t.stop()}}),t)})))()}}),computed:Object(d["c"])(["topMangas","upcomingMangas","genreMangas"]),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.topMangas&&0!==e.topMangas.length){t.next=3;break}return t.next=3,e.fetchTopMangas();case 3:case"end":return t.stop()}}),t)})))()},mounted:function(){this.top=!0}},E=H,U=(n("4a52"),Object(j["a"])(E,G,D,!1,null,"5e79ee59",null)),Y=U.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"d-flex flex-row justify-content-center mt-5 mb-4"},[n("SelectInput2",{attrs:{optionsData:e.selectField,defaultData:e.data},on:{"form-data":e.searchData}})],1),n("b-row",{staticClass:"mt-2"},[e.searched?n("div",{style:{width:"100%"}},[n("div",{staticClass:"d-flex flex-wrap justify-content-center"},e._l(e.searched,(function(e,t){return n("div",{key:t},[n("MapCard",{staticClass:"m-3",attrs:{data:e}})],1)})),0),n("div",{staticClass:"my-3 py-3 offset-5 col-2 offset-5 font-weight-bold",style:{cursor:"pointer"},on:{click:e._loadMoreSearches}},[e._v(" Load More ")])]):e._e()])],1)},L=[],V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form",{attrs:{inline:""},on:{submit:function(t){return t.preventDefault(),e.formSubmit(t)}}},[n("b-form-group",[n("select",{staticClass:"form-control ",attrs:{defaultValue:e.defaultData?e.defaultData.option:""},on:{change:function(t){return e.handleChange(t)}}},[n("option",{attrs:{selected:"",disabled:"",value:""}},[e._v("Please select one")]),e._l(e.options,(function(t,a){return n("option",{key:a,domProps:{value:t.name.toLowerCase()}},[e._v(e._s(t.name))])}))],2)]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],staticClass:"form-control mx-2 px-2",attrs:{name:"input",type:"text",placeholder:"Search",defaultValue:e.defaultData?e.defaultData.input:null},domProps:{value:e.input},on:{blur:function(t){e.toggleSearchShow&&e.toggleSearchShow},input:function(t){t.target.composing||(e.input=t.target.value)}}}),n("input",{staticClass:"btn btn-md btn-outline-warning mx-2",attrs:{type:"submit",value:"Search"}})],1)},J=[],N={name:"SelectInput",props:["optionsData","toggleSearchShow","defaultData"],data:function(){return{options:this.optionsData,input:null,option:null}},methods:{formSubmit:function(){var e={input:this.input,option:this.option};this.$emit("form-data",e)},handleChange:function(e){this.option=e.target.value}}},q=N,K=Object(j["a"])(q,V,J,!1,null,"2bfa230f",null),W=K.exports,X={name:"Search",components:{SelectInput2:W,MapCard:_},data:function(){return{type:this.$route.params.type,input:this.$route.params.input,data:null,selectField:te.filter((function(e){return"Anime"===e.name||"Manga"===e.name}))}},methods:Object(l["a"])(Object(l["a"])({},Object(d["b"])(["fetchSearch","loadMoreSearches"])),{},{searchData:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.data=e,t.$router.push("/search?type=".concat(e.option,"&input=").concat(e.input)),n.next=4,t.fetchSearch(e);case 4:case"end":return n.stop()}}),n)})))()},_loadMoreSearches:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadMoreSearches();case 2:e.fetchSearch(e.data);case 3:case"end":return t.stop()}}),t)})))()}}),computed:Object(d["c"])(["searched"])},B=X,Q=Object(j["a"])(B,F,L,!1,null,"0b82ed2e",null),Z=Q.exports,ee=[{path:"/",name:"Home",component:A},{path:"/anime",name:"Anime",component:I},{path:"/manga",name:"Manga",component:Y},{path:"/search",name:"Search",component:Z}],te=ee,ne={name:"Header",data:function(){return{routes:te,selectField:te.filter((function(e){return"Anime"===e.name||"Manga"===e.name})),pathname:null,searchShow:!1}},components:{},methods:{homePageRedirect:function(){this.$router.push("/")},toggle:function(e){this.pathname=e.target.id},toggleSearchShow:function(){this.searchShow=!this.searchShow},searchData:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.data=e,t.$router.push("/search?type=".concat(e.option,"&input=").concat(e.input));case 2:case"end":return n.stop()}}),n)})))()}},created:function(){this.pathname=window.location.pathname},mounted:function(){this.pathname=window.location.pathname}},ae=ne,re=(n("252f"),Object(j["a"])(ae,i,o,!1,null,"5ef4c2cb",null)),se=re.exports,ie=n("5f5b"),oe=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(ie["a"]),a["default"].use(oe["a"]);var ce={name:"App",components:{Header:se}},ue=ce,me=(n("034f"),Object(j["a"])(ue,r,s,!1,null,null,null)),le=me.exports,de=n("2909"),fe=n("8c4f"),pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["anime"===e.type&&e.data?n("div",{staticClass:"text-left mt-5 mb-4"},[n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{sm:"12",lg:"4"}},[n("div",{staticClass:"text-center"},[n("img",{attrs:{src:e.data.image_url,width:"60%"}})])]),n("b-col",{attrs:{sm:"12",lg:"8"}},[n("h1",[e._v(e._s(e.data.title)+" ("+e._s(e.data.premiered)+")")]),n("p",{staticClass:"lead"},[e._v("Current rank: "+e._s(e.data.rank))]),n("p",{staticClass:"lead"},[e._v("Rated "+e._s(e.data.score)+" ★ by "+e._s(e.data.scored_by)+" Users")]),n("p",{staticClass:"lead"},[e._v(e._s(e.data.background))]),n("h3",{staticClass:"text-center"},[e._v("Synopsis")]),n("p",{staticClass:"lead"},[e._v(e._s(e.data.synopsis))]),n("p",{staticClass:"lead"},[e._v(e._s(e.data.episodes)+" episodes - "+e._s(e.data.duration)+".")]),n("p",{staticClass:"lead"},[e._v("Aired from "+e._s(e.data.aired.string))])])],1),e.data.trailer_url?n("div",{staticClass:"my-5"},[n("div",{staticClass:"embed-container"},[n("iframe",{attrs:{src:e.data.trailer_url,allow:"autoplay",frameborder:"0",allowfullscreen:""}})])]):e._e(),e.data.opening_themes.length>0||e.data.ending_themes.length>0?n("b-row",[n("b-col",{attrs:{sm:"12",md:"6"}},[n("h3",{staticClass:"text-center"},[e._v("Opening Themes")]),e._l(e.data.opening_themes,(function(t){return n("p",{key:t.mal_id,staticClass:"lead"},[e._v(" "+e._s(t)+" ")])}))],2),n("b-col",{attrs:{sm:"12",md:"6"}},[n("h3",{staticClass:"text-center"},[e._v("Ending Themes")]),e._l(e.data.ending_themes,(function(t){return n("p",{key:t.mal_id,staticClass:"lead"},[e._v(" "+e._s(t)+" ")])}))],2)],1):e._e()],1):"manga"===e.type&&e.data?n("div",{staticClass:"text-left mt-5 mb-4"},[n("b-row",{staticClass:"mt-3"},[n("b-col",{attrs:{sm:"12",lg:"4"}},[n("div",{staticClass:"text-center"},[n("img",{attrs:{src:e.data.image_url,width:"60%"}})])]),n("b-col",{attrs:{sm:"12",lg:"8"}},[n("h1",[e._v(e._s(e.data.title))]),n("p",{staticClass:"lead"},[e._v("Current rank: "+e._s(e.data.rank))]),n("p",{staticClass:"lead"},[e._v("Rated "+e._s(e.data.score)+" ★ by "+e._s(e.data.scored_by)+" Users")]),n("p",{staticClass:"lead"},[e._v(e._s(e.data.background))]),n("h3",{staticClass:"text-center"},[e._v("Synopsis")]),n("p",{staticClass:"lead"},[e._v(e._s(e.data.synopsis))]),e.data.chapter?n("p",{staticClass:"lead"},[e._v(" "+e._s(e.data.episodes)+" episodes - "+e._s(e.data.duration)+". ")]):e._e(),n("p",{staticClass:"lead"},[e._v("Published from "+e._s(e.data.published.string))])])],1)],1):e._e()])},ge=[],he={name:"AnimeData",data:function(){return{type:this.$route.params.type,id:this.$route.params.id,data:null}},methods:Object(l["a"])({},Object(d["b"])(["fetchAnime","removeAnime","fetchManga","removeManga"])),computed:Object(d["c"])(["anime","manga"]),created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:t.t0=e.type,t.next="anime"===t.t0?3:"manga"===t.t0?7:11;break;case 3:return t.next=5,e.fetchAnime(e.id);case 5:return e.data=e.anime,t.abrupt("break",12);case 7:return t.next=9,e.fetchManga(e.id);case 9:return e.data=e.manga,t.abrupt("break",12);case 11:return t.abrupt("return");case 12:case"end":return t.stop()}}),t)})))()},destroyed:function(){switch(this.type){case"anime":this.removeAnime(),this.data=null;break;case"manga":this.removeManga(),this.data=null;break;default:return}}},ve=he,be=(n("c9e8"),Object(j["a"])(ve,pe,ge,!1,null,"79b1ff5f",null)),je=be.exports,we=[{path:"/data/:type/:id",name:"Data",component:je}],_e=we;a["default"].use(fe["a"]);var ye=[].concat(Object(de["a"])(te),Object(de["a"])(_e)),Me=new fe["a"]({mode:"history",routes:ye}),xe=Me,Ae=n("a18f"),ke=n.n(Ae),Ce={topAnimes:null,topAnimePage:1,upcomingAnimes:null,anime:null,genreAnimes:null,genreAnimePage:1,genreId:null},Oe={topThreeAnimes:function(e){return e.topThreeAnimes},topAnimes:function(e){return e.topAnimes},upcomingAnimes:function(e){return e.upComingAnimes},anime:function(e){return e.anime},genreAnimes:function(e){return e.genreAnimes}},Se={fetchTopAnimes:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ke()("https://api.jikan.moe/v3/top/anime/".concat(Ce.topAnimePage,"/tv"),{method:"get"});case 3:return a=t.sent,t.next=6,a.json();case 6:a=t.sent,n("setTopAnimes",a.top);case 8:case"end":return t.stop()}}),t)})))()},fetchUpcomingAnimes:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ke()("https://api.jikan.moe/v3/season/later",{method:"get"});case 3:return a=t.sent,t.next=6,a.json();case 6:a=t.sent,n("setUpcomingAnimes",a.anime);case 8:case"end":return t.stop()}}),t)})))()},fetchAnime:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,ke()("https://api.jikan.moe/v3/anime/".concat(t),{method:"get"});case 3:return r=n.sent,n.next=6,r.json();case 6:r=n.sent,a("setAnime",r);case 8:case"end":return n.stop()}}),n)})))()},loadMoreTopAnimes:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,n("setTopAnimePage",1);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},fetchGenreAnimes:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,a("setGenreId",t);case 3:return n.next=5,ke()("https://api.jikan.moe/v3/genre/anime/".concat(t,"/").concat(Ce.genreAnimePage),{method:"get"});case 5:return r=n.sent,n.next=8,r.json();case 8:return r=n.sent,n.next=11,a("setGenreAnimes",r);case 11:case"end":return n.stop()}}),n)})))()},loadMoreGenreAnimes:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,n("setGenreAnimePage",1);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},removeAnime:function(e){var t=e.commit;t("setAnime")}},Pe={setTopAnimes:function(e,t){e.topAnimes=e.topAnimes?[].concat(Object(de["a"])(e.topAnimes),Object(de["a"])(t)):t},setUpcomingAnimes:function(e,t){e.upComingAnimes=t},setTopAnimePage:function(e,t){e.topAnimePage=e.topAnimePage+t},setAnime:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.anime=t},setGenreId:function(e,t){e.genreId&&e.genreId===t||(e.genreId=t,e.genreAnimes=null)},setGenreAnimes:function(e,t){var n=t.anime;e.genreAnimes=e.genreAnimes?[].concat(Object(de["a"])(e.genreAnimes),Object(de["a"])(n)):n},setGenreAnimePage:function(e,t){e.topAnimePage=e.topAnimePage+t}},Re={state:Ce,getters:Oe,actions:Se,mutations:Pe},Te={topMangas:null,topMangaPage:1,upcomingMangas:null,manga:null,genreMangas:null,genreMangaPage:1,genreId:null},Ie={topThreeMangas:function(e){return e.topThreeMangas},topMangas:function(e){return e.topMangas},upcomingMangas:function(e){return e.upComingMangas},manga:function(e){return e.manga},genreMangas:function(e){return e.genreMangas}},Ge={fetchTopMangas:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ke()("https://api.jikan.moe/v3/top/manga/".concat(Te.topMangaPage),{method:"get"});case 3:return a=t.sent,t.next=6,a.json();case 6:a=t.sent,n("setTopMangas",a.top);case 8:case"end":return t.stop()}}),t)})))()},fetchUpcomingMangas:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,ke()("https://api.jikan.moe/v3/season/later",{method:"get"});case 3:return a=t.sent,t.next=6,a.json();case 6:a=t.sent,n("setUpcomingMangas",a.Manga);case 8:case"end":return t.stop()}}),t)})))()},fetchManga:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,ke()("https://api.jikan.moe/v3/manga/".concat(t),{method:"get"});case 3:return r=n.sent,n.next=6,r.json();case 6:r=n.sent,a("setManga",r);case 8:case"end":return n.stop()}}),n)})))()},loadMoreTopMangas:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,n("setTopMangaPage",1);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},fetchGenreMangas:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,a("setGenreId",t);case 3:return n.next=5,ke()("https://api.jikan.moe/v3/genre/manga/".concat(t,"/").concat(Te.genreMangaPage),{method:"get"});case 5:return r=n.sent,n.next=8,r.json();case 8:return r=n.sent,n.next=11,a("setGenreMangas",r);case 11:case"end":return n.stop()}}),n)})))()},loadMoreGenreMangas:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,n("setGenreMangaPage",1);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},removeManga:function(e){var t=e.commit;t("setManga")}},De={setTopMangas:function(e,t){e.topMangas=e.topMangas?[].concat(Object(de["a"])(e.topMangas),Object(de["a"])(t)):t},setUpcomingMangas:function(e,t){e.upComingMangas=t},setTopMangaPage:function(e,t){e.topMangaPage=e.topMangaPage+t},setManga:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e.manga=t},setGenreId:function(e,t){e.genreId&&e.genreId===t||(e.genreId=t,e.genreMangas=null)},setGenreMangas:function(e,t){var n=t.manga;e.genreMangas=e.genreMangas?[].concat(Object(de["a"])(e.genreMangas),Object(de["a"])(n)):n},setGenreMangaPage:function(e,t){e.topMangaPage=e.topMangaPage+t}},ze={state:Te,getters:Ie,actions:Ge,mutations:De},$e=(n("ac1f"),n("841c"),{searchType:null,searchInput:null,search:null,searchPage:1}),He={searched:function(e){return e.search}},Ee={fetchSearch:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.input,s=t.option,r||(r="one piece"),s||(s="anime"),n.next=6,a("setSearchType",t);case 6:return n.prev=6,n.next=9,ke()("https://api.jikan.moe/v3/search/".concat(s,"?q=").concat(r,"&page=").concat($e.searchPage));case 9:return i=n.sent,n.next=12,i.json();case 12:i=n.sent,a("setSearch",i.results),n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](6),a("setSearchPage",$e.searchPage);case 19:case"end":return n.stop()}}),n,null,[[6,16]])})))()},loadMoreSearches:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a=$e.searchPage+1,t.next=4,n("setSearchPage",a);case 4:case"end":return t.stop()}}),t)})))()}},Ue={setSearchType:function(e,t){var n=t.input,a=t.option;e.searchType&&e.searchType===a||(e.searchType=a,e.search=null,e.searchPage=1),e.searchInput&&e.searchInput===n||(e.searchInput=n,e.search=null,e.searchPage=1)},setSearch:function(e,t){e.search=e.search?[].concat(Object(de["a"])(e.search),Object(de["a"])(t)):t},setSearchPage:function(e,t){e.searchPage=t}},Ye={state:$e,getters:He,actions:Ee,mutations:Ue};a["default"].use(d["a"]);var Fe=new d["a"].Store({modules:{anime:Re,manga:ze,search:Ye}});a["default"].config.productionTip=!1,new a["default"]({router:xe,store:Fe,render:function(e){return e(le)}}).$mount("#app")},"5f6b":function(e,t,n){},"85ec":function(e,t,n){},c6bb:function(e,t,n){},c9e8:function(e,t,n){"use strict";var a=n("c6bb"),r=n.n(a);r.a},e5a2:function(e,t,n){},f4b3:function(e,t,n){"use strict";var a=n("236f"),r=n.n(a);r.a},fa59:function(e,t,n){"use strict";var a=n("5f6b"),r=n.n(a);r.a}});
//# sourceMappingURL=app.4d357391.js.map