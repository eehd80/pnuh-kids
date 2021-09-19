$(function(){
	/*** GNB ***/
	var gnbCrt0 = $("#gnb>li:nth-child(" + (gnbDep1) + ")");
	var gnbCrt1 = $("#gnb>li:nth-child(" + (gnbDep1) + ")");
	var gnbCrt2 = $("#gnb>li:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ")");
	var gnbCrt3 = $("#gnb>li:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ")>ul>li:nth-child(" + (gnbDep3) + ")");
	//var gnbCrt4 = $("#gnb>li:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ")>ul>li:nth-child(" + (gnbDep3) + ")>ul>li:nth-child(" + (gnbDep4) + ")");

	var snbCrt1 = $("#snb>li:nth-child(" + (gnbDep1) + ")>a");
	var snbCrt2 = $("#snb>li:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ")>a");
	var snbCrt3 = $("#snb>li:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ")>ul>li:nth-child(" + (gnbDep3) + ")>a");
	//var snbCrt4 = $("#snb>li:nth-child(" + (gnbDep1) + ")>ul>li:nth-child(" + (gnbDep2) + ")>ul>li:nth-child(" + (gnbDep3) + ")>ul>li:nth-child(" + (gnbDep4) + ")>a");

	var rnbCrt1 = $("#rnb>li:nth-child(" + (gnbDep2) + ")");
	var rnbCrt2 = $("#rnb>li:nth-child(" + (gnbDep2) + ")>ul>li:nth-child(" + (gnbDep3) + ")");

	if(gnbCrt0) gnbCrt0.addClass("on");
	if(gnbCrt1) gnbCrt1.addClass("on");
	if(gnbCrt2) gnbCrt2.addClass("on");
	if(gnbCrt3) gnbCrt3.addClass("on");

	if(snbCrt1) snbCrt1.parent().addClass("on");
	if(snbCrt2) snbCrt2.parent().addClass("on");
	if(snbCrt3) snbCrt3.parent().addClass("on");

	if(rnbCrt1) rnbCrt1.addClass("on");
	if(rnbCrt2) rnbCrt2.addClass("on");

	var gnbReset = null;
	$("#gnb>li>a").mouseover(function(){
		$("header .gnb_util .language .langList").removeClass('on');
		$(".contentsWrap .page_util .share ul").removeClass('on');
		$("#gnb>li").removeClass('act');

		if(!$("#header").hasClass('gnbOn')){
			$("#header").addClass('gnbOn');
		}
		$("#dim").addClass('on');
		$(this).parent('li').addClass('act');
		$("#gnb .gnbTit").css({
			"height": $(this).siblings('.menuM').height() + 70
		});
		$("#header nav").css({
			"height": $(this).siblings('.menuM').height() + 170,
			"transition": "0.2s"
		});

		gnbReset = null;
	});

	$("#gnb").mouseleave(function(){
		$("#dim").removeClass('on');
		$("#gnb>li").removeClass('act');
		$("#header nav").css({
			"height": ""
		});
		$("#header").removeClass('gnbOn')
		if(gnbReset == null){
			setTimeout(function(){
				$("#header nav").css({
					"transition": ""
				});
			},200);
		}
	});

	$("header .gnb_util .myInfo .btn_member>button").click(function(){
		if($("header .gnb_util .myInfo .infoList").hasClass('on')){
			$("header .gnb_util .myInfo .infoList").removeClass("on");
		}else{
			$("header .gnb_util .myInfo .infoList").addClass("on");
			$("header .gnb_util .language .langList").removeClass("on");
		}
	});
	$("header .gnb_util .myInfo .infoList a").click(function(){
		$("header .gnb_util .myInfo .infoList").removeClass("on");
	});

	$("header .gnb_util .language .btn_langSel").click(function(){
		if($("header .gnb_util .language .langList").hasClass('on')){
			$("header .gnb_util .language .langList").removeClass("on");
		}else{
			$("header .gnb_util .language .langList").addClass("on");
			$("header .gnb_util .myInfo .infoList").removeClass("on");
		}
	});
	$("header .gnb_util .language .langList a").click(function(){
		$("header .gnb_util .language .langList").removeClass("on");
	});

	$(".headerBnr .btn_close").click(function(){
		$("body").removeClass('typeHeaderBnr');
		$(".headerBnr").hide();
	});

	/* 상단 검색창 */
	$("header .gnb_util .btn_topSearch").click(function(){
		if($("html").is('#typeTeamIntro') == false){
			$("header .gnb_util .language .langList").removeClass("on");
			$(".sec_topsSearch").addClass('on');
		}
	});
	/*mouseleave 닫히게 할때
	$(".sec_topsSearch").mouseleave(function(){
		if($("html").is('#typeTeamIntro') == false){
			$(this).removeClass('on');
			$("header .gnb_util .btn_topSearch").focus();
		}
	});*/
	$(".sec_topsSearch .topSrch>.btn_srch").click(function(){
		if($("html").is('#typeTeamIntro') == false){
			$(".sec_topsSearch").removeClass('on');
		}
	});

	/*** snb ***/
	$("#snb_nav").each(function(){
		var snbBtn1 = $('<button title="1레벨 메뉴 열기">' + snbCrt1.text() + '</button>');
		var snbBtn2 = $('<button title="2레벨 메뉴 열기">' + snbCrt2.text() + '</button>');
		var snbBtn3 = $('<button title="3레벨 메뉴 열기">' + snbCrt3.text() + '</button>');
		//var snbBtn4 = $('<button title="4레벨 메뉴 열기">' + snbCrt4.text() + '</button>');

		snbBtn1.insertAfter($("#snb_nav>div>a"));
		if(gnbDep2 == 0) {
			$("#snb_nav>div>button:nth-of-type(1)").addClass("on");
		}else if(gnbDep3 == 0){
			snbBtn2.insertAfter($("#snb_nav>div>button:nth-of-type(1)"));
			$("#snb_nav>div>button:nth-of-type(2)").addClass("on");
		}else if(gnbDep4 == 0){
			snbBtn2.insertAfter($("#snb_nav>div>button:nth-of-type(1)"));
			snbBtn3.insertAfter($("#snb_nav>div>button:nth-of-type(2)"));
			$("#snb_nav>div>button:nth-of-type(3)").addClass("on");
		}else{
			snbBtn2.insertAfter($("#snb_nav>div>button:nth-of-type(1)"));
			snbBtn3.insertAfter($("#snb_nav>div>button:nth-of-type(2)"));
			snbBtn4.insertAfter($("#snb_nav>div>button:nth-of-type(3)"));
			$("#snb_nav>div>button:nth-of-type(4)").addClass("on");
		}
	});

	$("#snb_nav>div>button").click(function(){
		$("#snb_nav").removeClass();
		$("#snb_nav>div>button:nth-of-type(1)").attr('title','1레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(2)").attr('title','2레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(3)").attr('title','3레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(4)").attr('title','4레벨 메뉴 열기');
		if($(this).index() == 1) {
			$("#snb_nav").addClass("active1");
			$("#snb_nav>div>button:nth-of-type(1)").attr('title','1레벨 메뉴 닫기');
		}else if(($(this).index() == 2)){
			$("#snb_nav").addClass("active2");
			$("#snb_nav>div>button:nth-of-type(2)").attr('title','2레벨 메뉴 닫기');
		}else if(($(this).index() == 3)){
			$("#snb_nav").addClass("active3");
			$("#snb_nav>div>button:nth-of-type(3)").attr('title','3레벨 메뉴 닫기');
		}else{
			$("#snb_nav").addClass("active4");
			$("#snb_nav>div>button:nth-of-type(4)").attr('title','4레벨 메뉴 닫기');
		}

		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#snb").slideUp(50);
			$("#dim").removeClass('on').css("z-index","");
			$(".sVisual").css("z-index","");
		}else{
			$("#snb_nav>div>button").removeClass("active");
			$(this).addClass("active");
			$("#snb").slideDown(100).css({"width" : $(this).outerWidth(), "left" : $(this).position().left});
		}
	});

	$("#snb_nav .snb_util .btn_share").click(function(){
		if($("#snb_nav .snb_util .shareBox").hasClass('on')){
			$("#snb_nav .snb_util .shareBox").removeClass('on');
		}else{
			$("#snb_nav .snb_util .shareBox").addClass('on');
		}
	});

	$("#snb").mouseleave(function(){
		$("#snb_nav>div>button").removeClass("active");
		$("#snb").slideUp(100);
		$("#snb_nav>div>button:nth-of-type(1)").attr('title','1레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(2)").attr('title','2레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(3)").attr('title','3레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(4)").attr('title','4레벨 메뉴 열기');
		$("#dim").removeClass('on');
	});
	$("#snb_nav").mouseleave(function(){
		$("#snb_nav>div>button").removeClass("active");
		$("#snb").slideUp(100);
		$("#snb_nav>div>button:nth-of-type(1)").attr('title','1레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(2)").attr('title','2레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(3)").attr('title','3레벨 메뉴 열기');
		$("#snb_nav>div>button:nth-of-type(4)").attr('title','4레벨 메뉴 열기');
	});

	/*** rnb ***/
	$("#rnb>li.child>a").attr('title','하위 메뉴 열기');
	$("#rnb>li>a").click(function(){
		if($(this).parent('li').hasClass('child')){
			if($(this).parent('li').hasClass('act')){
				$(this).parent('li').removeClass('act');
				$(this).next().slideUp(200);
				$(this).attr('title','하위 메뉴 열기');
			}else{
				$(this).parent('li').addClass('act');
				$(this).next().slideDown(200);
				$(this).attr('title','하위 메뉴 닫기');
			}
		}
	});

	/*** etc ***/
	// 우측 위로가기 버튼
	$(".btn_sideTop").click(function(){
		$("html,body").animate({
			scrollTop: 0
		}, 200);
	});

	//푸터 PNUH 네트워크 팝업
	$("#footer .network>button").click(function(){
		$("#dim").addClass('on').css('z-index','1200');
		$("#pnuh_network").addClass('on');
	});
	$(".popLayout2 .btn_popClose").click(function(){
		$("#dim").removeClass('on').removeAttr('style');
		$("#pnuh_network").removeClass('on');
	});

	/*** contents ***/
	//타이틀 우측 공유
	$(".contentsWrap .page_util .share .btn_share").click(function(){
		if($(this).next('ul').hasClass('on')){
			$(this).next('ul').removeClass("on");
		}else{
			$(this).next('ul').addClass("on");
		}
	});

	//진료과소개 타이틀
	$(".medicalGrp .grp_list .grp .grp_tit").each(function(){
		$(this).css({
			"height": $(this).parent('.grp').height() - 20
		});
	});

	/*** board ***/
	//custom scrollbar
	$(window).bind('load', function(){
		if($('div').hasClass('lineList_v')){
			$(".lineList_v .view_movie .movie_caption .txt").mCustomScrollbar();
			if($(".lineList_v .view_movie .movie_caption .txt").hasClass('mCS_no_scrollbar')){
				$(".lineList_v .view_movie .movie_caption .txt").attr("tabindex","0");
			}
		}
	});

	//썸네일 비율
	function thumb_size(){
		$(".lineList_ul.typeGallery .photo img").css({
			"height" : $(".lineList_ul.typeGallery .photo").width() * 0.62
		});

		$(".lineList_ul.typeGallery .noPhoto .txt").css({
			"height" : $(".lineList_ul.typeGallery .photo").height() + $(".lineList_ul.typeGallery .txt").height() + 30
		});
	}

	/*** total search ***/
	$("#typeTotalSearch .favoriteSrch>button").click(function(){
		$("#typeTotalSearch .favoriteSrch .favorite_list").show();
	});
	$("#typeTotalSearch .favoriteSrch .favorite_list .btn_close").click(function(){
		$("#typeTotalSearch .favoriteSrch .favorite_list").hide();
	});

	$("#typeTotalSearch header .totalSrch>.btn_srchOpt").click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$("#typeTotalSearch header .totalSrch_opt").hide();
		}else{
			$(this).addClass('on');
			$("#typeTotalSearch header .totalSrch_opt").show();
		}
	});
	$("#typeTotalSearch header .totalSrch_opt .btn_cancel").click(function(){
		$("#typeTotalSearch header .totalSrch>.btn_srchOpt").removeClass('on');
		$("#typeTotalSearch header .totalSrch_opt").hide();
	});

	$("#typeTotalSearch header .totalSrch_opt .period>button").click(function(){
		if(!$(this).hasClass('on')){
			$("#typeTotalSearch header .totalSrch_opt .period>button").removeClass('on');
			$(this).addClass('on');
		}
	});

	/*** 의료진소개 ***/
	/* 상단 검색 */
	$("#typeTeamIntro .gnb_util .btn_topSearch").click(function(){
		$(".sec_searchBox").addClass('on');
	});
	$(".sec_searchBox .btn_close").click(function(){
		$(".sec_searchBox").removeClass('on');
	});

	/* 우측 네비게이션 */
	if($("#typeTeamIntro article .grpWrap").hasClass('grp_schedule')){
		var teamIntro_schedule_loc = $(".introGrp .grp_schedule").offset().top;
	}
	if($("#typeTeamIntro article .grpWrap").hasClass('grp_field')){
		var teamIntro_field_loc = $(".introGrp .grp_field").offset().top;
	}
	if($("#typeTeamIntro article .grpWrap").hasClass('grp_career')){
		var teamIntro_career_loc = $(".introGrp .grp_career").offset().top;
	}
	if($("#typeTeamIntro article .grpWrap").hasClass('grp_thesis')){
		var teamIntro_thesis_loc = $(".introGrp .grp_thesis").offset().top;
	}
	if($("#typeTeamIntro article .grpWrap").hasClass('grp_news')){
		var teamIntro_news_loc = $(".introGrp .grp_news").offset().top;
	}
	if($("#typeTeamIntro #contents>div").hasClass('teamIntro_doctor')){
		var teamIntro_quick = $("#typeTeamIntro #quick_nav").position().top;
	}

	$("#typeTeamIntro #quick_nav li>a").click(function(){
		if($(this).hasClass('quick_schedule')){
			$("html,body").stop().animate({
				scrollTop: 770
			}, 500);
		}else if($(this).hasClass('quick_field')){
			$("html,body").stop().animate({
				scrollTop: teamIntro_field_loc - 120
			}, 500);
		}else if($(this).hasClass('quick_career')){
			$("html,body").stop().animate({
				scrollTop: teamIntro_career_loc - 120
			}, 500);
		}else if($(this).hasClass('quick_thesis')){
			$("html,body").stop().animate({
				scrollTop: teamIntro_thesis_loc - 120
			}, 500);
		}else if($(this).stop().hasClass('quick_news')){
			$("html,body").animate({
				scrollTop: teamIntro_news_loc - 120
			}, 500);
		}else{
			$("html,body").stop().animate({
				scrollTop: 0
			}, 500);
		}
	});

	/*** index ***/
	/* 슬라이드배너 제어 */
	$(".list_control>button").click(function(){
		if($(this).hasClass('btn_pause')){
			$(this).attr("class", "btn_play").text('재생');
			$(this).parent().siblings('.slick-slider').slick('slickPause');
			return false;
		}
		if($(this).hasClass('btn_play')){
			$(this).filter('.btn_play').attr("class", "btn_pause").text('일시정지');
			$(this).parent().siblings('.slick-slider').slick('slickPlay');
			return false;
		}
	});

	$("#easyService .btn_sideQuickService").click(function(){
		$(this).addClass('on');
		$("#easyService .easy_quick").addClass('on');
	});
	$("#easyService .easy_quick .btn_close").click(function(){
		$("#easyService .btn_sideQuickService").removeClass('on');
		$("#easyService .easy_quick").removeClass('on');
	});

	/* 건강정보 */
	$(".mHealth .btn .btn_more").click(function(){
		$(".mHealth").addClass('on');
	});

	/* 모션 */
	function news_motion(){
		$(".mNews>ul>li:nth-child(1) a").stop().delay(100).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
		$(".mNews>ul>li:nth-child(2) a").stop().delay(200).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
		$(".mNews>ul>li:nth-child(3) a").stop().delay(300).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
	}
	if(!$("body").hasClass('typeEasy')){
		news_motion();
	}

	function mNews_motion(){
		$(".mNews>ul>li:nth-child(1) a").stop().delay(100).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
		$(".mNews>ul>li:nth-child(2) a").stop().delay(200).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
		$(".mNews>ul>li:nth-child(3) a").stop().delay(300).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
	}

	function mHealth_motion(){
		$(".mHealth>ul>li:nth-child(1) a").stop().delay(100).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li:nth-child(2) a").stop().delay(200).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li:nth-child(5) a").stop().delay(200).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li:nth-child(3) a").stop().delay(300).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li:nth-child(6) a").stop().delay(300).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li:nth-child(4) a").stop().delay(400).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li:nth-child(7) a").stop().delay(400).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li:nth-child(8) a").stop().delay(500).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
		$(".mHealth>ul>li a").stop().delay(600).animate({
			"margin-top": 0,
			"opacity": 1
		}, 1200, 'easeOutExpo');
	}

	function ys_mNews_motion(){
		$(".ys_mNews>ul>li:nth-child(1) a").stop().delay(100).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
		$(".ys_mNews>ul>li:nth-child(2) a").stop().delay(200).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
		$(".ys_mNews>ul>li:nth-child(3) a").stop().delay(300).animate({
			"margin-top": 0,
			"opacity": 1
		}, 500);
	}

	function mHealthColumn_motion(){
		$(".mHealth_column .list .unit[data-slick-index=5] a").stop().delay(50).animate({
			"left": "-25px",
			"opacity": 1
		}, 300);
		$(".mHealth_column .list .unit[data-slick-index=4] a").stop().delay(150).animate({
			"left": "-25px",
			"opacity": 1
		}, 300);
		$(".mHealth_column .list .unit[data-slick-index=3] a").stop().delay(250).animate({
			"left": "-25px",
			"opacity": 1
		}, 300);
		$(".mHealth_column .list .unit[data-slick-index=2] a").stop().delay(350).animate({
			"left": "-25px",
			"opacity": 1
		}, 300);
		$(".mHealth_column .list .unit[data-slick-index=1] a").stop().delay(450).animate({
			"left": "-25px",
			"opacity": 1
		}, 300);
		$(".mHealth_column .list .unit[data-slick-index=0] a").stop().delay(550).animate({
			"left": "-25px",
			"opacity": 1
		}, 300);
		$(".mHealth_column .list .unit a").stop().delay(1500).animate({
			"left": "-25px",
			"opacity": 1
		}, 400);
	}

	/*** 리뉴얼layout 따른 기존 컨텐츠 조정 ***/
	$(".subtitles").mCustomScrollbar();


	/*** LOAD/RESIZE/SCROLL ***/
	$(window).bind('load', function(){
	});

	$(window).bind('resize', function(){
	});

	$(window).bind('load resize', function(){
		thumb_size(); //썸네일형 이미지 리사이즈
	});

	$(window).scroll(function(){
		var conts_loc = $(window).scrollTop();
		//console.log(conts_loc)

		/* header fix(상단 띠배너,간편서비스) */
		if($("body").hasClass('typeEasy')){
			if(conts_loc < 812){
				$("body").removeClass('fixed');
			}else{
				$("body").addClass('fixed');
			}
		}else{
			if(conts_loc > 90){
				$("#header").addClass('headerFix');
			}else{
				$("#header").removeClass('headerFix');
			}
		}

		/* side btn */
		if(conts_loc > 100){
			$(".btn_sideTop").addClass('on');
		}else{
			$(".btn_sideTop").removeClass('on');
		}

		/* fixed horizontal scroll issue*/
		if(window.outerWidth < 1280){
			$('#header, .sec_searchBox, #snb_nav, #pnuh_network').css({
		    	"left": 0 - $(this).scrollLeft()
			});
		}else{
			$('#header, .sec_searchBox, #snb_nav, #pnuh_network').css({
		    	"left": ""
			});
		}

		/* 의료진소개 */
		if(conts_loc > 0){
			$("#typeTeamIntro #header").addClass('headerOn');
		}else{
			$("#typeTeamIntro #header").removeClass('headerOn');
			$("#typeTeamIntro #quick_nav li").removeClass('on');
			$("#typeTeamIntro #quick_nav .quick_intro").parent('li').addClass('on');
		}

		if(conts_loc > 240){
			$("#typeTeamIntro #quick_nav").addClass('quickOn');
		}else{
			$("#typeTeamIntro #quick_nav").removeClass('quickOn');
			$("#typeTeamIntro #quick_nav li").removeClass('on');
			$("#typeTeamIntro #quick_nav .quick_intro").parent('li').addClass('on');
		}
		if((teamIntro_quick + conts_loc) > teamIntro_schedule_loc){
			$("#typeTeamIntro #quick_nav li").removeClass('on');
			$("#typeTeamIntro #quick_nav .quick_schedule").parent('li').addClass('on');
		}
		if((teamIntro_quick + conts_loc) > teamIntro_field_loc){
			$("#typeTeamIntro #quick_nav li").removeClass('on');
			$("#typeTeamIntro #quick_nav .quick_field").parent('li').addClass('on');
		}
		if((teamIntro_quick + conts_loc) > teamIntro_career_loc){
			$("#typeTeamIntro #quick_nav li").removeClass('on');
			$("#typeTeamIntro #quick_nav .quick_career").parent('li').addClass('on');
		}
		if((teamIntro_quick + conts_loc) > teamIntro_thesis_loc){
			$("#typeTeamIntro #quick_nav li").removeClass('on');
			$("#typeTeamIntro #quick_nav .quick_thesis").parent('li').addClass('on');
		}
		if((teamIntro_quick + conts_loc) > teamIntro_news_loc){
			$("#typeTeamIntro #quick_nav").removeClass('quickOn');
			$("#typeTeamIntro #quick_nav li").removeClass('on');
			$("#typeTeamIntro #quick_nav .quick_news").parent('li').addClass('on');
		}

		/* 메인 모션 제한 */
		if($("body").hasClass('typeEasy')){
			if(conts_loc > 100){
				mNews_motion();
			}
			if(conts_loc > 800){
				ys_mNews_motion();
			}
			if(conts_loc > 1150){
				mHealthColumn_motion();
			}
			if(conts_loc > 1600){
				mHealth_motion();
			}
		}else{
			if(conts_loc > 800){
				ys_mNews_motion();
			}
			if(conts_loc > 1150){
				mHealthColumn_motion();
			}
			if(conts_loc > 650){
				mHealth_motion();
			}
		}
	});

	/*** 키보드 이동(nav) ***/
	/*gnb*/
	$("#gnb>li.child>a").focus(function(){
		$(this).trigger('mouseover');
	});
	$("#gnb>li>a").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				var gnb_loc = $(this).parent('li').index();

				if(gnb_loc == 0){
					$("header .logo").find('a').first().focus();
					$("#gnb>li.child>a").trigger('mouseleave');
					return false;
				}else{
					$("#gnb>li:nth-child(" + gnb_loc + ")").find('a').first().focus();
					if($(this).parent('li').prev('li').hasClass('child')){
						if($("#gnb>li:nth-child(" + gnb_loc + ") .menuM>li:last-child").hasClass('child')){
							$("#gnb>li:nth-child(" + gnb_loc + ") .menuM>li:last-child .menuS>li:last-child").find('a').focus();
							return false;
						}else{
							$("#gnb>li:nth-child(" + gnb_loc + ") .menuM>li:last-child").find('a').first().focus();
							return false;
						}
					}
				}
			}else{
				if($(this).parent('li').hasClass('child')){
					$(this).siblings('.menuM').find('a').first().focus();
					return false;
				}
			}
		}
	});

	/*gnb util*/
	$("header .gnb_util .btn_login").focusin(function(){
		$("#gnb>li>a").trigger('mouseleave');
	});
	$("header .gnb_util .btn_login, header .gnb_util .myInfo .btn_member>button").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				$("#gnb>li:last-child").find('a').first().focus();
				if($("#gnb>li:last-child").hasClass('child')){
					if($("#gnb>li:last-child>.menuM>li:last-child").hasClass('child')){
						$("#gnb>li:last-child>.menuM>li:last-child>.menuS>li:last-child").find('a').first().focus();
						return false;
					}else{
						$("#gnb>li:last-child>.menuM>li:last-child").find('a').first().focus();
						return false;
					}
				}else{
					$("#gnb>li:last-child").find('a').first().focus();
					return false;
				}
			}
		}
	});

	$("header .gnb_util .myInfo .infoList>li:last-child>a").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
			}else{
				$("header .gnb_util .myInfo .btn_member>button").trigger('click');
				$("header .gnb_util .language .btn_langSel").focus();
				return false;
			}
		}
	});

	$("header .gnb_util .language .btn_langSel").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				$("header .gnb_util .language .langList").removeClass('on');
			}else{
			}
		}
	});
	$("header .gnb_util .language .langList>li:last-child>a").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
			}else{
				$("header .gnb_util .language .btn_langSel").trigger('click');
				$("header .gnb_util .btn_topSearch").focus();
				return false;
			}
		}
	});

	$("header .gnb_util .btn_topSearch").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 13){
			//$(this).trigger('mouseover');
			$(this).trigger('click');
			$(".sec_topsSearch .topSrch>input[type=text]").focus();
			return false;
		}
		if(v_keyCode == 9){
			if(event.shiftKey){
			}else{
				$("#snb_nav .snbWrap .btn_snbHome").focus();
				return false;
			}
		}
	});
	$(".sec_topsSearch .topSrch>input[type=text]").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
			}else{
				$(".sec_topsSearch .topSrch>.btn_srch").css('outline','auto').focus();
				return false;
			}
		}
	});
	$(".sec_topsSearch .topSrch>.btn_srch").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
			}else{
				$(".sec_topsSearch").removeClass('on');
				$(".sec_topsSearch .topSrch>.btn_srch").css('outline','');
			}
		}
		if(v_keyCode == 13){
			$(".sec_topsSearch").removeClass('on');
			$(".sec_topsSearch .topSrch>.btn_srch").css('outline','');
			$("#snb_nav .snbWrap .btn_snbHome").focus();
		}
	});

	/*snb*/
	$("#snb_nav .snbWrap .btn_snbHome").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				$("header .gnb_util .btn_topSearch").focus();
				return false;
			}else{
			}
		}
	});
	$(".contentsWrap .page_util .share .btn_share").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 13){
			$(this).trigger('click');
			$(".contentsWrap .page_util .share ul li:first-child").find('a').first().focus();
			return false;
		}
	});
	$(".contentsWrap .page_util .share ul li:first-child>a").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				$(".contentsWrap .page_util .share ul").removeClass('on');
				$(".contentsWrap .page_util .share .btn_share").focus();
				return false;
			}else{
			}
		}
	});
	$(".contentsWrap .page_util .share ul li:last-child>a").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
			}else{
				$(".contentsWrap .page_util .share ul").removeClass('on');
				$(".contentsWrap .page_util .share .btn_share").focus();
				//$(".contentsWrap .page_util .share").next().focus();
				return false;
			}
		}
	});

	/*footer*/
	$("#footer .network>button").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 13){
			$(this).trigger('click');
			$("#pnuh_network>section .network01>ul>li:first-child").find('a').first().focus();
			return false;
		}
	});
	$("#pnuh_network .btn_popClose").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				if($("#pnuh_network>section .network_list").hasClass('network04')){
					$("#pnuh_network>section .network04>ul>li:last-child").find('a').first().focus();
				}else{
					$("#pnuh_network>section .network03>ul>li:last-child").find('a').first().focus();
				}
				return false;
			}else{
				$("#pnuh_network>section .network01>ul>li:first-child").find('a').first().focus();
				return false;
			}
		}
		if(v_keyCode == 13){
			$(this).trigger('click');
			$("#footer .network>button").focus();
			return false;
		}
	});
	$("#pnuh_network>section .network01>ul>li:first-child>a").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				$("#pnuh_network .btn_popClose").focus();
				return false;
			}else{
			}
		}
	});

	/*main*/
	$("#easyService .btn_sideQuickService").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
			}else{
				$("header .logo").find('a').first().focus();
				return false;
			}
		}
		if(v_keyCode == 13){
			$("#easyService .easy_quick").css("transition","auto");
			$(this).trigger('click');
			$("#easyService .easy_quick .icoBnr li:first-child").find('a').first().focus();
			return false;
		}
	});
	$("#easyService .easy_quick .btn_close").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				$("#easyService .easy_quick .icoBnr li:last-child").find('a').first().focus();
				return false;
			}else{
				$("#easyService .easy_quick .icoBnr li:first-child").find('a').first().focus();
				return false;
			}
		}
		if(v_keyCode == 13){
			$(this).trigger('click');
			$("#easyService .btn_sideQuickService").focus();
			$("#easyService .easy_quick").css("transition","");
			return false;
		}
	});
	$("#easyService .easy_quick .icoBnr li:first-child>a").keydown(function(event){
		var v_keyCode = event.keyCode || event.which;
		if(v_keyCode == 9){
			if(event.shiftKey){
				$("#easyService .easy_quick .btn_close").focus();
				return false;
			}else{
			}
		}
	});
});
