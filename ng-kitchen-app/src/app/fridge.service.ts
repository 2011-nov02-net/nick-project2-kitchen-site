import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FridgeItem } from './fridge-item';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {
  private baseUrl = 'https://localhost:44336/api/appliances/fridge';

  constructor(private http: HttpClient) { }

  getFridgeItems(): Promise<FridgeItem[]> {
    return this.http.get<FridgeItem[]>(`${this.baseUrl}/contents`)
      .toPromise();
  }
}
