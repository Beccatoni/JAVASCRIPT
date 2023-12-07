class Thermostat{
    constructor(fahreneit){
        this._fahreneit = fahreneit;
    }

    get temperature(){
        return (5/9)*(this._fahreneit - 32)
    }
    set temperature(celcius){
        return this._fahreneit = (celcius * 9.0) / 5 +32;
    }
}