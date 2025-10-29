'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message is too short'),
});

export async function submitContactFormAction(
  prevState: any,
  formData: FormData
) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors in the form.',
    };
  }

  // In a real app, you would send an email or save to a database here.
  console.log('Contact Form Submitted:', validatedFields.data);

  revalidatePath('/');
  return {
    message: 'Thank you for your message! I will get back to you soon.',
    errors: {},
  };
}
