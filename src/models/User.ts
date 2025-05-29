import { Schema, Model,model, connection } from 'mongoose';

type UserType = {
    name: {
        firstName: string,
        lastName: string
    },
    email: string,
    age: number,
    interests: [string],

}

const schema = new Schema<UserType>({
    email: {type: String, required: true},
    age: {type: Number, required: true},
    interests: [String],
    name: {
        firstName: {type: String, required: true},
        lastName: String
    }
})

const modelName: string = 'users';
const userModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UserType>) : model<UserType>(modelName, schema)

export default userModel;