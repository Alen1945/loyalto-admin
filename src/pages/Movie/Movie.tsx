import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import CustomStyle from "../../assets/styles/layout.module.scss";
import { getListMovie } from "../../store/actions/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";
import qs from "qs";
const GenrePage: React.FC = () => {
  const { isLoading, listMovie, metadata } = useSelector(
    (state: RootState) => state.movieReducers
  );
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    const dataLocation = qs.parse(location.search, { ignoreQueryPrefix: true });
    dispatch(getListMovie(parseInt(dataLocation?.page?.toString() || "1")));
  }, [location.search]);

  return (
    <div className={clsx("container-fluid", CustomStyle.containerListMovie)}>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">List Genre</h3>
            </div>
            <div className="card-body">
              <table
                id="example1"
                className={clsx(
                  "table table-bordered",
                  !isLoading && "table-striped"
                )}
              >
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Title</th>
                    <th className="text-center">Image</th>
                    <th className="text-center">Release</th>
                    <th className="text-center">Rating</th>
                    <th className="text-center">Vote Count</th>
                    <th className="text-center">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading &&
                    [...new Array(7)].map((v: any, i: number) => (
                      <tr key={i}>
                        <td className={CustomStyle.customNo}>
                          <Skeleton />
                        </td>
                        <td className={CustomStyle.customTitle}>
                          <Skeleton />
                        </td>
                        <td className={CustomStyle.customContainerImage}>
                          <Skeleton width={200} height={300} />
                        </td>
                        <td className={CustomStyle.customRelase}>
                          <Skeleton />
                        </td>
                        <td className={CustomStyle.customVote}>
                          <Skeleton />
                        </td>
                        <td className={CustomStyle.customVotecount}>
                          <Skeleton />
                        </td>
                        <td className={CustomStyle.customDesc}>
                          <Skeleton />
                        </td>
                      </tr>
                    ))}
                  {!isLoading &&
                    listMovie.map((v: any, i: number) => (
                      <tr key={v?.id} className={CustomStyle.LinkElement}>
                        <td className={CustomStyle.customNo}>{i + 1}</td>
                        <td className={CustomStyle.customTitle}>{v?.title}</td>
                        <td className={CustomStyle.customContainerImage}>
                          {!v.poster_path &&
                            !v.backdrop_path &&
                            "No Avaiable Image"}
                          {v.poster_path && (
                            <img
                              src={
                                "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
                                v.poster_path +
                                "?api_key=2fccde01a371b106b09a241d6d1d5b49"
                              }
                              className={clsx(
                                CustomStyle.customImage,
                                !!v.backdrop_path && CustomStyle.img1
                              )}
                              alt="img-poster"
                            />
                          )}

                          {v.backdrop_path && (
                            <img
                              src={
                                "https://www.themoviedb.org/t/p/w300_and_h450_bestv2" +
                                v.backdrop_path +
                                "?api_key=2fccde01a371b106b09a241d6d1d5b49"
                              }
                              className={clsx(
                                CustomStyle.customImage,
                                CustomStyle.img2
                              )}
                              alt="img-poster"
                            />
                          )}
                        </td>
                        <td className={CustomStyle.customRelase}>
                          {v?.release_date}
                        </td>
                        <td className={CustomStyle.customVote}>
                          {v?.vote_average}
                        </td>
                        <td className={CustomStyle.customVotecount}>
                          {v?.vote_count}
                        </td>
                        <td className={CustomStyle.customDesc}>
                          {v?.overview}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {metadata && metadata?.page && (
                <div
                  className={clsx(
                    "dataTables_paginate paging_simple_numbers",
                    CustomStyle.customPagination
                  )}
                >
                  <ul className="pagination">
                    <li
                      className={clsx(
                        "paginate_button page-item previous",
                        metadata?.page === 1 && "disabled"
                      )}
                      id="example2_previous"
                    >
                      <Link
                        to={`/app/movie?page=${metadata?.page - 1}`}
                        className="page-link"
                      >
                        Previous
                      </Link>
                    </li>
                    <li
                      className={clsx(
                        "paginate_button page-item",
                        metadata?.page === 1 && "active"
                      )}
                    >
                      <Link to={`/app/movie?page=1`} className="page-link">
                        1
                      </Link>
                    </li>
                    {metadata.page - 2 > 2 && (
                      <li className="paginate_button page-item">
                        <p className="page-link">...</p>
                      </li>
                    )}
                    {[...new Array(metadata?.total_pages || 1)].map((v, i) => (
                      <>
                        {i + 1 > 1 &&
                          i + 1 < metadata?.total_pages &&
                          i + 1 >= metadata.page - 2 &&
                          i + 1 <= metadata.page + 2 && (
                            <li
                              className={clsx(
                                "paginate_button page-item",
                                metadata?.page === i + 1 && "active"
                              )}
                            >
                              <Link
                                to={`/app/movie?page=${i + 1}`}
                                className="page-link"
                              >
                                {i + 1}
                              </Link>
                            </li>
                          )}
                      </>
                    ))}
                    {metadata.page + 2 < metadata?.total_pages - 1 && (
                      <li className={clsx("paginate_button page-item")}>
                        <p className="page-link">...</p>
                      </li>
                    )}
                    <li
                      className={clsx(
                        "paginate_button page-item",
                        metadata?.page === metadata?.total_pages && "active"
                      )}
                    >
                      <Link
                        to={`/app/movie?page=${metadata?.total_pages}`}
                        className="page-link"
                      >
                        {metadata?.total_pages}
                      </Link>
                    </li>
                    <li
                      className={clsx(
                        "paginate_button page-item next",
                        metadata?.page === metadata?.total_pages && "disabled"
                      )}
                      id="example2_next"
                    >
                      <Link
                        to={`/app/movie?page=${metadata?.page + 1}`}
                        className="page-link"
                      >
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
