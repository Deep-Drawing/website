import { useState, useEffect } from 'react';
import { LabMembersData, LabMember } from '@/types/labMembers';

export function useLabMembers() {
  const [data, setData] = useState<LabMembersData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLabMembers = async () => {
      try {
        setLoading(true);
        // Import the JSON data
        const labMembersData = await import('@/data/lab-members.json');
        setData(labMembersData.default);
        setError(null);
      } catch (err) {
        setError('Failed to load lab members data');
        console.error('Error loading lab members:', err);
      } finally {
        setLoading(false);
      }
    };

    loadLabMembers();
  }, []);

  // Helper functions that use the loaded data
  const getAllMembers = () => {
    if (!data) return [];
    return data.labMembers;
  };

  const getMembersByPosition = (position: string) => {
    if (!data) return [];
    return data.labMembers.filter(member => 
      member.position.toLowerCase() === position.toLowerCase()
    );
  };

  const getMemberById = (id: number) => {
    if (!data) return null;
    return data.labMembers.find(member => member.id === id) || null;
  };

  const getProfilePictureUrl = (member: LabMember) => {
    if (!data) return '';
    return `${data.metadata.profilePictureBasePath}${member.profilePictureIndex}${data.metadata.profilePictureExtension}`;
  };

  const getProfessors = () => getMembersByPosition('Professor');
  const getStudents = () => {
    if (!data) return [];
    return data.labMembers.filter(member => 
      member.position.toLowerCase().includes('student')
    );
  };
  const getAlums = () => {
    if (!data) return [];
    return data.labMembers.filter(member => 
      member.position.toLowerCase() !== 'professor' && 
      !member.position.toLowerCase().includes('student')
    );
  };

  return {
    data,
    loading,
    error,
    // Helper functions
    getAllMembers,
    getMembersByPosition,
    getMemberById,
    getProfilePictureUrl,
    // Convenience functions for common queries
    getProfessors,
    getStudents,
    getAlums,
  };
} 