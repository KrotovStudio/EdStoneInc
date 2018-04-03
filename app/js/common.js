
/* main-page */
$(document).ready(function () {
    if($('body').hasClass('main_page')){
        $('.main-page-vision').css('display','block');
    }
    else{
        $('.main-page-vision').css('display','none');
    }

    /* Sink blocks */
    function widthSinkBlock(){
        $('.sink-block').each(function () {
            var count = $(this).find('.sink-img').length;
            (count==2)?$(this).css({width:'100%'}):$(this).css({width:'50%'});
        });
    }
    widthSinkBlock();
});

/* smooth-scrolling */
$(document).ready(function () {
    $("#makeMeScrollable").smoothDivScroll({
        mousewheelScrolling: "allDirections",
        manualContinuousScrolling: true,
        autoScrollingMode: "onStart"
    });
});


/* image popup */
$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true,
        titleSrc: 'title'
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

/* popup form */
$(document).ready(function() {
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});

/* close / open mobile menu */
$(document).ready(function() {
    var menu =  $('.nav-main');
    $('.mob-btn').on('click', function(){
        menu.addClass('active')
    });

    var close = $('.close-nav');
    $(close).on('click', function(){
        menu.removeClass('active')
    });
});

/* mixitUp */
$(function () {
    var filterList = {
        init: function () {
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap'
                // call the hover effect
            });
        }
    };
    filterList.init();
});

/* calculator */
$(document).ready(function () {

    /* click active / add  select shape list*/
    $(document).on( "click",".select-shape-img", function() {
        var click_id = $(this).attr('id');
        $('.dop-active').show();
        $('.dop-noactive').hide();
        if ($(this).hasClass('active')){
            return false;
        } else{
            $('#cal_' + click_id).css('opacity','1').fadeIn().remove().appendTo('.main-calculator-wrap');
        }
        $(this).addClass('active');
    });

    /* call math function by click */
    $(document).on('click','.btn-sq', function(e){
        e.preventDefault();
        calc();
    });

    /* delete shape from list */
    $(document).on('click','.delete', function(e){
        e.preventDefault();
        var shape = $(this).parent().parent();
        var shape_id = shape.attr('id');
        $('.close_' + shape_id).removeClass('active');
        shape.find('.input-inches input').val('');
        shape.find('.sq-feet').text('0.00');
        shape.hide();
        calc();
    });

    /* calc function */
    function calc () {
        var input_1 = $('#1-input-1').val()*1;
        var input_2 = $('#1-input-2').val()*1;

        var mathInput_1 = +(input_1 * input_2)/144;
        var mathSlice_1 = mathInput_1.toFixed(2);
        $('#sq-1').text(mathSlice_1);

        var input_3 = $('#2-input-1').val()*1;
        var input_4 = $('#2-input-2').val()*1;

        var mathInput_2 = +(input_3 * input_4)/144;
        var mathSlice_2 = mathInput_2.toFixed(2);
        $('#sq-2').text(mathSlice_2);

        var input_5 = $('#3-input-1').val()*1;
        var input_6 = $('#3-input-2').val()*1;
        var input_7 = $('#3-input-3').val()*1;
        var input_8 = $('#3-input-4').val()*1;

        var mathInput_3 = +((input_5 * input_6) + (input_7 * input_8))/144;
        var mathSlice_3 = mathInput_3.toFixed(2);
        $('#sq-3').text(mathSlice_3);

        var input_9 = $('#4-input-1').val()*1;
        var input_10 = $('#4-input-2').val()*1;
        var input_11 = $('#4-input-3').val()*1;
        var input_12 = $('#4-input-4').val()*1;
        var input_13 = $('#4-input-5').val()*1;
        var input_14 = $('#4-input-6').val()*1;

        var mathInput_4 = +((input_9 * input_10) + (input_11 * input_12) + (input_13 * input_14))/144;
        var mathSlice_4 = mathInput_4.toFixed(2);
        $('#sq-4').text(mathSlice_4);

        var input_15 = $('#5-input-1').val()*1;
        var input_16 = $('#5-input-2').val()*1;

        var mathInput_5 = +(input_15 * input_16)/144;
        var mathSlice_5 = mathInput_5.toFixed(2);
        $('#sq-5').text(mathSlice_5);

        var input_17 = $('#6-input-1').val()*1;
        var input_18 = $('#6-input-2').val()*1;

        var mathInput_6 = +(input_17 * input_18)/144;
        var mathSlice_6 = mathInput_6.toFixed(2);
        $('#sq-6').text(mathSlice_6);

        var input_19 = $('#7-input-1').val()*1;
        var input_20 = $('#7-input-2').val()*1;
        var input_21 = $('#7-input-3').val()*1;
        var input_22 = $('#7-input-4').val()*1;
        var input_23 = $('#7-input-5').val()*1;
        var input_24 = $('#7-input-6').val()*1;

        var mathInput_7 = +((input_19 * input_20) + (input_21 * input_22) + (input_23 * input_24))/144;
        var mathSlice_7 = mathInput_7.toFixed(2);
        $('#sq-7').text(mathSlice_7);

        var input_25 = $('#8-input-1').val()*1;
        var input_26 = $('#8-input-2').val()*1;
        var input_27 = $('#8-input-3').val()*1;
        var input_28 = $('#8-input-4').val()*1;
        var input_29 = $('#8-input-5').val()*1;
        var input_30 = $('#8-input-6').val()*1;

        var mathInput_8 = +((input_25 * input_26) + (input_27 * input_28) + (input_29 * input_30))/144;
        var mathSlice_8 = mathInput_8.toFixed(2);
        $('#sq-8').text(mathSlice_8);

        var input_31 = $('#9-input-1').val()*1;
        var input_32 = $('#9-input-2').val()*1;
        var input_33 = $('#9-input-3').val()*1;
        var input_34 = $('#9-input-4').val()*1;

        var mathInput_9 = +((input_31 * input_32) + (input_33 * input_34))/144;
        var mathSlice_9 = mathInput_9.toFixed(2);
        $('#sq-9').text(mathSlice_9);

        var input_35 = $('#10-input-1').val()*1;
        var input_36 = $('#10-input-2').val()*1;
        var input_37 = $('#10-input-3').val()*1;
        var input_38 = $('#10-input-4').val()*1;

        var mathInput_10 = +((input_35 * input_36) + (input_37 * input_38))/144;
        var mathSlice_10 = mathInput_10.toFixed(2);
        $('#sq-10').text(mathSlice_10);

        var input_39 = $('#11-input-1').val()*1;
        var input_40 = $('#11-input-2').val()*1;
        var input_41 = $('#11-input-3').val()*1;
        var input_42 = $('#11-input-4').val()*1;
        var input_43 = $('#11-input-5').val()*1;
        var input_44 = $('#11-input-6').val()*1;

        var mathInput_11 = +((input_39 * input_40) + ((input_41 - input_40) * input_42) + (input_43 * input_44))/144;
        var mathSlice_11 = mathInput_11.toFixed(2);
        $('#sq-11').text(mathSlice_11);

        var input_45 = $('#12-input-1').val()*1;
        var input_46 = $('#12-input-2').val()*1;
        var input_47 = $('#12-input-3').val()*1;
        var input_48 = $('#12-input-4').val()*1;
        var input_49 = $('#12-input-5').val()*1;
        var input_50 = $('#12-input-6').val()*1;
        var input_51 = $('#12-input-7').val()*1;
        var input_52 = $('#12-input-8').val()*1;

        var mathInput_12 = +((input_45 * input_46) + (input_47 * input_48) + (input_49 * input_50) + (input_51 * input_52))/144;
        var mathSlice_12 = mathInput_12.toFixed(2);
        $('#sq-12').text(mathSlice_12);

        var input_53 = $('#13-input-1').val()*1;
        var input_54 = $('#13-input-2').val()*1;
        var input_55 = $('#13-input-3').val()*1;
        var input_56 = $('#13-input-4').val()*1;
        var input_57 = $('#13-input-5').val()*1;
        var input_58 = $('#13-input-6').val()*1;

        var mathInput_13 = +((input_53 * input_54) + (input_55 * input_56) + (input_57 * input_58))/144;
        var mathSlice_13 = mathInput_13.toFixed(2);
        $('#sq-13').text(mathSlice_13);

        var mathAll = Number(mathSlice_1) + Number(mathSlice_2) + Number(mathSlice_3) + Number(mathSlice_4) + Number(mathSlice_5) + Number(mathSlice_6) + Number(mathSlice_7) + Number(mathSlice_8) + Number(mathSlice_9) + Number(mathSlice_10) + Number(mathSlice_11) + Number(mathSlice_12) + Number(mathSlice_13)
        var mathAllFixed = mathAll.toFixed(2);
        $('.coast-none').hide();
        $('.sq-vision').show();

        $('#sq').text(mathAllFixed);
    }
});
