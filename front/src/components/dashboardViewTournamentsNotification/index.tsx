
import { useState } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { ITournamentsRegistered } from '@/interfaces/interfaceUser';
import { isoToDate } from '@/utils/formatDate';
import { checkViewTournament } from '@/redux/thunks/userActionsSliceThunk';
import { reloadUserSlice } from '@/redux/thunks/userSliceThunk';
export const DashboardViewTournamentsNotification: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tournaments = useSelector((state: RootState) => state.user.user?.notifications);
    const email = useSelector((state: RootState) => state.user.user?.email)
    const tokenFirebase = useSelector((state: RootState) => state.user.user?.tokenFirebase)
    const token = useSelector((state: RootState) => state.user?.token)

    const newTournaments = tournaments?.filter((tour: ITournamentsRegistered) => tour.state === true)


    const check = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {value} = event.currentTarget
        dispatch(checkViewTournament({id: value, token: token!}))
        dispatch(reloadUserSlice({email: email!, tokenFirebase: tokenFirebase!}))
    }
    

    return (
        <div className="grid grid-cols-3">
        <div className="col-span-2">
            <h1 className="heading5 text-lightViolet">Your friends</h1>
            <table className="mt-1 w-full">
                <thead className="tableHeader flex flex-row justify-around">
                    <th className="text-center">Tournament</th>
                    <th className="text-center">Team</th>
                    <th className="text-center">Date</th>
                    <th className="text-center"></th>
                </thead>
                <tbody className="tableBody flex flex-col gap-2">
                    {newTournaments?.map((tour: ITournamentsRegistered) => (
                        <tr key={tour.id} className="flex flex-row justify-around">
                            <td className='text-center'>{tour.nameTournament}</td>
                            <td className='text-center'>{tour.nameTeam}</td>
                            <td className='text-center'>{isoToDate(tour.tournamentDate)}</td>
                            <td className="text-center">
                                <button className="iconButton" value={tour.id} onClick={check}>
                                    <TaskAltIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}