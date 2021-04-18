import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { submitText } from '../../Redux/ActionCreators/submitText';
import { connect } from 'react-redux';

const MainForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="mainForm">
            <Field name="input" component="textarea" type="text" className="mainInput"/>
            <Button size="large" color="primary" variant="contained" onClick={props.submitText(props.form.values ? props.form.values.input : "")}>Analyze</Button>
        </form>
    );
};

const WrappedForm = reduxForm({form: "mainForm"})(MainForm);

const mapStateToProps = (state) => {
    return {form: state.form}
}

export default connect(mapStateToProps, {submitText})(WrappedForm);