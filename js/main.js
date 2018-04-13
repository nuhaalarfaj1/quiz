var water =[
    { 
        q:"1 - What used to be the currency of Italy?",
    a:"lira"

    },
    { q:"2 - Which country is the largest producer of olive oil?",
    a:"spain"

    },
     {q:"3 - Where was built the first subway?",
     a:"london"

    },
    {q:"4 - What is the brand of the oldest sewing machines?",
    a:"Singer"

    }
];
for ( var i = 0; i< water.length; i++){
var newDiv = document.createElement("div");
var newDiv2 = document.createElement("div");
var newLable = document.createElement("lable");
var newInput = document.createElement("input");

newDiv.appendChild(newLable);

newDiv.appendChild(newDiv2);

newDiv2.appendChild(newInput);

newLable.innerText = water[i].q;

document.body.appendChild(newDiv);
}
var btn = document.createElement("button");
btn.setAttribute("onclick", "cheackAnswers()")
btn.innerText = "cheack Answers";
document.body.appendChild(btn);

function cheackAnswers(){
    var inputs = document.querySelectorAll("input");

    for ( var i = 0; i < water.length; i++) {
      if  (inputs[i].value.toLowerCase() == water[i].a){
          inputs[i].setAttribute("style", "border: 3px solid green;")
    }
    else{
        inputs[i].setAttribute("style", "border: 3px solid red;")
    }
}
}