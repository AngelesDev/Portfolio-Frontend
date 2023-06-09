import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = 'https://portfolio-backend-fjc1.onrender.com/'
  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill> {
    return this.http.get<Skill>(this.URL + 'skills/get');
  }
}
