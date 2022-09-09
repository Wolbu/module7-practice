// import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { imagesSelector } from "./redux/pictures/selectors";
import { picturesSlice } from "./redux/pictures/picturesSlice";
import { loaderSlice } from "./redux/loader/loaderSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./App.css";
import { loaderSelector } from "./redux/loader/selectors";
import {
  addPicturesOperation,
  getImagesOperations,
} from "./redux/pictures/pictures-operations";
import { useFetchImagesQuery } from "./redux/pictures/picturesApi";

function App() {
  // const {
  //   actions: { initPicturesAction, addPicturesAction },
  // } = picturesSlice;
  // const {
  //   actions: { onLoader, offLoader },
  // } = loaderSlice;
  const images = useSelector(imagesSelector);
  const loader = useSelector(loaderSelector);
  const dispatch = useDispatch();

  const { data, isFetching, isError } = useFetchImagesQuery();
  console.log(data);

  const [page, setPage] = useState(1);

  useEffect(() => {
    page > 1
      ? dispatch(addPicturesOperation(page))
      : dispatch(getImagesOperations());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="App">
      {isFetching && <h1>LOADING........</h1>}
      {isError && <h1>Error !! ........</h1>}
      <ul>
        {data?.hits.map((item) => (
          <li key={nanoid()}>
            <img src={item.webformatURL} width="300" alt="blabla" />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setPage(page + 1)}>
        {" "}
        Load more...
      </button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   images: state.images
// })
// export default connect(mapStateToProps)(App); //не смотрите сюда

export default App;
