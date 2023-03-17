export interface Image {
  id: number;
  imageUrl: string;
  name: string;
}

export interface UserProfile {
  id: string;
  firstname: string;
  lastname: string;
  age: number;
  about: string;
  profession: string;
  avatar: string;
  location: string;
  numLikes: number;
  lifestyle: string[];
  interests: string[];
  numSuperLikes: number;
  numDislikes: number;
  images: Image[];
}
