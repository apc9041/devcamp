let sum = "";

        axios({
            url: "./homework1-4.json",
            responseType: 'json',
            credentials: "include",
            mode: "no-cors",
            headers: {
                "Accept": "application/json; odata=verbose"
            }
        }).then((response) => {
            let jsonData = response.data;
            console.log(jsonData);

            let step1 = jsonData.filter(function (obj) {
                return obj.friends.length >= 2 && obj.gender === "male";

            });
            console.log(step1);

            let stepfn = step1.filter(function (f) {
                return f.name;
            });
            console.log(stepfn)

            let step2 = step1.map(obj => {
                return {
                    name: obj.name,
                    gender: obj.gender,
                    company: obj.company,
                    email: obj.email,
                    friends: obj.friends,

                    balance: parseFloat(obj.balance.replace("$", "").replace(",", "") / 10).toFixed(2).toString()

                }
            });
            console.log(step2);

            sum += `<table class="table">
            <thead><tr>
                
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Company</th>
              <th scope="col">Email</th>
              <th scope="col">Friends</th>
              <th scope="col">Balance</th>
              
            </tr></thead><tbody><tr>`;


            let Data_friends_details = (index_friends) => {
                let sum = "";
                for (let i = 0; i < step2[index_friends].friends.length; i++) {
                    sum += `<li>${step2[index_friends].friends[i].name}</li>`;
                }
                return `<ol>` + sum + `</ol>`;
            };
            


            for (i in step2) {
                console.log(i);

                sum += `<th scope="row">${step2[i].name}</th>`;
                sum += `<td>${step2[i].gender}</td>`;
                sum += `<td>${step2[i].company}</td>`;
                sum += `<td>${step2[i].email}</td>`;
                sum += `<td><ul>${Data_friends_details(i)}</ul></td>`;
                sum += `<td>${step2[i].balance}</td>`;

                sum += `</tr><tr>`;
            };
            sum += `</tr></tbody></table>`;
            document.getElementById("resultDisplay").innerHTML = sum;
        });
