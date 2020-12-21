import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchFor, doneSearching } from "../actions/campaigns";
import { getCategories } from "../actions/categories";

import "./styles/Search.css";
import { SearchTile, SearchFilter } from "./sub-components/Search-Components";
import Loading from './Loading'

const Search = () => {
  let { category, query } = useParams();
  const { campaigns } = useSelector((state) => state.campaigns);
  const [filterCategory, setFilterCategory] = useState(category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doneSearching());
    dispatch(getCategories());
    dispatch(searchFor(query, filterCategory));
  }, [filterCategory, query]);



  if (campaigns === undefined || campaigns === null) {
    return <Loading></Loading>;
  }

  return (
    <main>
      <div className="search-page-container container is-widescreen">
        <div className="search-results columns">
          <div className="filter column is-one-quarter">
            <SearchFilter
              setFilterCategory={setFilterCategory}
              filterCategory={filterCategory}
            ></SearchFilter>
          </div>
          <div className="matches mq column is-three-quarters">
            {campaigns.map((campaign) => {
              return (
                <SearchTile key={campaign.id} campaign={campaign}></SearchTile>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

// const Search = () => {
//   let { category, query } = useParams();
//   const { campaigns } = useSelector((state) => state.campaigns);
//   const [filterCategory, setFilterCategory] = useState(category);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(doneSearching());
//     dispatch(getCategories());
//     dispatch(searchFor(query, category));
//   }, [category, query]);

//   if (campaigns === undefined || campaigns === null) {
//     return null;
//   }
//   return (
//     <main>
//       <div className="search-page-container container is-widescreen">
//         <div className="search-results columns">
//           <div className="filter column is-one-quarter">
//             <SearchFilter setFilterCategory={setFilterCategory}></SearchFilter>
//           </div>
//           <div className="matches column is-three-quarters">
//             <div className="tile is-ancestor">
//               {campaigns.map((campaign) => {
//                 return <SearchTile campaign={campaign}></SearchTile>;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// https://bulma.io/documentation/layout/tiles/
export default Search;
