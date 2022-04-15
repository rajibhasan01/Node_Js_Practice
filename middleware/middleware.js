export const filterReq = (req, res, next)=>{
    if (!req.query.name){
        res.send('Please provide your name');
    }
    else {
        next()
    }
}