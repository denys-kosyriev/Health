document.addEventListener('DOMContentLoaded', function () {

        // Change height header while scroll
        const body = document.getElementsByTagName("body")[0];

        const handleScroll = () => {
            if (window.scrollY < 60) {
                body.classList.remove('scroll-top');
            } else {
                body.classList.add('scroll-top');
            }
        };
        window.addEventListener("scroll", handleScroll);

    }
)