//
//  ImageView.swift
//  SampleApplication
//
//  Created by Arvind on 09/09/22.
//

import SwiftUI

struct ImageView: View {
    var body: some View {
        //SwiftUI.Image("smokies")
        AsyncImage(url: URL(string: "https://developer.apple.com/news/images/og/swiftui-og.png"))
            //.resizable()
            .frame(width: 200, height: 200)
        
        
//        AsyncImage(url: URL(string: "https://developer.apple.com/news/images/og/swiftui-og.png")) { image in
//            image
//                .resizable()
//                .scaledToFit()
//        } placeholder: {
//            Color.red
//        }
//        .frame(width: 200, height: 200)
        
        
//        AsyncImage(url: URL(string: "https://hws.dev/img/bad.png")) { phase in
//            if let image = phase.image {
//                image
//                    .resizable()
//                    .scaledToFit()
//            } else if phase.error != nil {
//                Text("There was an error loading the image.")
//            } else {
//                ProgressView()
//            }
//        }
//        .frame(width: 200, height: 200)
        
    }
}

struct ImageView_Previews: PreviewProvider {
    static var previews: some View {
        ImageView()
    }
}
