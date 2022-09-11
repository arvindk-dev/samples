//
//  ContentView.swift
//  SampleApplication
//
//  Created by Arvind on 06/07/22.
//

import SwiftUI
import Combine

class Person : ObservableObject{
    var updateValues = PassthroughSubject<Void, Never>();
    
    var name : String = "John" {
        didSet { updateValues.send() }
    }
    var age = 20
    var city = "Bangalore"
}

struct ContentView: View {
    
    @State var list = Array (1...1000)
    //@Published var obj = Person()
    //@ObservedObject
    //@Binding var temp : String
    
    
    //@EnvironmentObject var person : Person;
    var body: some View {
        
        VStack{
            
            Button("Reorder"){
                self.list.shuffle()
            }
            
            List(list, id: \.self){
                Text("Item \($0)")
            }.id(UUID())
            
//            TextField("", text: $person.name)
//            TextField("placeholder", text: $person.name)
            
//            Text(person.age)
//            TextField("placeholder", text: $person.age)
        }
        
//        ScrollView{
//            Image("smokies")
//
//
//            Image("smokies")
//            VStack{
//        Color.blue
//        Color.red.opacity(0.3)
//                Color.green
//                Color.black
//            }
//            ScrollView{
//            Text("Hey")
//                .bold()
//                .font(.largeTitle)
//                .padding()
//
//
//            Text("Text")
//            Text("Text")
//            Text("Text")
//            Text("Text")
//            Text("Text")
//            Text("Text")
//
//            Text("Text")
//            Text("test")
//                List{
//                    Text("Text")
//                    Text("Text")
//                    Text("Text")
//                    Text("Text")
//                    Text("Text")
//                    Text("Text")
//
//                    Text("Text")
//                    Text("test")
//                    Text("test")
//                }
//            }
//
//        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
