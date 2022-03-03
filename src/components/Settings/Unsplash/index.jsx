import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Button from "components/common/Button";
import Input from "components/common/Input";
import { useBuilderContext } from "contexts";

const token = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
const url = `https://api.unsplash.com/photos?page=1&query=`;

const Unsplash = ({ attributeName, item }) => {
  const { updateAttributes } = useBuilderContext();
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("office");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUnsplash = useCallback(() => {
    axios
      .get(`${url}${search}`, {
        headers: {
          Authorization: `Client-ID ${token}`,
        },
      })
      .then((res) => setPhotos(res?.data))
      .catch((err) => console.log(err));
  }, [search]);

  useEffect(() => {
    fetchUnsplash();
  }, [fetchUnsplash]);

  const updateBgImage = (imgUrl) => {
    updateAttributes(item.id, { backgroundImage: imgUrl });
  };

  return (
    <UnsplashWrapper>
      <Button onClick={() => setIsModalOpen(true)} text="Change image" />
      {isModalOpen && (
        <ModalWrapper>
          <div onClick={() => setIsModalOpen(false)}>close</div>
          <Input
            key={attributeName}
            name={attributeName}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search for a photo"
            value={search}
          />
          <Button onClick={() => fetchUnsplash(search)} text="Search" />
          {photos.length > 0 && (
            <PhotosWrapper>
              {photos.map((photo) => (
                <img
                  alt={photo.user.bio}
                  key={photo.id}
                  onClick={() => updateBgImage(photo.urls.regular)}
                  src={photo.urls.thumb}
                />
              ))}
            </PhotosWrapper>
          )}
        </ModalWrapper>
      )}
    </UnsplashWrapper>
  );
};

export default Unsplash;

const UnsplashWrapper = styled.div`
  margin-bottom: 20px;
`;

const ModalWrapper = styled.div`
  background: white;
  height: 500px;
  position: absolute;
  width: 500px;
  z-index: 2;
`;

const PhotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  img {
    cursor: pointer;
    height: 100px;
    object-fit: cover;
    width: 100px;
  }
`;
