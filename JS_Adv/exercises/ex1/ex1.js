(function(){
  A();

  function C() {
    console.log("OOPS!");
  }

  function E(f) {
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
    E(F);
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

  var rest = "KLMNOPQRSTUVWXYZ".split(""), obj = {};
  for (var i=0; i<rest.length; i++) {
    (function(i){
      // define the current function
      obj[rest[i]] = function() {
        console.log(rest[i]);
        if (i < (rest.length-1)) {
          obj[rest[i + 1]]();
        }
      };
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
})();