'use strict';
var rockPaperScissors = function(){
    var wins = 0,
        draws = 0,
        lose = 0,
        gameMode = parseInt($('input[name=game-mode]:checked').val()),
        result = [' ties ', ' beats ', ' loses to '],
        options = ['paper', 'rock', 'lizard', 'spock', 'scissors'],
        $jsBattleDome = $('#js-battle-dome');

    var renderScore = function(){//reusable function to render/reset score
        $('#js-win span').text(wins);
        $('#js-draw span').text(draws);
        $('#js-lose span').text(lose);
    };
    var resetGame = function(){
        wins = lose = draws = 0;
        $('#left-hand, #right-hand').removeClass();
        renderScore();
        $('#message').addClass('hidden');
        $('#js-set-up').removeClass('disabled');
        $('#js-reset').text('Reset');
        $('#js-auto-play').removeClass('hidden');
    };
    var checkStatus = function(){
        if (wins === (gameMode - 1 ) || lose === 2){
            //Game over
            if (wins === (gameMode - 1 ) ){
                displayMessage('you win');
            }else if (lose === 2) {
                displayMessage('you lose');
            }
            $('#js-auto-play').addClass('hidden');
            $('#js-set-up').addClass('disabled');
            $('#js-reset').text('Play Again');
        }
    };
    var displayMessage = function(message, messageDuration){
        if ($('#message')){
            $('#message').text(message).removeClass('hidden');
        } else {
            $jsBattleDome.append('<p id="message" class="message-text">' + message + '</p>');
        }
        if (messageDuration){
            setTimeout(function() {
                $('#message').addClass('hidden');
            }, messageDuration );
        }
    };
    var renderGamePlay = function(userChoice, randomChoice) {
        $('#left-hand, #right-hand').removeClass().addClass('bounce animated');
        setTimeout(function() {
            $('#left-hand').removeClass().addClass(userChoice);
            $('#right-hand').removeClass().addClass(randomChoice);
            renderScore();
            checkStatus();
        }, 1000);
    };
    var bigBang = function(choice1, choice2) {
        var index1 = options.indexOf(choice1),
            index2 = options.indexOf(choice2),
            dif = index2 - index1;

        if(dif < 0) {
            dif += options.length;
        }
        while(dif > 2) {
            dif -= 2;
        }

        if (choice1 === choice2){
            draws += 1 ;
        }if (dif === 1 ){
            wins += 1;
        } else if (dif === 2){
            lose += 1; 
        }
        renderGamePlay(choice1,choice2);
        
        return choice1 + result[dif] + choice2;
                      
    };
    $('input[name=game-mode]').on('change',function(){
        gameMode = parseInt($('input[name=game-mode]:checked').val());
    });

    $jsBattleDome.on('click', function(e){
        var target = e.target.id;
        if (target == 'js-settings'){
            $('#settings-pane').toggleClass('active');
            if ($('#settings-pane').hasClass('active')){
                $('#js-settings').text('close');
                $('#message').addClass('hidden');
                $('#js-reset, .actions').stop(true,true).fadeOut();
            } else {
                $('#js-settings').text('settings');
                $('#js-reset, .actions').stop(true,true).fadeIn();
            }
        }
        if (target == 'js-reset'){
            resetGame();
        }
        if (target == 'js-auto-play'){
            var autoPlay = function(){
                var standin = options[Math.floor(Math.random() * 5)],
                    randomChoice = options[Math.floor(Math.random() * 5)];
                console.log(bigBang(standin, randomChoice));
            };
            while (wins < (gameMode - 1 ) || lose < (gameMode - 1 )){
                autoPlay();
            }
        }
        if ($(e.target).parent().hasClass('actions')){
            var userChoice = options[$(e.target).index()],
                randomChoice = options[Math.floor(Math.random() * 5)];
            console.log(bigBang(userChoice, randomChoice));
        }
    });

    
    /*if (gameType === 'rps'){
        options = ['paper', 'rock', 'scissors']
    }else{
        options = ['paper', 'rock', 'lizard', 'spock', 'scissors']
    }*/

    return renderScore();    
};
rockPaperScissors();