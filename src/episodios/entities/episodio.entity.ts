import { Serie } from 'src/series/entities/series.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Episodio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  duracion: string;

  @Column()
  numeroCapitulo: number;

  @ManyToOne(() => Serie, (serie) => serie.episodios, { onDelete: 'CASCADE' })
  serie: Serie;
}
