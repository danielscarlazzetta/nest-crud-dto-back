import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid';

@Injectable()
export class CarsService {
    private cars : Car[] = [
        {
            id: uuid(),
            brand: 'toyota',
            model: 'asd0',
        },
        {
            id: uuid(),
            brand: 'honda',
            model: 'asd0',
        },
        {
            id: uuid(),
            brand: 'jeep',
            model: 'asd2',
        },
    ];

    //find
    findAll(){
        return this.cars;
    }

    findOneById(id : string){
        //return this.cars[id];
        const carId = this.cars.find(car => car.id === id);
        if(!carId) throw new NotFoundException(`El id '${id}' no existe`);
        return carId;
    }

    findOneByBrand(brand : string){
        const carBrand = this.cars.find(nombre => nombre.brand === brand);
        if(!carBrand) throw new NotFoundException(`La marca '${brand}' no existe`);
        return carBrand;
    }
    findOneByModel(model : string){
        const carModel = this.cars.find(modelo => modelo.model === model);
        if(!carModel) throw new NotFoundException(`El modelo '${model}' no existe`);
        return carModel;
    }

    //post
}
