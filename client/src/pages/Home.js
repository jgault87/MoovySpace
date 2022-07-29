import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { App, AppContext } from "../App";
import { shouldCanonizeResults } from "@apollo/client/cache/inmemory/helpers";

const Home = () => {
  const searchContext = useContext(AppContext);

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <div>{searchContext.details.title}</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
