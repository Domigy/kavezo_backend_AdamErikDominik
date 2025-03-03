import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { ConcertService } from './concert.service';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { NotFoundError } from 'rxjs';

@Controller('concert')
export class ConcertController {
  constructor(private readonly concertService: ConcertService) {}

  @Post()
  async create(@Body() createConcertDto: CreateConcertDto) {
    const eredmeny=  await this.concertService.create(createConcertDto);
    if(!eredmeny){
      throw new BadRequestException("Nem lehet múltbeli az idő!");
    }
    return eredmeny;
  }

  @Get()
  findAll() {
    return this.concertService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const eredmeny=  await this.concertService.findOne(+id);
    if(!eredmeny){
      throw new NotFoundException("Nincs ilyen id");
    }
    return eredmeny;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateConcertDto: UpdateConcertDto) {
    const eredmeny=  await this.concertService.update(+id, updateConcertDto);
    if(!eredmeny){
      throw new NotFoundException("Nincs ilyen id");
    }
    return eredmeny;
  }


  @Delete(':id')
   async remove(@Param('id') id: string) {
    const eredmeny=  await this.concertService.remove(+id);
    if(!eredmeny){
      throw new NotFoundException("Nincs ilyen id");
    }
    return eredmeny;
  }
}
