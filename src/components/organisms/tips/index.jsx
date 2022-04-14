import { Description } from '../../atoms/description';
import { Title } from '../../atoms/title';

export const Tips = ({ className = '' }) => {
  return (
    <div className={`o-tips ${className}`}>
      <div className='o-tips__bg'>
        <div className='o-tips__box-grey'>
          <Title className='o-tips__title-grey'>What’s going on!</Title>
          <Description className='o-tips__des-grey'>
            Learn more about upcoming fashion trends and tips
          </Description>
        </div>
        <div className='o-tips__box-yellow'>
          <Title className='o-tips__title-yellow'>7 fashion tips for this summer</Title>
          <Description className='o-tips__des-yellow'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita qui optio vel
            consectetur repellat non assumenda architecto? Eos natus fugiat atque vitae iste
            praesentium dicta tenetur cum est sapiente.
          </Description>
        </div>
        <div className='o-tips__image'>
          <img src='/images/collections/image 24.png' alt='' />
        </div>
      </div>
    </div>
  );
};
