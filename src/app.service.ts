import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly sendGrid: SendGridService) {}
  async sendEmail(email: string, name: string): Promise<void> {
    await this.sendGrid
      .send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'User Created',
        text: `Hello ${name}, your user created with success`,
        html: `<strong>Hello ${name}, your user created with success!</strong>`,
      })
      .then(() => {
        console.log('email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
