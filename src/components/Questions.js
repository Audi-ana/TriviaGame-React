import React, {Component} from "react";
import { connect } from "react-redux";
import './style/Questions.css'

class Questions extends Component{

    constructor(){
        super()

        this.state = {
            questions:[]
        }

    }



    componentDidMount(){
    

        let catId = this.props.match.params.catId
        
        let url = "https://opentdb.com/api.php?amount=10&category="

        let catUrl = url + catId

        fetch(catUrl)
        .then(response => response.json()
        ).then(json => {
            
            this.setState({
                questions: json.results
            })
            
        })
        
    }

    handleCorrectAClick = () =>{
        this.props.incCounter()
    }
    render(){

             const catQuestions = this.state.questions.map((x, index)=>{

                 let incorrectAnswers =x.incorrect_answers.splice(', ')
                 let fixedAnswers = incorrectAnswers.map((answer => {
                     return (
                         <button dangerouslySetInnerHTML={{__html: answer}}/>
                     )
                 }))
    
           return (
               <div className="QDiv">
               <div className='background'>
                  <span className="qNum">Question {index+1}</span> 
               <li dangerouslySetInnerHTML={{__html: x.question}}/>
               <button onClick={this.handleCorrectAClick}dangerouslySetInnerHTML={{__html: x.correct_answer}}/>
               {fixedAnswers}
               </div>
              </div>
    
           )
           
        })  
   
        return(
            <div>
                <h1>{this.props.selectedCategory}</h1>
            <ul>{catQuestions}</ul>
            <div className="scoreStyling">{this.props.counter}/10</div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        selectedCategory: state.selectedCategory,
        counter: state.counter
    }

}

const mapDispatchToProps = dispatch => {
    return {
        incCounter : () => dispatch({type: 'INC_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions)