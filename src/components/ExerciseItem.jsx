import { useEffect, useState } from "react";

import { Card, Input, List } from "antd";
const { TextArea } = Input;
const { Meta } = Card;

import { addTolocalStorage, getFromlocalStorage } from "../utils/localStorage";

// eslint-disable-next-line react/prop-types
const ExerciseItem = ({ id, text, translate, isAllResults }) => {
  const [isEnter, setIsEnter] = useState(false);
  const [previous, setPrevious] = useState(["empty"]);

  const onEnter = (value) => {
    // eslint-disable-next-line no-extra-boolean-cast

    setPrevious(getFromlocalStorage(id));
    
    if (!!value.length && !isEnter) {
      addTolocalStorage(id, value);
    }

    setIsEnter(true);
  };

  useEffect(() => {
    setPrevious(getFromlocalStorage(id));
  }, [isAllResults]);

  return (
    <Card
      style={{ marginBottom: "20px" }}
      title={
        <span
          className="title"
          dangerouslySetInnerHTML={{ __html: translate }}
        />
      }
    >
      <TextArea
        placeholder="Type here"
        showCount
        maxLength={200}
        onPressEnter={(e) => onEnter(e.target.value)}
        autoSize={{
          minRows: 2,
          maxRows: 2,
        }}
      />
      <Meta
        style={{ marginTop: "20px" }}
        title={
          <div>
            <span>Translate: </span>
            {isEnter ? (
              <span
                className="title"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ) : (
              "*****"
            )}
          </div>
        }
      />
      {isEnter ||
        (isAllResults && (
          <List
            style={{ marginTop: "20px" }}
            size="small"
            header={<b>Previous Translates:</b>}
            bordered
            dataSource={previous.reverse()}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        ))}
    </Card>
  );
};

export default ExerciseItem;
