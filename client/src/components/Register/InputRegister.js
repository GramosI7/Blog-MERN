import React from 'react';
import classnames from "classnames";


const InputRegister = (props) => {
    const { errors } = props;
    return (
        <form onSubmit={props.submitRegister}>
            <h1 className="text-center">Register</h1>

            <div className="form-group">
                <label>First Name</label>
                <input onChange={props.handleOnChange} name="firstName" type="text" className={classnames("form-control", {"is-invalid" : errors.firstName})} placeholder="Enter your First Name"/>
                {errors.firstName && (<div className="invalid-feedback">{errors.firstName}</div>)}
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input onChange={props.handleOnChange} name="lastName" type="text"  className={classnames("form-control", {"is-invalid" : errors.lastName})} placeholder="Enter your Last Name"/>
                {errors.lastName && (<div className="invalid-feedback">{errors.lastName}</div>)}
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input onChange={props.handleOnChange} name="email" type="email" className={classnames("form-control", {"is-invalid" : errors.email})} placeholder="Enter your email"/>
                {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
            </div>

            <div className="form-group">
                <label>Password</label>
                <input onChange={props.handleOnChange} name="password" type="password" className={classnames("form-control", {"is-invalid" : errors.password})} placeholder="Enter a Password"/>
                {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input  onChange={props.handleOnChange} name="password2" type="password" className={classnames("form-control", {"is-invalid" : errors.password2})} placeholder="Confirm Password" />
                {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
            </div>

            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
}

export default InputRegister;
