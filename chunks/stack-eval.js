webpackJsonpdsa([4],{13:function(t,n,e){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./stack.h"</span>\n\nvoid init(Stack *s) {\n    s->top = <span class="number">0</span>;\n};\n\nint isFull(Stack *s) {\n    <span class="keyword">if</span> (s->top == N) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n};\n\nint isEmpty(Stack *s) {\n    <span class="keyword">if</span> (s->top == <span class="number">0</span>) {\n        <span class="keyword">return</span> <span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n};\n\nvoid push(Stack *s, int val) {\n    <span class="keyword">if</span> (isFull(s) == <span class="number">1</span>) {\n        printf(<span class="string">"stack full.\\n"</span>);\n    } <span class="keyword">else</span> {\n        s->data[s->top++] = val;\n    }\n};\n\nvoid pop(Stack *s) {\n    <span class="keyword">if</span> (isEmpty(s) == <span class="number">1</span>) {\n        printf(<span class="string">"stack empty.\\n"</span>);\n    } <span class="keyword">else</span> {\n        s->top = s->top - <span class="number">1</span>;\n    }\n};\n\nint peak(Stack *s) {\n    <span class="keyword">if</span> (isEmpty(s) == <span class="number">1</span>) {\n        printf(<span class="string">"stack empty.\\n"</span>);\n        <span class="keyword">return</span> -<span class="number">1</span>;\n    } <span class="keyword">else</span> {\n        <span class="keyword">return</span> s->data[s->top - <span class="number">1</span>];\n    }\n};'},14:function(t,n,e){t.exports='<span class="comment">#define N 5</span>\n\ntypedef struct {\n    int top;\n    int data[N];\n} Stack;\n\nvoid init(Stack *s);\nint isFull(Stack *s);\nint isEmpty(Stack *s);\nvoid push(Stack *s, int val);\nvoid pop(Stack *s);\nint peak(Stack *s);'},24:function(t,n,e){function a(t){currentStatus.stack.push(t)}function s(t){currentStatus.iter[0]=t,void 0===t&&(currentStatus.iter=[])}function r(t){currentStatus.table.push(t),0===t&&(currentStatus.table=[])}function i(t,n){void 0===t?currentStatus.peak=[]:(void 0===currentStatus.peak[t]&&(currentStatus.peak[t]=[]),currentStatus.peak[t].push(n))}function o(t,n,e){1===n&&(lastStatus=l(currentStatus)),u.push({status:lastStatus,line:t,animation:e,id:f}),f++}function c(){o(u[u.length-1].line,1)}var p,l=e(4),u=[],f=0,h=[],d=[],m=function(t,n){return o(5),"+"===t||"-"===t?(r(t),o(6,1),"+"==n||"-"==n||")"===n?(r(n),o(7,1),1):(r(n),o(9,1),-1)):(o(11,1),"*"===t||"/"===t?(r(t),o(12,1),"("===n?(r(n),o(13,1),-1):(r(n),o(15,1),1)):(o(17,1),"("===t?(r(t),o(18,1),")"===n?(r(n),o(19,1),0):(r(n),o(21,1),-1)):(o(24,1),-1)))},y=function(t,n){var e,a,s;switch(o(31,0),e=t[t.length-1],i(0,e),o(32,1),t.pop(),o(33,1),a=t[t.length-1],i(0,a),o(34,1),t.pop(),o(35,1),s=n[n.length-1],i(1,s),o(36,1),n.pop(),o(37,1),s){case"+":o(38),t.push(e+a);break;case"-":o(39),t.push(a-e);break;case"*":o(40),t.push(e*a);break;case"/":o(41),t.push(Math.floor(a/e));break;default:o(42)}i()},g=function(t){var n;for(o(48),h=[],a(h),o(49,1),o(50),d=[],a(d),o(51,1),n=0;o(52,1),s(n),0!=t.length;t=t.slice(1),++n)if(o(53,1),"0"<=t[0]&&t[0]<="9")o(54),h.push(t[0]-"0");else{for(;o(56,1),0!==d.length&&1===(p=m(d[d.length-1],t[0]),o(56,1),r(0),p);)o(57,1),y(h,d);o(59,1),")"===t[0]?(o(60),d.pop()):(o(62),d.push(t[0]))}for(;o(66,1),0!==d.length;)o(67,1),y(h,d);return o(69),i(0,h[h.length-1]),h[h.length-1]};currentStatus={},lastStatus={},t.exports={getInitialDescriptions:function(){return this.run("eval","1*(2+3)")},initialize:function(){return u=[],f=0,currentStatus={stack:[],iter:[],peak:[],table:[]},lastStatus=l(currentStatus),this},eval:function(t){g(t)},run:function(t,n){return this.initialize().eval(n),c(),{frames:u,others:{string:(n.trim()+"=").split("")}}}}},47:function(t,n,e){var a=e(1),s=e(2);t.exports=a.createClass({displayName:"module.exports",getInitialState:function(){return{text:"1*(2+3)"}},render:function(){return a.createElement("div",{className:"list"},a.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"表达式"}),a.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"eval"),value:"计算"}))},_onChange:function(t){this.setState({text:t.target.value})},_onClick:function(t){s.runDemo(t,this.state.text)}})},77:function(t,n,e){t.exports='CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=main.c stack-<span class="keyword">eval</span>.c ../stack/stack.c\nOBJECTS=$(SOURCES:.cpp=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out'},78:function(t,n,e){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "../stack/stack.h"</span>\n\nint prior(char instack, char coming) {\n    <span class="keyword">if</span> (instack == <span class="string">\'+\'</span> || instack == <span class="string">\'-\'</span>) {\n        <span class="keyword">if</span> (coming == <span class="string">\'+\'</span> || coming == <span class="string">\'-\'</span> || coming == <span class="string">\')\'</span>) {\n            <span class="keyword">return</span> <span class="number">1</span>;\n        } <span class="keyword">else</span> {\n            <span class="keyword">return</span> -<span class="number">1</span>;\n        }\n    } <span class="keyword">else</span> <span class="keyword">if</span> (instack == <span class="string">\'*\'</span> || instack == <span class="string">\'/\'</span>) {\n        <span class="keyword">if</span> (coming == <span class="string">\'(\'</span>) {\n            <span class="keyword">return</span> -<span class="number">1</span>;\n        } <span class="keyword">else</span> {\n            <span class="keyword">return</span> <span class="number">1</span>;\n        }\n    } <span class="keyword">else</span> <span class="keyword">if</span> (instack == <span class="string">\'(\'</span>) {\n        <span class="keyword">if</span> (coming == <span class="string">\')\'</span>) {\n            <span class="keyword">return</span> <span class="number">0</span>;\n        } <span class="keyword">else</span> {\n            <span class="keyword">return</span> -<span class="number">1</span>;\n        }\n    }\n    <span class="keyword">return</span> -<span class="number">1</span>;\n};\n\nvoid poppush(Stack *nums, Stack *ops) {\n    int a;\n    int b;\n    int op;\n    a = peak(nums);\n    pop(nums);\n    b = peak(nums);\n    pop(nums);\n    op = peak(ops);\n    pop(ops);\n    <span class="keyword">switch</span>(op) {\n        <span class="keyword">case</span> <span class="string">\'+\'</span>: push(nums, a+b); <span class="keyword">break</span>;\n        <span class="keyword">case</span> <span class="string">\'-\'</span>: push(nums, b-a); <span class="keyword">break</span>;\n        <span class="keyword">case</span> <span class="string">\'*\'</span>: push(nums, a*b); <span class="keyword">break</span>;\n        <span class="keyword">case</span> <span class="string">\'/\'</span>: push(nums, b/a); <span class="keyword">break</span>;\n        <span class="keyword">default</span>: <span class="keyword">break</span>;\n    }\n};\n\nint <span class="keyword">eval</span>(char *str) {\n    int i;\n    Stack nums;\n    init(&amp;nums);\n    Stack ops;\n    init(&amp;ops);\n    <span class="keyword">for</span> (; *str != <span class="string">\'\\0\'</span>; str++) {\n        <span class="keyword">if</span> (<span class="string">\'0\'</span> &lt;= *str &amp;&amp; *str &lt;= <span class="string">\'9\'</span>) {\n            push(&amp;nums,  *str - <span class="string">\'0\'</span>);\n        } <span class="keyword">else</span> {\n            <span class="keyword">while</span> (isEmpty(&amp;ops) == <span class="number">0</span> &amp;&amp; prior(peak(&amp;ops), *str) == <span class="number">1</span>) {\n                poppush(&amp;nums, &amp;ops);\n            }\n            <span class="keyword">if</span> (*str == <span class="string">\')\'</span>) {\n                pop(&amp;ops);\n            } <span class="keyword">else</span> {\n                push(&amp;ops, *str);\n            }\n        }\n    }\n    <span class="keyword">while</span> (isEmpty(&amp;ops) == <span class="number">0</span>) {\n        poppush(&amp;nums, &amp;ops);\n    }\n    <span class="keyword">return</span> peak(&amp;nums);\n};'},79:function(t,n,e){t.exports='int <span class="keyword">eval</span>(char *expr);'},80:function(t,n,e){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./stack-eval.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  freopen(<span class="string">"in"</span>, <span class="string">"r"</span>, stdin);\n  char s[<span class="number">10</span>];\n  scanf(<span class="string">"%s"</span>, s);\n  printf(<span class="string">"%s = %d\\n"</span>, s, <span class="keyword">eval</span>(s));\n  <span class="keyword">return</span> <span class="number">0</span>;\n}'},99:function(t,n,e){function a(){var t=v.string.map(function(t,n){var e=y.iter[0]||0;return{v:t,i:n-e}});h.selectAll("rect.char").data(t).enter().append("rect").attr("class","char").attr("width","100").attr("height","50").transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i,0]})),h.selectAll("rect.char").data(t).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i,0]})),h.selectAll("rect.char").data(t).exit().transition().duration(g).remove(),d.selectAll("text.char").data(t).enter().append("text").attr("class","char").attr("transform",x().translate(function(t,n){return[50,30]})).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i+50,30]})).text(function(t){return t.v}),d.selectAll("text.char").data(t).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i+50,30]})).text(function(t){return t.v}),d.selectAll("text.char").data(t).exit().transition().duration(g).remove()}function s(){var t=w.range(y.stack.length);h.selectAll("rect.stack").data(t).enter().append("rect").attr("class","stack").attr("width",100).attr("height",250).attr("transform",x().translate(function(t,n){return[100*n,0]})).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*n,150]})),h.selectAll("rect.stack").data(t).exit().transition().duration(g).remove()}function r(){h.selectAll("rect.stack-top").data(y.stack).enter().append("rect").attr("class","stack-top").attr("width",100).attr("height",50).attr("transform",x().translate(function(t,n){return[100*n,0]})).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*n,150+50*(5-t.length-1)]})),h.selectAll("rect.stack-top").data(y.stack).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*n,150+50*(5-t.length-1)]})),h.selectAll("rect.stack-top").data(y.stack).exit().transition().duration(g).remove(),d.selectAll("text.stack-top").data(y.stack).enter().append("text").attr("class","stack-top").attr("transform",x().translate(function(t,n){return[100*n+50,30]})).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*n+50,150+50*(5-t.length-1)+25+5]})).text(function(){return"栈顶"}),d.selectAll("text.stack-top").data(y.stack).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*n+50,150+50*(5-t.length-1)+25+5]})),d.selectAll("text.stack-top").data(y.stack).exit().transition().duration(g).remove()}function i(){var t=y.stack.reduce(function(t,n,e){return t.concat(n.map(function(t,n){return{v:t,i:e,j:n}}))},[]),n=function(t){return(t.i?"ops":"nums")+t.j};h.selectAll("rect.item").data(t,n).enter().append("rect").attr("class","item").attr("width",100).attr("height",50).attr("transform",x().translate(function(t){return[100*t.i,100]})).transition().duration(g).attr("transform",x().translate(function(t){return[100*t.i,150+50*(5-t.j-1)]})),h.selectAll("rect.item").data(t,n).transition().duration(g).attr("transform",x().translate(function(t){return[100*t.i,150+50*(5-t.j-1)]})),h.selectAll("rect.item").data(t,n).exit().transition().duration(g).remove(),d.selectAll("text.item").data(t,n).enter().append("text").attr("class","item").attr("transform",x().translate(function(t){return[100*t.i+50,130]})).transition().duration(g).attr("transform",x().translate(function(t){return[100*t.i+50,150+50*(5-t.j-1)+25+5]})).text(function(t){return t.v}),d.selectAll("text.item").data(t,n).transition().duration(g).attr("transform",x().translate(function(t){return[100*t.i+50,150+50*(5-t.j-1)+25+5]})).text(function(t){return t.v}),d.selectAll("text.item").data(t,n).exit().transition().duration(g).remove()}function o(){var t=y.peak.reduce(function(t,n,e){return t.concat(n.map(function(t,n){return{v:t,i:e,j:n}}))},[]);h.selectAll("rect.peak").data(t).enter().append("rect").attr("class","peak").attr("width",100).attr("height",50).attr("transform",x().translate(function(t,n){y.stack[t.i].length-1;return[100*t.i,150+50*(5-t.j-1)]})).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i,50+50*(2-t.j-1)]})),h.selectAll("rect.peak").data(t).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i,50+50*(2-t.j-1)]})),h.selectAll("rect.peak").data(t).exit().transition().duration(g).remove(),d.selectAll("text.peak").data(t).enter().append("text").attr("class","peak").attr("transform",x().translate(function(t,n){y.stack[t.i].length-1;return[100*t.i+50,150+50*(5-t.j-1)+25+5]})).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i+50,50+50*(2-t.j-1)+25+5]})).text(function(t){return t.v}),d.selectAll("text.peak").data(t).transition().duration(g).attr("transform",x().translate(function(t,n){return[100*t.i+50,50+50*(2-t.j-1)+25+5]})).text(function(t){return t.v}),d.selectAll("text.peak").data(t).exit().transition().duration(g).remove()}function c(){m.selectAll("rect.char").data(y.iter).enter().append("rect").attr("class","char").attr("width",100).attr("height",50).transition().duration(g).attr("transform",x().translate(function(t){return[0,0]})),m.selectAll("rect.char").data(y.iter).exit().transition().duration(g).remove()}function p(){var t=y.table.map(function(t,n){var e=b[0].indexOf(t);return w.range(7).map(function(t){return n?{r:t,c:e,t:n}:{r:e,c:t,t:n}})}).reduce(function(t,n){return t.concat(n)},[]);m.selectAll("rect.op-grid").data(t).enter().append("rect").attr("class","op-grid").attr("width",function(t){return t.t?0:50}).attr("height",function(t){return t.t?50:0}).attr("transform",x().translate(function(t){return t.t?[200,50+50*t.r]:[200+50*t.c,50]})).transition().duration(g).attr("width",50).attr("height",50).attr("transform",x().translate(function(t){return[200+50*t.c,50+50*t.r]}));var n=m.selectAll("rect.op-grid").data(t).exit(),e=n[0].map(function(t){return t.__data__}).sort(function(t,n){return t.r===n.r?t.c-n.c:t.r-n.r}).reduce(function(t,n,e){return t.s||t.r===n.r&&t.c===n.c?{r:t.r,c:t.c,s:1}:n},[]);e.r=e.r||0,e.c=e.c||0,n.transition().duration(g/2).attr("transform",x().translate(function(t,n,a){return[200+50*e.c,50+50*e.r]})).transition().duration(g/2).remove()}function l(t,n){y=t,g=n}function u(t,n){l(t,n),a(),s(),r(),i(),o(),c(),p()}function f(){var t=this,n=w.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){t.svg.attr("transform",x().translate(w.event.translate).scale(w.event.scale))});this.svg=w.select(this.refs.svg.getDOMNode()).append("svg").call(n).append("g"),this.g=this.svg.append("g").attr("transform",x().translate(10,10).scale(1)),this.gbase=this.g.append("g").attr("class","base"),this.ghigh=this.g.append("g").attr("class","high"),this.gtext=this.g.append("g").attr("class","text"),this.gbase.selectAll("rect.op-grid").data(w.range(49).map(function(t){return{r:Math.floor(t/7),c:t%7}})).enter().append("rect").attr("class","op-grid").attr("transform",x().translate(function(t,n){return[200+50*t.c,50+50*t.r]})).attr("width",function(t){return(t.r+t.c)%2?0:50}).attr("height",function(t){return(t.r+t.c)%2?50:0}).transition().duration(.75*this.props.delay).attr("width",50).attr("height",50),this.gtext.selectAll("text.op-grid").data(b.reduce(function(t,n,e){return t.concat(n.map(function(t,n){return{v:t,r:e,c:n}}))},[])).enter().append("text").attr("class","op-grid").attr("transform",x().translate(function(t,n){return[200+50*t.c+25,50+50*t.r+25+5]})).text("").transition().duration(.75*this.props.delay).text(function(t){return t.v}),h=this.gbase,d=this.gtext,m=this.ghigh,v=this.props.others}var h,d,m,y,g,v,w=e(3),x=e(5),b=[["#","+","-","*","/","(",")"],["+",">",">","<","<","<",">"],["-",">",">","<","<","<",">"],["*",">",">",">",">","<",">"],["/",">",">",">",">","<",">"],["(","<","<","<","<","<","<"],[")","/","/","/","/","/","/"]];t.exports={init:f,render:u}}});