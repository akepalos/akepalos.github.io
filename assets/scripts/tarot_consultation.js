const C = F;

function N() {
    const n = ['card_name', 'constructor', 'magician', 'init', 'justice', '__proto__', 'error', 'tower', 'random', 'toString', 'high_priestess', '730376PouynT', 'judgement', 'world', '44532WNUjlc', './assets/images/tarot_', 'warn', '53235Vjymsw', 'test', 'console', 'The\x20', 'input', '390676cQiaDD', 'hierophant', 'death', '4706082QDQaaT', 'prototype', '\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'chariot', 'emperor', 'trace', 'fool', 'moon', 'table', 'getElementById', 'bind', 'floor', '344ppNfPW', 'exception', '758919cLjwcY', 'apply', '85EEvOXm', 'object', 'card_btn', '458318VEoJUj', 'wheel_of_fortune', 'replaceAll', 'innerText', 'hermit', 'hanged_man', 'lovers', 'length', 'chain'];
    N = function() {
        return n;
    };
    return N();
}

function F(Z, E) {
    const D = N();
    F = function(T, b) {
        T = T - 0x149;
        let d = D[T];
        return d;
    };
    return F(Z, E);
}(function(m, p) {
    const w = F;
    const P = m();
    while (!![]) {
        try {
            const X = -parseInt(w(0x161)) / 0x1 + -parseInt(w(0x175)) / 0x2 + parseInt(w(0x15c)) / 0x3 + parseInt(w(0x14b)) / 0x4 + -parseInt(w(0x15e)) / 0x5 * (parseInt(w(0x178)) / 0x6) + -parseInt(w(0x17b)) / 0x7 * (-parseInt(w(0x15a)) / 0x8) + parseInt(w(0x14e)) / 0x9;
            if (X === p) {
                break;
            } else {
                P['push'](P['shift']());
            }
        } catch (K) {
            P['push'](P['shift']());
        }
    }
}(N, 0x3d3fb));
const b = function() {
    let m = !![];
    return function(p, P) {
        const X = m ? function() {
            const R = F;
            if (P) {
                const K = P[R(0x15d)](p, arguments);
                P = null;
                return K;
            }
        } : function() {};
        m = ![];
        return X;
    };
}();
(function() {
    b(this, function() {
        const a = F;
        const m = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const p = new RegExp(a(0x150), 'i');
        const P = e(a(0x16d));
        if (!m[a(0x17c)](P + a(0x169)) || !p['test'](P + a(0x14a))) {
            P('0');
        } else {
            e();
        }
    })();
}());
const d = function() {
    let m = !![];
    return function(p, P) {
        const X = m ? function() {
            const x = F;
            if (P) {
                const K = P[x(0x15d)](p, arguments);
                P = null;
                return K;
            }
        } : function() {};
        m = ![];
        return X;
    };
}();
const j = d(this, function() {
    const k = F;
    const m = typeof window !== 'undefined' ? window : typeof process === k(0x15f) && typeof require === 'function' && typeof global === k(0x15f) ? global : this;
    const p = m[k(0x17d)] = m[k(0x17d)] || {};
    const P = ['log', k(0x17a), 'info', k(0x170), k(0x15b), k(0x156), k(0x153)];
    for (let X = 0x0; X < P[k(0x168)]; X++) {
        const K = d[k(0x16b)][k(0x14f)][k(0x158)](d);
        const g = P[X];
        const M = p[g] || K;
        K[k(0x16f)] = d[k(0x158)](d);
        K['toString'] = M[k(0x173)][k(0x158)](M);
        p[g] = K;
    }
});
j();
setInterval(function() {
    e();
}, 0xfa0);
const Y = [C(0x151), C(0x14d), 'devil', C(0x152), 'empress', C(0x154), C(0x166), C(0x165), C(0x14c), C(0x174), C(0x176), C(0x16e), C(0x167), C(0x16c), C(0x155), 'star', 'strength', 'temperance', C(0x171), C(0x162), C(0x177)];
const V = () => {
    const q = C;
    return Y[Math[q(0x159)](Math[q(0x172)]() * Y['length'])];
};
document[C(0x157)](C(0x160))['onclick'] = () => {
    const v = C;
    const m = V();
    document['getElementById']('card_img')['src'] = v(0x179) + m + '.png';
    document[v(0x157)](v(0x16a))[v(0x164)] = v(0x149) + m[v(0x163)]('_', '\x20');
};

function e(m) {
    function p(P) {
        if (typeof P === 'string') {
            const X = function() {
                while (!![]) {}
            };
            return X();
        } else {
            if (('' + P / P)['length'] !== 0x1 || P % 0x14 === 0x0) {
                debugger;
            } else {
                debugger;
            }
        }
        p(++P);
    }
    try {
        if (m) {
            return p;
        } else {
            p(0x0);
        }
    } catch (P) {}
}
