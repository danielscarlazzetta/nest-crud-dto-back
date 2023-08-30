import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCardDto } from './DTO/create-card.dto';
import { UpdateCardDto } from './DTO/update-card.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'toyota',
        //     model: 'asd0',
        // },
        // {
        //     id: uuid(),
        //     brand: 'honda',
        //     model: 'asd0',
        // },
        // {
        //     id: uuid(),
        //     brand: 'jeep',
        //     model: 'asd2',
        // },
    ];

    //find
    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const carId = this.cars.find(car => car.id === id);
        if (!carId) throw new NotFoundException(`El id '${id}' no existe`);
        return carId;
    }

    findOneByBrand(brand: string) {
        const carBrand = this.cars.find(nombre => nombre.brand === brand);
        if (!carBrand) throw new NotFoundException(`La marca '${brand}' no existe`);
        return carBrand;
    }
    findOneByModel(model: string) {
        const carModel = this.cars.find(modelo => modelo.model === model);
        if (!carModel) throw new NotFoundException(`El modelo '${model}' no existe`);
        return carModel;
    }

    //post
    createCard(createcardDto: CreateCardDto) {

        const car: Car = {
            id: uuid(),
            ...createcardDto,
        }


        this.cars.push(car);
        return car;
    }

    //patch
    updateCar(id: string, updateCardDto: UpdateCardDto) {
        let carDB = this.findOneById(id);
        if (updateCardDto.id && updateCardDto.id !== id) throw new BadRequestException(`El id Del Auto no es valido`);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCardDto,
                    id,
                }
                return carDB;
            }
            return car;
        });
        return carDB;
    }

    //delete
    deleteCar(id: string) {
        const car = this.findOneById( id );
        this.cars = this.cars.filter(car => car.id !== id);
    }

    fillCarsWithSeedData( cars: Car[]){
        this.cars = cars;
    }
}
