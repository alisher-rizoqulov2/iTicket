import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Type, typesSchema } from './schema/type.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Type.name,schema:typesSchema}])
  ],
  controllers: [TypesController],
  providers: [TypesService],
  exports:[TypesService]
})
export class TypesModule {}
