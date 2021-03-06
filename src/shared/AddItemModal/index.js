// import utils
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setIsItemModalOpen } from '../../actions/recipes';

// import components
import Ingredient from './ingredient';
import Step from './step';
import Group from './group';

const AddItemModal = () => {
  const dispatch = useDispatch();
  const { modalName } = useSelector((state) => state.addItemModal);

  const handleClose = () => {
    dispatch(setIsItemModalOpen());
  }

  return (
    <section className='add-item-modal'>
      {modalName === 'ingredient' && <Ingredient close={handleClose} />}
      {modalName === 'étape' && <Step close={handleClose} />}
      {modalName === 'groupe' && <Group close={handleClose} />}
    </section>  
  );
}

export default AddItemModal;
