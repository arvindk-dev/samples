package com.example.myapplication

import com.example.myapplication.SampleClass.Bike
import kotlin.reflect.typeOf

fun main(){
    //print("aa")
    //println("bb")
    //print("cc")

    var a : String? = null
    var d : String? = a as? String;
    //println(d)


    var frontEnd = "kotlin"
    var backEnd = ".Net Core"
    var fullStack = "Fullstack:$frontEnd $backEnd";
    //println(fullStack);
    //strName.
    //print(a);

    var b = "5"
    //var c: Int = b as Int



    //val b: Int = 19;
    //b = 1;

    var pi = 22.0f/7.0f;
    //println(pi);

    subFunction(b=1,a=3) //1 to 10
}

fun subFunction(a: Int = 2, b: Int){
    //var a = a;
    println(a)
   /* print(a is String);

    var b: Int = 7;
    print(b is Int)
    */

    /*switch(a){
        case 1:
        case 2:
        case 3
        case 4
        case 5: {}

        default:
    }

     */

    when(a){
        1 -> {
            print("Level 1")
            print("Block")
        }
        2 -> print("Level 2")
        3 -> print("Level 3")
        //3,4,5,6,7,8,9,10.....-> print("Common values")
        in 3..100 -> print("3 to 100")
        !in 8 downTo 3 -> print("")
        else -> print("Default")
    }



}

fun sample (a: Entity) : Entity{
    //return "1"

    var objEntity :Entity
    return  Entity();
}

fun singleLineFunction(a: String)= a.toUpperCase();


class Entity{

}

var strName: String = ""

var objBike : Bike = Bike("abc", "qwe")

var objBike2 = Bike("qwe", "asd", "zxc");