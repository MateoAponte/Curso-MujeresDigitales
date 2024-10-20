import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch"
import { CardPreview } from "./CardPreview"

export const Card = () => {
  const {fetchData, data, error, loading} = useFetch();

  const handleFetch = () => {
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(error) return <ErrorCard />
  if(loading) return <LoadingCard />
  return <>
    {(!error && !loading) && <CardPreview {...data}></CardPreview>}
    <button onClick={handleFetch}>
      R
    </button>
  </>
}