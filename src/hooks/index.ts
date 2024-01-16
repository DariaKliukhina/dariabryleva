import { DEFAULT_LOCALE, LOCALES } from "@/utils";
import { usePathname, useParams, redirect } from "next/navigation";

export const useLocales = () => {
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = LOCALES.includes(params.locale as string) ? params.locale : null;
  const targetLocale = currentLocale === "ru" ? "en" : "ru";
  const targetPath = pathname.replace(/^\/(en|ru)/, "/" + targetLocale)
  const redirectPath = DEFAULT_LOCALE + '/' + pathname

  function redirectToDefaultLocale() {
    redirect(redirectPath)
  }
  
  return {
    currentLocale,
    targetLocale,
    targetPath,
    redirectToDefaultLocale
  }
}