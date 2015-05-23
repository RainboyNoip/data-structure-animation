webpackJsonpdsa([10],{10:function(n,t,e){n.exports='<span class="comment">#include &lt;stddef.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include "../common/util.h"</span>\n<span class="comment">#include "./queue.h"</span>\n\nint QueueIsEmpty(queue *q) {\n  <span class="keyword">return</span> q->front != q->tail ? <span class="number">0</span> : <span class="number">1</span>;\n}\n\nint QueueIsFull(queue *q) {\n  <span class="keyword">return</span> (q->tail+<span class="number">1</span>) % q->capacity != q->front ? <span class="number">0</span> : <span class="number">1</span>;\n}\n\nvoid *QueuePop(queue *q) {\n  void *item = <span class="keyword">NULL</span>;\n  <span class="keyword">if</span> (!QueueIsEmpty(q)) {\n    item = (char *)q->items + q->front*q->item_size;\n    q->front = (q->front+<span class="number">1</span>) % q->capacity;\n  }\n  <span class="keyword">return</span> item;\n}\n\nvoid *QueuePeak(queue *q) {\n  void *item = <span class="keyword">NULL</span>;\n  <span class="keyword">if</span> (!QueueIsEmpty(q)) {\n    item = (char *)q->items + q->front*q->item_size;\n  }\n  <span class="keyword">return</span> item;\n}\n\nvoid *QueuePush(queue *q, void *x) {\n  <span class="keyword">if</span> (!QueueIsFull(q)) {\n    MemoryCopy((char *)q->items + q->tail*q->item_size, x, q->item_size);\n    q->tail = (q->tail+<span class="number">1</span>) % q->capacity;\n    <span class="keyword">return</span> x;\n  }\n  <span class="keyword">return</span> <span class="keyword">NULL</span>;\n}\n\nqueue *QueueCreate(int n, size_t item_size) {\n  n = n+<span class="number">1</span>;  <span class="comment">// 1 for front-tail</span>\n  queue *q = SafeMalloc(sizeof(queue));\n  q->capacity = n;\n  q->front = q->tail = <span class="number">0</span>;\n  q->items = SafeMalloc(item_size*n);\n  q->item_size = item_size;\n  <span class="keyword">return</span> q;\n}\n\nvoid QueueDestroy(queue *q) {\n  free(q->items);\n  free(q);\n}'},11:function(n,t,e){n.exports='<span class="comment">#ifndef QUEUE_H</span>\n<span class="comment">#define QUEUE_H</span>\n<span class="comment">#include &lt;stddef.h></span>\ntypedef struct queue {\n  int front;\n  int tail;\n  int capacity;\n  size_t item_size;\n  void *items;\n} queue;\n\nqueue *QueueCreate(int n, size_t item_size);\nvoid QueueDestroy(queue *q);\nint QueueIsEmpty(queue *q);\nint QueueIsFull(queue *q);\nvoid *QueuePop(queue *q);\nvoid *QueuePeak(queue *q);\nvoid *QueuePush(queue *q, void *x);\n\n<span class="comment">#endif</span>'},22:function(n,t,e){function s(n){currentStatus.headtail=void 0===n?0:1}function a(n){currentStatus.toque=void 0===n?[]:[n]}function r(n){currentStatus.tofront=void 0===n?[]:[n]}function i(n,t,e){1===t&&(lastStatus=l(currentStatus)),p.push({status:lastStatus,line:n,animation:e,id:u}),u++}function o(){i(p[p.length-1].line,1)}var c,l=e(4),p=[],u=0,d=8;_id=0;var h=[],f=function(){return s(1),i(7,1),0===h.length?!0:(s(),!1)},m=function(){return s(1),i(11,1),h.length===d-1?!0:(s(),!1)},y=function(){i(16,1),f()||(i(18,1),h.shift(),currentStatus.head++),i(20,1)},g=function(){return i(25,1),f()?void i(28,1):(i(26,1),c=h[0].v,r(c),c)},v=function(n){a(n),i(32,1),m()||(i(33,1),h.push({v:n,i:_id++}),a(),i(34,1),currentStatus.tail++),i(36,1)},k=function(){currentStatus.head=0,currentStatus.tail=0,h=[],currentStatus.queue=h};currentStatus={},lastStatus={},n.exports={getInitialDescriptions:function(){return this.initialize(!0),v(0),v(50),this.run("enque",100)},initialize:function(n){return p=[],u=0,n&&(h=[]),currentStatus={queue:h,tofront:[],toque:[],headtail:0,head:currentStatus.head||0,tail:currentStatus.tail||0},lastStatus=l(currentStatus),this},enque:v,deque:y,front:g,init:function(){k(),i(0)},run:function(n,t){return this.initialize()[n](t),o(),{frames:p,others:{N:d}}}}},48:function(n,t,e){var s=e(1),a=e(3),r=e(115);n.exports=s.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},componentDidMount:function(){r.init.bind(this)(),a.runDemo("init"),a.runDemo("enque",1),a.runDemo("enque",2,!1)},componentDidUpdate:function(n){this.props!==n&&void 0!==this.props.frame&&r.render(this.props.frame.status,this.props.delay,this.props.others)},render:function(){return s.createElement("div",{className:"wrapper-code"},s.createElement("div",{className:"list"},s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"init"),value:"初始化"}),s.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"整数"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"enque"),value:"入队"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"deque"),value:"出队"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"front"),value:"队首"})),s.createElement("div",{ref:"svg",className:"scene"}))},_onChange:function(n){this.setState({text:n.target.value})},_onClick:function(n){a.runDemo(n,this.state.text)}})},78:function(n,t,e){n.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=test.c queue.c queue.h ../common/util.c ../common/util.h\nOBJECTS=$(SOURCES:.c=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},79:function(n,t,e){n.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./queue.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  int cmd;\n  int a;\n  int *b;\n  queue *q = QueueCreate(<span class="number">10</span>, sizeof(int));\n  <span class="keyword">while</span> (scanf(<span class="string">"%d"</span>, &amp;cmd) != EOF) {\n    <span class="keyword">switch</span>(cmd) {\n      <span class="keyword">case</span> <span class="number">0</span>:\n        scanf(<span class="string">"%d\\n"</span>, &amp;a);\n        b = QueuePush(q, &amp;a);\n        <span class="keyword">if</span> (b == <span class="keyword">NULL</span>) {\n          printf(<span class="string">"push null\\n"</span>);\n        } <span class="keyword">else</span> {\n          printf(<span class="string">"push %d\\n"</span>, *b);\n        }\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">1</span>:\n        b = QueuePeak(q);\n        <span class="keyword">if</span> (b == <span class="keyword">NULL</span>) {\n          printf(<span class="string">"peak null\\n"</span>);\n        } <span class="keyword">else</span> {\n          printf(<span class="string">"peak %d\\n"</span>, *b);\n        }\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">2</span>:\n        b = QueuePop(q);\n        <span class="keyword">if</span> (b == <span class="keyword">NULL</span>) {\n          printf(<span class="string">"pop null\\n"</span>);\n        } <span class="keyword">else</span> {\n          printf(<span class="string">"pop %d\\n"</span>, *b);\n        }\n        <span class="keyword">break</span>;\n      <span class="keyword">default</span>:\n        <span class="keyword">break</span>;\n    }\n  }\n  QueueDestroy(q);\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},115:function(n,t,e){function s(n){return n=n||0,w.svg.arc().innerRadius(_+n).outerRadius(b+n)}function a(n){return S*n/k}function r(n,t){return void 0===t&&(t=n+1),{startAngle:a(n),endAngle:a(t)}}function i(n,t){return void 0===t&&(t=n+50),{innerRadius:n,outerRadius:t}}function o(){var n=[g.head,g.tail];f.selectAll("path.head").data(n).enter().append("path").attr("class","head"),f.selectAll("path.head").data(n).transition().duration(v).style("fill",function(n,t){return g.headtail?E:"tomato"}).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=w.interpolate(i(t?150:100,150),i(t?100:50,150));return this.__prev__=r(n),function(t){return w.svg.arc().startAngle(a(n)).endAngle(a(n+1))(e(t))}}var e=w.interpolate(this.__prev__,r(n));return this.__prev__=r(n),function(n){return w.svg.arc().innerRadius(t?100:50).outerRadius(150)(e(n))}}),m.selectAll("text.head").data(n).enter().append("text").attr("class","head").attr("dy",5).attr("transform",x().translate(function(n,t){return w.svg.arc().innerRadius(t?150:100,150).outerRadius(t?200:150,150).centroid(r(n))})).text(function(n,t){return t?"队尾":"队首"}),m.selectAll("text.head").data(n).transition().duration(v).attr("transform",x().translate(function(n,t){return w.svg.arc().innerRadius(t?100:50,150).outerRadius(t?150:100,150).centroid(r(n,n+1))}))}function c(){var n=g.queue,t=function(n){return n.i};f.selectAll("path.item").data(n,t).enter().append("path").attr("class","item"),f.selectAll("path.item").data(n,t).style("opacity",1).transition().duration(v).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=w.interpolate(i(200),i(150));return this.__prev__=r(g.head+1-1+t),function(n){return w.svg.arc().startAngle(a(g.head+1-1+t)).endAngle(a(g.head+1-1+t+1))(e(n))}}var e=w.interpolate(this.__prev__,r(g.head+1-1+t));return this.__prev__=r(g.head+1-1+t),function(n){return s()(e(n))}}),f.selectAll("path.item").data(n,t).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove(),m.selectAll("text.item").data(n,t).enter().append("text").attr("class","item").attr("dy",5).text(function(n){return n.v}),m.selectAll("text.item").data(n,t).style("opacity",1).transition().duration(v).attrTween("transform",function(n,t){if(void 0===this.__prev__){var e=w.interpolate(x().translate(s(50).centroid(r(g.head+1-1+t)))(),x().translate(s().centroid(r(g.head+1-1+t)))());this.__prev__=g.head+1-1+t}else{var e=w.interpolate(x().translate(s().centroid(r(this.__prev__)))(),x().translate(s().centroid(r(g.head+1-1+t)))());this.__prev__=g.head+1-1+t}return function(n){return e(n)}}),m.selectAll("text.item").data(n,t).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove()}function l(){f.selectAll("path.toque").data(g.toque).enter().append("path").attr("class","toque"),f.selectAll("path.toque").data(g.toque).style("opacity",1).transition().duration(v).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=w.interpolate(i(250),i(200));return this.__prev__=r(g.tail),function(n){return w.svg.arc().startAngle(a(g.tail)).endAngle(a(g.tail+1))(e(n))}}var e=w.interpolate(this.__prev__,r(g.tail));return this.__prev__=r(g.tail),function(n){return w.svg.arc().innerRadius(200).outerRadius(250)(e(n))}}),f.selectAll("path.toque").data(g.toque).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove(),m.selectAll("text.toque").data(g.toque).enter().append("text").attr("class","toque").attr("dy",5).text(function(n){return n}),m.selectAll("text.toque").data(g.toque).style("opacity",1).transition().duration(v).attrTween("transform",function(n,t){if(void 0===this.__prev__){var e=w.interpolate(x().translate(w.svg.arc().innerRadius(250).outerRadius(300).centroid(r(g.tail)))(),x().translate(w.svg.arc().innerRadius(200).outerRadius(250).centroid(r(g.tail)))());this.__prev__=g.tail}else{var e=w.interpolate(x().translate(s(50).centroid(r(this.__prev__)))(),x().translate(s(50).centroid(r(g.tail)))());this.__prev__=g.tail}return function(n){return e(n)}}),m.selectAll("text.toque").data(g.toque).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove()}function p(){f.selectAll("path.tofront").data(g.tofront).enter().append("path").attr("class","tofront"),f.selectAll("path.tofront").data(g.tofront).style("opacity",1).transition().duration(v).attrTween("d",function(n,t){if(void 0===this.__prev__){var e=w.interpolate(i(150),i(0));return this.__prev__=r(g.head),function(n){return w.svg.arc().startAngle(a(g.head)).endAngle(a(g.head+1))(e(n))}}var e=w.interpolate(this.__prev__,r(g.head));return this.__prev__=r(g.head),function(n){return w.svg.arc().innerRadius(0).outerRadius(50)(e(n))}}),f.selectAll("path.tofront").data(g.tofront).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove(),m.selectAll("text.tofront").data(g.tofront).enter().append("text").attr("class","tofront").attr("dy",5).text(function(n){return n}),m.selectAll("text.tofront").data(g.tofront).style("opacity",1).transition().duration(v).attrTween("transform",function(n,t){if(void 0===this.__prev__){var e=w.interpolate(x().translate(w.svg.arc().innerRadius(150).outerRadius(200).centroid(r(g.head)))(),x().translate(w.svg.arc().innerRadius(0).outerRadius(50).centroid(r(g.head)))());this.__prev__=g.head}else{var e=w.interpolate(x().translate(s(-150).centroid(r(this.__prev__)))(),x().translate(s(-150).centroid(r(g.head)))());this.__prev__=g.head}return function(n){return e(n)}}),m.selectAll("text.tofront").data(g.tofront).exit().style("opacity",1).transition().duration(v).style("opacity",0).remove()}function u(n,t){g=n,v=t}function d(n,t){u(n,t),o(),c(),l(),p()}function h(){k=8;var n=this,t=w.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){n.svg.attr("transform",x().translate(w.event.translate).scale(w.event.scale))});this.svg=w.select(this.refs.svg.getDOMNode()).append("svg").call(t).append("g"),this.g=this.svg.append("g").attr("transform",x().translate(300,250).scale(1)),this.gbase=this.g.append("g").attr("class","base"),this.ghigh=this.g.append("g").attr("class","high"),this.gtext=this.g.append("g").attr("class","text"),this.gbase.append("path").attr("class","queue"),this.gbase.select("path.queue").transition().duration(this.props.delay/3).attrTween("d",function(n){var t=w.interpolate(r(0,0),r(0,k));return function(n){return s()(t(n))}}),f=this.gbase,m=this.gtext,y=this.ghigh}var f,m,y,g,v,g,v,k,w=e(2),x=e(5),_=150,b=200,S=2*Math.PI,E="deepskyblue";n.exports={init:h,render:d}}});