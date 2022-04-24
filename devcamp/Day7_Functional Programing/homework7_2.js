function todayRecovered() {
    axios
        .get(`https://disease.sh/v3/covid-19/countries`)
        .then(function (response) {
            let allCovidData = response.data;
            console.log(allCovidData);

            let callbackFunction = (sum, obj) => {
                return sum + obj.todayRecovered
            };

            let step2 = allCovidData.reduce(callbackFunction, 0)
            console.log("todayRecovered = " + step2);
            document.getElementById("todayRecovered").innerText = "Today Recovered is " + step2;


            let step3 = allCovidData.filter(function (obj) {
                return obj.todayDeaths < 10 && obj.population > 100000000;

            });
            console.log(step3);

            let map = step3.map(function (obj) {
                return obj.country

            });
            console.log(map);

            let Countries = map
            function studlyCaps(words, word) {
                return words + " " + word + " ";
            }
            let Ncountries = Countries.reduce(studlyCaps);
            console.log("Countries are " + " * " + Ncountries + " * ");
            document.getElementById("countries").innerHTML = "Countries are " + " * " + Ncountries + " * ";


        });

};
todayRecovered()