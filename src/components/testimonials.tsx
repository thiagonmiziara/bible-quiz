import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// Mock testimonials
const testimonials = [
  {
    name: "Maria Silva",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Este quiz me ajudou a aprofundar meu conhecimento bíblico de uma forma divertida e interativa!",
    rating: 5,
  },
  {
    name: "João Oliveira",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Uso o app todos os dias para meu devocional. Os versículos diários são uma bênção para começar o dia.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Recomendo para todos que querem testar seus conhecimentos bíblicos. Ótima ferramenta para grupos de estudo!",
    rating: 4,
  },
  {
    name: "Pedro Santos",
    avatar: "/placeholder.svg?height=40&width=40",
    comment:
      "Excelente aplicativo para memorizar versículos e aprender mais sobre a Bíblia. Interface muito intuitiva.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className='py-16'>
      <div className='container mx-auto max-w-6xl px-4 md:px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-2xl md:text-3xl font-bold text-zinc-100'>
            O que nossos usuários dizem
          </h2>
          <p className='text-zinc-400'>
            Depoimentos de pessoas que já estão usando nosso quiz
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='h-full bg-zinc-700 border-violet-500'>
              <CardContent className='p-6 flex flex-col h-full'>
                <div className='flex items-center gap-4 mb-4'>
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-medium text-zinc-100'>
                      {testimonial.name}
                    </p>
                    <div className='flex'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-amber-400 fill-amber-400"
                              : "text-zinc-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-zinc-300 flex-grow'>{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
