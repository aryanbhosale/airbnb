import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { format } from "date-fns";
import Head from "next/head";
import { useRouter } from "next/router"
import axios from "axios";
import InfoCard from "@/components/InfoCard";
import Map from "@/components/Map";

const Search = ({ searchResults }) => {

    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
console.log(searchResults)
  return (
    <div>
        <Head>
            <title>Airbnb | {location} - Holiday Rentals & Places to Stay</title>
            <link rel='icon' href='/logo.png' />
        </Head>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} ${noOfGuests > 1 ? "guests" : "guest"}`} />
        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">
                    {searchResults.results.length}+ stays - {range} - for {noOfGuests} {noOfGuests > 1 ? "guests" : "guest"}
                </p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                <div className="flex flex-col">
                  {searchResults.results?.map((item) => (
                    <InfoCard key={item.images[1]} img={item.images[1]} location={item.address} title={item.name} description={item.type} star={item.rating} price={item.price.rate} total={item.price.total} />
                  ))}
                </div>
            </section>
            <section className="hidden xl:inline-flex xl:min-w-[30%] sticky top-[76px] h-[calc(100vh-76px)]">
              <Map searchResults={searchResults} />
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
    const { location, startDate, endDate, noOfGuests } = context.query;
  
    const startDate_yyyy_mm_dd = startDate.slice(0, 10);
    const endDate_yyyy_mm_dd = endDate.slice(0, 10);
  
    const options = {
      method: "GET",
      url: "https://airbnb13.p.rapidapi.com/search-location",
      params: {
        location,
        checkin: startDate_yyyy_mm_dd,
        checkout: endDate_yyyy_mm_dd,
        adults: noOfGuests,
        children: "0",
        infants: "0",
        pets: "0",
        page: "1",
        currency: "INR",
      },
      headers: {
        "X-RapidAPI-Key": "60dec510demsh734bb47c14cc11bp156f45jsn78756bc05955",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };
  
    try {
        const response = await axios.request(options);
        // Return the response data as searchResults in props
        return { props: { searchResults: response.data } };
      } catch (error) {
        console.error(error);
        // Return an empty searchResults prop in case of an error
        return { props: { searchResults: null } };
      }
  }