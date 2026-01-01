$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

// Floating Contact Modal Logic
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

if (openBtn) {
    openBtn.onclick = function () {
        modal.classList.add("active");
    }
}

if (closeBtn) {
    closeBtn.onclick = function () {
        modal.classList.remove("active");
    }
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove("active");
    }
}

// EmailJS for floating contact form
$("#floating-contact-form").submit(function (event) {
    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

    emailjs.sendForm('contact_service', 'template_contact', '#floating-contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("floating-contact-form").reset();
            modal.classList.remove("active");
            alert("Message Sent Successfully!");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Message Failed to Send! Please try again later.");
        });
    event.preventDefault();
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });


// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Experience | Portfolio Abdallah Mohamed Fathy";
            $("#favicon").attr("href", "/assets/images/hero.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });
