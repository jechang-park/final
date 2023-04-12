package com.kh.yagiyo.web.form.board;

import com.kh.yagiyo.domain.entity.Board;
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

  public static BoardForm toBoardForm(Board board){
  BoardForm boardForm = new BoardForm();
  boardForm.setId(board.getBOARD_ID());
  boardForm.setBoardWriter(board.getBOARD_WRITER());
  boardForm.setBoardPass(board.getBOARD_PASS());
  boardForm.setBoardTitle(board.getBOARD_TITLE());
  boardForm.setBoardContents(board.getBOARD_CONTENTS());
  boardForm.setBoardHits(board.getBOARD_HITS());
  boardForm.setBoardCreatedTime(board.getCREATE_TIME());
  boardForm.setBoardUpdatedTime(board.getUPDATE_TIME());
  return boardForm;
  }
}
