import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { athorization } = req.headers;

  if(!athorization) {
    return res.status(401).json({
      errors: ['Você precisa se logar'],
    });
  };

  const [token] = athorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch(e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }

};
