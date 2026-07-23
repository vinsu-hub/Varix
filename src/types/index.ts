export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  deliverables: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  services: string[];
  year: string;
  featured?: boolean;
  link?: string;
  image?: string;
  imageAlt?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  email?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  published_at: string;
  author: string;
  tags: string[];
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};
