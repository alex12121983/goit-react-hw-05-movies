"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{913:function(e,t,r){r.d(t,{Df:function(){return o},TP:function(){return p},V0:function(){return l},tx:function(){return v},zv:function(){return f}});var n=r(861),a=r(757),c=r.n(a),u=r(243),i="https://api.themoviedb.org/3",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDNmNzE5ZWMwNGJmZjRkZGMzYWE5ZjZlMmRjNGQ5ZSIsInN1YiI6IjY0YTA0MDEwODFkYTM5MDEwYjhhZGNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B-flHJ2qqW-7IKxqsY5Y_9NJ4QXIkPDtLv4GMti5oH8"}},o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(i,"/trending/movie/day?language=en-US"),s);case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(i,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),s);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(i,"/movie/").concat(t,"?language=en-US"),s);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(i,"/movie/").concat(t,"/credits?language=en-US"),s);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("".concat(i,"/movie/").concat(t,"/reviews?language=en-US&page=1"),s);case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},639:function(e,t,r){r.d(t,{Z:function(){return u}});r(791);var n=r(643),a="Loader_loaderOverlay__UJo-J",c=r(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.gy,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{position:"absolute",top:"30%",left:"43%"},wrapperClass:"tail-spin-loading",visible:!0})})}},76:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(861),a=r(439),c=r(757),u=r.n(c),i=r(791),s=r(689),o=r(686),l=r.n(o),p=r(913),f="ReviewItem_review__card__LGkv+",v="ReviewItem_review__card-photo__Ckn9F",d="ReviewItem_review__card-body__yz3Aw",h="ReviewItem_review__card-body-title__8LWKu",_="ReviewItem_review__card-body-content__zSpCX",w=r(184),m=function(e){var t=e.review,r=t.author,n=t.author_details,a=t.content,c=t.created_at,u=t.id,i=t.updated_at,s=n.avatar_path,o=s?s.substring(1):"https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg";return(0,w.jsxs)("li",{className:f,children:[(0,w.jsx)("img",{src:o,className:v,alt:r}),(0,w.jsxs)("div",{className:d,children:[(0,w.jsxs)("h4",{className:h,children:["Author: ",r,", created at ",c,", updated at ",i,"."]}),(0,w.jsx)("p",{className:_,children:a})]})]},u)},x="ReviewList_reviews__list__4M9D6",g=function(e){var t=e.reviews;return(0,w.jsx)("ul",{className:x,children:t&&t.map((function(e){return(0,w.jsx)(m,{review:e})}))})},Z=r(639),y=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],c=t[1],o=(0,i.useState)(!1),f=(0,a.Z)(o,2),v=f[0],d=f[1],h=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,p.tx)(h);case 4:if(t=e.sent,r=t.results,console.log("results :>> ",r),0!==r.length){e.next=13;break}return l().Notify.failure("Sorry, there are no reviews about this movie. Please try again later."),c(null),e.abrupt("return");case 13:l().Notify.success("Hooray! We found ".concat(r.length," reviews about this movie.")),c(r);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log("error :>> ",e.t0);case 20:return e.prev=20,d(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,17,20,23]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,w.jsxs)(w.Fragment,{children:[v&&(0,w.jsx)(Z.Z,{}),(0,w.jsx)(g,{reviews:r})]})}}}]);
//# sourceMappingURL=76.5fadb0e1.chunk.js.map