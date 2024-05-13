import { ReturnModelType, getModelForClass, prop } from '@typegoose/typegoose';

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
  public isSubscriber?: boolean;

  public static async toggleSubscribe(
    this: ReturnModelType<typeof User>,
    userId: string
  ): Promise<boolean> {
    const user = await this.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    user.isSubscriber = !user.isSubscriber;
    await user.save();

    return user.isSubscriber;
  }
}

const UserModel = getModelForClass(User);

export type UserType = ReturnModelType<typeof User>;

export default UserModel;
