import { Component, Input } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  @Input() tags: string[] = [];

  constructor(
    private roomService: RoomService
  ){}

  onRemoveTag(tag:string){
    this.roomService.removeTags(tag);
  }
}
