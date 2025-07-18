"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-[#7257FF] to-blue-600 bg-clip-text text-transparent">
          Entre em Contato
        </CardTitle>
        <p className="text-gray-600">Estamos aqui para ajudar você</p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Nome completo</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">E-mail</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Telefone</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Assunto</label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Mensagem</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border-gray-200 focus:border-[#7257FF] focus:ring-[#7257FF] resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#7257FF] to-blue-600 hover:from-[#7257FF]/90 hover:to-blue-600/90 text-white py-3 rounded-xl font-medium transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Enviar mensagem
              </>
            )}
          </Button>

          {submitStatus === "success" && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Mensagem enviada com sucesso!</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl">
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm font-medium">Erro ao enviar mensagem. Tente novamente.</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
