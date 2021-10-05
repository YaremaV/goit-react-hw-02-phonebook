(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":4591256},{"id":"id-2","name":"Hermione Kline","number":4438912},{"id":"id-3","name":"Eden Clements","number":6451779},{"id":"id-4","name":"Annie Copeland","number":2279126}]')},,function(e,t,n){e.exports={form:"form_form__2TwBy"}},function(e,t,n){e.exports={filter:"filter_filter__19qJk"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),o=(n(17),n(12)),s=n(2),u=n(3),l=n(5),d=n(4),b=n(23),m=(n(18),n(0));function h(e){var t=e.contacts,n=e.onDeleteContacts;return Object(m.jsx)("ul",{className:"contacts",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(m.jsxs)("li",{children:[a,":",r,Object(m.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}var j=n(8),f=n(9),O=n(10),p=n.n(O),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(f.a)({},t.currentTarget.name,t.currentTarget.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.name,e.state.number),e.setState({name:"",number:""}),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(m.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",value:t,name:"name",onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),x=n(11),C=n.n(x);function g(e){var t=e.value,n=e.onHandleFilter;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsxs)("label",{className:C.a.filter,children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:t,onChange:n})]})]})}n(20);var y=function(e){var t=e.children;return Object(m.jsx)("div",{className:"Container",children:t})},S=function(e){var t=e.children;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(y,{children:t})})},w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:j,filter:""},e.addContacts=function(t,n){var a=e.state.contacts,r={id:Object(b.a)(),name:t,number:n};a.some((function(e){return e.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(t," is already in contacts")):e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(o.a)(t))}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getFilteredContacts=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getFilteredContacts();return Object(m.jsxs)(S,{children:[Object(m.jsx)(v,{onSubmit:this.addContacts}),Object(m.jsx)(g,{value:e,onHandleFilter:this.changeFilter}),Object(m.jsx)(h,{contacts:t,onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component);w.defaultProps={};var k=w;i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.73f5b503.chunk.js.map