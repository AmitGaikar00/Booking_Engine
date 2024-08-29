import { z } from "zod";

// Schema for participant details form
export const participantFormSchema = z.object({
  participants: z.array(
    z.object({
      name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long." }),
      mobile: z
        .string()
        .min(10, { message: "Mobile number must be at least 10 digits long." })
        .refine((val) => !isNaN(Number(val)), {
          message: "Invalid phone number.",
        }),
      email: z.string().email({ message: "Invalid email address." }),
      age: z
        .string()
        .min(1, { message: "Age is required" })
        .refine((val) => !isNaN(Number(val)), {
          message: "Age must be a number.",
        }),
      gender: z.string().min(1, { message: "Gender is required." }),
    })
  ),
});

export type ParticipantFormSchemaType = z.infer<typeof participantFormSchema>;

// form1 schemas
export const form1Schema = z.object({
  dateOfTrip: z.string().min(1, { message: "Select the date of trip." }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." }),
  mobile: z
    .string()
    .min(10, { message: "Mobile number must be at least 10 digits long." })
    .refine((val) => !isNaN(Number(val)), {
      message: "Invalid phone number.",
    }),
  age: z
    .string()
    .min(1, { message: "Age is required" })
    .refine((val) => !isNaN(Number(val)), {
      message: "Age must be a number.",
    }),
  gender: z.string().min(1, { message: "Gender is required." }),
  sourceOfLead: z.string().min(1, { message: "Source of lead is required." }),
});

export type Form1SchemaType = z.infer<typeof form1Schema>;

// form2 schemas
export const form2Schema = z.object({
  legal: z.literal(true, {
    errorMap: () => ({
      message: "(You must accept the terms & conditions)",
    }),
  }),
  book_slot: z.boolean().optional(),
  ticket: z.string().optional(),
});

export type Form2SchemaType = z.infer<typeof form2Schema>;
