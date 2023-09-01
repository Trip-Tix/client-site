import Source from "@components/destination/source"
import CustomAnimation from "@components/destination/custom-animation"
import Destination from "@components/destination/destination"
import TravelDate from "@components/destination/travel-date"
import ReturnDate from "@components/destination/return-date"
import Submit from "@components/destination/submit"

export default function Form() {
  return (
    <>
      <Source />
      <CustomAnimation />
      <Destination />
      <TravelDate />
      <ReturnDate />
      <Submit />
    </>
  );
}
