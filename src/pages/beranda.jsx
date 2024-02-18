import { Button } from "@chakra-ui/react";
import Pic1 from "../assets/pictures/gapai-impian.png";
import Pic2 from "../assets/pictures/racikan-lab.png";
import "../assets/styles/homepage.css";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const nav = useNavigate();
  const handleClickAboutUs = () => {
    nav("/tentang-kami");
  };
  const handleClickProduct = () => {
    nav("/produk");
  };
  const handleClickBusiness = () => {
    nav("/peluang-bisnis");
  };

  return (
    <>
      <div className="hero flex items-center">
        <div className="">
          <div className="title ml-16">
            <h1>HIDUP LEBIH SEHAT DAN SEJAHTERA</h1>
            <svg
              width="320"
              height="4"
              viewBox="0 0 320 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="2"
                x2="318"
                y2="2"
                stroke="#524A4E"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <p>Mulailah hari anda dengan perawatan yang sehat dan alami</p>
            <button className="more-button flex justify-center items-center p-3">
              SELENGKAPNYA
            </button>
          </div>
        </div>
      </div>
      {/* Button Redirect */}
      <div className="flex justify-center items-center gap-12 mt-20">
        <div className="button-1 flex justify-center items-center">
          <Button onClick={() => handleClickAboutUs()}>TENTANG KAMI</Button>
        </div>
        <div className="button-2 flex justify-center items-center">
          <Button onClick={() => handleClickProduct()}>PRODUK</Button>
        </div>
        <div className="button-3 flex justify-center items-center">
          <Button onClick={() => handleClickBusiness()}>PELUANG BISNIS</Button>
        </div>
      </div>
      {/* End of Button Redirect */}

      {/* Notes */}
      <div className="flex flex-col justify-center items-center ml-16 mr-16 mt-20">
        <div className="notes-content flex justify-center items-center gap-11">
          <div className="notes-text">
            <h3>GAPAI IMPIAN HIDUP YANG SEHAT DAN SEJAHTERA</h3>
            <p className="font-medium">
              APA RAHASIA AWET MUDA? MENJALANI HIDUP SETIAP HARI DENGAN
              OPTIMISME DAN KEYAKINAN UNTUK MELAKUKAN APA YANG ANDA CINTAI
              SEPANJANG HIDUP ANDA. MELALUI ILMU PENGETAHUAN KAMI YANG INOVATIF,
              KAMI MENYINGKAP CARA-CARA BARU UNTUK MEMBANTU ANDA TERLIHAT DAN
              MERASA MUDA. KAMI HADIRKAN PENEMUAN-PENEMUAN INI KE DALAM
              KEHIDUPAN MELALUI PRODUK-PRODUK PERAWATAN TUBUH DAN SUPLEMEN YANG
              BAIK.
            </p>
          </div>
          <div>
            <img src={Pic1} alt="gambar-1" />
          </div>
        </div>
        <div className="notes-content flex justify-center items-center gap-11">
          <div>
            <img src={Pic2} alt="gambar-2" />
          </div>
          <div className="notes-text">
            <h3>RACIKAN DENGAN KOMBINASI SEMPURNA HASIL RISET LAB</h3>
            <p className="font-medium">
              MEMANFAATKAN YANG TERBAIK DARI ALAM UNTUK MEMBERIKAN HASIL TERBAIK
              ADALAH MISI PRIBADI KAMI. KAMI MENGGABUNGKAN BAHAN KANDUNGAN YANG
              BERMANFAAT DENGAN ILMU PENGETAHUAN DAN TEKNOLOGI YANG INOVATIF.
              HASILNYA? PRODUK-PRODUK KELAS DUNIA YANG MEMBERIKAN MANFAAT NYATA.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
