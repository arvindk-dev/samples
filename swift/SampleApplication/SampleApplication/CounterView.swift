//
//  CounterView.swift
//  SampleApplication
//
//  Created by Arvind on 03/09/22.
//

import SwiftUI

struct CounterView: View {
    @State var count = 0 //Data
    var body: some View {
        Text("Count : \(count)") //View
        Button("Increment") {
            count += 1
            print(count)
        }
        
        ChildCounterView(count: $count)
        //TextField("Update Count", text: $count)
    }
}


struct ChildCounterView: View {
    @Binding var count : Int
    var body: some View {
        TextField("Update Count", value: $count, formatter: NumberFormatter())
    }
}

struct CounterView_Previews: PreviewProvider {
    static var previews: some View {
        CounterView()
    }
}
