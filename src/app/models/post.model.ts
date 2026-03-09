export interface Comment {
  user: string;
  message: string;
  date: Date;
}

export interface Post {

  id: number;

  userName: string;

  userAvatar: string;

  location: string;

  time: string;

  content: string;

  image?: string;

  /** Catégorie pour les filtres de la communauté */
  category?: 'recyclage' | 'conseils' | 'evenements';

  likes: number;

  shares: number;

  comments: Comment[];

  /** Indique si l'utilisateur courant a liké ce post */
  likedByCurrentUser?: boolean;

  /** Indique si l'utilisateur courant a déjà partagé ce post */
  sharedByCurrentUser?: boolean;

}