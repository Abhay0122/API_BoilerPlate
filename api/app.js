const express = require("express");
const app = express();
require("dotenv").config({ path: "./.env" });

// logging
const logger = require("morgan");
app.use(logger("tiny"));

// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
const indexRoutes = require("./routes/indexRouter");

// error handling
const ErrorHandler = require("./utils/errorHandler");
const { createErrors } = require("./middleware/errors");
app.use("/", indexRoutes);
app.all("*", (req, res, next) => {
    next(new ErrorHandler(`Requested URL ${req.path} not found`, 404));
})
app.use(createErrors);

app.listen(process.env.PORT, console.log(`server is running on port ${process.env.PORT}`));



