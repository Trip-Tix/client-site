import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import TrainIcon from '@mui/icons-material/Train';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

export enum TransportType {
    Bus = 'Bus',
    Train = 'Train',
    Flight = 'Flight',
}

export interface TransportEntry {
    transportId: number;
    transportName: string;
    transportIcon: any;
    transportType: TransportType;
}

export const transports: TransportEntry[] = [
    {
        transportId: 1,
        transportName: 'Bus',
        transportIcon: DirectionsBusIcon,
        transportType: TransportType.Bus,
    },
    {
        transportId: 3,
        transportName: 'Flight',
        transportIcon: AirplanemodeActiveIcon,
        transportType: TransportType.Flight,
    },
    {
        transportId: 2,
        transportName: 'Train',
        transportIcon: TrainIcon,
        transportType: TransportType.Train,
    }
]

