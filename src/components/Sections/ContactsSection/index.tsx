import { Box, Center, Flex, rem } from "@mantine/core";
import classes from "./Contacts.module.css";
import { Contacts } from "@/components/Blocks/Contacts";
import { useTranslations } from "next-intl";

export const ContactsSection = () => {
  const t = useTranslations("Contacts");

  const data = {
    name: t("name"),
    namePlaceholder: t("namePlaceholder"),
    nameError: t("nameError"),
    email: t("email"),
    emailPlaceholder: t("emailPlaceholder"),
    emailError: t("emailError"),
    message: t("message"),
    messagePlaceholder: t("messagePlaceholder"),
    messageError: t("messageError"),
    submit: t("submit"),
  };

  return (
    <Center>
      <Box className={classes.root}>
        <Contacts {...data}/>
      </Box>
    </Center>
  );
};
