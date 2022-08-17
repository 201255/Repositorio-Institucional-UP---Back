import { Router } from 'express';
import { dataEnv } from '../config/envData.js';
import { getusers } from '../model/users.js';

const router = Router();

router.post('/login', (req, res) =>user_login(req, res));

const user_login = async (req, res) => {
    const user = await getusers.findOne({ where: { email: req.body.email } });
    if (user) {
        const validPassword = bcryptjs.compareSync(req.body.Password, user.Password);
        if (user.validat === true) {
            if (validPassword) {
                const token = jwt.sign({
                    sub: user. nombreDirector,
                    id: user.Id,
                }, 'secret', { expiresIn: '30m' }, dataEnv.parsed.JWT_TOKEN_SECRET, { algorithm: 'HS256' })
                user.token = token;

                res.header('auth-token', token).json({
                    error: null,
                    data: { token, user: user.Id, name: user.nombreDirector, validate: user.validate }
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

export default router;