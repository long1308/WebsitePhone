import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
    <Link to={'/'} >
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button  color="magenta">Back Home</Button>}
        /></Link>
);

export default NotFound; 