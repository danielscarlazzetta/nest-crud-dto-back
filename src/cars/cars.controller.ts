import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './DTO/create-card.dto';
import { UpdateCardDto } from './DTO/update-card.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly _CarsServices: CarsService) { }

    @Get()
    getAllCars() {
        return this._CarsServices.findAll();
    }

    //Get
    @Get(':id')
    getCarsById(@Param('id', ParseUUIDPipe) id: string) {
        console.log({ id })
        return this._CarsServices.findOneById(id);
    }
    @Get('brand/:brand')
    getCarsByBrand(@Param('brand') brand: string) {
        console.log({ brand })
        return this._CarsServices.findOneByBrand(brand);
    }
    @Get('model/:model')
    getCarsByModel(@Param('model') model: string) {
        console.log({ model })
        return this._CarsServices.findOneByModel(model);
    }

    //Post
    @Post()
    createCar(@Body() createCardDto: CreateCardDto) {
        return this._CarsServices.createCard( createCardDto);
    }

    //Patch
    @Patch(':id')
    updateCad(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCardDto: UpdateCardDto) {

        return this._CarsServices.updateCar(id, updateCardDto);
    }

    //Delete
    @Delete(':id')
    deleteCad(@Param('id', ParseUUIDPipe) id: string) {
        return {
            method: 'delete',
            id: id
        }
    }
}
