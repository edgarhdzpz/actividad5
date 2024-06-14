import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 feature/03_localidades
import { LocalidadesModule } from './localidades/localidades.module';

@Module({
  imports: [LocalidadesModule],
import { EstadosModule } from './estados/estados.module';
import { MunicipiosModule } from './municipios/municipios.module';

@Module({
  imports: [MunicipiosModule],
 development
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
