export type CaseStudies = {
  notion?: string;
  medium?: string;
};

export type Project = {
  title: string;
  image: string;
  imageObjectPosition?: string;
  liveUrl: string;
  caseStudies?: CaseStudies;
};
