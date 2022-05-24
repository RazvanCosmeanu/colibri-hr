import './StaffList.scss';

function Table() {
  return <div>THIS IS THE TABLE</div>;
}

function SearchBar() {
  return <div>THIS IS THE SEARCH BAR</div>;
}

function Pagination() {
  return <div>PAGINATION</div>;
}

export default function StaffList() {
  return (
    <div className='table-container staff-list'>
      <section className='table-controls'>
        <SearchBar />
        <Pagination />
      </section>
      <section className='table'>
        <Table />
      </section>
    </div>
  );
}
