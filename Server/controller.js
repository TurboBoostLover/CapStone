module.exports = {

    message: (req, res) => {
        database.push(req.body)
        console.log(database)
        res.status(200).send({success: true}, database)
        }
}

const database = [
    {
        name: 'me',
        number: '123-456-7891',
        email: 'me@me.com',
        message: 'hello'
    },
]