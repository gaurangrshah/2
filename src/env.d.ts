/// <reference types="astro/client" />

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

interface AboutCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  index: number;
  icon?: string;
}
