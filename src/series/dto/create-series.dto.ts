import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateSerieDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  sinopsis: string;

  @IsUrl()
  urlPortada: string;
}
