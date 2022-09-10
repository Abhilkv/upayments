(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{369:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(15),i=t.n(c),s=t(374),o=t.n(s),u=function(e){return r.a.createElement("button",{type:"submit",onClick:function(){return e.onClick()},className:o.a.btn},e.label)};u.propTypes={label:i.a.string,onClick:i.a.func},u.defaultProps={label:"",onClick:function(){}};var l=u,p=t(77),d=t(375),m=t.n(d),f=function(){return r.a.createElement("div",{className:m.a.textBar},r.a.createElement("i",null,r.a.createElement("span",null,r.a.createElement(p.b,{to:"/home",className:m.a.links},"UPayments Store"))),r.a.createElement("i",null,r.a.createElement("span",null,r.a.createElement(p.b,{to:"/create",className:m.a.links},"Register"))))},v=t(376),h=t.n(v),b=function(e){var a=e.data;return r.a.createElement(p.b,{to:"/details?id=".concat(a._id),className:h.a.productCard},r.a.createElement("div",{className:h.a.imageBlock},r.a.createElement("img",{className:h.a.image,alt:a.name,src:a.avatar,height:180,width:200})),r.a.createElement("span",{className:h.a.name},a.name),r.a.createElement("span",{className:h.a.price},"$",a.price))};b.propTypes={data:i.a.shape()},b.defaultProps={data:{name:"",price:"",avatar:""}};var g=b,N=t(377),E=t.n(N),y=function(){return r.a.createElement("div",{className:E.a.loaderContainer},r.a.createElement("div",{className:E.a.loader}))},x=t(378),w=t.n(x),_=function(e){var a=e.fieldName,t=e.inputHandler,n=e.placeHolder,c=e.type,i="text"===c?"input":"textarea";return r.a.createElement(i,{name:a,type:c,onChange:function(e){var a=e.target,n=a.value,r=a.name;t(n,r)},placeholder:n,className:"".concat(w.a.inputBox," ").concat("address"===c&&w.a.description)})};_.propTypes={fieldName:i.a.string.isRequired,placeHolder:i.a.string.isRequired,inputHandler:i.a.func.isRequired,type:i.a.string},_.defaultProps={type:"text"};var j=_;t.d(a,"c",(function(){return y})),t.d(a,"a",(function(){return l})),t.d(a,"e",(function(){return f})),t.d(a,"d",(function(){return g})),t.d(a,"b",(function(){return j}))},372:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(370),r=t.n(n),c=t(115),i=t.n(c),s=t(371),o=t.n(s),u=t(382),l=t.n(u),p=(t(78),t(61)),d=t.n(p),m=t(79),f=t(373);function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(t,!0).forEach((function(a){i()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b=function(e){return null!==e&&""!==e};function g(e){return N.apply(this,arguments)}function N(){return(N=o()(r.a.mark((function e(a){var t,n,c,i,s,o,u,p,v,g;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.API_CALL,n=a.TYPES,c=a.url,i=a.data,s=a.isAuthRequired,o=void 0===s||s,"https://upayments-studycase-api.herokuapp.com/api",u="".concat("https://upayments-studycase-api.herokuapp.com/api").concat(c),o&&!b(f.b)&&alert("Token missing"),p=h({},t,{data:i,url:u},o&&{headers:{Authorization:"Bearer ".concat(f.b)}}),e.prev=5,n.requestType&&m.a.dispatch({type:n.requestType}),e.next=9,l()(p);case 9:if(!(v=e.sent).data){e.next=13;break}return m.a.dispatch({type:n.successType,data:v.data}),e.abrupt("return",v.data);case 13:e.next=21;break;case 15:e.prev=15,e.t0=e.catch(5),g=e.t0.message,e.t0.response&&(g=e.t0.response.data.message||e.t0.response.data.error.message),d.a.get("logger").info("The API ".concat(u," returned this error:"),JSON.stringify(g)),m.a.dispatch({type:n.failureType});case 21:return e.abrupt("return",null);case 22:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}},373:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var n="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaGlsa25pZ2h0QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9BYmhpbGt2IiwiaWF0IjoxNjYyNzQ4MDc3LCJleHAiOjE2NjMxODAwNzd9.8alSEQL7NKNv45UnSnDawNnJB0Q5hAh_9nRe8Ux9ElM",r="abhilknight@gmail.com"},374:function(e,a,t){e.exports={btn:"_3qnUuwvkpiY-e5IHwtCCyD"}},375:function(e,a,t){e.exports={textBar:"_2GgQih-_fEarsqasGezXWw",links:"_3AbCYmGhawnuJ0Y1Rv1HpY"}},376:function(e,a,t){e.exports={productCard:"jZtZxYV5NU1yVI99hV1Jf",name:"EooaYCzFIsijDPhVjeWp3",imageBlock:"_2NCtpoulnNEuJ_3xVk2Tn4",image:"_2QU61JI5qkL4Zqz_WdeZFX",price:"_1oQQB_WdsJh7IxSaODvZ-l"}},377:function(e,a,t){e.exports={loaderContainer:"_2D39-4e07ktcJBMAwzOnfP",loader:"_3NZgnYG0thHgsAidjUY0J",load1:"_1oyfN5gnFDztz6mEHu8QeX"}},378:function(e,a,t){e.exports={inputBox:"FDiZ7wTucBf22TdBcjy0t",description:"fT5vHxZKTxMivW8Zx89vu"}},379:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(369),i=t(380),s=t.n(i);a.a=function(e){return r.a.createElement("div",{className:s.a.wrapper},r.a.createElement(c.e,{props:e}),e.children)}},380:function(e,a,t){e.exports={wrapper:"_15xNcQbQs0oDNJelxkQRIX"}},414:function(e,a,t){e.exports={container:"_3PzMCj7aJ4e46HTMVpjg80",contentbox:"W0r_aUEV1aSmrslIxdVut",detailsWrapper:"_21Q_wDovk8MpPJ0QpJ0NMn",nameBlock:"_1pcsDMZjrizSTvARAEHcGm",name:"wjXNMR4fk1PIKjwLBAbre",price:"_29DYnJ50BIXPDSiagfSqa1",imageWrapper:"_2yHzNwefTo7Yj0zabeP38E",image:"_11QzK1dC8doeVuX3vaCZfK",divider:"_2N92N_5GRZ9jjGjSVi7PuB",descriptionBox:"_1fKx3v-38bIgQ05F_8WdWV",title:"_3zq1JSfbh4_DhdYdezoWY2",description:"_1WaebCJ9pVqTcUtMsYjOJQ"}},416:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(116),i=t(13),s=t(370),o=t.n(s),u=t(371),l=t.n(u),p=t(372),d=function(){var e=l()(o.a.mark((function e(a){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t="/products/".concat(a),n={API_CALL:{method:"GET"},url:t,TYPES:{requestType:i.m,successType:i.n,failureType:i.l},isAuthRequired:!0},Object(p.a)(n);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),m=t(15),f=t.n(m),v=t(369),h=t(414),b=t.n(h),g=function(e){var a=e.getProductsInfo,t=e.productData,c=e.loading;return Object(n.useEffect)((function(){var t=new URLSearchParams(e.location.search).get("id");a(t)}),[]),r.a.createElement("div",{className:b.a.container},c?r.a.createElement(v.c,null):r.a.createElement("div",{className:b.a.contentbox},r.a.createElement("div",{className:b.a.detailsWrapper},r.a.createElement("div",{className:b.a.imageWrapper},r.a.createElement("img",{className:b.a.image,alt:t.name,src:t.avatar,height:280})),r.a.createElement("div",{className:b.a.nameBlock},r.a.createElement("span",{className:b.a.name},t.name),r.a.createElement("span",{className:b.a.price},"$",t.price))),r.a.createElement("div",{className:b.a.divider}),r.a.createElement("div",{className:b.a.descriptionBox},r.a.createElement("span",{className:b.a.title},"Description"),r.a.createElement("span",{className:b.a.description},t.description))))};g.propTypes={getProductsInfo:f.a.func.isRequired,productData:f.a.shape,loading:f.a.bool},g.defaultProps={productData:{},loading:!1};var N=g,E=Object(c.b)((function(e){var a=e.details;return{productData:a.productData,loading:a.loading}}),(function(){return{getProductsInfo:d}}))(N),y=t(379);a.default=function(e){return r.a.createElement(y.a,null,r.a.createElement(E,e))}}}]);