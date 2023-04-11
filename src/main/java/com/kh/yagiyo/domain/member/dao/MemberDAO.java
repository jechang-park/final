package com.kh.yagiyo.domain.member.dao;


import com.kh.yagiyo.domain.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.Optional;


public interface MemberDAO {
  //등록
Member save(Member member);

  //수정
  void update(Member member);

  //조회 by mail
  Optional<Member> findByEmail(String email);

  //조회 by member_id
  Optional<Member> findById(String id);

  //전체조회
  List<Member> findAll();

  //탈퇴
  void delete(Long memberId);

  //회원유무
  boolean isExist(String id);

  //로그인
  Optional<Member> login(String id, String pw);

  //아이디찾기
  Optional<String> findEmailByNickname(String nick);

  //닉네임 찾기
  Optional<Member> findByNick(String nick);

  //비밀번호찾기
  boolean isExistByEmailAndNickname(String email, String nick);

  //비밀번호변경
  void changePasswd(String email, String pw);

}
