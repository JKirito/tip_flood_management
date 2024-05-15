import {
  ReturnModelType,
  getModelForClass,
  prop,
  Ref,
} from '@typegoose/typegoose';
import ProximityZone, { ProximityZoneModel } from './proximityzone.model';
class User {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public age!: number;

  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public phone!: string;

  @prop({ required: true })
  public street!: string;

  @prop({ required: true })
  public city!: string;

  @prop({ required: true })
  public state!: string;

  @prop({ required: true })
  public zip!: string;

  @prop({ required: true })
  public country!: string;

  @prop({ default: false })
  public role: 'admin' | 'user';

  @prop({ required: true })
  public password!: string;

  @prop({ required: true, default: 'pending' })
  public status!: 'active' | 'blocked' | 'pending';

  @prop({ required: true })
  public latitude: string;

  @prop({ required: true })
  public longitude: string;

  @prop({ ref: () => ProximityZone, required: false })
  public proximityZone!: Ref<ProximityZone>;

  // Static function to change user status
  public static async changeStatus(
    this: ReturnModelType<typeof User>,
    email: string,
    newStatus: 'active' | 'blocked' | 'pending'
  ): Promise<void> {
    const user = await this.findOne({ email: email });
    if (user) {
      user.status = newStatus;
      await user.save();
    } else {
      throw new Error('User not found');
    }
  }
}

const UserModel = getModelForClass(User);

export type UserType = ReturnModelType<typeof User>;

export default UserModel;
