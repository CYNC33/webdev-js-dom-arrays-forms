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

    /*document.querySelector(".red").addEventListener("click", function(ev){ //passing the event object to the event handler function
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
        document.querySelector("nav ul li").removeAttribute("class"); //resets home nav link colour
    })*/

    //the below code is better and more optimised than the above scripts
    let colourButtons = document.querySelectorAll(".colPicker"); //creating a variable called colourButtons which is the same as the .colPicker class shown in html eg. green colPicker, blue colPicker etc
    let bodyElement = document.querySelector("Body"); //this creates a bodyElement variable which is the same as the body in html so it's within the body tags  
    console.dir(colourButtons); //this shows which elements it is finding and shows within console

    for(let i=0; i < colourButtons.length; i++){ //creating a loop which runs for the amount of times as there are colourButtons - uses indexes from 0 upwards so 7 elements will cause it to check from 0 to 6
        colourButtons[i].addEventListener("click", chgColour) //this adds an event listener to all of the colourButtons so that when they are clicked it will run the chgColour function below
    }

    function chgColour(ev){ //chgColour function passing on the ev (events) and using that within the function
        let colourPicked = ev.target.classList[0] + "Back"; //finds the classlist of "Back" which is in the mobile.css file eg. .redBack, .greenBack etc and sets the colourPicked variable to the same as the "Back" classes
        bodyElement.setAttribute("class", colourPicked) //sets the bodyElement which is the body - background as the same colour as colourPicked
    }

    let imageArray = ['images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'];

    let imageCounter = 0;

    setInterval(chgImage, 500);

    function chgImage(){
        document.
        getElementById('myImages').
        setAttribute('src', imageArray[imageCounter]);
        imageCounter++;
    }


    //end code here
})()
//Immediately Invoked Function Expression (IIFE) ^ - Function that is called immediately after it is defined