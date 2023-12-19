import React from "react";
import useLoader from "./useLoader";
import { client } from "@/client";
import { ApiData } from "@/entities/types";

export const useFetch = (type: string) => {
  const [data, setData] = React.useState<ApiData[] | null>(null);
  const { isLoading, setLoading } = useLoader();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=="${type}"]`;
        setLoading(true);

        const fetchedData: ApiData[] = await client.fetch(query);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, setLoading]);

  //   React.useEffect(() => {
  //     const query = `*[_type=="${type}"]`;
  //     setLoading(true);

  //     client
  //       .fetch(query)
  //       .then((data: ApiData[]) => setData(data))
  //       .catch((error: Error) => {
  //         console.error("Error fetching data:", error);
  //         setLoading(false);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  return { isLoading, data };
};
