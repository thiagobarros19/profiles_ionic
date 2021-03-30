import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import Profile from "./model/profile";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private api: string = "http://localhost:3000/profiles";

  constructor(
    private http: HttpClient,
  ) { }


  listProfiles() {
    return this.http.get(this.api);
  }

  getProfile(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  createProfile(form: Profile) {
    return this.http.post(this.api, form);
  }

  editProfile(form: Profile) {
    return this.http.put(`${this.api}/${form.id}`, form);
  }

  deleteProfile(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
