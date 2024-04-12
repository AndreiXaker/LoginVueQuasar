import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [];
  findAll() {
    return this.users;
  }
  findOne(email: string) {
    return this.users.find((user) => user.email === email);
  }
  create(createUserDto: CreateUserDto) {
    this.users.push({ ...createUserDto });
    return createUserDto;
  }
  remove(email: string): User | undefined {
    const index = this.users.findIndex((user) => user.email === email);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return undefined;
  }
  update(email: string, updateUserDto: UpdateUserDto): User {
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex === -1) {
      throw new Error('Пользователь не найден');
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }
}
