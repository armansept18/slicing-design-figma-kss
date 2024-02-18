import { Grid, GridItem } from "@chakra-ui/react";
import { DataMisi } from "../data/data-misi";
import "../assets/styles/about-us.css";

export const TentangKami = () => {
  return (
    <>
      <div className="about-us flex justify-center items-center">
        <div
          className="about-text flex flex-col justify-center items-center ml-16 mr-16"
          style={{ color: "#FDEFF4" }}
        >
          <h1>TENTANG KAMI</h1>
          <svg
            width="352"
            height="12"
            viewBox="0 0 352 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_109_4)">
              <line
                x1="6"
                y1="2"
                x2="346"
                y2="2"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_109_4"
                x="0"
                y="0"
                width="352"
                height="12"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_109_4"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_109_4"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <p className="">
            Kami berdiri pada tahun 2021, dengan nama PT. Kalisa Sehat Sejahtera
            yang telah menunjukan pendekatan yang berbeda untuk bisnis. Kami
            memulai dengan konsep inovatif berpadu dengan produk-produk
            berkualitas tinggi dan peluang bisnis yang dapat diikuti oleh orang
            awam sekaligus dengan system yang profitable.
          </p>
          <button className="button-selengkapnya">SELENGKAPNYA</button>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mt-12">
          <h2 className="sub-title">VISI KAMI</h2>
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
          <p className="sub-text text-center mt-6">
            Mencapai masa depan cerah dengan hidup yang lebih sehat dan
            sejahtera dan menciptakan produk yang berkualitas dengan permintaan
            pasar saat ini yang memiliki manfaat untuk sesama.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <h2 className="sub-title">MISI KAMI</h2>
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
          <div className="mt-16">
            <Grid
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 1fr)"
              gap={10}
            >
              {DataMisi.map((misi, index) => (
                <GridItem
                  className="flex flex-col justify-center items-center gap-6"
                  h="340px"
                  w="420px"
                  key={index}
                  textAlign="center"
                >
                  <img src={misi.image} alt={`Misi ${index + 1}`} />
                  <p
                    style={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#2f2e41",
                    }}
                  >
                    {misi.text}
                  </p>
                </GridItem>
              ))}
            </Grid>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
          <h2 className="sub-title">PRINSIP KAMI</h2>
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
          <p className="sub-text text-center mt-6">
            Menciptakan bisnis yang sehat dan permintaan produk yang terus
            meningkat melalui distributor kami yang tersebar diseluruh kota
            besar di Indonesia. Kami berkomitmen untuk meningkatkan perekonomian
            pelanggan kami. Jaringan distributor membawa produk kami kepada
            masyarakat dan membuatnya mudah diakses oleh pelanggan kami.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-12">
          <h2 className="sub-title">TIM KAMI</h2>
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
          <p className="sub-text text-center mt-6 mb-20">
            Tim kami yang berasal dari berbagai macam latar belakang bisnis dan
            pengalaman dengan jiwa muda yang membara menggabungkan ide - ide
            brilian akan menciptakan suatu sitem bisnis yang luar biasa.
          </p>
        </div>
      </div>
    </>
  );
};
