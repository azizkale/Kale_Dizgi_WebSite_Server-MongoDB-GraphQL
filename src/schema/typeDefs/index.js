const typeDefs = `
type Query{
    getImages(path:String):[Image]
}

type Mutation {
    addImage(path:String, image:String):Image
    updateImage(path:String, url:ID, description:String, date:String, index: Int):Image
    deleteImage(path: String, url: String):String
}
type Image {
    id:ID
    date: String
    description: String
    index: Int
}

type Gallery {
    backGroungImageUrl: String
    fontcolor: String
    fontfamily: String
    fontsize: Int
    gallerytitle: String
    googleFontLink:String
}


`;

module.exports = typeDefs;
