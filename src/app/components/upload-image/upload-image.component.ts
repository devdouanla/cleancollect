import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent {

  image:any;

  upload(event:any){

    const file = event.target.files[0];

    this.image = URL.createObjectURL(file);

  }

}