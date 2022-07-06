module.exports = {

    message: (req, res) => {
        database.push(req.body)
        res.status(200).send({success: true})
        },
     homes: (req, res) => {
        homesdata.push(req.body)
        res.status(200).send({success: true})
        },
    gethomes: (req, res) => {
        res.status(200).send(homesdata)
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
        sq_ft: '2,700',
        aceage: '.25',
        bio: 'This place is cute.',
        price: '450,000'
    },
    {
        beds: '4',
        baths: '1',
        sq_ft: '1,750',
        aceage: '.42' ,
        bio:'Older but still good.' ,
        price:'300,000' 
    },
    {
        beds: '4',
        baths: '2',
        sq_ft: '2,500',
        aceage: '.5' ,
        bio:'Good spec home.' ,
        price:'375,000' 
    },
    {
        beds: '2',
        baths: '1',
        sq_ft: '1500',
        aceage: '.2' ,
        bio:'TownHouse.' ,
        price:'150,000' 
    },
    {
        beds: '8',
        baths: '8',
        sq_ft: '10,000',
        aceage: '12' ,
        bio:'On a lake.' ,
        price:'10,000,000' 
    },
    {
        beds: '150',
        baths: '155',
        sq_ft: '25,000',
        aceage: '5' ,
        bio:'Hotel' ,
        price:'50,000,000' 
    },
]