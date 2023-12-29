import Buttons from "../Buttons";
import {Div} from "./styled.js";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <Div >
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="" title="Todos" />
          <Buttons onClickHandler={handleClick} value="PS5" title="PLAYSTATION 5" />
          <Buttons onClickHandler={handleClick} value="XBOX SERIES X" title="XBOX SERIES X" />
          <Buttons onClickHandler={handleClick} value="NINTENDO SWITCH" title="SWITCH" />
          <Buttons onClickHandler={handleClick} value="PS4" title="PLAYSTATION 4" />
        </div>
      </Div>
    </>
  );
};

export default Recommended;
