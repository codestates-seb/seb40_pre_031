import styled from 'styled-components';

const LodingCircleBox = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .LodingOuter {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .LodingInner {
    width: 70%;
    height: 70%;
    border-radius: 100px;
    border: solid 4px transparent;
    border-top-color: #f19022;
    border-left-color: #f19022;
    animation: spinner 0.6s ease-in-out infinite;
  }
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LodingCircle = () => {
  return (
    <LodingCircleBox>
      <div className="LodingOuter">
        <div className="LodingInner"></div>
      </div>
    </LodingCircleBox>
  );
};
