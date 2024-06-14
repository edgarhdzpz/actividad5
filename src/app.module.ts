import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesService } from './clientes/clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ClientesModule],

feature/04_direcciones
import { DireccionesModule } from './direcciones/direcciones.module';

@Module({
  imports: [DireccionesModule],

 feature/03_localidades
import { LocalidadesModule } from './localidades/localidades.module';

@Module({
  imports: [LocalidadesModule],
import { EstadosModule } from './estados/estados.module';
import { MunicipiosModule } from './municipios/municipios.module';

@Module({
  imports: [MunicipiosModule],
 development
 development
development
  controllers: [AppController],

  providers: [AppService, ClientesService],

  providers: [AppService, PrismaService],

})
export class AppModule {}
