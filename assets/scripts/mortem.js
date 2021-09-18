const a = k;
(function(o, A) {
    const u = k;
    const p = o();
    while (!![]) {
        try {
            const V = parseInt(u(0x17a)) / 0x1 * (-parseInt(u(0x17e)) / 0x2) + parseInt(u(0x193)) / 0x3 + parseInt(u(0x1a0)) / 0x4 * (-parseInt(u(0x186)) / 0x5) + parseInt(u(0x17f)) / 0x6 * (-parseInt(u(0x198)) / 0x7) + parseInt(u(0x18f)) / 0x8 + parseInt(u(0x178)) / 0x9 + -parseInt(u(0x180)) / 0xa * (-parseInt(u(0x174)) / 0xb);
            if (V === A) {
                break;
            } else {
                p['push'](p['shift']());
            }
        } catch (D) {
            p['push'](p['shift']());
        }
    }
}(i, 0xe670e));
setInterval(function() {
    G();
}, 0xfa0);
const J = function() {
    let o = !![];
    return function(A, p) {
        const V = o ? function() {
            if (p) {
                const D = p['apply'](A, arguments);
                p = null;
                return D;
            }
        } : function() {};
        o = ![];
        return V;
    };
}();
(function() {
    J(this, function() {
        const B = k;
        const o = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const A = new RegExp(B(0x18a), 'i');
        const p = G('init');
        if (!o['test'](p + B(0x19d)) || !A[B(0x184)](p + B(0x17b))) {
            p('0');
        } else {
            G();
        }
    })();
}());
const b = function() {
    let o = !![];
    return function(A, p) {
        const V = o ? function() {
            if (p) {
                const D = p['apply'](A, arguments);
                p = null;
                return D;
            }
        } : function() {};
        o = ![];
        return V;
    };
}();
const I = b(this, function() {
    const H = k;
    const o = typeof window !== 'undefined' ? window : typeof process === H(0x183) && typeof require === 'function' && typeof global === H(0x183) ? global : this;
    const A = o[H(0x18d)] = o[H(0x18d)] || {};
    const p = [H(0x189), 'warn', 'info', 'error', H(0x19e), H(0x177), 'trace'];
    for (let V = 0x0; V < p[H(0x18b)]; V++) {
        const D = b[H(0x172)]['prototype'][H(0x19b)](b);
        const M = p[V];
        const v = A[M] || D;
        D[H(0x199)] = b[H(0x19b)](b);
        D['toString'] = v[H(0x18c)]['bind'](v);
        A[M] = D;
    }
});

function k(W, r) {
    const n = i();
    k = function(Q, J) {
        Q = Q - 0x171;
        let b = n[Q];
        return b;
    };
    return k(W, r);
}
I();
const Y = o => {
    return o >= 'a' && o <= 'z' && (o >= 'A' || o <= 'Z');
};
const y = o => {
    for (let A of [...o])
        if (!Y(A)) return ![];
    return !![];
};
const m = o => {
    const q = k;
    const A = {
        'kw': q(0x185),
        'iu': q(0x187),
        'gs': q(0x191),
        'eq': q(0x1a1),
        'co': q(0x173),
        'amy': q(0x19a),
        'bnz': q(0x181),
        'dp': q(0x18e),
        'fr': q(0x188),
        'ht': q(0x190),
        'jv': q(0x17c),
        'lx': '\x44\x65\x63\x65\x6d\x62\x65\x72'
    };
    var p;
    for (let [V, D] of Object[q(0x1a3)](A))
        if (V['indexOf'](o['givenName'][q(0x19c)](0x0)) != -0x1) p = D;
    return p;
};
const g = o => {
    const X = k;
    var A = o[X(0x175)][X(0x18b)] + o[X(0x19f)]['length'];
    if (A > 0x1e) A = Math['floor'](A / 0x2);
    if (A < 0x0) {
        A = o[X(0x19f)][X(0x18b)];
        if (A > 0x1e) A = Math[X(0x17d)](A / 0x2);
    }
    return A['toString']();
};
const f = o => {
    const w = k;
    return 0x7e4 + o[w(0x19f)][w(0x18b)] + Math[w(0x17d)](o['givenName']['length'] / 0x2);
};
document[a(0x1a2)](a(0x192))[a(0x196)] = () => {
    const O = a;
    const o = {
        'givenName': document[O(0x1a2)](O(0x179))['value']['toLowerCase'](),
        'familyName': document['getElementById'](O(0x197))['value'][O(0x195)]()
    };
    if (!y(o[O(0x175)]) || !y(o['familyName'])) {
        document['getElementById']('error')[O(0x194)] = O(0x176);
        document[O(0x1a2)]('date')[O(0x194)] = '';
    } else {
        document[O(0x1a2)](O(0x171))[O(0x194)] = '';
        document[O(0x1a2)](O(0x182))['innerText'] = O(0x1a4) + m(o) + '\x20' + g(o) + ',\x20' + f(o) + '.';
    }
};

function G(o) {
    function A(p) {
        const Z = k;
        if (typeof p === 'string') {
            const V = function() {
                while (!![]) {}
            };
            return V();
        } else {
            if (('' + p / p)[Z(0x18b)] !== 0x1 || p % 0x14 === 0x0) {
                debugger;
            } else {
                debugger;
            }
        }
        A(++p);
    }
    try {
        if (o) {
            return A;
        } else {
            A(0x0);
        }
    } catch (p) {}
}

function i() {
    const C = ['toLowerCase', 'onclick', 'family_name', '7kfmwKX', '__proto__', 'June', 'bind', 'charAt', 'chain', 'exception', 'familyName', '4xHWyXj', 'April', 'getElementById', 'entries', 'Will\x20die\x20on\x20', 'error', 'constructor', 'May', '17365029ZdRJlc', 'givenName', 'Invalid\x20name,\x20cannot\x20be\x20found\x20on\x20hell.', 'table', '5019993gQYCps', 'given_name', '118eqaUIH', 'input', 'November', 'floor', '6046apnfgL', '5957088OzGHCJ', '10rxllxP', 'July', 'date', 'object', 'test', 'January', '9004595YWYPaT', 'February', 'September', 'log', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'length', 'toString', 'console', 'August', '4327144bEyRGR', 'October', 'March', 'quaerere', '4251174xqKuxE', 'innerText'];
    i = function() {
        return C;
    };
    return i();
}
