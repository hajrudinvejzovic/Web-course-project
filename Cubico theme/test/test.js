

const Red = document.getElementById("buttonRed");

const Blue =document.getElementById("buttonBlue");

const Yellow = document.getElementById("buttonYellow");

const text = document.getElementById("text");

const hellobtn = document.getElementById("hellobtn");

const hellotxt = document.getElementById("hellotxt");


hellobtn.addEventListener("click", function(){

    hellotxt.textContent = "clicked!";
   

});

alertmessage = () => {
  //  alert("pop-up");
};


Red.addEventListener("click", function(){
    
    text.classList.toggle("red-text");

});

Blue.addEventListener("click", function(){
  
    text.classList.toggle("blue-text");

});

Yellow.addEventListener("click", function(){

    text.classList.toggle("yellow-text");
});




/*
  <body>
   <button id="myButton" onclick="sayHelloAlso()">Click me!</button>
   <div id="output"></div>


   <script>
     // Get a reference to the button element
     var button = document.getElementById("myButton");


     // Add an event listener to the button
     button.addEventListener("click", function () {
       // This function will be executed when the button is clicked
       var outputElement = document.getElementById("output");
       outputElement.textContent = "Button clicked!";
     });


     sayHelloAlso = () => {
       alert("Hello, world!");
     };
   </script>
 </body>
</html>

*/ 


