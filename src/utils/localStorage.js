import getDate from "./getDate";

const addTolocalStorage = (id, value) => {
  const dateValue = value + " - " + getDate();
  if (!localStorage.getItem("FromTo")) {
    localStorage.setItem(
      "FromTo",
      JSON.stringify([{ id, value: [dateValue] }])
    );
  } else {
    let local = JSON.parse(localStorage.getItem("FromTo"));
    const getValue = getFromlocalStorage(id);

    // eslint-disable-next-line no-extra-boolean-cast
    if (!!getValue.length) {
      const newValue = local.map((item) => {
        if (item.id === id) {
          return { id, value: [...item.value, dateValue] };
        }
        return item;
      });
      localStorage.setItem("FromTo", JSON.stringify(newValue));
    } else {
      localStorage.setItem(
        "FromTo",
        JSON.stringify([...local, { id, value: [dateValue] }])
      );
    }
  }
};

const getFromlocalStorage = (id) => {
  return (
    JSON.parse(localStorage.getItem("FromTo"))?.find((item) => item.id === id)
      ?.value || []
  );
};

export { addTolocalStorage, getFromlocalStorage };
