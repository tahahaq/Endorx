import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from "./common";

class EmployeeList extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                    />
                </CardSection>
                <CardSection>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeList;
