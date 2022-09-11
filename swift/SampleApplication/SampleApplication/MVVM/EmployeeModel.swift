//
//  EmployeeModel.swift
//  SampleApplication
//
//  Created by Arvind on 11/09/22.
//

import Foundation

struct Employee : Identifiable {
    let id: String = UUID().uuidString
    var name : String
    var age : Int
    var city : String
}
