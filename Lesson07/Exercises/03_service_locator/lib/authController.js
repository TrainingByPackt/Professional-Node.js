module.exports = (serviceLocator) => {
    const authService = serviceLocator.get('authService');
    const authController = {};

    authController.login = (req, res, next) => {
        // ... same as in the previous version
    };

    authController.checkToken = (req, res, next) => {
        // ... same as in the previous version
    };

    return authController;
};