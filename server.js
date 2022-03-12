
const express = require('express')
const app = express()
const cors = require('cors');

const fetch = require('node-fetch');


const port = 3007;

app.use(cors())
app.use(express.json())

app.post('/country', async (req, res) => {

    const name = req.body.name
    // let countryData = [];
    // res.send(name);
    // console.log(name);

    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${name}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                "x-rapidapi-key": "bf8f2686e6mshe2f6d7d85b850a9p12c79fjsnfa71f86408d3"
            }
        }).then(response => response.json())

        // const convertJson = await
            // console.log(json);
            res.send(response)
        // console.log(response);
        // res.send(response)

    } catch (error) {
        console.log('error');

    }





    // .then(data => res.json(data))

    // console.log();

})



app.get('/', (req, res) => {

    // const name = req.body.name
    // fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${name}`, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    //         "x-rapidapi-key": "bf8f2686e6mshe2f6d7d85b850a9p12c79fjsnfa71f86408d3"
    //     }
    // })

    //  .then(res => res.json())
    // .then(data=> res.send(data)) 



})










app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
