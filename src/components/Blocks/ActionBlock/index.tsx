import { Box, Center, Text, rem } from "@mantine/core";
import classes from "./ActionBlock.module.css";
import { Link } from "@/navigation";
import { ProseableText } from "../PortableText";

type ActionBlockProps = {
  description?: any[];
  buttonLabel: string;
  href: string;
  target?: "_self" | "_blank"
};

export const ActionBlock = ({
  description,
  buttonLabel,
  href,
  target="_self"
}: ActionBlockProps) => {
  return (
    <Box className={classes.root}>
      <Center>
        <Link href={href} className={classes.action} target={target}>
          {buttonLabel}
        </Link>
      </Center>
      {description && (
        <Center className={classes.description}>
          <ProseableText value={description} />
        </Center>
      )}
    </Box>
  );
};
