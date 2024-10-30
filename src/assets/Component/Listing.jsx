import Banner from "./Home component/Banner";
import ListingBar from "./Others/ListingBar";
import Searching from "./Others/searching";

function Listing() {
  return (
    <>
      <Searching />
      <ListingBar />
      <Banner />
    </>
  );
}

export default Listing;
