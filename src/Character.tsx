import { useEffect, useState } from 'react';
import Attribute from './Attribute';
import { ATTRIBUTE_LIST, CLASS_LIST } from './consts';
import Attributes from './Attributes';
import Classes from './Classes';
import Class from './Class';

function Character() {
  const [attrs, setAttrs] = useState({})
  const [selectedClass, setSelectedClass] = useState(null)

  useEffect(() => {
    const initial_attrs = {};
    ATTRIBUTE_LIST.forEach((attr) => {
      initial_attrs[attr] = 10
    });
    setAttrs(initial_attrs)
  }, [])

  return (
    <>
      <Attributes attrs={attrs} updateAttr={(attr, change) => setAttrs((prevState) => {
        const newState = {...prevState}
        newState[attr] = prevState[attr] + change;
        return newState;
      })}/>
      <Classes attrs={attrs} setSelected={setSelectedClass}/>
      {!!selectedClass && <Class className={selectedClass}/>}
    </>
  );
}

export default Character;
