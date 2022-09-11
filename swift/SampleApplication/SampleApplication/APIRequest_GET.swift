//
//  APIRequest.swift
//  SampleApplication
//
//  Created by Arvind on 24/08/22.
//

import SwiftUI

struct JSONResponse: Codable{
    var results: [Result]
}

struct Result: Codable, Hashable{
    var trackId: Int
    var trackName: String
    var collectionName: String
    //var aaaa: String
}

struct APIRequest: View {
    
    @State private var results = [Result]()
    
    var body: some View {
        List(results, id: \.self) { obj in
            VStack(alignment: .leading){
                Text(obj.trackName)
                    .font(.headline)
                Text(obj.collectionName)
            }
        }
        .task {
            await fetchData()
            //await fetchData2()
            

        }
    }
    
    func fetchData() async {
        guard let url = URL(string: "https://itunes.apple.com/search?term=weeknd&entity=song") else{
            print("URL Error")
            return
        }
        
        do{
            let (data, _) = try await URLSession.shared.data(from: url)
            //process data
            if let decodedResponse = try? JSONDecoder().decode(JSONResponse.self, from: data){
                results = decodedResponse.results
            }
        }
        catch{
            print("Fetch Error")
        }
        
    }
}

struct APIRequest_Previews: PreviewProvider {
    static var previews: some View {
        APIRequest()
    }
}
