import {
  prop,
  ReturnModelType,
  getModelForClass,
  Severity,
  modelOptions,
} from "@typegoose/typegoose";

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Predictions {
  @prop({ required: true })
  public rainfallAmount: number;

  @prop({ required: true })
  public riverWaterLevel: number;

  @prop({ required: true })
  public soilMoistureContent: number;

  @prop({ required: true })
  public temperature: number;

  @prop({ required: true })
  public relativeHumidity: number;

  @prop({ required: true })
  public windSpeed: number;

  @prop({ required: true })
  public topography: number;

  @prop({ required: true })
  public urbanizationRate: number;

  @prop({ required: true })
  public drainageSystemCapacity: number;

  @prop({ required: true })
  public previousFloodHistory: number;

  @prop({ required: true })
  public predicted: number;
}

// Create the Typegoose Model
const PredictionsModel = getModelForClass(Predictions);

// Export for use
export type PredictionsType = ReturnModelType<typeof Predictions>;
export default PredictionsModel;

