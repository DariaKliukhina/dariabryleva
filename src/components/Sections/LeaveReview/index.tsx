import { ActionBlock } from "@/components";
import { Box } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./LeaveReview.module.css";

type LeaveReviewProps = {
  description?: any[];
};

export const LeaveReview = ({ description }: LeaveReviewProps) => {
  const t = useTranslations("Feedback");

  return (
    <Box className={classes.wrapper}>
      <ActionBlock
        description={description}
        href={"/leave-review"}
        buttonLabel={t("buttonLabel")}
      />
    </Box>
  );
};
