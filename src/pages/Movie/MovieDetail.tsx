import React, { useEffect } from "react";
import { useLocation, useHistory, useParams, Link } from "react-router-dom";
import CustomStyle from "../../assets/styles/layout.module.scss";
import { getDetailMovie } from "../../store/actions/detailMovieActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";
const DetailMoviePage: React.FC = () => {
  const { isLoading, detailMovie } = useSelector(
    (state: RootState) => state.detailMovieReducers
  );
  const dispatch = useDispatch();
  const params = useParams<any>();
  console.log(detailMovie);
  useEffect(() => {
    dispatch(getDetailMovie(params?.id));
  }, []);

  return (
    <div className={clsx("container-fluid", CustomStyle.containerDetailMovie)}>
      <div className="row">
        <div className="col-12">
          <div className={clsx("card")}>
            <div
              className={clsx("card-body", CustomStyle.cardCustom)}
              style={{
                backgroundImage: `url( https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailMovie.backdrop_path}?api_key=2fccde01a371b106b09a241d6d1d5b49)`,
              }}
            >
              {isLoading && <Skeleton width="100%" height="100%" />}
              {!isLoading && (
                <div className={CustomStyle.container}>
                  <div className={CustomStyle.imgMovie}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailMovie.poster_path}?api_key=2fccde01a371b106b09a241d6d1d5b49)`}
                      className={CustomStyle.customImage}
                    />
                  </div>
                  <div className={CustomStyle.detailMovie}>
                    <div className={CustomStyle.wrapDetail}>
                      <h1 className={CustomStyle.titleMovie}>
                        {detailMovie.title}
                      </h1>
                      <p className={CustomStyle.releaseText}>
                        Release {detailMovie.release_date}
                      </p>
                      <h3 className={CustomStyle.overview}>Overview</h3>
                      <p className={CustomStyle.desc}>{detailMovie.overview}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMoviePage;
