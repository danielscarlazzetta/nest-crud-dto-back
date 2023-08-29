import { IsString, MinLength } from "class-validator";

export class CreateCardDto{

    @IsString({message: `Error con 'brand'`})
    readonly brand: string;

    @IsString({message: `Error con 'model'`})
    @MinLength(3, {message: `Se pide un minimo de 3 caracteres`} )
    readonly model: string;
}