
import {
    Controller,
    Get,
    Post,
    Delete,
    Body,
    Param,
    HttpStatus,
    Render,
    Response,
    Res
  } from '@nestjs/common';
  

  import { UsersService } from './users.service';
  import { UsersDTO } from './users.dto';
import { response } from 'express';

  @Controller('users')
  export class UsersController {
    constructor(private usersService: UsersService) {}

    
    @Get()
    @Render('index')
    root() {
         return this.usersService
                    .showAll()
                    .then((result) => result ? {users: result } : { users: []});
    
    }
    

    


    @Post()
    async createUsers(@Body() data: UsersDTO) {
      const user = await this.usersService.create(data);
      //return response.redirect("http://localhost:3000/users");
     /*return {
       statusCode: HttpStatus.OK,
       message: 'User created successfully',
       user
     };*/
   }
    
    /**/

    

   
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
      await this.usersService.delete(id);
      /*return {
        statusCode: HttpStatus.OK,
        message: 'User deleted successfully',
      };*/
    }
  }