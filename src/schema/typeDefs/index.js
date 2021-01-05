const typeDefs = `
type Query{
    getImages(path:String):[Image]
}

type Mutation {
    addImage(path:String, description:String, index:Int,url:String):Image
    updateImage(path:String, id:ID, date:String, description:String, index: Int):Image
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
