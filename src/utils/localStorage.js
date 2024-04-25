import getDate from "./getDate";

const addTolocalFromTo = (id, value) => {
  const dateValue = value + " - " + getDate();
  if (!localStorage.getItem("FromTo")) {
    addToLocalStorage("FromTo", [{ id, value: [dateValue] }]);
  } else {
    let local = JSON.parse(localStorage.getItem("FromTo"));
    const getValue = getFromlocalStorage(id, "FromTo");

    // eslint-disable-next-line no-extra-boolean-cast
    if (!!getValue.length) {
      const newValue = local.map((item) => {
        if (item.id === id) {
          return { id, value: [...item.value, dateValue] };
        }
        return item;
      });
      addToLocalStorage("FromTo", newValue);
    } else {
      addToLocalStorage("FromTo", [...local, { id, value: [dateValue] }]);
    }
  }
};

const addToLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const getFromlocalStorage = (id, name) => {
  return (
    JSON.parse(localStorage.getItem(name))?.find((item) => item.id === id)
      ?.value || []
  );
};

export { addToLocalStorage, addTolocalFromTo, getFromlocalStorage };
