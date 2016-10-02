(function() {
  function Foo(who) {
    this.me = who;
  }

  Foo.prototype.identify = function() {
    return "I am " + this.me;
  };

  var a1 = new Foo('a1');
  var a2 = new Foo('a2');

  a2.speak = function() {
    alert('Hello, ' + this.identify() + '.');
  };

  function testConcept(test) {
    this.testConcept = test;
    console.log('we in testConcept');
  }

  function testConcept2(test2) {
    this.conceptTest = test2;
    console.log('we in conceptTest');
  }

  var concept1 = new testConcept('fire');
  var concept2 = new testConcept('liar');
  var concept3 = new testConcept('father');

  console.log(concept1.testConcept);
  console.log(concept2.testConcept);
  console.log(concept3.testConcept);

  var changeOfConcept(concept1)


  var test1 = a1.__proto__ === Object.getPrototypeOf(a1);
  console.log('test1', test1);
  var test2 = a2.constructor === Foo;
  console.log('test2', test2);
  var test3 = a1.__proto__ == a2.__proto__;
  console.log('test3', test3);
  var test4 = a2.__proto__ == a2.constructor.prototype;
  console.log('test4', test4);
})();

