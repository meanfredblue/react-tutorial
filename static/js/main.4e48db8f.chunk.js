(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(7),c=a.n(r),s=a(9),i=a(2),h=a(3),l=a(5),j=a(4),o=a(0),b=function(){return Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Job"})]})})},u=function(e){var t=e.characterData.map((function(t,a){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:t.name}),Object(o.jsx)("td",{children:t.job}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{onClick:function(){return e.deleteCharacter(a)},children:"Delete"})})]},a)}));return Object(o.jsx)("tbody",{children:t})},d=function(e){var t=e.characterData,a=e.deleteCharacter;return Object(o.jsxs)("table",{children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{characterData:t,deleteCharacter:a})]})},m=a(8),O=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).initialState={name:"",job:""},e.state=e.initialState,e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(m.a)({},n,r))},e.submitForm=function(){e.props.handleSubmit(e.state),e.setState(e.initialState)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name"}),Object(o.jsx)("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),Object(o.jsx)("label",{htmlFor:"job",children:"Job"}),Object(o.jsx)("input",{type:"text",name:"job",id:"job",value:a,onChange:this.handleChange}),Object(o.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),a}(n.Component),x=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={characters:[{name:"Charlie",job:"Janitor"},{name:"Mac",job:"Bouncer"},{name:"Dee",job:"Aspring actress"},{name:"Dennis",job:"Bartender"}],deletedCharacters:[]},e.deleteCharacter=function(t){var a=e.state.characters,n=a.splice(t,1),r=e.state.deletedCharacters;r.push(n[0]),console.log(a),console.log(r),e.setState({characters:a,deletedCharacters:r})},e.handleSubmit=function(t){e.setState({characters:[].concat(Object(s.a)(e.state.characters),[t])})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state.characters;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Hello, React!"}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(d,{characterData:e,deleteCharacter:this.deleteCharacter}),Object(o.jsx)(O,{handleSubmit:this.handleSubmit})]})]})}}]),a}(n.Component);a(15);c.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4e48db8f.chunk.js.map