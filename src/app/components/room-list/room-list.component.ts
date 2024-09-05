import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit{
  rooms:Room[]=[];
  selectedRoom: Room | null = null;
  filteredRoom: Room[] = [];
  searchedQuery: string='';
  
  constructor(
    private roomService: RoomService
  ){}
  
  ngOnInit(): void {
      this.getRooms();
  }

  getRooms():void{
    this.roomService.getRooms().subscribe(
      (rooms)=>{ 
        console.log(rooms);
        this.rooms = rooms;
        this.filteredRoom = rooms;
      }
    )
  }

  selectRoom(room:Room){
    this.selectedRoom = room;
  }

  searchRoom():void{
    console.log(this.searchedQuery);
    if(!this.searchedQuery){
      this.filteredRoom = this.rooms;
      return;
    }else{
      this.filteredRoom = this.rooms.filter(
       (room => (room.name.toLowerCase().includes(this.searchedQuery.toLowerCase())
       || room.deatils.toLowerCase().includes(this.searchedQuery.toLowerCase()) ||
        room.capacity >= +this.searchedQuery))
      )
    }
  }
}
