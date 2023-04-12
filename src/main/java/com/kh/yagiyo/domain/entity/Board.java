package com.kh.yagiyo.domain.entity;

import com.kh.yagiyo.web.form.board.BoardForm;
import jakarta.persistence.*;
import lombok.Data;

// DB의 테이블 역활을 하는 클래스
@Entity
@Data
@Table(name = "board")
@SequenceGenerator(
        name = "BOARD_ID_SEQ",
        sequenceName = "BOARD_ID_SEQ",
        initialValue = 1, allocationSize = 1)
public class Board extends Base{
  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOARD_ID_SEQ")
  private Long BOARD_ID;

  @Column(length = 20, nullable = false) // 크기 20. not null
  private String BOARD_WRITER;

  @Column // 크기 255 , null 가능
  private String BOARD_PASS;

  @Column
  private String BOARD_TITLE;

  @Column(length = 500)
  private String BOARD_CONTENTS;

  @Column
  private int BOARD_HITS;

  public static Board toSaveEntity(BoardForm boardForm){
    Board board = new Board();
    board.setBOARD_WRITER(boardForm.getBoardWriter());
    board.setBOARD_PASS(boardForm.getBoardPass());
    board.setBOARD_TITLE(boardForm.getBoardTitle());
    board.setBOARD_CONTENTS(boardForm.getBoardContents());
    board.setBOARD_HITS(0);
    return board;

  }
}
