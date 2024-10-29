import { useEffect, useState } from 'react';
import Attribute from './Attribute';
import { ATTRIBUTE_LIST, CLASS_LIST } from './consts';

function Classes({ attrs, setSelected }) {

  const doesApply = (className) => 
    Object.keys(CLASS_LIST[className]).reduce(
      (res, attr) => res && attrs[attr] >= CLASS_LIST[className][attr],
      true
    );

  return (
    <ul>
      {Object.keys(CLASS_LIST).map((className, index) => 
        <li
          key={index}
          style={{
            color: doesApply(className) ? "green" : "inherit"
          }}
          onClick={() => setSelected(className)}
        >
          {className}
        </li>
      )}
    </ul>
  );
}

export default Classes;
