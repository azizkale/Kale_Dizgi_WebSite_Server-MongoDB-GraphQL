const typeDefs = `
type Query{
    getImages(path: String!):[Image]
    getGalleryInfos:[Gallery!]
    getUsers(path: String!):[User]
}

type Mutation {
    addImage(id:ID, description:String, url:String, index:Int, galleryId:ID, date:String):Image
    updateImage(path:String!, image: String!):Image
    deleteImage(path: String!, id: ID!):String
    addGallery(path: String, gallery: String): Gallery
    deleteGallery(path: String!, id:ID!): String
    updateGallery(path: String!, gallery: String): Gallery
}
type Image {
    id:ID
    url: String
    description: String
    date: String   
    index: Int
    galleryId: ID
}

type Gallery {
    id: ID
    backGroungImageUrl: String
    fontColor: String
    fontFamily: String
    fontSize: Int
    galleryTitle: String
    googleFontLink: String
}
type User {
    id: ID
    password: ID
    userName: String
}


`;

module.exports = typeDefs;
