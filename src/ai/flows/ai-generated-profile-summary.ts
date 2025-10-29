'use server';

/**
 * @fileOverview Generates a professional summary of a user's skills and experience for their portfolio.
 *
 * - generateProfileSummary - A function that generates the profile summary.
 * - ProfileSummaryInput - The input type for the generateProfileSummary function.
 * - ProfileSummaryOutput - The return type for the generateProfileSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProfileSummaryInputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  title: z.string().describe('The job title or role of the person.'),
  experience: z.string().describe('A detailed description of the person\'s work experience.'),
  skills: z.string().describe('A comma-separated list of the person\'s skills.'),
});
export type ProfileSummaryInput = z.infer<typeof ProfileSummaryInputSchema>;

const ProfileSummaryOutputSchema = z.object({
  summary: z.string().describe('A professional summary of the person\'s skills and experience.'),
});
export type ProfileSummaryOutput = z.infer<typeof ProfileSummaryOutputSchema>;

export async function generateProfileSummary(input: ProfileSummaryInput): Promise<ProfileSummaryOutput> {
  return generateProfileSummaryFlow(input);
}

const profileSummaryPrompt = ai.definePrompt({
  name: 'profileSummaryPrompt',
  input: {schema: ProfileSummaryInputSchema},
  output: {schema: ProfileSummaryOutputSchema},
  prompt: `You are a professional resume writer. Generate a concise and engaging professional summary based on the following information:

Name: {{{name}}}
Title: {{{title}}}
Experience: {{{experience}}}
Skills: {{{skills}}}

Write a compelling summary (approximately 100-150 words) that highlights the individual's key accomplishments and abilities. Focus on making them sound highly skilled and desirable to employers or clients.`,
});

const generateProfileSummaryFlow = ai.defineFlow(
  {
    name: 'generateProfileSummaryFlow',
    inputSchema: ProfileSummaryInputSchema,
    outputSchema: ProfileSummaryOutputSchema,
  },
  async input => {
    const {output} = await profileSummaryPrompt(input);
    return output!;
  }
);
