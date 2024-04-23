import { LanguagesTypes, PositionRaw } from "@/types";
import { ExperienceItem } from "../../Blocks/ExperienceItem";
import { Box, Center, Title, rem } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./ExperienceList.module.css";
import { adaptExperience } from "@/utils";

type ExperienceListProps = {
  list: PositionRaw[];
  locale: LanguagesTypes;
};

export const ExperienceList = ({ list, locale }: ExperienceListProps) => {
  const t = useTranslations("Experience");
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
          <Box key={item?.company?.companyName} className={classes.position}>
            <ExperienceItem {...item} locale={locale} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
