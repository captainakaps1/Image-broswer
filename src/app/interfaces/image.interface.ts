export interface Image {
  id: number;
  imageUrl: string;
  name: string;
}

export interface UserProfile {
  id: string;
  name: string;
  profession: string;
  avatar: string;
  location: string;
  numLikes: number;
  numSuperLikes: number;
  numDislikes: number;
  images: Image[];
}
