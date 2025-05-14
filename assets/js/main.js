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
$("#document").on("change", function(e){
    document.getElementById('upload_placeholder').innerHTML = e.target.files[0].name;
})
  

$(document).ready(function () {
    $('#pds2').owlCarousel({
        loop:false,
        margin: 28,
        nav:false,
        dots: false,
        responsive:{
            0:{
                loop: true,
                items:1.2,
                nav: true,
                dots: true,
                dotsEach: 1,
                navText: [
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M13.3135 24.627L1.99977 13.3132L13.3135 1.99954' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M2.68652 2L14.0002 13.3137L2.68652 24.6274' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>"
                ],
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $('#pds3').owlCarousel({
        loop:false,
        margin: 24,
        nav:false,
        dots: false,
        responsive:{
            0:{
                loop: true,
                items:1.08,
                nav: true,
                dots: true,
                dotsEach: 1,
                margin: 16,
                navText: [
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M13.3135 24.627L1.99977 13.3132L13.3135 1.99954' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>",
                    "<span class='btn btn_owl'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='27' viewBox='0 0 16 27' fill='none'><path d='M2.68652 2L14.0002 13.3137L2.68652 24.6274' stroke='#BA8B4A' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/></svg></span>"
                ],
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1349:{
                items:5
            }
        }
    })
})

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
function addQty(inp_id) {
    const x = document.getElementById(inp_id);
    let currentValue = parseInt(x.value) || 0;
    if (currentValue < 10) {
        x.value = currentValue + 1;
    }
    
}
function subQty(inp_id) {
    const x = document.getElementById(inp_id);
    let currentValue = parseInt(x.value) || 0;
    if (currentValue > 0) {
        x.value = currentValue - 1;
    }
}

$(document).ready(function () {
    $(window).on('scroll', function () {
        const scrollTop = window.scrollY;
        if (scrollTop >= 90) {
            $("#header").css("background", "#162222")
        } else {
            $("#header").css("background", "transparent")
        }
    });
});
