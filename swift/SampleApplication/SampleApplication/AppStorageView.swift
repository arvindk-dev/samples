//
//  AppStorageView.swift
//  SampleApplication
//
//  Created by Arvind on 10/09/22.
//

import SwiftUI

struct AppStorageView: View {
    @AppStorage("name") var currentUserName: String?    // "name" : Emliy
    //@State var currentUserName: String?

    var body: some View {
        VStack(spacing: 20) {
            Text(currentUserName ?? "Name does not exist")
            
            if let name = currentUserName {
                Text(name)
            }
            
            Button("Save".uppercased()) {
                let name: String = "Emily"
                currentUserName = name
            }
        }
    }
}

struct AppStorageView_Previews: PreviewProvider {
    static var previews: some View {
        AppStorageView()
    }
}
