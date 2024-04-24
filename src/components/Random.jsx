import { useEffect, useState } from "react";
import exerciseList from "../../exerciseList.json";
import { Collapse, Typography, Button } from "antd";
const { Title } = Typography;

const Random = () => {
  const [collapseItem, setCollapseItem] = useState({});

  useEffect(() => {
   getCollapseItem()
  }, []);

  const getRandom = (value) => {
    return Math.floor(Math.random() * value);
  };

  const getCollapseItem = () => {
    const exerciseItems = exerciseList[getRandom(exerciseList.length)];
    const exerciseItem = exerciseItems[getRandom(exerciseItems.length)];
    setCollapseItem({
      label: exerciseItem.text,
      children: <p>{exerciseItem.translate}</p>,
    })
  };


  return (
    <div>
      <div className="random">
        <Title>Random sentense</Title>
        <Button onClick={getCollapseItem}>Generate new sentense</Button>
      </div>
      <Collapse items={[collapseItem]} />
    </div>
  );
};

export default Random;
