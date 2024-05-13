var arr_img = ["three_pepsi.png","three_pepsi2.png","three_pepsi3.png"]
        var imgMain = document.getElementById('img')

        for (let i = 0; i < 5; i++) {
            console.log(i);
            function chrono() {
                console.log(true);
                var random = Math.floor(Math.random()*arr_img.length)
                imgMain.src = arr_img[random]
                var temps = 4
                temps--
                if (temps == 0) {
                    clearInterval(temps)
                }
            }
        }
        var s = setInterval(chrono,1000)