import React from 'react';
import { List, Icon } from 'antd';
import PropTypes from 'prop-types';

const ListItem = (props) => (
    <List.Item
        key={props.name}
        extra={<img width={250} height={250} alt="logo" src={props.photo} />}
    >
        <List.Item.Meta
            title={<a>{props.name}</a>}
            description={<div>{props.address} <br/> {props.description}</div>}
        />
        <Icon type="star" />{props.rating}
    </List.Item>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default ListItem;
