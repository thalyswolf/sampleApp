import { Component } from '@angular/core';
import {Photo} from '../photo';
import {Camera} from 'ionic-native';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {}

  photos: Photo[] = [new Photo("http://placehold.it/350x150", 5), new Photo("http://placehold.it/350x150", 6)];

  takePhoto(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 500,
      targetWidth:500

    }).then((imageData) => {
      this.photos.push(new Photo("data:image/jpges;base64," + imageData, 0));
    },(err) => {
      console.log(err);
    });
  }

  deletePhoto(photo){
    this.photos.splice(this.photos.indexOf(photo), 1);
  }

  likePhoto(photo){
    photo.likes++;
  }

}
