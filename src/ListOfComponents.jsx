import { Link } from "react-router-dom";

const ListOfComponent = ({ list = [] }) => {
  return (
    <div>
      {list.map(({ path }) => {
        const newPth = path;
        return (
          <div key={newPth}>
            <Link to={`/${newPth}`} key={newPth}>
              {path}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListOfComponent;
