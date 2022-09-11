//
//  EmployeeViewModel.swift
//  SampleApplication
//
//  Created by Arvind on 11/09/22.
//

import Foundation

class EmployeeViewModel : ObservableObject {
    
    @Published var employees : [Employee] = []
    @Published var isLoading : Bool = false
    
    init() {
        getEmployees()
    }
    
    func getEmployees(){
        
        isLoading = true
        
        let emp1 = Employee(name: "John", age: 25, city: "Bangalore")
        let emp2 = Employee(name: "Finch", age: 26, city: "Chennai")
        let emp3 = Employee(name: "Sara", age: 27, city: "Hyderabad")
        let emp4 = Employee(name: "Reese", age: 25, city: "Delhi")

        DispatchQueue.main.asyncAfter(deadline: .now() + 3.0, execute: {
            self.employees.append(emp1)
            self.employees.append(emp2)
            self.employees.append(emp3)
            self.employees.append(emp4)
            
            self.isLoading = false
        })
    }
    
    func removeEmployee(index: IndexSet){
        employees.remove(atOffsets: index)
    }
}
