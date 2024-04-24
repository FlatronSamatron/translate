import { Button, Typography } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import exerciseList from "../../exerciseList.json";
import ExerciseItem from "./ExerciseItem";
const { Title } = Typography;

const Exercise = () => {
  const { id } = useParams();

  const [isAllResults, setAllResults] = useState();

  const exercise = exerciseList[id];
  const exerciseItems = exercise?.map(({ id, text, translate }) => {
    return (
      <div key={id}>
        <ExerciseItem
          id={id}
          text={text}
          translate={translate}
          isAllResults={isAllResults}
        />
      </div>
    );
  });

  return (
    <div>
      <div className="unit-title">
        <Title>Unit {(+id % 30) + 1}</Title>
        <Button onClick={() => setAllResults(!isAllResults)}>
          All results
        </Button>
      </div>
      {exerciseItems}
    </div>
  );
};

export default Exercise;
