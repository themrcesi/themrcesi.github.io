(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{60:function(e,a,t){e.exports=t(94)},65:function(e,a,t){},77:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(11),r=t.n(i);t(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(12),o=t(13),s=t(16),m=t(15),u=t(112),d=t(113),p=t(10),g=t.n(p),E=(t(66),t(19)),f=(t(77),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).scrollToTop=function(){E.animateScroll.scrollToTop()},n.links=[{name:"HOME",ref:"home"},{name:"ABOUT",ref:"about"},{name:"PORTFOLIO",ref:"projects"},{name:"CONTACT",ref:"contact"},{name:"RESUME",ref:"/files/cv.pdf"}],n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){g()(".navbar-toggler").on("click",(function(){g()("#mainNav").hasClass("navbar-reduce")||g()("#mainNav").addClass("navbar-reduce")})),g()(".js-scroll").on("click",(function(){g()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector("#mainNav").classList.add("navbar-reduce"),document.querySelector("#mainNav").classList.remove("navbar-trans")):(document.querySelector("#mainNav").classList.add("navbar-trans"),document.querySelector("#mainNav").classList.remove("navbar-reduce"))})),g()(".js-scroll").on("click",(function(){g()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u.a,{className:"navbar-b navbar-trans fixed-top",id:"mainNav",collapseOnSelect:!0,expand:"md"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a.Brand,{className:"home-style"},"themrcesi"),l.a.createElement(u.a.Toggle,{"aria-controls":"navbarDefault"}),l.a.createElement(u.a.Collapse,{className:"justify-content-end",id:"navbarDefault"},this.links.map((function(e,a){return"RESUME"===e.name?l.a.createElement(d.a.Item,{key:a},l.a.createElement(d.a.Link,{className:"js-scroll",target:"blank",href:e.ref},l.a.createElement("a",null,e.name))):l.a.createElement(d.a.Item,{key:a},l.a.createElement(d.a.Link,{className:"js-scroll"},l.a.createElement(E.Link,{activeClass:"current-navlink",to:e.ref,spy:!0,smooth:!0,duration:1e3},e.name)))}))))))}}]),t}(n.Component)),h=(t(79),t(54)),v=t.n(h),b=(t(80),t(108)),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home",className:"intro route bg-image background"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{id:"stars2"}),l.a.createElement("div",{id:"stars3"}),l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am C\xe9sar Garc\xeda Cabeza"),l.a.createElement("p",{className:"intro-subtitle"},l.a.createElement("span",{className:"text-slider-items"}),l.a.createElement("strong",{className:"text-slider"},l.a.createElement(v.a,{strings:["B.Eng. Computer Software Engineering","M.Sc. Artificial Intelligence","Always ready to learn new things"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),l.a.createElement("p",{className:"pt-3"},l.a.createElement(b.a,{className:"btn-primary js-scroll px-4"},l.a.createElement(E.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-100,duration:1e3},"View My Work")))))))}}]),t}(l.a.Component),y=(t(81),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={skills:[{id:"Java_skill",content:"Machine Learning",value:"50"},{id:"Python_skill",content:"Python",value:"85"},{id:"C#_skill",content:"Deep Learning",value:"50"},{id:"React_skill",content:"NLP",value:"55"},{id:"LaTeX_skill",content:"Software Design & Development",value:"80"},{id:"analytical",content:"Information Retrieval",value:"50"},{id:"solving_skill",content:"Problem solving",value:"80"},{id:"Teamwork_skill",content:"Team work",value:"90"},{id:"Leadership_skill",content:"Leadership",value:"95"}],about_me:[{id:"first-p-about",content:"Software Engineer with a Master\xb4s Degree in Artificial Intelligence who loves everything related to technology. I am passionate about Data and Artificial Intelligence and particularly all its real-life applications."},{id:"second-p-about",content:"Sports and music have always been an essential part of my life, specially Judo!"}]},e}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},l.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},l.a.createElement("img",{src:"/img/foto.jpg",className:"img-fluid rounded b-shadow-a",alt:""}))),l.a.createElement("div",{className:"col-sm-6 col-md-7"},l.a.createElement("div",{className:"about-info"},l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Name: ")," ",l.a.createElement("span",null,"C\xe9sar Garc\xeda Cabeza")),l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Profile: ")," ",l.a.createElement("span",null,"Software Engineer (AI)")),l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Email: ")," ",l.a.createElement("span",null,"cesar.gar.cabeza@gmail.com")),l.a.createElement("p",null,l.a.createElement("span",{className:"title-s"},"Phone: ")," ",l.a.createElement("span",null,"(+34) 648 035 992"))))),l.a.createElement("div",{className:"skill-mf"},l.a.createElement("p",{className:"title-s"},"Skills"),this.state.skills.map((function(e){return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement("span",null,e.content)," ",l.a.createElement("span",{className:"pull-right"}),l.a.createElement("div",{className:"progress"},l.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.value+"%"},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"about-me pt-4 pt-md-0"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return l.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(l.a.Component)),k=(t(82),t(58)),w=t(33),C=t(114),S=t(55),x=t.n(S);function L(e){var a=e.project,t=a.title,i=a.categories,r=a.text,c=a.mainPicture,o=a.pictures,s=a.github,m=a.deploy,u=Object(n.useState)(!1),d=Object(w.a)(u,2),p=d[0],g=d[1];return l.a.createElement(C.a,{className:"work-box"},l.a.createElement("div",{onClick:function(){return g(!p)}},l.a.createElement("div",{className:"work-img"},l.a.createElement(C.a.Img,{className:"img-fluid",variant:"top",src:c})),l.a.createElement(C.a.Body,{className:"work-content"},l.a.createElement(C.a.Title,{className:"w-title"},t),l.a.createElement(C.a.Subtitle,{className:"w-category"},i.map((function(e){return"-"+e+"-"}))),l.a.createElement(C.a.Text,null,r))),l.a.createElement(C.a.Footer,null,l.a.createElement(C.a.Link,{target:"blank",href:s},"Github"),m&&l.a.createElement(C.a.Link,{target:"blank",href:m},"Check it out!")),l.a.createElement(x.a,{toggler:p,sources:[].concat(Object(k.a)(o),[c])}))}function P(e){var a=e.course,t=a.title,n=a.subtitle,i=a.text,r=a.mainPicture,c=a.link,o=a.certificate;return l.a.createElement(C.a,null,l.a.createElement("div",{className:"work-img"},l.a.createElement(C.a.Img,{className:"img-fluid",variant:"top",src:r})),l.a.createElement(C.a.Body,{className:"work-content"},l.a.createElement(C.a.Title,{className:"w-title"},t),l.a.createElement(C.a.Subtitle,null,n),l.a.createElement(C.a.Text,null,i)),l.a.createElement(C.a.Footer,null,l.a.createElement(C.a.Link,{target:"blank",href:c},"Link to course"),o&&l.a.createElement(C.a.Link,{target:"blank",href:o},"Certificate")))}var I=function(){return l.a.createElement("section",{id:"projects",className:"portfolio-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Portfolio"),l.a.createElement("p",{className:"subtitle-a"},"Check Out My Latest Projects."),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row"},[{title:"Bachelor\xb4s Thesis",categories:["C#","Simulated Annealing","Linear programming","Optimization","Latex"],text:"Development of aggregation methods of partially ordered sets.",mainPicture:"/img/posets.png",pictures:[],github:"https://github.com/themrcesi/UNIMODE"},{title:"Master\xb4s Thesis",categories:["Information Retrieval","Multilinguality","Python","Artificial Intelligence"],text:"Use of Interlinguas for Cross-Language Information Retrieval",mainPicture:"/img/tfm.jpg",pictures:[],github:"https://github.com/themrcesi/tfm"},{title:"ViaDe",categories:["React","Solid","Redux","Leaflet","Docker","CI"],text:"Route management system based on the Solid project created by Tim Berners-Lee.",mainPicture:"/img/viade.png",pictures:["/img/viade_dashboard.png","/img/viade_upload.png","/img/viade_myRoutes.png","/img/viade_modal.png"],github:"https://github.com/Arquisoft/viade_en1b",deploy:"https://arquisoft.github.io/viade_en1b"},{title:"C-- Compiler",categories:["Java","ANTLR","Lexical, Syntactical and Semantic Analysis","Programming Language Design"],text:"Compiler for the C-- language developed in Java.",mainPicture:"/img/c--.png",pictures:[],github:"https://github.com/themrcesi/C--Compiler"},{title:"Machine Learning Ranking",categories:["Python","Machine Learning","Information Retrieval","LOINC","Learning to Rank"],text:"Ranker for the LOINC medical terminology applying machine learning techniques.",mainPicture:"/img/mlranking.png",pictures:[],github:"https://github.com/themrcesi/Biomedical-Informatics/tree/main/Machine%20Learning%20Ranking"},{title:"Information Retrieval Engine",categories:["Python","Information Retrieval","Word2Vec","Latent Semantic Indexing","Vector Space Model","TFIDF","Fast Text","TREC"],text:"Information Retrieval Engine for the CORD-19 corpus.",mainPicture:"/img/ire.PNG",pictures:[],github:"https://github.com/themrcesi/Biomedical-Informatics/tree/main/Information%20Retrieval%20Engine"},{title:"Document Classifier",categories:["Tf-idf","Gensim","Glossary","Word2Vec","Naive Bayes","NLP","Text Classification"],text:"Document Classifier with Glossary implemented in Python.",mainPicture:"/img/doc_class.png",pictures:["/img/doc_class_cbow.PNG","/img/doc_class_sim.PNG","/img/doc_class_reor.PNG"],github:"https://github.com/themrcesi/Linguistic-Engineering/tree/main/Documents-Classifier"},{title:"Question-Answer System",categories:["Question-Answering","NLP","Python","Information Extraction"],text:"Question-Answer System implemented in Python.",mainPicture:"/img/qa.png",pictures:["/img/qa_app.png","/img/qa_quest.png"],github:"https://github.com/themrcesi/Linguistic-Engineering/tree/main/QA-System"},{title:"Computer Vision Exercises",categories:["Open CV","Python","Epipolar Geometry","Camera Calibration","Stereo Vision","Image Classification","CNN"],text:"Computer vision exercises: from classic techniques to deap learning approaches.",mainPicture:"/img/cv.PNG",pictures:["/img/cv_1.PNG","/img/cv_1_1.PNG","/img/cv_2.PNG","/img/cv_2_1.PNG","/img/cv_3.PNG"],github:"https://github.com/themrcesi/ComputerVision"},{title:"Autonomous Robots",categories:["Path planning","Value Iteration","Dijkstra","A*","Depth First Search"],text:"Path planning algorithms implementation.",mainPicture:"/img/robots.jpg",pictures:["/img/robots_app.PNG","/img/robots_output.png"],github:"https://github.com/themrcesi/Autonomous-Robots"}].map((function(e,a){return l.a.createElement("div",{key:a,className:"col-md-4"},l.a.createElement(L,{project:e}))}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("p",{className:"subtitle-a"},"Check Out My Latest Courses."),l.a.createElement("div",{className:"line-mf"}))),[{title:"Machine Learning, Data Science and Deep Learning with Python",subtitle:"Sundog Education by Frank Kane",text:"Complete hands-on machine learning tutorial with data science, Tensorflow, artificial intelligence, and neural networks.",mainPicture:"https://static.skillshare.com/uploads/video/thumbnails/3bb278df88564638b454c7513ece3e78/original",link:"https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/",certificate:"/files/udemy_1.pdf"},{title:"Deep Learning Specialization",subtitle:"Coursera - Deeplearning.ai",text:"Deep Learning is transforming multiple industries. This five-course specialization will help you understand Deep Learning fundamentals, apply them, and build a career in AI.",mainPicture:"/img/dl.png",link:"https://www.coursera.org/specializations/deep-learning",certificate:"https://www.coursera.org/account/accomplishments/specialization/MMUG7U7XD3Q6"}].map((function(e,a){return l.a.createElement("div",{key:a,className:"col-md-4"},l.a.createElement(P,{course:e}))})))))},j=t(20),O=(t(86),t(42)),D=t(35);t(87);function T(){return l.a.createElement("section",{id:"timeline",className:"about-mf sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement("h3",{className:"title-a"},"Work experience & education"),l.a.createElement("p",{className:"subtitle-a"},"My previous jobs and my qualifications."),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement(j.VerticalTimeline,null,l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2016 - 2020",iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:l.a.createElement(O.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Bachelor of Engineering in Computer Software Engineering"),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Bachelor\xb4s Degree"),l.a.createElement("p",null,"Maths, Programming, Software Development")),l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"September 2019- October 2019",iconStyle:{background:"#0078ff",color:"#fff"},icon:l.a.createElement(D.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Research Assistant @UNIMODE Research Group"),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Internship"),l.a.createElement("p",null,l.a.createElement("span",null,"Analysis and optimization of algorithms | Development of new algorithms | C#"))),l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2020 - 2021",iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:l.a.createElement(O.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Master of Science in Artificial Intelligence"),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Master\xb4s Degree"),l.a.createElement("p",null,"Machine and Deep Learning, NLP, Information Retrieval, Computer Vision")),l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"April - June (2021)",iconStyle:{background:"#0078ff",color:"#fff"},icon:l.a.createElement(D.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer @DAIL Software"),l.a.createElement("p",null,l.a.createElement("span",null,"Development of ChatBots (Python + Rasa) | Information Retrieval Engine | Docker"))),l.a.createElement(j.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"February 2021 - Present",iconStyle:{background:"#0078ff",color:"#fff"},icon:l.a.createElement(D.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Software Engineer @StockFink"),l.a.createElement("p",null,l.a.createElement("span",null,"Tasks automation using Python"))))))}t(88),t(89);function R(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box"},l.a.createElement("p",{className:"copyright"},"2021 \xa9 Copyright ",l.a.createElement("strong",null,"C\xe9sar Garc\xeda Cabeza"),". All Rights Reserved"))))))}var _=t(111),M=(t(90),t(109)),A=t(110);function G(e){var a=Object(n.useState)(""),t=Object(w.a)(a,2),i=(t[0],t[1]);return l.a.createElement("section",{id:"contact",className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url(/img/background.jpg)"}},l.a.createElement("div",{className:"overlay-mf"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"contact-mf"},l.a.createElement("div",{id:"contact",className:"box-shadow-full"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2"},l.a.createElement("h5",{className:"title-left"},"Send A Message")),l.a.createElement("div",null,l.a.createElement(_.a,{onSubmit:function(e){e.preventDefault();var a=e.target,t=new FormData(a),n=new XMLHttpRequest;n.open("POST","https://formspree.io/xlepblnl"),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),i("SUCCESS")):i("ERROR"))},n.send(t)},className:"contactForm"},l.a.createElement(_.a.Group,{required:!0,controlId:"exampleForm.ControlInput1"},l.a.createElement(_.a.Control,{id:"name",name:"name",type:"text",placeholder:"Your Name"})),l.a.createElement(_.a.Group,{controlId:"exampleForm.ControlInput2"},l.a.createElement(_.a.Control,{required:!0,id:"email",name:"email",type:"email",placeholder:"Your Email"})),l.a.createElement(_.a.Group,{controlId:"exampleForm.ControlInput3"},l.a.createElement(_.a.Control,{required:!0,id:"subject",name:"subject",type:"text",placeholder:"Subject"})),l.a.createElement(_.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(_.a.Control,{required:!0,as:"textarea",rows:"5",placeholder:"Message"})),l.a.createElement(b.a,{variant:"primary",type:"submit",className:"button-a button-big button-rounded"},"Send Message")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},l.a.createElement("h5",{className:"title-left"},"Get in Touch")),l.a.createElement("div",{className:"more-info"},l.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",l.a.createElement("br",null),"Simply fill the from and send me an email.")),l.a.createElement("div",{className:"socials"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/themrcesi",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement(M.a,null)))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/c\xe9sar-garc\xeda-cabeza/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("span",{className:"ico-circle"},l.a.createElement(A.a,null))))))))))))),l.a.createElement(R,null))}var q=t(57),F=(t(93),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement(E.Link,{id:"back-to-top",className:"back-to-top animated",activeClass:"current-navlink",to:"home",spy:!0,smooth:!0,duration:1e3},l.a.createElement(q.a,{style:{height:40}}))}}]),t}(l.a.Component));r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(N,null),l.a.createElement(y,null),l.a.createElement(T,null),l.a.createElement(I,null),l.a.createElement(G,null),l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.293d53d5.chunk.js.map