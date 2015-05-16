webpackJsonpdsa([9],{11:function(n,t,e){n.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./queue.h"</span>\n\nvoid init(Queue *q) {\n    q->head = <span class="number">0</span>;\n    q->tail = <span class="number">1</span>;\n}\n\nint isFull(Queue *q) {\n    <span class="keyword">if</span> (q->head == q->tail) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n}\n\nint isEmpty(Queue *q) {\n    <span class="keyword">if</span> ((q->head + <span class="number">1</span>) % N == q->tail) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n}\n\nvoid enque(Queue *q, int val) {\n    <span class="keyword">if</span> (isFull(q) == <span class="number">1</span>) {\n        printf(<span class="string">"queue full.\\n"</span>);\n    } <span class="keyword">else</span> {\n        q->data[q->tail] = val;\n        q->tail = (q->tail + <span class="number">1</span>) % N;\n    }\n}\n\nvoid deque(Queue *q) {\n    <span class="keyword">if</span> (isEmpty(q) == <span class="number">1</span>) {\n        printf(<span class="string">"queue empty.\\n"</span>);\n    } <span class="keyword">else</span> {\n        q->head = (q->head + <span class="number">1</span>) % N;\n    }\n}\n\nint front(Queue *q) {\n    <span class="keyword">if</span> (isEmpty(q) == <span class="number">1</span>) {\n        printf(<span class="string">"queue empty.\\n"</span>);\n        <span class="keyword">return</span> -<span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> q->data[(q->head + <span class="number">1</span>) % N];\n    }\n}'},12:function(n,t,e){n.exports='<span class="comment">#define N 15</span>\n\ntypedef struct {\n    int head;\n    int tail;\n    int data[N];\n} Queue;\n\nvoid init(Queue *q);\nint isFull(Queue *q);\nint isEmpty(Queue *q);\nvoid enque(Queue *q, int val);\nvoid deque(Queue *q);\nint front(Queue *q);'},21:function(n,t,e){function s(n){currentStatus.headtail=void 0===n?0:1}function a(n){currentStatus.toque=void 0===n?[]:[n]}function r(n){currentStatus.tofront=void 0===n?[]:[n]}function i(n,t,e){1===t&&(lastStatus=l(currentStatus)),p.push({status:lastStatus,line:n,animation:e,id:u}),u++}function o(){i(p[p.length-1].line,1)}var c,l=e(4),p=[],u=0,d=8;_id=0;var h=function(){i(5,1),currentStatus.head=0,i(6,1),currentStatus.tail=1,queue=[],currentStatus.queue=queue},f=function(){return i(10,1),s(1),queue.length===d-1?(i(11,1),!0):(i(13,1),s(),!1)},m=function(){return s(1),i(18,1),0===queue.length?(i(19,1),!0):(i(21,1),s(),!1)},y=function(n){a(n),i(26,1),f()?(i(27,1),console.log("queue full."),a()):(i(29,1),queue.push({v:n,i:_id++}),a(),i(30,1),currentStatus.tail++)},g=function(){i(35,1),m()?(i(36,1),console.log("queue empty.")):(i(38,1),queue.shift(),currentStatus.head++)},v=function(){return i(43,1),m()?(i(44,1),console.log("queue empty."),i(45,1),-1):(i(47,1),c=queue[0].v,r(c),c)};currentStatus={},lastStatus={},n.exports={getInitialDescriptions:function(){return this.initialize(!0),y(0),y(50),this.run("enque",100)},initialize:function(n){return p=[],u=0,n&&(queue=[]),currentStatus={queue:queue,tofront:[],toque:[],headtail:0,head:currentStatus.head||0,tail:currentStatus.tail||1},lastStatus=l(currentStatus),this},enque:y,deque:g,front:v,init:h,run:function(n,t){return this.initialize()[n](t),o(),{frames:p,others:{N:d}}}}},45:function(n,t,e){var s=e(1),a=e(2);n.exports=s.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},render:function(){return s.createElement("div",{className:"list"},s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"init"),value:"初始化"}),s.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"整数"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"enque"),value:"入队"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"deque"),value:"出队"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"front"),value:"队首"}))},_onChange:function(n){this.setState({text:n.target.value})},_onClick:function(n){a.runDemo(n,this.state.text)}})},69:function(n,t,e){n.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=main.c queue.c\nOBJECTS=$(SOURCES:.cpp=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},70:function(n,t,e){n.exports='<span class="comment">#include "./queue.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  Queue queue;\n  init(&amp;stack);\n  enque(&amp;stack, <span class="number">0</span>);\n  enque(&amp;stack, <span class="number">50</span>);\n  euque(&amp;stack, <span class="number">100</span>);\n  <span class="comment">// 在系统中运行命令：</span>\n  <span class="comment">// 初始化、入栈、出栈、栈顶</span>\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},102:function(n,t,e){function s(n){return n=n||0,x.svg.arc().innerRadius(_+n).outerRadius(b+n)}function a(n){return E*n/k}function r(n,t){return void 0===t&&(t=n+1),{startAngle:a(n),endAngle:a(t)}}function i(n,t){return void 0===t&&(t=n+50),{innerRadius:n,outerRadius:t}}function o(){var n=[g.head,g.tail];f.selectAll("path.head").data(n).enter().append("path").attr("class","head"),f.selectAll("path.head").data(n).transition().duration(v).style("fill",function(n,t){return g.headtail?A:"tomato"}).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=x.interpolate(i(t?150:200),i(t?100:150));return this.__prev__=r(n),function(t){return x.svg.arc().startAngle(a(n)).endAngle(a(n+1))(e(t))}}var e=x.interpolate(this.__prev__,r(n));return this.__prev__=r(n),function(n){return x.svg.arc().innerRadius(t?100:150).outerRadius(t?150:200)(e(n))}}),m.selectAll("text.head").data(n).enter().append("text").attr("class","head").attr("dy",5).attr("transform",w().translate(function(n,t){return x.svg.arc().innerRadius(t?150:200).outerRadius(t?200:250).centroid(r(n))})).text(function(n,t){return t?"队尾":"队首"}),m.selectAll("text.head").data(n).transition().duration(v).attr("transform",w().translate(function(n,t){return x.svg.arc().innerRadius(t?100:150).outerRadius(t?150:200).centroid(r(n,n+1))}))}function c(){var n=g.queue,t=function(n){return n.i};f.selectAll("path.item").data(n,t).enter().append("path").attr("class","item"),f.selectAll("path.item").data(n,t).style("opacity",1).transition().duration(v).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=x.interpolate(i(200),i(150));return this.__prev__=r(g.head+1+t),function(n){return x.svg.arc().startAngle(a(g.head+1+t)).endAngle(a(g.head+1+t+1))(e(n))}}var e=x.interpolate(this.__prev__,r(g.head+1+t));return this.__prev__=r(g.head+1+t),function(n){return s()(e(n))}}),f.selectAll("path.item").data(n,t).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove(),m.selectAll("text.item").data(n,t).enter().append("text").attr("class","item").attr("dy",5).text(function(n){return n.v}),m.selectAll("text.item").data(n,t).style("opacity",1).transition().duration(v).attrTween("transform",function(n,t){if(void 0===this.__prev__){var e=x.interpolate(w().translate(s(50).centroid(r(g.head+1+t)))(),w().translate(s().centroid(r(g.head+1+t)))());this.__prev__=g.head+1+t}else{var e=x.interpolate(w().translate(s().centroid(r(this.__prev__)))(),w().translate(s().centroid(r(g.head+1+t)))());this.__prev__=g.head+1+t}return function(n){return e(n)}}),m.selectAll("text.item").data(n,t).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove()}function l(){f.selectAll("path.toque").data(g.toque).enter().append("path").attr("class","toque"),f.selectAll("path.toque").data(g.toque).style("opacity",1).transition().duration(v).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=x.interpolate(i(250),i(200));return this.__prev__=r(g.tail),function(n){return x.svg.arc().startAngle(a(g.tail)).endAngle(a(g.tail+1))(e(n))}}var e=x.interpolate(this.__prev__,r(g.tail));return this.__prev__=r(g.tail),function(n){return x.svg.arc().innerRadius(200).outerRadius(250)(e(n))}}),f.selectAll("path.toque").data(g.toque).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove(),m.selectAll("text.toque").data(g.toque).enter().append("text").attr("class","toque").attr("dy",5).text(function(n){return n}),m.selectAll("text.toque").data(g.toque).style("opacity",1).transition().duration(v).attrTween("transform",function(n,t){if(void 0===this.__prev__){var e=x.interpolate(w().translate(x.svg.arc().innerRadius(250).outerRadius(300).centroid(r(g.tail)))(),w().translate(x.svg.arc().innerRadius(200).outerRadius(250).centroid(r(g.tail)))());this.__prev__=g.tail}else{var e=x.interpolate(w().translate(s(50).centroid(r(this.__prev__)))(),w().translate(s(50).centroid(r(g.tail)))());this.__prev__=g.tail}return function(n){return e(n)}}),m.selectAll("text.toque").data(g.toque).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove()}function p(){f.selectAll("path.tofront").data(g.tofront).enter().append("path").attr("class","tofront"),f.selectAll("path.tofront").data(g.tofront).style("opacity",1).transition().duration(v).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=x.interpolate(i(150),i(200));return this.__prev__=r(g.head+1),function(n){return x.svg.arc().startAngle(a(g.head+1)).endAngle(a(g.head+1+1))(e(n))}}var e=x.interpolate(this.__prev__,r(g.head+1));return this.__prev__=r(g.head+1),function(n){return x.svg.arc().innerRadius(200).outerRadius(250)(e(n))}}),f.selectAll("path.tofront").data(g.tofront).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove(),m.selectAll("text.tofront").data(g.tofront).enter().append("text").attr("class","tofront").attr("dy",5).text(function(n){return n}),m.selectAll("text.tofront").data(g.tofront).style("opacity",1).transition().duration(v).attrTween("transform",function(n,t){if(void 0===this.__prev__){var e=x.interpolate(w().translate(x.svg.arc().innerRadius(150).outerRadius(200).centroid(r(g.head+1)))(),w().translate(x.svg.arc().innerRadius(200).outerRadius(250).centroid(r(g.head+1)))());this.__prev__=g.head+1}else{var e=x.interpolate(w().translate(s(50).centroid(r(this.__prev__)))(),w().translate(s(50).centroid(r(g.head+1)))());this.__prev__=g.head+1}return function(n){return e(n)}}),m.selectAll("text.tofront").data(g.tofront).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove()}function u(n,t){g=n,v=t}function d(n,t){u(n,t),o(),c(),l(),p()}function h(){k=this.props.others.N;var n=this,t=x.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){n.svg.attr("transform",w().translate(x.event.translate).scale(x.event.scale))});this.svg=x.select(this.refs.svg.getDOMNode()).append("svg").call(t).append("g"),this.g=this.svg.append("g").attr("transform",w().translate(300,250).scale(1)),this.gbase=this.g.append("g").attr("class","base"),this.ghigh=this.g.append("g").attr("class","high"),this.gtext=this.g.append("g").attr("class","text"),this.gbase.append("path").attr("class","queue"),this.gbase.select("path.queue").transition().duration(this.props.delay/3).attrTween("d",function(n){var t=x.interpolate(r(0,0),r(0,k));return function(n){return s()(t(n))}}),f=this.gbase,m=this.gtext,y=this.ghigh}var f,m,y,g,v,g,v,k,x=e(3),w=e(5),_=150,b=200,E=2*Math.PI,A="deepskyblue";n.exports={init:h,render:d}}});