import { Guid } from "app/core/type.aliases";

export interface IVehicle {
    id: Guid;
    make: string;
    model: string;
    engine: string;
    type: string;
    wheels?: number;
}