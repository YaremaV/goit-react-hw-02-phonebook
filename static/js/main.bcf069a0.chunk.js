(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),o=n.n(r),s=(n(14),n(9)),i=n(2),u=n(3),b=n(5),l=n(4),d=n(18),h=n(0);function j(t){var e=t.contacts,n=t.onDeleteContacts;return Object(h.jsx)("ul",{className:"contacts",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{children:[a,":",c,Object(h.jsx)("button",{type:"button",className:"TodoList__btn",onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})}var m=n(8),O=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(m.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state.name,t.state.number),t.setState({name:"",number:""}),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsxs)("label",{children:["Name",Object(h.jsx)("input",{type:"text",value:e,name:"name",onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContacts=function(e,n){var a={id:Object(d.a)(),name:e,number:n};t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{onSubmit:this.addContacts}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(j,{contacts:this.state.contacts,onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component);f.defaultProps={};var p=f;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bcf069a0.chunk.js.map