import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 0,
            brand: 'toyota',
            model: 'asd0',
        },
        {
            id: 1,
            brand: 'honda',
            model: 'asd0',
        },
        {
            id: 2,
            brand: 'jeep',
            model: 'asd2',
        },
    ];

    findAll(){
        return this.cars;
    }

    findOneById(id : number){
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
}
