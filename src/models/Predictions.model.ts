import {
  prop,
  ReturnModelType,
  getModelForClass,
  Severity,
  modelOptions,
} from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

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

  @prop({ required: true, default: Date.now })
  public createdAt: Date;

  @prop({ required: true })
  public predicted: number;

  @prop({ required: true })
  public algorithm: 'linear_regression' | 'svm' | 'decision_tree';
}

// Create the Typegoose Model
const PredictionsModel = getModelForClass(Predictions);

// Export for use
export type PredictionsType = ReturnModelType<typeof Predictions>;
export default PredictionsModel;
