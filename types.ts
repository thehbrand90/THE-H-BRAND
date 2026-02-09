import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Review {
  id: string | number;   // Updated to support UUID string from Supabase
  client_name: string;
  created_at: string;
  title: string;
  content: string;
  rating: number;
  image_urls?: string[]; // Array of image URLs
  is_best?: boolean;
  // Legacy support optional
  image?: string; 
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface LayoutProps {
  children: ReactNode;
}