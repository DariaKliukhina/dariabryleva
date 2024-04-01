import { Box } from "@mantine/core";
import { PositionItem } from "../../Blocks/Position";
import classes from "./ExperienceList.module.css";
import { useTranslations } from "next-intl";
import { Position } from "@/types";

type ExperienceListProps = {
  list: Position[];
};

export const ExperienceList = ({ list }: ExperienceListProps) => {
  const t = useTranslations("Experience");

  return (
    <div>
      {list?.map((item) => (
        <Box
          key={item.company.companyName + item.position}
          className={classes.position}
        >
          <PositionItem {...item} workType={t(item.workType)} />
        </Box>
      ))}
    </div>
  );
};
