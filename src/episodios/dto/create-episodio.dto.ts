import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateEpisodioDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  duracion: string;

  @IsNumber()
  @IsNotEmpty()
  numeroCapitulo: number;

  @IsNumber()
  @IsNotEmpty()
  serieId: number;
}
