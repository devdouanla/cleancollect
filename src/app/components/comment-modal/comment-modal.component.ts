import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
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
@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss'],
  imports: [
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
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CommentModalComponent {

  comments:string[] = [];

  commentControl = new FormControl('');

  addComment(){

    const comment = this.commentControl.value;

    if(comment && comment.trim() !== ""){

      this.comments.push(comment);

      this.commentControl.setValue('');

    }

  }

}