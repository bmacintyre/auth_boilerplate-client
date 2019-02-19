import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
  animations: [

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class PeoplePage implements OnInit {

  public items = [];
  public data: Array<any>;

  // PHP 7.x
  private apiUrl = 'http://138.197.171.10/fullstack_php/data.php?s=mobile';
  // private apiUrl = 'http://localhost/auth_boilerplate/api/php/data.php?s=mobile';

  // private apiUrl = 'https://www.uifaces.co/api?limit=1&emotion[]=happiness';


  // Python 3.x
  // private apiUrl = 'http://localhost:5000/auth_boilerplate/api/python/data';

  constructor(public http: HttpClient) {
  }

  pushItem() {
    this.items.push('Oh yeah that is awesome');
  }
  removeItem() {
    this.items.pop();
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getData();
  }

  public imageLoaded(indx: number) {
    console.log('this one loaded: ' + indx);
    this.items[indx].loaded = true;
  }

  public getData() {
    const httpHeaders = new HttpHeaders()
      .set('Content', 'application/json')
      .set('X-API-KEY', '2a1f38933d29fcec8af0c671d35795')
      .set('Cache-Control', 'no-cache');

    const body = '';

    this.http
      .post(this.apiUrl, body, { headers: httpHeaders, responseType: 'json' })
      .subscribe(
        relations => {
          this.data = Object.keys(relations).map(function(personNamedIndex) {
            const row = relations[personNamedIndex];
            // do something with person
            return row;
          });

          this.items = this.data.map((item) => {
            const o = JSON.parse(item);
            return {
              name: o.name,
              email: o.email,
              position: o.position,
              photo: o.photo,
              loaded: false
            };
          });

          console.log(this.data);
        },

        response => {
          //  console.log(response);
          console.log('response : ' + JSON.stringify(response));
          // console.log('response : ' + response.error.text);
        },
        () => {}
      );
  }

}
