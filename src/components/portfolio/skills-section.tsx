'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { skillsData } from '@/lib/data';
import { SectionTitle } from './section-title';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';

export default function SkillsSection() {
  const chartConfig = {
    level: {
      label: 'Proficiency',
      color: 'hsl(var(--primary))',
    },
  };

  return (
    <section id="skills" className="scroll-mt-20">
      <SectionTitle>My Skills</SectionTitle>
      <Card>
        <CardHeader>
          <CardTitle>Technical Proficiency</CardTitle>
          <CardDescription>
            A visual representation of my key technical skills.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={skillsData}
                layout="vertical"
                margin={{ left: 10, right: 30 }}
              >
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  width={150}
                  className="text-sm"
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                <Bar dataKey="level" radius={5} fill="var(--color-level)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  );
}
