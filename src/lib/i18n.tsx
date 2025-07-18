import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import translations from "./translations.json";

// Define the structure of your translations to improve type safety
export type Translations = typeof translations;
export type Language = keyof Translations; // "pt" | "en"
export type TranslationKey = string; // We'll keep this as string for flexible access, but could make it more strict with nested keyof if translations weren't deeply nested

// Language persistence
const LANGUAGE_STORAGE_KEY = "proteja-language";

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "pt"; // Default to 'pt' on server

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    // Ensure the stored language is one of the defined Language types
    if (stored && (stored === "pt" || stored === "en")) {
      return stored as Language;
    }
    return "pt"; // Default if no valid language is stored
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return "pt";
  }
}

export function setStoredLanguage(lang: Language): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    console.error("Error setting localStorage:", error);
    // Ignore storage errors, but log them for debugging
  }
}

// Function to safely get nested translation values
export function getTranslation(lang: Language, key: TranslationKey): any {
  const keys = key.split(".");
  let value: any = translations[lang]; // Start with the language object

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // If a key is not found at any level, return the key itself as a fallback
      // or a more descriptive error/empty string
      return key;
    }
  }
  return value || key; // Fallback to key if value is undefined/null
}

// Define the shape of the context value
interface TranslationContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string | string[]; // t can return string or string[]
}

// Create the context with a default undefined value
const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

// Translation Provider Component
interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  // Initialize with stored language or default
  const [lang, setLangState] = useState<Language>(getStoredLanguage());

  // Update localStorage when language changes
  useEffect(() => {
    setStoredLanguage(lang);
  }, [lang]);

  // Function to set language and update state
  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  // Memoize the translation function to prevent unnecessary re-renders
  const t = (key: TranslationKey): string | string[] => {
    return getTranslation(lang, key);
  };

  const contextValue = {
    lang,
    setLang,
    t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

// Custom hook to use translations
export function useTranslationsContext() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error(
      "useTranslationsContext must be used within a TranslationProvider"
    );
  }
  return context;
}
