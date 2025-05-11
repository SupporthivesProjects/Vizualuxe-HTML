$(document).ready(function () {
    $(".hamburger_menu").click(function () {
        $(".header_mobo_main_slide").fadeIn("slow");
        $(".hamburger_menu").fadeOut("slow");
        $(".hamburger_menu_close").fadeIn("slow");
        $(".header_cart_mobo_main_slide").fadeOut("slow");
    });
    $(".hamburger_menu_close").click(function () {

        if ($(".header_cart_mobo_main_slide").css("display") != "none") {
            $(".header_cart_mobo_main_slide").fadeOut("slow");
            $(".hamburger_menu").fadeIn("slow");
            $(".hamburger_menu_close").fadeOut("slow");
        } else {
            $(".hamburger_menu").fadeIn("slow");
            $(".header_mobo_main_slide").fadeOut("slow");
            $(".hamburger_menu_close").fadeOut("slow");
        }
    });
    $(".cart_menu").click(function () {
        $(".header_cart_mobo_main_slide").fadeIn("slow");
        $(".header_mobo_main_slide").fadeOut("slow");
        $(".hamburger_menu_close").fadeIn("slow");
        $(".hamburger_menu").fadeOut("slow");
    });
});

function closeMobileCart() {
    if ($(".header_cart_mobo_main_slide").css("display") != "none") {
        $(".header_cart_mobo_main_slide").fadeOut("slow");
        $(".header_mobo_main_slide").fadeIn("slow");
    } else {
        $(".header_mobo_main_slide").fadeOut("slow");
        $(".hamburger_menu").fadeIn("slow");
        $(".hamburger_menu_close").fadeOut("slow");
    }
}

function justDrop(droperId, roterId, element) {
    const theId = document.getElementById(droperId);
    const theId2 = document.getElementById(roterId);


    if (theId.classList.contains('d-none')) {
        theId.classList.remove('d-none');
        element.classList.add("active")
        theId2.style.rotate = '180deg';
    } else {
        theId.classList.add('d-none');
        element.classList.remove("active")
        theId2.style.rotate = '0deg';
    }
}
$(document).ready(function () {
    if (screen.width < 700) {
        const device_width = screen.width - 24;
        const slider_width = screen.width - 50;
        const slider_width2 = screen.width - 24;
        $(".dash_tab_scrollable").css('width', device_width + 'px');
        $("#oh_body_box_sub_main").css('width', slider_width + 'px');
        $("#order_history_body_box").css('width', slider_width2 + 'px');
    }
});

function field_box_file() {
    console.log('me');
    document.getElementById('document').click();
}
$("#document").on("change", function (e) {
    document.getElementById('upload_placeholder').innerHTML = e.target.files[0].name;
})


// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: false,
//         margin: 28,
//         nav: false,
//         dots: false,
//         responsive: {
//             0: {
//                 loop: false,
//                 items: 1,
//                 nav: true,
//                 navText: [
//                     "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M13 7H1M1 7L7 1M1 7L7 13' stroke='#FCFCFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
//                     "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'><path d='M1 7H13M13 7L7 1M13 7L7 13' stroke='#FCFCFD' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></span>"
//                 ],
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 4
//             }
//         }
//     })
// })

// const togglePassword = document.querySelector('#togglePassword');
//   const password = document.querySelector('#id_password');

//   togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     this.classList.toggle('fa-eye-slash');
// });

function togglePassword(input_id, input_eye_image) {
    const inputField = document.getElementById(input_id);
    const inputFieldType = inputField.getAttribute('type');
    if (inputFieldType === "password") {
        inputField.setAttribute('type', 'text');
        input_eye_image.src = "./assets/img/open_eye.svg"
    } else {
        inputField.setAttribute('type', 'password');
        input_eye_image.src = "./assets/img/close_eye.svg"
    }
}

function dashMoboDrop(droperId, roterId, changed_text, img_name) {
    const theId = document.getElementById(droperId);
    const theId2 = document.getElementById(roterId);
    let img_src = "./assets/img/" + img_name + ".png";

    if (theId.classList.contains('d-none')) {
        theId.classList.remove('d-none');
        theId2.style.rotate = '180deg';
    } else {
        theId.classList.add('d-none');
        theId2.style.rotate = '0deg';
        $("#dashtc").text(changed_text);
        $("#dashMoboDrop").attr("src", img_src);

    }
}










document.querySelectorAll('.toggle-btn').forEach(button => {
    const icon = button.querySelector('.icon');
    const text = button.querySelector('.read-text');
    const collapse = document.querySelector(button.getAttribute('data-bs-target'));

    const plusIconPath = button.getAttribute('data-plus');
    const minusIconPath = button.getAttribute('data-minus');

    // ✅ INITIAL CHECK: Run this once on page load
    if (collapse.classList.contains('show')) {
        icon.setAttribute('src', minusIconPath);
        text.textContent = 'Read Less';
    } else {
        icon.setAttribute('src', plusIconPath);
        text.textContent = 'Read More';
    }

    // ✅ Toggle on expand/collapse
    collapse.addEventListener('show.bs.collapse', () => {
        icon.setAttribute('src', minusIconPath);
        text.textContent = 'Read Less';
    });

    collapse.addEventListener('hide.bs.collapse', () => {
        icon.setAttribute('src', plusIconPath);
        text.textContent = 'Read More';
    });
});


$(document).ready(function () {
    $('#home_owl_slider').owlCarousel({
        loop: false,
        margin: 24,
        dots: false,
        nav: false,
        responsive: {
            0: {
                loop: false,
                items: 1,
                margin: 16,
                nav: true,
                dots: true,
                navText: [
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='28' viewBox='0 0 16 28' fill='none'><path d='M13.3137 25.127L2.00001 13.8132L13.3137 2.49954' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='28' viewBox='0 0 16 28' fill='none'><path d='M2.68628 2.5L14 13.8137L2.68628 25.1274' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>"
                ],
            },
            600: {
                items: 3
            },

            1279: {
                items: 3,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: false,
            },

            1400: {
                items: 4,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: false,
            },
            1700: {
                items: 5
            }
        }
    })
})














const fileInput = document.getElementById("document");
    const fileNameLabel = document.getElementById("upload_filename");
    const wrapper = document.getElementById("upload_wrapper");

    fileInput.addEventListener("click", () => {
      fileInput.value = ""; // reset for same file re-upload
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        fileNameLabel.textContent = e.target.files[0].name;
        wrapper.classList.add("active");
      } else {
        fileNameLabel.textContent = "";
        wrapper.classList.remove("active");
      }
    });






    $(document).ready(function () {
        if (screen.width > 700) {
            const elementr = document.querySelector('.skew_right_video video');
            const video_right_height = elementr.offsetHeight;
            $(".skew_s_main").css('min-height', video_right_height + 'px');
            $(".skew_s_content_main").css('min-height', video_right_height + 'px');
        } 
    });