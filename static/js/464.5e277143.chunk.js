"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[464],{913:function(e,r,t){t.d(r,{Df:function(){return s},TP:function(){return p},V0:function(){return l},tx:function(){return d},zv:function(){return f}});var n=t(861),a=t(757),c=t.n(a),i=t(243),o="https://api.themoviedb.org/3",u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDNmNzE5ZWMwNGJmZjRkZGMzYWE5ZjZlMmRjNGQ5ZSIsInN1YiI6IjY0YTA0MDEwODFkYTM5MDEwYjhhZGNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B-flHJ2qqW-7IKxqsY5Y_9NJ4QXIkPDtLv4GMti5oH8"}},s=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(o,"/trending/movie/day?language=en-US"),u);case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(o,"/search/movie?query=").concat(r,"&include_adult=false&language=en-US&page=1"),u);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(o,"/movie/").concat(r,"?language=en-US"),u);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(o,"/movie/").concat(r,"/credits?language=en-US"),u);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Z)("".concat(o,"/movie/").concat(r,"/reviews?language=en-US&page=1"),u);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},639:function(e,r,t){t.d(r,{Z:function(){return i}});t(791);var n=t(643),a="Loader_loaderOverlay__UJo-J",c=t(184),i=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.gy,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{position:"absolute",top:"30%",left:"43%"},wrapperClass:"tail-spin-loading",visible:!0})})}},646:function(e,r,t){t.d(r,{Z:function(){return f}});t(791);var n=t(689),a=t(87),c="MovieCard_movies__card__UMR+v",i="MovieCard_movies__card-photo__zQa+f",o="MovieCard_movies__card-title__cewWp",u="MovieCard_movies__card-genres__YsliN",s=t(184),l=function(e){var r=e.movie,t=r.id,l=r.title,p=r.poster_path,f=r.release_date,d=(0,n.TH)();return(0,s.jsx)("li",{id:t,className:c,children:(0,s.jsxs)(a.rU,{to:"/movies/".concat(t),state:d,children:[(0,s.jsx)("img",{className:i,src:p?"https://image.tmdb.org/t/p/w500".concat(p):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:l,loading:"lazy",width:"395px",height:"574px"}),(0,s.jsx)("h2",{className:o,children:l}),(0,s.jsx)("p",{className:u,children:f})]})},t)},p="MoviesList_movies__list__omDb8",f=function(e){var r=e.movies;return(0,s.jsx)("ul",{className:p,children:r&&r.map((function(e){return(0,s.jsx)(l,{movie:e})}))})}},464:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),c=t(757),i=t.n(c),o=t(791),u=t(87),s=t(686),l=t.n(s),p=t(913),f=t(639),d="SearchMovie_form__wxS1-",v="SearchMovie_input-group__bEzd+",h="SearchMovie_input__3IbmL",m="SearchMovie_input_button__amGjo",A=t(184),_=function(e){var r=e.handleSearch,t=(0,o.useState)(""),n=(0,a.Z)(t,2),c=n[0],i=n[1];return(0,A.jsx)("form",{className:d,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return l().Notify.warning("Please enter key words for search.");r(c)},children:(0,A.jsxs)("div",{className:v,children:[(0,A.jsx)("input",{className:h,type:"form-control",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",name:"search","aria-describedby":"button-addon2",onChange:function(e){var r=e.target.value;i(r)},value:c,required:!0}),(0,A.jsx)("button",{type:"submit",className:m,id:"button-addon2",children:(0,A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgBpZGBEYIwDEW/TOAGdoSO0A1cgRHcRDfQDTwngA0cQTYANzC5BuFC28Dx7v4F0uSnlwI7OWTygeRJR1JHaiUuqNS/IzWkp3wzZ9KbdIUBN3xIl8wZm95LBk2meVWNl+kWQddVs4MXbFrExZ60AScHrGNI3aCbuxrwsG8q2UssUSMuMskN5WdyiAv0hRo8ZIJXt6ulubcMoIrHyKYB03ObJuNkh+VeNpnk8Nhp8OcH2mAkQM0vx5gAAAAASUVORK5CYII=",alt:"#"})})]})})},g=t(646),x=function(){var e=(0,u.lr)(),r=(0,a.Z)(e,2),t=r[0],c=r[1],s=t.get("query"),d=(0,o.useState)(!1),v=(0,a.Z)(d,2),h=v[0],m=v[1],x=(0,o.useState)(null),w=(0,a.Z)(x,2),b=w[0],N=w[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m(!0),s){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,(0,p.V0)(s);case 6:if(r=e.sent,0!==(t=r.results).length){e.next=14;break}return l().Notify.failure("Sorry, there are no movies matching your search query. Please try again."),N(null),e.abrupt("return");case 14:l().Notify.success("Hooray! We found ".concat(t.length," movies.")),N(t);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log("error :>> ",e.t0);case 21:return e.prev=21,m(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}}();e()}),[s]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(_,{handleSearch:function(e){var r=e.trim();c({query:r})}}),h&&(0,A.jsx)(f.Z,{}),(0,A.jsx)(g.Z,{movies:b})]})}}}]);
//# sourceMappingURL=464.5e277143.chunk.js.map