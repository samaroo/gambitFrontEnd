import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { submitText } from '../../Redux/ActionCreators/submitText';
import { connect } from 'react-redux';

const MainForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="mainForm">
            <Field name="input" component="textarea" type="text" className="mainInput"/>
            <Button size="large" color="primary" variant="contained" onClick={() => {props.submitText(props.form.values ? props.form.values.input : "")}}>Analyze</Button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {form: state.form}
};

const ConnectedForm = connect(mapStateToProps, {submitText})(MainForm);

export default reduxForm({form: "mainForm"})(ConnectedForm);