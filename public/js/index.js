const Offer = {
    data() {
        return {
            "result": {},
            "offers": [
                {
                    "id": 1,
                    "name": "Jordan",
                    "salary": 100000,
                    "bonus": 10000,
                    "company": "google",
                    "offerDate": "2021-10-12"
                },
                {
                    "id": 2,
                    "name": "Doe",
                    "salary": 200000,
                    "bonus": 20000,
                    "company": "microsoft",
                    "offerDate": "2021-11-12"
                }
            ]
        }
    },
    created() {
        // creating http request, returing a promise immediately. Once its done i will do the then or the catch
        fetch('https://randomuser.me/api')
        // taking the fetch and putting it in variable response, response.json returns promise object
        .then(response => response.json())
        .then((json => {
            // putting json in log so we can inspect it
            console.log("Got json back:", json);
            // updating data value. data binding 
            this.result = json.results[0];
            console.log("C";)
        })
        .catch((error) => {
            console.error(error);
        })
    }
}

Vue.createApp(Offer).mount('#offerApp')