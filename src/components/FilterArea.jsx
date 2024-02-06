import { useSearchParams } from 'react-router-dom';

const FilterArea = () => {
  // useParams url'deki arama parametrelerini yönetmemizi sağlar
  // geriyi dizi içleriden iki eleman döndürür
  // 1- url'deki arama parametreleri
  // 2- bunları değiştirmeye yarayan method
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    // eklanecek parametreyi belirle
    searchParams.set('sırala', e.target.value);
    // url'i günceller
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eklenilecek parametreyi belirle
    searchParams.set('aramaTerimi', e.target[0].value);
    // url'i güncelle
    setSearchParams(searchParams);
  };

  return (
    <div className="mt-4 gap-3 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <label>Sort</label>
        <select onChange={handleChange} className="form-select">
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          placeholder="enter the book title"
          className="form-control"
          type="text"
        />
        <button className="btn btn-primary">Search</button>
      </form>
    </div>
  );
};

export default FilterArea;
