'use client';

import { useState, useRef, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, UploadCloud, FileCheck, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { extractDataFromCVAction } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const initialState = {
  message: '',
  data: null,
};

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={disabled || pending} className="w-full">
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <UploadCloud className="mr-2 h-4 w-4" />
      )}
      Extract Information
    </Button>
  );
}

export default function CvUploadButton() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dataUri, setDataUri] = useState<string>('');
  const [formState, formAction] = useFormState(extractDataFromCVAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (formState.message) {
      if (formState.data) {
        toast({
          title: 'Extraction Successful',
          description: formState.message,
        });
        console.log('Extracted CV Data:', formState.data);
        // In a real app, this data would be used to populate profile fields
        setOpen(false); // Close dialog on success
      } else {
        toast({
          title: 'Extraction Failed',
          description: formState.message,
          variant: 'destructive',
        });
      }
      // Reset file states after processing
      setFile(null);
      setDataUri('');
      if(formRef.current) formRef.current.reset();
    }
  }, [formState, toast]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        setDataUri(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFile(null);
      setDataUri('');
      toast({
        title: 'Invalid File',
        description: 'Please select a PDF file.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UploadCloud className="mr-2 h-4 w-4" />
          Extract from CV
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Upload Your CV</DialogTitle>
          <DialogDescription>
            Upload your CV in PDF format to automatically fill in your profile
            information using AI.
          </DialogDescription>
        </DialogHeader>
        
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The extracted data will be logged to the browser console. This is a demo feature.
          </AlertDescription>
        </Alert>

        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="cv-file">PDF File</Label>
            <Input id="cv-file" type="file" accept=".pdf" onChange={handleFileChange} />
            <input type="hidden" name="cvDataUri" value={dataUri} />
          </div>
          {file && (
            <div className="flex items-center rounded-md border border-dashed p-3 text-sm text-muted-foreground">
              <FileCheck className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
              <span className="truncate">{file.name}</span>
            </div>
          )}
          <DialogFooter className="gap-2 sm:gap-0">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <SubmitButton disabled={!file || !dataUri} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
