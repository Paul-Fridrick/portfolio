import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // TODO: Implémenter l'envoi du formulaire
    console.log('Formulaire soumis:', this.formData);
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_xqejxvg', 'template_wv7wzgj', e.target as HTMLFormElement, {
        publicKey: 'dcTuv2k1W6IoGD8bh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
