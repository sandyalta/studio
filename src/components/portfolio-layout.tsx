import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  Home,
  Briefcase,
  Lightbulb,
  BarChart3,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react';

import ProfileSection from '@/components/portfolio/profile-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import SkillsSection from '@/components/portfolio/skills-section';
import ContactSection from '@/components/portfolio/contact-section';

import { personalData } from '@/lib/data';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

export default function PortfolioLayout() {
  return (
    <SidebarProvider>
      <Sidebar
        collapsible="icon"
        variant="sidebar"
        className="border-r border-sidebar-border"
      >
        <SidebarHeader className="items-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sidebar-primary group-data-[state=collapsed]:hidden"
          >
            <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" />
            <path d="M12 12v-2a3 3 0 0 0-3-3H8" />
            <path d="M16 12v4a2 2 0 0 1-2 2h-2" />
          </svg>
          <div className="group-data-[state=collapsed]:hidden">
            <h1 className="text-xl font-bold font-headline">PortfolioFlow</h1>
            <p className="text-sm text-sidebar-foreground/70">
              {personalData.title}
            </p>
          </div>
        </SidebarHeader>
        <Separator className="bg-sidebar-border" />
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Home">
                <a href="#home">
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Experience">
                <a href="#experience">
                  <Briefcase />
                  <span>Experience</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Projects">
                <a href="#projects">
                  <Lightbulb />
                  <span>Projects</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Skills">
                <a href="#skills">
                  <BarChart3 />
                  <span>Skills</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Contact">
                <a href="#contact">
                  <Mail />
                  <span>Contact</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <Separator className="bg-sidebar-border" />
        <SidebarFooter className="flex-row items-center justify-center gap-1 p-2 group-data-[state=collapsed]:justify-center group-data-[state=collapsed]:p-3">
          <Button variant="ghost" size="icon" asChild>
            <a
              href={personalData.contact.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={personalData.contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={personalData.contact.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
          <SidebarTrigger />
          <h1 className="text-lg font-bold font-headline">PortfolioFlow</h1>
        </header>
        <main className="flex-1 space-y-16 p-4 sm:p-6 md:p-10">
          <ProfileSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
          <footer className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} PortfolioFlow. All Rights Reserved.
          </footer>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
