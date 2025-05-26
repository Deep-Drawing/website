export interface LabMember {
  id: number;
  profilePictureIndex: string;
  name: string;
  position: string;
  website?: string;
}

export interface LabMembersMetadata {
  profilePictureBasePath: string;
  profilePictureExtension: string;
}

export interface LabMembersData {
  labMembers: LabMember[];
  metadata: LabMembersMetadata;
} 