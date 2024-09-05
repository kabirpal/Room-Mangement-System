export interface Room  {
    id:number;
    name: string;
    deatils: string;
    capacity: number;
    tags:[];
    timeSlots: TimeSlot[];
}

export interface TimeSlot {
    time: string;
    available: boolean;
}