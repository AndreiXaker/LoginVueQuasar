export class CreateUserDto {
  readonly name?: string;
  readonly phone?: string;
  readonly email: string;
  readonly address?: string;
  readonly bio?: string;
  readonly password: string;
}
