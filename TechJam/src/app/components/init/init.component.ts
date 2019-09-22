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
  searchPayload = {
    "device": {
      deviceType:"phone",
    },
    "search":"",
    "postalCode":""
  }

  ngOnDestroy(): void {
    this.resSub.unsubscribe();
  }

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new InitialAction(this.searchPayload));
    this.resSub = this.store.select('initValue').subscribe(res => {
      this.responsePayload = res.initValue;
      console.log(this.responsePayload);
    })
  }

  fetch() {
    //this.searchPayload.search = document.getElementById("search-input").innerText;
    this.store.dispatch(new InitialAction(this.searchPayload));
  }

}
