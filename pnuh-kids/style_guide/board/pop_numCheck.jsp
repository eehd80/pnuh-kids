<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>[팝업] 확인번호 입력 | 부산대학교병원</title>

<link rel="shortcut icon" href="/pnuh/pnuh/images/common/pnuhicon.ico" />

<link rel="stylesheet" type="text/css" href="/pnuh/pnuh/include/css/common.css" />

<script type="text/javascript" src="/pnuh/include/js/jquery-1.9.1.min.js"></script>

<!-- //리뉴얼 신규 -->
<!--[if lt IE 9]>
<script src="/pnuh/pnuh/include/js/html5shiv.js"></script>
<![endif]-->

<link rel="stylesheet" type="text/css" href="/pnuh/pnuh/include/css/reN_layout.css" />
<link rel="stylesheet" type="text/css" href="/pnuh/pnuh/include/css/reN_board.css" />
<script type="text/javascript" src="/pnuh/pnuh/include/js/reN_layout.js"></script>
<!-- 리뉴얼 신규 -->

</head>
<body>

				<!-- popup -->
				<div class="pop_wrap">
					<!-- 팝업은 상하좌우 중앙정렬 / 일반 window 팝업에 사용할거면 제거 -->

					<!-- popup layer(일반) -->
					<section class="popLayout popWin" id="pop_pwCheck">

						<h1 class="popTit">확인번호 입력</h1>

						<div class="popConts">
							<!-- 팝업 내용 입력-->
							<div class="popInner">


								<p class="txt mB15">확인번호를 입력해 주세요.</p>
								<fieldset>
									<legend>확인번호 입력 영역</legend>
									<input class="inp_t" type="password" title="확인번호를 입력하세요." placeholder="확인번호" tabindex="0" />
								</fieldset>
								<div class="btnArea">
									<a href="#none" class="btnC bluegreen"><span>확인</span></a>
								</div>
							</div>
							<!-- //팝업 내용 입력 -->
						</div>

						<button type="button" class="btn_popClose">창닫기</button>

					</section>
					<!-- //popup layer(일반) -->

				</div>
				<!-- popup -->

</body>
</html>
