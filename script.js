var userinput=document.getElementById("userinput");

var chatbox=document.getElementById("chatbox");



// var name =prompt("Your Name");


// document.getElementById("aiwel").innerHTML+=", "+ name +". How can I help you.";




userinput.addEventListener("keydown",(e)=>{

if(e.key ==="Enter"){
	Send();
}

})


var cmd=["about you","open","physical","execute math operation","jokes","contact","search","essay","songs","design"];

var ul= document.querySelector("ul");

for (var i = 0; i < cmd.length; i++) {
   var li=document.createElement("li");

	li.innerHTML=cmd[i]
   ul.append(li)
}