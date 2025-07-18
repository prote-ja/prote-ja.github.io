import translations from "./translations.json";

export type Language = "pt" | "en";
export type TranslationKey = keyof typeof translations.pt;

// Language persistence
const LANGUAGE_STORAGE_KEY = "proteja-language";

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "pt";

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return (stored as Language) || "pt";
  } catch {
    return "pt";
  }
}

export function setStoredLanguage(lang: Language): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Ignore storage errors
  }
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export function useTranslations(lang: Language) {
  return {
    t: (key: string) => getTranslation(lang, key),
    lang,
  };
}
