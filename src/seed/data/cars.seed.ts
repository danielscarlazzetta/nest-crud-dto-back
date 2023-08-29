import { v4 as uuid } from "uuid";
import { Car } from "src/cars/interfaces/car.interface";

export const CARS_SEED: Car[] =[
    {
        id: uuid(),
        brand: 'kia',
        model: 'rio'
    },
    {
        id: uuid(),
        brand: 'ford',
        model: 'bronco'
    },
    {
        id: uuid(),
        brand: 'jeep',
        model: 'cherokee'
    },
] 