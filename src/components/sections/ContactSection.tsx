import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { productCategories } from "@/data/products";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/data/company";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(6).max(30),
  category: z.string().min(1, "Please select a category"),
  message: z.string().trim().min(10).max(1000),
});
type Vals = z.infer<typeof schema>;

export const ContactSection = ({ compact = false }: { compact?: boolean }) => {
  const {
    register, handleSubmit, reset, setValue, watch,
    formState: { errors, isSubmitting },
  } = useForm<Vals>({ resolver: zodResolver(schema), defaultValues: { category: "" } });

  const onSubmit = async (data: Vals) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Inquiry received — we’ll respond within 24 hours.");
    reset({ category: "" });
  };

  return (
    <section className={compact ? "section bg-surface" : "section"}>
      <div className="container-page grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Send Your Inquiry</span>
          <h2 className="mt-3 text-3xl md:text-4xl">
            We Respond Within 24 Hours
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Tell us what you need. Our procurement team will get back to you with
            pricing, availability and lead-time options.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="h-10 w-10 rounded-lg bg-secondary text-primary grid place-items-center shrink-0">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-primary">Office</div>
                <div className="text-muted-foreground">{company.address}</div>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-10 w-10 rounded-lg bg-secondary text-primary grid place-items-center shrink-0">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-primary">Phone</div>
                <a href={`tel:${company.phoneRaw}`} className="text-muted-foreground hover:text-accent">{company.phone}</a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-10 w-10 rounded-lg bg-secondary text-primary grid place-items-center shrink-0">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-primary">Email</div>
                <a href={`mailto:${company.email}`} className="text-muted-foreground hover:text-accent">{company.email}</a>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-card grid gap-4 self-start"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="c-name">Name</Label>
              <Input id="c-name" {...register("name")} placeholder="Your full name" />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="c-phone">Phone</Label>
              <Input id="c-phone" {...register("phone")} placeholder="+971 ..." />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="c-email">Email</Label>
            <Input id="c-email" type="email" {...register("email")} placeholder="you@company.com" />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="c-cat">Subject / Product Category</Label>
            <Select value={watch("category")} onValueChange={(v) => setValue("category", v, { shouldValidate: true })}>
              <SelectTrigger id="c-cat"><SelectValue placeholder="Select a category" /></SelectTrigger>
              <SelectContent>
                {productCategories.map((c) => (
                  <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>
                ))}
                <SelectItem value="General Inquiry">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && <p className="text-xs text-destructive">{errors.category.message}</p>}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="c-msg">Message</Label>
            <Textarea id="c-msg" rows={4} {...register("message")} placeholder="Tell us what you need…" />
            {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold"
          >
            {isSubmitting ? "Sending…" : "Send Inquiry"}
          </Button>
        </form>
      </div>
    </section>
  );
};
