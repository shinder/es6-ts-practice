export default class Person{
    constructor(name='', age=0, gender='male') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString(){
        return JSON.stringify(this.toJSON());
    }
    toJSON(){
        console.log('called toJSON --');
        return {
            name: this.name,
            age: this.age,
            gender: this.gender,
        }
    }
}