const Calculate = document.getElementById('button');
const input = document.getElementById('input');


eventListener();

function eventListener(){
    //submit event
    button.addEventListener('click',calculator);
}

function calculator(){
    
    var repeateds = input.value.match(/(.+)(?=.*?\1)/g);

    var returned = repeateds.toString();

    document.getElementById('result').value = ('Repeated Characters = ' + returned);

};


