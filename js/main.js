(function(){
    //start coding here
    document.getElementById("myHeading").innerHTML="Jacob"; //changes header Test Demo Site to Jacob
    console.info(document.getElementById("myHeading").innerHTML="Jacob"); //outputs Jacob in console
    document.querySelector("nav ul li").setAttribute("class", "currentPage"); //mobile.css currentPage class changes the colour
    //document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk"); //this changes the first link "Home" tab to open Google
    //adding event
    document.getElementById("myTestEvent").addEventListener("click", function(){ //you can call and set a function within the same line
        console.info("Hi");
    });

    document.getElementById("myTestEvent").addEventListener("click", eventFunction)

    function eventFunction(){
        console.info("Test event button was clicked");  //you can also set a function amd name as above ^ and call it elsewhere like here 
    }

    document.getElementById('myTestEvent').addEventListener("click", function(ev){ //you can also pass the event object to the event handler function like below 
        console.dir(ev);
    })

    document.getElementById("myTestEvent").addEventListener("click", colourChangeFunction)

    function colourChangeFunction(){
        document.querySelector("nav ul li").setAttribute("class", "redBack");
    }

    document.querySelector(".red").addEventListener("click", function(ev){ //passing the event object to the event handler function
        document.querySelector("body").setAttribute("class", "redBack");
    })

    
    document.querySelector(".blue").addEventListener("click", function(ev){
        document.querySelector("body").setAttribute("class", "blueBack");
    })

    
    document.querySelector(".green").addEventListener("click", function(ev){
        document.querySelector("body").setAttribute("class", "greenBack");
    })

       document.querySelector(".yellow").addEventListener("click", function(ev){
        document.querySelector("body").setAttribute("class", "yellowBack");
    })

           document.querySelector(".cyan").addEventListener("click", function(ev){
        document.querySelector("body").setAttribute("class", "cyanBack");
    })

             document.querySelector(".pink").addEventListener("click", function(ev){
        document.querySelector("body").setAttribute("class", "pinkBack");
    })

    document.querySelector(".reset").addEventListener("click", function(ev){
        document.querySelector("body").removeAttribute("class"); //resets page background colour
        document.querySelector("nav ul li").removeAttribute("class");
    })


    //end code here
})()
//Immediately Invoked Function Expression (IIFE) ^ - Function that is called immediately after it is defined