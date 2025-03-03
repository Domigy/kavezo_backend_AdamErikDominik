import { PartialType } from '@nestjs/mapped-types';
import { CreateConcertDto } from './create-concert.dto';
import { IsBooleanString } from 'class-validator';

export class UpdateConcertDto extends PartialType(CreateConcertDto) {
    @IsBooleanString()
    elmarad: boolean;
}
