// import { CleanPlugin } from "webpack";
import { Description } from '../../atoms/description';
import { Title } from '../../atoms/title';
import { Banner } from '../../molecules/banner';
import { BannerSale } from '../../molecules/bannerSale';
import { Newsletter } from '../../molecules/newsletter';
import { BestSeller } from '../../organisms/bestSeller';
import { BoxProduct } from '../../organisms/boxProduct';
//
import { Sale } from '../../organisms/sale';
import { Collection } from '../../organisms/collection';
import { Tips } from '../../organisms/tips';
export const Home = ({ className = '' }) => {
  return (
    <div className={`p-home ${className}`}>
      <section className='p-home__banner'>
        <Banner />
      </section>
      <section className='p-home__sale'>
        <Sale />
      </section>
      <section className='p-home__box-product'>
        <BoxProduct />
      </section>
      <section className='p-home__best-seller'>
        <Title>Best Sellers</Title>
        <Description>Check out most promising product bought by our buyers</Description>
        <BestSeller />
      </section>
      <section className='p-home__banner-sale'>
        <BannerSale />
      </section>
      <section className='p-home__newsletter'>
        <Newsletter />
      </section>
      <section className='p-home__collection'>
        <Collection />
      </section>
      <section className='p-home__tips'>
        <Tips />
      </section>
    </div>
  );
};
