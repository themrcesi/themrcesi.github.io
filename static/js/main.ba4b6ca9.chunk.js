(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{56:function(e,a,t){e.exports=t(85)},61:function(e,a,t){},73:function(e,a,t){},75:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r);t(61),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(11),s=t(12),i=t(15),m=t(14),u=t(104),d=t(105),p=t(9),E=t.n(p),v=(t(62),t(18)),f=(t(73),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).scrollToTop=function(){v.animateScroll.scrollToTop()},n.links=[{name:"HOME",ref:"home"},{name:"ABOUT",ref:"about"},{name:"PROJECTS",ref:"projects"},{name:"CONTACT",ref:"contact"},{name:"RESUME",ref:"/files/cv.pdf"}],n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){E()(".navbar-toggler").on("click",(function(){E()("#mainNav").hasClass("navbar-reduce")||E()("#mainNav").addClass("navbar-reduce")})),E()(".js-scroll").on("click",(function(){E()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector("#mainNav").classList.add("navbar-reduce"),document.querySelector("#mainNav").classList.remove("navbar-trans")):(document.querySelector("#mainNav").classList.add("navbar-trans"),document.querySelector("#mainNav").classList.remove("navbar-reduce"))})),E()(".js-scroll").on("click",(function(){E()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,{className:"navbar-b navbar-trans fixed-top",id:"mainNav",collapseOnSelect:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a.Brand,{className:"home-style"},"themrcesi"),l.a.createElement(u.a.Toggle,{"aria-controls":"navbarDefault"}),l.a.createElement(u.a.Collapse,{className:"justify-content-end",id:"navbarDefault"},this.links.map((function(e,a){return"RESUME"===e.name?l.a.createElement(d.a.Item,{key:a},l.a.createElement(d.a.Link,{className:"js-scroll",target:"blank",href:e.ref},l.a.createElement("a",null,e.name))):l.a.createElement(d.a.Item,{key:a},l.a.createElement(d.a.Link,{className:"js-scroll"},l.a.createElement(v.Link,{activeClass:"current-navlink",to:e.ref,spy:!0,smooth:!0,duration:1e3},e.name)))}))))))}}]),t}(n.Component)),b=(t(75),t(50)),g=t.n(b),h=(t(76),t(99)),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am C\xe9sar Garc\xeda Cabeza"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},l.a.createElement(g.a,{strings:["Software Engineer","Curious about Artificial Intelligence","Always ready to learn new things"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),l.a.createElement("p",{className:"pt-3"},l.a.createElement(h.a,{className:"btn-primary js-scroll px-4"},l.a.createElement(v.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-100,duration:1e3},"View My Work")))))))}}]),t}(l.a.Component),y=(t(77),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={skills:[{id:"Java_skill",content:"Java",value:"75"},{id:"Python_skill",content:"Python",value:"65"},{id:"C#_skill",content:"C#",value:"65"},{id:"React_skill",content:"ReactJS",value:"70"},{id:"LaTeX_skill",content:"LaTeX",value:"80"},{id:"analytical",content:"Analytical skills",value:"85"},{id:"solving_skill",content:"Problem solving",value:"80"},{id:"Teamwork_skill",content:"Team work",value:"85"},{id:"Leadership_skill",content:"Leadership",value:"95"}],about_me:[{id:"first-p-about",content:"Software Engineer who loves everything related to technology. I am passionate about Artificial Intelligence and particularly all its real-life applications."},{id:"second-p-about",content:"Sports and music have always been an essential part of my life."},{id:"third-p-about",content:"Always ready to learn new things. If I have a goal, I don't stop until I get it."}]},e}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},l.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},l.a.createElement("img",{src:"/img/foto.jpg",className:"img-fluid rounded b-shadow-a",alt:""}))),l.a.createElement("div",{className:"col-sm-6 col-md-7"},l.a.createElement("div",{className:"about-info"},l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Name: ")," ",l.a.createElement("span",null,"C\xe9sar Garc\xeda Cabeza")),l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Profile: ")," ",l.a.createElement("span",null,"Software Engineer")),l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Email: ")," ",l.a.createElement("span",null,"UO257314@uniovi.es")),l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Phone: ")," ",l.a.createElement("span",null,"(+34) 648 035 992"))))),l.a.createElement("div",{className:"skill-mf"},l.a.createElement("p",{className:"title-s"},"Skills"),this.state.skills.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement("span",null,e.content)," ",l.a.createElement("span",{className:"pull-right"}),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.value+"%"},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"about-me pt-4 pt-md-0"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return l.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(l.a.Component)),k=(t(78),t(54)),w=t(30),C=t(106),j=t(51),S=t.n(j);function O(e){var a=e.project,t=a.title,r=a.categories,c=a.text,o=a.mainPicture,s=a.pictures,i=a.github,m=a.deploy,u=Object(n.useState)(!1),d=Object(w.a)(u,2),p=d[0],E=d[1];return l.a.createElement(C.a,{className:"work-box"},l.a.createElement("div",{onClick:function(){return E(!p)}},l.a.createElement("div",{className:"work-img"},l.a.createElement(C.a.Img,{className:"img-fluid",variant:"top",src:o})),l.a.createElement(C.a.Body,{className:"work-content"},l.a.createElement(C.a.Title,{className:"w-title"},t),l.a.createElement(C.a.Subtitle,{className:"w-category"},r.map((function(e){return e+" "}))),l.a.createElement(C.a.Text,null,c))),l.a.createElement(C.a.Footer,null,l.a.createElement(C.a.Link,{target:"blank",href:i},"Github"),m&&l.a.createElement(C.a.Link,{target:"blank",href:m},"Check it out!")),l.a.createElement(S.a,{toggler:p,sources:[].concat(Object(k.a)(s),[o])}))}var x=function(){return l.a.createElement("section",{id:"projects",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Portfolio"),l.a.createElement("p",{className:"subtitle-a"},"Check Out My Latest Projects."),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row"},[{title:"ViaDe",categories:["React","Solid","Redux","Leaflet","Docker","CI"],text:"Route management system based on the Solid project created by Tim Berners-Lee.",mainPicture:"/img/viade.png",pictures:["/img/viade_dashboard.png","/img/viade_upload.png","/img/viade_myRoutes.png","/img/viade_modal.png"],github:"https://github.com/Arquisoft/viade_en1b",deploy:"https://arquisoft.github.io/viade_en1b"},{title:"C-- Compiler",categories:["Java","ANTLR","Lexical, Syntactical and Semantic Analysis","Programming Language Desing"],text:"Compiler for the C-- language developed in Java.",mainPicture:"/img/c--.png",pictures:[],github:"https://github.com/themrcesi/C--Compiler"},{title:"Final Degree Project",categories:["C#","Simulated Annealing","Linear programming","Optimization","Latex"],text:"Development of aggregation methods of partially ordered sets.",mainPicture:"/img/posets.png",pictures:[],github:"https://github.com/themrcesi/UNIMODE",deploy:"/files/tfg.pdf"}].map((function(e,a){return l.a.createElement("div",{key:a,className:"col-md-4"},l.a.createElement(O,{project:e}))})))))};t(79),t(80);function L(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box"},l.a.createElement("p",{className:"copyright"},"2020 \xa9 Copyright ",l.a.createElement("strong",null,"C\xe9sar Garc\xeda Cabeza"),". All Rights Reserved"))))))}var I=t(103),T=(t(81),t(100)),_=t(101),q=t(102);function R(e){var a=Object(n.useState)(""),t=Object(w.a)(a,2),r=(t[0],t[1]);return l.a.createElement("section",{id:"contact",className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url(/img/background.jpg)"}},l.a.createElement("div",{className:"overlay-mf"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"contact-mf"},l.a.createElement("div",{id:"contact",className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"Send A Message")),l.a.createElement("div",null,l.a.createElement(I.a,{onSubmit:function(e){e.preventDefault();var a=e.target,t=new FormData(a),n=new XMLHttpRequest;n.open("POST","https://formspree.io/xlepblnl"),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),r("SUCCESS")):r("ERROR"))},n.send(t)},className:"contactForm"},l.a.createElement(I.a.Group,{required:!0,controlId:"exampleForm.ControlInput1"},l.a.createElement(I.a.Control,{id:"name",name:"name",type:"text",placeholder:"Your Name"})),l.a.createElement(I.a.Group,{controlId:"exampleForm.ControlInput2"},l.a.createElement(I.a.Control,{required:!0,id:"email",name:"email",type:"email",placeholder:"Your Email"})),l.a.createElement(I.a.Group,{controlId:"exampleForm.ControlInput3"},l.a.createElement(I.a.Control,{required:!0,id:"subject",name:"subject",type:"text",placeholder:"Subject"})),l.a.createElement(I.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(I.a.Control,{required:!0,as:"textarea",rows:"5",placeholder:"Message"})),l.a.createElement(h.a,{variant:"primary",type:"submit",className:"button-a button-big button-rounded"},"Send Message")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},l.a.createElement("h5",{className:"title-left"},"Get in Touch")),l.a.createElement("div",{className:"more-info"},l.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",l.a.createElement("br",null),"Simply fill the from and send me an email.")),l.a.createElement("div",{className:"socials"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/themrcesi",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement(T.a,null)))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/c\xe9sar-garc\xeda-cabeza/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement(_.a,null)))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/cgcjc/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement(q.a,null))))))))))))),l.a.createElement(L,null))}var A=t(53),P=(t(84),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement(v.Link,{id:"back-to-top",className:"back-to-top animated",activeClass:"current-navlink",to:"home",spy:!0,smooth:!0,duration:1e3},l.a.createElement(A.a,{style:{height:40}}))}}]),t}(l.a.Component));c.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(N,null),l.a.createElement(y,null),l.a.createElement(x,null),l.a.createElement(R,null),l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.ba4b6ca9.chunk.js.map