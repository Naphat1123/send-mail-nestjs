import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendEmailDto } from './dto/send-email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-email')
  async getHello(@Body() payload: SendEmailDto) {
    return await this.appService.sendEmail(payload.email, payload.name);
  }
}
