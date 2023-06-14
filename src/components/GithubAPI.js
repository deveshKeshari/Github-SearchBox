import React, {Fragment} from "react";
import axios from "axios";
import GithubProfile from "./GithubProfile";
import { clientId,clientSecret } from "./GithubCredentials";
import GithubRepos from "./GithubRepos";

class GithubAPI extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            profile:null,
            repos:null
        }
    }

    updateInput = (e) =>{
        this.setState({
            ...this.state,
            username:e.target.value
        });
    };

    searchUser=(e)=>{
        e.preventDefault();
        this.searchProfile();
        this.searchRepos();
    };

    searchProfile=()=>{
        axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
        .then((response)=>{
            this.setState({
                profile:response.data
            })
        }).catch((err)=>{
            console.error(err);
        });
    };

    searchRepos=()=>{
        axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
        .then((response)=>{
            this.setState({
                repos:response.data
            })
        }).catch((err)=>{
            console.error(err);
        });
    };

    render(){
        return(
            <Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Github User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form className="row" onSubmit={this.searchUser}>
                                        <div className="col-md-4">
                                            <input value={this.state.username} onChange={this.updateInput} type="text" className="form-control" placeholder="Username"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="submit" value="Search" className="btn btn-secondary btn-sm bg-secondary" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                {
                                    this.state.profile?
                                    <GithubProfile profile={this.state.profile}/>:null
                                }
                            </div>
                        </div>
                    </div>

                    <div className="container mt-3">
                        <div className="row">
                            <div className="col">
                                {
                                    this.state.repos?
                                    <GithubRepos repos={this.state.repos} />:null
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default GithubAPI;