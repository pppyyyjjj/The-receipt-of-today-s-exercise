import styled from "styled-components";
import Back from "../part component/Back";
import Chest from "../part component/Chest";
import Shoulder from "../part component/Shoulder";
import Biceps from "../part component/Biceps";
import Triceps from "../part component/Triceps";

const StyledContents = styled.div`
  .flex-container {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    position: absolute;
    left: 450px;
    margin-top: 50px;
    .item {
      width: 200px;
      height: 200px;
      background-color: #ffeaa7;
      border: 3px solid black;
      border-radius: 30px;
      box-shadow: 10px 10px #747d8c;
      margin: 10px;
      text-align: center;
      font-family: "Sofia", cursive;
      font-size: 28px;
    }
  }
`;

const Contents = () => {
  return (
    <StyledContents>
      <div className="flex-container">
        <div className="item">
          <Chest />
          Bench Press
        </div>
        <div className="item">
          <Chest />
          Incline Bench Press
        </div>
        <div className="item">
          <Chest />
          Incline Bench Press Machine
        </div>
        <div className="item">
          <Shoulder />
          Shoulder Press
        </div>
        <div className="item">
          <Chest />
          Dip
        </div>
        <div className="item">
          <Shoulder />
          Side Lateral Raise
        </div>
        <div className="item">
          <Shoulder />
          Bent Over Lateral Raise
        </div>
        <div className="item">
          <Back /> Pull Up
        </div>
        <div className="item">
          <Back /> Lat Pull Down
        </div>
        <div className="item">
          <Back /> Seated Cable Row
        </div>
        <div className="item">
          <Back /> Barbell Row
        </div>
        <div className="item">
          <Back /> One Arm Dumbbell Row
        </div>
        <div className="item">
          <Back /> Arm Pull Down
        </div>
        <div className="item">
          <Biceps /> Bicep Curl
        </div>
        <div className="item">
          <Back /> Chin Up
        </div>
        <div className="item">
          <Triceps />
          Lying Tricep Extensions
        </div>
      </div>
    </StyledContents>
  );
};

export default Contents;
