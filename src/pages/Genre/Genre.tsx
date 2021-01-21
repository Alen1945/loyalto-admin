import React, { useEffect } from "react";
import CustomStyle from "../../assets/styles/layout.module.scss";
import { getListGenre } from "../../store/actions/genreActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Skeleton from "react-loading-skeleton";
import clsx from "clsx";
const GenrePage: React.FC = () => {
  const { isLoading, listGenre } = useSelector(
    (state: RootState) => state.genreReducers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListGenre());
  }, []);
  return (
    <div className="container-fluid">
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
                    <th>No</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading &&
                    [...new Array(5)].map((v: any, i: number) => (
                      <tr key={i}>
                        <td>
                          <Skeleton />
                        </td>
                        <td>
                          <Skeleton />
                        </td>
                      </tr>
                    ))}
                  {!isLoading &&
                    listGenre.map((v: any, i: number) => (
                      <tr key={v?.id}>
                        <td>{i + 1}</td>
                        <td>{v?.name}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenrePage;
