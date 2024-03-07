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

        // Close meet section

        const meet = document.getElementsByClassName("meet")[0];
        const meetCloseBtn = document.getElementsByClassName("meet-close-btn")[0];

        meetCloseBtn.addEventListener('click', () => {
            meet.classList.add('close-meet');
        })

        // Play meet's video

        const meetVideo = document.getElementsByClassName('meet-video');
        const playIcon = document.getElementsByClassName('play-icon');
        let video = document.getElementById('video');

        let playVideo = new MediaElementPlayer(video, {
            success: function (mediaElement, originalNode) {
            }
        });

        for (let i = 0; i < playIcon.length; i++) {
            playIcon[i].addEventListener('click', () => {
                playVideo.play();
                meetVideo[i].classList.add('play-video');
            })
        }

    }
)