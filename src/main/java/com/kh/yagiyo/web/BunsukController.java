package com.kh.yagiyo.web;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
@RequiredArgsConstructor
public class BunsukController {

    @GetMapping("/name")
  public String bunsuk() {
    return "test1/name";
  }

@GetMapping("/gender")
  public String bunsuk2() {
    return "test1/gender";
  }

@GetMapping("/age")
  public String bunsuk3() {
    return "test1/age";
  }

@GetMapping("/illness")
  public String bunsuk4() {
    return "test1/illness";
  }

@GetMapping("/dosage")
  public String bunsuk5() {
    return "test1/dosageForm";
  }

@GetMapping("/point")
  public String bunsuk7() {
    return "test1/point";
  }

@GetMapping("/cm")
  public String bunsuk8() {
    return "test1/cm";
  }

@GetMapping("/kg")
  public String bunsuk9() {
    return "test1/kg";
  }

@GetMapping("/health")
  public String bunsuk10() {
    return "test1/health";
  }

@GetMapping("/health2")
  public String bunsuk11() {
    return "test1/health2";
  }

@GetMapping("/sun")
  public String bunsuk12() {
    return "test1/sun";
  }

@GetMapping("/eat")
  public String bunsuk13() {
    return "test1/eat";
  }

@GetMapping("/smoking")
  public String bunsuk6() {
    return "test1/smoking";
  }

@GetMapping("/status")
  public String bunsuk14() {
    return "test1/status";
  }

@GetMapping("/men")
  public String bunsuk15() {return "test1/men";}

@GetMapping("/women")
  public String bunsuk16() {
    return "test1/women";
  }

@GetMapping("/checkUp")
  public String bunsuk17() {
    return "test1/checkUp";
  }

@GetMapping("/drug")
  public String bunsuk18() {
    return "test1/drug";
  }


}
