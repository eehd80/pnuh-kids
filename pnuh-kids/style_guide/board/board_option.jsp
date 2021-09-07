<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

				<form id="sendForm" name="sendForm">

				<!-- 리스트 박스옵션(기본2) -->
				<div class="BBS_boxOption">
					<fieldset>
						<legend>검색옵션</legend>
						<div class="optUnit">
							<div class="labelUnit">
								<select class="inp_s" title="검색 옵션 선택">
									<option>전체</option>
									<option>제목</option>
									<option>내용</option>
									<option>작성자</option>
								</select>
								<input type="text" class="inp_t" name="" id="" onfocus="if(this.value != ''){value=''}" value="검색어를 입력하세요." title="검색어 입력" />
							</div>
						</div>

						<div class="search">
							<button type="button" class="btn_search"><span>검색</span></button>
						</div>
					</fieldset>
				</div>
				<!-- //리스트 박스옵션(기본2) -->

				</form>
