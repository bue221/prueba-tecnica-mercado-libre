// Types
export interface User {
  id: string;
  name: string;
  email: string;
}

// Constants
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Utils
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}; 