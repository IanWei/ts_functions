import React, { FC, useEffect } from 'react';
import { Calendar } from '@i.w/trip-plan';
import { addInfo } from '../api/addInfo';
import { StyledDashboard } from './Dashboard.styled';

export const Dashboard: FC = () => {
    useEffect(() => {
        (async () => {
            const data = await addInfo();
            console.log('data: ', data)
        })()
    }, [])
    return (
        <StyledDashboard>
            <Calendar />
        </StyledDashboard>
    )
}
