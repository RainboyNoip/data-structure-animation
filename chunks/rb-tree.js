webpackJsonpdsa([2],{18:function(e,n,r){function s(){return{id:U++,nil:!0,key:"nil",color:O}}function a(t){k(),x(t),w(t,"left");var e;L(23,1),e=t.right,k(e,t),L(24,1),t.right=e.left,A(t,"right"),k(t,e.left),L(25,1),e.left.nil!==!0&&(L(26,1),e.left.p=t,A(e.left,"p"),k(e.left,t)),L(28,1),e.p=t.p,A(e,"p"),k(e,t.p),L(29,1),t.p.nil?(L(30,1),N.root=e,k(e)):(L(31,1),t===t.p.left?(L(32,1),t.p.left=e,A(t.p,"left")):(L(34,1),t.p.right=e,A(t.p,"right"))),L(36,1),e.left=t,A(e,"left"),k(e,t),L(37,1),t.p=e,A(t,"p"),k(t,e),L(37,1),k(),b(),S(),w()}function i(t){k(),x(t),w(t,"right");var e;L(42,1),e=t.left,k(e,t),L(43,1),t.left=e.right,A(t,"left"),k(t,e.right),L(44,1),e.right.nil!==!0&&(L(45,1),e.right.p=t,A(e.right,"p"),k(e.right,t)),L(47,1),e.p=t.p,A(e,"p"),k(e,t.p),L(48,1),t.p.nil?(L(49,1),N.root=e,k(e)):(L(50,1),t===t.p.right?(L(51,1),t.p.right=e,A(t.p,"right")):(L(53,1),t.p.left=e,A(t.p,"left"))),L(55,1),e.right=t,A(e,"right"),k(e,t),L(56,1),t.p=e,A(t,"p"),k(t,e),L(56,1),k(),b(),S(),w()}function o(t){for(var e;L(61,1),b(t),k(t,t.p),t.p.color===P;)L(62,1),b(t.p.p),t.p===t.p.p.left?(L(63,1),e=t.p.p.right,L(64,1),k(e),e.color===P?(L(65,1),t.p.color=O,_(t.p),k(e,t.p),L(66,1),e.color=O,_(e),L(67,1),t.p.p.color=P,k(e,t.p,t.p.p),L(68,1),t=t.p.p,k(t)):(L(70,1),k(t.p,t),t===t.p.right&&(L(71,1),t=t.p,k(t),L(72,1),a(t)),L(74,1),t.p.color=O,_(t.p),k(t.p),L(75,1),t.p.p.color=P,_(t.p.p),k(t.p.p),L(76,1),i(t.p.p))):(L(79,1),e=t.p.p.left,L(80,1),k(e),e.color===P?(L(81,1),t.p.color=O,_(t.p),k(e,t.p),L(82,1),e.color=O,_(e),L(83,1),t.p.p.color=P,k(e,t.p,t.p.p),L(84,1),t=t.p.p,k(t)):(L(86,1),k(t.p,t),t===t.p.left&&(L(87,1),t=t.p,k(t),L(88,1),i(t),k(),b(),S()),L(90,1),t.p.color=O,_(t.p),k(t.p),L(91,1),t.p.p.color=P,_(t.p.p),k(t.p.p),L(92,1),a(t.p.p),k(),b(),S()));L(96,1),N.root.color=O,S(),k(),b()}function l(t){var e,n;for(L(102),n=N.nil,L(103),e=N.root;L(104,1),b(e),e.nil!==!0;)L(105,1),n=e,L(106),t.key<e.key?(L(107,1),e=e.left,D(t,e)):(L(109,1),e=e.right,D(t,e));b(n),L(112,1),t.p=n,A(t,"p"),L(113,1),n===N.nil?(L(114,1),N.root=t):(L(115,1),t.key<n.key?(L(116,1),n.left=t,A(n,"left")):(L(118,1),n.right=t,A(n,"right"))),b(t),L(120,1),t.left=s(),S(),L(121,1),t.right=s(),S(),L(122,1),t.color=P,_(t),L(123,1),o(t)}function c(t){var e={};L(128),e.id=U++,L(129),e.key=t,D(e,N.root),L(130,1),l(e)}function p(t,e){L(134,1),t.p.nil?(L(135,1),N.root=e):(L(136,1),t===t.p.left?(L(137,1),t.p.left=e):(L(139,1),t.p.right=e)),L(141,1),e.p=t.p}function u(e){for(var n;L(146,1),e!==N.root&&e.color===O;)L(147,1),e===e.p.left?(L(148,1),n=e.p.right,L(149,1),L(149,1),n.color===P&&(L(150,1),n.color=O,L(151,1),e.p.color=P,L(152,1),a(e.p),L(153,1),n=e.p.right),L(155,1),n.left.color===O&&n.right.color===O?(L(156,1),n.color=P,L(157,1),e=e.p):(L(159,1),n.right.color===O&&(L(160,1),n.left.color=O,L(161,1),n.color=P,L(162,1),i(n),L(163,1),n=e.p.right),L(165,1),n.color=e.p.color,L(166,1),e.p.color=O,L(167,1),n.right.color=O,L(168,1),a(e.p),L(169,1),e=N.root)):(L(172,1),n=e.p.left,L(173,1),n.color===P&&(L(174,1),n.color=O,L(175,1),e.p.color=P,L(176,1),i(e.p),L(177,1),n=e.p.left),L(179,1),n.right.color===O&&n.left.color===O?(L(180,1),n.color=P,L(181,1),e=e.p):(L(183,1),n.left.color===O&&(L(184,1),n.right.color=O,L(185,1),n.color=P,L(186,1),a(t,n),L(187,1),n=e.p.left),L(189,1),n.color=e.p.color,L(190,1),e.p.color=O,L(191,1),n.left.color=O,L(192,1),i(e.p),L(193,1),e=N.root));L(197,1),e.color=O}function f(t){for(;L(201,1),t.left.nil!==!0;)L(202,1),t=t.left;return L(204,1),t}function h(t){var e,n,r;L(211,1),n=t,L(212,1),r=n.color,L(213,1),t.left.nil?(L(214,1),e=t.right,L(215,1),p(t,t.right)):(L(216,1),t.right.nil?(L(217,1),e=t.left,L(218,1),p(t,t.left)):(L(220,1),n=f(t.right),L(221,1),r=n.color,L(222,1),e=n.right,L(223,1),n.p===t?(L(224,1),e.p=n):(L(226,1),p(n,n.right),L(227,1),n.right=t.right,L(228,1),n.right.p=n),L(230,1),p(t,n),L(231,1),n.left=t.left,L(232,1),n.left.p=n,L(233,1),n.color=t.color)),L(235,1),r===O&&(L(236,1),u(e))}function d(t,e){var n={id:U++,key:e};for(D(n,N.root);L(241,1),b(t),t.nil!==!0&&e!==t.key;)L(242,1),e<t.key?(L(243,1),t=t.left,D(n,t)):(L(245,1),t=t.right,D(n,t));return b(),k(t),L(248,1),D(),t}function g(t){L(252,1),T=d(N.root,t),L(253,1),D({id:U,key:T.nil!==!0?t:"X"},T)}function m(t){L(256,1);var e=d(N.root,t);L(257,1),e.nil!==!0&&(L(258,1),h(e))}function y(t,e){e.key="递归",D(e,t),L(263,1),t.nil!==!0&&(L(264,1),y(t.left,e),e.key="回溯",D(e,t),L(265,1),E(t),L(266,1),y(t.right,e),e.key="回溯",D(e,t),L(267,1)),L(268,1)}function v(){var t={id:U++,key:"指针"};k(t),L(271,1),y(N.root,t),L(272,1),t.key="完成",D(t,N.root)}function w(t,e){if(void 0===t)M.ro=void 0;else{var n="left"===e?"right":"left",r=[t.id,t[n].id,t[n][n].id,t[n][e].id,t[e].id];M.ro=r}}function _(t){void 0===t?M.co={}:(M.co=M.co||{},M.co[t.id]=t.color)}function x(t){M.hls.push(t.id)}function b(t){M.hls.pop(),void 0!==t&&x(t)}function k(){0===arguments.length?M.hl=[]:M.hl=Array.prototype.map.call(arguments,function(t){return t.id})}function E(t){M.hl.push(t.id)}function A(t,e){if(void 0===t)M.ne={};else{var n=t.id+e;M.ne=M.ne||{},M.ne[n]=t[e].id}}function D(t,e){0===arguments.length?M.nn=void 0:M.nn={id:t.id,key:t.key,color:t.color,ref:e.id}}function S(){_(),A(),D(),M.lastTree=C(N)}function L(t,e,n){1===e&&(lastStatus=M.clone()),B.push({status:lastStatus,line:t,animation:n,id:I}),I++}function R(){L(B[B.length-1].line,1)}var T,C=r(4),B=[],I=0,M={},U=0,P=1,O=0,N={nil:s()};N.root=N.nil,M.clone=function(){return void 0===this.lastTree&&(this.lastTree=C(N)),{tree:this.lastTree,hl:C(this.hl)||[],hls:C(this.hls)||[],ne:C(this.ne)||{},nn:C(this.nn),co:C(this.co)||{},ro:C(this.ro)||void 0}},M.init=function(t){t&&(N.root=N.nil),this.hl=[],this.hls=[],this.ne={},this.nn=void 0,this.co={},this.ro=void 0},lastStatus={},e.exports={getInitialDescriptions:function(){return this.initialize(!0),c(10),c(1),c(2),c(3),c(4),this.run("insert","5")},initialize:function(t){return B=[],I=0,M.init(t),lastStatus=M.clone(),this},insert:c,inorder:v,"delete":m,search:g,run:function(t,e){return this.initialize()[t](isNaN(parseInt(e))?0:parseInt(e)),R(),{frames:B,others:{}}}}},35:function(t,e,n){var r=n(1),s=n(2);t.exports=r.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},render:function(){return r.createElement("div",{className:"list"},r.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"整数"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"insert"),value:"插入"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"delete"),value:"删除"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"search"),value:"查找"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"inorder"),value:"中序遍历"}))},_onChange:function(t){this.setState({text:t.target.value})},_onClick:function(t){s.runDemo(t,this.state.text)}})},42:function(t,e,n){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include "./util.h"</span>\n\nvoid* SafeMalloc(size_t size) {\n    void* m;\n    <span class="keyword">if</span> ((m = malloc(size))) {\n        <span class="keyword">return</span> m;\n    } <span class="keyword">else</span> {\n        printf(<span class="string">"memory overflow\\n"</span>);\n        <span class="keyword">exit</span>(-<span class="number">1</span>);\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n}\n\n<span class="comment">// FIXME</span>\n<span class="comment">//   stack,queue and other dsa should use dynamically</span>\n<span class="comment">//   allocated memory, which is what util.c provides.</span>\n<span class="comment">//   Also should be included in model-file descripttions.</span>'},43:function(t,e,n){t.exports='<span class="comment">#ifndef UTIL_H</span>\n<span class="comment">#define UTIL_H</span>\n\n<span class="comment">#include &lt;stddef.h></span>\n\nvoid * SafeMalloc(size_t size);\n\n<span class="comment">#endif</span>'},50:function(t,e,n){t.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=test.c rb-tree.c rb-tree.h ../common/util.c ../common/util.h\nOBJECTS=$(SOURCES:.c=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},51:function(t,e,n){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include "./rb-tree.h"</span>\n<span class="comment">#include "../common/util.h"</span>\n\nint _RED = <span class="number">1</span>;\nint _BLACK = <span class="number">0</span>;\n\nrb_tree * RBTreeCreate() {\n    rb_tree* newTree;\n    rb_tree_node* newNode;\n    newTree = (rb_tree*) SafeMalloc(sizeof(rb_tree));\n    newTree->nil = newNode = (rb_tree_node*) SafeMalloc(sizeof(rb_tree_node));\n    newNode->left = newNode->right = newNode->p = newNode;\n    newNode->key = <span class="number">0</span>;\n    newNode->color = _BLACK;\n    newTree->root = newTree->nil;\n    <span class="keyword">return</span> newTree;\n}\n\nvoid _LeftRotate(rb_tree* t, rb_tree_node* x) {\n    rb_tree_node* y;\n    y = x->right;\n    x->right = y->left;\n    <span class="keyword">if</span> (y->left != t->nil) {\n        y->left->p = x;\n    }\n    y->p = x->p;\n    <span class="keyword">if</span> (x->p == t->nil) {\n        t->root = y;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (x == x->p->left) {\n        x->p->left = y;\n    } <span class="keyword">else</span> {\n        x->p->right = y;\n    }\n    y->left = x;\n    x->p = y;\n}\n\nvoid _RightRotate(rb_tree* t, rb_tree_node* y) {\n    rb_tree_node* x;\n    x = y->left;\n    y->left = x->right;\n    <span class="keyword">if</span> (x->right != t->nil) {\n        x->right->p = y;\n    }\n    x->p = y->p;\n    <span class="keyword">if</span> (y->p == t->nil) {\n        t->root = x;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (y == y->p->right) {\n        y->p->right = x;\n    } <span class="keyword">else</span> {\n        y->p->left = x;\n    }\n    x->right = y;\n    y->p = x;\n}\n\nvoid _InsertFixUp(rb_tree* t, rb_tree_node *z) {\n    rb_tree_node *y;\n    <span class="keyword">while</span> (z->p->color == _RED) {\n        <span class="keyword">if</span> (z->p == z->p->p->left) {\n            y = z->p->p->right;\n            <span class="keyword">if</span> (y->color == _RED) {\n                z->p->color = _BLACK;\n                y->color = _BLACK;\n                z->p->p->color = _RED;\n                z = z->p->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (z == z->p->right) {\n                    z= z->p;\n                    _LeftRotate(t, z);\n                }\n                z->p->color = _BLACK;\n                z->p->p->color = _RED;\n                _RightRotate(t, z->p->p);\n            }\n        } <span class="keyword">else</span> {\n            y = z->p->p->left;\n            <span class="keyword">if</span> (y->color == _RED) {\n                z->p->color = _BLACK;\n                y->color = _BLACK;\n                z->p->p->color = _RED;\n                z = z->p->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (z == z->p->left) {\n                    z= z->p;\n                    _RightRotate(t, z);\n                }\n                z->p->color = _BLACK;\n                z->p->p->color = _RED;\n                _LeftRotate(t, z->p->p);\n            }\n        }\n    }\n    t->root->color = _BLACK;\n}\n\nvoid _Insert(rb_tree* t, rb_tree_node* z) {\n    rb_tree_node* x;\n    rb_tree_node* y;\n    y = t->nil;\n    x = t->root;\n    <span class="keyword">while</span> (x != t->nil) {\n        y = x;\n        <span class="keyword">if</span> (z->key &lt; x->key) {\n            x = x->left;\n        } <span class="keyword">else</span> {\n            x = x->right;\n        }\n    }\n    z->p = y;\n    <span class="keyword">if</span> (y == t->nil) {\n        t->root = z;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (z->key &lt; y->key) {\n        y->left = z;\n    } <span class="keyword">else</span> {\n        y->right = z;\n    }\n    z->left = t->nil;\n    z->right = t->nil;\n    z->color = _RED;\n    _InsertFixUp(t, z);\n}\n\nvoid RBTreeInsert(rb_tree* t, int key) {\n    rb_tree_node* newNode;\n    newNode = (rb_tree_node*) SafeMalloc(sizeof(rb_tree_node));\n    newNode->key = key;\n    _Insert(t, newNode);\n}\n\nvoid _Transplant(rb_tree* t, rb_tree_node* u, rb_tree_node* v) {\n    <span class="keyword">if</span> (u->p == t->nil) {\n        t->root = v;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (u == u->p->left) {\n        u->p->left = v;\n    } <span class="keyword">else</span> {\n        u->p->right = v;\n    }\n    v->p = u->p;\n}\n\nvoid _DeleteFixUp(rb_tree* t, rb_tree_node* x) {\n    rb_tree_node* w;\n    <span class="keyword">while</span> (x != t->root &amp;&amp; x->color == _BLACK) {\n        <span class="keyword">if</span> (x == x->p->left) {\n            w = x->p->right;\n            <span class="keyword">if</span> (w->color == _RED) {\n                w->color = _BLACK;\n                x->p->color = _RED;\n                _LeftRotate(t, x->p);\n                w = x->p->right;\n            }\n            <span class="keyword">if</span> (w->left->color == _BLACK &amp;&amp; w->right->color == _BLACK) {\n                w->color = _RED;\n                x = x->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (w->right->color == _BLACK) {\n                    w->left->color = _BLACK;\n                    w->color = _RED;\n                    _RightRotate(t, w);\n                    w = x->p->right;\n                }\n                w->color = x->p->color;\n                x->p->color = _BLACK;\n                w->right->color = _BLACK;\n                _LeftRotate(t, x->p);\n                x = t->root;\n            }\n        } <span class="keyword">else</span> {\n            w = x->p->left;\n            <span class="keyword">if</span> (w->color == _RED) {\n                w->color = _BLACK;\n                x->p->color = _RED;\n                _RightRotate(t, x->p);\n                w = x->p->left;\n            }\n            <span class="keyword">if</span> (w->right->color == _BLACK &amp;&amp; w->left->color == _BLACK) {\n                w->color = _RED;\n                x = x->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (w->left->color == _BLACK) {\n                    w->right->color = _BLACK;\n                    w->color = _RED;\n                    _LeftRotate(t,w);\n                    w = x->p->left;\n                }\n                w->color = x->p->color;\n                x->p->color = _BLACK;\n                w->left->color = _BLACK;\n                _RightRotate(t, x->p);\n                x = t->root;\n            }\n        }\n    }\n    x->color =_BLACK;\n}\n\nrb_tree_node* _Minimum(rb_tree* t, rb_tree_node *z) {\n    <span class="keyword">while</span> (z->left != t->nil) {\n        z = z->left;\n    }\n    <span class="keyword">return</span> z;\n}\n\nvoid _Delete(rb_tree* t, rb_tree_node *z) {\n    rb_tree_node* x;\n    rb_tree_node* y;\n    int y_original_color;\n    y = z;\n    y_original_color = y->color;\n    <span class="keyword">if</span> (z->left == t->nil) {\n        x = z->right;\n        _Transplant(t, z, z->right);\n    } <span class="keyword">else</span> <span class="keyword">if</span> (z->right == t->nil) {\n        x = z->left;\n        _Transplant(t, z, z->left);\n    } <span class="keyword">else</span> {\n        y = _Minimum(t, z->right);\n        y_original_color = y->color;\n        x = y->right;\n        <span class="keyword">if</span> (y->p == z) {\n            x->p = y;\n        } <span class="keyword">else</span> {\n            _Transplant(t, y, y->right);\n            y->right = z->right;\n            y->right->p = y;\n        }\n        _Transplant(t, z, y);\n        y->left = z->left;\n        y->left->p = y;\n        y->color = z->color;\n    }\n    <span class="keyword">if</span> (y_original_color == _BLACK) {\n        _DeleteFixUp(t, x);\n    }\n}\n\nrb_tree_node* _Search(rb_tree* t, rb_tree_node* x, int k) {\n    <span class="keyword">while</span> (x != t->nil &amp;&amp; k != x->key) {\n        <span class="keyword">if</span> (k &lt; x->key) {\n            x = x->left;\n        } <span class="keyword">else</span> {\n            x = x->right;\n        }\n    }\n    <span class="keyword">return</span> x;\n}\n\nrb_tree_node* RBTreeSearch(rb_tree* t, int k) {\n    <span class="keyword">return</span> _Search(t, t->root, k);\n}\n\nvoid RBTreeDelete(rb_tree* t, int key) {\n    rb_tree_node* newNode = _Search(t, t->root, key);\n    <span class="keyword">if</span> (newNode != t->nil) {\n        _Delete(t, newNode);\n    }\n}\n\nvoid _InorderWalk(rb_tree* t, rb_tree_node* x) {\n    <span class="keyword">if</span> (x != t->nil) {\n        _InorderWalk(t, x->left);\n        printf(<span class="string">"%d "</span>, x->key);\n        _InorderWalk(t, x->right);\n    }\n}\n\nvoid RBTreeInorderWalk(rb_tree* t) {\n    _InorderWalk(t, t->root);\n    printf(<span class="string">"\\n"</span>);\n}\n\nvoid _Destroy(rb_tree* t, rb_tree_node* x) {\n    <span class="keyword">if</span> (x != t->nil) {\n        _Destroy(t, x->left);\n        _Destroy(t, x->right);\n        free(x);\n    }\n}\n\nvoid RBTreeDestroy(rb_tree* t) {\n    _Destroy(t, t->root);\n    free(t->nil);\n}'},52:function(t,e,n){t.exports='<span class="comment">#ifndef RB_TREE_H</span>\n<span class="comment">#define RB_TREE_H</span>\n\ntypedef struct rb_tree_node {\n    int key;\n    int color;\n    struct rb_tree_node* left;\n    struct rb_tree_node* right;\n    struct rb_tree_node* p;\n} rb_tree_node;\n\ntypedef struct rb_tree {\n    rb_tree_node* root;\n    rb_tree_node* nil;\n} rb_tree;\n\nrb_tree* RBTreeCreate();\nvoid RBTreeInsert(rb_tree*, int);\nvoid RBTreeDelete(rb_tree*, int);\nvoid RBTreeDestroy(rb_tree*);\nrb_tree_node* RBTreeSearch(rb_tree*, int);\nvoid RBTreeInorderWalk(rb_tree*);\n\n<span class="comment">#endif</span>'},53:function(t,e,n){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./rb-tree.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  int i;\n  int k;\n  rb_tree* rbTree = RBTreeCreate();\n  <span class="keyword">while</span> (scanf(<span class="string">"%d"</span>, &amp;i) != EOF) {\n    scanf(<span class="string">"%d"</span>, &amp;k);\n    <span class="keyword">switch</span> (i) {\n      <span class="keyword">case</span> <span class="number">0</span>:\n        RBTreeInsert(rbTree, k);\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">1</span>:\n        RBTreeDelete(rbTree, k);\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">2</span>:\n        RBTreeSearch(rbTree, k);\n        <span class="keyword">break</span>;\n    }\n    RBTreeInorderWalk(rbTree);\n  }\n  RBTreeDestroy(rbTree);\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},69:function(t,e,n){function r(){return A.hls.length+1+(A.hl.length?1:0)}function s(t){if(void 0===t.color)return"deepskyblue";var e=B[t.id]+1,n=A.hls.length+1+(A.hl.length?1:0);return n>e&&(e=1),N[t.color](e/n)}function a(t){var e=Math.min(B[t.from],B[t.to])+1,n=A.hls.length+1+(A.hl.length?1:0);return n>e&&(e=1),S.interpolate(0,1)(e/n)}function i(t,e,n){R[t.id]=R[t.id]||{},R[t.id].curr=e}function o(t,e){var n=t.id,r=t[e]?t[e].id:void 0,s=n+e;return void 0!==A.ne[s]&&(r=A.ne[s]),{from:t.id,to:r,type:e,id:s}}function l(t){I.push(t.id);var e=t.color;return void 0!==A.co[t.id]&&(e=A.co[t.id]),{color:e,v:t.key,id:t.id}}function c(t,e){e=e||t.p.id,void 0===R[t.id].prev&&(void 0===R[e]?R[t.id].prev=R[t.id].curr:R[t.id].prev=R[e].prev||R[t.id].curr),t.p&&C.push(o(t,"p")),t.id===A.hl&&(hide=!1),T.push(l(t)),t.left&&(C.push(o(t,"left")),c(t.left,t.id)),t.right&&(C.push(o(t,"right")),c(t.right,t.id)),t.id===A.hl&&(hide=!0)}function p(){T=[],C=[],I=[],B={},B[A.tree.nil.id]=-1===A.hl.indexOf(A.tree.nil.id)?0:r()-1,u(A.tree.root,0);for(var t in R)R[t].prev=R[t].curr;i(A.tree.nil,{x:0,y:1.5*-U}),R[A.tree.nil.id].prev=R[A.tree.nil.id].curr,A.tree.root.nil!==!0&&(i(A.tree.root,{x:0,y:0}),f(A.tree.root.left,0,0,-M,O),f(A.tree.root.right,0,0,M,O)),T.push(l(A.tree.nil)),A.tree.root.nil!==!0&&c(A.tree.root),A.nn&&(T.push(l(A.nn)),i(A.nn,{x:R[A.nn.ref].curr.x,y:R[A.nn.ref].curr.y-U/2},1),void 0===R[A.nn.id].prev&&(R[A.nn.id].prev=R[A.nn.ref].curr),void 0!==A.ne[A.nn.id+"p"]&&C.push(o(A.nn,"p")),B[A.nn.id]=A.hls.length);for(var e=0;e<C.length;++e){var n=C[e].from,s=C[e].to,a=R[s].curr.x-R[n].curr.x,p=R[s].curr.y-R[n].curr.y,h=Math.sqrt(a*a+p*p);C[e].dx=a*P/h,C[e].dy=p*P/h}Object.keys(R).filter(function(t){return-1===I.indexOf(+t)}).forEach(function(t){delete R[t]})}function u(t,e){-1!==A.hls.indexOf(t.id)&&(e=A.hls.lastIndexOf(t.id)+1),-1!==A.hl.indexOf(t.id)?B[t.id]=A.hls.length+1:B[t.id]=e,t.left&&u(t.left,e),t.right&&u(t.right,e)}function f(t,e,n,r,s){if(void 0!==t){var a,o;0>r?(a="right",o="left"):(a="left",o="right");var l=U;return t.nil||void 0===t[a]?i(t,{x:n+r,y:e+l}):i(t,{x:f(t[a],e+l,n,r,t.color)+r,y:e+l}),t.nil||void 0===t[o]?R[t.id].curr.x:f(t[o],e+l,R[t.id].curr.x,r,t.color)}}function h(){k.selectAll("circle.node").data(T,function(t){return t.id}).enter().append("circle").attr("class","node").attr("cx",function(t){return R[t.id].prev.x}).attr("cy",function(t){return R[t.id].prev.y}).attr("r",P).style("fill",function(t){return t.color?"red":"black"}),k.selectAll("circle.node").data(T,function(t){return t.id}).transition().duration(D).attr("cx",function(t){return R[t.id].curr.x}).attr("cy",function(t){return R[t.id].curr.y}).style("fill",s),k.selectAll("circle.node").data(T,function(t){return t.id}).exit().remove()}function d(){E.selectAll("line.edge").data(C,function(t){return t.id}).enter().append("line").attr("class","edge").attr("x1",function(t){return R[t.from].prev.x+t.dx}).attr("y1",function(t){return R[t.from].prev.y+t.dy}).attr("x2",function(t){return R[t.from].prev.x+t.dx}).attr("y2",function(t){return R[t.from].prev.y+t.dy}).classed("parent",function(t){return"p"===t.type?!0:!1}).classed("child",function(t){return"p"!==t.type?!0:!1}),E.selectAll("line.edge").data(C,function(t){return t.id}).transition().duration(D).attr("x1",function(t){return R[t.from].curr.x+t.dx}).attr("y1",function(t){return R[t.from].curr.y+t.dy}).attr("x2",function(t){return R[t.to].curr.x-t.dx}).attr("y2",function(t){return R[t.to].curr.y-t.dy}).style("opacity",a),E.selectAll("line.edge").data(C,function(t){return t.id}).exit().remove()}function g(){x.selectAll("text.node").data(T,function(t){return t.id}).enter().append("text").attr("class","node").attr("x",function(t){return R[t.id].prev.x}).attr("y",function(t){return R[t.id].prev.y}).attr("dy",5),x.selectAll("text.node").data(T,function(t){return t.id}).transition().duration(D).attr("x",function(t){return R[t.id].curr.x}).attr("y",function(t){return R[t.id].curr.y}).style("fill",s).text(function(t){return t.v}),x.selectAll("text.node").data(T,function(t){return t.id}).exit().remove()}function m(){var t=A.ro?[A.ro]:[];b.selectAll("path.rot").data(t).enter().append("path").attr("class","rot").attr("d",function(t){return this.__prev__=t,"M"+t.map(function(t){return[R[t].curr.x,R[t].curr.y]}).join("L")}).style("fill-opacity",.05).style("opacity",0).transition().duration(D).style("opacity",1),b.selectAll("path.rot").data(t).attr("d",function(t){return this.__prev__=t,"M"+t.map(function(t){return[R[t].curr.x,R[t].curr.y]}).join("L")}),b.selectAll("path.rot").data(t).exit().transition().duration(D).attr("d",function(){for(var t=this.__prev__,e=0;e<t.length;++e)if(void 0===R[t[e]])return"";return"M"+t.map(function(t){return[R[t].curr.x,R[t].curr.y]}).join("L")}).style("opacity",0).remove()}function y(t,e){A=t,D=e}function v(t,e){y(t,e),p(),d(),h(),g(),m()}function w(){var t=this,e=S.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){t.svg.attr("transform",L().translate(S.event.translate).scale(S.event.scale))});this.svg=S.select(this.refs.svg.getDOMNode()).append("svg").call(e).append("g"),this.g=this.svg.append("g").attr("transform",L().translate(100,100).scale(1)),this.ghigh=this.g.append("g").attr("class","high"),this.gbase=this.g.append("g").attr("class","base"),this.gtext=this.g.append("g").attr("class","text"),_=this.gbase,E=this.gbase.append("g").attr("class","edges"),k=this.gbase.append("g").attr("class","nodes"),x=this.gtext,b=this.ghigh}var _,x,b,k,E,A,D,S=n(3),L=n(5),R={},T=[],C=[],B={},I=[],M=35,U=70,P=15,O=0,N=[S.interpolateRgb("white","black"),S.interpolateRgb("white","red")];t.exports={init:w,render:v}}});