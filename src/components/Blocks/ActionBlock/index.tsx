import { Box, Center, Text, rem } from "@mantine/core";
import classes from "./ActionBlock.module.css";
import { Link } from "@/navigation";
import { ProseableText } from "../PortableText";

type ActionBlockProps = {
  description?: any[];
  buttonLabel: string;
  href: string;
};

export const ActionBlock = ({
  description,
  buttonLabel,
  href,
}: ActionBlockProps) => {
  return (
    <Box className={classes.root}>
      {description && (
        <Center className={classes.description}>
          <ProseableText value={description} />
        </Center>
      )}
      <Center>
        <Link href={href} className={classes.action}>
          {buttonLabel}
        </Link>
      </Center>
    </Box>
  );
};
