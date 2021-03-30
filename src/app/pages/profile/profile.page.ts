import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from "@ionic/angular";

import { AppService } from './../../app.service';

import Profile from "../../model/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: FormGroup;

  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController,
    private profileService: AppService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.profile = this.formBuilder.group({
      id: [],
      name: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      phone: [''],
      facebook: [''],
      instagram: [''],
      linkedin: [''],
      twitter: [''],
    })

    this.id = parseInt(this.route.snapshot.params.id);
    if(this.id) this.getProfile(this.id);
  }

  getProfile(id:number): void {
    this.profileService.getProfile(id).subscribe(
      (res: Profile) => {
        this.profile.setValue(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  openSocialLink(type: string): void {
    let url;
    switch (type) {
      case 'FACEBOOK':
        url = this.profile.value.facebook;
        if(url) window.open(url,"_system");
        else alert("Por favor insira uma URL para o facebook");
        break;
      case 'INSTAGRAM':
        url = this.profile.value.instagram;
        if(url) window.open(url,"_system");
        else alert("Por favor insira uma URL para o instagram");
        break;
      case 'LINKEDIN':
        url = this.profile.value.linkedin;
        if(url) window.open(url,"_system");
        else alert("Por favor insira uma URL para o linkedin");
        break;
      case 'TWITTER':
        url = this.profile.value.twitter;
        if(url) window.open(url,"_system");
        else alert("Por favor insira uma URL para o twitter");
        break;
    }
  }

  onSubmit(): void {
    if(this.id){
      this.profileService.editProfile(this.profile.value).subscribe(
        (res: Profile) => {
          this.profile.setValue(res);
          alert('Perfil editado com sucesso');
          this.navCtrl.navigateBack('/profile-list');
        }
      )
    }else{
      this.profileService.createProfile(this.profile.value).subscribe(
        (res: Profile) => {
          this.profile.setValue(res);
          this.id = res.id;
          alert('Perfil criado com sucesso');
          this.navCtrl.navigateBack('/profile-list');
        }
      )
    }
  }

}
