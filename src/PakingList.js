import { useState } from "react";
import Item from "./Item.js";
export default function PakingList({
  items,
  handleDelete,
  onHandlePackedItems,
  handleClick,
}) {
  const [sortBy, setSortBy] = useState("Input");
  let sortedItems;
  if (sortBy === "Input") {
    sortedItems = items;
  } else if (sortBy === "Discription") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.discription.localeCompare(b.discription));
  } else if (sortBy === "Packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            onHandlePackedItems={onHandlePackedItems}
          />
        ))}
      </ul>
      <div
        className="actions"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <select>
          <option value="Input">Sort by the input order</option>
          <option value="Discription">Sort by the discription</option>
          <option value="Packed">Sort by the packed status</option>
        </select>
        <button onClick={handleClick}>Clear</button>
      </div>
    </div>
  );
}
