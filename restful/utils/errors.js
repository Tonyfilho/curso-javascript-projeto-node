module.exports =  {
 send: (err,req,res,code = 400, message ='access error: ') => {
    console.error(`${message} ${err}`); //console do error
    res.status(code).json({
      error: err,
    });
 }

};