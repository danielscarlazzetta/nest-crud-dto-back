import { v4 as uuid } from "uuid";
import { Brand } from "src/brands/entities/brand.entity";

export const BRAND_SEED: Brand[] =[
    {
        id: uuid(),
        name: 'kia',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'ford',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'jeep',
        createdAt: new Date().getTime(),
    },
] 