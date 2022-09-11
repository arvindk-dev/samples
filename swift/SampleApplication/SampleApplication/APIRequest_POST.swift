//
//  APIRequest_POST.swift
//  SampleApplication
//
//  Created by Arvind on 10/09/22.
//

import SwiftUI

// Create model
struct UploadData: Codable {
    let userId: Int
    let title: String
    let body: String
}

struct APIRequest_POST: View {
    let constVal: String = "Const"
    @State var responseText : String? = nil
    var body: some View {
        Button("POST Request", action: {
            postMethod()
        })
        Text(responseText ?? "")
        
        Text(constVal)
    }
    func postMethod() {
            guard let url = URL(string: "https://jsonplaceholder.typicode.com/posts") else {
                print("Error: cannot create URL")
                return
            }
            
            // Add data to the model
            let uploadDataModel = UploadData(userId: 101, title: "POST Request from SwiftUI", body: "Just a random body for POST request...Just a random body for POST request...Just a random body for POST request...Just a random body for POST request...Just a random body for POST request...Just a random body for POST request...Just a random body for POST request")
            
            // Convert model to JSON data
            guard let jsonData = try? JSONEncoder().encode(uploadDataModel) else {
                print("Error: Trying to convert model to JSON data")
                return
            }
        
            // Create the url request
            var request = URLRequest(url: url)
            request.httpMethod = "POST"
            request.setValue("application/json", forHTTPHeaderField: "Content-Type") // the request is JSON
            request.setValue("application/json", forHTTPHeaderField: "Accept") // the response expected to be in JSON format
            request.httpBody = jsonData
            URLSession.shared.dataTask(with: request) { data, response, error in
                guard error == nil else {
                    print("Error: error calling POST")
                    print(error!)
                    return
                }
                guard let data = data else {
                    print("Error: Did not receive data")
                    return
                }
                guard let response = response as? HTTPURLResponse, (200 ..< 299) ~= response.statusCode else {
                    print("Error: HTTP request failed")
                    return
                }
                do {
                    guard let jsonObject = try JSONSerialization.jsonObject(with: data) as? [String: Any] else {
                        print("Error: Cannot convert data to JSON object")
                        return
                    }
                    guard let prettyJsonData = try? JSONSerialization.data(withJSONObject: jsonObject, options: .prettyPrinted) else {
                        print("Error: Cannot convert JSON object to Pretty JSON data")
                        return
                    }
                    guard let prettyPrintedJson = String(data: prettyJsonData, encoding: .utf8) else {
                        print("Error: Couldn't print JSON in String")
                        return
                    }
                    
                    print(prettyPrintedJson)
                    responseText = prettyPrintedJson
                } catch {
                    print("Error: Trying to convert JSON data to string")
                    return
                }
            }.resume()
        }
}

struct APIRequest_POST_Previews: PreviewProvider {
    static var previews: some View {
        APIRequest_POST()
    }
}
