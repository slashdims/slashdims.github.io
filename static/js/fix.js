let linkNav = document.querySelectorAll('[href^="#"]'),
    speed = 0.5;
    
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            let down = window.pageYOffset,
                id = this.href.replace(/[^#]*(.*)/, '$1'),
                indent = document.querySelector(id).getBoundingClientRect().top,
                start = null;
            
            let step = (time) => {
                if (start === null){
                    start = time;
                }

                let progress = time - start,
                    r = (indent < 0 ? Math.max(down - progress/speed, down + indent) : Math.min(down + progress/speed, down + indent)) - 35;
                window.scrollTo(0,r);
                if (r != down + indent) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        }, false);

    }