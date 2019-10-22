import React, { Component } from 'react';
import axios from 'axios';

export default class AddAdmin extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            admin_description: '',
            admin_responsible: '',
            admin_priority: '',
            admin_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/ratemyadmin/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    admin_description: response.data.admin_description,
                    admin_responsible: response.data.admin_responsible,
                    admin_priority: response.data.admin_priority,
                    admin_completed: response.data.admin_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    
    render() {
        return (
            <div>
                <h3 align="center">Update Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.admin_description}
                                onChange={this.onChangeAdminDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.admin_responsible}
                                onChange={this.onChangeAdminResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.admin_priority==='Low'} 
                                    onChange={this.onChangeAdminPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.admin_priority==='Medium'} 
                                    onChange={this.onChangeAdminPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.admin_priority==='High'} 
                                    onChange={this.onChangeAdminPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeAdminCompleted}
                                checked={this.state.admin_completed}
                                value={this.state.admin_completed}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }