import { useEffect, useState } from 'react';
import { SKILL_LIST } from './consts';
import { calcModifier, calcTotalSkillPoints } from './helpers';

function Skills({ attrs, skills, changeSkill, skillPoints }) {
  return (
    <div>
      <h3>Skills</h3>
      <p>Total skill points available: {skillPoints}</p>
      <ul>
        {Object.keys(skills).map((name, index) => {
          const modifierName = SKILL_LIST[index].attributeModifier
          const modifierValue = calcModifier(attrs[modifierName])
          const total = skills[name] + modifierValue
          const update = (change) => changeSkill(name, change) 

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
