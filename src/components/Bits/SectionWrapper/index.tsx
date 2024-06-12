import { Link } from "@/navigation";
import { Box, Center, Flex, Title, rem } from "@mantine/core";
import classes from "./SectionWrapper.module.css";

type SectionWrapperProps = {
  children: React.ReactNode;
  title: string;
  link?: string;
  linkLabel?: string;
};

export const SectionWrapper = ({
  children,
  title,
  link,
  linkLabel = "more",
}: SectionWrapperProps) => {
  return (
    <Box className={classes.wrapper}>
      <Flex justify="space-between" className={classes.top}>
        <Title order={2} size={rem(32)}>
          {title}
        </Title>

        {link && (
          <Box visibleFrom="xs">
            <Link href={link}>{linkLabel}</Link>
          </Box>
        )}
      </Flex>

      <Box className={classes.content}>{children}</Box>

      {link && (
        <Box hiddenFrom="xs">
          <Center>
            <Link href={link}>{linkLabel}</Link>
          </Center>
        </Box>
      )}
    </Box>
  );
};
