import { Body, Injectable, Param } from '@nestjs/common';
import { CreateConcertDto } from './dto/create-concert.dto';
import { UpdateConcertDto } from './dto/update-concert.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ConcertService {
  db: PrismaService
  constructor(db: PrismaService){
    this.db= db;
  }
  async create(createConcertDto: CreateConcertDto) {
    const { fellepo, startTime, idotartam } = await createConcertDto;
    const startTimeDate = new Date(startTime);
    if(startTimeDate.getTime() < Date.now()){
      return undefined;
    }else{
    return this.db.koncert.create({data: {
      startTime: startTimeDate,
      fellepo: fellepo,
      idotartam: idotartam
    }
  
    });}
  }

  findAll() {
    return this.db.koncert.findMany();
  }

  async findOne(id: number) {
    try{
    return await this.db.koncert.findFirst({where: {id: id}});
    }catch{
      return undefined;
    }
  }

  async update( @Param('id') id: number,@Body() updateConcertDto: UpdateConcertDto) {
    const { fellepo, startTime, idotartam , elmarad} = await updateConcertDto;
    const startTimeDate = new Date(startTime);
    try{return await this.db.koncert.update({where: {id}, data: {
      startTime: startTimeDate,
      fellepo: fellepo,
      idotartam: idotartam,
      elmarad: elmarad
    }});}
    catch{
      return undefined;
    }
    
  }

  async remove(id: number) {
    try{
      return await this.db.koncert.delete({where: {id}}); 
    }catch{
      return undefined;
    }
  }
}
