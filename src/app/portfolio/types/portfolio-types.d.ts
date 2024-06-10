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
  endDate?: string;
  initialDate: string;
  showTime?: boolean;
  title: string;
}

export interface EducationExperience extends Education, Experience {
  company?: string;
  institute?: string;
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
