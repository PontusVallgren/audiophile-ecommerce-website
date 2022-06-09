import React from "react";
import ProductPromoPrimary from "./ProductPromoPrimary";
import ProductPromoSecondary from "./ProductPromoSecondary";
import ProductPromoThird from "./ProductPromoThird";

//Placeholders - should come from database
import promoSpeakerSmall from "../../../public/promo-speaker-small.svg";
import promoSpeakerMedium from "../../../public/promo-speaker-medium.svg";
import promoSpeakerLarge from "../../../public/promo-speaker-large.svg";

import promoZx7SpeakerSmall from "../../../public/promo-speaker-zx7-small.jpg";
import promoZx7SpeakerMedium from "../../../public/promo-speaker-zx7-medium.jpg";
import promoZx7SpeakerLarge from "../../../public/promo-speaker-zx7-large.jpg";

import promoEarphonesSmall from "../../../public/promo-earphones-small.jpg";
import promoEarphonesMedium from "../../../public/promo-earphones-medium.jpg";
import promoEarphonesLarge from "../../../public/promo-earphones-large.jpg";

const promoPlaceholders = [
  {
    product: "ZX9",
    category: "Speaker",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound",
    path: "/speaker",
    mobile: promoSpeakerSmall,
    tablet: promoSpeakerMedium,
    desktop: promoSpeakerLarge,
  },
  {
    product: "ZX7",
    category: "speaker",
    description: "",
    path: "/speaker",
    mobile: promoZx7SpeakerSmall,
    tablet: promoZx7SpeakerMedium,
    desktop: promoZx7SpeakerLarge,
  },
  {
    product: "yx1",
    category: "speaker",
    description: "",
    path: "/earphones",
    mobile: promoEarphonesSmall,
    tablet: promoEarphonesMedium,
    desktop: promoEarphonesLarge,
  },
];

const ProductPromoGrid: React.FC = () => {
  return (
    <section>
      <ProductPromoPrimary data={promoPlaceholders[0]} />
      <ProductPromoSecondary data={promoPlaceholders[1]} />
      <ProductPromoThird data={promoPlaceholders[2]} />
    </section>
  );
};

export default ProductPromoGrid;
