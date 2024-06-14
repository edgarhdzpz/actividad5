import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesService } from './clientes/clientes.service';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [ClientesModule],
  controllers: [AppController],
  providers: [AppService, ClientesService],
})
export class AppModule {}
