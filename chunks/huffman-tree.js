webpackJsonpdsa([2],{6:function(e,n,t){e.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include &lt;string.h></span>\n<span class="comment">#include "./util.h"</span>\n\nvoid* SafeMalloc(size_t size) {\n    void* m;\n    <span class="keyword">if</span> ((m = malloc(size))) {\n        <span class="keyword">return</span> m;\n    } <span class="keyword">else</span> {\n        printf(<span class="string">"memory overflow\\n"</span>);\n        <span class="keyword">exit</span>(-<span class="number">1</span>);\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n}\n\nvoid MemoryCopy(void *a, <span class="keyword">const</span> void *b, size_t size) {\n    <span class="comment">// size_t i;</span>\n    <span class="comment">// size_t n = size / sizeof(char);</span>\n    <span class="comment">// for (i = 0; i &lt; n; ++i) {</span>\n    <span class="comment">//     *((char *)a + i) = *((char *)b + i);</span>\n    <span class="comment">// }</span>\n    memcpy(a, b, size);\n}\n\nvoid MemorySwap(void *a, void *b, size_t size) {\n    <span class="comment">// size_t i;</span>\n    <span class="comment">// size_t n = size / sizeof(char);</span>\n    <span class="comment">// char t;</span>\n    <span class="comment">// for (i = 0; i &lt; n; ++i) {</span>\n    <span class="comment">//     t = *(char *)a;</span>\n    <span class="comment">//     *((char *)a + i) = *((char *)b + i);</span>\n    <span class="comment">//     *((char *)b + i) = t;</span>\n    <span class="comment">// }</span>\n    void *t = SafeMalloc(size);\n    memcpy(t, a, size);\n    memcpy(a, b, size);\n    memcpy(b, t, size);\n}\n\nvoid MemoryClear(void *a, size_t size) {\n    memset(a, <span class="number">0</span>, size);\n}\n\nvoid *MemoryAddress(void *a, int i, size_t size) {\n    <span class="keyword">return</span> (char *)a + i*size;\n}'},7:function(e,n,t){e.exports='<span class="comment">#ifndef UTIL_H</span>\n<span class="comment">#define UTIL_H</span>\n\n<span class="comment">#include &lt;stddef.h></span>\n\nvoid * SafeMalloc(size_t size);\nvoid MemoryCopy(void *a, <span class="keyword">const</span> void *b, size_t size);\nvoid MemorySwap(void *a, void *b, size_t size);\nvoid MemoryClear(void *a, size_t size);\n\n<span class="comment">#endif</span>'},20:function(e,n,t){function s(e,n,t,s){var r={id:m++,p:null};return r.key=e,r.val=n,r.left=t,null!==t&&(t.p=r),r.right=s,null!==s&&(s.p=r),a(r),r}function a(e){null===e.left&&null===e.right?e.size=1:(e.size=0,null!==e.left&&(e.size+=e.left.size),null!==e.right&&(e.size+=e.right.size))}function r(e){var n,t,a,r={},i=[];for(f.l=e.length,c(51,1),a=0;a<e.length;++a){var t=e.charCodeAt(a);r[t]=(r[t]||0)+1}c(62,1);for(a in r)r[a]>0&&(n=String.fromCharCode(a),i.push(s(r[a],n,null,null)));return f.array=i,f.n=i.length,c(70,1),o(i)}function i(e,n){return e.key!==n.key?e.key-n.key:e.id-n.id}function o(e){var n,t,a,r,o,l,u;for(t=e.length,c(86,1),a=new p(i),f.sorted=!0,n=0;t>n;++n)a.insert(e[n]);for(f.array=a.array;c(91,1),a.array.length>1;)c(92),l=a.pop(),f.hl=1,f.pop=[l],c(93,1),u=a.pop(),f.hl=2,f.pop.push(u),c(94,1),o=s(l.key+u.key,"",l,u),f.pop=[o],f.hl=1,c(95,1),a.insert(o),f.pop=[],f.hl=0;return c(97,1),c(98),c(99),c(100),c(101),f.zo=!0,c(102,1),r}function c(e,n,t){1===n&&(lastStatus=f.clone()),d.push({status:lastStatus,line:e,animation:t,id:h}),h++}function l(){c(d[d.length-1].line,1)}function p(e){this.array=[],this.cf=e}var u=t(4),d=[],h=0,f={},m=0;f.clone=function(){return{array:u(this.array)||[],pop:u(this.pop)||[],n:this.n||0,l:this.l||0,zo:this.zo||!1,sorted:this.sorted||!1,hl:this.hl||0}},f.init=function(e){this.array=[],this.pop=[],this.n=0,this.l=0,this.zo=!1,this.sorted=!1,this.hl=0},lastStatus={},e.exports={getInitialDescriptions:function(){return this.initialize(!0),this.run("create","The quick brown fox jumps over the lazy dog")},initialize:function(e){return d=[],h=0,m=0,f.init(e),lastStatus=f.clone(),this},create:r,run:function(e,n){return this.initialize()[e](n),l(),{frames:d,others:{}}}},p.prototype.p=function(e){return 0==e?0:Math.floor((e-1)/2)},p.prototype.l=function(e){return 2*e+1},p.prototype.r=function(e){return 2*e+2},p.prototype.ex=function(e,n){var t=this.array[e];this.array[e]=this.array[n],this.array[n]=t},p.prototype.insert=function(e){this.array.push(e);for(var n=this.array.length-1;0!=n&&this.cf(this.array[n],this.array[this.p(n)])<0;)this.ex(n,this.p(n)),n=this.p(n)},p.prototype.pop=function(){var e,n,t;if(0!==this.array.length){for(t=this.array[0],this.array[0]=this.array[this.array.length-1],this.array.pop(),e=0,n=-1;e!==n;)n=e,void 0!==this.array[this.l(e)]&&this.cf(this.array[this.l(e)],this.array[e])<0&&(n=this.l(e)),void 0!==this.array[this.r(e)]&&this.cf(this.array[this.r(e)],this.array[n])<0&&(n=this.r(e)),n!=e&&(this.ex(e,n),e=n,n=-1);return t}}},32:function(e,n,t){n=e.exports=t(8)(),n.push([e.id,".axis text{display:none}",""])},46:function(e,n,t){var s=t(1),a=t(3),r=t(113);e.exports=s.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},componentDidMount:function(){r.init.bind(this)(),a.runDemo("create","Huffman Tree",!1)},componentDidUpdate:function(e){this.props!==e&&void 0!==this.props.frame&&r.render(this.props.frame.status,this.props.delay,this.props.others)},render:function(){return s.createElement("div",{className:"wrapper-code"},s.createElement("div",{className:"list"},s.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"字符串"}),s.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"create"),value:"编码",title:"编码"})),s.createElement("div",{ref:"svg",className:"scene"}))},_onChange:function(e){this.setState({text:e.target.value})},_onClick:function(e){a.runDemo(e,this.state.text)}})},68:function(e,n,t){e.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=test.c huffman-tree.c huffman-tree.h ../common/util.c ../common/util.h ../min-heap/min-heap.c ../min-heap/min-heap.h\nOBJECTS=$(SOURCES:.c=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},69:function(e,n,t){e.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include &lt;string.h></span>\n<span class="comment">#include "./huffman-tree.h"</span>\n<span class="comment">#include "../min-heap/min-heap.h"</span>\n<span class="comment">#include "../common/util.h"</span>\n\nhuffman_tree_node* _NewNode(int k, char v, huffman_tree_node* l, huffman_tree_node* r) {\n    huffman_tree_node* node = (huffman_tree_node*)SafeMalloc(sizeof(huffman_tree_node));\n    node->key = k;\n    node->val = v;\n    node->left = l;\n    node->right = r;\n    <span class="keyword">return</span> node;\n}\n\nhuffman_tree_item* _NewItem(int k, char v, char* c) {\n    huffman_tree_item* item = (huffman_tree_item*)SafeMalloc(sizeof(huffman_tree_item));\n    item->key = k;\n    item->val = v;\n    item->code = (char*)SafeMalloc(sizeof(c));\n    strcpy(item->code, c);\n    <span class="keyword">return</span> item;\n}\n\nchar* _Append(char* s, char* t) {\n    char* r = (char*)SafeMalloc(sizeof(s)+sizeof(char));\n    strcpy(r,s);\n    strcat(r,t);\n    <span class="keyword">return</span> r;\n}\n\nvoid _Traverse(huffman_tree* t, huffman_tree_node* x, char* s) {\n    <span class="keyword">if</span> (x->left == <span class="keyword">NULL</span> &amp;&amp; x->right == <span class="keyword">NULL</span>) {\n        t->table[t->size++] = _NewItem(x->key, x->val, s);\n        <span class="keyword">return</span>;\n    }\n    _Traverse(t, x->left, _Append(s,<span class="string">"0"</span>));\n    _Traverse(t, x->right, _Append(s,<span class="string">"1"</span>));\n}\n\nhuffman_tree* HuffmanTreeCreate(char *s) {\n    int tbl[<span class="number">256</span>];\n    int i;\n    int n = <span class="number">0</span>;\n    char* s2 = <span class="keyword">NULL</span>;\n    int* tbl2 = <span class="keyword">NULL</span>;\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; <span class="number">256</span>; ++i) {\n        tbl[i] = <span class="number">0</span>;\n    }\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; strlen(s); ++i) {\n        <span class="keyword">if</span> (<span class="number">0</span> &lt;= s[i] &amp;&amp; s[i] &lt; <span class="number">256</span>) {\n            <span class="keyword">if</span> (tbl[(int)s[i]] == <span class="number">0</span>) {\n                n++;\n            }\n            tbl[(int)s[i]]++;\n        }\n    }\n    s2 = SafeMalloc(sizeof(char)*(n+<span class="number">1</span>));\n    tbl2 = SafeMalloc(sizeof(int)*(n));\n    n = <span class="number">0</span>;\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; <span class="number">256</span>; ++i) {\n        <span class="keyword">if</span> (tbl[i] > <span class="number">0</span>) {\n            s2[n] = (char)i;\n            tbl2[n] = tbl[i];\n            n++;\n        }\n    }\n    s2[n] = <span class="string">\'\\0\'</span>;\n    <span class="keyword">return</span> HuffmanTreeCreateWithFreq(s2,tbl2);\n}\n\nint _CompareFn(<span class="keyword">const</span> void* a, <span class="keyword">const</span> void* b) {\n    <span class="keyword">return</span> ((huffman_tree_node*)a)->key - ((huffman_tree_node*)b)->key;\n}\n\nhuffman_tree* HuffmanTreeCreateWithFreq(char* s, int* tbl) {\n    int i;\n    int n;\n    min_heap* h;\n    huffman_tree* t;\n    huffman_tree_node* node;\n    huffman_tree_node* node1;\n    huffman_tree_node* node2;\n    n = strlen(s);\n    h = MinHeapCreate(n, sizeof(huffman_tree_node), _CompareFn);\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; n; ++i) {\n        node = _NewNode(tbl[i], s[i], <span class="keyword">NULL</span>, <span class="keyword">NULL</span>);\n        MinHeapInsert(h, node, <span class="number">0</span>);\n    }\n    <span class="keyword">while</span> (h->size > <span class="number">1</span>) {\n        node1 = (huffman_tree_node*)MinHeapPop(h);\n        node2  = (huffman_tree_node*)MinHeapPop(h);\n        node = _NewNode(node1->key + node2->key, node1->val, node1, node2);\n        MinHeapInsert(h, node, <span class="number">0</span>);\n    }\n    t = (huffman_tree*)SafeMalloc(sizeof(huffman_tree));\n    t->root = (huffman_tree_node*)MinHeapPop(h);\n    t->size = <span class="number">0</span>;\n    t->table = SafeMalloc(sizeof(huffman_tree_item*)*n);\n    _Traverse(t, t->root, <span class="string">""</span>); MinHeapDestroy(h);\n    <span class="keyword">return</span> t;\n}'},70:function(e,n,t){e.exports='<span class="comment">#ifndef HUFFMAN_TREE_H</span>\n<span class="comment">#define HUFFMAN_TREE_H</span>\n\ntypedef struct huffman_tree_node {\n  int key;\n  char val;\n  struct huffman_tree_node* left;\n  struct huffman_tree_node* right;\n} huffman_tree_node;\n\ntypedef struct huffman_tree_item {\n  int key;\n  char val;\n  char* code;\n} huffman_tree_item;\n\ntypedef struct huffman_tree {\n  struct huffman_tree_node* root;\n  struct huffman_tree_item** table;\n  int size;\n} huffman_tree;\n\nhuffman_tree* HuffmanTreeCreate(char *);\nhuffman_tree* HuffmanTreeCreateWithFreq(char *, int *);\n\n<span class="comment">#endif</span>'},71:function(e,n,t){e.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include &lt;string.h></span>\n<span class="comment">#include "./huffman-tree.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  char *s;\n  size_t buf = <span class="number">0</span>;\n  int tbl[<span class="number">100</span>];\n  int i;\n  int l;\n  int type;\n  huffman_tree* t;\n  printf(<span class="string">"0: full text, 1: text with freq > "</span>);\n  scanf(<span class="string">"%d\\n"</span>, &amp;type);\n  <span class="keyword">if</span> (type) {\n    getline(&amp;s, &amp;buf, stdin);\n    l = strlen(s)-<span class="number">1</span>;\n    s[l--] = <span class="string">\'\\0\'</span>;\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; l; ++i) {\n      scanf(<span class="string">"%d"</span>, &amp;tbl[i]);\n    }\n    t = HuffmanTreeCreateWithFreq(s, tbl);\n  } <span class="keyword">else</span> {\n    getline(&amp;s, &amp;buf, stdin);\n    l = strlen(s)-<span class="number">1</span>;\n    s[l--] = <span class="string">\'\\0\'</span>;\n    printf(<span class="string">"%s\\n"</span>,s);\n    t = HuffmanTreeCreate(s);\n  }\n  <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; t->size; ++i) {\n    printf(<span class="string">"char %c, freq %d, code %s\\n"</span>, t->table[i]->val, t->table[i]->key, t->table[i]->code);\n  }\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},72:function(e,n,t){e.exports='<span class="comment">#include &lt;stddef.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include "../common/util.h"</span>\n<span class="comment">#include "./min-heap.h"</span>\n\nmin_heap* MinHeapCreate(int n, size_t item_size, int (*CompFn)(<span class="keyword">const</span> void*, <span class="keyword">const</span> void*)) {\n    int i;\n    min_heap* h = (min_heap*)SafeMalloc(sizeof(min_heap));\n    h-><span class="keyword">array</span> = SafeMalloc(n * sizeof(min_heap_pair));\n    h->capacity = n;\n    h->size = <span class="number">0</span>;\n    h->item_size = item_size;\n    h->Compare = CompFn;\n    h->map = SafeMalloc(n*sizeof(int));\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; n; ++i) {\n        h-><span class="keyword">array</span>[i].item = <span class="keyword">NULL</span>;\n        h->map[i] = -<span class="number">1</span>;\n    }\n    <span class="keyword">return</span> h;\n}\n\nvoid MinHeapDestroy(min_heap *h) {\n    int i;\n    <span class="keyword">for</span> (i = <span class="number">0</span>; i &lt; h->capacity; ++i) {\n        <span class="keyword">if</span> (h-><span class="keyword">array</span>[i].item != <span class="keyword">NULL</span>) {\n            free(h-><span class="keyword">array</span>[i].item);\n        }\n    }\n    free(h-><span class="keyword">array</span>);\n    free(h->map);\n    free(h);\n}\n\nint _P(int x) {\n    <span class="keyword">return</span> x == <span class="number">0</span> ? <span class="number">0</span> : (x-<span class="number">1</span>)/<span class="number">2</span>;\n}\nint _L(int x) {\n    <span class="keyword">return</span> x*<span class="number">2</span>+<span class="number">1</span>;\n}\nint _R(int x) {\n    <span class="keyword">return</span> x*<span class="number">2</span>+<span class="number">2</span>;\n}\nvoid _Exchange(min_heap* h, int i, int j) {\n    min_heap_pair tmp;\n    tmp = h-><span class="keyword">array</span>[i];\n    h-><span class="keyword">array</span>[i] = h-><span class="keyword">array</span>[j];\n    h-><span class="keyword">array</span>[j] = tmp;\n    h->map[h-><span class="keyword">array</span>[i].key] = i;\n    h->map[h-><span class="keyword">array</span>[j].key] = j;\n}\n\nvoid _Swim(min_heap *h, int x) {\n    <span class="keyword">while</span> (x != <span class="number">0</span> &amp;&amp; h->Compare(h-><span class="keyword">array</span>[x].item, h-><span class="keyword">array</span>[_P(x)].item) &lt; <span class="number">0</span>) {\n        _Exchange(h, x, _P(x));\n        x = _P(x);\n    }\n}\n\nvoid _Sink(min_heap *h, int x) {\n    int y = -<span class="number">1</span>;\n    <span class="keyword">while</span> (x != y) {\n        y = x;\n        <span class="keyword">if</span> (_L(x) &lt; h->size &amp;&amp; h->Compare(h-><span class="keyword">array</span>[_L(x)].item, h-><span class="keyword">array</span>[x].item) &lt; <span class="number">0</span>) {\n            y = _L(x);\n        }\n        <span class="keyword">if</span> (_R(x) &lt; h->size &amp;&amp; h->Compare(h-><span class="keyword">array</span>[_R(x)].item, h-><span class="keyword">array</span>[y].item) &lt; <span class="number">0</span>) {\n            y = _R(x);\n        }\n        <span class="keyword">if</span> (y != x) {\n            _Exchange(h, x, y);\n            x = y;\n            y = -<span class="number">1</span>;\n        }\n    }\n}\n\nvoid MinHeapInsert(min_heap* h, void* item, int id) {\n    int x = h->size;\n    <span class="keyword">if</span> (x == h->capacity) {\n        <span class="keyword">return</span>;\n    }\n    h-><span class="keyword">array</span>[x].key = id;\n    h->map[id] = x;\n    <span class="keyword">if</span> (h-><span class="keyword">array</span>[x].item == <span class="keyword">NULL</span>) {\n        h-><span class="keyword">array</span>[x].item = SafeMalloc(h->item_size);\n    }\n    MemoryCopy(h-><span class="keyword">array</span>[x].item, item, h->item_size);\n    h->size++;\n    _Swim(h, x);\n}\n\nvoid* MinHeapPop(min_heap* h) {\n    void* item = SafeMalloc(h->item_size);\n    <span class="keyword">if</span> (h->size == <span class="number">0</span>) {\n        <span class="keyword">return</span> <span class="keyword">NULL</span>;\n    }\n    MemoryCopy(item, h-><span class="keyword">array</span>[<span class="number">0</span>].item, h->item_size);\n    h->map[h-><span class="keyword">array</span>[<span class="number">0</span>].key] = -<span class="number">1</span>;\n    MemoryCopy(h-><span class="keyword">array</span>[<span class="number">0</span>].item, h-><span class="keyword">array</span>[h->size-<span class="number">1</span>].item, h->item_size);\n    h-><span class="keyword">array</span>[<span class="number">0</span>].key = h-><span class="keyword">array</span>[h->size-<span class="number">1</span>].key;\n    h->map[h-><span class="keyword">array</span>[<span class="number">0</span>].key] = <span class="number">0</span>;\n    free(h-><span class="keyword">array</span>[h->size-<span class="number">1</span>].item);\n    h-><span class="keyword">array</span>[h->size-<span class="number">1</span>].item = <span class="keyword">NULL</span>;\n    h->size--;\n    _Sink(h, <span class="number">0</span>);\n    <span class="keyword">return</span> item;\n}\n\nvoid *MinHeapUpdate(min_heap *h, void *item, int id) {\n    int i;\n    int rc;\n    <span class="keyword">if</span> (id &lt; <span class="number">0</span> || id >= h->capacity) {\n        <span class="keyword">return</span> <span class="keyword">NULL</span>;\n    }\n    i = h->map[id];\n    rc = h->Compare(h-><span class="keyword">array</span>[i].item, item);\n    MemoryCopy(h-><span class="keyword">array</span>[i].item, item, h->item_size);\n    <span class="keyword">if</span> (rc &lt; <span class="number">0</span>) {\n        _Sink(h, i);\n        <span class="keyword">return</span> item;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (rc > <span class="number">0</span>) {\n        _Swim(h, i);\n        <span class="keyword">return</span> item;\n    }\n    <span class="keyword">return</span> <span class="keyword">NULL</span>;\n}'},73:function(e,n,t){e.exports='<span class="comment">#ifndef MIN_HEAP_H</span>\n<span class="comment">#define MIN_HEAP_H</span>\n\n<span class="comment">#include &lt;stddef.h></span>\n\ntypedef struct min_heap_pair {\n    void *item;\n    int key;\n} min_heap_pair;\n\ntypedef struct min_heap {\n    int size;\n    int capacity;\n    size_t item_size;\n    min_heap_pair* <span class="keyword">array</span>;\n    int (*Compare)(<span class="keyword">const</span> void* a, <span class="keyword">const</span> void* b);\n    int* map;\n} min_heap;\n\nmin_heap* MinHeapCreate(int n, size_t item_size, int (*CompFn)(<span class="keyword">const</span> void*, <span class="keyword">const</span> void*));\nvoid MinHeapInsert(min_heap* h, void* item, int id);\nvoid* MinHeapPop(min_heap* h);\nvoid MinHeapDestroy(min_heap* h);\nvoid *MinHeapUpdate(min_heap *h, void *item, int id);\n\n<span class="comment">#endif</span>'},102:function(e,n,t){var s=t(32);"string"==typeof s&&(s=[[e.id,s,""]]);t(9)(s,{})},113:function(e,n,t){function s(e){return e.id}function a(e,n){v=e,w=n}function r(){function e(e){if(void 0===e.paths){e.paths=[],e.ancestors=[];for(var n=e;null!==n.p;)e.paths.push(n.p.id+"-"+n.id),e.ancestors.push(n.p.id),n=n.p}}function n(n,t,s){e(n);var a=n.paths,r=n.ancestors,i=n.id;b.selectAll("line.edge").style("opacity",function(e){return-1===a.indexOf(e.id)?.3:1}),b.selectAll("text.edge").style("opacity",function(e){return-1===a.indexOf(e.id)?.3:1}),b.selectAll("rect.node").style("opacity",function(e){return-1===r.indexOf(e.id)&&e.id!==i?.3:1}),b.selectAll("text.char").style("opacity",function(e){return-1===r.indexOf(e.id)&&e.id!==i?.3:1}).text(function(e){return i===e.id?e.key:e.val})}function t(e){b.selectAll("line.edge").style("opacity",1),b.selectAll("text.edge").style("opacity",1),b.selectAll("rect.node").style("opacity",1),b.selectAll("text.char").style("opacity",1).text(function(e){return e.val})}var a=x.filter(function(e){return e.inner===!0}),r=x.filter(function(e){return e.inner!==!0});f.selectAll("rect.node").data(r,s).enter().append("rect").attr("class","node").attr("x",function(e){return e.x-e.w/2}).attr("y",function(e){return e.inner?e.y-e.h/2:0}).attr("width",function(e){return e.w}).attr("height",0).style("fill",function(e){return L(e.id)}).on("mouseover",n).on("mouseout",t),f.selectAll("rect.node").data(a,s).enter().append("rect").attr("class","node").attr("x",function(e){return e.x-e.w/2}).attr("y",function(e){return e.inner?e.y-e.h/2:0}).attr("width",function(e){return e.w}).attr("height",0).style("fill",function(e){return"black"}),f.selectAll("rect.node").data(x,s).transition().duration(w).attr("x",function(e){return e.x-e.w/2}).attr("y",function(e){return e.inner?e.y-e.h/2:0}).attr("width",function(e){return e.w}).attr("height",function(e){return e.h}).style("opacity",function(e){return e.o?.3:1}),f.selectAll("rect.node").data(x,s).exit().remove(),d.selectAll("text.node").data(x,s).enter().append("text").attr("class","node").attr("x",function(e){return e.tx}).attr("y",function(e){return e.ty-5}),d.selectAll("text.node").data(x,s).transition().duration(w).attr("x",function(e){return e.tx}).attr("y",function(e){return e.ty-5}).text(function(e){return e.top?e.key:""}).style("opacity",function(e){return e.o?.3:1}),d.selectAll("text.node").data(x,s).exit().remove(),d.selectAll("text.char").data(r,s).enter().append("text").attr("class","char").attr("x",function(e){return e.tx}).attr("y",function(e){return e.h>40?e.h-10:e.h+10}).style("fill",function(e){return e.h>40?L(e.id):"black"}),d.selectAll("text.char").data(x,s).transition().duration(w).attr("x",function(e){return e.tx}).attr("y",function(e){return e.h>40?e.h/2+5:e.h+10}).text(function(e){return e.val}).style("opacity",function(e){return e.o?.3:1}),d.selectAll("text.char").data(x,s).exit().remove()}function i(){function e(e){var n=e.x1-e.x2,t=e.y1-e.y2,s=Math.sqrt(n*n+t*t);return s/5+"px"}m.selectAll("line.edge").data(_,s).enter().append("line").attr("class","edge").attr("x1",function(e){return e.x1}).attr("y1",function(e){return e.y1}).attr("x2",function(e){return e.x1}).attr("y2",function(e){return e.y1}).attr("stroke","black").attr("stroke-width",3).attr("stroke-opacity",1),m.selectAll("line.edge").data(_,s).transition().duration(w).attr("x1",function(e){return e.x1}).attr("y1",function(e){return e.y1}).attr("x2",function(e){return e.x2}).attr("y2",function(e){return e.y2}).style("opacity",function(e){return e.o?.3:1}),m.selectAll("line.edge").data(_,s).exit().remove();var n=v.zo?_:[];d.selectAll("text.edge").data(n,s).enter().append("text").attr("class","edge").attr("x",function(e){return(e.x1+e.x1)/2}).attr("y",function(e){return(e.y1+e.y1)/2}).style("fill","black").style("font-size",e).text(function(e){return e.left?"0":"1"}),d.selectAll("text.edge").data(n,s).transition().duration(w).attr("x",function(e){return(e.x1+e.x2)/2}).attr("y",function(e){return(e.y1+e.y2)/2}).text(function(e){return e.t}).style("font-size",e).style("opacity",function(e){return e.o?.3:1}),d.selectAll("text.edge").data(n,s).exit().remove()}function o(e,n){if(1===e.size)return e.x=S(k++)+S.rangeBand()/2,e.y=0,e.w=S.rangeBand(),e.h=A(e.key),e.tx=e.x,e.ty=0,e.inner=!1,e.o=n,x.push(e),[e.x,e.x];var t=o(e.left,n)[0],s=o(e.right,n)[1];return e.w=D,e.h=D,e.x=(t+s)/2,e.y=e.left.y-(e.size-e.left.size)*S.rangeBand()/2,e.tx=e.x,e.ty=e.y,e.inner=!0,e.o=n,x.push(e),_.push({o:n,x1:e.left.x,y1:e.left.y,x2:e.x,y2:e.y,id:e.id+"-"+e.left.id,t:0}),_.push({o:n,x1:e.right.x,y1:e.right.y,x2:e.x,y2:e.y,id:e.id+"-"+e.right.id,t:1}),[t,s]}function c(){v.sorted&&void 0===v.array.sorted&&(v.array.sort(function(e,n){return e.key===n.key?e.id-n.id:e.key-n.key}),v.array.sorted=!0),array=v.pop.concat(v.array),x=[],_=[],S.rangeRoundBands([0,720],.08).domain(b.range(v.n)),A.range([0,400]).domain([0,v.l]),k=0,array.forEach(function(e,n){e.top=!0;var t=!1;v.pop.length===v.hl&&0!==v.hl&&n>=v.hl&&(t=!0),o(e,t)})}function l(e,n){a(e,n),c(),r(),i()}function p(){var e=this,n=b.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){e.svg.attr("transform",E().translate(b.event.translate).scale(b.event.scale))});this.svg=b.select(this.refs.svg.getDOMNode()).append("svg").call(n).append("g"),this.g=this.svg.append("g").attr("transform",E().translate(100,200).scale(.5)),h=this.g.append("g").attr("class","high"),gtree=this.g.append("g").attr("class","tree"),u=this.g.append("g").attr("class","base"),d=this.g.append("g").attr("class","text"),m=gtree.append("g").attr("class","edges"),f=gtree.append("g").attr("class","nodes"),g=this.g.append("g").attr("class","axis"),y=this.g.append("g").attr("class","axis")}t(102);var u,d,h,f,m,g,y,v,w,x,_,k,b=t(2),E=t(5),S=b.scale.ordinal(),A=b.scale.linear(),L=b.scale.category20(),D=10;e.exports={init:p,render:l}}});