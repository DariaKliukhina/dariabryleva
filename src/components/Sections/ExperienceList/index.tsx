import { Position, PositionRaw } from "@/types";
import { PositionItem } from "../../Blocks/Position";
import { Box, Center, Title, rem } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./ExperienceList.module.css";
import { adaptExperience } from "@/utils";

type ExperienceListProps = {
  list: PositionRaw[];
};

export const ExperienceList = ({ list }: ExperienceListProps) => {
  const t = useTranslations("Experience");
  const workTypes = {
    development: t("development"),
    teaching: t("teaching"),
  }

  const experience = adaptExperience(list);
  return (
    <Box>
      <Center>
        <Title order={2} size={rem(36)}>
          {t("title")}
        </Title>
      </Center>
      <br />
      <Box className={classes.wrapper}>
        {experience?.map((item) => (
          <Box key={item.company.companyName} className={classes.position}>
            <PositionItem
              {...item}
              workTypes={workTypes}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
