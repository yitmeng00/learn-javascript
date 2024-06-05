function getCapitalCity(country) {
    fetch(`https://jsonmock.hackerrank.com/api/countries?name=${country}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.data && data.data.length > 0) {
                const countryData = data.data[0];
                console.log(countryData.capital);
            } else {
                console.log(-1);
            }
        })
        .catch((error) => {
            console.error("Error fetching country data: ", error);
        });
}

getCapitalCity("Malaysia");
