import Field from "@/components/ui/Input/Field";
import { IAuthFormData } from "@/types/auth.interface";
import { FC } from "react";
import { Control } from "react-hook-form";
import { Text, View } from "react-native";
import { validEmail } from "./email.regex";

interface IAuthFields {
    control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({control}) => {
    return (
        <>
            <Field<IAuthFormData>
                placeholder="Your Email..."
                control={control}
                name="email"
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: validEmail,
                        message: 'Pleas enter a valid email address'
                    }
                }}
                keyboardType="email-address"
            />
            <Field<IAuthFormData>
                placeholder="Your Password..."
                control={control}
                name="password"
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password should be minimum 6 characters long!'
                    }
                }}
            />
        </>
    )
}

export default AuthFields