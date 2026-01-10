import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Review {
  id: number;
  author: string;
  date: string;
  title: string;
  content: string;
  rating: number;
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