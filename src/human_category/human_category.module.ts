import { Module } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { HumanCategoryController } from './human_category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HumanCategorySchema } from './schema/human_category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "HumanCategory", schema: HumanCategorySchema },
    ]),
  ],

  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
  exports:[HumanCategoryService]
})
export class HumanCategoryModule {}
