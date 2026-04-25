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
import { ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(6, "Phone number is too short").max(30),
  category: z.string().min(1, "Please select a category"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});
type Vals = z.infer<typeof schema>;

export const InquiryForm = () => {
  const {
    register, handleSubmit, reset, setValue, watch,
    formState: { errors, isSubmitting },
  } = useForm<Vals>({ resolver: zodResolver(schema), defaultValues: { category: "" } });

  const onSubmit = async (data: Vals) => {
    await new Promise((r) => setTimeout(r, 800)); // Simulate API delay
    toast.success("Inquiry received! We'll respond within 24 hours.");
    reset({ name: "", email: "", phone: "", category: "", message: "" });
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50">
      <span className="text-sm font-semibold text-primary uppercase tracking-widest">Send Your Inquiry</span>
      <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
        We Respond Within 24 Hours
      </h3>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 grid gap-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="c-name" className="text-sm font-medium">Name</Label>
            <Input id="c-name" {...register("name")} placeholder="Your full name" />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="c-phone" className="text-sm font-medium">Phone</Label>
            <Input id="c-phone" {...register("phone")} placeholder="+971 ..." />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="c-email" className="text-sm font-medium">Email Address</Label>
          <Input id="c-email" type="email" {...register("email")} placeholder="you@company.com" />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="c-cat" className="text-sm font-medium">Subject / Product Category</Label>
          <Select value={watch("category")} onValueChange={(v) => setValue("category", v, { shouldValidate: true })} >
            <SelectTrigger id="c-cat"><SelectValue placeholder="Select a category" /></SelectTrigger>
            <SelectContent>
              {productCategories.map((c) => (
                <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>
              ))}
              <SelectItem value="General Inquiry">General Inquiry</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category.message}</p>}
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="c-msg" className="text-sm font-medium">Your Message</Label>
          <Textarea id="c-msg" rows={4} {...register("message")} placeholder="Tell us what you need..." />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base mt-2">
          {isSubmitting ? "Sending…" : "Send Inquiry"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};
