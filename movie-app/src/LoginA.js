import './login.css';
import {useSelector,useDispatch } from 'react-redux';
import {email,password,login} from "./Action/Loginaction";

function LoginA() {

    const dispatch=useDispatch();
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
        e.preventDefault();
        dispatch(login());
    }
console.log(errorLog.error);
  return (
    <>
 
  <div className="container">
  <div className="row">
    <div className="col-lg-3 col-md-2" />
    <div className="col-lg-6 col-md-8 login-box">
      <div className="col-lg-12 login-key">
        <i className="fa fa-key" aria-hidden="true" />
      </div>
      <div className="col-lg-12 login-title">ADMIN PANEL</div>
      <div className="col-lg-12 login-form">
        <div className="col-lg-12 login-form">
          <form onSubmit={(e)=>Fun(e)}>
            <div className="form-group">
              <label className="form-control-label">Email</label>
              <input type="text" className="form-control" onChange={(e)=>dispatch(email(e.target.value))}/>
            </div>
            <div className="form-group">
              <label className="form-control-label">PASSWORD</label>
              <input type="password" className="form-control" i="" onChange={(e)=>dispatch(password(e.target.value))}/>
            </div>
            <span>{errorLog.error}</span>
            <div className="col-lg-12 loginbttm">
              <div className="col-lg-6 login-btm login-text">
                {/* Error Message */}
              </div>
              <div className="col-lg-6 login-btm login-button">
                <button type="submit" className="btn btn-outline-primary">
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-3 col-md-2" />
    </div>
  </div>
</div>


</>
  )
}

export default LoginA