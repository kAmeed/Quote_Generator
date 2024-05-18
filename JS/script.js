const displayEl = document.getElementById('random-number');
const quote = [`“Be yourself; everyone else is already taken.”
― Oscar Wilde`, `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,`“You only live once, but if you do it right, once is enough.”
― Mae West`,`“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,`“Be the change that you wish to see in the world.”
― Mahatma Gandhi`];
var last = quote[5];

function updateNumber(){
    var click = quote[Math.round( Math.random()*4)];
    if(click == last){
        click=quote[5];
        displayEl.innerHTML = click;
    last=click;
    }else{
        displayEl.innerHTML = click;
    last=click;
    }
    
}






