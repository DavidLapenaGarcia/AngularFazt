import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*
      That wey will get tha paramatters on route.. but it will
      fail if it try to get it in the same component, becouse
      Angular wil not charge all the component that is it alredy charge.
    */
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    /*
    But doind that, the parametters are getted in a asyncro
    wey, so it will wait for the 'event' any time, dispite if the web page
    is refreshed or not.
    This code will be executed to subscribe at ngOnInit, and only if the
    params change will executed all.
    See ngOnDestroy to see how delete this data, because even if that
    component is destroyed, this data will remain on our disk.
    */
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }
  /*
  Doing that we make sure that the data will be destroyed
  */
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
