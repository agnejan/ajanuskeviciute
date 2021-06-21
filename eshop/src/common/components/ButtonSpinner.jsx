import Loader from 'react-loader-spinner';

function ButtonSpinner() {
  return (
    <div className='flex'>
      <Loader type='ThreeDots' color='#34D399' height={22} width={100} />
    </div>
  );
}

export default ButtonSpinner;
