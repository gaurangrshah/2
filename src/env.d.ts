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
  index: number;
  linkText?: string;
  icon?: string;
}
