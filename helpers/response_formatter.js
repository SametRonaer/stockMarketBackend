function responseFormatter (res , options) {
    var code = options.statusCode || 200; 
    var errorMessage = options.errorMessage; 
    var successMessage = options.successMessage; 
    var data = options.data; 

    res.status(code || 200).json({
    code: code,
    successMessage: successMessage,
    errorMessage: errorMessage,
    data: data || {},
  });
 };

 module.exports = {responseFormatter};