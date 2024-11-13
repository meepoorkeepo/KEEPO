//function for computer choise
function thecomputerchoise() {
    let random_number = Math.random();
    let cfinal;
    if (random_number < 1/3) {
        cfinal = 'rock';
    }
    else if(random_number >= 1/3 && random_number <=2/3 ){
        cfinal = 'paper';
    }
    else{
        cfinal = 'sisors'
    }
    
    return cfinal;
}
// functionfor button clicks



const main = document.querySelector('#main');
// creating the player div
const player_div = document.createElement('div');
player_div.id = 'player';
// creating the area for player
const player_title = document.createElement('h3');
const title_player = document.createTextNode('this is the player area');
player_title.appendChild(title_player);
let rock = document.createElement('button');
let paper = document.createElement('button');
let sisors = document.createElement('button');
rock.innerHTML = 'rock';
paper.innerHTML = 'paper';
sisors.innerHTML = 'sisors';
rock.style.padding = '50px';
paper.style.padding = '50px';
sisors.style.padding = '50px';
rock.style.margin = '10px';
paper.style.margin = '10px';
sisors.style.margin = '10px';
player_div.appendChild(player_title);
player_div.appendChild(rock);
player_div.appendChild(paper);
player_div.appendChild(sisors);
//creating area for computer 
const computer_div = document.createElement('div');
computer_div.id = 'computer';
let computer_title = document.createElement('h3');
const title_computer = document.createTextNode('this is the computer area');
computer_title.appendChild(title_computer);
computer_div.appendChild(computer_title);
computer_div.style.marginTop = '10px';
const computer_choise = document.createElement('div');
// let computer_choise_text = document.createTextNode('the computer choise IS : ' + thecomputerchoise());
computer_choise.appendChild(computer_choise_text);
computer_choise.style.marginBottom = '10px';

computer_div.appendChild(computer_choise);

main.appendChild(player_div); 
main.appendChild(computer_div);
