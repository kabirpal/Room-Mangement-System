import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  //Endpoint API will be added here.
  private apiUrl = '/assets/data/rooms.json'
  private postUrl = '';
  private filterSlotDataUrl = '';
  private removeTagUrl = '';

  constructor(
    private http: HttpClient
  ) { }

  getRooms():Observable<[]>{
    return this.http.get<[]>(`${this.apiUrl}`)
  }

  bookRoom(roomDetails:string):Observable<string>{
    console.log(roomDetails);
    return this.http.post<string>(`${this.postUrl}`,roomDetails);
  }

  filterSlotData(date:number):Observable<[]>{
    return this.http.get<[]>(`${this.filterSlotDataUrl}`);
  }

  removeTags(tags:string):Observable<string>{
    return this.http.post<string>(`${this.removeTagUrl}`,tags);
  }
}
