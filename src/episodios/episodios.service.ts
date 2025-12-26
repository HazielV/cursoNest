import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEpisodioDto } from './dto/create-episodio.dto';
import { UpdateEpisodioDto } from './dto/update-episodio.dto';
import { Episodio } from './entities/episodio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Serie } from 'src/series/entities/series.entity';

@Injectable()
export class EpisodiosService {
  constructor(
    @InjectRepository(Episodio)
    private readonly episodioRepository: Repository<Episodio>,
  ) {}

  async create(createEpisodioDto: CreateEpisodioDto) {
    const nuevoEpisodio = this.episodioRepository.create({
      ...createEpisodioDto,
      serie: { id: createEpisodioDto.serieId },
    });
    return await this.episodioRepository.save(nuevoEpisodio);
  }

  findAll() {
    return this.episodioRepository.find({ relations: ['serie'] });
  }
  async findOne(id: number) {
    const episodio = await this.episodioRepository.findOne({
      where: { id },
      relations: ['serie'],
    });
    if (!episodio)
      throw new NotFoundException(`Episodio con ID ${id} no encontrado`);
    return episodio;
  }

  async update(id: number, updateEpisodioDto: UpdateEpisodioDto) {
    const { serieId, ...datosAActualizar } = updateEpisodioDto;

    let serie: Serie | undefined;
    if (serieId) {
      serie = new Serie();
      serie.id = serieId;
    }

    const episodio = await this.episodioRepository.preload({
      id: id,
      ...datosAActualizar,
      ...(serie && { serie }),
    });

    if (!episodio)
      throw new NotFoundException(`Episodio con ID ${id} no existe`);
    return await this.episodioRepository.save(episodio);
  }

  async remove(id: number) {
    const episodio = await this.findOne(id);
    return await this.episodioRepository.remove(episodio);
  }
}
