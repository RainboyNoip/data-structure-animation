webpackJsonpdsa([2],{18:function(e,n,r){function s(){return{id:O++,nil:!0,key:"nil",color:z}}function i(t){k(),_(t),w(t,"left");var e;T(23,1),e=t.right,k(e,t),T(24,1),t.right=e.left,A(t,"right"),k(t,e.left),T(25,1),e.left.nil!==!0&&(T(26,1),e.left.p=t,A(e.left,"p"),k(e.left,t)),T(28,1),e.p=t.p,A(e,"p"),k(e,t.p),T(29,1),t.p.nil?(T(30,1),j.root=e,k(e)):(T(31,1),t===t.p.left?(T(32,1),t.p.left=e,A(t.p,"left")):(T(34,1),t.p.right=e,A(t.p,"right"))),T(36,1),e.left=t,A(e,"left"),k(e,t),T(37,1),t.p=e,A(t,"p"),k(t,e),T(37,1),k(),b(),L(),w()}function a(t){k(),_(t),w(t,"right");var e;T(42,1),e=t.left,k(e,t),T(43,1),t.left=e.right,A(t,"left"),k(t,e.right),T(44,1),e.right.nil!==!0&&(T(45,1),e.right.p=t,A(e.right,"p"),k(e.right,t)),T(47,1),e.p=t.p,A(e,"p"),k(e,t.p),T(48,1),t.p.nil?(T(49,1),j.root=e,k(e)):(T(50,1),t===t.p.right?(T(51,1),t.p.right=e,A(t.p,"right")):(T(53,1),t.p.left=e,A(t.p,"left"))),T(55,1),e.right=t,A(e,"right"),k(e,t),T(56,1),t.p=e,A(t,"p"),k(t,e),T(56,1),k(),b(),L(),w()}function o(t){for(var e;T(61,1),b(t),k(t,t.p),t.p.color===N;)T(62,1),b(t.p.p),t.p===t.p.p.left?(T(63,1),e=t.p.p.right,T(64,1),k(e),e.color===N?(T(65,1),t.p.color=z,x(t.p),k(e,t.p),T(66,1),e.color=z,x(e),T(67,1),t.p.p.color=N,x(t.p.p),k(e,t.p,t.p.p),T(68,1),t=t.p.p,k(t)):(T(70,1),k(t.p,t),t===t.p.right&&(T(71,1),t=t.p,k(t),T(72,1),i(t)),T(74,1),t.p.color=z,x(t.p),k(t.p),T(75,1),t.p.p.color=N,x(t.p.p),k(t.p.p),T(76,1),a(t.p.p))):(T(79,1),e=t.p.p.left,T(80,1),k(e),e.color===N?(T(81,1),t.p.color=z,x(t.p),k(e,t.p),T(82,1),e.color=z,x(e),T(83,1),t.p.p.color=N,x(t.p.p),k(e,t.p,t.p.p),T(84,1),t=t.p.p,k(t)):(T(86,1),k(t.p,t),t===t.p.left&&(T(87,1),t=t.p,k(t),T(88,1),a(t),k(),b(),L()),T(90,1),t.p.color=z,x(t.p),k(t.p),T(91,1),t.p.p.color=N,x(t.p.p),k(t.p.p),T(92,1),i(t.p.p),k(),b(),L()));T(96,1),j.root.color=z,L(),k(),b()}function l(t){var e,n;for(T(102),n=j.nil,T(103),e=j.root;T(104,1),b(e),e.nil!==!0;)T(105,1),n=e,T(106),t.key<e.key?(T(107,1),e=e.left,S(t,e)):(T(109,1),e=e.right,S(t,e));b(n),T(112,1),t.p=n,A(t,"p"),T(113,1),n===j.nil?(T(114,1),j.root=t):(T(115,1),t.key<n.key?(T(116,1),n.left=t,A(n,"left")):(T(118,1),n.right=t,A(n,"right"))),b(t),T(120,1),t.left=s(),L(),A(t,"left"),T(121,1),t.right=s(),L(),A(t,"right"),T(122,1),t.color=N,x(t),A(),T(123,1),o(t)}function c(t){var e={};T(128),e.id=O++,T(129),e.key=t,S(e,j.root),T(130,1),l(e)}function p(t,e){_(e),T(134,1),t.p.nil?(T(135,1),j.root=e):(T(136,1),t===t.p.left?(T(137,1),t.p.left=e,A(t.p,"left"),k(t.p,e)):(T(139,1),t.p.right=e,A(t.p,"right"),k(t.p,e))),T(141,1),e.p=t.p,A(e,"p"),k(e,t.p),D(e,t),T(141,1),b(),k()}function u(e,n){k(e);for(var r,s;T(147,1),k(e),e!==j.root&&e.color===z;)T(148,1),e===e.p.left?(T(149,1),s=e.p.right,T(150,1),k(e,s),s.color===N&&(T(151,1),s.color=z,x(s),k(e,s),T(152,1),e.p.color=N,x(e.p),E(e,s,e.p),T(153,1),i(e.p),k(e),S(n,e),T(154,1),s=e.p.right),T(156,1),k(e,s.left,s.right),s.left.color===z&&s.right.color===z?(T(157,1),s.color=N,x(s),E(s),T(158,1),e=e.p,k(e),S(n,e)):(T(160,1),k(e,s.right),s.right.color===z&&(T(161,1),s.left.color=z,x(s.left),E(s.left),T(162,1),s.color=N,x(s),E(s),T(163,1),a(s),k(e),S(n,e),T(164,1),s=e.p.right),T(166,1),r=e.p.color,S(n,e.p),E(e.p),T(167,1),e.p.color=z,x(e.p),n.color=r,S(n,e.p),T(168,1),s.color=r,x(s),E(s),n.color=z,S(n,s),T(169,1),s.right.color=z,x(s.right),E(s.right),n.color=N,S(n,s.right),T(170,1),i(e.p),k(s.right),S(n,s.right),T(171,1),e=j.root,k(e))):(T(174,1),s=e.p.left,T(175,1),k(e,s),s.color===N&&(T(176,1),s.color=z,x(s),k(e,s),T(177,1),e.p.color=N,x(e.p),E(e,s,e.p),T(178,1),a(e.p),k(e),S(n,e),T(179,1),s=e.p.left),T(181,1),k(e,s.left,s.right),s.right.color===z&&s.left.color===z?(T(182,1),s.color=N,x(s),E(s),T(183,1),e=e.p,k(e),S(n,e)):(T(185,1),k(e,s.left),s.left.color===z&&(T(186,1),s.right.color=z,x(s.right),E(s.right),T(187,1),s.color=N,x(s),E(s),T(188,1),i(t,s),k(e),S(n,e),T(189,1),s=e.p.left),T(191,1),r=e.p.color,E(e.p),T(192,1),e.p.color=z,x(e.p),n.color=r,S(n,e.p),T(193,1),s.color=r,x(s),E(s),n.color=z,S(n,s),T(194,1),s.left.color=z,x(s.left),E(s.left),E(s.left),n.color=N,S(n,s.left),T(195,1),a(e.p),k(s.right),S(n,s.right),T(196,1),e=j.root,k(e)));T(200,1),e.color=z,x(e),S()}function f(t,e){var n={id:e,key:"min"};for(S(n,t),k(t);T(204,1),E(t.left),t.left.nil!==!0;)T(205,1),t=t.left,k(t),S(n,t);return T(207,1),k(t),t}function h(t){b(t),k(t);var e,n,r,s={id:O++,extra:!0,key:""};T(214,1),n=t,S(s,t),T(215,1),r=n.color,s.color=n.color,S(s,t),T(216,1),k(t,t.left),t.left.nil?(T(217,1),e=t.right,k(t),T(218,1),p(t,t.right),L()):(T(219,1),k(t,t.right),t.right.nil?(T(220,1),e=t.left,k(t),T(221,1),p(t,t.left),L()):(k(t),T(223,1),n=f(t.right,s.id),delete s.color,S(s,n),k(n),T(224,1),r=n.color,s.color=n.color,S(s,n),T(225,1),e=n.right,T(226,1),n.p===t?(T(227,1),e.p=n,A(e,"p"),E(e)):(T(229,1),p(n,n.right),k(n),T(230,1),n.right=t.right,A(n,"right"),k(n,t.right),D(n,t),T(231,1),n.right.p=n,A(n.right,"p")),T(233,1),p(t,n),k(n),T(234,1),n.left=t.left,A(n,"left"),k(n,t.left),T(235,1),n.left.p=n,A(n.left,"p"),k(n.left,n),T(236,1),n.color=t.color,x(n),L())),S(s,e),b(),k(),T(238,1),k(s),r===z&&(T(239,1),u(e,s)),T(240,1),S(),k(),b()}function d(t,e){var n={id:O++,key:e};for(S(n,j.root);T(244,1),b(t),t.nil!==!0&&e!==t.key;)T(245,1),e<t.key?(T(246,1),t=t.left,S(n,t)):(T(248,1),t=t.right,S(n,t));return b(),k(t),T(251,1),S(),t}function g(t){T(255,1),B=d(j.root,t),T(256,1),S({id:O,key:B.nil!==!0?t:"X"},B)}function m(t){T(259,1);var e=d(j.root,t);T(260,1),e.nil!==!0&&(T(261,1),h(e)),k(),b()}function y(t,e){e.key="递归",S(e,t),T(266,1),t.nil!==!0&&(T(267,1),y(t.left,e),e.key="回溯",S(e,t),T(268,1),E(t),T(269,1),y(t.right,e),e.key="回溯",S(e,t),T(270,1)),T(271,1)}function v(){var t={id:O++,key:"指针"};k(t),T(274,1),y(j.root,t),T(275,1),t.key="完成",S(t,j.root)}function w(t,e){if(void 0===t)P.ro=void 0;else{var n="left"===e?"right":"left",r=[t.id,t[n].id,t[n][n].id,t[n][e].id,t[e].id];P.ro={ids:r,type:e}}}function x(t){void 0===t?P.co={}:(P.co=P.co||{},P.co[t.id]=t.color)}function _(t){P.hls.push(t.id)}function b(t){P.hls.pop(),void 0!==t&&_(t)}function k(){0===arguments.length?P.hl=[]:P.hl=Array.prototype.map.call(arguments,function(t){return t.id})}function E(t){P.hl.push(t.id)}function A(t,e){if(void 0===t)P.ne={};else{var n=t.id+e;P.ne=P.ne||{},P.ne[n]=t[e].id,P.ne.curr=n}}function D(t,e){void 0===t?P.np={}:(P.np=P.np||{},P.np[t.id]=e.id)}function S(t,e){0===arguments.length?P.nn=void 0:P.nn={id:t.id,key:t.key,color:t.color,ref:e.id,extra:t.extra}}function L(){x(),A(),D(),S(),P.lastTree=M(j)}function R(){}function T(t,e,n){1===e&&(lastStatus=P.clone()),I.push({status:lastStatus,line:t,animation:n,id:U}),U++}function C(){T(I[I.length-1].line,1)}var B,M=r(4),I=[],U=0,P={},O=0,N=1,z=0,j={nil:s()};j.root=j.nil,P.clone=function(){return void 0===this.lastTree&&(this.lastTree=M(j)),{tree:this.lastTree,hl:M(this.hl)||[],hls:M(this.hls)||[],ne:M(this.ne)||{},np:M(this.np)||{},nn:M(this.nn),co:M(this.co)||{},ro:M(this.ro)||void 0}},P.init=function(t){t&&(j.root=j.nil),this.hl=[],this.hls=[],this.ne={},this.np={},this.nn=void 0,this.co={},this.ro=void 0},lastStatus={},e.exports={getInitialDescriptions:function(){return this.initialize(!0),c(10),c(1),c(2),c(3),c(4),c(5),this.run("insert","6")},initialize:function(t){return I=[],U=0,P.init(t),lastStatus=P.clone(),this},insert:c,inorder:v,"delete":m,search:g,check:R,run:function(t,e){return this.initialize()[t](isNaN(parseInt(e))?0:parseInt(e)),C(),{frames:I,others:{}}}}},35:function(t,e,n){var r=n(1),s=n(2);t.exports=r.createClass({displayName:"module.exports",getInitialState:function(){return{text:""}},render:function(){return r.createElement("div",{className:"list"},r.createElement("input",{onChange:this._onChange,value:this.state.text,placeholder:"整数"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"insert"),value:"插入"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"delete"),value:"删除"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"search"),value:"查找"}),r.createElement("input",{className:"cmd-button",readOnly:!0,onClick:this._onClick.bind(this,"inorder"),value:"中序遍历"}))},_onChange:function(t){this.setState({text:t.target.value})},_onClick:function(t){s.runDemo(t,this.state.text)}})},42:function(t,e,n){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include "./util.h"</span>\n\nvoid* SafeMalloc(size_t size) {\n    void* m;\n    <span class="keyword">if</span> ((m = malloc(size))) {\n        <span class="keyword">return</span> m;\n    } <span class="keyword">else</span> {\n        printf(<span class="string">"memory overflow\\n"</span>);\n        <span class="keyword">exit</span>(-<span class="number">1</span>);\n        <span class="keyword">return</span> <span class="number">0</span>;\n    }\n}\n\n<span class="comment">// FIXME</span>\n<span class="comment">//   stack,queue and other dsa should use dynamically</span>\n<span class="comment">//   allocated memory, which is what util.c provides.</span>\n<span class="comment">//   Also should be included in model-file descripttions.</span>'},43:function(t,e,n){t.exports='<span class="comment">#ifndef UTIL_H</span>\n<span class="comment">#define UTIL_H</span>\n\n<span class="comment">#include &lt;stddef.h></span>\n\nvoid * SafeMalloc(size_t size);\n\n<span class="comment">#endif</span>'},50:function(t,e,n){t.exports="CC=gcc\nCFLAGS=-c -Wall\nLDFLAGS=\nSOURCES=test.c rb-tree.c rb-tree.h ../common/util.c ../common/util.h\nOBJECTS=$(SOURCES:.c=.o)\nEXECUTABLE=a.out\n\nall: $(SOURCES) $(EXECUTABLE)\n\n$(EXECUTABLE): $(OBJECTS)\n    $(CC) $(LDFLAGS) $(OBJECTS) -o $@\n\n.cpp.o:\n    $(CC) $(CFLAGS) $&lt; -o $@\n\nclean:\n    rm -rf *.o a.out"},51:function(t,e,n){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include &lt;stdlib.h></span>\n<span class="comment">#include "./rb-tree.h"</span>\n<span class="comment">#include "../common/util.h"</span>\n\nint _RED = <span class="number">1</span>;\nint _BLACK = <span class="number">0</span>;\n\nrb_tree * RBTreeCreate() {\n    rb_tree* newTree;\n    rb_tree_node* newNode;\n    newTree = (rb_tree*) SafeMalloc(sizeof(rb_tree));\n    newTree->nil = newNode = (rb_tree_node*) SafeMalloc(sizeof(rb_tree_node));\n    newNode->left = newNode->right = newNode->p = newNode;\n    newNode->key = <span class="number">0</span>;\n    newNode->color = _BLACK;\n    newTree->root = newTree->nil;\n    <span class="keyword">return</span> newTree;\n}\n\nvoid _LeftRotate(rb_tree* t, rb_tree_node* x) {\n    rb_tree_node* y;\n    y = x->right;\n    x->right = y->left;\n    <span class="keyword">if</span> (y->left != t->nil) {\n        y->left->p = x;\n    }\n    y->p = x->p;\n    <span class="keyword">if</span> (x->p == t->nil) {\n        t->root = y;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (x == x->p->left) {\n        x->p->left = y;\n    } <span class="keyword">else</span> {\n        x->p->right = y;\n    }\n    y->left = x;\n    x->p = y;\n}\n\nvoid _RightRotate(rb_tree* t, rb_tree_node* y) {\n    rb_tree_node* x;\n    x = y->left;\n    y->left = x->right;\n    <span class="keyword">if</span> (x->right != t->nil) {\n        x->right->p = y;\n    }\n    x->p = y->p;\n    <span class="keyword">if</span> (y->p == t->nil) {\n        t->root = x;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (y == y->p->right) {\n        y->p->right = x;\n    } <span class="keyword">else</span> {\n        y->p->left = x;\n    }\n    x->right = y;\n    y->p = x;\n}\n\nvoid _InsertFixUp(rb_tree* t, rb_tree_node *z) {\n    rb_tree_node *y;\n    <span class="keyword">while</span> (z->p->color == _RED) {\n        <span class="keyword">if</span> (z->p == z->p->p->left) {\n            y = z->p->p->right;\n            <span class="keyword">if</span> (y->color == _RED) {\n                z->p->color = _BLACK;\n                y->color = _BLACK;\n                z->p->p->color = _RED;\n                z = z->p->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (z == z->p->right) {\n                    z= z->p;\n                    _LeftRotate(t, z);\n                }\n                z->p->color = _BLACK;\n                z->p->p->color = _RED;\n                _RightRotate(t, z->p->p);\n            }\n        } <span class="keyword">else</span> {\n            y = z->p->p->left;\n            <span class="keyword">if</span> (y->color == _RED) {\n                z->p->color = _BLACK;\n                y->color = _BLACK;\n                z->p->p->color = _RED;\n                z = z->p->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (z == z->p->left) {\n                    z= z->p;\n                    _RightRotate(t, z);\n                }\n                z->p->color = _BLACK;\n                z->p->p->color = _RED;\n                _LeftRotate(t, z->p->p);\n            }\n        }\n    }\n    t->root->color = _BLACK;\n}\n\nvoid _Insert(rb_tree* t, rb_tree_node* z) {\n    rb_tree_node* x;\n    rb_tree_node* y;\n    y = t->nil;\n    x = t->root;\n    <span class="keyword">while</span> (x != t->nil) {\n        y = x;\n        <span class="keyword">if</span> (z->key &lt; x->key) {\n            x = x->left;\n        } <span class="keyword">else</span> {\n            x = x->right;\n        }\n    }\n    z->p = y;\n    <span class="keyword">if</span> (y == t->nil) {\n        t->root = z;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (z->key &lt; y->key) {\n        y->left = z;\n    } <span class="keyword">else</span> {\n        y->right = z;\n    }\n    z->left = t->nil;\n    z->right = t->nil;\n    z->color = _RED;\n    _InsertFixUp(t, z);\n}\n\nvoid RBTreeInsert(rb_tree* t, int key) {\n    rb_tree_node* newNode;\n    newNode = (rb_tree_node*) SafeMalloc(sizeof(rb_tree_node));\n    newNode->key = key;\n    _Insert(t, newNode);\n}\n\nvoid _Transplant(rb_tree* t, rb_tree_node* u, rb_tree_node* v) {\n    <span class="keyword">if</span> (u->p == t->nil) {\n        t->root = v;\n    } <span class="keyword">else</span> <span class="keyword">if</span> (u == u->p->left) {\n        u->p->left = v;\n    } <span class="keyword">else</span> {\n        u->p->right = v;\n    }\n    v->p = u->p;\n}\n\nvoid _DeleteFixUp(rb_tree* t, rb_tree_node* x) {\n    int tmp;\n    rb_tree_node* w;\n    <span class="keyword">while</span> (x != t->root &amp;&amp; x->color == _BLACK) {\n        <span class="keyword">if</span> (x == x->p->left) {\n            w = x->p->right;\n            <span class="keyword">if</span> (w->color == _RED) {\n                w->color = _BLACK;\n                x->p->color = _RED;\n                _LeftRotate(t, x->p);\n                w = x->p->right;\n            }\n            <span class="keyword">if</span> (w->left->color == _BLACK &amp;&amp; w->right->color == _BLACK) {\n                w->color = _RED;\n                x = x->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (w->right->color == _BLACK) {\n                    w->left->color = _BLACK;\n                    w->color = _RED;\n                    _RightRotate(t, w);\n                    w = x->p->right;\n                }\n                tmp = x->p->color;\n                x->p->color = _BLACK;\n                w->color = tmp;\n                w->right->color = _BLACK;\n                _LeftRotate(t, x->p);\n                x = t->root;\n            }\n        } <span class="keyword">else</span> {\n            w = x->p->left;\n            <span class="keyword">if</span> (w->color == _RED) {\n                w->color = _BLACK;\n                x->p->color = _RED;\n                _RightRotate(t, x->p);\n                w = x->p->left;\n            }\n            <span class="keyword">if</span> (w->right->color == _BLACK &amp;&amp; w->left->color == _BLACK) {\n                w->color = _RED;\n                x = x->p;\n            } <span class="keyword">else</span> {\n                <span class="keyword">if</span> (w->left->color == _BLACK) {\n                    w->right->color = _BLACK;\n                    w->color = _RED;\n                    _LeftRotate(t,w);\n                    w = x->p->left;\n                }\n                tmp = x->p->color;\n                x->p->color = _BLACK;\n                w->color = tmp;\n                w->left->color = _BLACK;\n                _RightRotate(t, x->p);\n                x = t->root;\n            }\n        }\n    }\n    x->color =_BLACK;\n}\n\nrb_tree_node* _Minimum(rb_tree* t, rb_tree_node *z) {\n    <span class="keyword">while</span> (z->left != t->nil) {\n        z = z->left;\n    }\n    <span class="keyword">return</span> z;\n}\n\nvoid _Delete(rb_tree* t, rb_tree_node *z) {\n    rb_tree_node* x;\n    rb_tree_node* y;\n    int y_original_color;\n    y = z;\n    y_original_color = y->color;\n    <span class="keyword">if</span> (z->left == t->nil) {\n        x = z->right;\n        _Transplant(t, z, z->right);\n    } <span class="keyword">else</span> <span class="keyword">if</span> (z->right == t->nil) {\n        x = z->left;\n        _Transplant(t, z, z->left);\n    } <span class="keyword">else</span> {\n        y = _Minimum(t, z->right);\n        y_original_color = y->color;\n        x = y->right;\n        <span class="keyword">if</span> (y->p == z) {\n            x->p = y;\n        } <span class="keyword">else</span> {\n            _Transplant(t, y, y->right);\n            y->right = z->right;\n            y->right->p = y;\n        }\n        _Transplant(t, z, y);\n        y->left = z->left;\n        y->left->p = y;\n        y->color = z->color;\n    }\n    <span class="keyword">if</span> (y_original_color == _BLACK) {\n        _DeleteFixUp(t, x);\n    }\n}\n\nrb_tree_node* _Search(rb_tree* t, rb_tree_node* x, int k) {\n    <span class="keyword">while</span> (x != t->nil &amp;&amp; k != x->key) {\n        <span class="keyword">if</span> (k &lt; x->key) {\n            x = x->left;\n        } <span class="keyword">else</span> {\n            x = x->right;\n        }\n    }\n    <span class="keyword">return</span> x;\n}\n\nrb_tree_node* RBTreeSearch(rb_tree* t, int k) {\n    <span class="keyword">return</span> _Search(t, t->root, k);\n}\n\nvoid RBTreeDelete(rb_tree* t, int key) {\n    rb_tree_node* newNode = _Search(t, t->root, key);\n    <span class="keyword">if</span> (newNode != t->nil) {\n        _Delete(t, newNode);\n    }\n}\n\nvoid _InorderWalk(rb_tree* t, rb_tree_node* x) {\n    <span class="keyword">if</span> (x != t->nil) {\n        _InorderWalk(t, x->left);\n        printf(<span class="string">"%d "</span>, x->key);\n        _InorderWalk(t, x->right);\n    }\n}\n\nvoid RBTreeInorderWalk(rb_tree* t) {\n    _InorderWalk(t, t->root);\n    printf(<span class="string">"\\n"</span>);\n}\n\nvoid _Destroy(rb_tree* t, rb_tree_node* x) {\n    <span class="keyword">if</span> (x != t->nil) {\n        _Destroy(t, x->left);\n        _Destroy(t, x->right);\n        free(x);\n    }\n}\n\nvoid RBTreeDestroy(rb_tree* t) {\n    _Destroy(t, t->root);\n    free(t->nil);\n}'},52:function(t,e,n){t.exports='<span class="comment">#ifndef RB_TREE_H</span>\n<span class="comment">#define RB_TREE_H</span>\n\ntypedef struct rb_tree_node {\n    int key;\n    int color;\n    struct rb_tree_node* left;\n    struct rb_tree_node* right;\n    struct rb_tree_node* p;\n} rb_tree_node;\n\ntypedef struct rb_tree {\n    rb_tree_node* root;\n    rb_tree_node* nil;\n} rb_tree;\n\nrb_tree* RBTreeCreate();\nvoid RBTreeInsert(rb_tree*, int);\nvoid RBTreeDelete(rb_tree*, int);\nvoid RBTreeDestroy(rb_tree*);\nrb_tree_node* RBTreeSearch(rb_tree*, int);\nvoid RBTreeInorderWalk(rb_tree*);\n\n<span class="comment">#endif</span>'},53:function(t,e,n){t.exports='<span class="comment">#include &lt;stdio.h></span>\n<span class="comment">#include "./rb-tree.h"</span>\n\nint main(int argc, char <span class="keyword">const</span> *argv[]) {\n  int i;\n  int k;\n  rb_tree* rbTree = RBTreeCreate();\n  <span class="keyword">while</span> (scanf(<span class="string">"%d"</span>, &amp;i) != EOF) {\n    scanf(<span class="string">"%d"</span>, &amp;k);\n    <span class="keyword">switch</span> (i) {\n      <span class="keyword">case</span> <span class="number">0</span>:\n        RBTreeInsert(rbTree, k);\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">1</span>:\n        RBTreeDelete(rbTree, k);\n        <span class="keyword">break</span>;\n      <span class="keyword">case</span> <span class="number">2</span>:\n        RBTreeSearch(rbTree, k);\n        <span class="keyword">break</span>;\n    }\n    RBTreeInorderWalk(rbTree);\n  }\n  RBTreeDestroy(rbTree);\n  <span class="keyword">return</span> <span class="number">0</span>;\n};'},69:function(t,e,n){function r(){return D.hls.length+1+(D.hl.length?1:0)}function s(t){if(void 0===t.color)return"deepskyblue";var e=M[t.id]+1,n=D.hls.length+1+(D.hl.length?1:0);return n>e&&(e=1),$[t.color](e/n)}function i(t){var e=Math.min(M[t.from],M[t.to])+1,n=D.hls.length+1+(D.hl.length?1:0);return n>e&&(e=1),L.interpolate(0,1)(e/n)}function a(t,e,n){T[t.id]=T[t.id]||{},T[t.id].curr=e}function o(t,e){var n=t.id,r=t[e]?t[e].id:void 0,s=n+e;return void 0!==D.ne[s]&&(r=D.ne[s]),{from:t.id,to:r,type:e,id:s,unconditional:t.nil}}function l(t){I.push(t.id);var e=t.color;return void 0!==D.co[t.id]&&(e=D.co[t.id]),{extra:t.extra,color:e,v:t.key,id:t.id}}function c(t,e){e=e||t.p.id,void 0===T[t.id].prev&&(void 0===T[e]?T[t.id].prev=T[t.id].curr:T[t.id].prev=T[e].prev||T[t.id].curr),(t.p||D.ne[t.id+"p"])&&B.push(o(t,"p")),t.id===D.hl&&(hide=!1),C.push(l(t)),t.left&&(B.push(o(t,"left")),c(t.left,t.id)),t.right&&(B.push(o(t,"right")),c(t.right,t.id)),t.id===D.hl&&(hide=!0)}function p(){C=[],B=[],I=[],M={},M[D.tree.nil.id]=-1===D.hl.indexOf(D.tree.nil.id)?0:r()-1,u(D.tree.root,0);for(var t in T)T[t].prev=T[t].curr;a(D.tree.nil,{x:0,y:1.5*-P}),T[D.tree.nil.id].prev=T[D.tree.nil.id].curr,D.tree.root.nil!==!0&&(a(D.tree.root,{x:0,y:0}),f(D.tree.root.left,0,0,-U,N),f(D.tree.root.right,0,0,U,N)),C.push(l(D.tree.nil)),D.tree.root.nil!==!0&&c(D.tree.root);var e={};for(var n in D.np)e[n]=T[D.np[n]].curr.y;for(var n in D.np)T[n].curr.y=e[n];D.nn&&(C.push(l(D.nn)),a(D.nn,{x:T[D.nn.ref].curr.x,y:T[D.nn.ref].curr.y-(D.nn.extra?P/3:P/2)},1),void 0===T[D.nn.id].prev&&(T[D.nn.id].prev=T[D.nn.ref].curr),void 0!==D.ne[D.nn.id+"p"]&&B.push(o(D.nn,"p")),-1!==D.hl.indexOf(D.nn.id)?M[D.nn.id]=r()-1:M[D.nn.id]=M[D.nn.ref]);for(var n=0;n<B.length;++n){var s=B[n].from,i=B[n].to,p=T[i].curr.x-T[s].curr.x,h=T[i].curr.y-T[s].curr.y,d=Math.sqrt(p*p+h*h),g=j*z;O+g>d?(B[n].dx=0,B[n].dy=0):(B[n].dx=p*(O+g)/d,B[n].dy=h*(O+g)/d)}Object.keys(T).filter(function(t){return-1===I.indexOf(+t)}).forEach(function(t){delete T[t]})}function u(t,e){-1!==D.hls.indexOf(t.id)&&(e=D.hls.lastIndexOf(t.id)+1),-1!==D.hl.indexOf(t.id)?M[t.id]=D.hls.length+1:M[t.id]=e,t.left&&u(t.left,e),t.right&&u(t.right,e)}function f(t,e,n,r,s){if(void 0!==t){var i,o;0>r?(i="right",o="left"):(i="left",o="right");var l=P;return t.nil||void 0===t[i]?a(t,{x:n+r,y:e+l}):a(t,{x:f(t[i],e+l,n,r,t.color)+r,y:e+l}),t.nil||void 0===t[o]?T[t.id].curr.x:f(t[o],e+l,T[t.id].curr.x,r,t.color)}}function h(){E.selectAll("circle.node").data(C,function(t){return t.id}).enter().append("circle").attr("class","node").attr("cx",function(t){return T[t.id].prev.x}).attr("cy",function(t){return T[t.id].prev.y}).attr("r",function(t){return t.extra?O/2:O}).style("fill",function(t){return t.color?"red":"black"}),E.selectAll("circle.node").data(C,function(t){return t.id}).transition().duration(S).attr("cx",function(t){return T[t.id].curr.x}).attr("cy",function(t){return T[t.id].curr.y}).attr("r",function(t){return t.extra?O/2:O}).style("fill",s),E.selectAll("circle.node").data(C,function(t){return t.id}).exit().transition().duration(S).style("opacity",0).remove()}function d(){A.selectAll("line.edge").data(B,function(t){return t.id}).enter().append("line").attr("class","edge").attr("stroke-width",z).attr("x1",function(t){return T[t.from].prev.x+t.dx}).attr("y1",function(t){return T[t.from].prev.y+t.dy}).attr("x2",function(t){return T[t.from].prev.x+t.dx}).attr("y2",function(t){return T[t.from].prev.y+t.dy}).classed("parent",function(t){return"p"===t.type?!0:!1}).classed("child",function(t){return"p"!==t.type?!0:!1}),A.selectAll("line.edge").data(B,function(t){return t.id}).style("marker-end",function(t){return t.id===D.ne.curr?"url(#"+t.type+"-end)":null}).transition().duration(S).attr("x1",function(t){return T[t.from].curr.x+t.dx}).attr("y1",function(t){return T[t.from].curr.y+t.dy}).attr("x2",function(t){return T[t.to].curr.x-t.dx}).attr("y2",function(t){return T[t.to].curr.y-t.dy}).style("opacity",i).style("stroke-dasharray",function(t){return t.unconditional?"5 5":null}),A.selectAll("line.edge").data(B,function(t){return t.id}).exit().transition().duration(S).style("opacity",0).remove()}function g(){b.selectAll("text.node").data(C,function(t){return t.id}).enter().append("text").attr("class","node").attr("x",function(t){return T[t.id].prev.x}).attr("y",function(t){return T[t.id].prev.y}).attr("dy",5),b.selectAll("text.node").data(C,function(t){return t.id}).transition().duration(S).attr("x",function(t){return T[t.id].curr.x}).attr("y",function(t){return T[t.id].curr.y}).style("fill",s).text(function(t){return t.v}),b.selectAll("text.node").data(C,function(t){return t.id}).exit().transition().duration(S).style("opacity",0).remove()}function m(){var t=D.ro?[D.ro.ids]:[];k.selectAll("path.rot").data(t).enter().append("path").attr("class","rot").attr("d",function(t){return this.__prev__=t,"M"+t.map(function(t){return[T[t].curr.x,T[t].curr.y]}).join("L")}).style("fill-opacity",.05).style("opacity",0).transition().duration(S).style("opacity",1),k.selectAll("path.rot").data(t).attr("d",function(t){return this.__prev__=t,"M"+t.map(function(t){return[T[t].curr.x,T[t].curr.y]}).join("L")}),k.selectAll("path.rot").data(t).exit().transition().duration(S).attr("d",function(){for(var t=this.__prev__,e=0;e<t.length;++e)if(void 0===T[t[e]])return"";return"M"+t.map(function(t){return[T[t].curr.x,T[t].curr.y]}).join("L")}).style("opacity",0).remove()}function y(){function t(t){return function(e){return e.reduce(function(e,n){return e+T[n].curr[t]},0)/e.length}}var e=D.ro?[D.ro.ids]:[];b.selectAll("text.rot").data(e).enter().append("text").attr("class","rot").attr("x",t("x")).attr("y",t("y")).attr("dy",5).text(function(){return"left"===D.ro.type?"左旋":"右旋"}).style("fill-opacity",.5),b.selectAll("text.rot").data(e).attr("x",t("x")).attr("y",t("y")).text(function(){return"left"===D.ro.type?"左旋":"右旋"}),b.selectAll("text.rot").data(e).exit().transition().duration(S).style("opacity",0).remove()}function v(t,e){D=t,S=e}function w(t,e){v(t,e),p(),d(),h(),g(),m(),y()}function x(){var t=this,e=L.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){t.svg.attr("transform",R().translate(L.event.translate).scale(L.event.scale))});this.svg=L.select(this.refs.svg.getDOMNode()).append("svg").call(e).append("g"),this.svg.append("defs").selectAll("marker").data(["left","right","p"]).enter().append("marker").attr("id",function(t){return t+"-end"}).attr("viewBox","0 -5 10 10").attr("markerWidth",j).attr("markerHeight",j).attr("orient","auto").append("path").attr("d","M0,-5L10,0,L0,5"),this.g=this.svg.append("g").attr("transform",R().translate(100,100).scale(1)),this.ghigh=this.g.append("g").attr("class","high"),this.gbase=this.g.append("g").attr("class","base"),this.gtext=this.g.append("g").attr("class","text"),_=this.gbase,A=this.gbase.append("g").attr("class","edges"),E=this.gbase.append("g").attr("class","nodes"),b=this.gtext,k=this.ghigh}var _,b,k,E,A,D,S,L=n(3),R=n(5),T={},C=[],B=[],M={},I=[],U=35,P=70,O=15,N=0,z=3,j=2,$=[L.interpolateRgb("white","black"),L.interpolateRgb("white","red")];t.exports={init:x,render:w}}});