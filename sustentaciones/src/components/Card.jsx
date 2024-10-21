import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { CardPreview } from "./CardPreview";
import { ErrorCard } from "./ErrorCard";
import { LoadingCard } from "./LoadingCard";
import { parsedUserData } from "../helpers/parsedUserData";
import { FaDiceSix } from "react-icons/fa6";

export const Card = () => {
  const {fetchData, data, error, loading} = useFetch();

  const handleFetch = () => {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  const realData = parsedUserData(data);
  let content;

  if(loading) content = <LoadingCard />
  if(error) content = <ErrorCard />
  if(!error && !loading) content = <CardPreview  {...realData} />

  return <div className="card">
    {content}
    <button className="card__button" onClick={handleFetch}>
      <FaDiceSix />
    </button>
  </div>
}