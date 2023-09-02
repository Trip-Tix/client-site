import { createContext } from 'react';
import { TransportType } from '@public/interface/transport'

interface DestinationContextType {
    source: string;
    setSource: (source: string) => void;
    destination: string;
    setDestination: (destination: string) => void;
    date: string;
    setDate: (date: string) => void;
    returnDate: string;
    setReturnDate: (returnDate: string) => void;
    hasReturn: boolean;
    setHasReturn: (hasReturn: boolean) => void;
    transport: TransportType;
    setTransport: (transport: TransportType) => void;
}

export const DestinationContext = createContext<DestinationContextType>({
    source: '',
    setSource: () => {},
    destination: '',
    setDestination: () => {},
    date: '',
    setDate: () => {},
    returnDate: '',
    setReturnDate: () => {},
    hasReturn: false,
    setHasReturn: () => {},
    transport: TransportType.Bus,
    setTransport: () => {},
});