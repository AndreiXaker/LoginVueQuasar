import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from "../user/user.service";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'SECRET',
      global: true,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, UserService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
