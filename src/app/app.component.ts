import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'product';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDuxycaocq3je0fq0oHMsWXmTwU-98tGKo",
    authDomain: "webshop-angular.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
