package com.kh.yagiyo.web;


import com.kh.yagiyo.domain.board.svc.boardSVC;
import com.kh.yagiyo.web.form.board.BoardForm;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/board")
public class BoardController {

  @GetMapping("")
  public String boardForm(){
    return "/board/board";
  }
  @GetMapping("/save")
  public String boardSaveForm(){
    return "/board/boardSave";
  }
  @PostMapping("/save")
  public String save(@ModelAttribute BoardForm boardForm){
    System.out.println("boardForm = " + boardForm);
    bo
    return null;
  }
}
