import { useEffect, useState } from 'react';
import { questionDetailApi } from '../api/apis';
/* eslint-disable */
export const useClick = (direction, votes, setVotes, status, setStatus, data) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(data);
  const color = {
    UPCOLOR: 'var(--orange)',
    DOWNCOLOR: 'var(--orange)',
    DEFUALTCOLOR: 'var(--black-200)',
  };

  //초기 랜더링시 데이터에 따라 현재 상태를 결정
  useEffect(() => {
    if (direction === status) {
      setIsClicked(true);
    } else setIsClicked(false);
  }, [status]);

  //상태에따라 컴포넌트 색상 결정
  let fill;
  if (status === direction && isClicked) {
    fill = direction === 'up' ? color.UPCOLOR : color.DOWNCOLOR;
  } else fill = color.DEFUALTCOLOR;

  const onClick = () => {
    //현재버튼기준 클릭이되어있을때. 추천 누른거 취소, 추천이 눌러져있었다면 모든버튼 NONE상태로
    if (isClicked) {
      direction === 'up'? setVotes(votes - 1) : setVotes(votes + 1)
      setStatus('NONE');
      questionDetailApi.deleteVote(data,direction);

    }
    //현재버튼기준 클릭이 안되어있을때. 해당 std상태로 설정
    else {
      //추천상태가 DOWN이고 현재버튼이 UP일때
      if (status === 'down' && direction === 'up') {
        setVotes(votes + 2);
        
      }
      //추천상태가 UP이고 현재버튼이 DOWN일때
      else if (status === 'up' && direction === 'down') {
        setVotes(votes - 2);
      }
      //추천상태가 up,DOWN도아닐때 (아무거도 안눌려있을때)
      else if (status === 'NONE') {
        //현재버튼이 UP이면
        if (direction === 'up') {
          setVotes(votes + 1);
        }
        // DOWN이면
        else {
          setVotes(votes - 1);
        }
      }
      setStatus(direction);
      questionDetailApi.postVote(data,direction);
    }

    setIsClicked(!isClicked); //누를때마다 바뀌므로
  };

  const bind = {
    fill,
    className: 'Arrow',
    onClick,
  };
  return [bind];
};
