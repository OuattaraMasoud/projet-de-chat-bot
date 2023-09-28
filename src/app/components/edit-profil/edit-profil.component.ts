import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent {
  updateSuccess = false;
  newDisplayName: string = '';

  constructor(public authService: AuthService) { }
  updateProfile() {
    if (this.newDisplayName.trim() === '') {
      // Afficher une alerte ou gérer le cas où le nouveau nom est vide
      return;
    }

    // Appeler la fonction de mise à jour du nom d'utilisateur du service AuthService
    this.authService.updateProfile(this.newDisplayName)
      .then(() => {
        // Mise à jour réussie, définir updateSuccess sur true
        this.updateSuccess = true;
        setTimeout(() => {
          this.updateSuccess = false;
        }, 5000);
      })
      .catch((error) => {
        // Gérer les erreurs de mise à jour ici, par exemple, afficher une alerte d'erreur
        console.error('Erreur lors de la mise à jour du nom d\'utilisateur :', error);
      });
  }

  ngOnInit() {}
}
