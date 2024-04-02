import { Position } from "@/types";
import { PositionItem } from "../../Blocks/Position";
import { Box, Center, Title, rem } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./ExperienceList.module.css";

type ExperienceListProps = {
  list: Position[];
};

export const ExperienceList = ({ list }: ExperienceListProps) => {
  const t = useTranslations("Experience");

  return (
    <Box>
      <Center>
        <Title order={2} size={rem(36)}>
          {t("title")}
        </Title>
      </Center>
      <br />
      <Box className={classes.wrapper}>
        {list?.map((item) => (
          <Box
            key={item.company.companyName + item.position}
            className={classes.position}
          >
            <PositionItem {...item} workType={t(item.workType)} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
