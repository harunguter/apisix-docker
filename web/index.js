const express = require("express");

for (let port = 5000; port < 5010; port++) {
    const data = "web app " + (port - 4999).toString();
    express()
        .get("/", (req, res) => 
        res.json({
            status: "ok",
            data: data
        }))
        .listen(port, () => 
            console.log(data + " listen " + port)
        )
}

