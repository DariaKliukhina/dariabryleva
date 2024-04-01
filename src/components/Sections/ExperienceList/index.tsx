import { Box } from "@mantine/core";
import { Position } from "../../Blocks/Position";
import classes from "./ExperienceList.module.css";

export const ExperienceList = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list?.map((item) => (
        <Box
          key={item.company.companyName + item.position}
          className={classes.position}
        >
          <Position {...item} />
        </Box>
      ))}
    </div>
  );
};
