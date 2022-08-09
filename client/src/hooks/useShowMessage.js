import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const useShowMessage = (clearMessageFromStore) => {
  const dispatch = useDispatch();

  const showMessage = (message) => {
    if (message) {
      toast.error(message);
      dispatch(clearMessageFromStore());
    }
  };

  return { showMessage };
};
