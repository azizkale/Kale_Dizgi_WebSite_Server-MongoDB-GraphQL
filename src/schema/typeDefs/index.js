const typeDefs = `
type Query{
    getImages(path: String!):[Image]
    getGalleryInfos:[Gallery!]
    getUsers(path: String!):[User]
}

type Mutation {
    addImage(path:String, image:String):Image
    addGallery(path: String, gallery: String): Gallery
    updateImage(path:String!, image: String!):Image
    deleteImage(path: String!, id: ID!):String
}
type Image {
    id:ID
    url: String
    description: String
    date: String   
    index: Int
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
