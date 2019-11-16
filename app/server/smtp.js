import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  const smtp = {
    username: 'hggmalamahawaii@gmail.com',
    password: 'team600iq',
    server: 'smtp.gmail.com',
    port: 587,
  };

  process.env.MAIL_URL = `smtp://${encodeURIComponent(smtp.username)}:${encodeURIComponent(smtp.password)}@${encodeURIComponent(smtp.server)}:${smtp.port}`;
});
