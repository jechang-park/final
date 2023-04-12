package com.kh.yagiyo.domain.board.dao;

import com.kh.yagiyo.domain.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface boardDAO extends JpaRepository<Board,Long> {

}
