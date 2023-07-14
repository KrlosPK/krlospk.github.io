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
  institute: string;
  timeDifference?: string;
  title: string;
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
