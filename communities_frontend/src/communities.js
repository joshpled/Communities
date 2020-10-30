class Community{
    constructor(obj){
        this.name = obj.name
        this.id = obj.id
    }

    static createCommunities(arr){
        return arr.map(x => new Community(x))
    }

    createLiElement(){
        let li = document.createElement('li')
        li.className = "list-group-item"
        li.innerHTML = this.name.toUpperCase()
        li.setAttribute("data-community",this.id)
        return li
    }
}