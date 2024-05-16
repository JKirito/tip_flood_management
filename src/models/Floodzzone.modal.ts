import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import ProximityZone, { ProximityZoneModel } from '@models/proximityzone.model'; // Adjust the import path as needed

export class FloodZone {
  @prop({ required: true })
  public latitude!: number;

  @prop({ required: true })
  public longitude!: number;

  @prop({ required: true, min: 0 })
  public radius!: number;

  @prop({ ref: () => ProximityZone })
  public proximityZone?: Ref<ProximityZone>;

  @prop({ default: Date.now })
  public createdAt?: Date;
}

export const FloodZoneModel = getModelForClass(FloodZone);
