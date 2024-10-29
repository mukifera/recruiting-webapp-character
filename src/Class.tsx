import { CLASS_LIST } from './consts';

function Class({ className }) {

  return (
    <div>
      <h4>{className} class</h4>
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
