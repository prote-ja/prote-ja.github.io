import type React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Users,
  Heart,
  Zap,
  Phone,
  Clock,
  Shield,
  Brain,
  Headphones,
} from "lucide-react";
import { useState } from "react";
import { useTranslationsContext } from "@/lib/i18n";

export default function ContactPage() {
  const {
    t,
    lang: currentLang,
    setLang: setCurrentLang,
  } = useTranslationsContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactReasons = [
    {
      icon: Users,
      title: t("contact.help.partnerships.title"),
      description: t("contact.help.partnerships.description"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: t("contact.help.caregivers.title"),
      description: t("contact.help.caregivers.description"),
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: t("contact.help.technology.title"),
      description: t("contact.help.technology.description"),
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: t("contact.reasons.response.title"),
      description: t("contact.reasons.response.description"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: t("contact.reasons.expertise.title"),
      description: t("contact.reasons.expertise.description"),
      color: "from-[#7257FF] to-purple-600",
    },
    {
      icon: Headphones,
      title: t("contact.reasons.support.title"),
      description: t("contact.reasons.support.description"),
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#7257FF] via-[#5d47e6] to-[#4c3bcc]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-40 left-20 w-20 h-20 bg-white/15 rounded-full blur-lg animate-bounce"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=1/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <MessageCircle className="h-5 w-5 text-white" />
              <span className="text-sm font-medium">{t("contact.badge")}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-white/90 mb-6 font-medium leading-relaxed">
              {t("contact.subtitle")}
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-12">
              {t("contact.description")}
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pb-12 md:pb-18">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {t("contact.stats.response")}
                </div>
                <p className="text-white/70 text-sm">
                  {t("contact.stats.responseLabel")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {t("contact.stats.emails")}
                </div>
                <p className="text-white/70 text-sm">
                  {t("contact.stats.emailsLabel")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">
                  {t("contact.stats.founded")}
                </div>
                <p className="text-white/70 text-sm">
                  {t("contact.stats.foundedLabel")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 ">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-16 sm:h-20 md:h-24 fill-white"
            preserveAspectRatio="none"
          >
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t("contact.quickContact")}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-[#7257FF]/5">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t("contact.info.email")}
                  </h3>
                  <a
                    href="mailto:contato@prote-ja.com"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
                  >
                    contato@prote-ja.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t("contact.info.phone")}
                  </h3>
                  <p className="text-gray-600 text-sm">Em breve</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {t("contact.info.location")}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Toledo, Paraná - Brasil
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form - Takes 3/5 of space */}
              <div className="lg:col-span-3">
                <Card className="shadow-2xl border-0 bg-white overflow-hidden">
                  <div className="bg-gradient-to-r from-[#7257FF] to-blue-600 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {t("contact.form.title")}
                    </h2>
                    <p className="text-white/90">
                      {t("contact.form.subtitle")}
                    </p>
                  </div>

                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            {t("contact.form.name")}{" "}
                            {t("contact.form.required")}
                          </label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF] h-12"
                            placeholder={
                              t("contact.form.namePlaceholder") as string
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            {t("contact.form.email")}{" "}
                            {t("contact.form.required")}
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF] h-12"
                            placeholder={
                              t("contact.form.emailPlaceholder") as string
                            }
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            {t("contact.form.phone")}
                          </label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF] h-12"
                            placeholder={
                              t("contact.form.phonePlaceholder") as string
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700">
                            {t("contact.form.subject")}{" "}
                            {t("contact.form.required")}
                          </label>
                          <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF] h-12"
                            placeholder={
                              t("contact.form.subjectPlaceholder") as string
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          {t("contact.form.message")}{" "}
                          {t("contact.form.required")}
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF] resize-none"
                          placeholder={
                            t("contact.form.messagePlaceholder") as string
                          }
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#7257FF] to-blue-600 hover:from-[#7257FF]/90 hover:to-blue-600/90 text-white py-4 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            {t("contact.form.sending")}
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            {t("contact.form.send")}
                          </>
                        )}
                      </Button>

                      {submitStatus === "success" && (
                        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-200">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-medium">
                            {t("contact.form.success")}
                          </span>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">
                          <AlertCircle className="h-5 w-5" />
                          <span className="font-medium">
                            {t("contact.form.error")}
                          </span>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar - Takes 2/5 of space */}
              <div className="lg:col-span-2 space-y-8">
                {/* How can we help section */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-[#7257FF]/5 to-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      {t("contact.help.title")}
                    </h3>
                    <div className="space-y-4">
                      {contactReasons.map((reason, index) => (
                        <div
                          key={index}
                          className="group p-4 rounded-xl hover:bg-white/70 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/50"
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${reason.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              <reason.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 mb-2">
                                {reason.title}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {reason.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                      {t("contact.reasons.title")}
                    </h3>
                    <div className="space-y-4">
                      {whyChooseUs.map((reason, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/50 transition-colors"
                        >
                          <div
                            className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-r ${reason.color}`}
                          >
                            <reason.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {reason.title}
                            </h4>
                            <p className="text-xs text-gray-600 mt-1">
                              {reason.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                {/* <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {t("contact.info.hours")}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {t("contact.info.businessHours")}
                    </p>
                  </CardContent>
                </Card> */}

                {/* Motivational Card */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">💜</div>
                    <h3 className="font-bold text-gray-900 mb-3">
                      {t("contact.info.ready.title")}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {t("contact.info.ready.description")}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[#7257FF]">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-medium">ProteJÁ</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
