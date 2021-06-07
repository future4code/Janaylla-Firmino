import * as jwt from "jsonwebtoken";

export type authenticationData = {
    id: string
};

export function generateToken(payload: authenticationData): string {

    return jwt.sign(
        payload,
        process.env.JWT_KEY!,
        {
            expiresIn: "5s"
        });
}

export function getTokenData(token: string): authenticationData {

    const result: authenticationData = jwt.verify(
        token,
        process.env.JWT_KEY!
        ) as authenticationData;

        return result;
}