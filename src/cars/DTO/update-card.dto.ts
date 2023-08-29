import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCardDto{

    @IsString({message: `Error con 'brand'`})
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message: `Error con 'brand'`})
    @IsOptional()
    readonly brand?: string;

    @IsString({message: `Error con 'model'`})
    @IsOptional()
    @MinLength(3, {message: `Se pide un minimo de 3 caracteres`} )
    readonly model?: string;
}