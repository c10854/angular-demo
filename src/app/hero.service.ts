import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  constructor(private http: Http) {
  }
  getHeroes(): Observable<any> {
    return this.http.get('http://api.gdvodka.cn/test')
      .map((res: Response) => {
        console.log(res.json());
        return res.json();
      },
        error => {
          console.log(error);
        });
  }
  getHero(id: number): Observable<any> {
    return this.getHeroes()
      .map(heroes => heroes.find(hero => hero.id === id));
  }
}
