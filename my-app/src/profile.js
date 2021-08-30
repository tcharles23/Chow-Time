import React from 'react';
import ReactDOM from 'react-dom';
import {AxiosProvider,Request, Get, Delete,Head, Post, Put, Patch, withAxios} from 'react-axios'

class profile extends React.Component{
    constructor(props){
        super(props);
        this.getProfile = this.getProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.state ={
            name:'',
            email:'',
            password:'',

        };
    }
    componentDidMount(){
        document.getElementById('addHyperLink').className = "";
        document.getElementById('homeHyperLink').className = "";
        document.getElementById('profifleHyperLink').className = "active";
        this.getProfile();
    }
    updateProfile(){
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log('Succuessfully Signed Up');

            })
        .catch((err) => {
            console.log('Error: ' + err.toString());
        })

    }

    getProfile(){
        var self = this;
        axios.post('/getProfile',{
    
        })
        .then(function (respons){
            if(response){
                self.setState({name:response.data.name});
                self.setState({email:response.data.email});
                self.setState({password:response.data.password});
    
            }
        })
        .catch(function (error) {
            console.log('error is ',error)
        })
    }

    render(){
        return (
            <div className="col-md-5">
                <div className="form-area">
                    <form role="form">
                        <br styles="clear:both"/>
                        <div className="form-group">
                            <input value={this.state.name} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required/>

                        </div>
                        <div className="form-group">
                            <input value={this.state.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required/>

                        </div>

                        <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
                    </form>
                </div>
            </div>
        )
    }

    



        
}

export default profile;