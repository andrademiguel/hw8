
const travel = {
    name: "Miguel",
    countries: [
        {
            name: "Spain",
            year: 2017
        },
        {
            model: "Italy",
            year: 2017
        },
        {
            model: "France",
            year: 2017
        }
    ]
};
fetch(
    "https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(travel)
})
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err.message);
    });
