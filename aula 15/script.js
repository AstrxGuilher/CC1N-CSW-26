document.writeln('hello word !!!');

window.alert('hello word again!!!');

document.getElementById('title').innerHTML = 'hello word, i like JavaScript!';

let name = window.prompt('what your name?');
window.prompt('what you name?');

window.confirm('Do you like java script');

if (resp){
    document.getElementById('reposta');
    innerHTML = 'yes! the student is like java script class';
}
else
{
    document.getElementById('Resposta');
    innerHTML = "No! the student doesnt like java script class";
}

function sendName() {
    
    let nameAnswer = document.getElementById("inputName").value;

    const Answer = document.getElementById("contrainerAnswer");
    
    Answer.innerHTML = "the name write is nameAnswer";

    Answer.style.height = "15Opx";
    Answer.style.backgroundImage = "linear-gradient(to right,reAd,orange,yellow.green,blue,indigo,violet)";

    Answer.styler.justifyontent = "center";
    Answer.styler.aliglntems =  "center";

    Answer.style.fontSize = "20px";

    Answer.styler.border = "2px solid #ff0000";
}