(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{116:function(e,t,n){e.exports={container:"Main_container__h-_Ay",main:"Main_main__YPr9I"}},117:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__3XBph",hidden:"Sidebar_hidden__1e4bb",active:"Sidebar_active__1G2By"}},118:function(e,t,n){e.exports={list:"Todos_list__3zpwo",todos:"Todos_todos__1fbXU"}},119:function(e,t,n){e.exports={delete:"icons_delete__1ynku",edit:"icons_edit__1E9-F"}},120:function(e,t,n){e.exports={slide:"Slider_slide__VcvZy",active:"Slider_active__74Ant"}},164:function(e,t,n){e.exports={container:"Bottom_container__3SvdK"}},310:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(0),r=n.n(o),c=n(14),i=n.n(c),s=n(18),l=n(36),d=n(48),u=n(32),j=n.n(u),b=n(394),O="ADD_TODO",p="DELETE_TODO",x="EDIT_TODO",f="UPDATE_TODO",m="TOGGLE_COMPLETED_TODO",h="ADD_CATEGORY",g=n(8),y={active:"active",completed:"completed"},v={day:"today",week:"week",month:"month"},T={all:"All"},_="grid",S="table",C={items:JSON.parse(localStorage.getItem("todoAppTodos"))||[],categories:new Set(JSON.parse(localStorage.getItem("todoAppCategories"))||[T.all])},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n={id:t.id,text:t.text,category:t.category,createdAt:t.createdAt,updatedAt:null,editMode:!1,completed:!1};return Object(g.a)(Object(g.a)({},e),{},{items:[n].concat(Object(l.a)(e.items))});case h:return Object(g.a)(Object(g.a)({},e),{},{categories:e.categories.add(t.category)});case m:return Object(g.a)(Object(g.a)({},e),{},{items:e.items.map((function(e){return e.id!==t.id?e:Object(g.a)(Object(g.a)({},e),{},{completed:!e.completed})}))});case x:return Object(g.a)(Object(g.a)({},e),{},{items:e.items.map((function(e){return e.id!==t.id?e:Object(g.a)(Object(g.a)({},e),{},{editMode:!0})}))});case f:return Object(g.a)(Object(g.a)({},e),{},{items:e.items.map((function(e){return e.id!==t.id?e:Object(g.a)(Object(g.a)({},e),{},{text:t.text,updatedAt:t.updatedAt,editMode:!1})}))});case p:return Object(g.a)(Object(g.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.id}))});default:return e}},N=n(43),E="TOGGLE_MENU_VISIBLE",k="TOGGLE_TODOS_VIEW",M="SET_NEW_THEME",A="RESET_THEME",D={isMenuVisible:!0,todosView:"table",colorsName:[{name:"primary",text:"Primary"},{name:"secondary",text:"Secondary"},{name:"textPrimary",text:"Text primary"},{name:"textSecondary",text:"Text secondary"},{name:"contrastTextPrimary",text:"Contrast text 1"},{name:"contrastTextSecondary",text:"Contrast text 2"}],colors:JSON.parse(localStorage.getItem("todoAppTheme"))||{primary:null,secondary:null,textPrimary:null,textSecondary:null,contrastTextPrimary:null,contrastTextSecondary:null}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(g.a)(Object(g.a)({},e),{},{isMenuVisible:!e.isMenuVisible});case k:return Object(g.a)(Object(g.a)({},e),{},{todosView:t.view});case M:return Object(g.a)(Object(g.a)({},e),{},{colors:Object(g.a)(Object(g.a)({},e.colors),{},Object(N.a)({},t.themePart,t.color))});case A:return Object(g.a)(Object(g.a)({},e),{},{colors:Object(g.a)(Object(g.a)({},e.colors),{},{primary:null,secondary:null,textPrimary:null,textSecondary:null,contrastTextPrimary:null,contrastTextSecondary:null})});default:return e}},I="SEARCH_TODO",V="SET_FILTER_OPTION",Y="SET_CATEGORY_OPTION",R="SET_DATE_OPTION",L={text:"",filterOption:null,category:T.all,dateOption:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(g.a)(Object(g.a)({},e),{},{text:t.text});case V:return Object(g.a)(Object(g.a)({},e),{},{filterOption:t.option});case Y:return Object(g.a)(Object(g.a)({},e),{},{category:t.category});case R:return Object(g.a)(Object(g.a)({},e),{},{dateOption:t.option});default:return e}},G="SET_CURRENT_PAGE",F={pageSize:3,currentPage:1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.page});default:return e}},J=Object(d.c)({app:P,todos:w,filter:B,pagination:U}),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.d,H=Object(d.a)((function(e){return function(t){return function(n){if(n.type===O||n.type===p||n.type===x||n.type===f||n.type===m){var a=t(n);return o=e.getState().todos.items,localStorage.setItem("todoAppTodos",JSON.stringify(o)),a}var o,r,c;if(n.type===h){var i=t(n);return r=Object(l.a)(e.getState().todos.categories),localStorage.setItem("todoAppCategories",JSON.stringify(r)),i}if(n.type===M||n.type===A){var s=t(n);return c=e.getState().app.colors,localStorage.setItem("todoAppTheme",JSON.stringify(c)),s}return t(n)}}})),W=Object(d.e)(J,z(H)),X=n(360),q=n(361),Z=n(362),K=n(58),Q=n(363),$=n(359),ee=n(16),te=n(352),ne=n(397),ae=n(355),oe=n(356),re=n(357),ce=n(358),ie=n(166),se=n(94),le=n.n(se),de=function(e){var t=e.setNewTheme,n=e.colorsName,r=e.resetTheme,c=Object(o.useState)(!1),i=Object(ee.a)(c,2),s=i[0],l=i[1],d=Object(o.useState)(!1),u=Object(ee.a)(d,2),j=u[0],b=u[1],O=Object(o.useState)(),p=Object(ee.a)(O,2),x=p[0],f=p[1],m=function(){return l(!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(te.a,{color:"inherit",onClick:function(){return l(!0)},children:"CHANGE THEME"}),Object(a.jsxs)(ne.a,{open:s,keepMounted:!0,onClose:m,children:[Object(a.jsx)(ae.a,{children:"Change app theme"}),Object(a.jsxs)(oe.a,{children:[Object(a.jsx)(re.a,{children:"Click the button which color to set and then choose it."}),Object(a.jsxs)("div",{className:le.a.colorsAndButtons,children:[Object(a.jsx)(ie.a,{color:j,onChangeComplete:function(e){b(e),t(x,e.hex)}}),Object(a.jsx)("div",{className:le.a.buttons,children:n.map((function(e){var t=e.name,n=e.text;return Object(a.jsx)(te.a,{className:x===t?le.a.active:"",onClick:function(){return f(t)},color:"secondary",children:n},t)}))})]})]}),Object(a.jsxs)(ce.a,{children:[Object(a.jsx)(te.a,{onClick:function(){return r()},color:"primary",variant:"outlined",children:"Reset theme"}),Object(a.jsx)(te.a,{onClick:m,color:"primary",variant:"outlined",children:"Close"})]})]})]})},ue={setNewTheme:function(e,t){return{type:M,themePart:e,color:t}},resetTheme:function(){return{type:A}}},je=Object(s.b)((function(e){return{colorsName:e.app.colorsName}}),ue)(de),be=Object($.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Oe=function(){var e=be();return Object(a.jsx)(X.a,{position:"fixed",children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)(Z.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(Q.a,{})}),Object(a.jsx)(K.a,{variant:"h6",className:e.title,children:"Todos"}),Object(a.jsx)(je,{})]})})},pe=n(389),xe=n(116),fe=n.n(xe),me=n(169),he=n(374),ge=n(370),ye=n(314),ve=n(364),Te=n(366),_e=n(371),Se=n(372),Ce=n(373),we=n(117),Ne=n.n(we),Ee=n(396),ke=n(365),Me=function(){var e=Object(o.useState)(!1),t=Object(ee.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),i=Object(ee.a)(c,2),s=i[0],l=i[1],d=Object(o.useState)(""),u=Object(ee.a)(d,2),j=u[0],b=u[1],O=Object(o.useState)(""),p=Object(ee.a)(O,2),x=p[0],f=p[1],m=function(){l(""),b(""),f("")},h=function(){r(!1),m()};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(ye.a,{button:!0,onClick:function(){return r(!0)},children:[Object(a.jsx)(ve.a,{children:Object(a.jsx)(ke.a,{})}),Object(a.jsx)(Te.a,{primary:"Contact Us"})]}),Object(a.jsxs)(ne.a,{open:n,onClose:h,children:[Object(a.jsx)(ae.a,{children:"Contact Us"}),Object(a.jsxs)(oe.a,{children:[Object(a.jsx)(re.a,{children:"To contacht us, please enter your username, email address and message here."}),Object(a.jsxs)("form",{noValidate:!0,children:[Object(a.jsx)(Ee.a,{onChange:function(e){return l(e.target.value)},value:s,autoFocus:!0,margin:"dense",label:"Username",type:"text",fullWidth:!0,color:"secondary"}),Object(a.jsx)(Ee.a,{onChange:function(e){return b(e.target.value)},value:j,autoFocus:!0,margin:"dense",label:"Email Address",type:"email",fullWidth:!0,color:"secondary"}),Object(a.jsx)(Ee.a,{onChange:function(e){return f(e.target.value)},value:x,multiline:!0,rows:5,margin:"dense",label:"Message",fullWidth:!0,color:"secondary"})]})]}),Object(a.jsxs)(ce.a,{children:[Object(a.jsx)(te.a,{onClick:h,color:"primary",children:"Cancel"}),Object(a.jsx)(te.a,{onClick:function(){return m()},color:"primary",children:"Reset"}),Object(a.jsx)(te.a,{onClick:function(){console.log("submitted"),m()},color:"primary",children:"Submit"})]})]})]})},Ae=function(e){var t=e.classes,n=e.isVisible,o=e.setFilterOption,r=e.filterOption,c=[{text:"All",icon:_e.a,option:null},{text:"Active",icon:Se.a,option:y.active},{text:"Completed",icon:Ce.a,option:y.completed}];return Object(a.jsx)("div",{className:"".concat(Ne.a.sidebar," ").concat(!n&&Ne.a.hidden),children:Object(a.jsx)(me.a,{className:t.paper,square:!0,variant:"outlined",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(he.a,{}),Object(a.jsx)(ge.a,{children:c.map((function(e){var t=e.text,n=e.icon,c=e.option;return Object(a.jsxs)(ye.a,{selected:r===c,onClick:function(){return function(e){return o(e)}(c)},button:!0,children:[Object(a.jsx)(ve.a,{children:Object(a.jsx)(n,{color:"secondary"})}),Object(a.jsx)(Te.a,{primary:t})]},t)}))}),Object(a.jsx)(he.a,{}),Object(a.jsx)(ge.a,{children:Object(a.jsx)(Me,{})})]})})})},De={setFilterOption:function(e){return{type:V,option:e}}},Pe=Object(s.b)((function(e){return{isVisible:e.app.isMenuVisible,filterOption:e.filter.filterOption}}),De)(Ae),Ie=n(118),Ve=n.n(Ie),Ye=n(381),Re=n(367),Le=n(382),Be=n(383),Ge=n(384),Fe=n(57),Ue=n.n(Fe),Je=n(375),ze=n(376),He=n(377),We=n(378),Xe=n(119),qe=n.n(Xe),Ze=function(e){return Object(a.jsx)(Je.a,Object(g.a)({className:qe.a.delete},e))},Ke=function(e){return Object(a.jsx)(ze.a,Object(g.a)({className:qe.a.edit},e))},Qe=function(e){return Object(a.jsx)(He.a,Object(g.a)({},e))},$e=function(e){return Object(a.jsx)(We.a,Object(g.a)({},e))},et=n(379),tt=n(170),nt=n(11),at=Object($.a)((function(e){return{search:Object(N.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(nt.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(nt.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(N.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"400px"})}})),ot=function(e){var t=e.searchText,n=e.searchTodos,r=at(),c=Object(o.useState)(t),i=Object(ee.a)(c,2),s=i[0],l=i[1];return Object(a.jsxs)("div",{className:r.search,children:[Object(a.jsx)("div",{className:r.searchIcon,children:Object(a.jsx)(et.a,{})}),Object(a.jsx)(tt.a,{placeholder:"Search\u2026",classes:{root:r.inputRoot,input:r.inputInput},onChange:function(e){l(e.target.value),n(e.target.value)},value:s,inputProps:{"aria-label":"search"}})]})},rt={searchTodos:function(e){return{type:I,text:e}}},ct=Object(s.b)((function(e){return{searchText:e.filter.text}}),rt)(ot),it=n(369),st=n(391),lt=n(380),dt=n(7),ut=Object(dt.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:4,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{backgroundColor:"white",borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(tt.a),jt=Object($.a)((function(e){return{margin:{margin:e.spacing(1)}}})),bt=function(e){var t=e.setDateOption,n=jt(),o=r.a.useState(""),c=Object(ee.a)(o,2),i=c[0],s=c[1];return Object(a.jsx)(it.a,{className:n.margin,children:Object(a.jsxs)(st.a,{value:i,onChange:function(e){s(e.target.value),t(e.target.value)},input:Object(a.jsx)(ut,{}),label:"Filter by date",children:[Object(a.jsx)(lt.a,{value:"",children:"None"}),Object(a.jsx)(lt.a,{value:v.day,children:"Today"}),Object(a.jsx)(lt.a,{value:v.week,children:"This week"}),Object(a.jsx)(lt.a,{value:v.month,children:"This month"})]})})},Ot=function(e){var t=e.toggleMenu,n=e.toggleView,r=e.menuIsVisible,c=e.view,i=e.addCategory,s=e.setDateOption,l=Object(o.useState)(!1),d=Object(ee.a)(l,2),u=d[0],j=d[1],b=Object(o.useState)(""),O=Object(ee.a)(b,2),p=O[0],x=O[1],f=c===S,m=c===_,h=function(e){return n(e)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(X.a,{position:"static",color:"primary",children:Object(a.jsxs)(q.a,{className:Ue.a.container,children:[Object(a.jsxs)("div",{className:Ue.a.left,children:[Object(a.jsx)(Ye.a,{title:"Hide/open left menu",enterDelay:800,children:Object(a.jsx)(Z.a,{onClick:function(){return t()},className:Ue.a.menuButton,color:"inherit",component:"span",children:r?Object(a.jsx)(Le.a,{}):Object(a.jsx)(Be.a,{})})}),Object(a.jsx)(ct,{}),!u&&Object(a.jsx)(te.a,{onClick:function(){return j(!0)},color:"inherit",startIcon:Object(a.jsx)(Ge.a,{}),children:"Add category"}),u&&Object(a.jsx)(Re.a,{onKeyDown:function(e){13===e.keyCode&&(j(!1),i(p),x(""))},variant:"filled",placeholder:"Enter name",value:p,onChange:function(e){return x(e.target.value)}})]}),Object(a.jsxs)("div",{className:Ue.a.right,children:[Object(a.jsx)(bt,{setDateOption:s}),Object(a.jsx)(Ye.a,{title:"Click to change todos view",enterDelay:800,children:Object(a.jsxs)(Z.a,{onClick:function(){f&&h(_),m&&h(S)},className:Ue.a.menuButton,color:"inherit",component:"span",children:[m&&Object(a.jsx)(Qe,{}),f&&Object(a.jsx)($e,{})]})})]})]})})})},pt={toggleMenu:function(){return{type:E}},toggleView:function(e){return{type:k,view:e}},addCategory:function(e){return{type:h,category:e}},setDateOption:function(e){return{type:R,option:e}}},xt=Object(s.b)((function(e){return{menuIsVisible:e.app.isMenuVisible,view:e.app.todosView}}),pt)(Ot),ft=n(93),mt=n.n(ft),ht=function(e){var t=e.oldText,n=e.updateTodo,r=e.id,c=Object(o.useState)(t),i=Object(ee.a)(c,2),s=i[0],l=i[1];return Object(a.jsx)(Ee.a,{onChange:function(e){return l(e.target.value)},onBlur:function(){return n(r,s)},value:s,multiline:!0,rowsMax:5,placeholder:"Todo text...",fullWidth:!0,InputLabelProps:{shrink:!0},variant:"standard",color:"secondary"})},gt=function(e){var t=e.todos,n=e.deleteTodo,o=e.editTodo,r=e.updateTodo,c=e.toggleCompleted;return Object(a.jsx)(ge.a,{component:"nav",children:t.map((function(e){var t=e.text,i=e.id,s=e.editMode,l=e.completed,d=e.category,u=e.createdAt;return Object(a.jsxs)(ye.a,{button:!0,children:[s&&Object(a.jsx)(ht,{oldText:t,updateTodo:r,id:i}),!s&&Object(a.jsx)(Te.a,{className:l?mt.a.completed:"",primary:t,secondary:"".concat(d,", ").concat(u),onDoubleClick:function(){return function(e){return c(e)}(i)}}),Object(a.jsxs)(ve.a,{children:[Object(a.jsx)(Ke,{onClick:function(){return function(e){return o(e)}(i)}}),Object(a.jsx)(Ze,{onClick:function(){return function(e){return n(e)}(i)}})]})]},i)}))})},yt=n(385),vt=n(386),Tt=n(387),_t=n(388),St=n(95),Ct=n.n(St),wt=function(e){var t=e.todos,n=e.deleteTodo,o=e.editTodo,r=e.updateTodo,c=e.toggleCompleted;return Object(a.jsx)(yt.a,{container:!0,justify:"center",spacing:2,children:t.map((function(e){var t=e.text,i=e.id,s=e.editMode,l=e.completed,d=e.category,u=e.createdAt;return Object(a.jsx)(yt.a,{item:!0,lg:3,md:4,sm:6,xs:12,onDoubleClick:function(){return function(e){return c(e)}(i)},children:Object(a.jsxs)(vt.a,{className:Ct.a.card,square:!0,children:[Object(a.jsxs)(Tt.a,{children:[s&&Object(a.jsx)(ht,{oldText:t,updateTodo:r,id:i}),!s&&Object(a.jsx)(K.a,{className:l?Ct.a.completed:"",variant:"body2",component:"p",children:t}),Object(a.jsxs)(K.a,{className:Ct.a.secondaryText,color:"textSecondary",gutterBottom:!0,children:[d,", ",u]})]}),Object(a.jsxs)(_t.a,{children:[Object(a.jsx)(Ke,{onClick:function(){return function(e){return o(e)}(i)}}),Object(a.jsx)(Ze,{onClick:function(){return function(e){return n(e)}(i)}})]})]})},i)}))})},Nt=n(393),Et=function(e){var t=e.setCurrentPage,n=e.totalCount,r=e.pageSize,c=Object(o.useState)(1),i=Object(ee.a)(c,2),s=i[0],l=i[1],d=Object(o.useMemo)((function(){return Math.ceil(n/r)}),[n,r]);return Object(a.jsx)(Nt.a,{page:s,count:d,onChange:function(e,n){l(n),t(n)}})},kt=function(e){var t=e.view,n=e.todos,o=e.deleteTodo,r=e.editTodo,c=e.updateTodo,i=e.toggleCompleted,s=e.pageSize,l=e.setCurrentPage,d=function(e,t,n){return e.slice(n*t-n,n*t)}(n,e.currentPage,s);return 0===n.length?Object(a.jsx)("div",{className:mt.a.noTodos,children:"No todos yet..."}):Object(a.jsxs)(a.Fragment,{children:[t===S&&Object(a.jsx)(gt,{todos:d,toggleCompleted:i,deleteTodo:o,editTodo:r,updateTodo:c}),t===_&&Object(a.jsx)(wt,{todos:d,toggleCompleted:i,deleteTodo:o,editTodo:r,updateTodo:c}),Object(a.jsx)(Et,{setCurrentPage:l,totalCount:n.length,pageSize:s})]})};function Mt(e,t){if(t===v.day){var n=j()().startOf("day").valueOf();return e.filter((function(e){return j()(e.createdAt,"DD.MM.YYYY").valueOf()>=n}))}if(t===v.week){var a=j()().startOf("isoWeek").valueOf();return e.filter((function(e){return j()(e.createdAt,"DD.MM.YYYY").valueOf()>=a}))}if(t===v.month){var o=j()().startOf("month").valueOf();return e.filter((function(e){return j()(e.createdAt,"DD.MM.YYYY").valueOf()>=o}))}return e}function At(e,t){var n=t===T.all?null:t;return n?e.filter((function(e){return e.category===n})):e}function Dt(e,t){return t===y.active?e.filter((function(e){return!e.completed})):t===y.completed?e.filter((function(e){return e.completed})):e}var Pt={deleteTodo:function(e){return{type:p,id:e}},editTodo:function(e){return{type:x,id:e}},updateTodo:function(e,t){return{type:f,id:e,text:t,updatedAt:j()().format("DD.MM.YYYY")}},toggleCompleted:function(e){return{type:m,id:e}},setCurrentPage:function(e){return{type:G,page:e}}},It=Object(s.b)((function(e){return{view:e.app.todosView,pageSize:e.pagination.pageSize,currentPage:e.pagination.currentPage,todos:e.filter.text?(t=e.todos.items,n=e.filter.text,t.filter((function(e){return e.text.toLowerCase().includes(n.toLowerCase())}))):Dt(At(Mt(e.todos.items,e.filter.dateOption),e.filter.category),e.filter.filterOption)};var t,n}),Pt)(kt),Vt=n(392),Yt=n(164),Rt=n.n(Yt),Lt=function(e){var t=e.categories,n=e.addTodo,r=Object(o.useState)(""),c=Object(ee.a)(r,2),i=c[0],s=c[1],l=Object(o.useState)(""),d=Object(ee.a)(l,2),u=d[0],j=d[1];return Object(a.jsxs)("div",{className:Rt.a.container,children:[Object(a.jsx)(Ee.a,{onChange:function(e){return s(e.target.value)},value:i,multiline:!0,rowsMax:5,placeholder:"Todo text...",fullWidth:!0,InputLabelProps:{shrink:!0},variant:"filled",color:"secondary"}),Object(a.jsx)(Vt.a,{options:t,getOptionLabel:function(e){return e},style:{width:300},inputValue:u,onInputChange:function(e,t){j(t)},value:u,onChange:function(e,t){j(t)},renderInput:function(e){return Object(a.jsx)(Ee.a,Object(g.a)(Object(g.a)({},e),{},{label:"Choose category",variant:"filled"}))}}),Object(a.jsx)(te.a,{onClick:function(){i&&u&&(n(i,u),s(""),j(""))},variant:"contained",color:"primary",children:"Add"})]})},Bt={addTodo:function(e,t){return{type:O,id:Object(b.a)(),text:e,category:t,createdAt:j()().format("DD.MM.YYYY")}}},Gt=Object(s.b)((function(e){return{categories:Object(l.a)(e.todos.categories)}}),Bt)(Lt),Ft=function(e){var t=e.classes;return Object(a.jsxs)("div",{className:Ve.a.todos,children:[Object(a.jsx)(xt,{}),Object(a.jsx)(me.a,{className:"".concat(t.paper," ").concat(Ve.a.list),square:!0,variant:"outlined",children:Object(a.jsx)(It,{})}),Object(a.jsx)(Gt,{})]})},Ut=n(165),Jt=n.n(Ut),zt=(n(308),n(309),n(120)),Ht=n.n(zt),Wt=(n(310),function(e){var t=e.categories,n=e.setCategoryOption,o=e.selectedCategory,r=t.length,c={dots:!0,infinite:!1,speed:500,slidesToShow:r>5?6:r,slidesToScroll:4,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:r<=3?r:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:r<=2?r:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return Object(a.jsx)("div",{children:Object(a.jsx)(Jt.a,Object(g.a)(Object(g.a)({},c),{},{children:t.map((function(e){return Object(a.jsx)("div",{onClick:function(){return n(e)},className:"".concat(Ht.a.slide," ").concat(e===o?Ht.a.active:""),children:Object(a.jsx)("div",{children:e})},e)}))}))})}),Xt={setCategoryOption:function(e){return{type:Y,category:e}}},qt=Object(s.b)((function(e){return{categories:Object(l.a)(e.todos.categories),selectedCategory:e.filter.category}}),Xt)(Wt),Zt=Object($.a)((function(e){return{paper:{padding:e.spacing(2),color:e.palette.text.secondary}}})),Kt=function(){var e=Zt();return Object(a.jsxs)(pe.a,{className:fe.a.container,children:[Object(a.jsx)(qt,{}),Object(a.jsxs)("main",{className:fe.a.main,children:[Object(a.jsx)(Pe,{classes:e}),Object(a.jsx)(Ft,{classes:e})]})]})},Qt=n(167),$t=n(390),en=function(e){var t=e.children,n=e.primary,o=e.secondary,r=e.textPrimary,c=e.textSecondary,i=e.contrastTextPrimary,s=e.contrastTextSecondary,l=Object(Qt.a)({palette:{primary:{main:n||"#3f51b5",contrastText:i||"#fff"},secondary:{main:o||"#f50057",contrastText:s||"#fff"},text:{primary:r||"rgba(0, 0, 0, 0.87)",secondary:c||"rgba(0, 0, 0, 0.54)"}}});return Object(a.jsx)($t.a,{theme:l,children:t})},tn=Object(s.b)((function(e){return{primary:e.app.colors.primary,secondary:e.app.colors.secondary,textPrimary:e.app.colors.textPrimary,textSecondary:e.app.colors.textSecondary,contrastTextPrimary:e.app.colors.contrastTextPrimary,contrastTextSecondary:e.app.colors.contrastTextSecondary}}))(en),nn=function(){return Object(a.jsx)(s.a,{store:W,children:Object(a.jsxs)(tn,{children:[Object(a.jsx)(Oe,{}),Object(a.jsx)(Kt,{})]})})};i.a.render(Object(a.jsx)(nn,{}),document.getElementById("root"))},57:function(e,t,n){e.exports={container:"Top_container__2wZrD",left:"Top_left__3td8i",right:"Top_right__mjbXY",menuButton:"Top_menuButton__3Pymg"}},93:function(e,t,n){e.exports={noTodos:"TodosList_noTodos__S0a-J",completed:"TodosList_completed__1HJ9M"}},94:function(e,t,n){e.exports={colorsAndButtons:"ThemeModal_colorsAndButtons__3s8NN",buttons:"ThemeModal_buttons__3SGu3",active:"ThemeModal_active__317fr"}},95:function(e,t,n){e.exports={card:"TodosGridView_card__2eVQZ",secondaryText:"TodosGridView_secondaryText__3MS54",completed:"TodosGridView_completed__24xmN"}}},[[311,1,2]]]);
//# sourceMappingURL=main.f98e44e2.chunk.js.map