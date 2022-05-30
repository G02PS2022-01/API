const express = require("express");

const User = require("../models/User");

const router = express.Router();

const crypto = require('crypto');

const mailer = require('../app/mailer')

router.post("/register", async (req, res) => {

  try {
  	if (await User.findOne({ email}))
  	     return res.status(400).send({ erro:'User already exists' });
    
    const user = await User.create(req.body);
    
    user.password = undefined;

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registrain failed" });
  }
});

module.exports = (app) => app.use("/auth", router);

router.post('/forgot_password', async (req, res) =>{
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if(!user)
      return res.status(400).send({ error: 'User not found'});

  const token = crypto.randomBytes(20).toString('hex');

  const now = new Date();

  now.setHours(now.getHours() + 1);

  await User.findByIdAndUpdate(user.id,{
    '$set': {
      passwordResetToken: token,
      passwordResetExpires: now,
    }
  });

  router.post('/reset_password', async (req, res)=>{
    const{ email, token, password} = req.body;

    try{
      const user = await User.finOne({ email })
      .select('+passwordResetToken passwordResetExpires');

      if(!user)
      return res.status(400).send({ error: 'User not found'});

      if(token !== user.passwordResetToken)
      return res.status(400).send({ error: 'Token invalid'});

      const now = new Date();

      if(now > user.passwordResetExpires)
        return res.status(400).send({ error: 'Token expired, generate a new one'});

      user.password = password;

      await user.save();
      res.send();
    } catch (err) {
      res.status(400).send({ error: 'Cannot reset password, try again'});
    }
  })

  mailer.sendMail({
    to: email,
    from: 'marcos.filho@mail.uft.edu.br',
    template: 'forgout_password',
    context: { token },

  }, (err) => {
    if (err)
      return res.status(400).send({ error: 'Erro on forgout password,try again'})
    return res.send();
  })

  console.log(token, now); 

  } catch (err) {
    res.status(400).send({error: 'Erro on forgot password, try again'})
    
  }
})


