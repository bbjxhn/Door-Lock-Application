const app = require('./app.js');
const path = require('path');
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
