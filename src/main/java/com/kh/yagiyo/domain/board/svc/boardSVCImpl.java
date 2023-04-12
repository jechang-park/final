package com.kh.yagiyo.domain.board.svc;

import com.kh.yagiyo.domain.board.dao.boardDAO;
import com.kh.yagiyo.domain.entity.Board;
import com.kh.yagiyo.web.form.board.BoardForm;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

// DTO -> Entity (Entity Class)
// Entity -> DTO (DTO Class)

@Service
@RequiredArgsConstructor
public class boardSVCImpl implements boardSVC{
    private final boardDAO boardDAO;


    @Override
    public void save(BoardForm boardForm) {
        Board board = Board.toSaveEntity(boardForm);
    boardDAO.save(board);
    }

    @Override
    public List<BoardForm> findAll() {
        List<Board> boardEntityList = boardDAO.findAll();
        List<BoardForm> boardFormList = new ArrayList<>();
        for (Board board : boardEntityList){
            boardFormList.add(BoardForm.toBoardForm(board));
        }
        return boardFormList;
    }
}
