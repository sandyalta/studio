import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionTitle } from './section-title';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => {
          const projectImage = PlaceHolderImages.find(
            (img) => img.id === project.image
          );
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                {projectImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      data-ai-hint={projectImage.imageHint}
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="flex-1 text-muted-foreground">
                  {project.description}
                </p>
                <div className="my-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-4">
                  <Button variant="outline" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.links.preview} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="mr-2" /> Live Preview
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
