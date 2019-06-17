class person {
    constructor(stats){
        this.name = stats.name;
        this.age = stats.age;
        this.movie = stats.movie;
    }
    speak(){
        return "Hi there, my name is ${this.name}"
    }
}
const jarvise = new person({
    "name": "Jarvise",
    "age": "22",
    "movie": "One flew over the Cuckoo's Nest"
})
class teacher extends person{
    constructor(addons){
        super(addons);
        this.Specialty = addons.specialty;
        this.location = addons.location;
    }
}
let Carl = new teacher({
    "name": "Carl",
    "age": "22",
    "movie": "One flew over the Cuckoo's Nest",
    "specialty": "Python",
    "location": "Toronto"
})
console.log(jarvise.speak());
console.log(jarvise);
console.log(Carl);