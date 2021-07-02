import React, { FC, useEffect } from 'react';
import { addInfo } from '../../api/addInfo';

export const Dashboard: FC = () => {
    useEffect(() => {
        (async () => {
            const data = await addInfo();
            console.log('data: ', data)
        })()
    }, [])
    return (
        <div>
            dashboard
        </div>
    )
}
