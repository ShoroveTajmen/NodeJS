//try to connect database cluster
//'mongodb' --> it's a module or library  and MongoClient is a property


var MongoClient = require('mongodb').MongoClient;

//this is the connection of whole database
var URL = "mongodb+srv://Sorovi:9cvZOEfqMw1rNDnH@cluster0.1m2zosk.mongodb.net?retryWrites=true&w=majority"; //for connection using specific cluster URL


//if we want to connect specific database then we just mention our database name after .net/
//var URL = "mongodb+srv://Sorovi:9cvZOEfqMw1rNDnH@cluster0.1m2zosk.mongodb.net/demo?retryWrites=true&w=majority"; //for connection used specific cluster URL


//connection build with mongodb cluster using connect function or established connection with database
//for data insertion in callback function we need another parameter MyMongoClient
//via MyMongoClient we can access out database and database collection also we can insert,update ,delete etc

MongoClient.connect(URL,function (error,MyMongoClient){
    if(error){
        console.log("connection fail");
    }
    else{
        console.log("connection success");
        //InsertData(MyMongoClient);
        //DeleteOneItem(MyMongoClient);
        //DeleteAllItem(MyMongoClient);
        //FindOneWithoutCondition(MyMongoClient);
        //FindOneWithCondition(MyMongoClient);
        //FindAllData(MyMongoClient);
        //FindAllDataByProjection(MyMongoClient);
        //FindAllDataByQuery (MyMongoClient);
        //FindAllDataByLimit(MyMongoClient);
        //FindAllDataBySort(MyMongoClient);
        //UpdateMyData(MyMongoClient);
        //CreateMyCollection(MyMongoClient);
        DeleteMyCollection(MyMongoClient);
    }
});



//for insertion data in database
function InsertData(MyMongoClient) {
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");
    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    var MyData = {name: "Nova", Roll: "04", Class: "Ten", City: "Dhaka"};


    //for data insertion we called data insertionOne method
    MyCollection.insertOne(MyData, function (error) {
        if (error) {
            console.log("data insert failed")
        } else {
            console.log("data insert success");
        }

    })

}


//delete data using DeleteOne() mrthod
function DeleteOneItem(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    var DeleteItem = {Roll:"01"};


    //for one item deletion we used deleteOne() method
    MyCollection.deleteOne(DeleteItem,function (error){
        if (error) {
            console.log("data delete failed")
        } else {
            console.log("data delete success");
        }

    });

}


//for delete all item we used deleteMany() method

function DeleteAllItem(MyMongoClient){

    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    MyCollection.deleteMany(function (error,ResultObj){
        if(error){
            console.log("data deletion failed");
        }
        else{
            console.log(ResultObj);
        }
    })
}


//Item find without condition
function FindOneWithoutCondition(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    //for find data we used findOne() method
    //if we don't declare a condition in FindObj variable then only first json item will be show in terminal
    var FindObj={}; //FindObj is the finding object
    MyCollection.findOne(FindObj, function (error,result){
        console.log(result);

    })


}

//Item find with condition
function FindOneWithCondition(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    //for find data we used findOne() method
    //if we want to declare a condition in FindObj variable then mention the condition like that

    var FindObj={Roll: "03"}; //FindObj is the finding object
    MyCollection.findOne(FindObj, function (error,result){
        console.log(result);

    })


}


//find all data
function FindAllData(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    MyCollection.find().toArray(function (error,result){
        console.log(result);
    })
}


//find data using projection
//projection means which data i want (for specific column find specific data)
function FindAllDataByProjection(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    var ItemObj = {}
    var ItemProjection = {projection:{Roll:1}}

    MyCollection.find(ItemObj,ItemProjection).toArray(function (error,result){
        console.log(result);
    })
}


//find data using query

function FindAllDataByQuery(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    var Query = {Roll:"01",City:"Barishal"}

    MyCollection.find(Query).toArray(function (error,result){
        console.log(result);
    })
}

//using limit method to showing limited data

function FindAllDataByLimit(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    MyCollection.find().limit(2).toArray(function (error,result){
        console.log(result);
    })
}


//we can use sort() method to visualize data with sorted
//here 1 means data sorted by ascending order and -1 means data sorted by descending order
//we can sorted data

function FindAllDataBySort(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    var SortPattern = {Roll:-1}

    MyCollection.find().sort(SortPattern).toArray(function (error,result){
        console.log(result);
    })
}

//updateOne() function take three parameters like search query,new value,,callback function

function UpdateMyData(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    //from MyDataBase we want to connect database collection
    var MyCollection = MyDatabase.collection('students');

    var MyQuery = {Roll:"04"};
    var MyNewValues = {$set: {name:"Shorove Tajmen",City:"Pabna"}}

    MyCollection.updateOne(MyQuery,MyNewValues,function (error,result){
        console.log(result);
    })
}


//create new collection
function CreateMyCollection(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    MyDatabase.createCollection("teachers",function (error,result){
        console.log(result);

    })


}

//delete collection
function DeleteMyCollection(MyMongoClient){
    //db methods used for specify which database we want to connect
    var MyDatabase = MyMongoClient.db("school");

    MyDatabase.dropCollection("teachers",function (error,result){
        console.log(result);
    })
}








