<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>


			<!-- board -->
			<div class="board_area">

				<!-- board 옵션 -->
				<jsp:include page="board_option.jsp"/>
				<!-- //board 옵션 -->

				<p class="BBS_listNum">
					총<b>100</b>건 (1/67페이지)

					<a href="#none" class="btn_rss"><img src="/pnuh/pnuh/images/reN_board/ico_rss.png" alt="rss" /></a>
				</p>

				<!-- 리스트(항목노출) -->
				<div class="lineList_tb typeSort">
					<table>
						<caption><p>번호,제목,작성자,작성일,조회수 항목으로 내용을 확인 할 수 있는 표</p></caption>
						<colgroup><col /><col /><col /><col /><col /></colgroup>
						<thead>
							<tr>
								<th scope="col" class="headNum">번호</th>
								<th scope="col" class="headTxt">제목</th>
								<th scope="col" class="headWriter">작성자</th>
								<th scope="col" class="headDate">작성일</th>
								<th scope="col" class="headView">조회수</th>
							</tr>
						</thead>
						<tbody>
							<tr class="typeNoArticle">
								<td colspan="5">
									<p class="no_article">등록된 게시물이 없습니다.</p>
								</td>
							</tr>
							<!--
								### tr에 추가되는 class ###
								 *공지사항 추가 : typeNoti
							 -->
							<tr class="typeNoti">
								<td class="no"><span class="mark_noti">공지</span></td>
								<td class="txtL">
									<a href="#none">강의경력 증명서를 발급 받고 싶습니다</a>
								</td>
								<td><span class="writer">홍길동</span></td>
								<td><span class="date">2020.06.26</span></td>
								<td><span class="view">10,430</span></td>
							</tr>

							<tr class="typeNoti">
								<td class="no"><span class="mark_noti">공지</span></td>
								<td class="txtL">
									<a href="#none">강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다</a>
									<span class="ico_file">[첨부파일]</span>
									<span class="ico_new">[새글]</span>
								</td>
								<td><span class="writer">홍길동</span></td>
								<td><span class="date">2020.06.26</span></td>
								<td><span class="view">1,430</span></td>
							</tr>

							<tr>
								<td class="no">99999</td>
								<td class="txtL">
									<a href="#none">강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다</a>
								</td>
								<td><span class="writer">홍길동</span></td>
								<td><span class="date">2020.06.26</span></td>
								<td><span class="view">1,430</span></td>
							</tr>

							<tr>
								<td class="no">98</td>
								<td class="txtL">
									<a href="#none">강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다</a>
									<span class="ico_file">[첨부파일]</span>
									<span class="ico_new">[새글]</span>
								</td>
								<td><span class="writer">홍길동</span></td>
								<td><span class="date">2020.06.26</span></td>
								<td><span class="view">1,430</span></td>
							</tr>

							<tr>
								<td class="no">97</td>
								<td class="txtL">
									<a href="#none">강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다</a>
									<span class="ico_file">[첨부파일]</span>
									<span class="ico_new">[새글]</span>
								</td>
								<td><span class="writer">홍길동</span></td>
								<td><span class="date">2020.06.26</span></td>
								<td><span class="view">1,430</span></td>
							</tr>
							<tr>
								<td class="no">4</td>
								<td class="txtL">
									<a href="#none">강의경력 증명서를 발급 받고 싶습니다</a>
								</td>
								<td><span class="writer">홍길동</span></td>
								<td><span class="date">2020.06.26</span></td>
								<td><span class="view">1,430</span></td>
							</tr>
							<tr>
								<td class="no">3</td>
								<td class="txtL">
									<a href="#none">강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다강의경력 증명서를 발급 받고 싶습니다</a>
								</td>
								<td><span class="writer">남길동길동길동</span></td>
								<td><span class="date">2020.06.26</span></td>
								<td><span class="view">30</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //리스트(항목노출) -->

				<!-- board 페이징 -->
				<jsp:include page="board_paging.jsp"/>
				<!-- //board 페이징 -->

				<!-- 버튼영역 -->
				<div class="tbArea_btn">
					<a href="#none" class="btnC bluegreen"><span>등록</span></a>
				</div>
				<!-- //버튼영역 -->

			</div>
			<!-- //board -->
