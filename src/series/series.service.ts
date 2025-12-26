import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSerieDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serie } from './entities/series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(Serie)
    private readonly serieRepository: Repository<Serie>,
  ) {}
  async create(createSerieDto: CreateSerieDto) {
    const nuevaSerie = this.serieRepository.create(createSerieDto);
    return await this.serieRepository.save(nuevaSerie);
  }

  async findAll() {
    return await this.serieRepository.find({
      relations: ['episodios'],
    });
  }

  async findOne(id: number) {
    const serie = await this.serieRepository.findOne({
      where: { id },
      relations: ['episodios'],
    });
    if (!serie) throw new NotFoundException(`Serie con ID ${id} no encontrada`);
    return serie;
  }

  async update(id: number, updateSerieDto: UpdateSeriesDto) {
    const serie = await this.serieRepository.preload({
      id: id,
      ...updateSerieDto,
    });
    if (!serie) throw new NotFoundException(`Serie con ID ${id} no existe`);
    return this.serieRepository.save(serie);
  }

  async remove(id: number) {
    const serie = await this.findOne(id);
    return this.serieRepository.remove(serie);
  }
}
