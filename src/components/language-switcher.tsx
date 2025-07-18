import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLang: "pt" | "en";
  onLanguageChange: (lang: "pt" | "en") => void;
}

export function LanguageSwitcher({
  currentLang,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const toggleLanguage = () => {
    onLanguageChange(currentLang === "pt" ? "en" : "pt");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 rounded-full px-4"
    >
      <Globe className="h-4 w-4" />
      {currentLang.toUpperCase()}
    </Button>
  );
}
