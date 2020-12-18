import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FridgeItem } from './fridge-item';
import { OktaAuthService } from '@okta/okta-angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FridgeService {
  private baseUrl = `${environment.baseUrl}/api/appliances/fridge`;
  private headers: { [n: string]: string };

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService) {
    const accessToken = this.oktaAuth.getAccessToken();
    this.headers = {
      Authorization: 'Bearer ' + accessToken,
      Accept: 'application/json',
    };
  }

  getFridgeItems(): Promise<FridgeItem[]> {
    return this.http
      .get<FridgeItem[]>(`${this.baseUrl}/contents`, { headers: this.headers })
      .toPromise();
  }
}
