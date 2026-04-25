import { useState, type ReactNode } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { productCategories } from "@/data/products";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  category: z.string().min(1, "Select a category"),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

type FormVals = z.infer<typeof schema>;

export const QuoteDialog = ({
  children,
  defaultCategory,
  title = "Request a Quote",
}: {
  children: ReactNode;
  defaultCategory?: string;
  title?: string;
}) => {
  const [open, setOpen] = useState(false);
  const {
    register, handleSubmit, reset, setValue, watch,
    formState: { errors, isSubmitting },
  } = useForm<FormVals>({
    resolver: zodResolver(schema),
    defaultValues: { category: defaultCategory ?? "" },
  });

  const onSubmit = async (data: FormVals) => {
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thank you! Our team will contact you within 24 hours.", {
      description: `Reference: ${data.category}`,
      icon: <CheckCircle2 className="h-4 w-4 text-accent" />,
    });
    reset({ category: defaultCategory ?? "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
          <DialogDescription>
            Fill in your details and our team will respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} placeholder="Your full name" />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} placeholder="+971 ..." />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} placeholder="you@company.com" />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="category">Product / Service Category</Label>
            <Select
              value={watch("category")}
              onValueChange={(v) => setValue("category", v, { shouldValidate: true })}
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
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
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} {...register("message")} placeholder="Tell us what you need…" />
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
      </DialogContent>
    </Dialog>
  );
};
