// const express = require('express');
// const app = express();
// const port = 3000; // You can change this port number if needed

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });



const express = require('express');
const app = express();



app.use (express.static (`${__dirname}/public`));
app.set ('view engine', 'ejs');

app.get('/home', (req,res) => {
    res.render('index');
})

app.listen(3001, () => {
    console.log("server Running!");
})