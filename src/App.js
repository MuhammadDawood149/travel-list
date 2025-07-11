import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PakingList from "./PakingList.js";
import Stats from "./Stats.js";
export default function App() {
  const [item, setItem] = useState([]);
  function handleAddItem(item) {
    setItem((prevItem) => [...prevItem, item]);
  }
  function handleDelete(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handlePackedItems(id) {
    setItem((items) =>
      items.map((items) =>
        items.id === id ? { ...items, packed: !items.packed } : items
      )
    );
  }
  function handleClick() {
    const result = window.confirm(
      "Are you sure you want to delete all the items?"
    );
    if (result) {
      setItem([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PakingList
        items={item}
        handleDelete={handleDelete}
        onHandlePackedItems={handlePackedItems}
        handleClick={handleClick}
      />
      <Stats item={item} />
    </div>
  );
}
