const address = {
    street: "",
    city: "",
    country: "",
};

// // old way
// const street = address.street;
// const city = address.city;
// const country = address.country;

// modern js
const { street, city, country } = address;

console.log(street, city, country);
