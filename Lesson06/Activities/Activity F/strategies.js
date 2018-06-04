const mediaUtils = require('./mediaUtils');

module.exports.online = {
    download: file => {
        return mediaUtils.downloadFile(file)
    }
};

module.exports.offline = {
    download: file => {
        return mediaUtils.loadFile(file)
    }
};