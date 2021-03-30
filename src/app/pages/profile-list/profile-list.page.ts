import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';
import Profile from './../../model/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.page.html',
  styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {

  constructor(
    private profileService: AppService,
  ) { }

  private profiles: Profile[] = [];

  ngOnInit() {}

  ionViewDidEnter() {
    this.listProfiles();
  }

  removeProfile(id:number) {
    this.profileService.deleteProfile(id).subscribe(
      res => {
        const index = this.profiles.findIndex(item => item.id === id);
        this.profiles.splice(index, 1);
        alert("Perfil removido com sucesso");
      },
      err => {
        alert("Ocorreu uma falha ao tentar remover este perfil, tente novamente mais tarde");
      }
    )
  }

  listProfiles() {
    this.profileService.listProfiles().subscribe(
      (res: Profile[]) => {
        this.profiles = res;
      }
    )
  }

  getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

}
