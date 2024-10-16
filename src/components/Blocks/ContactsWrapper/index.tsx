"use client";

import { Box, Center, Title, rem } from "@mantine/core";
import { Contacts } from "../Contacts";
import { useState } from "react";
import classes from "./Contacts.module.css";

type ContactsWrapperProps = {
  data: {
    name: string;
    namePlaceholder: string;
    nameError: string;
    email: string;
    emailPlaceholder: string;
    emailError: string;
    message: string;
    messagePlaceholder: string;
    messageError: string;
    submit: string;
    title: string;
    success: string;
  };
};

export const ContactsWrapper = ({ data }: ContactsWrapperProps) => {
  const [isSent, setIsSent] = useState(false);

  function onSuccess() {
    setIsSent(true);
  }

  return (
    <Center>
      <Box className={classes.root}>
        <Title size={rem(28)} order={2} className={classes.title}>
          {isSent ? data.success : data.title}
        </Title>
        {!isSent && <Contacts {...data} onSuccess={onSuccess} />}
      </Box>
    </Center>
  );
};
