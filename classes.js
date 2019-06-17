class person {
    constructor(stats){
        this.name = stats.name;
        this.age = stats.age;
        this.favorite_movie = stats.movie;
    }
    speak(){
        return "Hi there, my name is ${this.name}"
    }
}
const jarvise = new person({
    "name": "Jarvise",
    "age": "22",
    "favorite movie": "One flew over the Cuckoo's Nest"
})
console.log(jarvise.speak)