
import type { Timestamp } from 'firebase/firestore';

export interface Photo {
  id: string; // Firestore document ID
  src: string; // Firebase Storage URL
  name: string;
  category: string;
  description?: string; // Optional description for the photo
  createdAt?: Timestamp; // For ordering
}

export const APP_CATEGORIES = [
  "Birthday",
  "Holiday",
  "Work",
  "School",
  "Friends",
  "College Friends",
] as const;

export type Category = typeof APP_CATEGORIES[number];

export const ALL_CATEGORIES_OPTION = "All Categories";

// SiteSettings interface is no longer needed as the functionality
// for managing these settings via admin panel has been removed.
// export interface SiteSettings {
//   profilePhotoUrl?: string;
//   heroBackdropUrl?: string;
//   updatedAt?: Timestamp;
// }
