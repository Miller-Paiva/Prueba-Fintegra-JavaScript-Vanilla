var output = document.getElementById('output')
document.getElementById('btn').addEventListener('click',predictName);
let name = document.getElementById('nombreInput');
let Localization = document.getElementById('paisImput');
document.getElementById('nombreInput','paisImput').addEventListener('change',checkName)


function predictName(){
         let name = nombreInput.value.split(',');
         console.log(name);
         let Localization = paisImput.value;

         fetch('https://api.agify.io/?name='+name+'&country_id='+Localization,{ method:'GET'})
         .then(function(response){return response.json();})
         .then(data => {
             if (name != '') {
                output.innerHTML = "La edad es:  " + data.age;
                output.style.display = 'block';

             }else{
                output.style.display = 'none'; 
             }


         })
         .catch(err => console.log(err));
     }

 function checkName(){
     let name = nombreInput.value;
     if (name == '') {
        output.style.display = 'none'; 
     }
}