const { responseFormatter } = require("../../helpers/response_formatter");

function getUserPortfolio(req, res){
    return responseFormatter(res, { data: {}});
}

module.exports = {getUserPortfolio}