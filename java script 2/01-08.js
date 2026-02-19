let seconds = 0;
  

    function Display1() {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        document.getElementById("display").innerText =` ${hours}:${mins}:${secs};`
     

    }

    function startTimer() {
        if (!interval) {
            interval = setInterval(() => {
            seconds++;
            Display1();
            }, 100);
        }
        
    }
    function pauseTimer() {
        clearInterval(interval);
        interval = null;
    }
    function resetTimer() {
        clearInterval(interval);
        interval = null;
        seconds = 0;
        Display1();
    }
    let interval = null;
    Display1();