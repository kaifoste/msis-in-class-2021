const Offer = {
    data() {
        return {
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
    }
}

Vue.createApp(Offer).mount('#offerApp')