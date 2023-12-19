let score = 0; 
let points = 10;

function correct(button){
    score+=10;
    button.style.backgroundColor = 'green'
    let parent = button.parentNode;
    let siblings = parent.childNodes;
    siblings.forEach(element => {
        element.disabled = true; 
    });
}
function incorrect(button){
    score-=5 
    button.style.backgroundColor = 'red'
    let parent = button.parentNode;
    let siblings = parent.childNodes;
    siblings.forEach(element => {
        element.disabled = true; 
    });
}
