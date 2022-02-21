const {request, response} = require('express')


const getUser = (req = request, res = response) => {

    const {q,nombre = 'No name ',apiKey,page ='1',limit} = req.query;

    res.json({
        msg: 'get API desde el controlador',
        q,
        nombre,
        apiKey,
        page,
        limit,
    })
};
const postUser = (req, res = response) => {

    const {nombre,edad,id}= req.body; 
    res.json({
        msg:'post desde el controlador',
        nombre,
        edad,
        id,
        
    })
};
const putUser = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg:'put desde el controlador', id 
    })
};
const patchUser = (req, res = response) => {
    res.json({
        msg:'patch desde el controlador'
    })
};
const deleteUser = (req, res = response) => {
    res.json({
        msg:'delete desde el controlador'
    })
};


module.exports = {
    getUser,
    postUser,
    putUser,
    patchUser,
    deleteUser,
}