import { Component } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';
import { GlobalService } from './global.service';


const enterTransition = transition(':enter', [
style({
  opacity: 0
 }),
 animate('2s ease-in' , style({opacity: 1})),
])
const FadeIn = trigger('FadeIn', [enterTransition]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeIn]
})
export class AppComponent {
  title = 'my-app';

  constructor(public globalService: GlobalService) {}
}
