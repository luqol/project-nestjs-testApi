import { ParseUUIDPipe } from "@nestjs/common";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdateOrderDTO {

    @IsNotEmpty()
    @IsString()
    client: string;

    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    address: string;
}