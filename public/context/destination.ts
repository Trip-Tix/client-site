import { createContext } from 'react';
import { TransportType } from '@public/interface/transport'

interface DestinationContextType {
    source: string;
    setSource: (source: string) => void;
    destination: string;
    setDestination: (destination: string) => void;
    sourceId: number;
    setSourceId: (sourceId: number) => void;
    destinationId: number;
    setDestinationId: (destinationId: number) => void;
    date: string;
    setDate: (date: string) => void;
    returnDate: string;
    setReturnDate: (returnDate: string) => void;
    hasReturn: boolean;
    setHasReturn: (hasReturn: boolean) => void;
    transport: TransportType;
    setTransport: (transport: TransportType) => void;
    hasError: boolean;
    setHasError: (hasError: boolean) => void;
}

export const DestinationContext = createContext<DestinationContextType>({
    source: '',
    setSource: () => {},
    destination: '',
    setDestination: () => {},
    sourceId: 0,
    setSourceId: () => {},
    destinationId: 0,
    setDestinationId: () => {},
    date: '',
    setDate: () => {},
    returnDate: '',
    setReturnDate: () => {},
    hasReturn: false,
    setHasReturn: () => {},
    transport: TransportType.Bus,
    setTransport: () => {},
    hasError: false,
    setHasError: () => {},
});