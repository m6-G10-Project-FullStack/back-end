/* eslint-disable prettier/prettier */
import * as Mailgen from 'mailgen';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SendMailDto } from 'src/modules/users/dto/send-mail.dto';

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'M6',
    link: 'http://localhost:3000',
  },
});

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailService) {}

  async sendEmail({ to, subject, text }: SendMailDto) {
    await this.mailerService
      .sendEmail({
        to,
        subject,
        html: text,
      })
      .then(() => {
        console.log('email enviado');
      })
      .catch((err) => {
        console.log(err);
        throw new InternalServerErrorException();
      });
  }

  resetPassword(userEmail: string, userName: string, resetToken: string) {
    const email = {
      body: {
        name: userName,
        intro: 'Email para resetar senha para sua conta do Kenzie Web Motors',
        action: {
          instructions: 'Clique no botão abaixo para resetar sua senha:',
          button: {
            color: '#DC4D2F',
            text: 'Resetar senha',
            link: `http://localhost:3000/users/resetPassword/${resetToken}`,
          },
        },
        outro: 'Se você não solicitou o reset apenas ignore este email.',
      },
    };

    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
      to: userEmail,
      subject: 'Resetar senha',
      text: emailBody,
    };

    return emailTemplate;
  }
}
