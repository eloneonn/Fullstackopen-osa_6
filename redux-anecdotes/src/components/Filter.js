import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter: 
            <input 
                name="filter"
                value={props.filter}
                onChange={({ target }) => props.setFilter(target.value)}></input>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    setFilter
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter