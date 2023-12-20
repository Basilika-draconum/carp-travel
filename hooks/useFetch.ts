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

  return { isLoading, data };
};
