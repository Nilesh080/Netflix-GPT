import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { addoverview, addtitle } from "../utils/moviesSlice";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const dispatch = useDispatch();

  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  dispatch(addtitle(original_title));
  dispatch(addoverview(overview));

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle  />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;