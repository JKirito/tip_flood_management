import { prop, getModelForClass } from "@typegoose/typegoose";

class User {
  @prop({ required: true })
  public name: string;

  @prop({ required: true })
  public age: number;

  @prop({ required: true })
  public email: string;

  @prop({ required: true })
  public phone: string;

  @prop({ required: true })
  public street: string;

  @prop({ required: true })
  public city: string;

  @prop({ required: true })
  public state: string;

  @prop({ required: true })
  public zip: string;

  @prop({ required: true })
  public country: string;

  @prop({ default: false })
  public isAdmin: boolean;

  @prop({ default: false })
  public isSubscriber: boolean;
}

const UserModel = getModelForClass(User);
export { UserModel };
