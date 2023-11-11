import styled from "styled-components";

const GoogleMap = () => {
  return (
    <Iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d775665.1977575189!2d-74.41089437890638!3d40.587031695247866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1699386649348!5m2!1suk!2sua"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></Iframe>
  );
};

export default GoogleMap;

const Iframe = styled.iframe`
  width: 90%;
  height: 300px;
  filter: grayscale(100%);
  filter: gray;
  border: 0;
  @media screen and (min-width: 1439px) {
    max-width: 646px;
    height: 351px;
  }
`;
