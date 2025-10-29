'use server';

import { extractCVData } from '@/ai/flows/cv-data-extraction';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const cvSchema = z.object({
  cvDataUri: z.string().startsWith('data:application/pdf;base64,', {
    message: 'Must be a base64 encoded PDF data URI',
  }),
});

export async function extractDataFromCVAction(
  prevState: any,
  formData: FormData
) {
  const validatedFields = cvSchema.safeParse({
    cvDataUri: formData.get('cvDataUri'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid input. Please upload a PDF file.',
      data: null,
    };
  }

  try {
    const result = await extractCVData(validatedFields.data);
    revalidatePath('/');
    return {
      message: 'CV data extracted successfully! Check the console.',
      data: result,
    };
  } catch (error) {
    console.error('CV Extraction Error:', error);
    return {
      message: 'Failed to extract data from CV. The AI model might be unavailable.',
      data: null,
    };
  }
}

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
