import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { List } from 'antd';
import MenuItem from './MenuItem';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class ListComponent extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.createListItem();
    }

    filter() {
        this.props.setLoading();
        this.props.filterManchester();
    }

    sort() {
        this.props.setLoading();
        this.props.sortCapacity();
    }

    render() {
        const list = this.props.list.list;
        return (
            <div className="listContainer">
                <div className="actions">
                    <MenuItem 
                     filter= {this.filter.bind(this)}
                     sortList= {this.sort.bind(this)}
                     />
                </div>
                <div className="list">
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            pageSize: 4,
                        }}
                        loading={this.props.list.loading}
                        dataSource={list}
                        renderItem={item => (
                            <ListItem 
                               key={item.name}
                               name={item.name}
                               photo={item.photos[0]}
                               title={item.name}
                               address={item.address}
                               description={item.description}
                               rating={item.rating}
                            />
                        )}
                    />
                </div>
            </div>
        );
    }
}

ListComponent.propTypes = {
    createListItem: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
    filterManchester: PropTypes.func.isRequired,
    sortCapacity: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired,
};

const stateToProps = (state) => {
    return {
        list: state.list
    };
};

const dispatchToProps = (dispatch) => {
    return {
        createListItem: () => dispatch(actions.createListItem()),
        filterManchester: () => dispatch(actions.filterManchester()),
        sortCapacity: () => dispatch(actions.sortCapacity()),
        setLoading: () => dispatch(actions.setLoading())
    };
};

export default connect(stateToProps, dispatchToProps)(ListComponent);