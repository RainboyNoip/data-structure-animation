webpackJsonpdsa([6],{11:function(n,t,e){n.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./queue.h"</span>\n\nvoid init(Queue *q) {\n    q->head = <span class="number">0</span>;\n    q->tail = <span class="number">1</span>;\n}\n\nint isFull(Queue *q) {\n    <span class="keyword">if</span> (q->head == q->tail) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n}\n\nint isEmpty(Queue *q) {\n    <span class="keyword">if</span> ((q->head + <span class="number">1</span>) % N == q->tail) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n}\n\nvoid enque(Queue *q, int val) {\n    <span class="keyword">if</span> (isFull(q) == <span class="number">1</span>) {\n        printf(<span class="string">"queue full.\\n"</span>);\n    } <span class="keyword">else</span> {\n        q->data[q->tail] = val;\n        q->tail = (q->tail + <span class="number">1</span>) % N;\n    }\n}\n\nvoid deque(Queue *q) {\n    <span class="keyword">if</span> (isEmpty(q) == <span class="number">1</span>) {\n        printf(<span class="string">"queue empty.\\n"</span>);\n    } <span class="keyword">else</span> {\n        q->head = (q->head + <span class="number">1</span>) % N;\n    }\n}\n\nint front(Queue *q) {\n    <span class="keyword">if</span> (isEmpty(q) == <span class="number">1</span>) {\n        printf(<span class="string">"queue empty.\\n"</span>);\n        <span class="keyword">return</span> -<span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> q->data[(q->head + <span class="number">1</span>) % N];\n    }\n}'},12:function(n,t,e){n.exports='<span class="comment">#define N 15</span>\n\ntypedef struct {\n    int head;\n    int tail;\n    int data[N];\n} Queue;\n\nvoid init(Queue *q);\nint isFull(Queue *q);\nint isEmpty(Queue *q);\nvoid enque(Queue *q, int val);\nvoid deque(Queue *q);\nint front(Queue *q);'},20:function(n,t,e){function r(n,t,e){1===t&&(lastStatus=p.clone()),i.push({status:lastStatus,line:n,animation:e,id:o}),o++}function s(){r(i[i.length-1].line,1)}var a=e(4),i=[],o=0,c=8,l=0,p={},u=function(n){var t,e,s,a;for(r(9),r(10,1),p.push(1,0,0),t=1;r(12,1),n>=t;++t){for(r(13),p.push(1,t,0),e=0;r(14,1),p.front(1),t-1>e;++e)r(15,1),s=p.front(),r(16,1),p.shift(),r(17,1),a=p.front(),r(18,1),p.push(s+a,t,e+1),p.last();r(20,1),p.shift(),r(21,1),p.push(1,t,t)}for(t=0;r(23,1),n+1>t;++t)r(24),s=p.front(),r(25,1),r(26),p.shift();r(28),r(29)};p.init=function(n){l=0,this.nums=[],this.tofront=[],this.yh=[]},p.last=function(){var n=this.nums.length;this.tofront.push(this.yh[this.nums[n-1].i])},p.front=function(n){return n?this.tofront=[]:this.tofront.push(this.yh[this.nums[0].i]),this.nums[0].v},p.push=function(n,t,e){this.nums.push({v:n,i:l}),this.yh.push({v:n,r:t,c:e,i:l}),l++},p.shift=function(){this.nums.shift()},p.clone=function(){return{nums:a(this.nums),tofront:a(this.tofront),yh:a(this.yh)}},lastStatus={},n.exports={getInitialDescriptions:function(){return this.initialize(),this.run("yanghui",6)},initialize:function(){return i=[],o=0,p.init(!0),lastStatus=p.clone(),this},yanghui:u,run:function(n,t){return this.initialize()[n](isNaN(parseInt(t))?0:parseInt(t)),s(),{frames:i,others:{N:c}}}}},44:function(n,t,e){var r=e(1),s=e(2);n.exports=r.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},render:function(){return r.createElement("div",{className:"list"},r.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"整数"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"yanghui"),value:"计算杨辉三角"}))},_onChange:function(n){this.setState({text:n.target.value})},_onClick:function(n){s.runDemo(n,this.state.text)}})},65:function(n,t,e){n.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=main.c queue-yanghui.c ../queue/queue.c\nOBJECTS=$(SOURCES:.cpp=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},66:function(n,t,e){n.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "../queue/queue.h"</span>\n\nvoid yanghui(n) {\n    int i;\n    int j;\n    int a;\n    int b;\n    Queue nums;\n    init(&amp;nums);\n    enque(&amp;nums, <span class="number">1</span>);\n    <span class="keyword">for</span> (i = <span class="number">1</span>; i &lt;= n; ++i) {\n        enque(&amp;nums, <span class="number">1</span>);\n        <span class="keyword">for</span> (j = <span class="number">0</span>; j &lt; i-<span class="number">1</span>; ++j) {\n            a = front(&amp;nums);\n            deque(&amp;nums);\n            b = front(&amp;nums);\n            enque(&amp;nums, a+b);\n        }\n        deque(&amp;nums);\n        enque(&amp;nums, <span class="number">1</span>);\n    }\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; n+<span class="number">1</span>; ++i) {\n        a = front(&amp;nums);\n        printf(<span class="string">"%d "</span>, a);\n        deque(&amp;nums);\n    }\n    printf(<span class="string">"\\n"</span>);\n    <span class="keyword">return</span>;\n}'},67:function(n,t,e){n.exports="void yanghui(int n);"},68:function(n,t,e){n.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./queue-yanghui.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  int n;\n  freopen(<span class="string">"in"</span>, <span class="string">"r"</span>, stdin);\n  scanf(<span class="string">"%d"</span>, &amp;n);\n  print_line(n);\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},101:function(n,t,e){function r(){var n=u.yh.map(function(n,t){return{cy:n.r*y*Math.sqrt(3),cx:(n.c-(n.r+1)/2)*y*2,v:n.v}});c.selectAll("circle").data(n).enter().append("circle").attr("r",y).attr("cx",function(n){return n.cx}).attr("cy",function(n){return n.cy}).style("fill","coral").style("opacity",0).transition().duration(d).style("opacity",1),c.selectAll("circle").data(n).style("opacity",1).transition().duration(d).style("fill",function(n,t){return u.nums.some(function(n){return n.i===t})?g:"coral"}),c.selectAll("circle").data(n).exit().style("opacity",1).transition().duration(d).style("opacity",0).remove(),l.selectAll("text").data(n).enter().append("text").attr("x",function(n){return n.cx}).attr("y",function(n){return n.cy}).attr("dy",5).text(function(n){return n.v}).style("opacity",0).transition().duration(d).style("opacity",1),l.selectAll("text").data(n).transition().duration(d).style("opacity",1),l.selectAll("text").data(n).exit().style("opacity",1).transition().duration(d).style("opacity",0).remove()}function s(){var n=u.tofront.map(function(n,t){return{cy:n.r*y*Math.sqrt(3),cx:(n.c-(n.r+1)/2)*y*2,v:n.v}});p.selectAll("circle").data(n).enter().append("circle").attr("r",y).attr("cx",function(n){return n.cx}).attr("cy",function(n){return n.cy}).style("fill","transparent").style("stroke","gray").style("stroke-width",5).style("opacity",0).transition().duration(d).style("opacity",1),p.selectAll("circle").data(n).transition().duration(d).attr("cx",function(n){return n.cx}).attr("cy",function(n){return n.cy}).style("opacity",1),p.selectAll("circle").data(n).exit().style("opacity",1).transition().duration(d).style("opacity",0).remove()}function a(n,t){u=n,d=t}function i(n,t){a(n,t),r(),s()}function o(){f=this.props.others.N;var n=this,t=h.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){n.svg.attr("transform",m().translate(h.event.translate).scale(h.event.scale))});this.svg=h.select(this.refs.svg.getDOMNode()).append("svg").call(t).append("g"),this.g=this.svg.append("g").attr("transform",m().translate(300,50).scale(1)),this.gbase=this.g.append("g").attr("class","base"),this.ghigh=this.g.append("g").attr("class","high"),this.gtext=this.g.append("g").attr("class","text"),c=this.gbase,l=this.gtext,p=this.ghigh}var c,l,p,u,d,u,d,f,h=e(3),m=e(5),y=30,g="deepskyblue";n.exports={init:o,render:i}}});