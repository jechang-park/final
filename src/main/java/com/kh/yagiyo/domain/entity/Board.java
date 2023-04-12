package com.kh.yagiyo.domain.entity;

import jakarta.persistence.*;
import lombok.Data;

// DB의 테이블 역활을 하는 클래스
@Entity
@Data
@Table(name = "board_table")
public class Board extends Base{
  @Id // pk 컬럼 지정. 필수
  @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
  private Long id;

  @Column(length = 20, nullable = false) // 크기 20. not null
  private String boardWriter;

  @Column // 크기 255 , null 가능
  private String boardPass;

  @Column
  private String boardTitle;

  @Column(length = 500)
  private String boardContents;

  @Column
  private int boardHits;

}
