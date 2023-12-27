import { usePathname, useParams } from "next/navigation";

export const useLocales = () => {
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale || "en";
  const targetLocale = currentLocale === "ru" ? "en" : "ru";
  const targetPath = pathname.replace(/^\/(en|ru)/, "/" + targetLocale)
  
  return {
    currentLocale,
    targetLocale,
    targetPath
  }
}