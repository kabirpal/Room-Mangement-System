import { Component, Input, OnInit } from '@angular/core';
import { Room, TimeSlot } from 'src/app/models/room.model';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit{

  @Input() selectedRoom!: Room;
  currentMonth!: Date;
  weekdays!:string[];
  days!: any;
  slotDetails:string='';
  slotData!:TimeSlot[];

  constructor(
    private roomService: RoomService
  ){
    this.currentMonth = new Date();
    this.weekdays = ['Sun','Mon','Tue','Wed','Thus','Fri','Sat'];
    this.days = [];
  }

  ngOnInit(): void {
    this.slotData=this.selectedRoom.timeSlots;
    this.generateCalender();

  }


  bookRoom():void{
    if(this.slotDetails === ''){
      alert('Please select slots')
      return;
    }
    console.log('Room Booked', this.slotDetails);
    this.roomService.bookRoom(this.slotDetails);
    alert('Room Booked Successly');
  }

  generateCalender():void{
    const startOfMonth = new Date(this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),1);
    const endOfMonth = new Date(this.currentMonth.getFullYear(),
      this.currentMonth.getMonth()+1,0);
    
    this.days = [];
    for(let i=1;i< startOfMonth.getDate();i++){
      this.days.push(null);
    }

    for(let i=1;i<= endOfMonth.getDate();i++){
      this.days.push(i);
    }
  }

  bookSlot(slot:string):void{
    this.slotDetails = this.selectedRoom.id.toString()+'-'+ slot;
  }

  onDateSelect(date:number):void{
    console.log(date);
    //Below is the Logic for fetching the data from API based on Dates
    //I have not handled the month and year condition. 

    // this.roomService.filterSlotData(date).subscribe((data)=>{
    //   this.slotData = data;
    // });
  }

}
