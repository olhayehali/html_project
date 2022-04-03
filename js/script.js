        //select the button inside navbar and sidebar
        var button = document.querySelector('.sidebarbtn');
        var button2= document.querySelector('.navbar button');
        button.addEventListener('click', function(){
            var sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
        });
        button2.addEventListener('click', function(){
            var sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
        });
        button2.ani
