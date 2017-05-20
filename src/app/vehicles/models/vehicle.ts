import { Guid } from 'app/core/type.aliases';
import { IVehicle } from './ivehicle';

export class Vehicle implements IVehicle{
    id: Guid;
    make: string;
    model: string;
    engine: string;
    type: string;
    wheels?: number;
}