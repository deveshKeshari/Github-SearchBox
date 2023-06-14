import React, {Fragment} from "react";

class GithubRepos extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <Fragment>
                <div className="card">
                    <div className="card-header bg-light text-black">
                        <h3>Github Repos</h3>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                           {
                                this.props.repos.map((repo)=>{
                                    return (
                                        <li className="list-group-item">
                                            <a href={repo.html_url}>{repo.name}</a>
                                            <span className="badge bg-success mx-5">{repo.stargazers_count} Stars</span>
                                            <span className="badge bg-warning mx-5">{repo.watchers_count} Watches</span>
                                        </li>
                                    )
                                })
                           }
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default GithubRepos;