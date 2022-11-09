import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  providers: [AuthService, PassportModule, LocalStrategy, JwtStrategy],
  imports: [
    UsersModule,
    JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '60s' } }),
    // SessionSerializer
  ],
  exports: [AuthService],
})
export class AuthModule {}
