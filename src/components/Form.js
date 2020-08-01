import React, {Fragment} from 'react';
import {
    EuiBetaBadge,
    EuiButton,
    EuiFieldText,
    EuiFlexGroup,
    EuiFlexItem,
    EuiIcon,
    EuiLink,
    EuiSpacer
} from "@elastic/eui";

const Form = (props) => {
    return (
        <Fragment>
            <form id="guess" onSubmit={props.checkAnswer}>
                <EuiFlexGroup justifyContent="spaceAround">
                    <EuiFlexItem grow={false}>
                        <EuiFieldText
                            placeholder="Type your answer here"
                            aria-label="Type your answer here"
                            name="submittedAnswer"
                        />
                    </EuiFlexItem>
                </EuiFlexGroup>
                <EuiSpacer/>
                <EuiButton fill type="submit">
                    Submit
                </EuiButton>
            </form>
            <EuiSpacer/>
            <EuiLink
                onClick={() => window.alert(props.clue.hint)}
                color="text"
            >
                <EuiBetaBadge
                    className="hint"
                    label="Lab"
                    iconType="beaker"
                /> Need a hint?
            </EuiLink>
            <EuiSpacer/>
            <EuiLink
                onClick={() => {
                    if (window.confirm("Are you sure?")) {
                        window.alert(props.clue.rightAnswer);
                    }
                }}
                color="warning"
            >
                <EuiIcon type="alert"/> I am stumped. Give me the answer.
            </EuiLink>
            <EuiSpacer/>
        </Fragment>
    );
};

export default Form;