import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString()
    @MinLength(1, {message: `El minimo es de 1 caracter`})
    name : string;
}
