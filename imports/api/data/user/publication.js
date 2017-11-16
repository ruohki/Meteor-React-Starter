import { Meteor } from 'meteor/meteor';

Meteor.publish('user.getUserData', function () {
  if (this.userId) {
    return Meteor.users.find(this.userId, { fields: { profile: 1, geheim: 1 } });
  }
  return this.ready();
});