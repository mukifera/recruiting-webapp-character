import Attribute from './Attribute';

function Attributes({ attrs, updateAttr }) {

  return (
    <div>
      <h3>Attributes</h3>
      <ul>
        {Object.keys(attrs).map((attr, index) => 
          <Attribute
            key={index}
            name={attr}
            value={attrs[attr]}
            update={(change) => updateAttr(attr, change)}
          /> 
        )}
      </ul>
    </div>
  );
}

export default Attributes;
