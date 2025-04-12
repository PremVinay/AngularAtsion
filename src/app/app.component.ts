import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatwithusComponent } from './chatwithus/chatwithus.component';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ChatwithusComponent,CommonModule,CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularAtison';
  
}
