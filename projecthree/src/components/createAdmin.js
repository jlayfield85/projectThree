import React, { Component } from 'react';

export default class CreateAdmin extends Component {

    constructor(props) {
        super(props);

        this.onChangeAdminDescription = this.onChangeAdminDescription.bind(this);
        this.onChangeAdminResponsible = this.onChangeAdminResponsible.bind(this);
        this.onChangeAdminPriority = this.onChangeAdminPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            admin_description: '',
            admin_responsible: '',
            admin_priority: '',
            admin_completed: false
        }
    }

    onChangeAdminDescription(e) {
        this.setState({
            admin_description: e.target.value
        });
    }

    onChangeAdminResponsible(e) {
        this.setState({
            admin_responsible: e.target.value
        });
    }

    onChangeAdminPriority(e) {
        this.setState({
            admin_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`New Admin Description: ${this.state.admin_description}`);
        console.log(`New Admin Responsible: ${this.state.admin_responsible}`);
        console.log(`New Admin Priority: ${this.state.admin_priority}`);
        console.log(`New Admin Completed: ${this.state.admin_completed}`);


        this.setState({
            admin_description: '',
            admin_responsible: '',
            admin_priority: '',
            admin_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Admin</h3>
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

                    <div className="form-group">
                        <input type="submit" value="Create Admin" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }}