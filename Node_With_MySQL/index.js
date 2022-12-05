var mysql = require('mysql');

var DatabaseConnectionConfig = {host:"localhost", user:"root", password:"", database:"school"
}


var connection = mysql.createConnection(DatabaseConnectionConfig);

connection.connect(function (error){
    if(error){console.log("connection failed");}
    else{
        console.log("connection success");
        //InsertData(connection);
        //DeleteDataByID(connection);
        //UpdateData(connection);
        SelectData(connection);
    }
});


function InsertData(connection){
    let SQLQuery = "INSERT INTO `student_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('silviya','05','eight','0170000014','Dhaka ')"
    connection.query(SQLQuery, function (error){
        if(error){
            console.log("Data insert fail");
        }
        else{
            console.log("Data insert success");
        }

    })

}

function DeleteDataByID(connection){
    let SQLQuery = "DELETE FROM `student_list` WHERE  `id`='2' ";
    connection.query(SQLQuery,function (error){
        if(error){
            console.log("Data delete fail");
        }
        else{
            console.log("Data delete success");
        }
    })
}

function UpdateData(connection){
    let SQLQuery = "UPDATE `student_list` SET `phone`='01731755438',`city`='Kapasia' WHERE `id`='1'";
    connection.query(SQLQuery,function (error){
        if(error){
            console.log("Data update fail");
        }
        else{
            console.log("Data update success");
        }
    })
}

function  SelectData(connection){
    let SQLQuery = "SELECT * FROM `student_list`";
    connection.query(SQLQuery, function (error, result){
        if(error){
            console.log("Select data fail");
        }
        else{
            console.log(result);
        }
    })
}






















