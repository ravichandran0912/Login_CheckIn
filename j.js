window.addEventListener("scroll", function() {


          let current_possition = window.scrollY;
          let Total_height = document.documentElement.scrollHeight;
          let visbile_height = window.innerHeight;
          let max_height = Total_height - visbile_height;

          let percentage = (max_height > 0) ? (current_possition / max_height) * 100 : 100;



          document.getElementById("Tracking_bar").style.width = percentage + "%";

      })
      //Post Data in Mysql

  document.getElementById("submit").addEventListener("click", async function() {


      let UserName = document.getElementById("UserName").value;
      let Password = document.getElementById("Password").value;
      let ConformPassword = document.getElementById("CPassword").value;



      console.log(UserName);
      console.log(Password);
      console.log(ConformPassword);

      if (UserName != "" && Password != "" && ConformPassword != "") {


                  

                  const url = "http://localhost:9009/postData/mysql";

                  const playLoad = {

                    name:UserName,
                    password:Password,
                    confromPassword:ConformPassword
                  };

                  try{
                    const response = await fetch(url,{

                            method:"POST",
                            headers:{
                                "Content-Type":"application/json; charset=UTF-8"
                            },
                            body:JSON.stringify(playLoad)
                    });

                    if(!response.ok){
                        throw new Error(`Response Error : ${response.status}`);
                    }
                    const data = await response.json();
                    console.log("Success: ",data);
                  }
                  catch(error){
                    console.error("Error: ",error);
                  }
                 

                  }

             else {
          alert("Please Enter All Fields");

      }

    


  });
  //GetMapping

document.getElementById("check").addEventListener("click", async function() {



          let UserName = document.getElementById("user_name").value;
          let Password = document.getElementById("pass_word").value;


          console.log(UserName);

    const urll = "http://localhost:9009/GetData/mysql";

    try {

        const response = await fetch(urll, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error("Response Error: " + response.status);
        }

        const data = await response.json();

             let flag = true;
            console.log("----------------------");
         
            for(let i=0;i<data.length;i++){

                
               let Name = data[i].name;
                let Pass = data[i].password;
               //console.log(data);
              
               if(UserName==Name && Password==Pass){
                           
                   alert("Hello User");
                   flag = false;


                   return;
               }

            }
            if(flag){
              alert ("Invalid User ! ");
            }
    } 
    catch(error) {
        console.error("Error:", error);
    }

});

