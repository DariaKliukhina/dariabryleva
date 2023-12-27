import { Position } from "../../Blocks/Position";
import React from "react";

export const ExperienceList = ({ list }) => {
  return (
    <div>
      {list?.map(item => <Position key={item.company.companyName + item.position} {...item}/>)}
    </div>
  );
};
