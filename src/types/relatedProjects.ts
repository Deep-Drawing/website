export interface RelatedProject {
  id: number;
  title: string;
  description: string;
  url: string;
  tags: string[];
  relevance: string;
  authors?: string[];
}

export interface RelatedProjectsData {
  relatedProjects: RelatedProject[];
} 