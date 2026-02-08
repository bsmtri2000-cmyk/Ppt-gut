// Fix: Added React import to resolve missing namespace 'React' for React.ReactNode
import React from 'react';

export interface SlideContent {
  id: number;
  title?: string;
  subtitle?: string;
  content: React.ReactNode;
  footer?: string;
  type?: 'title' | 'content' | 'image' | 'conclusion' | 'thankyou';
}

export enum SlideType {
  TITLE = 'title',
  CONTENT = 'content',
  IMAGE = 'image',
  CONCLUSION = 'conclusion',
  THANKYOU = 'thankyou'
}