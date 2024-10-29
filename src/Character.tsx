import { useEffect, useState } from 'react';
import { ATTRIBUTE_LIST, SKILL_LIST } from './consts';
import Attributes from './Attributes';
import Classes from './Classes';
import Class from './Class';
import Skills from './Skills';
import { calcTotalSkillPoints } from './helpers';

function Character() {
  const [attrs, setAttrs] = useState({})
  const [selectedClass, setSelectedClass] = useState(null)
  const [skills, setSkills] = useState<Record<string,number>>(() => {
    const initial_skills = {};
    SKILL_LIST.forEach((skill) => {
      initial_skills[skill.name] = 0
    })
    return initial_skills
  })
  const [skillPoints, setSkillPoints] = useState<number>(() => calcTotalSkillPoints(attrs))

  useEffect(() => {
    const sum = Object.values(skills).reduce((total, value) => total + value, 0)
    setSkillPoints(calcTotalSkillPoints(attrs) - sum)
  }, [attrs])

  useEffect(() => {
    const initial_attrs = {};
    ATTRIBUTE_LIST.forEach((attr) => {
      initial_attrs[attr] = 10
    });
    setAttrs(initial_attrs)
  }, [])

  const changeSkill = (name, change) => {
    if (skillPoints - change < 0 || skills[name] + change < 0) {
      return
    }
    setSkills((prevState) => {
      const newState =  {...prevState}
      newState[name] = Math.max(prevState[name] + change, 0)
      return newState
    })
    setSkillPoints((prevState) => prevState - change)
  }

  return (
    <>
      <Attributes attrs={attrs} updateAttr={(attr, change) => setAttrs((prevState) => {
        const newState = {...prevState}
        newState[attr] = Math.max(0, prevState[attr] + change)
        return newState;
      })}/>
      <Classes attrs={attrs} setSelected={setSelectedClass}/>
      {!!selectedClass && <Class className={selectedClass}/>}
      <Skills attrs={attrs} skills={skills} changeSkill={changeSkill} skillPoints={skillPoints}/>
    </>
  );
}

export default Character;
