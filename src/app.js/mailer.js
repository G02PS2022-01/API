const nodemailer = require('nodemailer');
const Mail = require('nodemailer/lib/mailer');
const  {host, port, user, pass} = ('../config/mail.json');
const hbs = require('nodemailer-express-handlebars');
const { path } = require('express/lib/application');

const transport = nodemailer.createTransport({
   
        host,
        port,
        auth: {user, pass},
        
        
    });

    transport.use('compile', hbs({
        viewEngine: 'handlebars',
        viewPath: path.resolve('./src/resources/mail/'),
        extName: '.html',
    }));

module.exports =  transport;