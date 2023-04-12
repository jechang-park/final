package com.kh.yagiyo.web.form.board;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor //기본생성자
@AllArgsConstructor //모든필드를 매개변수로 하는 생성자
public class BoardForm {

  private Long id;
  private String boardWriter;
  private String boardPass;
  private String boardTitle;
  private String boardContents;
  private int boardHits;
  private LocalDateTime boardCreatedTime;
  private LocalDateTime boardUpdatedTime;
}
