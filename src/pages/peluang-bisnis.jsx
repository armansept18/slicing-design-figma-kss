import { Grid, GridItem } from "@chakra-ui/react";
import "../assets/styles/peluang-bisnis.css";
import { DataBisnis } from "../data/data-bisnis";

export const PeluangBisnis = () => {
  return (
    <>
      <div className="peluang-bisnis flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="title-peluang-bisnis">PELUANG BISNIS</h1>
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
              stroke="#FDEFF4"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <p className="peluang-text text-center mt-4 mb-6">
            Kami membuka suatu peluang bisnis untuk pelanggan kami dengan
            fleksibel dari PT. Kalisa Sehat Sejahtera. Bergabung dan buatlah
            suatu jaringan bisnis yang menyenangkan dengan berbagai macam paket
            plan yang profitable.
          </p>
          <button className="peluang-bisnis-button">PELUANG BISNIS</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="kss-text text-center">
          PT. Kalisa Sehat Sejahtera bukan sekedar bisnis biasa pada umumnya.
          Dengan produk yang kami ciptakan anda dapat mencapai impian anda
          menjadi sukses dan meningkatkan kesadaran hidup sehat dan sejahtera.
          Buatlah suatu perubahan dala hidup anda mulai sekarang dan ajak
          orang-orang sekitar untuk membantu meningkatkan kehidupan mereka.
        </p>
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="flex flex-col justify-center items-center">
            <h4 className="subtitle mb-2">MEMBANGUN BISNIS ANDA SENDIRI</h4>
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
            <p className="bekerja-text text-center mt-6">
              Bekerja dengan waktu yang fleksibel menjadi salah satu tujuan
              Kalisa Sehat Sejahtera. Bebaskan diri Anda dari rutinitas 9 hingga
              5 - rancang jadwal Anda dan tentukan jam kerja Anda sendiri.
              Bangun bisnis Anda yang dapat disesuiaikan dengan gaya hidup Anda
              Ketika fleksibilitas terbukti memiliki pengaruh positif yang
              sangat besar pada keseimbangan kehidupan kerja, peluang seperti
              ini bisa menjadi apa yang Anda butuhkan.
            </p>
            <p className="daftar-text text-center mt-4">
              Daftar hari ini dan jadilah Member Kalisa Sehat Sejahtera.
            </p>
            <div className="mt-16">
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={10}
              >
                {DataBisnis.map((bisnis, index) => (
                  <GridItem
                    className="flex flex-col justify-center items-center"
                    maxW="380px"
                    maxH="367px"
                    key={index}
                  >
                    <img src={bisnis.image} alt={`Bisnis ${index + 1}`} />
                    <h1 className="bisnis-title mt-2">{bisnis.title}</h1>
                    <svg
                      width="147"
                      height="4"
                      viewBox="0 0 147 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 2C0 0.895431 0.895431 0 2 0H145C146.105 0 147 0.895431 147 2C147 3.10457 146.105 4 145 4H2C0.895431 4 0 3.10457 0 2Z"
                        fill="#524A4E"
                      />
                    </svg>
                    <p
                      className="bisnis-text text-center mt-2"
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#2f2e41",
                      }}
                    >
                      {bisnis.text}
                    </p>
                  </GridItem>
                ))}
              </Grid>
            </div>
          </div>
          <button className="button-daftar mt-24 mb-40">DAFTAR DI SINI</button>
        </div>
      </div>
    </>
  );
};
