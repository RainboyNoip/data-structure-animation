webpackJsonpdsa([9],{12:function(n,t,e){n.exports='<span class="comment">#include &lt;stddef.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include "../common/util.h"</span>\n<span class="comment">#include "./stack.h"</span>\n\nint StackIsEmpty(stack *s) {\n  <span class="keyword">return</span> s->top > <span class="number">0</span> ? <span class="number">0</span> : <span class="number">1</span>;\n}\n\nint StackIsFull(stack *s) {\n  <span class="keyword">return</span> s->top &lt; s->capacity ? <span class="number">0</span> : <span class="number">1</span>;\n}\n\nvoid* StackPop(stack *s) {\n  void *item = <span class="keyword">NULL</span>;\n  <span class="keyword">if</span> (!StackIsEmpty(s)) {\n    item = (char *)s->items + (s->top-<span class="number">1</span>)*s->item_size;\n    s->top--;\n  }\n  <span class="keyword">return</span> item;\n}\n\nvoid* StackPeak(stack *s) {\n  void *item = <span class="keyword">NULL</span>;\n  <span class="keyword">if</span> (!StackIsEmpty(s)) {\n    item = (char *)s->items + (s->top-<span class="number">1</span>)*s->item_size;\n  }\n  <span class="keyword">return</span> item;\n}\n\nvoid* StackPush(stack *s, void *x) {\n  <span class="keyword">if</span> (!StackIsFull(s)) {\n    MemoryCopy((char *)s->items + s->top*s->item_size, x, s->item_size);\n    s->top++;\n    <span class="keyword">return</span> x;\n  }\n  <span class="keyword">return</span> <span class="keyword">NULL</span>;\n}\n\nstack *StackCreate(int n, size_t item_size) {\n  stack *s = SafeMalloc(sizeof(stack));\n  s->capacity = n;\n  s->item_size = item_size;\n  s->top = <span class="number">0</span>;\n  s->items = SafeMalloc(item_size*n);\n  <span class="keyword">return</span> s;\n}\n\nvoid StackDestroy(stack *s) {\n  free(s->items);\n  free(s);\n}'},13:function(n,t,e){n.exports='<span class="comment">#ifndef STACK_H</span>\n<span class="comment">#define STACK_H</span>\n<span class="comment">#include &lt;stddef.h></span>\n\ntypedef struct stack {\n  int top;\n  int capacity;\n  size_t item_size;\n  void *items;\n} stack;\n\nstack *StackCreate(int n, size_t item_size);\nvoid StackDestroy(stack *s);\nint StackIsEmpty(stack *s);\nint StackIsFull(stack *s);\nvoid* StackPop(stack *s);\nvoid* StackPeak(stack *s);\nvoid* StackPush(stack *s, void *x);\n\n<span class="comment">#endif</span>'},27:function(n,t,e){function s(n){currentStatus.topush=void 0===n?[]:[n]}function a(n){currentStatus.stacktop=void 0===n?[]:[1]}function r(n){currentStatus.topeak=[n]}function i(n,t,e){1===t&&(lastStatus=l(currentStatus)),p.push({status:lastStatus,line:n,animation:e,id:u}),u++}function o(){i(p[p.length-1].line,1)}var c,l=e(4),p=[],u=0,d=[],h=5,f=function(){return a(1),i(7,1),0===d.length?!0:(a(),!1)},m=function(){return a(1),i(11,1),d.length===h?!0:(a(),!1)},y=function(){i(16,1),f()||(i(18,1),d.pop()),i(20,1)},g=function(){return i(25,1),f()?void i(28,1):(i(26,1),c=d[d.length-1],r(c),c)},v=function(n){return s(n),i(32,1),m()?void i(37,1):(i(34,1),d.push(n),s(),void i(35,1))},k=function(){d=[],currentStatus.stack=d};currentStatus={},lastStatus={},n.exports={getInitialDescriptions:function(){return this.initialize(!0),v(0),v(50),this.run("push",100)},initialize:function(n){return p=[],u=0,n&&(d=[]),currentStatus={stack:d,topush:[],topeak:[],stacktop:[]},lastStatus=l(currentStatus),this},push:v,pop:y,peak:g,init:function(){k(),i(0)},run:function(n,t){return this.initialize()[n](t),o(),{frames:p}}}},53:function(n,t,e){var s=e(1),a=e(3),r=e(120);n.exports=s.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},componentDidMount:function(){r.init.bind(this)(),a.runDemo("init"),a.runDemo("push",1,!1)},componentDidUpdate:function(n){this.props!==n&&void 0!==this.props.frame&&r.render(this.props.frame.status,this.props.delay,this.props.others)},render:function(){return s.createElement("div",{className:"wrapper-code"},s.createElement("div",{className:"list"},s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"init"),value:"初始化"}),s.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"整数"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"push"),value:"入栈"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"pop"),value:"出栈"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"peak"),value:"栈顶"})),s.createElement("div",{ref:"svg",className:"scene"}))},_onChange:function(n){this.setState({text:n.target.value})},_onClick:function(n){a.runDemo(n,this.state.text)}})},96:function(n,t,e){n.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=test.c stack.c stack.h ../common/util.c ../common/util.h\nOBJECTS=$(SOURCES:.cpp=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},97:function(n,t,e){n.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./stack.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  int cmd;\n  int a;\n  int *b;\n  stack *s = StackCreate(<span class="number">10</span>, sizeof(int));\n  <span class="keyword">while</span> (scanf(<span class="string">"%d"</span>, &amp;cmd) != EOF) {\n    <span class="keyword">switch</span>(cmd) {\n      <span class="keyword">case</span> <span class="number">0</span>:\n        scanf(<span class="string">"%d\\n"</span>, &amp;a);\n        b = StackPush(s, &amp;a);\n        <span class="keyword">if</span> (b == <span class="keyword">NULL</span>) {\n          printf(<span class="string">"push null\\n"</span>);\n        } <span class="keyword">else</span> {\n          printf(<span class="string">"push %d\\n"</span>, *b);\n        }\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">1</span>:\n        b = StackPeak(s);\n        <span class="keyword">if</span> (b == <span class="keyword">NULL</span>) {\n          printf(<span class="string">"peak null\\n"</span>);\n        } <span class="keyword">else</span> {\n          printf(<span class="string">"peak %d\\n"</span>, *b);\n        }\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">2</span>:\n        b = StackPop(s);\n        <span class="keyword">if</span> (b == <span class="keyword">NULL</span>) {\n          printf(<span class="string">"pop null\\n"</span>);\n        } <span class="keyword">else</span> {\n          printf(<span class="string">"pop %d\\n"</span>, *b);\n        }\n        <span class="keyword">break</span>;\n      <span class="keyword">default</span>:\n        <span class="keyword">break</span>;\n    }\n  }\n  StackDestroy(s);\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},120:function(n,t,e){function s(){u.selectAll("rect.stack-top").data([f.stack.length]).enter().append("rect").attr("class","stack-top").attr("width",100).attr("height",50).attr("transform",g().translate(function(){return[0,-50]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-n-1)]})),u.selectAll("rect.stack-top").data([f.stack.length]).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-n-1)]})),d.selectAll("text.stack-top").data([f.stack.length]).enter().append("text").attr("class","stack-top").attr("transform",g().translate(function(n,t){return[50,-20]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-n-1)+25+5]})).text(function(){return"栈顶"}),d.selectAll("text.stack-top").data([f.stack.length]).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-n-1)+25+5]}))}function a(){u.selectAll("rect.item").data(f.stack).enter().append("rect").attr("class","item").attr("width",100).attr("height",50).attr("transform",g().translate(function(n){return[0,-100]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-t-1)]})),u.selectAll("rect.item").data(f.stack).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,50*(5-t-1)]})),u.selectAll("rect.item").data(f.stack).exit().transition().duration(m).remove(),d.selectAll("text.item").data(f.stack).enter().append("text").attr("class","item").attr("transform",g().translate(function(n){return[50,-70]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-t-1)+25+5]})).text(function(n){return n}),d.selectAll("text.item").data(f.stack).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,50*(5-t-1)+25+5]})).text(function(n){return n}),d.selectAll("text.item").data(f.stack).exit().transition().duration(m).remove()}function r(){u.selectAll("rect.peak").data(f.topeak).enter().append("rect").attr("class","peak").attr("width",100).attr("height",50).attr("transform",g().translate(function(n,t){var e=f.stack.length-1;return[0,50*(5-e-1)]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[0,-100]})),u.selectAll("rect.peak").data(f.topeak).exit().transition().duration(m).remove(),d.selectAll("text.peak").data(f.topeak).enter().append("text").attr("class","peak").attr("transform",g().translate(function(n,t){var e=f.stack.length-1;return[50,50*(5-e-1)+25+5]})).transition().duration(m).attr("transform",g().translate(function(n,t){return[50,-70]})).text(function(n){return n}),d.selectAll("text.peak").data(f.topeak).text(function(n){return n}),d.selectAll("text.peak").data(f.topeak).exit().transition().duration(m).remove()}function i(){u.selectAll("rect.push").data(f.topush).enter().append("rect").attr("class","push").attr("width",100).attr("height",50).attr("transform",g().translate(function(n,t){return[0,-100]})).style("opacity",0).transition().duration(m).style("opacity",1),u.selectAll("rect.push").data(f.topush).exit().transition().duration(m).remove(),d.selectAll("text.push").data(f.topush).enter().append("text").attr("class","push").attr("transform",g().translate(function(n,t){return[50,-70]})).style("opacity",0).transition().duration(m).style("opacity",1).text(function(n){return n}),d.selectAll("text.push").data(f.topush).text(function(n){return n}),d.selectAll("text.push").data(f.topush).exit().transition().duration(m).remove()}function o(){h.selectAll("rect.stack-top-high").data(f.stacktop).enter().append("rect").attr("class","stack-top-high").attr("width",100).attr("height",50).attr("transform",g().translate(function(n,t){var e=f.stack.length;return[0,50*(5-e-1)]})).style("opacity",0).transition().duration(m).style("opacity",1),h.selectAll("rect.stack-top-high").data(f.stacktop).attr("transform",g().translate(function(n,t){var e=f.stack.length;return[0,50*(5-e-1)]})),h.selectAll("rect.stack-top-high").data(f.stacktop).exit().transition().duration(m).remove()}function c(n,t){f=n,m=t}function l(n,t){c(n,t),s(),a(),r(),i(),o()}function p(){var n=this,t=y.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){n.svg.attr("transform",g().translate(y.event.translate).scale(y.event.scale))});this.svg=y.select(this.refs.svg.getDOMNode()).append("svg").call(t).append("g"),this.g=this.svg.append("g").attr("transform",g().translate(200,200).scale(1)),this.gbase=this.g.append("g").attr("class","base"),this.ghigh=this.g.append("g").attr("class","high"),this.gtext=this.g.append("g").attr("class","text"),this.gbase.append("rect").attr("class","stack").attr("width",100).attr("height",250).attr("transform",g().translate(function(n,t){return[0,-250]})).transition().duration(.75*this.props.delay).attr("transform",g().translate(function(n,t){return[0,0]})),u=this.gbase,d=this.gtext,h=this.ghigh}var u,d,h,f,m,y=e(2),g=e(5);n.exports={init:p,render:l}}});