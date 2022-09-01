exports = function(payload){
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("College_student").collection("College");
    
    let docs = mycollection.find({}).toArray();
    
    return docs;
};