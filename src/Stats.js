export default function Stats({ item }) {
  if (item.length === 0)
    return (
      <footer className="stats">
        <em>Start adding items in the packing list 🚀</em>
      </footer>
    );
  const length = item.length;
  const packedLength = item.filter((i) => i.packed).length;
  const percentage = Math.round((packedLength / length) * 100);
  return (
    <footer className="stats">
      {length === packedLength ? (
        <em>You got evrything! Ready to go ✈</em>
      ) : (
        <em>
          you have {length} item on your list, and you already packed{" "}
          {packedLength} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
