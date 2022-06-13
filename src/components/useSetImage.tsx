import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

const useSetImage = (
  mobile: StaticImageData | string,
  tablet: StaticImageData | string,
  desktop: StaticImageData | string
) => {
  const [promoImage, setPromoImage] = useState(mobile);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setPromoImage(mobile);
    }
    if (window.innerWidth >= 768) {
      setPromoImage(tablet);
    }
    if (window.innerWidth >= 1024) {
      setPromoImage(desktop);
    }

    const updateMedia = () => {
      if (window.innerWidth < 768) {
        setPromoImage(mobile);
      }
      if (window.innerWidth >= 768) {
        setPromoImage(tablet);
      }
      if (window.innerWidth >= 1024) {
        setPromoImage(desktop);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [desktop, mobile, tablet]);

  return promoImage;
};

export default useSetImage;
