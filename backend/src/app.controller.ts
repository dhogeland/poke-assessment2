import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getList(): Promise<Observable<any>> {
    return this.appService.getList();
  }

  @Post('/getNext')
  async getNextList(@Body() url: any): Promise<any> {
      return this.appService.getNextList(url.url);
  }

  @Post('/getInfo')
  async getPokeInfo(@Body() url: any): Promise<any> {
      return this.appService.getPokeInfo(url.id);
  }

  @Post('/getInfoByName')
  async getPokeInfoByName(@Body() name: any): Promise<any> {
      return this.appService.getPokeInfoByName(name.name);
  }

}
