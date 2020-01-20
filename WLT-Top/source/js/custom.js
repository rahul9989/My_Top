function selectDropdown() {
	$('select').niceSelect();
}

function multipleSelect() {
	if( $('.selectpicker').length >= 1) {
		$('.selectpicker').niceSelect('destroy');
		$('.selectpicker').selectpicker();
	}
}

function hideNotification() {
	$('.hideNotify').on('click', function() {
		$(this).parents('.alert').fadeOut();
	});
}

function selectDate() {
	if( $("#year").length == 1 ) {
		for(i = 1950; i <= 2018; i++) {
			document.querySelector("#year").innerHTML += "<option>" + i + "</option>"
		}
	}
}

function showNav() {
	var nav = ".header__top-nav--mobile-nav";
	var leftNav = ".middle-part__left-nav";
	var navclose = ".mobile-nav-close";

	$(nav).on('click', function() {
		$(leftNav).css('width','14.375rem');
		//e.stopPropagation();
	});

	$(navclose).on('click', function() {
		$(leftNav).css('width','0');
	});

	// $('body').on('click', function() {
	// 	$(leftNav).css('width','0px');
	// })
}

// function leftNavScroll() {

// 	$(window).scroll(function() {
		
// 		var leftNav = ".middle-part__left-nav";

// 		if($(this).scrollTop()) {
// 			$(leftNav).addClass("goTop");
// 		} else {
// 			$(leftNav).removeClass("goTop");
// 		}
// 	});
// }

function closeNav() {
	var leftNav = ".middle-part__left-nav";

	if( $(window).width() < 768 ) {
		$('.panel-heading').on('click', function() {
			$(leftNav).css('width','0');
		})
	} else {
		$('.panel-heading').on('click', function() {
			$(leftNav).css('width','14.375rem');
		})
	}

}

// close pannel body a

// function closeNav() {
// 	var leftNav = ".middle-part__left-nav";

// 	if( $(window).width() < 768 ) {
// 		$('.panel-body a').on('click', function() {
// 			$(leftNav).css('width','0');
// 		})
// 	} else {
// 		$('.panel-body a').on('click', function() {
// 			$(leftNav).css('width','14.375rem');
// 		})
// 	}

// }

function datePicker() {
	if($('.datetimepicker').length >= 1){
		$('.datetimepicker').datetimepicker({
	        format: 'DD/MM/YY'
	   	});
	}
}

function addActive() {
	var findAnchor = $('.panel-body a'); 

	findAnchor.on('click', function() {
		if ( findAnchor.siblings().hasClass('active') ) {
			findAnchor.siblings().removeClass('active');
		}
		$(this).addClass('active');
	});
}

function activeClass() {
	var findheadAnchor = $('.panel-heading > a');
	var panelHeadingAnchor = $('.panel-heading').children();

	findheadAnchor.on('click', function() {
		if( panelHeadingAnchor.hasClass('active') ) {
			panelHeadingAnchor.removeClass('active');
		}
		$(this).addClass('active');
	});
}

function homePartHeight() {
	var homeParent = $('.home-section').parents('.middle-part__tab');
	homeParent.addClass('home-section-tab');
}

function errorPage() {
	var errorItem = $('.error-page').parents('.middle-part__tab');
	errorItem.css('margin-left', '0');
}

function datetableResponsive() {
	var table = $('#table_id').DataTable( {
        responsive: true
    } );
}

function listToolTip() {
	$('[data-toggle="tooltip"]').tooltip()
}

// Not allow Special Character
function specialCharacter() {

	//javascript regex for finding special characters
	// /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi

	$('.restict-special').keyup(function()
	{
		var yourInput = $(this).val();
		re = /[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi;
		var isSplChar = re.test(yourInput);
		if(isSplChar)
		{
			var no_spl_char = yourInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '');
			$(this).val(no_spl_char);
		}
	});
}

function menuActive(mainMenu, childMenu) {
    $('.panel-heading a').each(function () {
        if ($(this).text() == mainMenu.trim()) { // main menu name
            $(this).addClass('active');
            $(this).removeClass('collapsed');
            $(this).attr("aria-expanded", "true");
            $(this).parents('.panel-heading').siblings('#collapseFour').addClass('in');
            $(this).parents('.panel-heading').siblings('#collapseFour').children('.panel-body').children('a').each(function () {
                if ($(this).text() == childMenu.trim()) { // child menu name
                    $(this).addClass('active');
                }
            })
        }
    });
}


$(document).ready(function() {
	selectDropdown();
	showNav();
	datePicker();
	addActive();
	activeClass();
	multipleSelect();
	hideNotification();
	homePartHeight();
	errorPage();
	datetableResponsive();
	listToolTip();
	closeNav();
	specialCharacter();
	
});

$(window).resize( function () {
	closeNav();
});

window.onload = function() {
	selectDate();
}

