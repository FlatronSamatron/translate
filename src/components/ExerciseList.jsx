import { Divider, Typography } from "antd";
import { Link } from "react-router-dom";
import exerciseList from "../../exerciseList.json";
const { Title } = Typography;

import chunks from "../utils/chunks";

const ExerciseList = () => {
  const list = exerciseList.map((item, i) => {
    return (
      <Link
        className="exercise-list-item"
        to={`exercise/${i}`}
        key={i}
      >
        Unit-{(i % 30) + 1}
      </Link>
    );
  });

  const bookList = [...chunks(list, list.length / (list.length / 30))];

  return (
    <div>
      <Title>Essential English Words</Title>
      <div>
        {bookList.map((item, i) => {
          return (
            <div className="exercise-list-items" key={i}>
              <Divider orientation="left">Book - {i + 1}</Divider>
              {item}
            </div>
          );
        })}
      </div>
      <Divider orientation="left">Random Unit</Divider>
      <Link className="exercise-list-item random" to="/random" key={"Random"}>
        Random
      </Link>
    </div>
  );
};

export default ExerciseList;
