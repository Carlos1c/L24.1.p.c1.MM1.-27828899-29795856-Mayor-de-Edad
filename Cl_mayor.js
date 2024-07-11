export default class mayores{
    constructor(){
        this.cantidad=0;
        this.cantidadmayor=0;
    }

    procesarpersonas(e){
        if (e.edad < 50){
            this.cantidad++
        }

        if(e.edad >= 18){
            this.cantidadmayor++
        };
        

    }

    cantidadpersonas(){
        return this.cantidad;
    }

    mayoredad(e){
        return this.cantidadmayor;
    }

    porsentaje(){
        return (this.cantidadmayor / this.cantidad) * 100;
    }
}