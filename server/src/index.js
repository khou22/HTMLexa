// Application entry, setting up server
import app from './app'; // The express app we just created

const port = parseInt(process.env.PORT, 10) || 5555;
app.set('port', port);

// 0.0.0.0 makes it available on your local network
// type: `$ ifconfig` and it's the 192 (?) one
// app.listen(port, '0.0.0.0');
app.listen(port);
