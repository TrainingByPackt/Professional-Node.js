// ...

module.exports = (serviceLocator) => {
    const db = serviceLocator.get('db');
    const tokenSecret = serviceLocator.get('tokenSecret');

    const users = db.sublevel('users');
    const authService = {};

    authService.login = (usernamel, password, callback) => {
        // ... same as in the previous version
    }

    authService.checkToken = (token, callback) => {
        // ... same as in the previous version
    }

    return authService;
};