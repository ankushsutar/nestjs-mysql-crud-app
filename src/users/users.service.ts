import { Injectable,Res} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  
 
  async showAll() {
    return await this.usersRepository.find();
    //return 'You are connected to mysql database';
  }

  //async fetch() {
   // return await this.usersRepository.find();
  //}

  async create(data: UsersDTO) {
    const user = await this.usersRepository.create(data);
    await this.usersRepository.save(data);
    //return user;
  }

  async read(name: string) {
    return await this.usersRepository.findOne({ where: { name: name } });
  }

  
  async delete(id: number) {
    await this.usersRepository.delete({ id });
    //return { deleted: true };
  }

  
}