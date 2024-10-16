"use client";
import React, { useState } from "react";
import { ReviewForm } from "../ReviewForm";
import { Box, Center, Title, rem } from "@mantine/core";
import classes from "./ReviewFormWrapper.module.css";

type ReviewFormWrapperProps = {
  data: {
    name: string;
    namePlaceholder: string;
    nameError: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    messageError: string;
    submit: string;
    title: string;
    success: string;
    howDoYouKnowMe: string;
    teacher: string;
    collegue: string;
  };
};

export const ReviewFormWrapper = ({ data }: ReviewFormWrapperProps) => {
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
        {!isSent && <ReviewForm {...data} onSuccess={onSuccess} />}
      </Box>
    </Center>
  );
};
