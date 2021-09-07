<%@ page contentType="text/html;charset=utf-8" pageEncoding="UTF-8"%>

						<!-- board -->
						<div class="board_area">

							<!-- 쓰기 -->
							<div class="lineList_tbW">
								<table>
									<!-- 용도에 맞게 caption 적용 -->
									<caption><p>분류,제목,상단공지,작성자,공개여부,비밀번호,첨부파일을 작성할 수 있는 표</p></caption>
									<colgroup><col><col><col><col></colgroup>
									<tbody>
										<tr>
											<th scope="row">회원 아이디</th>
											<td colspan="3">
												jinahwang
											</td>
										</tr>

										<tr>
											<th scope="row">한글 이름</th>
											<td>
												황진아
											</td>
											<th scope="row">진료번호</th>
											<td>
												20200413053
											</td>
										</tr>

										<tr class="w_pw">
											<th scope="row">기존 비밀번호</th>
											<td colspan="3">
												<input type="text" class="inp_t" title="기본 비밀번호 입력" />
											</td>
										</tr>

										<tr class="w_pw">
											<th scope="row">새 비밀번호</th>
											<td colspan="3">
												<input type="text" class="inp_t" title="새 비밀번호 입력" />
												<span class="add_txt">
													영문, 숫자 특수문자 3가지 조합으로 9자리 이상, 공백불가<br />
													연속되는 숫자, 문자열 3자리 이상 사용불가
												</span>
											</td>
										</tr>

										<tr class="w_pw">
											<th scope="row">새 비밀번호(확인)</th>
											<td colspan="3">
												<input type="text" class="inp_t" title="새 비밀번호 확인 입력" />
												<span class="add_txt">
													특수문자는 ~!@#$^* 만 허용합니다.
												</span>
											</td>
										</tr>

										<tr>
											<th scope="row">생년월일</th>
											<td>
												1983년02월22일
											</td>
											<th scope="row">성별</th>
											<td>
												여
											</td>
										</tr>

										<tr class="w_tel">
											<th scope="row">전화번호</th>
											<td>
												<select class="inp_s" title="지역번호 선택">
											        <option>선택</option>
											        <option>02</option>
											        <option>031</option>
											    </select>
												-
												<input type="text" class="inp_t" title="번호 앞자리 입력" />
												-
												<input type="text" class="inp_t" title="번호 뒤자리 입력" />
											</td>
											<th scope="row">휴대전화</th>
											<td>
												<select class="inp_s" title="식별번호 선택">
											        <option>선택</option>
											        <option>010</option>
											        <option>011</option>
											    </select>
												-
												<input type="text" class="inp_t" title="번호 앞자리 입력" />
												-
												<input type="text" class="inp_t" title="번호 뒤자리 입력" />
											</td>
										</tr>

										<tr class="w_address">
											<th scope="row">주소</th>
											<td colspan="3">
												<div class="zipCode">
													<input type="text" class="inp_t" title="우편번호 입력" />
													<a href="#none" class="btnC white"><span>우편번호 찾기</span></a>
												</div>
												<input type="text" class="inp_t" title="주소 입력" />
												<input type="text" class="inp_t" title="상세주소 입력" />
											</td>
										</tr>

										<tr class="w_email">
											<th scope="row">이메일</th>
											<td colspan="3">
												<input type="text" class="inp_t" title="E-mail 사용자 ID"> @ <input type="text" class="inp_t" title="E-mail 서비스 도메인" />
												<select class="inp_s" title="E-mail 서비스 도메인 선택">
													<option>Naver</option>
													<option>Nate</option>
													<option>Daum</option>
													<option>직접입력</option>
												</select>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!-- //쓰기 -->

							<!-- 동의 -->
							<!--<div class="agreeBox">
								<dl>
									<dt>개인정보 수집 및 이용에 대한 동의</dt>
									<dd>
										<ul class="list_dotGray">
											<li>수집 목적 : 서비스 이용에 따른 본인 확인 및 결과 회신, 서비스 진행에 따른 필요 정보 획득 및 응대 목적</li>
											<li>수집 항목 : 이름, 이메일주소, 휴대전화번호</li>
											<li>보유 및 이용기간 : 문의 처리 후 6개월간 보관 후 폐기</li>
										</ul>
									</dd>
								</dl>
							</div>-->
							<div class="agreeBox_check">
								<span class="inp_r cCir"><input type="radio" name="email_agreeCheck" id="email_agreeCheck_y" checked/><label for="email_agreeCheck_y">e-mail로 부산대학교병원에 관한 유용한 정보를 받는 것에 동의합니다.</label></span>
								<span class="inp_r cCir"><input type="radio" name="email_agreeCheck" id="email_agreeCheck_n" /><label for="email_agreeCheck_n">e-mail로 부산대학교병원에 관한 유용한 정보를 받는 것에 동의하지 않습니다.</label></span>
								<span class="inp_r cCir"><input type="radio" name="info_agreeCheck" id="info_agreeCheck_y" /><label for="info_agreeCheck_y">부산대학교병원 홍보, 정보메일 수신에 동의합니다.</label></span>
								<span class="inp_r cCir"><input type="radio" name="info_agreeCheck" id="info_agreeCheck_n" /><label for="info_agreeCheck_n">부산대학교병원 홍보, 정보메일 수신에 동의하지 않습니다.</label></span>
								<p class="exclam">단, 예약관련 정보는 수신동의 여부와 관계없이 발송됩니다.</p>
							</div>
							<!-- //동의 -->

							<!-- 버튼영역 -->
							<div class="btnArea">
								<a href="#none" class="btnC blue"><span>수정하기</span></a>
								<a href="#none" class="btnC darkgray"><span>취소하기</span></a>
							</div>
							<!-- //버튼영역 -->

						</div>
						<!-- //board -->
