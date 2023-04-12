package com.kh.yagiyo.domain.board.svc;

import com.kh.yagiyo.web.form.board.BoardForm;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface boardSVC {
   public void save(BoardForm boardForm);

   List<BoardForm> findAll();
}
