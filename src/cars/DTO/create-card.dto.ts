import { IsString } from "class-validator";

export class CreateCardDto{

    @IsString({message: `Error con 'brand'`})
    readonly brand: string;

    @IsString({message: `Error con 'model'`})
    readonly model: string;
}