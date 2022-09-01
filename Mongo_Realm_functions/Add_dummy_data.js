exports = function(arg){
    const mongodb = context.services.get("mongodb-atlas");
    const mycollection = mongodb.db("College_student").collection("College");
    
    let Names = ["VIT","SRM","SNS","Hindusthan","Mepco"];
    let Places = ["Chennai","Madurai","Palakad","Mirzapur","Pehalwanpur"];
    let States = ["Tamilnadu","Tamilnadu","Andhra","UP","Madhya Pradesh"];
    let Nums = [10,20,30,100,110];
    let Years = [2001,2002,2003,1997,1998];
    
    const random = Math.floor(Math.random() * months.length);  
    let data = []
    
    for(var i=0;i<100;i++)
    {
        const randomN = Math.floor(Math.random() * 5); 
        const randomP = Math.floor(Math.random() * 5); 
        const randomS = Math.floor(Math.random() * 5); 
        const randomNum = Math.floor(Math.random() * 5); 
        const randomY = Math.floor(Math.random() * 5); 
        data.push({Name: Names[randomN],Place: Places[randomP],State: States[randomS],Year: Years[randomY],Number: Nums[randomNum]})
    }
    
    mycollection.insertMany(data);
    
    return data;
};