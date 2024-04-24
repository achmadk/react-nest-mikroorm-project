import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { AppService } from './app.service';

@ApiTags('Resources')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /** @ts-ignore */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
