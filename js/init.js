window.onload = function() {

  // set dom elements
  var createCookie = document.getElementById( 'createCookie' ),
      createLocal  = document.getElementById( 'createLocal' ),
      createBoth   = document.getElementById( 'createBoth' ),
      readCookie   = document.getElementById( 'readCookie' ),
      readLocal    = document.getElementById( 'readLocal' ),
      readBoth     = document.getElementById( 'readBoth' ),
      clearCookie  = document.getElementById( 'clearCookie' ),
      clearLocal   = document.getElementById( 'clearLocal' ),
      clearBoth    = document.getElementById( 'clearBoth' );

  // stuff we're going to store for testing
  var app = "Crumbs",
      name = "Joe Bloggs",
      age = 18,
      faveFood = "Baked Beans",
      stored = true;

  var expires = "; expires=Sun, 31 Dec 2017 12:00:00 UTC";
  var destroy = "; expires=Thu, 01 Jan 1970 00:00:00 UTC";

  // checks
  var checks = function() {
    if ( document.cookie ) {
      var cookieString = document.cookie;
      var cookieArray = cookieString.split("; ");
      for ( var i in cookieArray ) {
        var item = cookieArray[ i ];
        var itemArray = item.split( "=" );
        for ( var n in itemArray ) {
          if ( Math.abs( n % 2 ) == 1 ) {
            console.log( "Value:", value = itemArray[ n ] );
          } else {
            console.log( "Key:", value = itemArray[ n ] );
          }
        }
      }
    } else {
      console.log( "there are no cookies" );
    }
    for ( var key in localStorage ) {
      if ( localStorage[ key ] !== null ) {
        console.log( localStorage[ key ] );
      } else {
        console.log("there are no localStorage items");
      }
    }
  }();

  // functions used multiple times
  var storeCookie = function() {
    console.log("store cookie");
    document.cookie = "name=" + name + expires;
    document.cookie = "age=" + age + expires;
    document.cookie = "faveFood=" + faveFood + expires;
  };

  var storeLocal = function() {
    console.log( "store localStorage" );
    localStorage.setItem( "name", name );
    localStorage.setItem( "age", age );
    localStorage.setItem( "faveFood", faveFood );
  };

  var consoleCookie = function( event ) {
    console.log(document.cookie);
  };

  var consoleLocal = function( event ) {
    console.log(localStorage);
  };

  var unstoreCookie = function() {
    console.log( "unstore cookie" );
    document.cookie = "username=" + destroy;
    document.cookie = "age=" + destroy;
    document.cookie = "faveFood=" + destroy;
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
