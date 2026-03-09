import { Component, Input } from '@angular/core';
import { PostService } from '../../services/post';
import { IonCard } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Share } from '@capacitor/share';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonRow,
  IonCol,
  IonChip,
  IonInput,
  IonItem,
  IonFooter,
  IonMenuButton,
  IonLabel,
  IonList,
  IonCardHeader,
  IonCardContent,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonTabs,
  IonTabBar,
  IonTabButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, heartOutline, chatbubbleOutline, shareSocialOutline } from 'ionicons/icons';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonContent, 
    IonList,
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonRow,
    IonCol,
    IonChip,
    IonInput,
    IonItem,
    IonFooter,
    IonMenuButton,
    IonLabel,
    IonCardHeader,
    IonCardContent,
    IonAvatar,
    IonFab,
    IonFabButton,
    IonTabs,
    IonTabBar,
    IonTabButton,
     FormsModule,
     CommonModule,
     ReactiveFormsModule,
  ]
})
export class PostCardComponent {
commentControl = new FormControl('');
  @Input() post:any;

  showComments=false;

  constructor(private postService:PostService){
    addIcons({
      heart,
      heartOutline,
      chatbubbleOutline,
      shareSocialOutline
    });
  }

  like(){

    this.postService.likePost(this.post.id);

  }

  async share() {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://cleancollect.com';
    const url = `${baseUrl}/community?post=${this.post.id}`;
  
    try {
      await Share.share({
        title: 'CleanCollect',
        text: this.post.content,
        url,
        dialogTitle: 'Partager cette publication'
      });
  
      this.postService.sharePost(this.post.id);
    } catch (err) {
      console.log('Partage annulé ou non supporté', err);
    }
  }

  toggleComments(){

    this.showComments=!this.showComments;

  }

  addComment(){

    const comment = this.commentControl.value;

    if(comment && comment.trim() !== ""){

      this.postService.addComment(this.post.id, comment);

      this.commentControl.setValue('');

    }

  }
}