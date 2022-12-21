<?php
header('Access-Control-Allow-Origin: *');

header('Content-type: application/json');


$conn = new mysqli('achi-mysql', 'root', '123456', 'DevOps-Project');

if ($conn->connect_error) {

  die("Connection failed :( : " . $conn->connect_error);

}


$sql = "SELECT * FROM Devops-Information"; 

if($result = mysqli_query($conn, $sql)){

    if(mysqli_num_rows($result) > 0){

        while($row = mysqli_fetch_array($result)){

           // echo $row['phrase'];

    //$response = array();

    //$response =  $row['Devops-Information'];


      echo $row['Statement']; 
     // echo json_encode($response);

    }

        mysqli_free_result($result);

    } else{

        echo "No records matching your query were found.";

    }

} else{

    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);

}
?>
