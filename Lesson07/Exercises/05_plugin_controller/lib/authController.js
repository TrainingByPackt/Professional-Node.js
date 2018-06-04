module.exports = (authService) => {
    const authController = {};

    authController.login = (req, res, next) => {
        // ... same as in the previous version
    };

    authController.checkToken = (req, res, next) => {
        // ... same as in the previous version
    };
    return authController;
};