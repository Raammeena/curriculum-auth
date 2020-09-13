import React, { Component } from 'react';
import classnames from 'classnames';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { value: '', indent: false }
            ],
        }
    }
    inputHandler(e,index) {
        const updatedData = [...this.state.data];
        updatedData[index]['value'] =e.target.value;
        this.setState({data: updatedData});
    }
    addNewItem(){

        const updatedData = [...this.state.data];
        const itemValue = { value: '', indent: false }
        updatedData.push(itemValue);
        this.setState({data: updatedData});
    }
    onDetetItem(index){
        const updatedData = [...this.state.data];
        updatedData.splice(index,1);
        this.setState({data: updatedData});
    }
    onIndentItem(index){
        if(this.state.data[index]['value']){
        const updatedData = [...this.state.data].map( (item,i) =>{
            if(i===index){
                item.indent=true
            }
            return item;
        })
        this.setState({data: updatedData},() => {
            console.log("data ",JSON.stringify(this.state.data));
        });
    }
    }
    onOutdentItem(index){
        if(this.state.data[index]['value']){
        const updatedData = [...this.state.data].map( (item,i) =>{
            if(i===index){
                item.indent=false
            }
            return item;
        })
        this.setState({data: updatedData},() => {
            console.log("data ",JSON.stringify(this.state.data));
        });
    }
    }

    render() {
        const { data } = this.state;
        return (
            <main className="home-page">
                <div>
                    <h4>METHEMATICS</h4>
                    <div className="header-wrapper">
                        <div className="content">
                            <h5>Actions</h5>
                            <p>Move,Indent</p>
                            <p>Outdent,Delete</p>
                        </div>
                        <div className="content">
                            <h5>Standard</h5>
                            <p>The Text of Standardß</p>
                        </div>
                    </div>
                    <div className="data-wrapper">
                    {data.length ?
                        <React.Fragment>
                        {data.map( (item,index) => (
                        <div className="data-row">
                        <div className="left-content">
                            <a><i class="fa fa-arrows" aria-hidden="true"></i></a>
                            <a onClick={() => this.onOutdentItem(index)}><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                            <a onClick={() => this.onIndentItem(index)}><i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                            <a onClick={() => this.onDetetItem(index)}><i class="fa fa-trash" aria-hidden="true"></i></a>
                        </div>
                        <div className={classnames('right-content', item.indent && 'indent')}>
                            <div className="box"></div>
                            <input value={item.value || null} className={classnames(item.indent && 'indent')}
                                   onChange={(e)=> this.inputHandler(e,index)} 
                                   readOnly={item.indent} placeholder="Type standard here" />
                        </div>
                    </div>
                    ))}
                    </React.Fragment>
                    : 
                            <h5 className="no-data-text">No Data Available</h5>
                }
                    </div>
                    <button className="submit-btn" onClick={() => this.addNewItem()}>
                        <i class="fa fa-plus-circle" aria-hidden="true"></i> &nbsp;&nbsp;Add a standard
                    </button>
                </div>
            </main>
        )
    }
}

