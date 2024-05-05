import { Box } from "@mantine/core";
import { Header } from "../Blocks/Header";
import { PrimaryContainer } from "../Bits/PrimaryContainer";
import { LanguagesTypes } from "@/types";
import { useTranslations } from "next-intl";
import { Footer } from "../Blocks/Footer";
import { footerLinks, links } from "@/utils";

export const PageLayout = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: LanguagesTypes;
}) => {
  const t = useTranslations("Menu");
  const translatedLinks = links.map((link) => ({
    ...link,
    label: t(link.label),
  }));
  const translatedFooterLinks = footerLinks.map((link) => ({
    ...link,
    label: t(link.label),
  }));

  return (
    <>
      <Header
        locale={locale}
        home={t("home")}
        links={translatedLinks}
        mobileMenuLinks={translatedFooterLinks}
      />
      <Box component="main">
        <PrimaryContainer>
          <Box className="pageContent">{children}</Box>
        </PrimaryContainer>
      </Box>
      <Footer locale={locale} links={translatedFooterLinks} />
    </>
  );
};
