import {
  prop,
  ReturnModelType,
  getModelForClass,
  Severity,
  modelOptions,
} from '@typegoose/typegoose';

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
class Alert {
  @prop({ required: true, enum: ['low', 'medium', 'high'] })
  public severity!: 'low' | 'medium' | 'high'; // Indicates level of urgency

  @prop({ required: true })
  public location!: string; // Human-readable location description

  @prop({ required: true })
  public message!: string; // Alert message

  @prop()
  public additionalNotes?: string; // Optional space for more information

  @prop({ required: true })
  public affectedAreas?: {
    location: string; // Description of the area
    latitude: number;
    longitude: number;
  }[];

  @prop({ default: Date.now })
  public timestamp!: Date; // Time the alert was generated
}

// Create the Typegoose Model
const AlertModel = getModelForClass(Alert);

// Export for use
export type AlertType = ReturnModelType<typeof Alert>;
export default AlertModel;

// Create a JSON object to represent an alert
