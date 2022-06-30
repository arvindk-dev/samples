package com.example.myapplication.SampleClass

import com.google.android.material.internal.ManufacturerUtils

public open class Vechicle(var strVechicleType: String){

}

class Bike ( var bikeName: String, var bikeModel: String, strVechicleType: String) : Vechicle(strVechicleType){
//class Bike () {
    //var bikeName: String? = null;
    //var bikeModel: String? = null;
    var bikeManufacturer: String? = null;

    init {
        //if(bikeName is String)
            //this.bikeName = bikeName;
        //this.bikeModel = bikeModel;
        bikeManufacturer = "asdf";
        println("Initializer called")
    }

    constructor(bikeName:String, bikeModel: String, bikeManufacturer: String, strVechicleType:String) : this(bikeName, bikeModel, strVechicleType) {
        this.bikeManufacturer = bikeManufacturer;
        println("Constructor Invoked")
    }

    fun getBikeDetails(){
        println(this.bikeName)
    }
}



