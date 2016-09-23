A();

function C() {
  console.log("OOPS!");
}

function E(f) {
  f = F;
  console.log("E");
  f();
}

function A() {
  console.log("A");
  B();
}

var C;

function G() {
  console.log("G");
  H();

  function H() {
    console.log("H");
    I();
  }
}

var D = d;
function d() {
  console.log("D");
  E();
}

function I() {
  console.log("I");
  J();
}

function B() {
  console.log("B");
  C();
};

function F() {
  console.log("F");
  G();
}

var rest = "KLMNOPQRSTUVWXYZ".split("");
for (var i=0; i<rest.length; i++) {
  (function(i){
    // define the current function
    window[rest[i]] = function() {
      console.log(rest[i]);
      if (i < (rest.length-1)) {
        // TODO: call the next function
      }
    };
    window[rest[i]]();
  })(i);
}

function J(J) {
  J = function() {
    console.log("J");
  };
  J();
};

function C(D) {
  D = d;
  console.log("C");
  D();
}
