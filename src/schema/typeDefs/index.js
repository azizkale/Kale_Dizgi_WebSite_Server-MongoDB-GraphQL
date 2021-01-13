const typeDefs = `
type Query{
    getImages(galleryID: String!):[Image]
    getGalleryInfos:[Gallery!]
    getUsers(path: String!):[User]
}

type Mutation {
    addImage(image:String):Image
    updateImage(path:String!, image: String!):Image
    deleteImage(id: ID!): String
    addGallery(gallery: String): Gallery
    deleteGallery(id:ID!): String
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
