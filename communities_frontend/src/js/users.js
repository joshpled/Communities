class User{
    constructor(obj){
        this.username = obj.username
    }

    static createUsers(arr) {
        return arr.map((x) => new User(x));
      }
}