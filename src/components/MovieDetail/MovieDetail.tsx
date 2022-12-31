import React, { useEffect } from 'react';
import { getMovieDetail, poster_base_path } from '../../services/movieService';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Movie from '../Movie/Movie';
import style from './MovieDetail.module.css';
import appStyle from '../../App.module.css';

const MovieTitle = ({ title }: any) => (
  <h1 className={appStyle.m_0}>{title}</h1>
);

const HomePage = ({ data }: any) =>
  data && (
    <div>
      Home Page:{' '}
      <a href={data} target={'_blank'}>
        {data}
      </a>
    </div>
  );

const Genre = ({ genres }: any) => (
  <h3 className={appStyle.mt_1}>
    {genres
      .map((genre: any) => genre.name)
      .toString()
      .split(',')
      .join(' / ')}
  </h3>
);

const ReleaseYear = ({ releaseDate }: any) => (
  <h2 className={appStyle.mb_0}>{new Date(releaseDate).getFullYear()}</h2>
);

const Rating = ({ data }: any) => (
  <div>
    {data.vote_average.toFixed(1)} ({data.vote_count} votes)
  </div>
);

const Overview = ({ overview }: any) => (
  <div className={appStyle.mt_2}>
    <h3 className={appStyle.mb_0}>Overview</h3>
    <p className={appStyle.mt_1}>{overview}</p>
  </div>
);

const MovieDetail = () => {
  const { movieId } = useParams<string>();

  const { isLoading, error, data } = useQuery<any>('movie-detail', () =>
    getMovieDetail(movieId as string)
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    data && (
      <React.Fragment>
        <div
          className={style.backdropImage}
          style={{
            background: `url(${poster_base_path + data.backdrop_path})`,
            opacity: '0.1',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className={style.contentDetail}>
          <Movie movie={data} />
          <div className={appStyle.ml_2}>
            <MovieTitle title={data.title} />
            <ReleaseYear releaseDate={data.release_date} />
            <Genre genres={data.genres} />
            <HomePage data={data.homepage} />
            <Rating data={data} />
            <Overview overview={data.overview} />
          </div>
        </div>
      </React.Fragment>
    )
  );
};

export default MovieDetail;
