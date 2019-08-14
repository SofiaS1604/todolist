import * as React from 'react';
import PropTypes from 'prop-types';
import styles from "./Task.sass";
import Button from "../../atoms/Button/Button.jsx";


const Task = ({message, onRemoveClick, onCheckmarkClick, status}) => (
    <div className={styles.task}>
        <div className={styles.task_text}>{message}</div>
        <div className={styles.task_remove}>
            <Button onClick={onRemoveClick} text={'Remove'}/>
        </div>
        <div className={status ? styles.task_fulfilled__active : styles.task_fulfilled}>
            <Button onClick={onCheckmarkClick} text={'✓'}/>
        </div>
    </div>
);

Task.propTypes = {
    message: PropTypes.string.isRequired,
    onCheckmarkClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
    status: PropTypes.bool
    // taskDelete: PropTypes.func.isRequired
};

Task.defaultProps = {
    value: '',
    status: false,
    onCheckmarkClick: () => null,
    onRemoveClick: () => null
};

const stateProps = (state) => ({});

// export default connect(stateProps,{
//     taskDelete
// });

export default Task;