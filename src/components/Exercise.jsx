import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <div className="unit-nav">
        <Link to={`/exercise/${+id - 1}`}>
          <Button disabled={+id === 0} icon={<ArrowLeftOutlined />}>
            Previous Unit
          </Button>
        </Link>
        <Link to={"/"}>
          <Button>Home</Button>
        </Link>
        <Link to={`/exercise/${+id + 1 || 0}`}>
          <Link to={`/exercise/${+id + 1}`}>
            <Button disabled={+id === exerciseList.length - 1}>
              Next Unit <ArrowRightOutlined />
            </Button>
          </Link>
        </Link>
      </div>

      <div className="unit-title">
        <Title>
          Book-{Math.ceil((+id + 1) / 30)} / Unit-{(+id % 30) + 1}
        </Title>
        <Button onClick={() => setAllResults(!isAllResults)}>
          All results
        </Button>
      </div>
      {exerciseItems}
    </div>
  );
};

export default Exercise;
