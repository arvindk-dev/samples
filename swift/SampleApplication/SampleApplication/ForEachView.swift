//
//  ForEachView.swift
//  SampleApplication
//
//  Created by Arvind on 03/09/22.
//

import SwiftUI

struct ForEachView: View {
    var array = [1,2,3,4,5,6,7,8]
    
    var body: some View {
        List{
            ForEach(array, id: \.self){
                //Text("Item \(i)")
                Text("Item \($0)")
            }
        }
        //Image("smokies")
    }
}

struct ForEachView_Previews: PreviewProvider {
    static var previews: some View {
        ForEachView()
    }
}


//[].forEach(() => {})
