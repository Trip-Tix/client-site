import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export interface Transport {
    transportId: number;
    transportName: string;
    transportIcon: any;
}


export const transports: Transport[] = [
    {
        transportId: 1,
        transportName: 'Bus',
        transportIcon: DirectionsBusIcon
    },
    {
        transportId: 3,
        transportName: 'Flight',
        transportIcon: AirplanemodeActiveIcon
    },
    {
        transportId: 2,
        transportName: 'Train',
        transportIcon: TrainIcon
    }
]