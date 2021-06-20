import Loader from 'react-loader-spinner';

function ButtonSpinner() {
  return (
    <div className='flex'>
      <Loader type='ThreeDots' color='#EF4444' height={22} width={100} />
    </div>
  );
}

export default ButtonSpinner;
