import Head from "next/head";
import styles from "./home.module.scss";
import { SubscribeButton } from "../components/subscribeButton";
import {GetStaticProps} from 'next'
import { stripe } from "src/services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number; 
  }
  
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br /> the <span>React</span> world
          </h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async() => {

  const price =  await stripe.prices.retrieve("price_1LUWgzEYFPuZEkBvtQlqn5QP", {
    expand: ['product'],
  });

  const formatCurrency =  (value: number) => {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value)
  }

  const product = {
    priceId : price.id,
    // @ts-ignore
    amount : formatCurrency(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 //sec * min * hours = 1 day
  }
}

