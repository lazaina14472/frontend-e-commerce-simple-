

export function $id(id) {

    return document.getElementById(id) ;

}





export class input {

    constructor(id) {
        
        this.inpt =$id(id) 

    }

    valeur() {

        return this.inpt.value ;

    }

    vider() {

        return this.inpt.value ="" ;

    }

}





export class message {

    constructor(id) {

        this.msg =$id(id) 

    }

    afficher(txt ,colors) {
        
        this.msg.textContent =txt ;

        this.msg.style.color =colors 

    }

    vider() {

        return this.msg.textContent ="" ;

    }

}

