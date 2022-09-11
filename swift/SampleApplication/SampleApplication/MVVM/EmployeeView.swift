//
//  ModelDataView.swift
//  SampleApplication
//
//  Created by Arvind on 11/09/22.
//

import SwiftUI


struct EmployeeView: View {
    
    @StateObject var empViewModel = EmployeeViewModel()
    
    var body: some View {
        NavigationView{
            List{
                
                if(empViewModel.isLoading){
                   ProgressView()
                }
                else{
                ForEach(empViewModel.employees) { emp in
                    HStack{
                    Text(emp.name)
                    //Text(String(emp.age))
                    }
                }
                .onDelete(perform: empViewModel.removeEmployee)
            }
            }
            .listStyle(GroupedListStyle())
            .navigationTitle("Employee List")
//            .onAppear{
//                empViewModel.getEmployees()
//            }
            .navigationBarItems(trailing:
                NavigationLink(
                    destination: EmployeeDetailsView(empViewModel: empViewModel), label: { Text("View") }
                ))
        }
    }
}


struct EmployeeDetailsView: View{
    
    @ObservedObject var empViewModel: EmployeeViewModel
    var body: some View{
        VStack{
        Text("Details View")
            List(empViewModel.employees){ emp in
                HStack{
                    Text(emp.name)
                    Text(String(emp.age))
                    Text(emp.city)
                }
            }
        }
        
    }
}

struct ModelDataView_Previews: PreviewProvider {
    static var previews: some View {
        EmployeeView()
    }
}
