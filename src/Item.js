export default function Item({ item, handleDelete, onHandlePackedItems }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onHandlePackedItems(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.discription}
        <button onClick={() => handleDelete(item.id)}>❌</button>
      </span>
    </li>
  );
}
