(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),i=a.n(s),o=a(6),l=a(1),c=a(4),u=a(5),m=a(8),d=a(7),h=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],g=function(e){return e.list.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h1",null,"".concat(e.title)),r.a.createElement("p",null,e.user.name),r.a.createElement("p",null,e.completed?"completed":"not completed"))}))},b=function(e){var t=e.usersList,a=e.changeTask,n=e.changeUserId,s=e.value,i=e.id,o=e.addNewTask,l=e.inputValue,c=e.personError,u=e.titleError;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("label",{htmlFor:"title",className:"form__title"},r.a.createElement("input",{type:"text",id:"title",onChange:a,value:l})),u||r.a.createElement("span",null," Please enter the title "),r.a.createElement("br",null),r.a.createElement("select",{onChange:n,value:s,className:"form__person"},r.a.createElement("option",{value:"0"},"Choose person"),t.map((function(e){return r.a.createElement("option",{value:e.id,key:e.id},e.name)}))),c||r.a.createElement("span",null,"Please choose a user"),r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){return o(i)},className:"form__btn",type:"submit"},"add task"))},y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todoList:p.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),userId:0,userTask:"",titleError:!0,personError:!0},e.addNewTask=function(t){if(!e.state.userId||!e.state.userTask)return e.state.userTask?e.setState({titleError:!0}):e.setState({titleError:!1}),void(e.state.userId?e.setState({personError:!0}):e.setState({personError:!1}));e.setState((function(e){return{todoList:[].concat(Object(o.a)(e.todoList),[{id:t,title:e.userTask,completed:!1,user:h.find((function(t){return t.id===e.userId}))}]),userId:0,userTask:"",titleError:!0,personError:!0}}))},e.changeTask=function(t){var a=!!t.target.value;e.setState({userTask:t.target.value,titleError:a})},e.changeUserId=function(t){var a=!!+t.target.value;e.setState({userId:+t.target.value,personError:a})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),h.length),r.a.createElement(b,{usersList:h,changeTask:this.changeTask,changeUserId:this.changeUserId,addNewTask:this.addNewTask,value:this.state.userId,id:this.state.todoList.length+1,inputValue:this.state.userTask,titleError:this.state.titleError,personError:this.state.personError}),r.a.createElement(g,{list:this.state.todoList}))}}]),a}(n.Component);i.a.render(r.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.77b7d722.chunk.js.map