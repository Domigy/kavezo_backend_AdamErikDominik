import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString, min, MinDate } from "class-validator";

export class CreateConcertDto {
    @IsString()
    @IsNotEmpty()
    fellepo: string;
    @IsNotEmpty()
    @IsDateString()
    startTime: Date;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    idotartam: number;
}
