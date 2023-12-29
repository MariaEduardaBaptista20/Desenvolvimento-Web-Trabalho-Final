import Category from "./Category/Category";
import Price from "./Price/Price";
import iclogo from "../../img/logoMario.png"

import {Section} from "./styled.js";

function Sidebar({handleChange}) {
  

  return (
    <>
      <Section className="sidebar">
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        {/* <Colors handleChange={handleChange}/> */}
      </Section>
    </>
  );
}

export default Sidebar;