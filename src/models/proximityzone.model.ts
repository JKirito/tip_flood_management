import { prop, getModelForClass } from '@typegoose/typegoose';

class ProximityZone {
  @prop({ required: true })
  public zoneName!: string;

  @prop({ required: true })
  public radius!: number;

  @prop({ required: true })
  public latitude!: number;

  @prop({ required: true })
  public longitude!: number;
}

const ProximityZoneModel = getModelForClass(ProximityZone);

export default ProximityZoneModel;
