document.addEventListener("DOMContentLoaded", function() {
    var time = 60;
    var score = 0;
    var htRn = 0;

    function increaseScore(){
        score += 10;
        document.querySelector("#score").textContent = score;
    }

    function getNewHit(){
        htRn = Math.floor(Math.random() * 10);
        document.querySelector("#hitVal").textContent = htRn;
    }

    function createBubble(){
        var cluster = "";

        for(var i = 0; i <= 250; i++){
            var rn = Math.floor(Math.random() * 10);
            cluster += `<button class="bubble">${rn}</button>`;
        }

        document.querySelector(".panelbottom").innerHTML = cluster;
    }

    function runTimer(){
        var timer = setInterval(function(){
            if(time > 0){
                time--;
                document.querySelector("#timerId").textContent = time;
            } else {
                clearInterval(timer);
                document.querySelector(".panelbottom").innerHTML = "<h1> Game Over </h1>"
            }
        }, 1000);
    }

    runTimer();
    createBubble();
    getNewHit();

    document.querySelector(".panelbottom").addEventListener("click", function(dets){
        var clickedNumber = Number(dets.target.textContent);
        console.log(clickedNumber);
        if(clickedNumber === htRn){
            increaseScore();
            createBubble();
            getNewHit();
        }
    });
});
