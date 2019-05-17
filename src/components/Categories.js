import React, {Component} from 'react';
import './style/Categories.css'
import {connect} from 'react-redux'

 class Categories extends Component{

    constructor() {
        super()

        this.state = {
            categories : [9,21,27,17,18,23,22,25],
            categoryNames: ["General Knowledge","Sports","Animals","Science & Nature","Science: Computers","History","Geography","Art"]
        }
    }
    

    handleCategoryClick = (categoryId,index) => {
        
        let catName = this.state.categoryNames[index]
        this.props.sendCats(catName)
        this.props.history.push(`/categories/${categoryId}/questions`)
    }

    render(){

       const categoryButtons = this.state.categories.map((category,index) => {
            return (
                <button className="buttonStyling" onClick={() => this.handleCategoryClick(category,index)}>{this.state.categoryNames[index]}</button>
            )
        })
        
        return(
            <div>
                {categoryButtons}
            </div>
        )
    
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        sendCats: (cateogyName) => dispatch({type: 'STORE_SELECTED_CATEGORY',value: cateogyName})
    }
}
 export default connect(null, mapDispatchToProps)(Categories)