import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatwithus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatwithus.component.html',
  styleUrl: './chatwithus.component.css'
})
export class ChatwithusComponent {
  isModalOpen = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
   
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert("All fields are required!");
      return;
    }

    console.log('Message submitted:', this.formData);

   
    this.formData = { name: '', email: '', message: '' };

   
    this.closeModal();

    alert("Your message has been submitted!");
  }
}