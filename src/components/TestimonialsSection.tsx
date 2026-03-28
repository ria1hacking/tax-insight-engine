import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mohit Singh",
    text: "RapidTax has dealt with the entire process of GST Return Filing of my enterprise in a smooth and customer friendly manner and completed the entire process in a very short duration.",
  },
  {
    name: "Nirali Sharma",
    text: "One stop Solution for all GST related Queries & Registration and Return filing Services. Best quick services, perfect professional approach. Would surely refer among my contacts.",
  },
  {
    name: "Jitesh Gautam",
    text: "Highly Impressed by the Personal Attention given by the Professional Staff in getting the GST Registration done and registering the MSME certification for my business. Thank you RapidTax!",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
        Our <span className="text-secondary">Happy</span> Clients
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-muted rounded-xl p-6 border border-border"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground mb-4 italic leading-relaxed">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                {t.name[0]}
              </div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
