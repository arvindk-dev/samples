//
//  AsyncAwait.swift
//  SampleApplication
//
//  Created by Arvind on 02/09/22.
//

import Foundation


struct Image{
    
}


struct ImageProcess{

//func processImageData1(completionBlock: (_ result: Image) -> Void) {
//    loadWebResource("dataprofile.txt") { dataResource in
//        loadWebResource("imagedata.dat") { imageResource in
//            decodeImage(dataResource, imageResource) { imageTmp in
//                dewarpAndCleanupImage(imageTmp) { imageResult in
//                    completionBlock(imageResult)
//                }
//            }
//        }
//    }
//}
//
//processImageData1 { image in
//    display(image)
//}
    
    
// Async await
//    func loadWebResource(_ path: String) async throws -> Resource
//    func decodeImage(_ r1: Resource, _ r2: Resource) async throws -> Image
//    func dewarpAndCleanupImage(_ i : Image) async throws -> Image
//
//    func processImageData() async throws -> Image {
//      let dataResource  = try await loadWebResource("dataprofile.txt")
//    // new functionality
//      let dataResource2  = try await loadWebResource("dataprofile23.txt")
//      let imageResource = try await loadWebResource("imagedata.dat")
//      let imageTmp      = try await decodeImage(dataResource, imageResource)
//      let imageResult   = try await dewarpAndCleanupImage(imageTmp)
//      return imageResult
//    }

}
