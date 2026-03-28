import { Star } from "lucide-react";

const testimonials = [
  { name: "Mohit Singh", text: "RapidTax handled GST Return Filing smoothly and completed it in a very short duration." },
  { name: "Nirali Sharma", text: "One stop Solution for all GST queries. Best quick services, perfect professional approach." },
  { name: "Jitesh Gautam", text: "Impressed by the attention in getting GST Registration and MSME certification done!" },
];

const TestimonialsSection = () => (
  <section className="py-8 md:py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-xl md:text-4xl font-bold text-center text-foreground mb-4 md:mb-12">
        Our <span className="text-secondary">Happy</span> Clients
      </h2>
      <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-muted rounded-lg md:rounded-xl p-3 md:p-6 border border-border min-w-[75vw] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink">
            <div className="flex gap-0.5 mb-2 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="font-body text-[11px] md:text-sm text-muted-foreground mb-2 md:mb-4 italic leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xs">
                {t.name[0]}
              </div>
              <p className="font-heading font-semibold text-foreground text-xs md:text-base">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
