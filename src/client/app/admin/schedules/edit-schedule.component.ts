import { AdminService } from './../admin.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  selector: 'ees-admin-edit-schedule',
  templateUrl: 'edit-schedule.component.html',
  styleUrls: ['edit-schedule.component.css'],
})
export class EditScheduleComponent implements OnDestroy, OnInit {
  sub: any;
  id: any;
  teams: any[];
  games: any[] = [];
  season: any;
  times: any[] = ['19:00', '19:50', '20:40'];

  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getTeams();
      this.getSeason();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getSeason(): void {
    this.adminService.getSeasons().subscribe(seasons => {
      this.season = _.find(seasons, (season: { id }) => { return season.id === this.id; });
    });
  }

  getTeams(): void {
    this.adminService.getTeams().subscribe(teams => {
      this.teams = _.filter(teams, { season_id: this.id });
      this.getGames();
      // this.games = this.round_robin(this.teams, 15);
    });
  }

  getGames(): void {
    this.adminService.getGames().subscribe(games => {
      this.games = _.filter(games, (game: { home_id, away_id }) => {
        if (_.find(this.teams, { id: game.home_id }) || _.find(this.teams, { id: game.away_id })) {
          return true;
        } else {
          return false;
        }
      });
      this.games = _.map(this.games, (game: { play_time, home_id, away_id, home, away }) => {
        game.home = _.find(this.teams, { id: game.home_id }).name;
        game.away = _.find(this.teams, { id: game.away_id }).name;
        return game;
      });
    });
  }

  generateInitialSchedule(): void {
    this.games = this.round_robin(_.map(this.teams, 'name'));
  }

  saveSchedule(): void {
    this.adminService.addGames(this.convertToDBFormat(this.games)).subscribe(() => {
      console.log('Saved!');
    });
  }

  convertToDBFormat(games): any[] {
    return _.map(games, (game: { play_time, home, away }) => {
      let home = _.find(this.teams, { name: game.home });
      let away = _.find(this.teams, { name: game.away });
      return {
        play_time: game.play_time,
        location: 'Rink 1',
        home_id: home.id,
        away_id: away.id
      };
    });
  }

  round_robin(teams): any[] {
    let games = [];
    let count = teams.length;
    let half = count / 2;
    let weeks = moment(this.season.end_date).diff(moment(this.season.start_date), 'weeks');
    for (let turn = 0; turn < weeks; turn++) {
      let pairings = [];
      for (let i = 0; i < half; i++) {
        games.push({
          play_time: moment(this.season.start_date + ' ' + this.times[i], 'YYYY-MM-DD HH:mm').add(turn, 'weeks').format(),
          home: teams[i],
          away: teams[count - i - 1]
        });
      }
      teams.splice(1, 0, teams.pop());
      // games.push({ date: moment(this.season.start_date).add(turn, 'weeks'), pairings });
    }
    return games;
  }
}
