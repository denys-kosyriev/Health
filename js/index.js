document.addEventListener('DOMContentLoaded', function () {

        // Close meet section

        const meet = document.getElementsByClassName("meet")[0];
        const meetCloseBtn = document.getElementsByClassName("meet-close-btn")[0];

        meetCloseBtn.addEventListener('click', () => {
            meet.classList.add('close-meet');
        })

    }
)