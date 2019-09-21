import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  httpGet(URL, payload):Observable<any> {
    return this.http.get(`${URL}`, payload);
  }

  httpPost(URL, payload):Observable<any> {
    return this.http.get(`${URL}`, payload);
  }

}
