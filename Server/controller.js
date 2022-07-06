module.exports = {

    message: (req, res) => {
        database.push(req.body)
        res.status(200).send({success: true})
        },


     homes: (req, res) => {
        homesdata.push(req.body)
        res.status(200).send({success: true})
        },

}

const database = [
    {
        name: 'me',
        number: '123-456-7891',
        email: 'me@me.com',
        message: 'hello'
    },
]

const homesdata = [
    {
        beds: '5',
        baths: '3',
        sq_ft: '2700',
        aceage: '.25',
        bio: 'This place is cute.',
        price: '450,000'
    },
]