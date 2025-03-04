import { PartialType } from '@nestjs/mapped-types';
import { CreateConcertDto } from './create-concert.dto';
import { IsBoolean, IsBooleanString } from 'class-validator';

export class UpdateConcertDto extends PartialType(CreateConcertDto) {
    @IsBoolean()
    elmarad: boolean;
}
