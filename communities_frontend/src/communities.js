class Community{
    constructor(obj){
        this.name = obj.name
    }

    static createCommunities(arr){
        return arr.map(x => new Community(x))
    }

}