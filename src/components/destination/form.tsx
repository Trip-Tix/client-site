import Source from "@components/destination/source"
import CustomAnimation from "@components/destination/custom-animation"
import Destination from "@components/destination/destination"
import TravelDate from "@components/destination/travel-date"
import ReturnDate from "@components/destination/return-date"
import Submit from "@components/destination/submit"
import Stack from "@mui/material/Stack"
import Transportation from "@components/destination/transportation"
import Location from "@components/destination/location"

export default function Form() {
  return (
    <>
    
    <Stack spacing={2} sx={{ 
      width: "100%",
      backgroundColor: "#E4E4E4",
      }}>
      <Transportation />
      <Location />
      <TravelDate />
      <ReturnDate />
      <Submit />
    </Stack>
    </>
  );
}
