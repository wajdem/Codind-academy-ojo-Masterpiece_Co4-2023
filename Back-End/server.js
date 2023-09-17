require("dotenv").config(); 

const express = require("express"); 
const mongoose = require("mongoose");
const userRoutes = require("./routes/user"); 
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/user", userRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONG_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to the database & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
