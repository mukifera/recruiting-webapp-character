
function Attribute({ name, value, update }) {
  const modifier = Math.floor((value - 10) / 2)
  return (
    <li>
      {name}: {value}
      (Modifier: {modifier})
      <button onClick={() => update(1)}>+</button>
      <button onClick={() => update(-1)}>-</button>
    </li>
  );
}

export default Attribute;
