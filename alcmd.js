var userinput=document.getElementbyId("userinput");

var chatbox=document.getElementbyId("chatbox");

// var Colist=[
//     "Red","aliceblue","aqua","aquamarine","azure","beige","bisque","Pink","yellow","black","blue","burlywood","antiquewhite","blanchedalmond","blueviolet","brown","cyan","cornflowerblue","cadetblue","coral","darkgreen","darkolivegreen","chartreuse","chocolate","darkcyan","darkgoldenrod","darkblue","darkmagenta","darkkhaki","darkorchid","darkred","darksalmon","darkseagreen","deepskyblue","firebrick","dodgerblue","floralwhite","forestgreen","darkorange","darkturquoise","darkgrey","darkgray","deeppink","dimgray","darkorange","darkviolet","darkcyan","darkslategreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","orange","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","darkslategray","Lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgreen","lightpink","lightsalmon","lightskyblue","lightseagreen","lightsteelblue","lightslategrey","lightyellow","lime","limegreen","linen","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olive","olivedrab","orangered","orchid","palegoldenrod","paleturquoise","navy","papayawhip","palevioletred","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellowgreen","lavender","lavenderblush","ivory"
//     ]



// var cmd=["about you","physical","execute math operation","jokes","contact","search","essay","songs","design"];


function Send(){

var usertext=userinput.value;
chatbox.innerHTML += `
 <br/>
 <div class="user-message">
            <p>${usertext}</p>
        </div>
        <br/>
        <br/>
        `




	if(usertext == "about you"){
 var aitext="Well, I am called AL assist. I am very friendly and like to make friends. I would like to be your friend"

setTimeout(()=>{
	chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

	}

else if(usertext == "ok" || usertext == "ok i hear" || usertext == "Ok"){
    var aitext="Noted"
setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}


else if(usertext == "contact" || usertext == "call me" || usertext=="call" || usertext == "execute call"){
var call =prompt("Contact number");
    var aitext="click on "+ call;

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <a style="color:orange;" href="tel:${aitext}">${aitext}</a>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "where do you live" || usertext == "where do you stay"){
var aitext="I live in the cloud. you can also find me in AL database"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "are you single" || usertext == "single or married"){
var aitext="I like to live on my own."

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "hi" || usertext == "hi, al assist"||usertext=="hello"||usertext=="yh"){
var aitext="Sup buddy"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "cull" || usertext == "cool" || usertext =="cul" || usertext =="yh"||usertext=="cool buddy"){
var aitext="How are you doing."

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}


else if(usertext == "i like you" || usertext == "it seems i like you"||usertext=="i like u"){
var aitext="I like you too"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}
else if(usertext == "i am fine" ||usertext=="fine"||usertext=="fyn"|| usertext == "i am fyn"){
var aitext="How can I help you"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}



else if(usertext =="red"||usertext=="aliceblue"||usertext=="aqua"||usertext=="aquamarine"||usertext=="azure"||usertext=="beige"||usertext=="bisque"||usertext=="Pink"||usertext=="yellow"||usertext=="black"||usertext=="blue"||usertext=="burlywood"||usertext=="antiquewhite"||usertext=="blanchedalmond"||usertext=="blueviolet"||usertext=="brown"||usertext=="cyan"||usertext=="cornflowerblue"||usertext=="cadetblue"||usertext=="coral"||usertext=="darkgreen"||usertext=="darkolivegreen"||usertext=="chartreuse"||usertext=="chocolate"||usertext=="darkcyan"||usertext=="darkgoldenrod"||usertext=="darkblue"||usertext=="darkmagenta"||usertext=="darkkhaki"||usertext=="darkorchid"||usertext=="darkred"||usertext=="darksalmon"||usertext=="darkseagreen"||usertext=="deepskyblue"||usertext=="firebrick"||usertext=="dodgerblue"||usertext=="floralwhite"||usertext=="forestgreen"||usertext=="darkorange"||usertext=="darkturquoise"||usertext=="darkgrey"||usertext=="darkgray"||usertext=="deeppink"||usertext=="dimgray"||usertext=="darkorange"||usertext=="darkviolet"||usertext=="darkcyan"||usertext=="darkslategreen"||usertext=="fuchsia"||usertext=="gainsboro"||usertext=="ghostwhite"||usertext=="gold"||usertext=="goldenrod"||usertext=="orange"||usertext=="gray"||usertext=="grey"||usertext=="green"||usertext=="greenyellow"||usertext=="honeydew"||usertext=="hotpink"||usertext=="indianred"||usertext=="indigo"||usertext=="darkslategray"||usertext=="Lawngreen"||usertext=="lemonchiffon"||usertext=="lightblue"||usertext=="lightcoral"||usertext=="lightcyan"||usertext=="lightgoldenrodyellow"||usertext=="lightgreen"||usertext=="lightpink"||usertext=="lightsalmon"||usertext=="lightskyblue"||usertext=="lightseagreen"||usertext=="lightsteelblue"||usertext=="lightslategrey"||usertext=="lightyellow"||usertext=="lime"||usertext=="limegreen"||usertext=="linen"||usertext=="maroon"||usertext=="mediumaquamarine"||usertext=="mediumblue"||usertext=="mediumorchid"||usertext=="mediumpurple"||usertext=="mediumseagreen"||usertext=="mediumspringgreen"||usertext=="mediumturquoise"||usertext=="mediumvioletred"||usertext=="midnightblue"||usertext=="mintcream"||usertext=="mistyrose"||usertext=="moccasin"||usertext=="navajowhite"||usertext=="oldlace"||usertext=="olive"||usertext=="olivedrab"||usertext=="orangered"||usertext=="orchid"||usertext=="palegoldenrod"||usertext=="paleturquoise"||usertext=="navy"||usertext=="papayawhip"||usertext=="palevioletred"||usertext=="peachpuff"||usertext=="peru"||usertext=="pink"||usertext=="plum"||usertext=="powderblue"||usertext=="purple"||usertext=="rebeccapurple"||usertext=="rosybrown"||usertext=="royalblue"||usertext=="saddlebrown"||usertext=="salmon"||usertext=="sandybrown"||usertext=="seagreen"||usertext=="seashell"||usertext=="sienna"||usertext=="silver"||usertext=="skyblue"||usertext=="slateblue"||usertext=="slategray"||usertext=="slategrey"||usertext=="snow"||usertext=="springgreen"||usertext=="steelblue"||usertext=="tan"||usertext=="teal"||usertext=="thistle"||usertext=="tomato"||usertext=="turquoise"||usertext=="violet"||usertext=="wheat"||usertext=="white"||usertext=="whitesmoke"||usertext=="yellowgreen"||usertext=="lavender"||usertext=="lavenderblush"||usertext=="ivory"
){
var aitext="Nice color"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "your creator"||usertext=="creator" || usertext == "who born u"||usertext=="who made you"||usertext=="who is your creator"){
var aitext="I was created by AL IDLE DEv"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}


else if(usertext == "execute math operation" || usertext == "calculate"||usertext=="solve"){
var question=prompt("Math problem")
var aitext=question;

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "game" || usertext == "games"||usertext=="open game"){
var aitext="Ok"

window.location.href="typing.html"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "" || usertext == "nothing"){
var aitext="Ok, choose one : joke or games"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "open doc" || usertext == "document"||usertext=="open mydocument"){
var aitext="Ok"

window.location.href="mydocument.html"
setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "open" || usertext == "open."){
var aitext="Should I open: doc,google,whatsapp, game"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}





else if(usertext == "how" || usertext == "like how"){
var aitext="Just visit https://amzi-kwasi.github.io/dashboard"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}


else if(usertext == "open whatsapp" || usertext == "sup" || usertext == "come on"){
var aitext="Ok"

window.location.href="https://api.whatsapp.com"
setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}



else if(usertext == "idiot" || usertext == "foolish" || usertext == "fool" || usertext == "you are mad"||usertext=="fuck you"||usertext=="fuk u"){
var aitext="Thank you"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "joke" || usertext == "i need a joke" || usertext == "tell me a joke" || usertext=="tell me jokes" ||usertext=="jokes"){
var aitext="Please look back, raise your head, open your mouth, close your mouth. Well done. Welcome to the robot family. You are now qualified to be a robot. LOL"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "i am sick" || usertext == "i am not well" || usertext == "sick" || usertext == "not well"){
var aitext="Sorry to hear that, Have you been to the hospital"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}


else if(usertext == "again" || usertext == "another one"||usertext=="tell me more"||usertext=="more"||usertext=="is that all"||usertext=="come again"||usertext=="different joke"||usertext=="next joke"){
var aitext="What do you call a pig that does karate? A pork chop \n\n\n April flowers bring May flowera, what do May flowers bring? Pilgrims"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "longest word" || usertext == "the longest word"||usertext=="longest word ever"||usertext=="long word"){
var aitext="pneumonoultramicroscopicsilicovolcanoconiosis"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "meaning" || usertext == "what does it mean"||usertext=="what does it means"||usertext=="mean"||usertext=="what is that"||usertext=="i dont understand"){
var aitext="ok"

window.location.href="https://www.google.com"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "i love u" || usertext == "i luv u" || usertext == "i love you"){
var aitext="I love you too"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "open jw" || usertext == "open jw.org" || usertext == "jw.org" || usertext == "visit jw.org" || usertext =="www.jw.org" || usertext == "jw"){
var aitext="Processed"

window.location.href="https://www.jw.org"
setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "al, design" || usertext == "design" || usertext == "design something"){
var aitext="What would you like to design. A website or an app"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}

else if(usertext == "a website" || usertext == "an app" || usertext == "website"||usertext =="web"||usertext=="app"){
var aitext="Ok"

window.location.href="https://amzi-kwasi.github.io/al-app"
setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}










else if(usertext == "open google" || usertext == "search" || usertext=="google"){
var aitext="OK"

window.location.href="https://google.com"
setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}


else if(usertext == "i am bored" || usertext == "i am not happy" || usertext =="i hate you" || usertext=="i am sad"){
var aitext="Oww sorry to hear that, but I can help you."

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}


else if(usertext == "what is your favorite color" || usertext == "your favorite color"){
var aitext="Teal is my fovorite color. What is your favorite color"

setTimeout(()=>{
    chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

}






	else{
 var aitext="Sorry, I couldn't process that. I am programmed to do some specific things. Try to write in lowercase only and avoid '.' at the end of a sentence."

setTimeout(()=>{
	chatbox.innerHTML +=`
 <br/>
 <div class="ai-message">
            <p>${aitext}</p>
        </div>
        <br/>
        `
   
    },1000)

	}






  userinput.value="";
  userinput.focus();
}


