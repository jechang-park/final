package com.kh.yagiyo.web;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class NutrientsController {
  @GetMapping("/nutrients")
  public String nutrients() {
    return "nutrients";
  }

    @GetMapping("/nutrients/오메가3")
  public String omega3(){
      return "오메가3";
    }

  @GetMapping("/nutrients/프로바이오틱스(유산균)")
  public String probiotics(){
    return "프로바이오틱스(유산균)";
  }


}
