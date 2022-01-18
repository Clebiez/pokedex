import propTypes from 'prop-types';

const MyComponent = (props) => {
    console.log(props);

    const handleClick = () => {
        props.onClick('Michel');
    };

    return (
        <div className="btn btn-primary" onClick={handleClick}>
            {props.icon}
            {props.children}
        </div>
    );
};

MyComponent.propTypes = {
    icon: propTypes.element,
    children: propTypes.node,
    onClick: propTypes.func,
};

export default MyComponent;
