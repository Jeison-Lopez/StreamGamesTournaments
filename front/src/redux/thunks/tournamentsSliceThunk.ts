import { IAddTeamToTournament } from "@/interfaces/interfaceRedux"
import { IAddTeam } from "@/interfaces/interfaceTournaments"
import { fetchAddTeamToTournament, fetchPaymentTournament, fetchTournaments } from "@/utils/fetchTournaments"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "sonner"

export const getTournamentsSlice = createAsyncThunk('tournaments/getTournaments', async () => {
        const response = await fetchTournaments()
        return response
})

export const createOrderSlice = createAsyncThunk('tournaments/postTeamToTournament', async (data: IAddTeamToTournament) => {
        console.log("esto se ejecuta", data)
        const response = await fetchPaymentTournament(data)
        return response
})

export const captureOrderSlice = createAsyncThunk('tournaments/postTeamToTournament', async (orderId: string) => {
        toast.success("Approved payment", {
            position: 'top-right',
            duration: 1500,
        })
})

export const postTeamToTournamentSlice = createAsyncThunk('tournaments/postTeamToTournament', async (data: IAddTeamToTournament) => {
        const response = await fetchAddTeamToTournament(data)
        return response
})