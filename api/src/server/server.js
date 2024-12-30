import app from "../app.js";
import config from "../config/config.js";



app.listen((config.port), () => {
    console.log()
    console.log()
    console.log(`Server running on port  http://localhost:${config.port}`);
    console.log()

});
