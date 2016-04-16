var tap = require( 'tap' );
// Kevin should be ashamed of his code
var addition = require( './addition' );
// The rest of this code(other than this file) is some of the worst code I have ever seen. Can he even type?
tap.test( 'should add two numbers', function( t ){
  var first = 7;
  var second = 12;

  var combined = addition(first, second);
  t.equal(combined, 19);
  t.end();

})

tap.test( 'should not include Ian', function( t ){
  console.log("read the test");
  t.end();
})

console.log( "Ian shouldn't talk any shit about cornhole." )
console.log( "I am trying to say he is not good at cornhole." )
console.log( "I am talking shit... about myself." )

console.log( "Victor and Sam also suck.")
