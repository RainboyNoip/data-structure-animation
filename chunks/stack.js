webpackJsonpdsa([8],{13:function(n,t,e){n.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./stack.h"</span>\n\nvoid init(Stack *s) {\n    s->top = <span class="number">0</span>;\n};\n\nint isFull(Stack *s) {\n    <span class="keyword">if</span> (s->top == N) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n};\n\nint isEmpty(Stack *s) {\n    <span class="keyword">if</span> (s->top == <span class="number">0</span>) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n};\n\nvoid push(Stack *s, int val) {\n    <span class="keyword">if</span> (isFull(s) == <span class="number">1</span>) {\n        printf(<span class="string">"stack full.\\n"</span>);\n    } <span class="keyword">else</span> {\n        s->data[s->top++] = val;\n    }\n};\n\nvoid pop(Stack *s) {\n    <span class="keyword">if</span> (isEmpty(s) == <span class="number">1</span>) {\n        printf(<span class="string">"stack empty.\\n"</span>);\n    } <span class="keyword">else</span> {\n        s->top = s->top - <span class="number">1</span>;\n    }\n};\n\nint peak(Stack *s) {\n    <span class="keyword">if</span> (isEmpty(s) == <span class="number">1</span>) {\n        printf(<span class="string">"stack empty.\\n"</span>);\n        <span class="keyword">return</span> -<span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> s->data[s->top - <span class="number">1</span>];\n    }\n};'},14:function(n,t,e){n.exports='<span class="comment">#define N 5</span>\n\ntypedef struct {\n    int top;\n    int data[N];\n} Stack;\n\nvoid init(Stack *s);\nint isFull(Stack *s);\nint isEmpty(Stack *s);\nvoid push(Stack *s, int val);\nvoid pop(Stack *s);\nint peak(Stack *s);'},26:function(n,t,e){function s(n){currentStatus.topush=void 0===n?[]:[n]}function a(n){currentStatus.stacktop=void 0===n?[]:[1]}function r(n){currentStatus.topeak=[n]}function i(n,t,e){1===t&&(lastStatus=l(currentStatus)),p.push({status:lastStatus,line:n,animation:e,id:u}),u++}function o(){i(p[p.length-1].line,1)}var c,l=e(4),p=[],u=0,d=[],h=5,f=function(){i(5,1),d=[],currentStatus.stack=d},m=function(){return a(1),i(9,1),d.length===h?(i(10,1),!0):(i(12,1),a(),!1)},y=function(){return a(1),i(17,1),0===d.length?(i(18,1),!0):(i(20,1),a(),!1)},g=function(n){s(n),i(25,1),m()?(i(26,1),console.log("stack full.")):(i(28,1),d.push(n),s())},v=function(){i(33,1),y()?(i(34,1),console.log("stack empty.")):(i(36,1),d.pop())},k=function(){return i(41,1),y()?(i(42,1),console.log("stack empty."),i(43,1),-1):(i(45,1),c=d[d.length-1],r(c),c)};currentStatus={},lastStatus={},n.exports={getInitialDescriptions:function(){return this.initialize(!0),g(0),g(50),this.run("push",100)},initialize:function(n){return p=[],u=0,n&&(d=[]),currentStatus={stack:d,topush:[],topeak:[],stacktop:[]},lastStatus=l(currentStatus),this},push:g,pop:v,peak:k,init:f,run:function(n,t){return this.initialize()[n](t),o(),{frames:p}}}},50:function(n,t,e){var s=e(1),a=e(2);n.exports=s.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},render:function(){return s.createElement("div",{className:"list"},s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"init"),value:"初始化"}),s.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"整数"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"push"),value:"入栈"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"pop"),value:"出栈"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"peak"),value:"栈顶"}))},_onChange:function(n){this.setState({text:n.target.value})},_onClick:function(n){a.runDemo(n,this.state.text)}})},87:function(n,t,e){n.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=main.c stack.c\nOBJECTS=$(SOURCES:.cpp=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},88:function(n,t,e){n.exports='<span class="comment">#include "./stack.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  Stack stack;\n  init(&amp;stack);\n  push(&amp;stack, <span class="number">0</span>);\n  push(&amp;stack, <span class="number">50</span>);\n  push(&amp;stack, <span class="number">100</span>);\n  <span class="comment">// 在系统中运行命令：</span>\n  <span class="comment">// 初始化、入栈、出栈、栈顶</span>\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},107:function(n,t,e){function s(){u.selectAll("rect.stack-top").data([f.stack.length]).enter().append("rect").attr("class","stack-top").attr("width",100).attr("height",50).attr("transform",g().translate(function(){return[0,-50]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-n-1)]})),u.selectAll("rect.stack-top").data([f.stack.length]).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-n-1)]})),d.selectAll("text.stack-top").data([f.stack.length]).enter().append("text").attr("class","stack-top").attr("transform",g().translate(function(n,t){return[50,-20]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-n-1)+25+5]})).text(function(){return"栈顶"}),d.selectAll("text.stack-top").data([f.stack.length]).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-n-1)+25+5]}))}function a(){u.selectAll("rect.item").data(f.stack).enter().append("rect").attr("class","item").attr("width",100).attr("height",50).attr("transform",g().translate(function(n){return[0,-100]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-t-1)]})),u.selectAll("rect.item").data(f.stack).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-t-1)]})),u.selectAll("rect.item").data(f.stack).exit().transition().duration(m).remove(),d.selectAll("text.item").data(f.stack).enter().append("text").attr("class","item").attr("transform",g().translate(function(n){return[50,-70]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-t-1)+25+5]})).text(function(n){return n}),d.selectAll("text.item").data(f.stack).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-t-1)+25+5]})).text(function(n){return n}),d.selectAll("text.item").data(f.stack).exit().transition().duration(m).remove()}function r(){u.selectAll("rect.peak").data(f.topeak).enter().append("rect").attr("class","peak").attr("width",100).attr("height",50).attr("transform",g().translate(function(n,t){var e=f.stack.length-1;return[0,50*(5-e-1)]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,-100]})),u.selectAll("rect.peak").data(f.topeak).exit().transition().duration(m).remove(),d.selectAll("text.peak").data(f.topeak).enter().append("text").attr("class","peak").attr("transform",g().translate(function(n,t){var e=f.stack.length-1;return[50,50*(5-e-1)+25+5]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,-70]})).text(function(n){return n}),d.selectAll("text.peak").data(f.topeak).text(function(n){return n}),d.selectAll("text.peak").data(f.topeak).exit().transition().duration(m).remove()}function i(){u.selectAll("rect.push").data(f.topush).enter().append("rect").attr("class","push").attr("width",100).attr("height",50).attr("transform",g().translate(function(n,t){return[0,-100]})).style("opacity",0).transition().duration(m).style("opacity",1),u.selectAll("rect.push").data(f.topush).exit().transition().duration(m).remove(),d.selectAll("text.push").data(f.topush).enter().append("text").attr("class","push").attr("transform",g().translate(function(n,t){return[50,-70]})).style("opacity",0).transition().duration(m).style("opacity",1).text(function(n){return n}),d.selectAll("text.push").data(f.topush).text(function(n){return n}),d.selectAll("text.push").data(f.topush).exit().transition().duration(m).remove()}function o(){h.selectAll("rect.stack-top-high").data(f.stacktop).enter().append("rect").attr("class","stack-top-high").attr("width",100).attr("height",50).attr("transform",g().translate(function(n,t){var e=f.stack.length;return[0,50*(5-e-1)]})).style("opacity",0).transition().duration(m).style("opacity",1),h.selectAll("rect.stack-top-high").data(f.stacktop).attr("transform",g().translate(function(n,t){var e=f.stack.length;return[0,50*(5-e-1)]})),h.selectAll("rect.stack-top-high").data(f.stacktop).exit().transition().duration(m).remove()}function c(n,t){f=n,m=t}function l(n,t){c(n,t),s(),a(),r(),i(),o()}function p(){var n=this,t=y.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){n.svg.attr("transform",g().translate(y.event.translate).scale(y.event.scale))});this.svg=y.select(this.refs.svg.getDOMNode()).append("svg").call(t).append("g"),this.g=this.svg.append("g").attr("transform",g().translate(200,200).scale(1)),this.gbase=this.g.append("g").attr("class","base"),this.ghigh=this.g.append("g").attr("class","high"),this.gtext=this.g.append("g").attr("class","text"),this.gbase.append("rect").attr("class","stack").attr("width",100).attr("height",250).attr("transform",g().translate(function(n,t){return[0,-250]})).transition().duration(.75*this.props.delay).attr("transform",g().translate(function(n,t){return[0,0]})),u=this.gbase,d=this.gtext,h=this.ghigh}var u,d,h,f,m,y=e(3),g=e(5);n.exports={init:p,render:l}}});