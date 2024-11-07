import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/actions';


function HeaderSwitch() {
  
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.isDarkMode); // Redux store'dan dark mode bilgisini alıyoruz

  // Dark mode'u değiştiren fonksiyon
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Form>
      <Form.Check 
        className='font-mono mt-2'
        type="switch"
        id="custom-switch"
        label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        checked={isDarkMode}
        onChange={handleToggleDarkMode}
      />
    </Form>
  );
}

export default HeaderSwitch;