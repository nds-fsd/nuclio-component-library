import PropTypes from "prop-types";
 
const styles = {
    fontFamily: 'Arial, Helvetica, sans-serif'
};

const Text = ({color, text}) => {
    const customStyle = {
        ...styles, 
        color: color
    };

    return (
        <p style={customStyle}>
            {text}
        </p>
    );
};
 
Text.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string

};
 
Text.defaultProps = {
    color: 'black'
};
 
export default Text;