import { Button } from "@blueprintjs/core";
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationAction } from "../store/ApplicationActions";
import { ApplicationState } from "../store/ApplicationState";
import { createChangeHelloWorldPayloadAction } from "../store/HelloWorld/HelloWorldActions";
import { getHelloWorldPayload } from "../store/HelloWorld/HelloWorldState";

type Props = StateProps & DispatchProps;

interface StateProps {
    helloWorldPayload: string;
}

interface DispatchProps {
    changeHelloWorldPayload: (newPayload: string) => void;
}

class HelloWorldComponent extends React.Component<Props> {
    public render() {
        return (
            <div>
                <div>{this.props.helloWorldPayload}</div>
                <Button onClick={this.onClick}>Change Payload</Button>
            </div>
        );
    }

    private onClick = () => {
        this.props.changeHelloWorldPayload("You have just clicked the button.");
    };
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
    helloWorldPayload: getHelloWorldPayload(state)
});

const mapDispatchToProps = (dispatch: Dispatch<ApplicationAction>): DispatchProps => ({
    changeHelloWorldPayload: (newPayload: string) => {
        dispatch(createChangeHelloWorldPayloadAction(newPayload));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorldComponent);
