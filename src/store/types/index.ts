export type LanguageProps = 'en' | 'ru';

export interface StoreState {
  language: LanguageProps;
  setLanguage: (state: LanguageProps) => void;
}