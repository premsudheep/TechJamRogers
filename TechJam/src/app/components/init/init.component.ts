import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {InitialAction} from "../../State/init.action";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit, OnDestroy {

  resSub: Subscription;
  responsePayload = {};

  ngOnDestroy(): void {
    this.resSub.unsubscribe();
  }

  constructor(private store: Store<any>) { }

  ngOnInit() {

    const searchPayload = {
      "device": {
        deviceType:"phone",
      },
      "search":"",
      "postalCode":""
    }

    this.store.dispatch(new InitialAction(searchPayload));
    this.resSub = this.store.select('initValue').subscribe(res => {
      this.responsePayload = res.initValue;
      console.log(this.responsePayload);
    })
  }

}
