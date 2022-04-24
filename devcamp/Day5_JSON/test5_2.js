let resultDisplay = document.getElementById("resultDisplay");
let textHtml = `<table><tr><td>Category</td>`;
let covidData = {
    thailand: {},
    World: {},
};

function thailand(callback) {
    axios
        .get("https://corona.lmao.ninja/v2/countries/thailand ")
        .then(function (response) {
            // debugger;
            covidData.thailand.cases = response.data.cases;
            covidData.thailand.todayCases = response.data.todayCases;
            covidData.thailand.deaths = response.data.deaths;
            covidData.thailand.todayDeaths = response.data.todayDeaths;
            covidData.thailand.recovered = response.data.recovered;
            covidData.thailand.todayRecovered = response.data.todayRecovered;
            covidData.thailand.active = response.data.active;
            covidData.thailand.critical = response.data.critical;
            callback();
        });
}

function world(callback) {
    axios.get("https://corona.lmao.ninja/v2/all ").then(function (response) {
        covidData.World.cases = response.data.cases;
        covidData.World.todayCases = response.data.todayCases;
        covidData.World.deaths = response.data.deaths;
        covidData.World.todayDeaths = response.data.todayDeaths;
        covidData.World.recovered = response.data.recovered;
        covidData.World.todayRecovered = response.data.todayRecovered;
        covidData.World.active = response.data.active;
        covidData.World.critical = response.data.critical;
        callback();
    });
}

thailand(function () {
    for (let j in covidData.thailand) {
        textHtml += `<td>`;
        textHtml += j;
        textHtml += `</td>`;
    }

    textHtml += `</tr><tr><td>World</td>`;

    world(function () {
        console.log(covidData);
        for (let l in covidData.World) {
            console.log(covidData.World[l]);
            textHtml += `<td>`;
            textHtml += covidData.World[l];
            textHtml += `</td>`;
        }
        textHtml += `</tr><tr><td>Thailand</td>`;
        for (let g in covidData.thailand) {
            console.log(covidData.thailand[g]);
            textHtml += `<td>`;
            textHtml += covidData.thailand[g];
            textHtml += `</td>`;
        }

        textHtml += "</tr></table>";
        resultDisplay.innerHTML = textHtml;
    });
});