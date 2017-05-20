import { Vehicle } from './vehicle';
import { Guid } from 'app/core/type.aliases';
export class Car extends Vehicle{   
    doors?:number;
    carType?:string;
}