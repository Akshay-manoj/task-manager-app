import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
function TaskForm({ addTask }) {
    const [input, setInput] = useState('');
    const [error, setError] = useState({ show: false, message: '' });

    /**
     * On form handle submit, if the input is empty, show an error message.
     * Else, add the task to the task list and reset the input field.
     * 
     * @param {*} e 
     * @returns 
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input) {
            setError({ show: true, message: 'Please enter a task to continue.' });
            return;
        }
        addTask(input);
        setInput('');
        setError({ show: false, message: '' });
    }

    /**
     * Input field on change set the input value in state.
     * @param {*} e 
     */
    const handleInputChange = (e) => {
        const value = e.target.value;
        setError({ show: false, message: '' });
        setInput(value.trim());
    }

    return (
        <>
            <div className="my-3">
                <Form inline="true" onSubmit={handleSubmit}>
                    <Row className="align-items-center justify-content-center">
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                id="new-task"
                                placeholder="Add a task"
                                className=" mr-sm-2"
                                value={input}
                                onChange={handleInputChange}
                                isInvalid={!!error.show}
                            />
                            {!!error.show && (
                                <small className="text-danger">{error.message}</small>
                            )}
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default TaskForm