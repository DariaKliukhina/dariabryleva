"use client";
import {
  Box,
  Center,
  Flex,
  Radio,
  Stack,
  Text,
  TextInput,
  Textarea,
  rem,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import classes from "./ReviewForm.module.css";
import { PrimaryButton } from "@/components/Bits/PrimaryButton";
import { PrimaryTextInput } from "@/components/Bits/FormFields/PrimaryTextInput";
import { PrimaryTextarea } from "@/components/Bits/FormFields/PrimaryTextarea";

type ReviewFormProps = {
  name: string;
  namePlaceholder: string;
  nameError: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  messageError: string;
  submit: string;
  howDoYouKnowMe: string;
  teacher: string;
  collegue: string;
  onSuccess: () => void;
};

type FormProps = {
  email: string;
  name: string;
  message: string;
  access_key: string | undefined;
};

export const ReviewForm = ({
  name,
  namePlaceholder,
  nameError,
  email,
  emailPlaceholder,
  message,
  messagePlaceholder,
  messageError,
  submit,
  howDoYouKnowMe,
  teacher,
  collegue,
  onSuccess,
}: ReviewFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
      howDoYouKnowMe: "collegue",
      access_key: process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY,
    },

    validate: {
      name: (value) => (value ? null : nameError),
      message: (value) => (value ? null : messageError),
    },
  });

  async function handleSubmit(data: FormProps) {
    setIsLoading(true);
    const json = JSON.stringify(data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        form.reset();
        onSuccess();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Box
      style={{
        opacity: isLoading ? 0.5 : 1,
        pointerEvents: isLoading ? "none" : "initial",
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap={rem(4)}>
          <Box className={classes.radioGroup}>
            <Text size="sm" className={classes.label}>
              {howDoYouKnowMe}
            </Text>
            <Flex gap={rem(14)}>
              <Radio
                label={collegue}
                name="howDoYouKnowMe"
                value="collegue"
                defaultChecked
                {...form.getInputProps("howDoYouKnowMe")}
              />
              <Radio
                label={teacher}
                name="howDoYouKnowMe"
                value="teacher"
                {...form.getInputProps("howDoYouKnowMe")}
              />
            </Flex>
          </Box>

          <Flex gap={rem(14)} direction={{ base: "column", xs: "row" }}>
            <PrimaryTextInput
              label={email}
              placeholder={emailPlaceholder}
              {...form.getInputProps("email")}
            />
            <PrimaryTextInput
              withAsterisk={true}
              label={name}
              placeholder={namePlaceholder}
              {...form.getInputProps("name")}
            />
          </Flex>

          <PrimaryTextarea
            withAsterisk={true}
            label={message}
            placeholder={messagePlaceholder}
            {...form.getInputProps("message")}
          />
        </Stack>

        <Center mt="md">
          <PrimaryButton type="submit">{submit}</PrimaryButton>
        </Center>
      </form>
    </Box>
  );
};
