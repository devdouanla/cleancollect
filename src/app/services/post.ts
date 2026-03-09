import { Injectable } from '@angular/core';
import { Post, Comment } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly storageKey = 'cleancollect_community_posts';

  private posts: Post[] = [];

  constructor() {
    this.loadInitialPosts();
  }

  getPosts() {
    return this.posts;
  }

  addPost(content: string, image?: string, category: Post['category'] = 'recyclage') {
    const newPost: Post = {
      id: Date.now(),
      userName: 'Utilisateur',
      userAvatar: 'assets/images/avatar1.jpg',
      location: 'Yaoundé',
      time: 'Maintenant',
      content,
      image,
      category,
      likes: 0,
      shares: 0,
      comments: [],
      likedByCurrentUser: false,
      sharedByCurrentUser: false
    };

    this.posts.unshift(newPost);
    this.saveToStorage();
  }

  likePost(id: number) {
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      return;
    }

    if (post.likedByCurrentUser) {
      post.likes = Math.max(0, post.likes - 1);
      post.likedByCurrentUser = false;
    } else {
      post.likes++;
      post.likedByCurrentUser = true;
    }

    this.saveToStorage();
  }

  sharePost(id: number) {
    const post = this.posts.find((p) => p.id === id);
    if (!post) {
      return;
    }

    if (post.sharedByCurrentUser) {
      // On ne décrémente pas les partages, on empêche juste de compter plusieurs fois
      return;
    }

    post.shares++;
    post.sharedByCurrentUser = true;
    this.saveToStorage();
  }

  addComment(postId: number, message: string) {
    const post = this.posts.find((p) => p.id === postId);

    if (post) {
      const comment: Comment = {
        user: 'Utilisateur',
        message,
        date: new Date()
      };

      post.comments.push(comment);
      this.saveToStorage();
    }
  }

  private loadInitialPosts() {
    const raw = typeof localStorage !== 'undefined'
      ? localStorage.getItem(this.storageKey)
      : null;

    if (raw) {
      const parsed = JSON.parse(raw) as Post[];
      // Reconvert les dates des commentaires
      parsed.forEach((p) => {
        p.comments.forEach((c) => {
          c.date = new Date(c.date);
        });
      });
      this.posts = parsed;
      return;
    }

    // Données exemples de départ (inspirées du design)
    this.posts = [
      {
        id: 1,
        userName: 'Jean Ndzié',
        userAvatar: 'assets/images/avatar1.jpg',
        location: 'Bastos • Yaoundé',
        time: 'Il y a 2 heures',
        content:
          "Aujourd'hui, nous avons collecté plus de 50kg de déchets dans le quartier Bastos. Ensemble pour un Cameroun propre ! 🇨🇲✨ #ZeroDechet #CleanCollect",
        image: 'assets/images/post1.jpg',
        likes: 124,
        shares: 12,
        comments: [
          {
            user: 'Marie Ngo',
            message: 'Bravo Jean, superbe initiative 🙌',
            date: new Date()
          },
          {
            user: 'Hervé Ndzi',
            message: 'Je serai là pour la prochaine collecte !',
            date: new Date()
          }
        ],
        likedByCurrentUser: false,
        sharedByCurrentUser: false,
        category: 'recyclage'
      },
      {
        id: 2,
        userName: 'Marie Ngo',
        userAvatar: 'assets/images/avatar2.jpg',
        location: 'Douala',
        time: 'Il y a 5 heures',
        content:
          'Astuce du jour : réutilisez vos bouteilles en verre pour faire de jolis vases décoratifs. Voici mon dernier projet 🌿',
        image: '',
        likes: 89,
        shares: 5,
        comments: [
          {
            user: 'Stéphanie Ndzé',
            message: 'C’est magnifique, merci pour l’idée 💚',
            date: new Date()
          }
        ],
        likedByCurrentUser: false,
        sharedByCurrentUser: false,
        category: 'conseils'
      }
    ];

    this.saveToStorage();
  }

  private saveToStorage() {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage.setItem(this.storageKey, JSON.stringify(this.posts));
  }
}