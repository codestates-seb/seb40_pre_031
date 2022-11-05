import { useEffect, useState } from 'react';
// import { questionDetailApi } from '../api/apis';
export const useClick = (std, votes, setVotes, status, setStatus) => {
  const [isClicked, setIsClicked] = useState(false);

  const color = {
    UPCOLOR: 'var(--orange)',
    DOWNCOLOR: 'var(--orange)',
    DEFUALTCOLOR: 'var(--black-200)',
  };

  //초기 랜더링시 데이터에 따라 현재 상태를 결정
  useEffect(() => {
    if (std === status) {
      setIsClicked(true);
    } else setIsClicked(false);
  }, [status]);

  //상태에따라 컴포넌트 색상 결정
  let fill;
  if (status === std && isClicked) {
    fill = std === 'UP' ? color.UPCOLOR : color.DOWNCOLOR;
  } else fill = color.DEFUALTCOLOR;

  const onClick = () => {
    //현재버튼기준 클릭이되어있을때. 추천 누른거 취소, 추천이 눌러져있었다면 모든버튼 NONE상태로
    if (isClicked) {
      if (std === 'UP') {
        setVotes(votes - 1);
      } else {
        setVotes(votes + 1);
      }
      setStatus('NONE');
    }
    //현재버튼기준 클릭이 안되어있을때. 해당 std상태로 설정
    else {
      //추천상태가 DOWN이고 현재버튼이 UP일때
      if (status === 'DOWN' && std === 'UP') {
        setVotes(votes + 2);
      }
      //추천상태가 UP이고 현재버튼이 DOWN일때
      else if (status === 'UP' && std === 'DOWN') {
        setVotes(votes - 2);
      }
      //추천상태가 UP,DOWN도아닐때 (아무거도 안눌려있을때)
      else if (status === 'NONE') {
        //현재버튼이 UP이면
        if (std === 'UP') {
          setVotes(votes + 1);
        }
        // DOWN이면
        else {
          setVotes(votes - 1);
        }
      }
      setStatus(std);
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
