import { useEffect, useState } from 'react';
import Attribute from './Attribute';
import { ATTRIBUTE_LIST } from './consts';

function Attributes() {
  const [attrs, setAttrs] = useState({});

  useEffect(() => {
    const initial_attrs = {};
    ATTRIBUTE_LIST.forEach((attr) => {
      initial_attrs[attr] = 10
    });
    setAttrs(initial_attrs)
  }, [])
  return (
    <ul>
      {Object.keys(attrs).map((attr, index) => 
        <Attribute
          key={index}
          name={attr}
          value={attrs[attr]}
          update={(value) => setAttrs((prev) => {
            const newState = {...prev}
            newState[attr] += value
            return newState
          })}
        /> 
      )}
    </ul>
  );
}

export default Attributes;
