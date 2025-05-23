import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Type {
    @Prop({ required: true })
      name: string;
}
export const typesSchema=SchemaFactory.createForClass(Type)
