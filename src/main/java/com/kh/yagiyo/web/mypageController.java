package com.kh.yagiyo.web;

import com.kh.yagiyo.domain.member.svc.MemberSVC;
import com.kh.yagiyo.web.form.member.MemberFixForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/mypage")
public class mypageController {

    private final MemberSVC memberSVC;
    //회원정보 삭제화면 불러오기

    @GetMapping("/delete")
    public String memberDelete() {
        return "/member/memberDelete";
    }

//회원정보 수정화면 불러오기
    @GetMapping("/fix")
    public String memberFix(Model model){
        model.addAttribute("memberFixForm", new MemberFixForm());
        return "/member/memberFix";
    }
}
