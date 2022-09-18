const people = (function() {

  let name = 'Will';

  function sayName() {
    alert(name);
  }
  
  return {
    sayName
  }

})()