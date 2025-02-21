'use client'

import { Button } from "@/components/button";
import { InputFieldRoot, InputIconRoot, InputRoot } from "@/components/input";
import { ArrowRight, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { subscribeToEvent } from "@/http/api";
import { useRouter } from "next/navigation";

// Esquema de validação
const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um email válido'),
})


// Tipagem do formulário
type SubscriptionSchema = z.infer<typeof subscriptionSchema>


export function SubscriptionForm() {
  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ name, email }: SubscriptionSchema) {
    try {
      const response = await subscribeToEvent({ name, email });

      console.log(response.subscriberId)

      if (response?.subscriberId) {
        router.push(`/invite/${response.subscriberId}`);
      } else {
        console.error("Erro ao obter subscriberId");
      }
    } catch (error) {
      console.error("Erro ao se inscrever:", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">Inscrição</h2>

      <div className="space-y-3">
        {/* Campo Nome */}
        <div className="space-y-2">
          <InputRoot>
            <InputIconRoot>
              <User />
            </InputIconRoot>
            <InputFieldRoot
              type="text"
              placeholder="Nome Completo"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && <p className="text-danger text-xs font-semibold">{errors.name.message}</p>}
        </div>

        {/* Campo E-mail */}
        <div className="space-y-2">
          <InputRoot>
            <InputIconRoot>
              <Mail />
            </InputIconRoot>
            <InputFieldRoot
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && <p className="text-danger text-xs font-semibold">{errors.email.message}</p>}
        </div>
      </div>

      {/* Botão de enviar */}
      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
