require('dotenv').config();

const app = require('express')();


app.get('/GET-TOP-HEADLINES/*', async (req, res) => {
    const params = JSON.parse(req.params[0])
    console.log(params.country)
    console.log(process.env.api_key)
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${params.country}`,
    {
        method: 'GET',
        headers: {
            'X-Api-Key': process.env.NEWS_API_KEY
        }
    }
    )

    const data = await response.json()
    console.log(data)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
});


app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});