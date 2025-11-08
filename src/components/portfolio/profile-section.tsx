'use client';

import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin } from 'lucide-react';

export default function ProfileSection() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold font-headline text-primary sm:text-5xl">
            {personalData.name}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            {personalData.bio}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{personalData.location}</span>
            </div>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>{personalData.contact.email}</span>
            </a>
            <a
              href={`tel:${personalData.contact.tel}`}
              className="flex items-center gap-2 hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{personalData.contact.tel}</span>
            </a>
          </div>
          <div className="flex gap-4 pt-4">
            <Button variant="outline" asChild>
              <a href="/placeholder-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
