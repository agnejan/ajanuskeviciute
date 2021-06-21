import Loader from 'react-loader-spinner';

function Spinner({ text = 'Loading' }) {
  return (
    <div className='h-full flex justify-center items-center flex-col'>
      <Loader type='ThreeDots' color='#EF4444' height={100} width={100} />
      <div className='font-semibold text-purple-700'>{text}</div>
    </div>
  );
}

export default Spinner;
