import { Router } from 'express';
import { getusers } from '../model/users.js';

const user_login = async (req, res) => {
    const user = await getusers.findOne({ where: { email: req.body.email } });
    if (user) {
        const validPassword = bcryptjs.compareSync(req.body.password, user.password);
        if (user.validat === true) {
            if (validPassword) {
                const token = jwt.sign({
                    sub: user.name,
                    id: user.id,
                }, 'secret', { expiresIn: '30m' }, data.parsed.JWT_TOKEN_SECRET, { algorithm: 'HS256' })
                user.token = token;

                res.header('auth-token', token).json({
                    error: null,
                    data: { token, user: user.id, name: user.name, validate: user.validate }
                });

            }
            else {
                return res.status(400).json({ error: 'contraseña no válida' })
            }
        } else {
            return res.status(400).json({ error: "Usuario no verificado" });
        }
    }
    else {
        return res.status(400).json({ error: 'Usuario no encontrado' });
    }
};
export const Postuser = user_login;