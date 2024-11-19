const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/timeRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Use routes defined in timeRoutes.js
app.use('/', routes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
