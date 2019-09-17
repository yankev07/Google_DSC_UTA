(function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
  
    function displayWindowSize() {
      myWidth = window.innerWidth;
      myHeight = window.innerHeight;
      // your size calculation code here
      document.getElementById("screen").innerHTML = myWidth + "x" + myHeight;
    };
  
  
  })();
