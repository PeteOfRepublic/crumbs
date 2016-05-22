window.onload = function() {
  var createCookie = document.getElementById('createCookie'),
      createLocal  = document.getElementById('createLocal'),
      createBoth   = document.getElementById('createBoth'),
      readCookie   = document.getElementById('readCookie'),
      readLocal    = document.getElementById('readLocal'),
      readBoth     = document.getElementById('readBoth'),
      clearCookie  = document.getElementById('clearCookie'),
      clearLocal   = document.getElementById('clearLocal'),
      clearBoth    = document.getElementById('clearBoth');

      // stuff we're going to store for testing
      var app = "Crumbs",
          name = "Joe Bloggs",
          age = 18,
          faveFood = "Baked Beans",
          stored = true;

      var cookie = document.cookie;
      var cookieVals = cookie.split(",");

      // functions used multiple times
      var storeCookie = function() {
        console.log("store cookie");
        // let's see if we can keep the cookie data in json format
        document.cookie = app + "= {cookie:{name:" + name + "}, {age:" + age + "}, {faveFood:" + faveFood + "}}; expires=99983090";
      };

      var storeLocal = function() {
        console.log("store localStorage");
        localStorage.setItem("name", name);
        localStorage.setItem("age", age);
        localStorage.setItem("faveFood", faveFood);
      };

      var consoleCookie = function( event ) {
        console.log(cookie);
      };

      var consoleLocal = function( event ) {
        console.log(localStorage);
      };

      var unstoreCookie = function() {
        console.log( "unstore cookie" );
        document.cookie = "expires=0";
      };

      var unstoreLocal = function() {
        console.log( "unstore localStorage" );
        localStorage.clear();
      };

      // bind the actions to the relevent clicks
      // cookie and localStorage creation events
      createCookie.onclick = function( event ) {
        event.preventDefault();
        storeCookie();
      }
      createLocal.onclick = function( event ) {
        event.preventDefault();
        storeLocal();
      }
      createBoth.onclick = function( event ) {
        event.preventDefault();
        storeCookie();
        storeLocal();
      }

      // cookie and localStorage read events
      readCookie.onclick = function( event ) {
        event.preventDefault();
        consoleCookie();
      }
      readLocal.onclick = function( event ) {
        event.preventDefault();
        consoleLocal();
      }
      readBoth.onclick = function( event ) {
        event.preventDefault();
        consoleCookie();
        consoleLocal();
      }

      // cookie and localStorage removal events
      clearCookie.onclick = function( event ) {
        event.preventDefault();
        unstoreCookie();
      }
      clearLocal.onclick = function( event ) {
        event.preventDefault();
        unstoreLocal();
      }
      clearBoth.onclick = function( event ) {
        event.preventDefault();
        unstoreCookie();
        unstoreLocal();
      }
}
