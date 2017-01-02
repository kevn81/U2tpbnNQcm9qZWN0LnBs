var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
							window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;

function loadImage(src , onload) {
    var img = new Image();

    img.onload = onload;
	
	img.onerror = function( source ){
		source.src = 'https://skinsproject.pl/images/avatar.png';
		
		return true;
	}
	
	img.src = src;

    return img;
}

function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

function resizedw(){
	
	$( '#itemsMain > div:nth-child( 2 ) > input' ).css( 'width' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px ' );
	$( '#itemsMain > div:nth-child( 2 ) > input' ).css( 'height' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px '  );
	$( '#itemsMain > div:nth-child( 2 ) > input' ).css( 'margin-top' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.225 ) + 'px' );
	
	$( '#playersMain > div:nth-child( 2 ) > input' ).css( 'width' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px ' );
	$( '#playersMain > div:nth-child( 2 ) > input' ).css( 'height' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px '  );
	$( '#playersMain > div:nth-child( 2 ) > input' ).css( 'margin-top' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.225 ) + 'px' );
	
	$( '#pulaMainStats' ).css( 'height' , $( '#pulaMainStats' ).width() );
	$( '#pulaMainStats' ).css( 'line-height' , $( '#pulaMainStats' ).width() + 'px' );
	
	canvas.width = $( canvas ).width();
	canvasHigh.width = $( canvasHigh ).width();
	
	if( currentSpeed <= 0.0 && !slowDownInterval && !moveCanvasInterval && !drawGameInterval && !drawStopInterval ){
		currentCanvasPosition = globalWinnerPosition - ( ( canvas.width / 2.0 ) - 45.0 );
		
		drawGameSecond();
	}
	
	if( currentSpeedHigh <= 0.0 && !slowDownIntervalHigh && !moveCanvasIntervalHigh && !drawGameIntervalHigh && !drawStopIntervalHigh ){
		currentCanvasPositionHigh = globalWinnerPositionHigh - ( ( canvasHigh.width / 2.0 ) - 45.0 );
		
		drawGameSecondHigh();
	}
	
	var position = $( '#inputMessage' ).offset();
			
	$( '#ember' ).offset( { top: position.top - $( '#ember' ).height() , left: position.left } );
	$( '#ember' ).width( $( '#inputMessage' ).width() );
	
	if( currentMenuState == 1 ){
		var widthSidebar = parseFloat( $( '.col-sidebar-left' ).width() ),
			marginLeft = parseFloat( $( '.col-sidebar-left' ).css( 'margin-left' ).replace( 'px', '' ) );
		
		$("#sidebarButton").animate({
			marginLeft: '+' + ( widthSidebar + 111 ) + 'px'
		}, 500);
		
		var offsetText = 0;
		
		if( $( '#unlimitedPotDiv .duzy-tekst' ).offset().top != 0 ){
			offsetText = $( '#unlimitedPotDiv .duzy-tekst' ).offset().top;
		}
		else if( $( '#highPotDiv .duzy-tekst' ).offset().top != 0 ){
			offsetText = $( '#highPotDiv .duzy-tekst' ).offset().top;
		}
		
		var headerHeight = $( '#header' ).height(),
			containterHeight = $( '#mainFrame' ).height();
		
		$( '#sidebarButton' ).css( 'top' , offsetText + 'px' );
		
		$( '.col-sidebar-left' ).css( 'top' , headerHeight + 'px' );
		$( '.col-sidebar-left' ).css( 'height' , ( containterHeight + 36 ) + 'px' );
	}
	else{
		var offsetText = 0,
			widthSidebar = parseFloat( $( '.col-sidebar-left' ).width() );
			
		var offsetText = 0;
		
		if( $( '#unlimitedPotDiv .duzy-tekst' ).offset().top != 0 ){
			offsetText = $( '#unlimitedPotDiv .duzy-tekst' ).offset().top;
		}
		else if( $( '#highPotDiv .duzy-tekst' ).offset().top != 0 ){
			offsetText = $( '#highPotDiv .duzy-tekst' ).offset().top;
		}
		
		var headerHeight = $( '#header' ).height(),
			containterHeight = $( '#mainFrame' ).height();
		
		$( '#sidebarButton' ).css( 'top' , offsetText + 'px' );
		
		$( '.col-sidebar-left' ).css( 'top' , headerHeight + 'px' );
		$( '.col-sidebar-left' ).css( 'margin-left' , '-' + ( widthSidebar ) + 'px' );
		$( '.col-sidebar-left' ).css( 'height' , ( containterHeight + 36 ) + 'px' );
		
		$( '#sidebarButton' ).css( 'margin-left' , '111px' );
	}
	
	$( '#backdrop' ).height( $( 'body' ).outerHeight() );
	$( '#backdrop' ).width( $( '#rotator' ).width() );
}

var doit ,
	visibilityHidden = false;
	
var hiddenValue, visibilityChange; 

if (typeof document.hidden !== "undefined") {
  hiddenValue = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hiddenValue = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hiddenValue = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hiddenValue = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}

window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizedw, 100);
};

$(document).ready(function(){
	canvas = document.getElementById("canvas");
	
	canvasHigh = document.getElementById("canvasHigh");
	
	visibilityHidden = document[ hiddenValue ];
	
	document.addEventListener( visibilityChange , function(){
		visibilityHidden = document[ hiddenValue ];
	});
	
	var offsetText = $( '.duzy-tekst' ).offset().top,
		widthSidebar = parseFloat( $( '.col-sidebar-left' ).width() );
		
	var headerHeight = $( '#header' ).height(),
		containterHeight = $( '#mainFrame' ).height();
	
	$( '#sidebarButton' ).css( 'top' , offsetText + 'px' );
	
	$( '.col-sidebar-left' ).css( 'top' , headerHeight + 'px' );
	$( '.col-sidebar-left' ).css( 'margin-left' , '-' + ( widthSidebar ) + 'px' );
	$( '.col-sidebar-left' ).css( 'height' , containterHeight + 'px' );
	
	$( '#sidebarButton' ).click( function(){
		var widthSidebar = parseFloat( $( '.col-sidebar-left' ).width() ),
			marginLeft = parseFloat( $( '.col-sidebar-left' ).css( 'margin-left' ).replace( 'px', '' ) );
		
		if( currentMenuState ){
			currentMenuState = 0;
			
			$(".col-sidebar-left").animate({
				marginLeft: '-=' + widthSidebar + 'px'
			}, 500);
			
			$("#sidebarButton").animate({
				marginLeft: '-=' + ( widthSidebar - 5 ) + 'px'
			}, 500);
		}
		else{
			currentMenuState = 1;
			
			$(".col-sidebar-left").animate({
				marginLeft: '+=' + ( -marginLeft ) + 'px'
			}, 500);
			
			$("#sidebarButton").animate({
				marginLeft: '+=' + ( widthSidebar - 5 ) + 'px'
			}, 500);
		}
	});
	
	var soundCookie = $.cookie('sound'),
		desktopNotificationCookie= $.cookie('desktop'),
		cookieStyle = $.cookie( 'style' );
		
	if( cookieStyle == 'on' ){
		$( '#styleButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/style-on.png');
			
		$.ajax({
			url: 'https://skinsproject.pl/css/style-dark.css',
			dataType: 'text',
			success: function(data) {
				$('<style id = "styleDark" type="text/css">\n' + data + '</style>').appendTo("head");                    
				
				$( '#inputMessage' ).css( 'background-image' , "url( 'https://skinsproject.pl/images/bialy.png')");
				
				$( '#styleNormal' ).remove();
			}                  
		});
		
		currentStyle = 1;
	}
	
	if ( soundCookie == undefined || soundCookie == 'on') {
		audioPlay = true;
		
		$( '#soundButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/on.png' );
	} else {
		audioPlay = false;
		
		$( '#soundButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/off.png' );
	}
	
	if( desktopNotificationCookie == 'on' ){
		desktopNotification = true;
	}
	else{
		desktopNotification = false;
	}
	
	$( '#aboutUsHeader' ).click( function( event ){
		event.preventDefault();
		
		showAbout();
	});
	
	$( '#regulationsHeader' ).click( function( event ){
		event.preventDefault();
		
		showRegulations();
	});
	
	$( '#settingsHeader' ).click( function( event ){
		event.preventDefault();
		
		showSettings();
	});
	
	$( '#settingsHeaderAlert' ).click( function( event ){
		event.preventDefault();
		
		showSettings();
	});
	
	$( '#settingsHeaderModal' ).click( function( event ){
		event.preventDefault();
		
		$('#winnerModalTradeLink').modal('hide');

		showSettings();
	});
	
	$( '#rankingHeader' ).click( function( event ){
		event.preventDefault();
		
		showRanking();
	});
	
	$( '#historyHeader' ).click( function( event ){
		event.preventDefault();
		
		showHistory();
	});
	
	$( '#myWinsHeader' ).click( function( event ){
		event.preventDefault();
		
		showMyWins();
	});
	
	$( '#langEn' ).click( function( event ){
		
		$.cookie( 'lang', 'en', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
		
		event.preventDefault();
		
		location.href = 'https://skinsproject.pl/en';
	});
	
	$( '#langPl' ).click( function( event ){
		
		$.cookie( 'lang', 'pl', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
		
		event.preventDefault();
		
		location.href = 'https://skinsproject.pl';
	});
	
	$( '#accountHeader' ).click( function( event ){
		event.preventDefault();
		
		showReflinks();
	});

	$( '#historySearch' ).keyup( function( event ){
		
		if( xhrHistory ){
			xhrHistory.abort();
		}
		
		var url = 'https://skinsproject.pl/getHistory.php';
		
		if( currentJackpotMode == 1 ){
			url = 'https://skinsproject.pl/getHistoryHigh.php'
		}
		xhrHistory = $.ajax({
			type: "POST",
			url: url,
			data: { id : $( '#historySearch' ).val() },
			dataType: 'text',
			success: function(data) {
				$( '#historyModalBody' ).html( data );
				
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
	});
	
	$( '#switch-modal-new' ).prop('checked', audioPlay );
	$( '#switch-modal-pulpit-new' ).prop('checked', desktopNotification );
	$( '#switch-modal-steam-profile' ).prop('checked', steamProfilePublic );
	
	$( '#switch-modal-new' ).bootstrapSwitch();
	$( '#switch-modal-pulpit-new' ).bootstrapSwitch();
	$( '#switch-modal-steam-profile' ).bootstrapSwitch();
	
	$( '#switch-modal-new' ).on('switchChange.bootstrapSwitch', function(event, state) {
		if( state ){
			audioPlay = true;
			
			$.cookie( 'sound', 'on', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
			
			$( '#soundButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/on.png' );
		}
		else{
			audioPlay = false;
			
			$.cookie( 'sound', 'off', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
			
			$( '#soundButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/off.png' );
		}
	});
	
	$( '#switch-modal-pulpit-new' ).on('switchChange.bootstrapSwitch', function(event, state) {
		if( state ){
			if ( Notification.permission !== 'denied' ){
				  Notification.requestPermission();
			}
			
			desktopNotification = true;
			
			$.cookie( 'desktop', 'on', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
		}
		else{
			desktopNotification = false;
			
			$.cookie( 'desktop', 'off', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
		}
	});
	
	$( '#switch-modal-steam-profile' ).on('switchChange.bootstrapSwitch', function(event, state) {
		if( state ){
			$.post( "https://skinsproject.pl/setPublicSteam.php", { active: 0 } );
		}
		else{
			$.post( "https://skinsproject.pl/setPublicSteam.php", { active: 1 } );
		}
	});
	
	$( "#checkFair" ).click(function() {
		var t = $("#hashInput").val(),
			a = $("#saltInput").val(),
			n = $("#percentageInput").val(),
			i = $("#ticketsInput").val();
		if (n = n.replace(/[^0-9.]/g, ""), $(this).find("#percentage").val(n), !a || !n) return alert( 'Fill in all fields' );
		var r = md5(a + ":" + n).toString();
		if (!t) return $(this).find("#hashInput").val(r), alert( 'Give hash round' );
		if (t.toLowerCase() != r.toLowerCase()) return alert( 'Hash does not agree with the specified salt and winning percentage' );
		if (!i) return alert( 'Hash agrees with salt and winning percentage' );
		if (n = parseFloat(n), i = i.replace(/[^0-9]/g, ""), $(this).find("#ticketsInput").val(i), i) {
			i = parseFloat(i);
			var h = Math.ceil( i * (n / 100.0));
			alert( 'Hash agrees with salt and winning percentage!\n\Winning Ticket: ' + h + ' / ' + i);
		}
	});
	
	if( canvas ){
		canvas.width = $( canvas ).width();
	
		context = canvas.getContext("2d");
	}
	
	if( canvasHigh ){
		canvasHigh.width = $( canvasHigh ).width();
	
		contextHigh = canvasHigh.getContext("2d");
	}
	
	
	$('.carousel').carousel();
	
	$( '#linkSound' ).click( function( event ){
		event.preventDefault();
		
		if( audioPlay ){
			audioPlay = false;
			
			$.cookie( 'sound', 'off', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
			
			$( '#soundButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/off.png' );
			
			$( '#switch-modal-new' ).bootstrapSwitch( 'toggleState' , false );
		}
		else{
			audioPlay = true;
			
			$.cookie( 'sound', 'on', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
			
			$( '#soundButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/on.png' );
			
			$( '#switch-modal-new' ).bootstrapSwitch( 'toggleState' , true );
		}
		
		return false;
	});
	
	$( '#linkStyle' ).click( function( event ){
		if( currentStyle == 0 ){
			$( '#styleButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/style-on.png');
			
			$.ajax({
				url: 'https://skinsproject.pl/css/style-dark.css',
				dataType: 'text',
				success: function(data) {
					$('<style id = "styleDark" type="text/css">\n' + data + '</style>').appendTo("head");                    
					
					$( '#inputMessage' ).css( 'background-image' , "url( 'https://skinsproject.pl/images/bialy.png')");

					$( '#styleNormal' ).remove();
				}                  
			});
			
			$.cookie( 'style', 'on', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
			
			event.preventDefault();
			
			currentStyle = 1;
		}
		else{
			$( '#styleButtonChange' ).attr( 'src' , 'https://skinsproject.pl/images/style-off.png');
			
			$.ajax({
				url: 'https://skinsproject.pl/css/style.css',
				dataType: 'text',
				success: function(data) {
					$('<style id = "styleNormal" type="text/css">\n' + data + '</style>').appendTo("head");                    
					
					$( '#inputMessage' ).css( 'background-image' , "url( 'https://skinsproject.pl/images/emoticon.png')");

					$( '#styleDark' ).remove();
				}                  
			});
			
			$.cookie( 'style', 'off', { expires: 365 , path: '/' ,  domain: '.skinsproject.pl' } );
			
			event.preventDefault();
			
			currentStyle = 0;
		}
	});
	
	$( document ).on( 'click' , '.nextPageHistory' , function( event ){
		
		var element = event.target;
		
		var leftPos = $( $( element ).parent().find( '.historyItems' ) ).scrollLeft();
		
		if( $( element ).parent().find( '.historyItems' )[ 0 ].scrollWidth > $( element ).parent().find( '.historyItems' )[ 0 ].clientWidth ){
			$( element ).parent().find( '.backPageHistory' ).css( 'visibility' , 'visible' );
		}
		
		$( $( element ).parent().find( '.historyItems' ) ).animate({scrollLeft: leftPos + $( element ).parent().find( '.historyItems' ).width() }, 800);
	});
	
	$( document ).on( 'click' , '.backPageHistory' , function( event ){
		
		var element = event.target;
		
		var leftPos = $( $( element ).parent().find( '.historyItems' ) ).scrollLeft();
		
		if( leftPos - $( element ).parent().find( '.historyItems' ).width() <= 0 ){
			$( element ).css( 'visibility' , 'hidden' );
		}
		
		$( $( element ).parent().find( '.historyItems' ) ).animate({scrollLeft: leftPos - $( element ).parent().find( '.historyItems' ).width() }, 800);
	});
	
	if( window.location.hash == '#high' ){
		currentJackpotMode = 1;
		
		$( '#highPotDiv' ).css( 'display' , 'block' );
		
		$( '#unlimitedPotDiv' ).css( 'display' , 'none' );
		
		canvas.width = $( canvas ).width();
		canvasHigh.width = $( canvasHigh ).width();
		
		if( currentSpeed <= 0.0 && !slowDownInterval && !moveCanvasInterval && !drawGameInterval && !drawStopInterval ){
			currentCanvasPosition = globalWinnerPosition - ( ( canvas.width / 2.0 ) - 45.0 );
			
			drawGameSecond();
		}
		
		if( currentSpeedHigh <= 0.0 && !slowDownIntervalHigh && !moveCanvasIntervalHigh && !drawGameIntervalHigh && !drawStopIntervalHigh ){
			currentCanvasPositionHigh = globalWinnerPositionHigh - ( ( canvasHigh.width / 2.0 ) - 45.0 );
			
			drawGameSecondHigh();
		}
		
		var amountPot = $( '#highPotDiv #currentPrize' ).text();
		
		$(document).prop('title', 'SkinsProject.pl | ' + amountPot + '$ | Play and win new skins for CS:GO ! - Jackpot CS:GO' );
	}
	
	$( '#highPotDiv .betMode' ).click( function( event ){
		event.preventDefault();
		
		currentJackpotMode = 0;
		
		$( '#highPotDiv' ).css( 'display' , 'none' );
		
		$( '#unlimitedPotDiv' ).css( 'display' , 'block' );
		
		canvas.width = $( canvas ).width();
		canvasHigh.width = $( canvasHigh ).width();
		
		if( currentSpeed <= 0.0 && !slowDownInterval && !moveCanvasInterval && !drawGameInterval && !drawStopInterval ){
			currentCanvasPosition = globalWinnerPosition - ( ( canvas.width / 2.0 ) - 45.0 );
			
			drawGameSecond();
		}
		
		if( currentSpeedHigh <= 0.0 && !slowDownIntervalHigh && !moveCanvasIntervalHigh && !drawGameIntervalHigh && !drawStopIntervalHigh ){
			currentCanvasPositionHigh = globalWinnerPositionHigh - ( ( canvasHigh.width / 2.0 ) - 45.0 );
			
			drawGameSecondHigh();
		}
		
		var amountPot = $( '#unlimitedPotDiv #currentPrize' ).text();
		
		$(document).prop('title', 'SkinsProject.pl | ' + amountPot + '$ | Play and win new skins for CS:GO ! - Jackpot CS:GO' );
		
		window.history.replaceState( null , null , '/en/' );
		
		return false;
	});
	
	$( '#unlimitedPotDiv .betMode' ).click( function( event ){
		event.preventDefault();
		
		currentJackpotMode = 1;
		
		$( '#highPotDiv' ).css( 'display' , 'block' );
		
		$( '#unlimitedPotDiv' ).css( 'display' , 'none' );
		
		canvas.width = $( canvas ).width();
		canvasHigh.width = $( canvasHigh ).width();
		
		if( currentSpeed <= 0.0 && !slowDownInterval && !moveCanvasInterval && !drawGameInterval && !drawStopInterval ){
			currentCanvasPosition = globalWinnerPosition - ( ( canvas.width / 2.0 ) - 45.0 );
			
			drawGameSecond();
		}
		
		if( currentSpeedHigh <= 0.0 && !slowDownIntervalHigh && !moveCanvasIntervalHigh && !drawGameIntervalHigh && !drawStopIntervalHigh ){
			currentCanvasPositionHigh = globalWinnerPositionHigh - ( ( canvasHigh.width / 2.0 ) - 45.0 );
			
			drawGameSecondHigh();
		}
		
		var amountPot = $( '#highPotDiv #currentPrize' ).text();
		
		$(document).prop('title', 'SkinsProject.pl | ' + amountPot + '$ | Play and win new skins for CS:GO ! - Jackpot CS:GO' );
		
		window.history.replaceState( null , null , '/en/#high' );
		
		return false;
	});
	
	if( showMenu ){
		setTimeout( function(){ showWelcome(); } , 1500 );
	}
	
	if( !showMenu && showGiveaway ){
		setTimeout( function(){ showGiveawayModal(); } , 1500 );
	}
	
    $('[data-toggle="tooltip"]').tooltip();
	
	$( '#pulaMainStats' ).css( 'height' , $( '#pulaMainStats' ).width() + 'px');
	$( '#pulaMainStats' ).css( 'line-height' , $( '#pulaMainStats' ).width() + 'px' );
	
	$( '#itemsMain > div:nth-child( 2 ) > input' ).css( 'width' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px ' );
	$( '#itemsMain > div:nth-child( 2 ) > input' ).css( 'height' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px '  );
	$( '#itemsMain > div:nth-child( 2 ) > input' ).css( 'margin-top' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.225 ) + 'px' );
	
	$( '#playersMain > div:nth-child( 2 ) > input' ).css( 'width' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px ' );
	$( '#playersMain > div:nth-child( 2 ) > input' ).css( 'height' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.52 ) + 'px '  );
	$( '#playersMain > div:nth-child( 2 ) > input' ).css( 'margin-top' , ( parseFloat( $( '#pulaMainStats' ).width() ) * 0.225 ) + 'px' );

	var socketIO = io( ':8303' , {secure: true} );

	var socketIOHigh = io( ':8353' , {secure: true} );
	
	socketIOHigh.once('connect', function(){
		$( '#botStatusCircle' ).removeClass( 'kolo-czerwone' ).addClass( 'kolo-zielone' );
		$( '#botStatusText' ).removeClass( 'czerwone' ).addClass( 'zielone' );
		
		socketIOHigh.on( 'new-offer' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoNewOffer" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Trwa przetwarzanie Twojej oferty</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on( 'declined-offer' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala odrzucona</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on( 'declined-offer-their' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala odrzucona</br>Poniewaz nie posiadasz mobilnego tokena steam lub nie jest on wlaczony przez 7 dni</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on( 'declined-offer-not' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala odrzucona</br>Poniewaz wyslales skiny z innej gry</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on( 'declined-offer-max' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala odrzucona</br>Poniewaz przekroczyles maksymalna liczbe skinów ( 25 )</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on( 'declined-offer-inventory' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala odrzucona</br>Poniewaz twój ekwipunek jest prywatny</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on( 'declined-offer-souvenir' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala odrzucona</br>Poniewaz zawierala souveniry</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on( 'accepted-offer' , function(){
			$( '#highPotDiv #infoNewOffer' ).remove();
			$( '#highPotDiv #infoOfferDeclined' ).remove();
			$( '#highPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferAccept" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala zaakceptowana</div>' ).insertAfter( '#highPotDiv #playersAmount' );
		});
		
		socketIOHigh.on('close', function () {
			$( '#botStatusCircle' ).removeClass( 'kolo-zielone' ).addClass( 'kolo-czerwone' );
			$( '#botStatusText' ).removeClass( 'zielone' ).addClass( 'czerwone' );
		});
		
		socketIOHigh.on('disconnect', function () {
			$( '#botStatusCircle' ).removeClass( 'kolo-zielone' ).addClass( 'kolo-czerwone' );
			$( '#botStatusText' ).removeClass( 'zielone' ).addClass( 'czerwone' );
		});
		
		socketIOHigh.on('reconnect', function () {
			$( '#botStatusCircle' ).removeClass( 'kolo-czerwone' ).addClass( 'kolo-zielone' );
			$( '#botStatusText' ).removeClass( 'czerwone' ).addClass( 'zielone' );
		});
		
		socketIOHigh.on('timer', function(data){
			
			var min = Math.floor(data.timer/60);
			var sec = data.timer%60;
																								
			var minute = min.toString();
			var second = '';
			
			if ( sec < 10 ) {
				second = '0' + sec.toString();
			}
			else{
				second = sec.toString();
			}
			
			if( min == 0 && sec == 0 ){
				$( '#highPotDiv #infoNewOffer' ).remove();
				$( '#highPotDiv #infoOfferDeclined' ).remove();
				$( '#highPotDiv #infoOfferAccept' ).remove();
				
				$( '#highPotDiv #infoEnd' ).remove();
				
				if( parseInt( data.amount ) != 0 ){
					if( parseInt( data.amount ) == 1 ){
						$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Akceptowanie ostatnich Ofert - ' + data.amount + ' Oferta</div>' ).insertAfter( '#highPotDiv #playersAmount' );
					}
					else if( parseInt( data.amount ) <= 4 ){
						$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Akceptowanie ostatnich Ofert - ' + data.amount + ' Oferty</div>' ).insertAfter( '#highPotDiv #playersAmount' );
					}
					else{
						$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Akceptowanie ostatnich Ofert - ' + data.amount + ' Ofert</div>' ).insertAfter( '#highPotDiv #playersAmount' );
					}
				}
				else{
					$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Akceptowanie ostatnich Ofert</div>' ).insertAfter( '#highPotDiv #playersAmount' );
				}
			}
			
			$('#highPotDiv #timer').text( '0' + minute + ':' + second );
  		});
		
		socketIOHigh.on( 'mainData' , function(data){
			if( data.jackpot == null ){
				return;
			}
			
			currentRoundHigh = data.gamenumber;
			
			$('#highPotDiv #currentPrize').text( ( data.jackpot ).toFixed( 2 ) + '$' );
			$('#highPotDiv #RoundNumber1').text( 'Round: #' + data.gamenumber);
			
			if( gameNumberWrapHigh != data.gamenumber && gameNumberWrapHigh != 0 ){
				gameNumberWrapHigh = 0;
				
				showWinnerTrade( offerIdWrapHigh , errorCodeWrapHigh );
				
				offerIdWrapHigh = 0;
				errorCodeWrapHigh = 0;
			}
		});
		
		socketIOHigh.on('end-game', function(data){
			setTimeout( function(){
				winnerIdHigh = data.id;
				winnerIdEncodeHigh = data.idEncode;
				winningTicketHigh = data.ticket;
				
				$( '#highPotDiv #infoNewOffer' ).remove();
				$( '#highPotDiv #infoOfferDeclined' ).remove();
				$( '#highPotDiv #infoOfferAccept' ).remove();
				
				$( '#highPotDiv #infoEnd' ).remove();
				
				currentCanvasPositionHigh = 0;
				accelerationHigh = 0;
				
				clearInterval( slowDownIntervalHigh );
				clearInterval( moveCanvasIntervalHigh );
				
				if( drawStopIntervalHigh ){
					cancelAnimationFrame( drawStopIntervalHigh );
				}
				
				if( drawGameIntervalHigh ){
					cancelAnimationFrame( drawGameIntervalHigh );
				}
				
				drawGameIntervalHigh = 0;
				drawStopIntervalHigh = 0;
				
				moveGameHigh();	
				
				$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Wybieranie zwyciezcy</div>' ).insertAfter( '#highPotDiv #playersAmount' );
			} , 500 );
		});
		
		socketIOHigh.on('playersUnique', function(data){
			var playerSkins = {};
			var sortItems = [];
			var totalprize = 0;
			
			var playerAmount = 0;
			var itemsAmount = 0;
			
			var itemsDraw = [];
			
			playerDataHigh = data.players;
			
			playerAmount = Object.keys( data.players ).length;
		
			for(var y = 0; y < data.items.length; y++)
			{
				data.items[y].id = data.items[y].id.toString();
				
				if(typeof playerSkins[data.items[y].id] == 'undefined')
				{
					playerSkins[data.items[y].id] = 0;
				}
				
				itemsAmount++;
				
				playerSkins[data.items[y].id] = playerSkins[data.items[y].id] + 1;
				
				totalprize += parseFloat(data.items[y].cost);
				
				sortItems.push({'name':data.items[y].itemname.replace(/['"]+/g, ''),'price':data.items[y].cost,'classid' : data.items[ y ].classid , 'user':data.items[y].user,'avatar':data.items[y].ava,'userid':data.items[y].id , 'color': data.items[y].color });
				
				if( typeof itemsDraw[ data.items[ y ].classid + '_' + data.items[ y ].id ] == 'undefined' ){
					itemsDraw[ data.items[ y ].classid + '_' + data.items[ y ].id ] = 1;
				}
				else{
					itemsDraw[ data.items[ y ].classid + '_' + data.items[ y ].id ]++;
				}
			}
			
			if( playerAmount == 0 ){
				$( '#highPotDiv #infoNewOffer' ).remove();
				$( '#highPotDiv #infoOfferDeclined' ).remove();
				$( '#highPotDiv #infoOfferAccept' ).remove();
				
				$( '#highPotDiv #timer' ).text( '02:00' );
				
				$( '#highPotDiv #infoEnd' ).remove();
				
				imagesToDrawHigh = [];
				
				winnerIdHigh = 'none';
				winnerIdEncodeHigh = 'none';
				
				winningTicketHigh = 0;
				
				canvasTmpPositionHigh = 0;
				
				$('#highPotDiv #WinTicket').html( 'Winning ticket: -' );
				
				if( nickNameSkins ){
					$( '#highPotDiv #userInfoText' ).html( 'You\'ve deposited -  0 ( of 25) item(s).Probably to win 0%.<br>Min bet 2.00$ <b>Bonus to winning +5%</b>' );
				}
				else{
					$( '#highPotDiv #userInfoText' ).html( 'You\'ve deposited -  0 ( of 25) item(s).Probably to win 0%.<br>Min bet 2.00$' );
				}
				
				clearInterval( slowDownIntervalHigh );
				clearInterval( moveCanvasIntervalHigh );
				
				if( drawStopIntervalHigh ){
					cancelAnimationFrame( drawStopIntervalHigh );
				}
				
				if( drawGameIntervalHigh ){
					cancelAnimationFrame( drawGameIntervalHigh );
				}
				
				drawGameIntervalHigh = 0;
				drawStopIntervalHigh = 0;
				
				canvasTmpPositionHigh = 0;
				
				if( canvasTwo ){
					clearInterval( window.launchInterval );
					clearInterval( window.loopInterval );
				
					window.canvasTwo.remove();
				}
				
				if( visibilityHidden ){
					$( '#highPotDiv #playersList' ).html('');
					
					$( '#highPotDiv #item_list' ).html( '' );
				}
				else{
					var numPots = $( '#highPotDiv #item_list > .itemPot' ).length;
					
					$( '#highPotDiv #item_list > .itemPot' ).fadeOut( 400 , function(){
						if( --numPots > 0 ) return;
						
						$( '#highPotDiv #item_list' ).html( '' );
					});
					
					var numRows = $( '#highPotDiv #highPotDiv.t_row[id]' ).length;
				
					$( '#highPotDiv .t_row[id]' ).fadeOut( 400 , function(){
						if( --numRows > 0 ) return;
						
						$( '#highPotDiv #playersList' ).html('');
					});
				}
				
				drawStopStartHigh();
			}
			else{
				$( '#highPotDiv #playersList' ).html('');
					
				$( '#highPotDiv #item_list' ).html( '' );
				
				imagesToDrawHigh = [];
				
				if( !drawGameIntervalHigh ){
					clearInterval( slowDownIntervalHigh );
					clearInterval( moveCanvasIntervalHigh );
					
					if( drawStopIntervalHigh ){
						cancelAnimationFrame( drawStopIntervalHigh );
					}
					
					if( drawGameIntervalHigh ){
						cancelAnimationFrame( drawGameIntervalHigh );
					}
					
					drawGameIntervalHigh = 0;
					drawStopIntervalHigh = 0;
					
					drawGameStartHigh();
				}
			}
			
			if( animationSkinAmountHigh ){
				animationSkinAmountHigh.stop();
			}
			
			if( visibilityHidden ){
				animationSkinAmountHigh = 0;
				
				$( '#highPotDiv #skinsAmount' ).text( itemsAmount );
			}
			else{
				var currentSkinsAmount = parseInt( $( '#highPotDiv #skinsAmount' ).text() );
				
				animationSkinAmountHigh = $({countNum: currentSkinsAmount}).animate({countNum: itemsAmount }, {
				  duration: 1500,
				  easing:'linear',
				  step: function() {
					$( '#highPotDiv #skinsAmount' ).text( Math.floor(this.countNum));
				  },
				  complete: function() {
					$( '#highPotDiv #skinsAmount' ).text( itemsAmount );
				  }
				});
			}
			
			$( '#highPotDiv #playersAmount' ).text( playerAmount );
			
			sortItems.sort(function(a, b) { return parseFloat(b.price) - parseFloat(a.price); });
			
			sortItems.forEach(function(skin)
			{
				var dataName = skin.name,
					fullName = skin.name;
				
				var skinCondition = '';
				
				if( dataName.indexOf( 'Factory New' ) != -1 ){
					skinCondition = 'Factory New';
					
					dataName = dataName.replace( 'Factory New' , '' );
				}
				else if( dataName.indexOf( 'Minimal Wear' ) != -1 ){
					skinCondition = 'Minimal Wear';
					
					dataName = dataName.replace( 'Minimal Wear' , '' );
				}
				else if( dataName.indexOf( 'Field-Tested' ) != -1 ){
					skinCondition = 'Field-Tested';
					
					dataName = dataName.replace( 'Field-Tested' , '' );
				}
				else if( dataName.indexOf( 'Well-Worn' ) != -1 ){
					skinCondition = 'Well-Worn';
					
					dataName = dataName.replace( 'Well-Worn' , '' );
				}
				else if( dataName.indexOf( 'Battle-Scarred' ) != -1 ){
					skinCondition = 'Battle-Scarred';
					
					dataName = dataName.replace( 'Battle-Scarred' , '' );
				}
				
				dataName = dataName.replace( '()' , '' );
				
				var elementItem = $('*[data-uid = "' + skin.classid + '_' + skin.userid + '"]');
				
				if( visibilityHidden ){ 
					$( '<li class = "itemPot" data-uid = "' + skin.classid + '_' + skin.userid + '" data-value = "' + skin.price.toFixed( 2 ) + '" ><img src="https://skinsproject.pl/itemImage.php?name='+fullName+'" /><div><p class = "itemDisplay" data-name = "' + fullName + '" style = "color: rgb( ' + skin.color + ');">' + dataName + '</p><p>' + skinCondition + '</p></div><span class="item_price">'+skin.price.toFixed(2)+'$</span></li>' ).appendTo( '#highPotDiv #item_list' );
				}
				else{
					if( elementItem.length == 0 ){
						$( '<li class = "itemPot" data-uid = "' + skin.classid + '_' + skin.userid + '" data-value = "' + skin.price.toFixed( 2 ) + '" ><img src="https://skinsproject.pl/itemImage.php?name='+fullName+'" /><div><p class = "itemDisplay" data-name = "' + fullName + '" style = "color: rgb( ' + skin.color + ');">' + dataName + '</p><p>' + skinCondition + '</p></div><span class="item_price">'+skin.price.toFixed(2)+'$</span></li>' ).appendTo( '#highPotDiv #item_list' );
					}
					else{
						if( elementItem.length < itemsDraw[ skin.classid + '_' + skin.userid ] ){
							$( '<li class = "itemPot" data-uid = "' + skin.classid + '_' + skin.userid + '" data-value = "' + skin.price.toFixed( 2 ) + '" ><img src="https://skinsproject.pl/itemImage.php?name='+fullName+'" /><div><p class = "itemDisplay" data-name = "' + fullName + '" style = "color: rgb( ' + skin.color + ');">' + dataName + '</p><p>' + skinCondition + '</p></div><span class="item_price">'+skin.price.toFixed(2)+'$</span></li>' ).appendTo( '#highPotDiv #item_list' );
						}
					}
				}
			});
			
			var arr = [];
			
			for (var prop in data.players ) {
				if ( !data.players.hasOwnProperty(prop)) {
					continue;
				}
				
				arr.push({
					'key': prop,
					'value': data.players[ prop ].value
				});
			}
			
			arr.sort(function(a, b) { return -( a.value - b.value ) ; });
			
			arr.forEach(function(dataWrap)
			{
				var player = data.players[ dataWrap.key ];
				
				if( player.id == userIdBase ){
					if( nickNameSkins ){
						$( '#highPotDiv #userInfoText' ).html( 'You\'ve deposited - ' + playerSkins[player.id] + ' ( of 25) item(s).Probably to win ' + player.chance.toFixed(2) +'%.<br>Min bet 2.00$ <b>Bonus to winning +5%</b>' );
					}
					else{
						$( '#highPotDiv #userInfoText' ).html( 'You\'ve deposited - ' + playerSkins[player.id] + ' ( of 25) item(s).Probably to win ' + player.chance.toFixed(2) +'%.<br>Min bet 2.00$' );
					}
				}
				
				var HtmlTickets = "";
				for (var g = 0; g < player.bets.length; g++)
				{
					HtmlTickets += player.bets[g][ 0 ] + ' ? ' + player.bets[g][ 1 ] + '<br>';
				}
				
				$( '<div class="t_row" data-chance = '+ player.chance.toFixed( 3 ) +' id="playersList_'+player.id+'"><div class="nick userProfile" data-id = "' + player.id + '" > <img width = "24" height = "24" src = "' + player.avatar + '" > '+escapeHtml( player.name.replace(/['"]+/g, '') )+'</div><div class="szansa">'+player.chance.toFixed(2)+'%</div><div class="bilety">' + HtmlTickets + '</div><div class = "ilosc">' + playerSkins[player.id] + '</div><div class="stawka">'+player.value.toFixed( 2 )+'$</div></div>' ).appendTo( '#highPotDiv #playersList' );
				
				var amount = Math.floor( player.chance / 10.0 );
		
				if( amount < 1 ){
					amount = 1;
				}
				
				imagesToDrawHigh.push( [ loadImage( player.avatar ) , player.id , player.chance , 0 , amount ] );
			});
			
			$( '#highPotDiv #pulaMainStats' ).html( totalprize.toFixed(2) + '$');
			
			$( '#unlimitedPotDiv .betMode' ).text( 'HIGH POT - ' + totalprize.toFixed(2) + '$' )
			
			$( '[data-toggle="tooltip"]' ).tooltip();
			
			if( currentJackpotMode == 1 ){
				if( totalprize.toFixed( 2 ) == '0.00' && audioPlay ){
					try{
						var snd = new Audio("sounds/start-game-new.mp3");
						snd.play().catch( function(){
						});
					}
					catch( Error ){
						
					}
				}
				else if( audioPlay ){
					try{
						var snd = new Audio("sounds/new-item.mp3");
						snd.play().catch( function(){
						});
					}
					catch( Error ){
						
					}
				}
			
				$(document).prop('title', 'SkinsProject.pl | ' + totalprize.toFixed(2) + '$ | Zagraj i wygraj nowe skiny ! - Jackpot CS:GO' );
			}
		});
		
		socketIOHigh.on('games-amount', function(data){
			$( '#highPotDiv #statsRoundTodayImg' ).text( data.value );
		});
		
		socketIOHigh.on('biggest-amount', function(data){
			biggestRoundHigh = data.round;
			
			$( '#highPotDiv #statsWinTodayImg' ).text( data.value + '$' );
		});
		
		socketIOHigh.on( 'lucky-amount' , function( data ){
			luckyRoundHigh = data.round;
			
			$( '#highPotDiv #statsLuckyImg' ).text( data.value );
		});
		
		socketIOHigh.on('winner-offer', function(data){
			if( data.game == currentRoundHigh ){
				offerIdWrapHigh = data.offerid;
				errorCodeWrapHigh = data.errorcode;
				gameNumberWrapHigh = data.game;
			}
			else{
				showWinnerTrade( data.offerid , data.errorcode );
			}
		});
		
		socketIOHigh.emit( 'id' , { id: userId , nickName: '' , idBase: userIdBase , lang: 'pl' } );
	});

	socketIO.once('connect', function(){
		
		$( '#botStatusCircle' ).removeClass( 'kolo-czerwone' ).addClass( 'kolo-zielone' );
		$( '#botStatusText' ).removeClass( 'czerwone' ).addClass( 'zielone' );
		
  		socketIO.on('informers', function(data){
			if( data.inf1 ){
				$( '#unlimitedPotDiv #statsCurrentOnlineImg' ).text( data.inf1 );

				$( '#highPotDiv #statsCurrentOnlineImg' ).text( data.inf1 );
			}
		});
		
		socketIO.on( 'new-offer' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoNewOffer" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Your offer is being processed</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on( 'declined-offer' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Your offer was rejected</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on( 'declined-offer-their' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Your offer was rejected</br>Because you don\'t have a steam mobile token or is not turned on for 7 days</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on( 'declined-offer-not' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Your offer was rejected</br>Because the skins were from another game</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on( 'declined-offer-max' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Your offer was rejected</br>Because you exceeded the maximum number of skins ( 25 )</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on( 'declined-offer-inventory' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Your offer was rejected</br>Because your equipment is private</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on( 'declined-offer-souvenir' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferDeclined" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Twoja oferta zostala odrzucona</br>Poniewaz zawierala souveniry</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on( 'accepted-offer' , function(){
			$( '#unlimitedPotDiv #infoNewOffer' ).remove();
			$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
			$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
			
			$( '<div id="infoOfferAccept" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Your offer has been accepted</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
		});
		
		socketIO.on('close', function () {
			$( '#botStatusCircle' ).removeClass( 'kolo-zielone' ).addClass( 'kolo-czerwone' );
			$( '#botStatusText' ).removeClass( 'zielone' ).addClass( 'czerwone' );
		});
		
		socketIO.on('disconnect', function () {
			$( '#botStatusCircle' ).removeClass( 'kolo-zielone' ).addClass( 'kolo-czerwone' );
			$( '#botStatusText' ).removeClass( 'zielone' ).addClass( 'czerwone' );
		});
		
		socketIO.on('reconnect', function () {
			$( '#botStatusCircle' ).removeClass( 'kolo-czerwone' ).addClass( 'kolo-zielone' );
			$( '#botStatusText' ).removeClass( 'czerwone' ).addClass( 'zielone' );
		});

  		socketIO.on('timer', function(data){
			
			var min = Math.floor(data.timer/60);
			var sec = data.timer%60;
																								
			var minute = min.toString();
			var second = '';
			
			if ( sec < 10 ) {
				second = '0' + sec.toString();
			}
			else{
				second = sec.toString();
			}
			
			if( min == 0 && sec == 0 ){
				$( '#unlimitedPotDiv #infoNewOffer' ).remove();
				$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
				$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
				
				$( '#unlimitedPotDiv #infoEnd' ).remove();
				
				if( parseInt( data.amount ) != 0 ){
					if( parseInt( data.amount ) == 1 ){
						$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Accepting last offers - ' + data.amount + ' Offer</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
					}
					else{
						$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Accepting last offers - ' + data.amount + ' Offers</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
					}
				}
				else{
					$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Accepting last offers</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
				}
			}
			
			$('#unlimitedPotDiv #timer').text( '0' + minute + ':' + second );
  		});

		socketIO.on( 'mainData' , function(data){
			if( data.jackpot == null ){
				return;
			}
			
			currentRound = data.gamenumber;
			
			$('#unlimitedPotDiv #currentPrize').text( ( data.jackpot ).toFixed( 2 ) + '$' );
			$('#unlimitedPotDiv #RoundNumber1').text( 'Round: #' + data.gamenumber);
			
			if( gameNumberWrap != data.gamenumber && gameNumberWrap != 0 ){
				gameNumberWrap = 0;
				
				showWinnerTrade( offerIdWrap , errorCodeWrap );
				
				offerIdWrap = 0;
				errorCodeWrap = 0;
			}
		});

		socketIO.on('end-game', function(data){
			setTimeout( function(){
				winnerId = data.id;
				winnerIdEncode = data.idEncode;
				winningTicket = data.ticket;
				
				addWintick(data.ticket);
				printWinner();
				
				$( '#unlimitedPotDiv #infoNewOffer' ).remove();
				$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
				$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
				
				$( '#unlimitedPotDiv #infoEnd' ).remove();
				
				currentCanvasPosition = 0;
				acceleration = 0;
				
				clearInterval( slowDownInterval );
				clearInterval( moveCanvasInterval );
				
				if( drawStopInterval ){

					cancelAnimationFrame( drawStopInterval );
				}
				
				if( drawGameInterval ){
					cancelAnimationFrame( drawGameInterval );
				}
				drawGameInterval = 0;
				drawStopInterval = 0;
				
				moveGame();	

				$( '<div id="infoEnd" style="font-family: Lato;font-size: 18px;padding: 5px 10px;color: #414141;text-align: center;">Choosing winner</div>' ).insertAfter( '#unlimitedPotDiv #playersAmount' );
			}, 500 );
		});

  		socketIO.on('playersUnique', function(data){
			var playerSkins = {};
			var sortItems = [];
			var totalprize = 0;
			
			var playerAmount = 0;
			var itemsAmount = 0;
			
			var itemsDraw = [];
			
			playerData = data.players;
			
			playerAmount = Object.keys( data.players ).length;
		
			for(var y = 0; y < data.items.length; y++)
			{
				data.items[y].id = data.items[y].id.toString();
				
				if(typeof playerSkins[data.items[y].id] == 'undefined')
				{
					playerSkins[data.items[y].id] = 0;
				}
				
				itemsAmount++;
				
				playerSkins[data.items[y].id] = playerSkins[data.items[y].id] + 1;
				
				totalprize += parseFloat(data.items[y].cost);
				
				sortItems.push({'name':data.items[y].itemname.replace(/['"]+/g, ''),'price':data.items[y].cost,'classid' : data.items[ y ].classid , 'user':data.items[y].user,'avatar':data.items[y].ava,'userid':data.items[y].id , 'color': data.items[y].color });
				
				if( typeof itemsDraw[ data.items[ y ].classid + '_' + data.items[ y ].id ] == 'undefined' ){
					itemsDraw[ data.items[ y ].classid + '_' + data.items[ y ].id ] = 1;
				}
				else{
					itemsDraw[ data.items[ y ].classid + '_' + data.items[ y ].id ]++;
				}
			}
			
			if( playerAmount == 0 ){
				$( '#unlimitedPotDiv #infoNewOffer' ).remove();
				$( '#unlimitedPotDiv #infoOfferDeclined' ).remove();
				$( '#unlimitedPotDiv #infoOfferAccept' ).remove();
				
				$( '#unlimitedPotDiv #timer' ).text( '02:00' );
				
				$( '#unlimitedPotDiv #infoEnd' ).remove();
				
				imagesToDraw = [];
				
				winnerId = 'none';
				winnerIdEncode = 'none';
				
				winningTicket = 0;
				
				canvasTmpPosition = 0;
				
				$('#WinTicket').html( 'Winning ticket: -' );
				
				if( nickNameSkins ){
					$( '#unlimitedPotDiv #userInfoText' ).html( 'You\'ve deposited -  0 ( of 25) item(s).Probably to win 0%.<br>Min bet 0.00$. <b>Bonus to winning +5%</b>' );
				}
				else{
					$( '#unlimitedPotDiv #userInfoText' ).html( 'You\'ve deposited -  0 ( of 25) item(s).Probably to win 0%.<br>Min bet 0.00$' );
				}
				
				clearInterval( slowDownInterval );
				clearInterval( moveCanvasInterval );
				
				if( drawStopInterval ){
					cancelAnimationFrame( drawStopInterval );
				}
				
				if( drawGameInterval ){
					cancelAnimationFrame( drawGameInterval );
				}
				
				drawGameInterval = 0;

				drawStopInterval = 0;
				
				canvasTmpPosition = 0;
				
				if( canvasTwo ){
					clearInterval( window.launchInterval );
					clearInterval( window.loopInterval );
				
					window.canvasTwo.remove();
				}
				
				if( visibilityHidden ){
					$( '#unlimitedPotDiv #playersList' ).html('');
					
					$( '#unlimitedPotDiv #item_list' ).html( '' );
				}
				else{
					var numPots = $( '#unlimitedPotDiv #item_list > .itemPot' ).length;
					
					$( '#unlimitedPotDiv #item_list > .itemPot' ).fadeOut( 400 , function(){
						if( --numPots > 0 ) return;
						
						$( '#item_list' ).html( '' );
					});
					
					var numRows = $( '#unlimitedPotDiv .t_row[id]' ).length;
				
					$( '#unlimitedPotDiv .t_row[id]' ).fadeOut( 400 , function(){
						if( --numRows > 0 ) return;
						
						$( '#unlimitedPotDiv #playersList' ).html('');
					});
				}
				
				drawStopStart();
			}
			else{
				$( '#unlimitedPotDiv #playersList' ).html('');
					
				$( '#unlimitedPotDiv #item_list' ).html( '' );
				
				imagesToDraw = [];
				
				if( !drawGameInterval ){


					clearInterval( slowDownInterval );
					clearInterval( moveCanvasInterval );
					
					if( drawStopInterval ){
						cancelAnimationFrame( drawStopInterval );
					}
					
					if( drawGameInterval ){
						cancelAnimationFrame( drawGameInterval );
					}
					
					drawGameInterval = 0;
					drawStopInterval = 0;
					
					drawGameStart();

				}
			}
			
			if( animationSkinAmount ){
				animationSkinAmount.stop();
			}
			
			if( visibilityHidden ){
				animationSkinAmount = 0;
				
				$( '#unlimitedPotDiv #skinsAmount' ).text( itemsAmount );


			}
			else{
				var currentSkinsAmount = parseInt( $( '#skinsAmount' ).text() );
				
				animationSkinAmount = $({countNum: currentSkinsAmount}).animate({countNum: itemsAmount }, {
				  duration: 1500,
				  easing:'linear',
				  step: function() {
					$( '#unlimitedPotDiv #skinsAmount' ).text( Math.floor(this.countNum));
				  },
				  complete: function() {
					$( '#unlimitedPotDiv #skinsAmount' ).text( itemsAmount );
				  }
				});
			}
			
			$( '#unlimitedPotDiv #playersAmount' ).text( playerAmount );
			
			sortItems.sort(function(a, b) { return parseFloat(b.price) - parseFloat(a.price); });
			
			sortItems.forEach(function(skin)
			{
				var dataName = skin.name,
					fullName = skin.name;
				
				var skinCondition = '';
				
				if( dataName.indexOf( 'Factory New' ) != -1 ){
					skinCondition = 'Factory New';
					
					dataName = dataName.replace( 'Factory New' , '' );
				}
				else if( dataName.indexOf( 'Minimal Wear' ) != -1 ){
					skinCondition = 'Minimal Wear';
					
					dataName = dataName.replace( 'Minimal Wear' , '' );
				}
				else if( dataName.indexOf( 'Field-Tested' ) != -1 ){
					skinCondition = 'Field-Tested';
					
					dataName = dataName.replace( 'Field-Tested' , '' );
				}
				else if( dataName.indexOf( 'Well-Worn' ) != -1 ){
					skinCondition = 'Well-Worn';
					
					dataName = dataName.replace( 'Well-Worn' , '' );
				}
				else if( dataName.indexOf( 'Battle-Scarred' ) != -1 ){
					skinCondition = 'Battle-Scarred';
					
					dataName = dataName.replace( 'Battle-Scarred' , '' );
				}
				
				dataName = dataName.replace( '()' , '' );
				
				var elementItem = $('*[data-uid = "' + skin.classid + '_' + skin.userid + '"]');
				
				if( visibilityHidden ){
					$( '<li class = "mix itemPot" data-uid = "' + skin.classid + '_' + skin.userid + '" data-value = "' + skin.price.toFixed( 2 ) + '" ><img src="https://skinsproject.pl/itemImage.php?name='+fullName+'" /><div><p class = "itemDisplay" data-name = "' + fullName + '" style = "color: rgb( ' + skin.color + ');">' + dataName + '</p><p>' + skinCondition + '</p></div><span class="item_price">'+skin.price.toFixed(2)+'$</span></li>' ).appendTo( '#unlimitedPotDiv #item_list' );
				}
				else{
					if( elementItem.length == 0 ){
						$( '<li class = "mix itemPot" data-uid = "' + skin.classid + '_' + skin.userid + '" data-value = "' + skin.price.toFixed( 2 ) + '" ><img src="https://skinsproject.pl/itemImage.php?name='+fullName+'" /><div><p class = "itemDisplay" data-name = "' + fullName + '" style = "color: rgb( ' + skin.color + ');">' + dataName + '</p><p>' + skinCondition + '</p></div><span class="item_price">'+skin.price.toFixed(2)+'$</span></li>' ).appendTo( '#unlimitedPotDiv #item_list' );
					}
					else{
						if( elementItem.length < itemsDraw[ skin.classid + '_' + skin.userid ] ){
							$( '<li class = "mix itemPot" data-uid = "' + skin.classid + '_' + skin.userid + '" data-value = "' + skin.price.toFixed( 2 ) + '" ><img src="https://skinsproject.pl/itemImage.php?name='+fullName+'" /><div><p class = "itemDisplay" data-name = "' + fullName + '" style = "color: rgb( ' + skin.color + ');">' + dataName + '</p><p>' + skinCondition + '</p></div><span class="item_price">'+skin.price.toFixed(2)+'$</span></li>' ).appendTo( '#unlimitedPotDiv #item_list' );
						}
					}
				}
			});
			
			var arr = [];
			
			for (var prop in data.players ) {
				if ( !data.players.hasOwnProperty(prop)) {
					continue;
				}
				
				arr.push({
					'key': prop,
					'value': data.players[ prop ].value
				});
			}
			
			arr.sort(function(a, b) { return -( a.value - b.value ) ; });
			
			arr.forEach(function(dataWrap)
			{
				var player = data.players[ dataWrap.key ];
				
				if( player.id == userIdBase ){
					if( nickNameSkins ){
						$( '#unlimitedPotDiv #userInfoText' ).html( 'You\'ve deposited - ' + playerSkins[player.id] + ' ( of 25) item(s).Probably to win ' + player.chance.toFixed(2) +'%.<br>Min bet 2.00$ <b>Bonus to winning +5%</b>' );
					}
					else{
						$( '#unlimitedPotDiv #userInfoText' ).html( 'You\'ve deposited - ' + playerSkins[player.id] + ' ( of 25) item(s).Probably to win ' + player.chance.toFixed(2) +'%.<br>Min bet 2.00$' );
					}
				}
				
				var HtmlTickets = "";
				for (var g = 0; g < player.bets.length; g++)
				{
					HtmlTickets += player.bets[g][ 0 ] + ' ? ' + player.bets[g][ 1 ] + '<br>';
				}
				
				$( '<div class="mix t_row" data-chance = '+ player.chance.toFixed( 3 )+' id="playersList_'+player.id+'"><div class="nick userProfile" data-id = "' + player.id + '" > <img width = "24" height = "24" src = "' + player.avatar + '" > '+escapeHtml( player.name.replace(/['"]+/g, '') )+'</div><div class="szansa">'+player.chance.toFixed(2)+'%</div><div class="bilety">' + HtmlTickets + '</div><div class = "ilosc">' + playerSkins[player.id] + '</div><div class="stawka">'+player.value.toFixed( 2 )+'$</div></div>' ).appendTo( '#unlimitedPotDiv #playersList' );
				
				var amount = Math.floor( player.chance / 10.0 );
		
				if( amount < 1 ){
					amount = 1;
				}
				
				imagesToDraw.push( [ loadImage( player.avatar ) , player.id , player.chance , 0 , amount ] );
			});
			
			$("#unlimitedPotDiv #pulaMainStats").html( totalprize.toFixed(2) + '$');
			
			$( '#highPotDiv .betMode' ).text( 'UNLIMITED POT - ' + totalprize.toFixed(2) + '$' )
			
			$('[data-toggle="tooltip"]').tooltip();
			
			if( currentJackpotMode == 0 ){
				if( totalprize.toFixed( 2 ) == '0.00' && audioPlay ){
					try{
						var snd = new Audio("/sounds/start-game-new.mp3");
						snd.play().catch( function(){
						});
					}
					catch( Error ){
						
					}

				}
				else if( audioPlay ){
					try{
						var snd = new Audio("/sounds/new-item.mp3");
						snd.play().catch( function(){
						});
					}
					catch( Error ){
						
					}

				}
			
				$(document).prop('title', 'SkinsProject.pl | ' + totalprize.toFixed(2) + '$ | Play and win new skins for CS:GO ! - Jackpot CS:GO' );
			}
		});
		
		socketIO.on('chat', function(data){
			if( typeof data.lang != 'undefined' && data.lang != 'en' ){
				return false;
			}
			
			var scrollBottom = false;
			
			if( canScroll && document.getElementById("chatTexts").scrollHeight - ( $( '#chatTexts' ).scrollTop() + $( '#chatTexts' ).height() ) < 40 ){
				scrollBottom = true;
				canScroll = false;
			}
			
			var messageHtml = escapeHtml( data.message );
			
			messageHtml = messageHtml.replace(/:D/ig, '<img src = "https://skinsproject.pl/images/emoticons/grin.png" height="24" width="24" alt = ":D" title = ":D" >' );
			messageHtml = messageHtml.replace(/;D/ig, '<img src = "https://skinsproject.pl/images/emoticons/grin.png" height="24" width="24" alt = ";D" title = ";D" >' );
			messageHtml = messageHtml.replace( /:\)/ig , '<img src = "https://skinsproject.pl/images/emoticons/have a nice day.png" height="24" width="24" alt = ":)" title = ":)" >');
			messageHtml = messageHtml.replace( /:P/ig , '<img src = "https://skinsproject.pl/images/emoticons/x_x.png" height="24" width="24" alt = ":P" title = ":P" >');
			messageHtml = messageHtml.replace( /:\*/ig , '<img src = "https://skinsproject.pl/images/emoticons/¯e¯¯ .png" height="24" width="24" alt = ":*" title = ":*" >');
			messageHtml = messageHtml.replace( /love/ig , '<img src = "https://skinsproject.pl/images/emoticons/in love.png" height="24" width="24" alt = "love" title = "love" >');
			messageHtml = messageHtml.replace( /omg/ig , '<img src = "https://skinsproject.pl/images/emoticons/omg.png" height="24" width="24" alt = "omg" title = "omg" >');
			messageHtml = messageHtml.replace( /xD/ig , '<img src = "https://skinsproject.pl/images/emoticons/xd.png" height="24" width="24" alt = "xD" title = "xD" >');
			messageHtml = messageHtml.replace( /\^\^/ig , '<img src = "https://skinsproject.pl/images/emoticons/;^^.png" height="24" width="24" alt = "^^" title = "^^" >');
			messageHtml = messageHtml.replace( /;c/ig , '<img src = "https://skinsproject.pl/images/emoticons/that dood is up to something.png" height="24" width="24" alt = ";c" title = ";c" >');
			messageHtml = messageHtml.replace( /:c/ig , '<img src = "https://skinsproject.pl/images/emoticons/that dood is up to something.png" height="24" width="24" alt = ":c" title = ":c" >');
			messageHtml = messageHtml.replace( /;\)/ig , '<img src = "https://skinsproject.pl/images/emoticons/hope my fake smile works again.png" height="24" width="24" alt = ";)" title = ";)" >');
			messageHtml = messageHtml.replace( /snajper/ig , '<img src = "https://skinsproject.pl/images/emoticons/snajper.gif" height="24" width="24" alt = "snajper" title = "snajper" >');
			messageHtml = messageHtml.replace( /kappapride/ig , '<img src = "https://skinsproject.pl/images/emoticons/kpride.png" height="24" width="24" alt = "kpride" title = "kpride" >');
			messageHtml = messageHtml.replace( /petzorKasia/ig , '<img src = "https://skinsproject.pl/images/emoticons/petzorKasia.png" height="24" width="24" alt = "petzorKasia" title = "petzorKasia" >');
			messageHtml = messageHtml.replace( /petzorDrewno/ig , '<img src = "https://skinsproject.pl/images/emoticons/petzorDrewno.png" height="24" width="24" alt = "petzorDrewno" title = "petzorDrewno" >');
			messageHtml = messageHtml.replace( /petzorKappa/ig , '<img src = "https://skinsproject.pl/images/emoticons/petzorK.png" height="24" width="24" alt = "petzorK" title = "petzorK" >');
			messageHtml = messageHtml.replace( /kappa/ig , '<img src = "https://skinsproject.pl/images/emoticons/kappa.png" height="24" width="24" alt = "kappa" title = "kappa" >');
			messageHtml = messageHtml.replace( /keepo/ig , '<img src = "https://skinsproject.pl/images/emoticons/keepo.png" height="24" width="24" alt = "keepo" title = "keepo" >');
			messageHtml = messageHtml.replace( /rekt/ig , '<img src = "https://skinsproject.pl/images/emoticons/rekt.png" height="24" width="24" alt = "rekt" title = "rekt" >');
			messageHtml = messageHtml.replace( /failsnipe/ig , '<img src = "https://skinsproject.pl/images/emoticons/fsn.png" height="24" width="24" alt = "fsn" title = "fsn" >');
			messageHtml = messageHtml.replace( /snipe/ig , '<img src = "https://skinsproject.pl/images/emoticons/snipe.png" height="24" width="24" alt = "snipe" title = "snipe" >');
			messageHtml = messageHtml.replace( /fail/ig , '<img src = "https://skinsproject.pl/images/emoticons/fail_smiley.gif" height="24" width="24" alt = "fail" title = "fail" >');
			messageHtml = messageHtml.replace( /kosa/ig , '<img src = "https://skinsproject.pl/images/emoticons/kosa.png" height="24" width="24" alt = "kosa" title = "kosa" >');
			messageHtml = messageHtml.replace( /lagi/ig , '<img src = "https://skinsproject.pl/images/emoticons/ddos.png" height="24" width="24" alt = "lagi" title = "lagi" >');
			messageHtml = messageHtml.replace( /warzywo/ig , '<img src = "https://skinsproject.pl/images/emoticons/warzywo.png" height="24" width="24" alt = "warzywo" title = "warzywo" >');
			messageHtml = messageHtml.replace( /ninja/ig , '<img src = "https://skinsproject.pl/images/emoticons/ninja.png" height="24" width="24" alt = "ninja" title = "ninja" >');
			messageHtml = messageHtml.replace( /wut/ig , '<img src = "https://skinsproject.pl/images/emoticons/wut.png" height="24" width="24" alt = "wut" title = "wut" >');
			messageHtml = messageHtml.replace( /meaw/ig , '<img src = "https://skinsproject.pl/images/emoticons/meaw.png" height="24" width="24" alt = "meaw" title = "meaw" >');
			messageHtml = messageHtml.replace( /fire/ig , '<img src = "https://skinsproject.pl/images/emoticons/on fire.png" height="24" width="24" alt = "fire" title = "fire" >');
			messageHtml = messageHtml.replace( /evilish/ig , '<img src = "https://skinsproject.pl/images/emoticons/evilish.png" height="24" width="24" alt = "evilish" title = "evilish" >');
			messageHtml = messageHtml.replace( /yarr/ig , '<img src = "https://skinsproject.pl/images/emoticons/yarr.png" height="24" width="24" alt = "yarr" title = "yarr" >');
			messageHtml = messageHtml.replace( /powerranger/ig , '<img src = "https://skinsproject.pl/images/emoticons/powerranger.png" height="24" width="24" alt = "powerranger" title = "powerranger" >');
			messageHtml = messageHtml.replace( /cebula/ig , '<img src = "https://skinsproject.pl/images/emoticons/onion.png" height="24" width="24" alt = "cebula" title = "cebula" >');	
			
			if( data.special ){
				var dataText = escapeHtml( data.message );
				
				
				if( dataText.indexOf( 'Wygral:' ) != -1 ){
					dataText = dataText.replace( 'Runde ' , 'Round: <span class="runda">' );
					dataText = dataText.replace( 'Wygral:' , '</span></p><p>Wins: <span class="nick">' );
					dataText = dataText.replace( 'Wartosc:' , '</span></p><p>Value: <span class="nick">' );
					dataText = dataText.replace( 'Szansa:' , '</span></p><p>Chance: <span class="nick">' );
				}
				else if( dataText.indexOf( 'Hash rundy' ) != -1 ){
					//dataText = dataText.replace( 'Hash rundy ' , 'Hash rundy <span class="runda">' );
					//dataText = dataText.replace( ': ' , '</span>: ' );
					dataText = dataText.replace( ':' , ': <span class="runda"> ' );
					
					dataText += '</span>';	
				}
				
				dataText += '</span>';
				
				$( '#chatTexts' ).append( '<div class="chat_msg notify"> <p>' + dataText + '</p></div>' );
			}
			else if( data.admin ){
				var userNick = escapeHtml( data.personName );
				
				var positionIndex = userNick.indexOf( ' [Rank:' );
				
				if( positionIndex == -1 ){
					positionIndex = userNick.length + 1;
				}
				
				var re = new RegExp('skinsproject.pl', 'gi');
				
				userNick = userNick.slice( 0 , positionIndex );
				
				userNick = userNick.replace(re, '');
				if( currentNicknames.indexOf( userNick ) == -1 ){
					currentNicknames.push( userNick );
				}

				if( modOn ){
					$( '#chatTexts' ).append( '<div class="chat_msg" style = "background-color: rgba( 96 , 94 , 94 , 0.03); border-radius: 15px;" ><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a class = "chatMsg" style="color: GoldenRod;" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a> <a class = "deleteChat" href = "#" data-id = "' + data.id + '" >Usun</a> <a class = "banChat" href = "#" data-id = "' + data.id + '" >Zablokuj</a> <a class = "spamChat" href = "#" data-id = "' + data.id + '" >Spam</a> <a class = "vocabularyChat" href = "#" data-id = "' + data.id + '" >Slownictwo/Zebranie</a> <a class = "advertChat" href = "#" data-id = "' + data.id + '" >Reklamowanie</a></h6><p style = "font-weight: bold;" >' + messageHtml +'</p></div></div>' );
				}
				else{
					$( '#chatTexts' ).append( '<div class="chat_msg" style = "background-color: rgba( 96 , 94 , 94 , 0.03); border-radius: 15px;" ><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a class = "chatMsg" style = "color: GoldenRod;" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a></h6><p style = "font-weight: bold;" >' + messageHtml +'</p></div></div>' );
				}
			}
			else if( data.mod ){
				var userNick = escapeHtml( data.personName );
				
				var positionIndex = userNick.indexOf( ' [Rank:' );
				
				if( positionIndex == -1 ){
					positionIndex = userNick.length + 1;
				}
				
				var re = new RegExp('skinsproject.pl', 'gi');
				
				userNick = userNick.slice( 0 , positionIndex );
				
				userNick = userNick.replace(re, '');
				if( currentNicknames.indexOf( userNick ) == -1 ){
					currentNicknames.push( userNick );
				}

				if( modOn ){
					$( '#chatTexts' ).append( '<div class="chat_msg" style = "background-color: rgba( 96 , 94 , 94 , 0.03); border-radius: 15px;" ><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a class = "chatMsg" style="color: Green;" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a> <a class = "deleteChat" href = "#" data-id = "' + data.id + '" >Usun</a> <a class = "banChat" href = "#" data-id = "' + data.id + '" >Zablokuj</a> <a class = "spamChat" href = "#" data-id = "' + data.id + '" >Spam</a> <a class = "vocabularyChat" href = "#" data-id = "' + data.id + '" >Slownictwo/Zebranie</a> <a class = "advertChat" href = "#" data-id = "' + data.id + '" >Reklamowanie</a></h6><p style = "font-weight: bold;" >' + messageHtml +'</p></div></div>' );
				}
				else{
					$( '#chatTexts' ).append( '<div class="chat_msg" style = "background-color: rgba( 96 , 94 , 94 , 0.03); border-radius: 15px;" ><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a class = "chatMsg" style = "color: Green;"  rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a></h6><p style = "font-weight: bold;" >' + messageHtml +'</p></div></div>' );
				}
			}
			else{
				var userNick = escapeHtml( data.personName );
				

				var positionIndex = userNick.indexOf( ' [Rank:' );
				
				if( positionIndex == -1 ){
					positionIndex = userNick.length + 1;
				}
				
				var re = new RegExp('skinsproject.pl', 'gi');
				
				userNick = userNick.slice( 0 , positionIndex );
				
				userNick = userNick.replace(re, '');
				
				if( currentNicknames.indexOf( userNick ) == -1 ){
					currentNicknames.push( userNick );
				}

				if( modOn ){
					if( data.color ){
						$( '#chatTexts' ).append( '<div class="chat_msg"><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a style = "color:' + data.color + '" class = "chatMsg" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a> <a class = "deleteChat" href = "#" data-id = "' + data.id + '" >Usun</a> <a class = "banChat" href = "#" data-id = "' + data.id + '" >Zablokuj</a> <a class = "spamChat" href = "#" data-id = "' + data.id + '" >Spam</a> <a class = "vocabularyChat" href = "#" data-id = "' + data.id + '" >Slownictwo/Zebranie</a> <a class = "advertChat" href = "#" data-id = "' + data.id + '" >Reklamowanie</a></h6><p>' + messageHtml +'</p></div></div>' );
					}
					else{
						$( '#chatTexts' ).append( '<div class="chat_msg"><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a class = "chatMsg" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a> <a class = "deleteChat" href = "#" data-id = "' + data.id + '" >Usun</a> <a class = "banChat" href = "#" data-id = "' + data.id + '" >Zablokuj</a> <a class = "spamChat" href = "#" data-id = "' + data.id + '" >Spam</a> <a class = "vocabularyChat" href = "#" data-id = "' + data.id + '" >Slownictwo/Zebranie</a> <a class = "advertChat" href = "#" data-id = "' + data.id + '" >Reklamowanie</a></h6><p>' + messageHtml +'</p></div></div>' );
					}
				}
				else{
					if( parseInt( data.verified ) == 1 ){
						$( '#chatTexts' ).append( '<div class="chat_msg"><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a class = "chatMsg" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a><span data-tooltip-text="Zweryfikowane Konto" class="icon-verified" aria-label="Zweryfikowane Konto" title="Zweryfikowane Konto"></span><a class="reportChat" href="#" data-id="' + data.id + '" style="display: none;margin-left: 5px;    text-decoration: none;">Zaraportuj wiadomosc</a></h6><p>' + messageHtml +'</p></div></div>' );
						
						$('.icon-verified').tooltip();
					}
					else{
						if( data.color ){
							$( '#chatTexts' ).append( '<div class="chat_msg"><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a style = "color:' + data.color + '" class = "chatMsg" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a><a class="reportChat" href="#" data-id="' + data.id + '" style="display: none;margin-left: 5px;    text-decoration: none;">Zaraportuj wiadomosc</a></h6><p>' + messageHtml +'</p></div></div>' );
						}
						else{
							$( '#chatTexts' ).append( '<div class="chat_msg"><div class="chat_user_img" style = "background-image: url(' + data.avatar + ');background-position: center;background-repeat: no-repeat;background-size: 46px 46px;"></div><div class="chat_user_msg"><h6><a class = "chatMsg" rel="nofollow" data-id = "' + data.id + '" >'+ escapeHtml( data.personName )+'</a><a class="reportChat" href="#" data-id="' + data.id + '" style="display: none;margin-left: 5px;    text-decoration: none;">Zaraportuj wiadomosc</a></h6><p>' + messageHtml +'</p></div></div>' );
						}
					}
				}
			}
			
			if( scrollBottom ){
				setTimeout( function(){
					$( '#chatTexts' ).animate({ scrollTop: document.getElementById("chatTexts").scrollHeight }, 1000 , function(){
						canScroll = true;
					} );
					
				} , 100 );
			}
		});
		
		socketIO.on('delete-chat', function(data){
			$( '.chat_msg' ).each( function( index ){
				if( $( this ).find( 'a[data-id="' + data.id + '"]' ).size() != 0 ){
						$( this ).remove();
				}
			})
		});
		
		socketIO.on('games-amount', function(data){
			$( '#unlimitedPotDiv #statsRoundTodayImg' ).text( data.value );
		});
		
		socketIO.on('biggest-amount', function(data){
			biggestRound = data.round;

			$( '#unlimitedPotDiv #statsWinTodayImg' ).text( data.value + '$' );
		});
		
		socketIO.on( 'lucky-amount' , function( data ){
			luckyRound = data.round;

			$( '#unlimitedPotDiv #statsLuckyImg' ).text( data.value );
		});
		
		socketIO.on('winner-offer', function(data){
			if( data.game == currentRound ){
				offerIdWrap = data.offerid;
				errorCodeWrap = data.errorcode;
				gameNumberWrap = data.game;
			}
			else{
				showWinnerTrade( data.offerid , data.errorcode );
			}
		});
		
		socketIO.emit( 'id' , { id: userId , nickName: '' , idBase: userIdBase , lang: 'en' } );
	});
	
	$( '#sendMessage' ).click( function( event ){
		return writeMessage( event , true );
	})
	
	$("#inputMessage").keyup(function(event){
		
		var code = (event.keyCode ? event.keyCode : event.which);
		
		event.keyCode = code;
		
		if(event.keyCode == 50 && event.shiftKey ){
			inputModeNick = true;
			
			$( '#ember' ).remove();
			
			$( '.chat_input' ).append( '<div id="ember" class="ember"></div>' );
			
			var highlighted = true;
			
			for( var iPosition = 0; iPosition < Math.min( 5 , currentNicknames.length ); iPosition++ ){
				if( highlighted ){
					$( '#ember' ).append( '<div class="ember-view"><div class="suggestion highlighted"><span>' + currentNicknames[ iPosition ] + '</span></div></div>' );
					
					highlighted = false;
				}
				else{
					$( '#ember' ).append( '<div class="ember-view"><div class="suggestion"><span>' + currentNicknames[ iPosition ] + '</span></div></div>' );
				}
			}
			
			$( '.ember-view' ).mouseover( function( event ){
				var element = event.target;
				
				var classList = $( element ).attr( 'class' );
				
				if( typeof classList == 'undefined' ){
					return;
				}
				
				if( classList.indexOf( 'highlighted' ) != -1 ){
					return;
				}
				
				$( '.highlighted' ).removeClass( 'highlighted' );
				
				$( element ).addClass( 'highlighted' );
			})
			
			var position = $( '#inputMessage' ).offset();
			
			$( '#ember' ).offset( { top: position.top - $( '#ember' ).height() , left: position.left } );
			$( '#ember' ).width( $( '#inputMessage' ).width() );
			
			return true;
		}
		
		if( inputModeNick ){
			if(event.keyCode == 13 ){
				inputModeNick = false;
				
				var element = $( '.highlighted' );
				
				var nick = element.children().text();
				
				var valueInput = $( '#inputMessage' ).val();
				
				var positionMail = valueInput.indexOf( '@' );
				
				var indexOfLast = valueInput.indexOf( ' ' , indexOfMail );
				
				if( indexOfLast == -1 ){
					indexOfLast = valueInput.length;
				}
				
				var nextInputValue = '';
				
				if( positionMail == 0 ){
					nextInputValue = '@' + nick + ' ';
				}
				else{
					nextInputValue += valueInput.slice( 0 , positionMail );
					nextInputValue += '@' + nick + ' ';
					nextInputValue += valueInput.slice( indexOfLast );
				}
				
				$( '#inputMessage' ).val( nextInputValue );
				
				$( '#ember' ).remove();
				
				return false;
			}
			else if(event.keyCode == 38 ){
				
				event.preventDefault();
				
				var elements = $( '.suggestion' );
				
				for( var iPosition = 0; iPosition < elements.length; iPosition++ ){
					if( $( elements[ iPosition ] ).attr( 'class' ).indexOf( 'highlighted' ) != -1 ){
						if( iPosition == 0 ){
							$( elements[ iPosition ] ).removeClass( 'highlighted' );
							
							$( elements[ elements.length - 1 ] ).addClass( 'highlighted' );
						}
						else{
							$( elements[ iPosition ] ).removeClass( 'highlighted' );
							
							$( elements[ iPosition - 1 ] ).addClass( 'highlighted' );
						}
						
						break;
					}
				}
				
				return true;
			}
			else if(event.keyCode == 40 ){
				
				event.preventDefault();
				
				var elements = $( '.suggestion' );
				
				for( var iPosition = 0; iPosition < elements.length; iPosition++ ){
					if( $( elements[ iPosition ] ).attr( 'class' ).indexOf( 'highlighted' ) != -1 ){
						if( iPosition == elements.length - 1 ){
							$( elements[ iPosition ] ).removeClass( 'highlighted' );
							
							$( elements[ 0 ] ).addClass( 'highlighted' );
						}
						else{
							$( elements[ iPosition ] ).removeClass( 'highlighted' );
							
							$( elements[ iPosition + 1 ] ).addClass( 'highlighted' );
						}
						
						break;
					}
				}
				
				return true;
			}
			else{
				var inputText = $( '#inputMessage' ).val();
				
				var indexOfMail = inputText.indexOf( '@' );
				
				if( indexOfMail == -1 ){
					inputModeNick = false;
				
					$( '#ember' ).remove();
					
					return;
				}
				
				var indexOfLast = inputText.indexOf( ' ' , indexOfMail );
				
				if( indexOfLast == -1 ){
					indexOfLast = inputText.length;
				}
				
				var nickSearch = inputText.slice( indexOfMail + 1 , indexOfLast );
				
				$( '.ember-view' ).remove();
				
				var amountNick = 0;
				
				var highlighted = true;
				
				for( var iPosition = 0; iPosition < currentNicknames.length; iPosition++ ){
					if( currentNicknames[ iPosition ].toLowerCase().indexOf( nickSearch.toLowerCase() ) == 0 ){
						if( highlighted ){
							$( '#ember' ).append( '<div class="ember-view"><div class="suggestion highlighted"><span>' + currentNicknames[ iPosition ] + '</span></div></div>' );
							
							highlighted = false;
						}
						else{
							$( '#ember' ).append( '<div class="ember-view"><div class="suggestion"><span>' + currentNicknames[ iPosition ] + '</span></div></div>' );
						}
						
						amountNick++;
						
						if( amountNick >= 5 ){
							break;
						}
					}
				}
				
				$( '.ember-view' ).mouseover( function( event ){
		
					var element = event.target;
					
					var classList = $( element ).attr( 'class' );
					
					if( typeof classList == 'undefined' ){
						return;
					}
					
					if( classList.indexOf( 'highlighted' ) != -1 ){
						return;
					}
					
					$( '.highlighted' ).removeClass( 'highlighted' );
					
					$( element ).addClass( 'highlighted' );
				})
				
				var position = $( '#inputMessage' ).offset();
				
				$( '#ember' ).offset( { top: position.top - $( '#ember' ).height() , left: position.left } );
				
				return true;
			}
		}

		return writeMessage( event , false );
	});
	
	$( '#inputMessage' ).click( function( event ){
		var elm = $(this);
		var xPos = event.pageX - elm.offset().left;
		var yPos = event.pageY - elm.offset().top;
		
		if( $( '#inputMessage' ).width() - xPos <= 29 && $( '#inputMessage' ).height() - yPos <= 29 ){
			showEmoticons();
		}
	});

	$( '#checkTradeUrl' ).click( function(){
		$.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/checkTrade.php',
			data: { tradeUrl : $( '#trade_url' ).val() },
			dataType: 'text',
			success: function(data) {
				if( data == '3' || data == '-1' || data == '0' ){
					$( '#trade_url' ).css( 'border-color' , '#a94442' );
					
					$( '#trade_url' ).attr( 'data-trigger' , 'manual' );
					$( '#trade_url' ).attr( 'data-toggle' , 'tooltip' );
					$( '#trade_url' ).attr( 'data-placement' , 'top' );
					$( '#trade_url' ).attr( 'data-html' , 'true' );
					$( '#trade_url' ).attr( 'data-original-title' , 'Invalid Trade URL address' );
				}
				else if( data == '1' ){
					$( '#trade_url' ).css( 'border-color' , '#3c763d' );
					
					$( '#trade_url' ).attr( 'data-trigger' , 'manual' );
					$( '#trade_url' ).attr( 'data-toggle' , 'tooltip' );
					$( '#trade_url' ).attr( 'data-placement' , 'top' );
					$( '#trade_url' ).attr( 'data-html' , 'true' );
					$( '#trade_url' ).attr( 'data-original-title' , 'Trade URL is correct' );
				}
				else{
					$( '#trade_url' ).css( 'border-color' , '#a94442' );
					
					$( '#trade_url' ).attr( 'data-trigger' , 'manual' );
					$( '#trade_url' ).attr( 'data-toggle' , 'tooltip' );
					$( '#trade_url' ).attr( 'data-placement' , 'top' );
					$( '#trade_url' ).attr( 'data-html' , 'true' );
					$( '#trade_url' ).attr( 'data-original-title' , 'Invalid Trade URL address' );
				}
				
				$('#trade_url').tooltip('show')
			}                  
		});
	});
	
	$( document ).on( 'click' , '.verifyRound' , function( event ){
		event.preventDefault();
		
		var salt = $( event.target ).attr( 'data-salt' ),
			percent = $( event.target ).attr( 'data-percent' ),
			hash = $( event.target ).attr( 'data-hash' ),
			tickets = $( event.target ).attr( 'data-tickets' );
			
		$( '#historyModal' ).modal( 'hide' );
		
		$( '#percentageInput' ).val( percent );
		$( '#saltInput' ).val( salt );
		$( '#hashInput' ).val( hash );
		$( '#ticketsInput' ).val( tickets );
		
		showFairHistory = 1;
		
		return false;
	});
	
	$( document ).on( 'click' , '.deleteChat' , function( event ){
		$.post( "https://skinsproject.pl/en/deleteChat.php", { id: $( event.target ).data( 'id' ) } );
		
		event.preventDefault();
		
		return false;
	});
	
	$( document ).on( 'click' , '.banChat' , function( event ){
		event.preventDefault();
		
		var r = confirm( 'Zbanowac ?' );
		
		if (r == true) {
			$.post( "https://skinsproject.pl/en/banChat.php", { id: $(  event.target ).data( 'id' ) } );
		}
		
		return false;
	});
	
	$( document ).on( 'click' , '.spamChat' , function( event ){
		event.preventDefault();
		
		var r = confirm( 'Ban za spam ?' );
		
		if (r == true) {
			$.post( "https://skinsproject.pl/en/timeout.php", { id: $(  event.target ).data( 'id' ) , reason: 1 } );
		}
		
		return false;
	});
	
	$( document ).on( 'click' , '.vocabularyChat' , function( event ){
		event.preventDefault();
		
		var r = confirm( 'Ban za slownictwo lub zebranie ?' );
		
		if (r == true) {
			$.post( "https://skinsproject.pl/en/timeout.php", { id: $(  event.target ).data( 'id' ) , reason: 2 } );
		}
		
		return false;
	});
	
	$( document ).on( 'click' , '.advertChat' , function( event ){
		event.preventDefault();
		
		var r = confirm( 'Ban za reklamowanie ?' );
		
		if (r == true) {
			$.post( "https://skinsproject.pl/en/timeout.php", { id: $(  event.target ).data( 'id' ) , reason: 3 } );
		}
		
		return false;
	});

$( document ).on( 'click' , '.chatMsg' , function( event ){
		event.preventDefault();
		
		$( '#profilModalBody' ).html( '<div class="circle"></div>' );

		var varDataId = $(  event.target ).data( 'id' );
		
		xhrHistory = $.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/en/getProfile.php',
			data: { id : varDataId },
			dataType: 'text',
			success: function(data) {
				$( '#profilModalBody' ).html( data );
				
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
		
		$( '#profileModal' ).modal( 'show' );
		
		showBackdrop();
		
		return false;
	});
	
$( document ).on( 'click' , '.itemDisplay' , function( event ){
		event.preventDefault();
		
		$( '#itemModalBody' ).html( '<div class="circle"></div>' );

		var varName = $(  event.target ).data( 'name' );
		
		xhrHistory = $.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/en/getItem.php',
			data: { name : varName },
			dataType: 'text',
			success: function(data) {
				$( '#itemModalBody' ).html( data );
				
				$('[data-toggle="tooltip"]').tooltip();               
			}                  
		});
		
		$( '#itemModal' ).modal( 'show' );
		
		showBackdrop();
		
		$('#itemModal').on('hide.bs.modal', function (e) {
			$( '#backdrop' ).remove();
		});
		
		return false;
	});
	
	$( document ).on( 'click' , '.rankProfile' , function( event ){
		event.preventDefault();
		
		$( '#profilModalBody' ).html( '<div class="circle"></div>' );
		
		var varDataId = $(  event.target ).data( 'id' );
		
		showProfileId = varDataId;
		
		$( '#rankingModal' ).modal( 'hide' );
		
		return false;
	});
	
	$( document ).on( 'click' , '.userProfile' , function( event ){
		event.preventDefault();
		
		$( '#profilModalBody' ).html( '<div class="circle"></div>' );

		var varDataId = $(  event.target ).data( 'id' );
		
		if( !varDataId ){
			varDataId = $( event.target ).parent().data( 'id' )
		}
		
		showProfileId = varDataId;
		
		if( $('#historyModal').hasClass('in') ){
			$( '#historyModal' ).modal( 'hide' );	
		}
		else if( $('#mywinsModal').hasClass('in') ){
			$( '#mywinsModal' ).modal( 'hide' );	
		}
		else{
			$( '#profilModalBody' ).html( '<div class="circle"></div>' );
		
			xhrHistory = $.ajax({
				type: "POST",
				url: 'https://skinsproject.pl/getProfile.php',
				data: { user : showProfileId },
				dataType: 'text',
				success: function(data) {
					$( '#profilModalBody' ).html( data );
					
					$('[data-toggle="tooltip"]').tooltip();                
				}                  
			});
			
			showProfileId = 0;
			
			$( '#profileModal' ).modal( 'show' );
			
			showBackdrop();
		}
		
		return false;
	});
	
	$( document ).on( 'click' , '#addReputation' , function( event ){
		event.preventDefault();
		
		var id = $( event.target ).data( 'id' );
		
		$.post( "https://skinsproject.pl/addReputation.php", { id: id } );
		
		alert( 'Przyznales reputacje uzytkownikowi' );
		
		return false;
	});
	
	$( '#crewOpen' ).click( function( event ){
		event.preventDefault();
		
		showCrew();
		
		return false;
	});
	
	$( '#giveawayHeader' ).click( function( event ){
		event.preventDefault();
		
		showGiveawayModal();
		
		return false;
	});
	
	$( document ).on( 'click' , '#groupBy' , function( event ){
		event.preventDefault();
		
		if( !modeInventory ){
			modeInventory = 1;
			
			var currentItems = $( '.wrapItem > .item' );
			
			var newItems = [];
			
			for( var iPosition = 0; iPosition < currentItems.length ; iPosition++ ){
				var itemName = $( currentItems[ iPosition ]).data( 'full-name' ),
					itemPrice = parseFloat( $( currentItems[ iPosition ] ).data( 'price' ) ),
					originalTitle = $( currentItems[ iPosition ] ).data( 'original-title' ),
					classId = $( currentItems[ iPosition ] ).data( 'classid' ),
					condition = $( currentItems[ iPosition ] ).data( 'condition' );
				
				var foundPosition = -1;
				
				for( var iPositionNew = 0; iPositionNew < newItems.length; iPositionNew++ ){
					if( newItems[ iPositionNew ].name == itemName ){
						foundPosition = iPositionNew;
						
						break;
					}
				}
				
				if( foundPosition != -1 ){
					newItems[ foundPosition ].amount++;
				}
				else{
					newItems.push( { name: itemName , amount: 1 , price: itemPrice , title: originalTitle , classid: classId , condition: condition } );
				}
			}
			
			$( '#backpack' ).animate({height: 'toggle'}, "slow" , 'swing' , function(){
				
				$( '#backpack' ).html( '' );
				
				newItems.sort( function( a , b ){
					if( a.price > b.price ){
						return -1;
					}
					else if(  a.price < b.price ){
						return 1;
					}
					
					return 0;
				});
				
				for( var iPosition = 0; iPosition < newItems.length; iPosition++ ){
					$( '#backpack' ).append( '<div class="wrapItem" style = "position: relative;display: inline-block;margin-bottom: 20px;" ><div data-toggle="tooltip" data-placement="right" data-html="true" title="" data-original-title="' + newItems[ iPosition ].title +  '" data-full-name = "' + newItems[ iPosition ].name +'" data-price = "' + newItems[ iPosition ].price + '" data-classid = "' + newItems[ iPosition ].classid + '" data-condition = "' + newItems[ iPosition ].condition + '" data-amount = "' + newItems[ iPosition ].amount + '" class = "item" style = "display: inline-block;" ><img class="smallimg" style = "cursor: pointer" src = "https://steamcommunity-a.akamaihd.net/economy/image/class/730/' + newItems[ iPosition ].classid + '/80fx80f" height = "72" width = "72" alt="' + newItems[ iPosition ].name +'" "><p style = "z-index: 100;position: absolute;color: #555;;font-size: 1rem;width: 100%;height: 1rem;font-weight: bold;text-align:center;bottom: -5px;">' + newItems[ iPosition ].condition + '<br/>' + newItems[ iPosition ].price.toFixed( 2 ) + '$<br>' + newItems[ iPosition ].amount +'</p></div></div>' );
				}
				
				$( '#groupBy' ).after( '<button style="padding: 12px 30px;border-radius: 50px;background-color: #8BC34A;color: white;border-color: transparent;margin-left: auto;font-family: Lato;display: block;text-decoration: none;margin-top: 5px;" id = "groupPrices" >Group by price</button></div>' );
				
				$('[data-toggle="tooltip"]').tooltip();
				
				$( '#groupBy' ).text( 'Separation' );
				
				$( '#backpack' ).animate({height: 'toggle'}, "slow" , 'swing' );
			})
		}
		else{
			modeInventory = 0;
			
			$( '#groupPrices' ).remove();
			
			var currentItems = $( '.wrapItem > .item' );
			
			var newItems = [];
			
			for( var iPosition = 0; iPosition < currentItems.length ; iPosition++ ){
				var itemName = $( currentItems[ iPosition ]).data( 'full-name' ),
					itemPrice = parseFloat( $( currentItems[ iPosition ] ).data( 'price' ) ),
					originalTitle = $( currentItems[ iPosition ] ).data( 'original-title' ),
					classId = $( currentItems[ iPosition ] ).data( 'classid' ),
					condition = $( currentItems[ iPosition ] ).data( 'condition' ),
					amount = $( currentItems[ iPosition ] ).data( 'amount' );
				
				newItems.push( { name: itemName , amount: amount , price: itemPrice , title: originalTitle , classid: classId , condition: condition } );
			}
			
			$( '#backpack' ).animate({height: 'toggle'}, "slow" , 'swing' , function(){
				$( '#backpack' ).html( '' );
				
				newItems.sort( function( a , b ){
					if( a.price > b.price ){
						return -1;
					}
					else if(  a.price < b.price ){
						return 1;
					}
					
					return 0;
				});
				
				for( var iPosition = 0; iPosition < newItems.length; iPosition++ ){
					for( var iPositionNew = 0; iPositionNew < newItems[ iPosition ].amount; iPositionNew++ ){
						$( '#backpack' ).append( '<div class="wrapItem" style = "position: relative;display: inline-block;margin-bottom: 20px;" ><div data-toggle="tooltip" data-placement="right" data-html="true" title="" data-original-title="' + newItems[ iPosition ].title +  '" data-full-name = "' + newItems[ iPosition ].name +'" data-price = "' + newItems[ iPosition ].price + '" data-classid = "' + newItems[ iPosition ].classid + '" data-condition = "' + newItems[ iPosition ].condition + '" class = "item" style = "display: inline-block;" ><img class="smallimg" style = "cursor: pointer" src = "https://steamcommunity-a.akamaihd.net/economy/image/class/730/' + newItems[ iPosition ].classid + '/80fx80f" height = "72" width = "72" alt="' + newItems[ iPosition ].name +'" "><p style = "z-index: 100;position: absolute;color: #555;;font-size: 1rem;width: 100%;height: 1rem;font-weight: bold;text-align:center;bottom: -5px;">' + newItems[ iPosition ].condition + '<br/>' + newItems[ iPosition ].price.toFixed( 2 ) + '$</p></div></div>' );
					}
				}
				
				$('[data-toggle="tooltip"]').tooltip();
				
				$( '#groupBy' ).text( 'Group' );
				
				$( '#backpack' ).animate({height: 'toggle'}, "slow" , 'swing' );
			})
		}
		
		return false;
	});
	
	$( document ).on( 'click' , '#groupPrices' , function( event ){
		event.preventDefault();
		
		var currentItems = $( '.wrapItem > .item' );
			
			var newItems = [];
			
			for( var iPosition = 0; iPosition < currentItems.length ; iPosition++ ){
				var itemName = $( currentItems[ iPosition ]).data( 'full-name' ),
					itemPrice = parseFloat( $( currentItems[ iPosition ] ).data( 'price' ) ),
					originalTitle = $( currentItems[ iPosition ] ).data( 'original-title' ),
					classId = $( currentItems[ iPosition ] ).data( 'classid' ),
					condition = $( currentItems[ iPosition ] ).data( 'condition' ),
					amount = $( currentItems[ iPosition ] ).data( 'amount' );
				
				var foundPosition = -1;
				
				for( var iPositionNew = 0; iPositionNew < newItems.length; iPositionNew++ ){
					if( newItems[ iPositionNew ].name == itemName ){
						foundPosition = iPositionNew;
						
						break;
					}
				}
				
				newItems.push( { name: itemName , amount: amount , price: itemPrice , title: originalTitle , classid: classId , condition: condition } );
			}
			
			$( '#backpack' ).animate({height: 'toggle'}, "slow" , 'swing' , function(){
				
				$( '#backpack' ).html( '' );
				
				newItems.sort( function( a , b ){
					if( a.price > b.price ){
						return -1;
					}
					else if(  a.price < b.price ){
						return 1;
					}
					
					return 0;
				});
				
				for( var iPosition = 0; iPosition < newItems.length; iPosition++ ){
					$( '#backpack' ).append( '<div class="wrapItem" style = "position: relative;display: inline-block;margin-bottom: 20px;" ><div data-toggle="tooltip" data-placement="right" data-html="true" title="" data-original-title="' + newItems[ iPosition ].title +  '" data-full-name = "' + newItems[ iPosition ].name +'" data-price = "' + newItems[ iPosition ].price + '" data-classid = "' + newItems[ iPosition ].classid + '" data-condition = "' + newItems[ iPosition ].condition + '" data-amount = "' + newItems[ iPosition ].amount + '" class = "item" style = "display: inline-block;" ><img class="smallimg" style = "cursor: pointer" src = "https://steamcommunity-a.akamaihd.net/economy/image/class/730/' + newItems[ iPosition ].classid + '/80fx80f" height = "72" width = "72" alt="' + newItems[ iPosition ].name +'" "><p style = "z-index: 100;position: absolute;color: #555;;font-size: 1rem;width: 100%;height: 1rem;font-weight: bold;text-align:center;bottom: -5px;">' + newItems[ iPosition ].condition + '<br/>' + ( newItems[ iPosition ].price * newItems[ iPosition ].amount ).toFixed( 2 ) + '$<br>' + newItems[ iPosition ].amount +'</p></div></div>' );
				}
				
				$('[data-toggle="tooltip"]').tooltip();
				
				$( '#groupBy' ).text( 'Separation' );
				
				$( '#backpack' ).animate({height: 'toggle'}, "slow" , 'swing' );
			})
		
		return false;
	});
	
	$( '#statsRoundTodayImg' ).click( function(){
		showStats();
	});
	$( '#unlimitedPotDiv #statsWinTodayImg' ).click( function(){
		showHistory( biggestRound );
	});
	
	$( '#unlimitedPotDiv #statsLuckyImg' ).click( function(){
		showHistory( luckyRound );
	});
	
	$( '#highPotDiv #statsWinTodayImg' ).click( function(){
		showHistory( biggestRoundHigh );
	});
	
	$( '#highPotDiv #statsLuckyImg' ).click( function(){
		showHistory( luckyRoundHigh );
	});

	$( '.emoticon' ).click( function( event ){
		var text = $( event.target ).attr( 'title' );
		
		$( '#inputMessage' ).val( $( '#inputMessage' ).val() + text + ' ' );
	});
	
	$( document ).on( 'hover' , '.ember-view' , function( event ){
		
		var element = event.target;
		
		var classList = $( element ).attr( 'class' );
		
		if( classList.indexOf( 'highlighted' ) != -1 ){
			return;
		}
		
		$( '.highlighted' ).remove();
		
		$( element ).addClass( 'highlighted' );
	});
	
	$('#historyModal').on('hide.bs.modal', function (e) {
		
		currentPageHistory = 1;
		
		$( '#backdrop' ).remove();
		
		$( '#historySearch' ).val( '' );
	});
	
	$('#rankingModal').on('hide.bs.modal', function (e) {
		if( showProfileId == 0 ){
			$( '#backdrop' ).remove();
		}
	});
	
	$('#historyModal').on('hidden.bs.modal', function (e) {
		if( showFairHistory ){
			showFairHistory = 0;
			
			showFair();
			
			return;
		}
		
		if( !showProfileId ){
			return;
		}
		
		$( '#profilModalBody' ).html( '<div class="circle"></div>' );
		
		xhrHistory = $.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/getProfile.php',
			data: { user : showProfileId },
			dataType: 'text',
			success: function(data) {
				$( '#profilModalBody' ).html( data );
				
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
		
		showProfileId = 0;
		
		$( '#profileModal' ).modal( 'show' );
		
		showBackdrop();
	});
	
	$('#rankingModal').on('hidden.bs.modal', function (e) {
		
		if( !showProfileId ){
			return;
		}
		
		$( '#profilModalBody' ).html( '<div class="circle"></div>' );
		xhrHistory = $.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/en/getProfile.php',
			data: { user : showProfileId },
			dataType: 'text',
			success: function(data) {
				$( '#profilModalBody' ).html( data );
				
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
		
		showProfileId = 0;
		
		$( '#profileModal' ).modal( 'show' );
		showBackdrop();
	});
	
	$('#settingsModalNew').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
		
		$.post( "https://skinsproject.pl/saveTrade.php", { tradeurl: $( '#trade_url' ).val()  , email: $( '#email' ).val() } );
	});
	
	$('#profileModal').on('hide.bs.modal', function (e) {
		modeInventory = 0;
		
		$( '#backdrop' ).remove();
	});
	
	$('#profileModal').on('hidden.bs.modal', function (e) {
		$( 'body' ).css( 'padding-right' , '0px' );
	});
	
	$( document ).on( 'click' , '#backPage' , function( event ){
		event.preventDefault();
		
		currentPageHistory--;
		
		var url = 'https://skinsproject.pl/en/getHistory.php';
		
		if( currentJackpotMode == 1 ){
			url = 'https://skinsproject.pl/en/getHistoryHigh.php'
		}
		
		$("#historyModalBody").html(  '<div class="circle"></div>' );
		
		if( currentPageHistory == 1 ){
			xhrHistory = $.ajax({
				type: "POST",
				url: url,
				data: { page : currentPageHistory },
				dataType: 'text',
				success: function(data) {
					$( '#historyModalBody' ).html( data );
					
					$( '#historyModalBody' ).append( '<ul class="pager">\
						<li class="next"><a href="#" id = "nextPage" style="\
						font-family: Lato;\
						font-size: 13px;\
						color: #fff;\
						text-transform: uppercase;\
						text-align: center;\
						display: inline-block;\
						border-radius: 50px;\
						background-color: #8BC34A;\
						border-style: none;\
						margin-right: 5px;\
						padding: 5px 20px;\
					" >Next <span aria-hidden="true">&rarr;</span></a></li>\
					  </ul>' );
					
					$('[data-toggle="tooltip"]').tooltip();                
				}                  
			});

		}
		else{
			xhrHistory = $.ajax({
				type: "POST",
				url: url,
				data: { page : currentPageHistory },
				dataType: 'text',
				success: function(data) {
					$( '#historyModalBody' ).html( data );
					
					$( '#historyModalBody' ).append( '<ul class="pager">\
					<li class="previous"><a href="#" id = "backPage" style="\
						font-family: Lato;\
						font-size: 13px;\
						color: #fff;\
						text-transform: uppercase;\
						text-align: center;\
						display: inline-block;\
						border-radius: 50px;\
						background-color: #8BC34A;\
						border-style: none;\
						margin-right: 5px;\
						padding: 5px 20px;\
					" ><span aria-hidden="true">&larr;</span> Back</a></li>\
						<li class="next"><a href="#" id = "nextPage" style="\
						font-family: Lato;\
						font-size: 13px;\
						color: #fff;\
						text-transform: uppercase;\
						text-align: center;\
						display: inline-block;\
						border-radius: 50px;\
						background-color: #8BC34A;\
						border-style: none;\
						margin-right: 5px;\
						padding: 5px 20px;\
					" >Next <span aria-hidden="true">&rarr;</span></a></li>\
					  </ul>' );
					
					$('[data-toggle="tooltip"]').tooltip();                
				}                  
			});
		
		}
		
		return false;
	});
	
	$( document ).on( 'click' , '#nextPage' , function( event ){
		event.preventDefault();
		
		currentPageHistory++;
			
		$("#historyModalBody").html(  '<div class="circle"></div>' );
		
		var url = 'https://skinsproject.pl/en/getHistory.php';
		
		if( currentJackpotMode == 1 ){
			url = 'https://skinsproject.pl/en/getHistoryHigh.php'
		}
		xhrHistory = $.ajax({
			type: "POST",
			url: url,
			data: { page : currentPageHistory },
			dataType: 'text',
			success: function(data) {
				$( '#historyModalBody' ).html( data );
				
				$( '#historyModalBody' ).append( '<ul class="pager">\
				<li class="previous"><a href="#" id = "backPage" style="\
    font-family: Lato;\
    font-size: 13px;\
    color: #fff;\
    text-transform: uppercase;\
    text-align: center;\
    display: inline-block;\
    border-radius: 50px;\
    background-color: #8BC34A;\
    border-style: none;\
    margin-right: 5px;\
    padding: 5px 20px;\
" ><span aria-hidden="true">&larr;</span> Back</a></li>\
    <li class="next"><a href="#" id = "nextPage" style="\
    font-family: Lato;\
    font-size: 13px;\
    color: #fff;\
    text-transform: uppercase;\
    text-align: center;\
    display: inline-block;\
    border-radius: 50px;\
    background-color: #8BC34A;\
    border-style: none;\
    margin-right: 5px;\
    padding: 5px 20px;\
" >Next <span aria-hidden="true">&rarr;</span></a></li>\
  </ul>' );
				
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
		
		return false;
	});
	
	$( document ).on( 'click' , '#backPageMyWins' , function( event ){
		event.preventDefault();
		
		if( pageMyGames > 0 ){
			pageMyGames--;
		}
		
		if( pageMyGames == 0 ){
			 $( '#backPageMyWins').remove();
		}
		
		var url = 'https://skinsproject.pl/en/getMyRounds.php';
		
		if( currentJackpotMode == 1 ){
			url = 'https://skinsproject.pl/en/getMyRoundsHigh.php'
		}
		
		if( $( '#switch-modal-tryb' ).is(':checked') ){
			$( '.myWinsRounds' ).html( '<div class="circle"></div>' );
			
			$.ajax({
				type: "POST",
				data: { mode: 0 , page: pageMyGames },
				url: url,
				dataType: 'text',
				success: function(data) {
					$( '.myWinsRounds' ).html( data );
					
					if( $( '#nextPageMyWins').length == 0 ){
						$( '<a href="#" id="nextPageMyWins" style="font-family: Lato;font-size: 13px;color: #fff;text-transform: uppercase;text-align: center;display: inline-block;border-radius: 50px;background-color: #8BC34A;border-style: none;margin-right: 10px;padding: 5px 20px;float: right;text-decoration: none;display: inline-block;">Dalej <span aria-hidden="true">?</span></a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '#backPageMyWins').length == 0 && pageMyGames != 0 ){
						$( '<a href="#" id="backPageMyWins" style="    font-family: Lato;    font-size: 13px;    color: #fff;    text-transform: uppercase;    text-align: center;    display: inline-block;    border-radius: 50px;    background-color: #8BC34A;    border-style: none;    margin-right: 10px;    padding: 5px 20px;    margin-left: 5px;    text-decoration: none;"><span aria-hidden="true">?</span> Wstecz</a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '.myWinsRound' ).length < 10 ){
						$( '#nextPageMyWins').remove();
					}
				}
			});
		}
		else{
			$( '.myWinsRounds' ).html( '<div class="circle"></div>' );
			
			$.ajax({
				type: "POST",
				data: { mode: 1 , page: pageMyGames },
				url: url,
				dataType: 'text',
				success: function(data) {
					$( '.myWinsRounds' ).html( data );
					
					if( $( '#nextPageMyWins').length == 0 ){
						$( '<a href="#" id="nextPageMyWins" style="font-family: Lato;font-size: 13px;color: #fff;text-transform: uppercase;text-align: center;display: inline-block;border-radius: 50px;background-color: #8BC34A;border-style: none;margin-right: 10px;padding: 5px 20px;float: right;text-decoration: none;display: inline-block;">Dalej <span aria-hidden="true">?</span></a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '#backPageMyWins').length == 0 && pageMyGames != 0  ){
						$( '<a href="#" id="backPageMyWins" style="    font-family: Lato;    font-size: 13px;    color: #fff;    text-transform: uppercase;    text-align: center;    display: inline-block;    border-radius: 50px;    background-color: #8BC34A;    border-style: none;    margin-right: 10px;    padding: 5px 20px;    margin-left: 5px;    text-decoration: none;"><span aria-hidden="true">?</span> Wstecz</a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '.myWinsRound' ).length < 10 ){
						$( '#nextPageMyWins').remove();
					}
				}
			});
		}
		
		return false;
	});
	
	$( document ).on( 'click' , '#nextPageMyWins' , function( event ){
		event.preventDefault();
		
		pageMyGames++;
		
		var url = 'https://skinsproject.pl/en/getMyRounds.php';
		
		if( currentJackpotMode == 1 ){
			url = 'https://skinsproject.pl/en/getMyRoundsHigh.php'
		}
		
		if( $( '#switch-modal-tryb' ).is(':checked') ){
			$( '.myWinsRounds' ).html( '<div class="circle"></div>' );
			
			$.ajax({
				type: "POST",
				data: { mode: 0 , page: pageMyGames },
				url: url,
				dataType: 'text',
				success: function(data) {
					$( '.myWinsRounds' ).html( data );
					
					if( $( '#nextPageMyWins').length == 0 ){
						$( '<a href="#" id="nextPageMyWins" style="font-family: Lato;font-size: 13px;color: #fff;text-transform: uppercase;text-align: center;display: inline-block;border-radius: 50px;background-color: #8BC34A;border-style: none;margin-right: 10px;padding: 5px 20px;float: right;text-decoration: none;display: inline-block;">Dalej <span aria-hidden="true">?</span></a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '#backPageMyWins').length == 0 ){
						$( '<a href="#" id="backPageMyWins" style="    font-family: Lato;    font-size: 13px;    color: #fff;    text-transform: uppercase;    text-align: center;    display: inline-block;    border-radius: 50px;    background-color: #8BC34A;    border-style: none;    margin-right: 10px;    padding: 5px 20px;    margin-left: 5px;    text-decoration: none;"><span aria-hidden="true">?</span> Wstecz</a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '.myWinsRound' ).length < 10 ){
						$( '#nextPageMyWins').remove();
					}
				}
			});
		}
		else{
			$( '.myWinsRounds' ).html( '<div class="circle"></div>' );
			
			$.ajax({
				type: "POST",
				data: { mode: 1 , page: pageMyGames },
				url: url,
				dataType: 'text',
				success: function(data) {
					$( '.myWinsRounds' ).html( data );
					
					if( $( '#nextPageMyWins').length == 0 ){
						$( '<a href="#" id="nextPageMyWins" style="font-family: Lato;font-size: 13px;color: #fff;text-transform: uppercase;text-align: center;display: inline-block;border-radius: 50px;background-color: #8BC34A;border-style: none;margin-right: 10px;padding: 5px 20px;float: right;text-decoration: none;display: inline-block;">Dalej <span aria-hidden="true">?</span></a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '#backPageMyWins').length == 0 ){
						$( '<a href="#" id="backPageMyWins" style="    font-family: Lato;    font-size: 13px;    color: #fff;    text-transform: uppercase;    text-align: center;    display: inline-block;    border-radius: 50px;    background-color: #8BC34A;    border-style: none;    margin-right: 10px;    padding: 5px 20px;    margin-left: 5px;    text-decoration: none;"><span aria-hidden="true">?</span> Wstecz</a>' ).appendTo( '#mywinsModalBody > div > div ' );
					}
					
					if( $( '.myWinsRound' ).length < 10 ){
						$( '#nextPageMyWins').remove();
					}
				}
			});
		}
		
		return false;
	});
	$('#winnerModalTradeLink').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	});
	
	$('#winnerModalFail').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	});
	
	$('#winnerModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	});
});

function showWinnerTrade( offerId , errorCode ){
	if( isABootstrapModalOpen() ){
		return;
	}
	
	if( errorCode == -1 || errorCode == -3 ){
		$( '#winnerModalTradeLink' ).modal('show');
		
		var newDiv = document.createElement('div');
		
		if( $( '#unlimitedPotDiv #rotator' ).width() != 0 ){
		
			var offset = $( '#unlimitedPotDiv #rotator' ).offset();
			
			$( newDiv ).attr( 'id' , 'backdrop' )
			
			$( newDiv ).offset({ top: offset.top, left: offset.left})
			$( newDiv ).css( 'position' , 'absolute' );
			$( newDiv ).css( 'background-color' , '#577c2d' );
			
			$( newDiv ).css( 'opacity' , '0.78' );
			
			$( newDiv ).height( $( 'body' ).outerHeight() );
			$( newDiv ).width( $( '#unlimitedPotDiv #rotator' ).width() );
		}
		else if( $( '#highPotDiv #rotator' ).width() != 0 ){
			var offset = $( '#highPotDiv #rotator' ).offset();
			
			$( newDiv ).attr( 'id' , 'backdrop' )
			
			$( newDiv ).offset({ top: offset.top, left: offset.left})
			$( newDiv ).css( 'position' , 'absolute' );
			$( newDiv ).css( 'background-color' , '#577c2d' );
			
			$( newDiv ).css( 'opacity' , '0.78' );
			
			$( newDiv ).height( $( 'body' ).outerHeight() );
			$( newDiv ).width( $( '#highPotDiv #rotator' ).width() );
		}
		
		$( 'body' ).append( newDiv );
	}
	else if( !offerId ){
		$( '#winnerModalFail' ).modal('show');
		
		var newDiv = document.createElement('div');

		if( $( '#unlimitedPotDiv #rotator' ).width() != 0 ){
		
			var offset = $( '#unlimitedPotDiv #rotator' ).offset();
			
			$( newDiv ).attr( 'id' , 'backdrop' )
			
			$( newDiv ).offset({ top: offset.top, left: offset.left})
			$( newDiv ).css( 'position' , 'absolute' );
			$( newDiv ).css( 'background-color' , '#577c2d' );
			
			$( newDiv ).css( 'opacity' , '0.78' );
			
			$( newDiv ).height( $( 'body' ).outerHeight() );
			$( newDiv ).width( $( '#unlimitedPotDiv #rotator' ).width() );
		}
		else if( $( '#highPotDiv #rotator' ).width() != 0 ){
			var offset = $( '#highPotDiv #rotator' ).offset();
			
			$( newDiv ).attr( 'id' , 'backdrop' )
			
			$( newDiv ).offset({ top: offset.top, left: offset.left})
			$( newDiv ).css( 'position' , 'absolute' );
			$( newDiv ).css( 'background-color' , '#577c2d' );
			
			$( newDiv ).css( 'opacity' , '0.78' );
			
			$( newDiv ).height( $( 'body' ).outerHeight() );
			$( newDiv ).width( $( '#highPotDiv #rotator' ).width() );
		}
		
		$( 'body' ).append( newDiv );
	}
	else{
		$( '#winnerTradeOffer' ).attr("href" , 'https://steamcommunity.com/tradeoffer/' + offerId + '/' );
		
		$( '#winnerTradeOfferSteam' ).attr( "href" , 'steam://url/ShowTradeOffer/' + offerId );
		
		$( '#winnerModal' ).modal('show');
		
		var newDiv = document.createElement('div');

		var offset = $( '#rotator' ).offset();
		
		if( $( '#unlimitedPotDiv #rotator' ).width() != 0 ){
		
			var offset = $( '#unlimitedPotDiv #rotator' ).offset();
			
			$( newDiv ).attr( 'id' , 'backdrop' )
			
			$( newDiv ).offset({ top: offset.top, left: offset.left})
			$( newDiv ).css( 'position' , 'absolute' );
			$( newDiv ).css( 'background-color' , '#577c2d' );
			
			$( newDiv ).css( 'opacity' , '0.78' );
			
			$( newDiv ).height( $( 'body' ).outerHeight() );
			$( newDiv ).width( $( '#unlimitedPotDiv #rotator' ).width() );
		}
		else if( $( '#highPotDiv #rotator' ).width() != 0 ){
			var offset = $( '#highPotDiv #rotator' ).offset();
			
			$( newDiv ).attr( 'id' , 'backdrop' )
			
			$( newDiv ).offset({ top: offset.top, left: offset.left})
			$( newDiv ).css( 'position' , 'absolute' );
			$( newDiv ).css( 'background-color' , '#577c2d' );
			
			$( newDiv ).css( 'opacity' , '0.78' );
			
			$( newDiv ).height( $( 'body' ).outerHeight() );
			$( newDiv ).width( $( '#highPotDiv #rotator' ).width() );
		}
		
		$( 'body' ).append( newDiv );
	}
}

function drawStopStart(){	
    drawStopInterval = requestAnimationFrame(drawStopStart);
		
	drawStop();
}

function drawStopStartHigh(){	
    drawStopIntervalHigh = requestAnimationFrame(drawStopStartHigh);
		
	drawStopHigh();
}

function drawStop(){
	context.save();
	
	context.clearRect(0, 0, canvas.width , canvas.height);
	
	context.translate( -canvasTmpPosition , 0 );
	
	var tmpPosition = 15;
	
	while( tmpPosition <= canvas.width + canvasTmpPosition ){
		if( tmpPosition >= canvasTmpPosition - 90 && tmpPosition <= canvasTmpPosition + canvas.width ){
			try{
				context.drawImage( idleImage , tmpPosition , 0 , 90 , 90 );
			}
			catch( err ){
			}
		}
		
		tmpPosition += 110;


	}
	
	context.restore();
	
	context.translate( 0 , 0 );
	
	context.beginPath();
	context.rect( ( canvas.width / 2.0 ) - 45.0 ,0,90,90);
    context.lineWidth = 3;

    context.strokeStyle = '#8dc740';
    context.stroke();
	
	canvasTmpPosition += 4;
}

function drawStopHigh(){
	contextHigh.save();
	
	contextHigh.clearRect(0, 0, canvasHigh.width , canvasHigh.height);
	
	contextHigh.translate( -canvasTmpPositionHigh , 0 );
	
	var tmpPosition = 15;
	
	while( tmpPosition <= canvasHigh.width + canvasTmpPositionHigh ){
		if( tmpPosition >= canvasTmpPositionHigh - 90 && tmpPosition <= canvasTmpPositionHigh + canvasHigh.width ){
			try{
				contextHigh.drawImage( idleImage , tmpPosition , 0 , 90 , 90 );
			}
			catch( err ){
				
			}
		}
		
		tmpPosition += 110;
	}
	
	contextHigh.restore();
	
	contextHigh.translate( 0 , 0 );
	
	contextHigh.beginPath();
	contextHigh.rect( ( canvasHigh.width / 2.0 ) - 45.0 ,0,90,90);
    contextHigh.lineWidth = 3;

    contextHigh.strokeStyle = '#8dc740';
    contextHigh.stroke();
	
	canvasTmpPositionHigh += 4;
}

function drawGameStart(){
	drawGameInterval = requestAnimationFrame(drawGameStart);
		
	drawGame();
}

function drawGameStartHigh(){
	drawGameIntervalHigh = requestAnimationFrame(drawGameStartHigh);
		
	drawGameHigh();
}

function drawGame(){
	if( imagesToDraw.length == 0 ){
		return;	
	}
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var tmpPosition = 15;
	
	var currentImage = 0;
	
	context.save();
	
	context.translate( -canvasTmpPosition , 0 );
	
	while( tmpPosition - canvasTmpPosition <= canvas.width ){
		for( var iPosition = 0; iPosition < imagesToDraw[ currentImage ][ 4 ]; iPosition++ ){
			
			if( tmpPosition >= canvasTmpPosition - 90 && tmpPosition <= canvasTmpPosition + canvas.width ){
				try{
					context.drawImage( imagesToDraw[ currentImage ][ 0 ] , tmpPosition , 0 , 90 , 90 );
				}
				catch( err ){
					
				}
			}
		
			tmpPosition += 110;
		}
		
		currentImage++;
		
		if( currentImage >= imagesToDraw.length ){
			currentImage = 0;
		}
	}
	
	context.restore();
	
	context.translate( 0 , 0 );
	
	context.beginPath();
	context.rect( ( canvas.width / 2.0 ) - 45.0 ,0,90,90);
    context.lineWidth = 3;

    context.strokeStyle = '#8dc740';
    context.stroke();
	
	canvasTmpPosition += 4;
}

function drawGameHigh(){
	if( imagesToDrawHigh.length == 0 ){
		return;	
	}
	
	contextHigh.clearRect(0, 0, canvasHigh.width, canvasHigh.height);
	
	var tmpPosition = 15;
	
	var currentImage = 0;
	
	contextHigh.save();
	
	contextHigh.translate( -canvasTmpPositionHigh , 0 );
	
	while( tmpPosition - canvasTmpPositionHigh <= canvasHigh.width ){
		for( var iPosition = 0; iPosition < imagesToDrawHigh[ currentImage ][ 4 ]; iPosition++ ){
			
			if( tmpPosition >= canvasTmpPositionHigh - 90 && tmpPosition <= canvasTmpPositionHigh + canvasHigh.width ){
				try{
					contextHigh.drawImage( imagesToDrawHigh[ currentImage ][ 0 ] , tmpPosition , 0 , 90 , 90 );
				}
				catch( err ){
					
				}
			}
		
			tmpPosition += 110;
		}
		
		currentImage++;
		
		if( currentImage >= imagesToDrawHigh.length ){
			currentImage = 0;
		}
	}
	
	contextHigh.restore();
	
	contextHigh.translate( 0 , 0 );
	
	contextHigh.beginPath();
	contextHigh.rect( ( canvasHigh.width / 2.0 ) - 45.0 ,0,90,90);
    contextHigh.lineWidth = 3;

    contextHigh.strokeStyle = '#8dc740';
    contextHigh.stroke();
	
	canvasTmpPositionHigh += 4;
}
function drawGameSecond(){
	
	if( imagesToDraw.length == 0 ){
		return;	
	}
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	var tmpPosition = 15;
	
	var currentImage = 0;
	
	context.save();
	
	context.translate( -currentCanvasPosition , 0 );
	
	while( tmpPosition <= canvas.width + currentCanvasPosition ){	
		for( var iPosition = 0; iPosition < imagesToDraw[ currentImage ][ 4 ]; iPosition++ ){			
			if( tmpPosition >= currentCanvasPosition - 90 && tmpPosition <= currentCanvasPosition + canvas.width ){
				try{
					context.drawImage( imagesToDraw[ currentImage ][ 0 ] , tmpPosition , 0 , 90 , 90 );
				}
				catch( err ){
					
				}
			}
		
			tmpPosition += 110;
		}
		
		currentImage++;
		
		if( currentImage >= imagesToDraw.length ){
			currentImage = 0;
		}


	}
	
	context.restore();

	context.beginPath();
	context.rect( ( canvas.width / 2.0 ) - 45.0 ,0,90,90);
    context.lineWidth = 3;

    context.strokeStyle = '#8dc740';
    context.stroke();
}

function drawGameSecondHigh(){
	
	if( imagesToDrawHigh.length == 0 ){
		return;	
	}
	
	contextHigh.clearRect(0, 0, canvasHigh.width, canvasHigh.height);
	
	var tmpPosition = 15;
	
	var currentImage = 0;
	
	contextHigh.save();
	
	contextHigh.translate( -currentCanvasPositionHigh , 0 );
	
	while( tmpPosition <= canvasHigh.width + currentCanvasPositionHigh ){	
		for( var iPosition = 0; iPosition < imagesToDrawHigh[ currentImage ][ 4 ]; iPosition++ ){
			if( tmpPosition >= currentCanvasPositionHigh - 90 && tmpPosition <= currentCanvasPositionHigh + canvasHigh.width ){			
				try{
					contextHigh.drawImage( imagesToDrawHigh[ currentImage ][ 0 ] , tmpPosition , 0 , 90 , 90 );
				}
				catch( err ){
					
				}
			}
		
			tmpPosition += 110;
		}
		
		currentImage++;
		
		if( currentImage >= imagesToDrawHigh.length ){
			currentImage = 0;
		}
	}
	
	contextHigh.restore();
	
	contextHigh.beginPath();
	contextHigh.rect( ( canvasHigh.width / 2.0 ) - 45.0 ,0,90,90);
    contextHigh.lineWidth = 3;

    contextHigh.strokeStyle = '#8dc740';
    contextHigh.stroke();
}


function moveGame(){
	var winnerPosition = 0;
	
	var tmpPosition = 15;
	
	var currentImage = 0;
	
	while( true ){
		for( var iPosition = 0; iPosition < imagesToDraw[ currentImage ][ 4 ]; iPosition++ ){
			
			if( tmpPosition - canvasTmpPosition > 0.0 && imagesToDraw[ currentImage ][ 1 ] == winnerId ){
				var currentPosition = tmpPosition - canvasTmpPosition;
				
				acceleration = ( 2.0 * ( currentPosition - ( ( canvas.width / 2.0 ) - 45.0 ) ) ) / ( 5.0 * 5.0 );
				currentSpeed = acceleration * 5.0;
				
				if( currentSpeed > 2000 ){
					
					winnerPosition = currentPosition;
					
					tmpPosition += 110;
					
					break;
				}
			}
		
			tmpPosition += 110;
		}
		
		if( winnerPosition != 0 ){
			break;
		}
		
		currentImage++;
		
		if( currentImage >= imagesToDraw.length ){
			currentImage = 0;
		}
	}
	
	acceleration = ( 2.0 * ( winnerPosition - ( ( canvas.width / 2.0 ) - 45.0 ) ) ) / ( 5.0 * 5.0 );
	currentSpeed = acceleration * 5.0;

	globalWinnerPosition = winnerPosition + canvasTmpPosition;
	
	currentCanvasPosition = canvasTmpPosition;
	
	canvasTmpPosition = 0;
	
	currentSlowTime = Date.now();
	
	slowDownInterval = setInterval( slowDownSpeed , 5 );
	moveCanvasInterval = setInterval( drawGameSecond , 1000 / 30 )
}

function moveGameHigh(){
	var winnerPosition = 0;
	
	var tmpPosition = 15;
	
	var currentImage = 0;
	
	while( true ){
		for( var iPosition = 0; iPosition < imagesToDrawHigh[ currentImage ][ 4 ]; iPosition++ ){
			
			if( tmpPosition - canvasTmpPositionHigh > 0.0 && imagesToDrawHigh[ currentImage ][ 1 ] == winnerIdHigh ){
				var currentPosition = tmpPosition - canvasTmpPositionHigh;
				
				accelerationHigh = ( 2.0 * ( currentPosition - ( ( canvasHigh.width / 2.0 ) - 45.0 ) ) ) / ( 5.0 * 5.0 );
				currentSpeedHigh = accelerationHigh * 5.0;
				
				if( currentSpeedHigh > 2000 ){
					
					winnerPosition = currentPosition;
					
					tmpPosition += 110;
					
					break;
				}
			}
		
			tmpPosition += 110;
		}
		
		if( winnerPosition != 0 ){
			break;
		}
		
		currentImage++;
		
		if( currentImage >= imagesToDrawHigh.length ){
			currentImage = 0;
		}
	}
	
	accelerationHigh = ( 2.0 * ( winnerPosition - ( ( canvasHigh.width / 2.0 ) - 45.0 ) ) ) / ( 5.0 * 5.0 );
	currentSpeedHigh = accelerationHigh * 5.0;

	globalWinnerPositionHigh = winnerPosition + canvasTmpPositionHigh;
	
	currentCanvasPositionHigh = canvasTmpPositionHigh;
	
	canvasTmpPositionHigh = 0;
	
	currentSlowTimeHigh = Date.now();
	
	slowDownIntervalHigh = setInterval( slowDownSpeedHigh , 5 );
	moveCanvasIntervalHigh = setInterval( drawGameSecondHigh , 1000 / 30 )
}

function slowDownSpeed(){
	var currentTime = Date.now();
	
	var amount = currentTime - currentSlowTime;
	
	if( amount < 1 ){
		amount = 1;
	}
	
	for( var iPosition = 0; iPosition < amount; iPosition++ ){	
	
		currentSpeed -= ( acceleration / 1000.0 );
		
		currentCanvasPosition += ( currentSpeed / 1000.0 );
		
		if( currentSpeed <= 0.0 ){
			break;
		}
	}
	
	currentSlowTime = currentTime;
	
	if( currentSpeed <= 0.0 ){
		
		clearInterval( slowDownInterval );
		clearInterval( moveCanvasInterval );
		
		slowDownInterval = 0;
		moveCanvasInterval = 0; 
		
		drawGameSecond();
		
		if( desktopNotification && 'Notification' in window ){
			var user = undefined;
			
			playerData.forEach(function(player){
				if( player.id == winnerId ){
					user = player;
				}
			});
			
			try{
				var notificationRound = new Notification( 'Runde #' + currentRound + ' Wygral ' + user.name , { icon: user.avatar } );
			
				setTimeout( function(){
					notificationRound.close();
				} , 5000 );
			}
			catch ( Error ) {
			}
		}
		
		if( audioPlay && typeof Audio !== 'undefined' ){
			if( winnerIdEncode == userId ){
				try{	
					var snd = new Audio("sounds/winner.mp3");
					snd.play().catch( function(){
					});
				}
				catch( Error ){
					
				}
			}
			else{
				try{
					var snd = new Audio("sounds/orch_hit_csharp_short.mp3");
					snd.play().catch( function(){
					});
				}
				catch( Error ){
					
				}
			}
		}
		
		$( '#infoEnd' ).remove();
		
		$('#playersList_'+winnerId).css( 'background-color' , 'rgba(139,195,74,0.16)' );
		$('#playersList_'+winnerId).css( 'padding' , '20px 28px' );
		$('#playersList_'+winnerId).css( 'border-bottom' , 'solid 1px #8bc34a' );
		$('#playersList_'+winnerId).css( 'color' , '#8bc34a' );
		$('#playersList_'+winnerId).css( 'font-size' , '16px' );
		$('#playersList_'+winnerId).css( 'font-weight' , '600' );
		
		$('#WinTicket').html( 'Winning ticket: ' + winningTicket );
		
		if( winnerIdEncode == userId ){
			fireworks();
		}
		
		return;
	}
}

function slowDownSpeedHigh(){
	var currentTime = Date.now();
	
	var amount = currentTime - currentSlowTimeHigh;
	
	if( amount < 1 ){
		amount = 1;
	}
	
	for( var iPosition = 0; iPosition < amount; iPosition++ ){	
	
		currentSpeedHigh -= ( accelerationHigh / 1000.0 );
		
		currentCanvasPositionHigh += ( currentSpeedHigh / 1000.0 );
		
		if( currentSpeedHigh <= 0.0 ){
			break;
		}
	}
	
	currentSlowTimeHigh = currentTime;
	
	if( currentSpeedHigh <= 0.0 ){
		
		clearInterval( slowDownIntervalHigh );
		clearInterval( moveCanvasIntervalHigh );
		
		slowDownIntervalHigh = 0;
		moveCanvasIntervalHigh = 0; 
		
		drawGameSecondHigh();
		
		if( desktopNotification && 'Notification' in window ){
			var user = undefined;
			
			playerDataHigh.forEach(function(player){
				if( player.id == winnerIdHigh ){
					user = player;
				}
			});
			
			try{
				var notificationRound = new Notification( 'Round #' + currentRoundHigh + ' Win ' + user.name , { icon: user.avatar } );
			
				setTimeout( function(){
					notificationRound.close();
				} , 5000 );
			}
			catch ( Error ) {
			}
		}
		
		if( currentJackpotMode == 1 ){
			if( audioPlay && typeof Audio !== 'undefined' ){
				if( winnerIdEncodeHigh == userId ){
					try{	
						var snd = new Audio("sounds/winner.mp3");
						snd.play().catch( function(){
						});
					}
					catch( Error ){
						
					}
				}
				else{
					try{
						var snd = new Audio("sounds/orch_hit_csharp_short.mp3");
						snd.play().catch( function(){
						});
					}
					catch( Error ){
						
					}
				}
			}
		}
		
		$( '#highPotDiv #infoEnd' ).remove();
		
		$('#highPotDiv #playersList_'+winnerIdHigh).css( 'background-color' , 'rgba(139,195,74,0.16)' );
		$('#highPotDiv #playersList_'+winnerIdHigh).css( 'padding' , '20px 28px' );
		$('#highPotDiv #playersList_'+winnerIdHigh).css( 'border-bottom' , 'solid 1px #8bc34a' );
		$('#highPotDiv #playersList_'+winnerIdHigh).css( 'color' , '#8bc34a' );
		$('#highPotDiv #playersList_'+winnerIdHigh).css( 'font-size' , '16px' );
		$('#highPotDiv #playersList_'+winnerIdHigh).css( 'font-weight' , '600' );
		
		$('#highPotDiv #WinTicket').html( 'Winning ticket: ' + winningTicketHigh );
		
		if( winnerIdEncodeHigh == userId ){
			fireworks();
		}
		
		return;
	}
}

function showSettings(){
	$( '#settingsModalNew' ).modal( 'show' );
	
	showBackdrop();
}

function showAbout(){
	$( '#aboutModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#aboutModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	})
}

function showRegulations(){
	$( '#regulationsModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#regulationsModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	})
}

function showRanking(){
	showProfileId = 0;
	
	$( '#rankingModal' ).modal( 'show' );
	
	showBackdrop();
	
	$( '#rankingModalBody' ).html( '<div class="circle"></div>' );
	
	$.ajax({
		type: "POST",
		url: 'https://skinsproject.pl/en/getRanking.php',
		dataType: 'text',
		success: function(data) {
			$( '#rankingModalBody' ).html( data );
			
			$('[data-toggle="tooltip"]').tooltip();                
		}                  
	});
}

function showWelcome(){
	$( '#welcomeModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#welcomeModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
		
		$.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/setMenu.php',
			dataType: 'text',
			success: function(data) {} 
		});
	})
}

function showGiveawayModal(){
	$( '#giveawayModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#giveawayModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
		
		$.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/setGiveaway.php',
			dataType: 'text',
			success: function(data) {} 
		});
	})
}

function showHistory( roundId ){
	$( '#historyModalBody' ).html( '<div class="circle"></div>' );
	
	var url = 'https://skinsproject.pl/en/getHistory.php';
		
	if( currentJackpotMode == 1 ){
		url = 'https://skinsproject.pl/en/getHistoryHigh.php'
	}
	
	if( !roundId ){
		xhrHistory = $.ajax({
			type: "POST",
			url: url,
			data: { page : 1 },
			dataType: 'text',
			success: function(data) {
				$( '#historyModalBody' ).html( data );
				
				$( '#historyModalBody' ).append( '<ul class="pager">\
					<li class="next"><a href="#" id = "nextPage" style="\
					font-family: Lato;\
					font-size: 13px;\
					color: #fff;\
					text-transform: uppercase;\
					text-align: center;\
					display: inline-block;\
					border-radius: 50px;\
					background-color: #8BC34A;\
					border-style: none;\
					margin-right: 5px;\
					padding: 5px 20px;\
				" >Next <span aria-hidden="true">&rarr;</span></a></li>\
				  </ul>' );
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
	}
	else{
		xhrHistory = $.ajax({
			type: "POST",
			url: url,
			data: { id : roundId },
			dataType: 'text',
			success: function(data) {
				$( '#historyModalBody' ).html( data );
				
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
	}
	
	$( '#historyModal' ).modal( 'show' );
	
	showBackdrop();
}

function showStats(){
	$( '#statsModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#statsModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	})
	
	$('#statsModal').on('shown.bs.modal', function (e) {
		var options = {
			curveType: 'function',
			legend: { position: 'bottom' },
			vAxis: { 
				viewWindow: {
					min:0
				}
			},
			colors: [ '#8BC34A' , '#8BC34A' ]
		};

		var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

		chart.draw( google.visualization.arrayToDataTable( dataChart ), options);

	})
}

function showMyWins(){
	$( '#mywinsModalBody' ).html( '<div class="circle"></div>' );
	
	pageMyGames = 0;
	
	var url = 'https://skinsproject.pl/en/getMyWins.php';
		
	if( currentJackpotMode == 1 ){
		url = 'https://skinsproject.pl/en/getMyWinsHigh.php'
	}
	
	$.ajax({
		type: "POST",
		url: url,
		dataType: 'text',
		success: function(data) {
			$( '#mywinsModalBody' ).html( data );
			
			$( '#switch-modal-tryb' ).bootstrapSwitch();
	
			$( '#switch-modal-tryb' ).on('switchChange.bootstrapSwitch', function(event, state) {
				var urlRounds = 'https://skinsproject.pl/en/getMyRounds.php';
		
				if( currentJackpotMode == 1 ){
					urlRounds = 'https://skinsproject.pl/en/getMyRoundsHigh.php'
				}
				
				if( state ){
					$( '.myWinsRounds' ).html( '<div class="circle"></div>' );
					
					$.ajax({
						type: "POST",
						data: { mode: 0 , page: pageMyGames },
						url: urlRounds,
						dataType: 'text',
						success: function(data) {
							$( '.myWinsRounds' ).html( data );
							
							$( '#backPageMyWins' ).remove();
							
							if( $( '#nextPageMyWins').length == 0 ){
								$( '<a href="#" id="nextPageMyWins" style="font-family: Lato;font-size: 13px;color: #fff;text-transform: uppercase;text-align: center;display: inline-block;border-radius: 50px;background-color: #8BC34A;border-style: none;margin-right: 10px;padding: 5px 20px;float: right;text-decoration: none;display: inline-block;">Dalej <span aria-hidden="true">?</span></a>' ).appendTo( '#mywinsModalBody > div > div ' );
							}
							
							if( $( '.myWinsRound' ).length < 10 ){
								$( '#nextPageMyWins').remove();
							}
						}
					});
				}
				else{
					$( '.myWinsRounds' ).html( '<div class="circle"></div>' );
					
					$.ajax({
						type: "POST",
						data: { mode: 1 , page: pageMyGames },
						url: urlRounds,
						dataType: 'text',
						success: function(data) {
							$( '.myWinsRounds' ).html( data );
							
							$( '#backPageMyWins' ).remove();
							
							if( $( '#nextPageMyWins').length == 0 ){
								$( '<a href="#" id="nextPageMyWins" style="font-family: Lato;font-size: 13px;color: #fff;text-transform: uppercase;text-align: center;display: inline-block;border-radius: 50px;background-color: #8BC34A;border-style: none;margin-right: 10px;padding: 5px 20px;float: right;text-decoration: none;display: inline-block;">Dalej <span aria-hidden="true">?</span></a>' ).appendTo( '#mywinsModalBody > div > div ' );
							}
							
							if( $( '.myWinsRound' ).length < 10 ){
								$( '#nextPageMyWins').remove();
							}
						}
					});
				}
			});
	
			
			$('[data-toggle="tooltip"]').tooltip();                
		}                  
	});
	
	$( '#mywinsModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#mywinsModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	});
	
	$('#mywinsModal').on('hidden.bs.modal', function (e) {
		if( !showProfileId ){
			return;
		}
		
		$( '#profilModalBody' ).html( '<div class="circle"></div>' );
		
		xhrHistory = $.ajax({
			type: "POST",
			url: 'https://skinsproject.pl/en/getProfile.php',
			data: { user : showProfileId },
			dataType: 'text',
			success: function(data) {
				$( '#profilModalBody' ).html( data );
				
				$('[data-toggle="tooltip"]').tooltip();                
			}                  
		});
		
		showProfileId = 0;
		
		$( '#profileModal' ).modal( 'show' );
		
		showBackdrop();
	});
}

function showReflinks(){
	$( '#reflinksModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#reflinksModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	})
}

function showEmoticons(){
	$( '#emoticonsModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#emoticonsModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	})
}

function showFair(){
	$( '#fairModal' ).modal( 'show' );
	
	showBackdrop();
	
	$('#fairModal').on('hide.bs.modal', function (e) {
		$( '#backdrop' ).remove();
	});
}

function showBackdrop(){
	var newDiv = document.createElement('div');
	
	if( $( '#unlimitedPotDiv #rotator' ).width() != 0 ){
		
		var offset = $( '#unlimitedPotDiv #rotator' ).offset();
		
		$( newDiv ).attr( 'id' , 'backdrop' )
		
		$( newDiv ).offset({ top: offset.top, left: offset.left})
		$( newDiv ).css( 'position' , 'absolute' );
		$( newDiv ).css( 'background-color' , '#577c2d' );
		
		$( newDiv ).css( 'opacity' , '0.78' );
		
		$( newDiv ).height( $( 'body' ).outerHeight() );
		$( newDiv ).width( $( '#unlimitedPotDiv #rotator' ).width() );
	}
	else if( $( '#highPotDiv #rotator' ).width() != 0 ){
		var offset = $( '#highPotDiv #rotator' ).offset();
		
		$( newDiv ).attr( 'id' , 'backdrop' )
		
		$( newDiv ).offset({ top: offset.top, left: offset.left})
		$( newDiv ).css( 'position' , 'absolute' );
		$( newDiv ).css( 'background-color' , '#577c2d' );
		
		$( newDiv ).css( 'opacity' , '0.78' );
		
		$( newDiv ).height( $( 'body' ).outerHeight() );
		$( newDiv ).width( $( '#highPotDiv #rotator' ).width() );
	}
	
	$( 'body' ).append( newDiv );
}

function writeMessage( event , button ){
	if( inputModeNick ){
		event.preventDefault();
		
		return false;
	}

	if(event.keyCode == 13 || button ){
		
		if( $( '#inputMessage' ).val().length == 0 ){
			event.preventDefault();
		
			return false;
		}
		
		var chatMessage =  $( '#inputMessage' ).val();
		
		if( chatMessage.toLowerCase().indexOf( '/id' ) == 0 || chatMessage.toLowerCase().indexOf( '/steamid64' ) == 0 || chatMessage.toLowerCase().indexOf( '/id64' ) == 0 || chatMessage.toLowerCase().indexOf( '/64id' ) == 0 ){
			
			$( '#inputMessage' ).val( '' );
		
			event.preventDefault();
			
			var dataText = escapeHtml( 'Your SteamID is: ' + window.steamId );
				
			dataText += '</span>';
			
			$( '#chatTexts' ).append( '<div class="chat_msg notify"> <p>' + dataText + '</p></div>' );
			
			return;
		}
		
			
		$.post( "https://skinsproject.pl/en/chat.php", { message: $( '#inputMessage' ).val() } , function( data ){
			var dataObject = [ 0 , '' ];
			
			try{
				dataObject = JSON.parse( data );
			}
			catch( e ){
				
			}
			
			if( !dataObject[ 0 ] ){
				return;
			}
			
			switch( dataObject[ 0 ] ){
				case 1:{
					alert( 'You are not logged in' );

					break;
				}
				case 2:{
					alert( 'The message contained links to other sites' );

					break;
				}
				case 3:{
					alert( 'The message included inappropriate vocabulary' );

					break;
				}
				case 4:{
					alert( 'You are banned in chat. About unban you can apply on our fb.' );

					break;
				}
				case 5:{
					alert( 'You are trying to send a message too fast' );

					break;
				}
				case 6:{
					alert( 'You have been banned on chat for spamming for one hour. Ban is valid until ' + dataObject[ 1 ] );

					break;
				}
				case 7:{
					alert( 'You have been banned on chat because of inappropriate vocabulary or begging for one day. Ban is valid until ' + dataObject[ 1 ] );

					break;
				}
				case 8:{
					alert( 'You have been banned on chat because of advertising for seven days. Ban is valid until ' + dataObject[ 1 ] );

					break;
				}
				case 9:{
					alert( 'You have too low steam level to write in chat.' );

					break;
				}
			}
		});
	
		$( '#inputMessage' ).val( '' );
		
		event.preventDefault();

		return false;
	}
	
	return true;
}


function hoverEmber( event ){
	var element = event.target;
	
	var classList = $( element ).children( '.suggestion' ).attr( 'class' );
	
	if( classList.indexOf( 'highlighted' ) != -1 ){
		return;
	}
	
	$( '.highlighted' ).removeClass( 'highlighted' );
	
	$( element ).children( '.suggestion' ).addClass( 'highlighted' );
}

function isABootstrapModalOpen() {
    return $('.modal.in').length > 0;
}

var currentJackpotMode = 0;

var idleImage = loadImage( 'https://skinsproject.pl/images/avatar.png' ),
	currentSpeed = 0,
	acceleration = 0,
	slowDownInterval = 0,
	moveCanvasInterval = 0,
	globalEndPosition = 0,
	drawStopInterval = 0,
	drawGameInterval = 0;

var currentSpeedHigh = 0,
	accelerationHigh = 0,
	slowDownIntervalHigh = 0,
	moveCanvasIntervalHigh = 0,
	globalEndPositionHigh = 0,
	drawStopIntervalHigh = 0,
	drawGameIntervalHigh = 0;
	
var animationSkinAmount = null,
	animationSkinAmountHigh = null;
	
var currentPageHistory = 1;
	
var showProfileId = 0;
	
var inputModeNick = false;

var modeInventory = 0;

var currentNicknames = [];

var canvasTmpPosition = 0,
	canvasTmpPositionHigh = 0;
	
var biggestRound = 0,
	luckyRound = 0;

var biggestRoundHigh = 0,
	luckyRoundHigh = 0;

var canScroll = true;

var audioPlay = true,
	desktopNotification = false;
	
var currentStyle = 0;

var canvas = false,
	context = false,
	winningTicket = 0;

var canvasHigh = false,
	contextHigh = false,
	winningTicketHigh = 0;
	
var xhrHistory = false;
	
var currentCanvasPosition = 0,
	currentCanvasPositionHigh = 0;

var winnerId = 'none',
	winnerIdEncode = 'none';
	
var winnerIdHigh = 'none',
	winnerIdEncodeHigh = 'none';

var playerData = [],
	currentRound = 0;
	
var playerDataHigh = [],
	currentRoundHigh = 0;

var currentSlowTime = Date.now(),
	currentSlowTimeHigh = Date.now();

var globalWinnerPosition = 0,
	globalWinnerPositionHigh = 0;
	
var imagesToDraw = [],
	imagesToDrawHigh = [];

var showFairHistory = 0;

var pageMyGames = 0;

var offerIdWrap = 0,
	errorCodeWrap = 0,
	gameNumberWrap = 0;

var offerIdWrapHigh = 0,
	errorCodeWrapHigh = 0,
	gameNumberWrapHigh = 0;