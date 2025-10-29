import { experienceData } from '@/lib/data';
import { SectionTitle } from './section-title';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      <SectionTitle>Work Experience</SectionTitle>
      <div className="relative">
        <div className="absolute left-9 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="relative mb-12 md:flex md:items-center"
          >
            <div
              className={`flex-1 md:pr-8 ${
                index % 2 === 0 ? 'md:order-1' : 'md:order-2 md:pl-8 md:text-right'
              }`}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    {index % 2 !== 0 && (
                      <Badge variant="secondary" className="hidden md:flex">{item.date}</Badge>
                    )}
                  </div>
                  <CardDescription>{item.company}</CardDescription>
                  <Badge variant="secondary" className="md:hidden">{item.date}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
            <div className="absolute left-9 top-4 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background md:static md:flex-shrink-0 md:translate-x-0">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-primary">
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
