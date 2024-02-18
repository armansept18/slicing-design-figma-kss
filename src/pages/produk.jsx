import { Grid, GridItem } from "@chakra-ui/react";
import { ProductData } from "../data/data-produk";
import "../assets/styles/produk.css";

export const ProductPage = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="title">PRODUK KAMI</h1>
          <svg
            width="147"
            height="4"
            viewBox="0 0 147 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2"
              x2="145"
              y2="2"
              stroke="#524A4E"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p className="text-produk text-center mt-3 mb-16">
            Dengan hasil riset yang dikembangkan sampai saat ini terciptalah
            produk dengan standar kualitas tinggi dan diuji dengan basis ilmu
            pengetahuan.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Grid templateColumns="repeat(3, 1fr)" gap={12}>
            {ProductData.map((product, index) => (
              <GridItem
                key={index}
                textAlign="center"
                className="flex flex-col justify-center items-center"
                maxH="365px"
                h="100vh"
                maxW="347px"
                w="100vw"
              >
                <img
                  className="mb-9"
                  src={product.image}
                  alt={`Product ${index + 1}`}
                />
                <button className="product-button">{product.button}</button>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};
