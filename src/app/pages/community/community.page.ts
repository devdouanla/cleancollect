import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../../services/post';
import { Post } from '../../models/post.model';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonChip,
  IonInput,
  IonFooter,
  IonLabel,
  IonFab,
  IonFabButton,
  IonTabBar,
  IonTabButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
  standalone: true,
  imports: [
    IonChip,
    IonInput,
    IonFooter,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonLabel,
    IonFab,
    IonFabButton,
    IonTabBar,
    IonTabButton,
    CommonModule,
    FormsModule,
    PostCardComponent
  ]
})
export class CommunityPage {

  newPost = '';

  selectedImage: string | null = null;

  posts: Post[] = [];

  /** Filtre actif dans les chips */
  activeFilter: 'all' | 'recyclage' | 'conseils' | 'evenements' = 'all';

  constructor(
    private postService: PostService,
    private router: Router,
  ) {
    this.posts = this.postService.getPosts();
  }

  get filteredPosts(): Post[] {
    if (this.activeFilter === 'all') {
      return this.posts;
    }
    return this.posts.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: 'all' | 'recyclage' | 'conseils' | 'evenements') {
    this.activeFilter = filter;
  }

  publish() {
    const text = this.newPost.trim();
    const hasText = text !== '';
    const hasImage = !!this.selectedImage;

    if (!hasText && !hasImage) {
      return;
    }

    // Pour le moment, on affecte tous les nouveaux posts à la catégorie "recyclage"
    this.postService.addPost(text, this.selectedImage || undefined, 'recyclage');

    this.newPost = '';
    this.selectedImage = null;
    this.posts = this.postService.getPosts();
  }

  onSelectImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.selectedImage = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  removeImage() {
    this.selectedImage = null;
  }

  goTo(path: 'home' | 'community' | 'collecte' | 'profil') {
    this.router.navigateByUrl('/' + path);
  }

}
