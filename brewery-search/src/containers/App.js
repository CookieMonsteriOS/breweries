import React, {Component} from 'react';
import API from '../api/api'
import BreweryTable from '../components/Table/BreweryTable'
import Navbar from '../components/Navigation/Navbar'
import Placeholder from '../components/Placeholder/Placeholder'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields:{},
            errors:{},
            breweryData:[]
        };

    }

    //Handle input changes
    handleChange =(field, e)=> {
        let inputFields = this.state.fields;
        inputFields[field] = e.target.value;
        this.setState({inputFields});
    }

    //Validate inputs
    isValidInputs =()=>{
        let fields = this.state.fields;
        let errors = {};
        let isValid = true;

        //Validate search fields
        if(!fields["search"]){
            isValid = false;
            errors["search"] = "Brewery search cannot be empty";
        }

        this.setState({errors: errors});
        return isValid;
    }

    //Search breweries
    searchBreweries =(e)=>{
        e.preventDefault();
        if(this.isValidInputs()){
        let query = this.state.fields.search
        API.getBreweries('GET',query).then((breweries)=>{
            this.setState({breweryData:breweries})
        })
        }else{
            //To DO: Add in Modal for error handling
            alert("Please check your inputs.");
        }
    }

    render() {
        return (
            <div>
            <div>
                <Navbar/>
            </div>
            <div className="container-fluid">
            <div className="home-header">
                <h2 className= "title">Brewery Search</h2>
                    <div className="intro-text">
                        <p>Welcome to Brewery Search. Here you can find some of your favourite establishments across the USA, where you an enjoy a good quality pint and a bite to eat. So if your looking for a brewery which serves burgers - just type it in the box below and hit the search button.</p>
                    </div>
                </div>
            <form name="searchForm" className="search-form" onSubmit= {this.searchBreweries.bind(this)}>
                <div className=" row col-lg-12">
                        <input className="search-box" ref="search" type="text" size="50" placeholder="Find a brewery" onChange={this.handleChange.bind(this, "search")} value={this.state.fields["search"] || ""}/>
                            <br/>
                         <button className="btn btn-primary " id="submit" value="Submit">Search</button>
                    <br/>
                </div>
                    <span className="error-text">{this.state.errors["search"]}</span>
                <br/>
            </form>
                <div>
                    {this.state.breweryData.length < 1 ? <Placeholder/>: <BreweryTable breweryData = {this.state.breweryData}/> }
                </div>
                <br/>
            </div>
            </div>

        );
    }
}

export default App;
