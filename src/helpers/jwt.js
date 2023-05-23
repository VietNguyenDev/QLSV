import jwt from 'jsonwebtoken';

export const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        algorithm: 'HS256',
        notBefore: 0,
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        issuer: process.env.APP_DOMAIN,
    });

    return token
}

export const parseToken = (token) => {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET, {
            algorithms: 'HS256',
            issuer: process.env.APP_DOMAIN,
        });

        return payload;
    } catch (error) {
        return false;
    }
}