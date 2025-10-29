'use server';

/**
 * @fileOverview CV Data Extraction AI agent.
 *
 * - extractCVData - A function that handles the CV data extraction process.
 * - ExtractCVDataInput - The input type for the extractCVData function.
 * - ExtractCVDataOutput - The return type for the extractCVData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractCVDataInputSchema = z.object({
  cvDataUri: z
    .string()
    .describe(
      'The CV file in PDF format, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'    ),
});
export type ExtractCVDataInput = z.infer<typeof ExtractCVDataInputSchema>;

const ExtractCVDataOutputSchema = z.object({
  personalInformation: z.object({
    name: z.string().describe('The name of the person.'),
    email: z.string().email().describe('The email address of the person.'),
    phone: z.string().describe('The phone number of the person.'),
    linkedin: z.string().optional().describe('The LinkedIn profile URL of the person.'),
  }).describe('Personal information extracted from the CV.'),
  workExperience: z.array(z.object({
    title: z.string().describe('The job title.'),
    company: z.string().describe('The company name.'),
    startDate: z.string().describe('The start date of the job.'),
    endDate: z.string().nullable().describe('The end date of the job, or null if it is the current job.'),
    description: z.string().describe('The description of the job.'),
  })).describe('Work experience extracted from the CV.'),
  skills: z.array(z.string()).describe('Skills extracted from the CV.'),
  education: z.array(z.object({
    institution: z.string().describe('The name of the institution.'),
    degree: z.string().describe('The degree obtained.'),
    startDate: z.string().describe('The start date of the education.'),
    endDate: z.string().nullable().describe('The end date of the education, or null if it is ongoing.'),
    description: z.string().optional().describe('The description of the education.'),
  })).describe('Education extracted from the CV.'),
});
export type ExtractCVDataOutput = z.infer<typeof ExtractCVDataOutputSchema>;

export async function extractCVData(input: ExtractCVDataInput): Promise<ExtractCVDataOutput> {
  return extractCVDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'extractCVDataPrompt',
  input: {schema: ExtractCVDataInputSchema},
  output: {schema: ExtractCVDataOutputSchema},
  prompt: `You are an expert CV data extractor. You will extract key information from the CV provided, including personal information, work experience, skills, and education.

CV Content: {{media url=cvDataUri}}

Extract all relevant information and output it in the specified JSON format.`, 
});

const extractCVDataFlow = ai.defineFlow(
  {
    name: 'extractCVDataFlow',
    inputSchema: ExtractCVDataInputSchema,
    outputSchema: ExtractCVDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
