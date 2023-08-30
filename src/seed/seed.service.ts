import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  
  constructor(
    private readonly _carServices: CarsService,
    private readonly _brandsServices: BrandsService,
  ){

  }
  populateDB(){
    //CARS_SEED

    this._carServices.fillCarsWithSeedData( CARS_SEED );
    this._brandsServices.fillBrandsWithSeedData( BRAND_SEED );
    return 'succes';
  }
}
