var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// login
const checkReg = ()=>{
    
    var name=document.getElementById('user').value;  
    var password=document.getElementById('pass').value;  
    
    if (name==null || name=="" || password==""){  
        alert("Name or password can't be blank");  
        return false;  
    }else if(!filter.test(name)|| password.length<8){  
        alert("Incorrect Credentials");  
        return false;  
    }  
    else{
        window.location.href = 'index.html'
        return true
    }   
}
const validReg = ()=>{
    var form = document.getElementById('form')
    var name = document.getElementById('inputEmail0').value
    var pass = document.getElementById('inputPassword').value
    var pass1 = document.getElementById('inputPassword1').value
    var mob = document.getElementById('inputMobile').value
    var error = document.getElementById('errorMsg')
    
    form.addEventListener('submit',(e)=>{
        
        let messages = []

        if(!filter.test(name)){
            messages.push('Invalid email address')
        }

        if(pass.length<8 && pass==pass1){
            messages.push('password length must be greater than 8 characters')
        }
        if(pass!=pass1){
            messages.push('passwords did not matched')
        }
        if(mob.length!=10){
            messages.push('please enter valid mobile number')
        }
        if(!gridCheck.checked){
            messages.push("please agree to the T & C")
        }
        
        if(messages.length>0){

            e.preventDefault()
            error.innerText = messages.join(', ')
        }
        else{
            window.location.href  = 'SignIn.html'
            
            alert('Successfully Registered !!! Now Please login')
            return true;
            
        }
    })
 }
