  Shery.imageEffect(".back" , {style : 5 , 
    config:{"a":{"value":3.21,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.013756613756614},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.68,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":11.45,"range":[0,100]}} , 
      gooey: true})

      var elems = document.querySelectorAll(".elements")

      elems.forEach(function(elements){
        var headers = elements.querySelectorAll("h1");
        var index = 0 ;
        document.querySelector("#main").addEventListener("click" , function(){
          gsap.to(headers[index] , {
            top: "-=100%" ,
            ease : Expo.easeInOut,
            duration : 1,
            onComplete : function (){
              gsap.set(this._targets[0], {top: "100%"})
            }
          } );
      
          index === headers.length-1 ? (index = 0) : index++;
          gsap.to(headers[index] , {
            top: "-=100%" ,
            ease : Expo.easeInOut,
            duration : 1,
          } );
      
      })    

      })
      

