import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Config } from '../shared/config/env.config';

import { Observable } from 'Rxjs';

import '../operators';

@Injectable()
export class AdminService {
  constructor(private http: Http) { }

  addDivision(value: any) {
    return this.http.post(Config.API + 'division', value);
  }

  getDivision(id: number): any {
    return this.http.get(Config.API + `division/${id}`).map(res => res.json());
  }

  getDivisions(): any {
    return this.http.get(Config.API + 'division?transform=1').map(res => res.json()['division']);
  }

  addSeason(value: any) {
    return this.http.post(Config.API + 'season', value);
  }

  getSeasons() {
    return this.http.get(Config.API + 'season?transform=1').map(res => res.json()['season']);
  }

  addTeam(value: any) {
    return this.http.post(Config.API + 'team', value);
  }

  getTeams() {
    return this.http.get(Config.API + 'team?transform=1').map(res => res.json()['team']);
  }

  addGames(value: any[]) {
    return this.http.post(Config.API + 'game', value);
  }

  getGames() {
    return this.http.get(Config.API + 'game?transform=1').map(res => res.json()['game']);
  }
}
