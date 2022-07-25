import axios from "axios";

let user ='';
const loginReducer=(state={error:''},action)=>{


    switch(action.type){
        
        case "email":
            if(action.email !==''){
                return {...state,email:action.email};
            }
            break;
        case "password":
            if(action.password !==''){
                return {...state, password:action.password}
            }
            break;
        case "LOGIN":
                const loadInfo = async () => {
                const res = await axios.get('http://localhost/Redux-project-8/BackEnd/login.php?email='+state.email+'&password='+state.password);
                sessionStorage.clear()
                sessionStorage.setItem("user_info", res.data);
                console.log(res.data);
                let user_info= sessionStorage.getItem("user_info");

                if(user_info != ''){
                    window.location.href = "/Admin";
                }
                return {...state, error: ' email or password is invalid'}
            
  
            };
            loadInfo();
            
            
        default:
            return state;
    }
    
    
    
}
export default loginReducer;