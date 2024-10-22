import {ColorRing} from 'react-loader-spinner';

export const LoadingCard = () => {
  return <div className="loading-card">
    <ColorRing
      visible={true}
      height="150"
      width="150"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#807BB7', '#6761A8', '#A06EB6', '#557ACF', '#2FD474']}
    />
  </div>
}