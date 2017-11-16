import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// Account Mutation
Accounts.onCreateUser((options, user) => {
  const customizedUser = Object.assign({}, user);

  if (options.profile) {
    customizedUser.profile = options.profile;
  }

  return customizedUser;
});

// New Account Validation
Accounts.validateNewUser((user) => { 
  if (user.username && user.username.length >= 3) {
    return true;
  }

  throw new Meteor.Error(403, 'Username must have at least 3 characters');
});

