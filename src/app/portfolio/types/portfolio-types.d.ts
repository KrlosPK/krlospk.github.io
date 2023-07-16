export interface Skills {
  alt: string;
  img: string;
  label: string;
}

export interface Education {
  duration?: string;
  endDate?: string;
  href?: string;
  initialDate: string;
  title: string;
}

export interface Experience {
  duration?: string;
  endDate?: string;
  initialDate: string;
  title: string;
}

export interface EducationExperience extends Education, Experience {
  institute?: string;
  company?: string;
}

export interface Projects {
  alt: string;
  description: string;
  repo: string;
  src: string;
  technologies: string[];
  title: string;
  url: string;
}
