import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';

const MainForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="mainForm">
            <Field name="input" component="textarea" type="text" className="mainInput"/>
            <Button size="large" color="primary" variant="contained">Analyze</Button>
        </form>
    );
};

const WrappedForm = reduxForm({form: "mainForm"})(MainForm);

export default WrappedForm;