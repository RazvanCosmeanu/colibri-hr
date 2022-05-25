import './SearchInput.scss';

import { ReactComponent as Find } from '../../../assets/find.svg';
import Input from '../Input/Input';

const SearchInput = (props) => {
  return (
    <Input
      type='text'
      placeholder='Search...'
      containerClassName='search-input-container'
      className='search-input'
      renderInsert={() => <Find />}
      {...props}
    />
  );
};

export default SearchInput;
