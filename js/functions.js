( function( $ ) {

"use strict";

// *** On ready *** //
$( document ).on( "ready" , function() {
	responsiveClasses();
	dataCustomOptions();
	fullscreenSection();
	imageBG();
	fitVideos();
	BGVideoYTPlayer();
	lightboxImage();
	lightboxGallery();
	lightboxIframe();
	scrollToAnchor();
	bannerParallaxImageBG();
	sectionParallaxImageBG();
	bannerSlider();
	sliderBoxesServices();
	sliderTestimonials();
	sliderImageBG();
	optimizeSliderImageBG();
	whiteTextSwitching();
	formCTASubscribe2();
	scrollTopIcon();
});

// *** On load *** //
$( window ).on( "load" , function() {
	parallaxStellar();
	scrollProgress();
});

// *** On resize *** //
$( window ).on( "resize" , function() {
	responsiveClasses();
	fullscreenSection();
	parallaxStellar();
});

// *** On scroll *** //
$( window ).on( "scroll" , function() {
	scrollTopIcon();
	scrollProgress();
});

// *** On Scroll In On load *** //
$( window ).on( "load" , function() {
	$( window ).on( "scroll" , function() {

	});
});


// *** jQuery noConflict *** //
var $ = jQuery.noConflict();


// *** General Variables *** //
var $window = $( window ),
	$this = $( this ),
	$body = $( "body" );

// *** Data Custom Options *** //
function dataCustomOptions() { $("*[data-pattern-overlay-darkness-opacity]").each(function () { var a = $(this).data("pattern-overlay-darkness-opacity"); $(this).css("background-color", convertHex("#000000", a)) }), $("*[data-pattern-overlay-background-image]").each(function () { "none" == $(this).data("pattern-overlay-background-image") ? $(this).css("background-image", "none") : "yes" == $(this).data("pattern-overlay-background-image") && $(this).css("background-image") }), $("*[data-remove-pattern-overlay]").each(function () { "yes" == $(this).data("remove-pattern-overlay") && $(this).css("background", "none") }), $("*[data-bg-color]").each(function () { var a = $(this).data("bg-color"); $(this).css("background-color", a) }), $("*[data-bg-color-opacity]").each(function () { var a = $(this).data("bg-color-opacity"), t = $(this).css("background-color").replace("rgb", "rgba").replace(")", ", " + a + ")"); $(this).css("background-color", t) }), $("*[data-bg-img]").each(function () { var a = $(this).data("bg-img"); $(this).css("background-image", "url('" + a + "')") }), $("*[data-parallax-bg-img]").each(function () { var a = $(this).data("parallax-bg-img"); $(this).css("background-image", "url('./images/files/parallax-bg/" + a + "')") }) }


// Custom banner height
$( ".banner-parallax" ).each(function() {
	var customBannerHeight = $( this ).data( "banner-height" ),
		boxContent = $( this ).find( ".row > [class*='col-']" );
	$( this ).css( "min-height" , customBannerHeight );
	$( boxContent ).css( "min-height" , customBannerHeight );
});



// *** Responsive Classes *** //
function responsiveClasses() {
	var jRes = jRespond([
		{
			label: "smallest",
			enter: 0,
			exit: 479
		},{
			label: "handheld",
			enter: 480,
			exit: 767
		},{
			label: "tablet",
			enter: 768,
			exit: 991
		},{
			label: "laptop",
			enter: 992,
			exit: 1199
		},{
			label: "desktop",
			enter: 1200,
			exit: 10000
		}
	]);
	jRes.addFunc([
		{
			breakpoint: "desktop",
			enter: function() { $body.addClass( "device-lg" ); },
			exit: function() { $body.removeClass( "device-lg" ); }
		},{
			breakpoint: "laptop",
			enter: function() { $body.addClass( "device-md" ); },
			exit: function() { $body.removeClass( "device-md" ); }
		},{
			breakpoint: "tablet",
			enter: function() { $body.addClass( "device-sm" ); },
			exit: function() { $body.removeClass( "device-sm" ); }
		},{
			breakpoint: "handheld",
			enter: function() { $body.addClass( "device-xs" ); },
			exit: function() { $body.removeClass( "device-xs" ); }
		},{
			breakpoint: "smallest",
			enter: function() { $body.addClass( "device-xxs" ); },
			exit: function() { $body.removeClass( "device-xxs" ); }
		}
	]);
}


// *** Fullscreen Section *** //
function fullscreenSection() {
	$( ".fullscreen, #home-header, #home-banner" ).css( "height", $( window ).height() );
	$( "#banner.fullscreen" ).css( "height", $( window ).height() );
}


// *** RTL Case *** //
var HTMLDir = $( "html" ).css( "direction" ),
	owlRtl;

// If page is RTL
if ( HTMLDir == "rtl" ) { 
	// Owl Carousel
	owlRtl = true 
} else { 
	owlRtl = false 
}


// *** Image Background *** //
function imageBG() {
	$( ".img-bg" ).each(function() {
		var $this = $( this ),
			imgSrc = $this.find( "img" ).attr( "src" );

		if ( $this.parent( ".section-image" ).length ) {
			$this.css( "background-image", "url('" + imgSrc + "')"  );
		} else {
			$this.prepend( "<div class='bg-element'></div>" );
			var bgElement = $this.find( ".bg-element" );
			bgElement.css( "background-image", "url('" + imgSrc + "')"  );
		}
		$this.find( "img" ).css({ "opacity" : 0 , "visibility" : "hidden" });		
	});
}


// *** Stellar Parallax *** //
function parallaxStellar() {
	$(function() {
		if ( $body.hasClass( "device-lg" ) || $body.hasClass( "device-md" ) || $body.hasClass( "device-sm" ) ) {
			$.stellar({
				horizontalScrolling: false, // don't change this option
				// verticalScrolling: false,
				verticalOffset: 0,
		    	responsive: true, // false
			});
        }
	});
}


// *** Fit Videos *** //
function fitVideos() {
	$( "#full-container" ).fitVids();
}


// *** Background Videos *** //
function BGVideoYTPlayer() {
	$(".video-background").each( function() {
		$( this ).YTPlayer({
			mute: false,
			autoPlay: true,
			opacity: 1,
			containment: ".video-background",
			showControls: false,
			startAt: 0,
			addRaster: true,
			showYTLogo: false,
			stopMovieOnBlur: false
		});
	});
}


// *** Lightbox Iframe *** //
function lightboxIframe() {
	$( ".lightbox-iframe" ).magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Lightbox Image *** //
function lightboxImage() {
	$( ".lightbox-img" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: false
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Lightbox Gallery *** //
function lightboxGallery() {
	$( ".lightbox-gallery" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Scroll Top Icon *** //
function scrollTopIcon() {
	var windowScroll = $( window ).scrollTop();
	if ( $( window ).scrollTop() > 800 ) {
		$( ".scroll-top-icon" ).addClass( "show" );
	} else {
		$( ".scroll-top-icon" ).removeClass( "show" );
	}
}

$( ".scroll-top" ).on( "click" , function(e) {
	e.preventDefault();
    $( "html, body" ).animate({
        scrollTop: 0
    }, 1200, "easeInOutExpo" ); //1200 easeInOutExpo
});


// *** Scroll Progress *** //
function scrollProgress() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var height = docheight - winheight;
    var scroll = $(document).scrollTop();
    var scrollperc = scroll/(height/100);
    $("#scroll-progress .scroll-progress").width(scrollperc+'%');
    $(".scroll-percent").text(scrollperc.toFixed(0)+'%');	
}


// *** Scroll To Anchor *** //
function scrollToAnchor() {
   	var stickyBar = $( ".header-bar.sticky" ),
   		stickyBarHeight = stickyBar.height(),
	    offsetDifference = ( ! stickyBar ) ? 0 : stickyBarHeight;

    $(  ".scroll-to" ).on( "click", function( e ) {
        e.preventDefault();
        var $anchor = $( this );

        // scroll to specific anchor
        $(  "html, body" ).stop().animate({
            scrollTop: $( $anchor.attr( "href" ) ).offset().top - offsetDifference
        } , 1200 , "easeInOutExpo" );
    });    
}


// *** Banner Parallax Image BG *** //
function bannerParallaxImageBG() {
	var bannerParallax = $( ".banner-parallax" ),
		imgSrc = bannerParallax.children( "img:first-child" ).attr( "src" );

	bannerParallax.prepend( "<div class='bg-element'></div>" );
	var bgElement = bannerParallax.find( "> .bg-element" );
	bgElement.css( "background-image", "url('" + imgSrc + "')"  ).attr( "data-stellar-background-ratio" , 0.2 );
}


// *** Section Parallax Image BG *** //
function sectionParallaxImageBG() {
	$( ".parallax-section" ).each( function() {
		var parallaxSection = $( this ),
			imgSrc = parallaxSection.children( "img:first-child" ).attr( "src" );

		parallaxSection.prepend( "<div class='bg-element'></div>" );
		var bgElement = parallaxSection.find( "> .bg-element" );
		bgElement.css( "background-image", "url('" + imgSrc + "')"  ).attr( "data-stellar-background-ratio" , 0.2 );
	} );
}


// *** white Text Switching *** //
var logo = $(".logo-header img"),
	logoSrc = logo.attr("src"),
	logoAlt = logo.data("logo-alt");

function whiteTextSwitching() { $("#header").hasClass("sticky") || ($(".owl-item.active").find(".banner-center-box").hasClass("text-white") ? ($("#header").addClass("text-white"), logo.attr("src", logoAlt), $(".header-btn").removeClass("hover-dark").addClass("hover-white")) : ($("#header").removeClass("text-white"), $(".header-btn").removeClass("hover-white").addClass("hover-dark"), logo.attr("src", logoSrc))), 1 == !$(".banner-slider").parents(".banner-parallax").length && ($(".banner-center-box").hasClass("text-white") ? ($("#header").addClass("text-white"), logo.attr("src", logoAlt), $(".header-btn").removeClass("hover-dark").addClass("hover-white")) : ($("#header").removeClass("text-white"), logo.attr("src", logoSrc), $(".header-btn").removeClass("hover-white").addClass("hover-dark"))) }

// *** Banner Slider *** //
function bannerSlider() {
	var bannerSlider = $( ".banner-slider > .owl-carousel" );

	bannerSlider.on("initialized.owl.carousel", function (e) { $("#header").hasClass("text-white") && (logo.attr("src", logoAlt), $(".header-btn").removeClass("hover-dark").addClass("hover-white")) });
	
	bannerSlider.owlCarousel({
		items: 1,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 800, // Sliding autoplay speed
		autoplayTimeout: 4000, // Autoplay interval timeout.
		dragEndSpeed: 600, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: true,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 10, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: true, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        // items : 1
		    },
		    480 : {
		        // items : 2
		    },
		    768 : {
		        // items : 3
		    }
		},
		autoHeight: true,
		autoWidth: false,
		animateOut: 'owl-fadeUp-out',
	    animateIn: 'owl-fadeUp-in',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 600,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 600 // Sliding speed by using dots
	});

	bannerSlider.on("translated.owl.carousel", function (e) { var n = bannerSlider.find(".owl-item.active .banner-center-box"); 0 != parseInt(n.children(".bs-elem").css("top"), 10) && setTimeout(function () { setTimeout(function () { n.children("h1.bs-elem").css("top", 80).animate({ opacity: 1 }, { duration: 400, queue: !1 }).animate({ top: 0 }, { duration: 400, easing: "easeOutExpo" }) }, 0), setTimeout(function () { n.children(".description.bs-elem").css("top", 80).animate({ opacity: 1 }, { duration: 400, queue: !1 }).animate({ top: 0 }, { duration: 400, easing: "easeOutExpo" }) }, 40), setTimeout(function () { n.children(".btn.bs-elem").css("top", 80).animate({ opacity: 1 }, { duration: 400, queue: !1 }).animate({ top: 0 }, { duration: 400, easing: "easeOutExpo" }) }, 80) }, 150), whiteTextSwitching() }), bannerSlider.on("drag.owl.carousel", function (e) { bannerSlider.find(".owl-item:not( .active )").find(".banner-center-box > .bs-elem").animate({ opacity: 0 }, 150).css("top", 1) }), bannerSlider.on("changed.owl.carousel", function (e) { bannerSlider.find(".banner-center-box > .bs-elem").animate({ opacity: 0 }, 150).css("top", 1), setTimeout(function () { whiteTextSwitching() }, 150) }), bannerSlider.on("resized.owl.carousel", function (e) { bannerSlider.find(".banner-center-box > .bs-elem").animate({ opacity: 1 }, 150) });
}


// *** Slider Image BG *** //
function sliderImageBG() {
	$( ".slider-img-bg .owl-item > li" ).each( function() {
		var $this = $( this ),
			imgSrc = $this.find( ".slide" ).children( "img" ).attr( "src" );
		$this.prepend( "<div class='bg-element'></div>" );
		var bgElement = $this.find( "> .bg-element" );
		bgElement.css( "background-image", "url('" + imgSrc + "')"  );
	});
}


// *** Optimize Slider Image BG *** //
function optimizeSliderImageBG() {
	$( ".slider-img-bg" ).each( function() {
		var imgHeight = $( this ).closest( "div" ).height();

		if ( $( ".banner-parallax" ).children( ".banner-slider" ).length > 0 ) {
			// $( ".banner-parallax, .banner-parallax .row > [class*='col-']" ).height( $( ".banner-slider" ).height() );
		}

		$( this ).find( ".owl-item > li .slide" ).children( "img" ).css({
			"display" : "none",
			"height"  : imgHeight,
			"opacity" : 0
		});
	});
}


// *** Slider Boxes Features *** //
function sliderBoxesServices() {
	var sliderBoxesServices = $( ".slider-boxes-services > .owl-carousel" );	

	sliderBoxesServices.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 5000, // Autoplay interval timeout.
		dragEndSpeed: 350, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 20, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    600 : {
		        items : 2
		    },
		    768 : {
		        items : 2
		    },
		    1024 : {
		        items : 3
		    }
		},
		autoHeight: true,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Slider Testimonials *** //
function sliderTestimonials() {
	var sliderTestimonials = $( ".slider-testimonials > .owl-carousel" );

	sliderTestimonials.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 5000, // Autoplay interval timeout.
		dragEndSpeed: 350, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 20, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    // 600 : {
		    //     items : 2
		    // },
		    768 : {
		        items : 2
		    },
		    1024 : {
		        items : 3
		    }
		},
		autoHeight: true,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Scroll To *** //
$(  ".scroll-to" ).on(  "click", function( e ) {
    e.preventDefault();
    var $anchor = $(this);      

    // scroll to specific anchor
    $(  "html, body" ).stop().animate({
        scrollTop: $( $anchor.attr( "href" ) ).offset().top
    } , 1200 , "easeInOutExpo" );
});    


// *** Form CTA Subscribe 2 *** //
var csNotifications = $( ".cs-notifications" );

function formCTASubscribe2() {
	$("#form-cta-subscribe-2").validate({
		// rules
		rules: {
			cs2Name: {
				required: true,
				minlength: 3
			},
			cs2Email: {
				required: true,
				email: true
			},
			cs2PhoneNum: {
				required: true,
				number: true,
				minlength: 12,
				maxlength: 12
			}
		}
	});

	var errorMsgData = csNotifications.data("error-msg"),
		errorMsgDefault = 'Please Follow Error Messages and Complete as Required',
		errorMsg = (errorMsgData) ? (errorMsgData) : errorMsgDefault;

	// Submit event
	$("#form-cta-subscribe-2").on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			var errorContent = '<i class="cs-error-icon fas fa-times"></i>' +
				errorMsg;
			cs2SubmitMSG(false, errorContent);
			cs2Error();
		} else {
			event.preventDefault();
			cs2SubmitForm();
		}
	});
}

function cs2SubmitForm() {
	// Initiate Variables With Form Content
	var name = $("#cs2Name").val(),
		email = $("#cs2Email").val(),
		phoneNum = $("#cs2PhoneNum").val();

	$.ajax({
		type: "POST",
		url: "./php/cs2-process.php",
		data: "cs2Name=" + name + "&cs2Email=" + email + "&cs2PhoneNum=" + phoneNum,
		success: function (text) {
			if (text == "success") {
				cs2Success();
			} else {
				cs2Error();
				cs2SubmitMSG(false, text);
			}
		}
	});
}

function cs2Success() { var i = csNotifications.data("success-msg"), s = i || "Thank you for your submission :)"; $("#form-cta-subscribe-2")[0].reset(), cs2SubmitMSG(!0, '<i class="cs-success-icon fas fa-check"></i>' + s), $(".cs-notifications-content").addClass("sent"), csNotifications.css("opacity", 0), csNotifications.slideDown(300).animate({ opacity: 1 }, 300).delay(5e3).slideUp(400), $("#form-cta-subscribe-2").hasClass("redirected") && setTimeout(function () { window.location.href = "thank-you-page.html" }, 3e3) } function cs2Error() { csNotifications.css("opacity", 0), csNotifications.slideDown(300).animate({ opacity: 1 }, 300), $(".cs-notifications-content").removeClass("sent") } function cs2SubmitMSG(i, s) { var n; n = "shake animated", csNotifications.delay(300).addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { $(this).removeClass("shake bounce animated") }), csNotifications.children(".cs-notifications-content").html(s) }


// *** Mailchimp Subscribe Form *** //
$( "#form-cta-subscribe-1" ).ajaxChimp({
    callback: mailchimpCallback,
    url: "https://themeforest.us12.list-manage.com/subscribe/post?u=271ee03ffa4f5e3888d79125e&amp;id=163f4114e2" //Replace this with your own mailchimp post URL.
});

function mailchimpCallback(n){var i=csNotifications;"success"===n.result?($("#form-cta-subscribe-1")[0].reset(),i.children(".cs-notifications-content").html('<i class="cs-success-icon fa fa-check"></i>'+n.msg).addClass("sent shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("shake bounce animated")}),i.css("opacity",0),i.slideDown(300).animate({opacity:1},300).delay(8e3).slideUp(400)):"error"===n.result&&(i.children(".cs-notifications-content").html('<i class="cs-error-icon fa fa-close"></i>'+n.msg).removeClass("sent").addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("shake bounce animated")}),i.css("opacity",0),i.slideDown(300).animate({opacity:1},300))}


// *** Popup Preview *** //
if ( $( ".popup-preview" ).length ) {
	$( "body" ).append( "<div class='popup-preview-overlay'>" );
}
$( ".popup-btn, .popup-bg, .popup-close" ).on( "click" , function( e ) {
	e.preventDefault();
	$( ".popup-preview" ).toggleClass( "viewed" );
	$( ".popup-preview-overlay" ).toggleClass( "viewed" );
	$( "html" ).toggleClass( "scroll-lock" );
} );


} )( jQuery );


function convertHex( hex , opacity ){
	// "use strict";
	// var r, g, b, result;
    hex = hex.replace( '#' , '' );
    r = parseInt( hex.substring( 0 , 2 ) , 16 );
    g = parseInt( hex.substring( 2 , 4 ) , 16 );
    b = parseInt( hex.substring( 4 , 6 ) , 16 );

    result = 'rgba('+r+', '+g+', '+b+', '+opacity+')';
    return result;
}
