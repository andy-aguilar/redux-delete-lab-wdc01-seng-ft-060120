import React, { Component } from 'react';
import Band from './Band';
import {connect} from 'react-redux';

class Bands extends Component {

    renderBands = () => {
        return this.props.bands.map(band => <Band key={band.id} band={band} delete={this.props.deleteBand} />)
    }

    render() {
        return(
        <ul>
            {this.renderBands()}
        </ul>
        );
    }
};

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
    deleteBand: id => dispatch({ type: "DELETE_BAND", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(Bands);