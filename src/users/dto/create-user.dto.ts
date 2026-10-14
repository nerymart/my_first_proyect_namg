
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'usuario@correo.com' })
  email: string;

  @ApiProperty({ example: 'Juan Pérez' })
  name?: string;

  @ApiProperty({ example: 'password123' })
  password: string;

  @ApiProperty({ example: '88888888', required: false })
  telefono?: string;

  @ApiProperty({ example: 1 })
  tenantId: number;
}
