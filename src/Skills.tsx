import { useEffect, useState } from 'react';
import { SKILL_LIST } from './consts';
import { calcModifier, calcTotalSkillPoints } from './helpers';

function Skills({ attrs }) {
  
  const [skillPoints, setSkillPoints] = useState(() => calcTotalSkillPoints(attrs))
  const [skills, setSkills] = useState(() => {
    const initial_skills = {};
    SKILL_LIST.forEach((skill) => {
      initial_skills[skill.name] = 0
    })
    return initial_skills
  })

  useEffect(() => {
    setSkillPoints(calcTotalSkillPoints(attrs))
  }, [attrs])

  return (
    <div>
      <h3>Skills</h3>
      <p>Total skill points available: {skillPoints}</p>
      <ul>
        {Object.keys(skills).map((name, index) => {
          const modifierName = SKILL_LIST[index].attributeModifier
          const modifierValue = calcModifier(attrs[modifierName])
          const total = skills[name] + modifierValue
          const update = (change) => {
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
            <li key={index}>
              {name}: {skills[name]}
              <button onClick={() => update(1)}>+</button>
              <button onClick={() => update(-1)}>-</button>
              (Modifier: {modifierName}): {modifierValue}, total: {total}
            </li>
            )
        }
        )}
      </ul>
    </div>
  );
}

export default Skills;
