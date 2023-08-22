import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly _CarsServices: CarsService){}
   
    @Get()
    getAllCars() {
        return this._CarsServices.findAll();
    }

    //Get
    @Get(':id')
    getCarsById(@Param('id', ParseIntPipe) id : number) {
        console.log({id})
        return this._CarsServices.findOneById(id);
    }
    @Get('brand/:brand')
    getCarsByBrand(@Param('brand') brand : string) {
        console.log({brand})
        return this._CarsServices.findOneByBrand(brand);
    }
    @Get('model/:model')
    getCarsByModel(@Param('model') model : string) {
        console.log({model})
        return this._CarsServices.findOneByModel(model);
    }

    //Post
    @Post()
    createCar(@Body() body : any){
        return body;
    }

    //Patch
    @Patch(':id')
    updateCad(
        @Param('id', ParseIntPipe) id : number,
        @Body() body : any){
        return body;
    }

    //Delete
    @Delete(':id')
    deleteCad(@Param('id', ParseIntPipe) id : number){
        return {
            method: 'delete',
            id: id
        }
    }
}
