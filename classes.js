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
console.log(jarvise.speak());
console.log(jarvise);