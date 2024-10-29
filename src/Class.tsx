import { useEffect, useState } from 'react';
import Attribute from './Attribute';
import { ATTRIBUTE_LIST, CLASS_LIST } from './consts';

function Class({ className }) {

  return (
    <div>
      {className} class
      <ul>
        {Object.keys(CLASS_LIST[className]).map((attr, index) => 
          <li key={index}>
            {attr}: {CLASS_LIST[className][attr]}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Class;
