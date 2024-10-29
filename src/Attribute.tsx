
function Attribute({ name, value, update }) {
  return (
    <li>
      {name}
      <button onClick={() => update(1)}>+</button>
      {value}
      <button onClick={() => update(-1)}>-</button>
    </li>
  );
}

export default Attribute;
