import AllJobsList from '../../components/AllJobsList';
import EditWindow from '../../components/EditWindow';
import SearchJobFrom from '../../components/SearchJobFrom';

export default function Alljob() {
  return (
    <>
      <SearchJobFrom />
      <AllJobsList />
      <EditWindow />
    </>
  );
}
