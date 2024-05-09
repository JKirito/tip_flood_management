import { prop, ReturnModelType, getModelForClass } from '@typegoose/typegoose';

class EvacuationZone {
  @prop({ required: true })
  public zoneName: string;

  @prop({ required: true })
  public capacity: number;

  @prop({ default: 0 })
  public currentOccupancy: number;

  @prop({ required: true })
  public members: number;

  @prop({ required: true })
  public latiude: number;

  @prop({ required: true })
  public longitude: number;
}

// Create the Typegoose Model
const EvacuationZoneModel = getModelForClass(EvacuationZone);

// Export for use
export type EvacuationZoneType = ReturnModelType<typeof EvacuationZone>;
export default EvacuationZoneModel;
