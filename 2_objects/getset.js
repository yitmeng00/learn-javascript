let contact = {
    _age: 36,
    firstName: "David",
    lastName: "Taylor",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    get age() {
        return this._age;
    },
    set age(a) {
        if (a > 0) this._age = a;
    },
};

console.log(contact.fullName);
contact.age = 20;
console.log(contact.age);
