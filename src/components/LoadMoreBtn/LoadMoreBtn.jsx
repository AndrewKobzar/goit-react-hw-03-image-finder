import PropTypes from 'prop-types';
import s from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onButtonClick }) {
  return (
  
      <button className={s.Button} type="button" onClick={onButtonClick}>
        Load more
      </button>
    
  );
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onButtonClick: PropTypes.func,
};
