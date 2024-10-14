import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Button,
} from "@nextui-org/react";

// Array of images for the carousel
const teampoorMobileImages = [
  {
    src: "/images/teampoor-mobile/2.png",
    alt: "Image 1",
    description: "Description for image 1",
  },
  {
    src: "/images/teampoor-mobile/3.png",
    alt: "Image 1",
    description: "Description for image 1",
  },
  {
    src: "/images/teampoor-mobile/4.png",
    alt: "Image 1",
    description: "Description for image 1",
  },
  {
    src: "/images/teampoor-mobile/5.png",
    alt: "Image 1",
    description: "Description for image 1",
  },
];

const Mobile = ({ isOpen, onOpenChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % teampoorMobileImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + teampoorMobileImages.length) %
        teampoorMobileImages.length
    );
  };

  return (
    <Modal
      size="4xl"
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent className="bg-zinc-900 text-white font-montserrat">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              {/* TEAMPOOR - Motorcycle Parts & Services */}
            </ModalHeader>
            <ModalBody className="text-white flex flex-col items-center">
              <div className="relative w-full">
                <img
                  src={teampoorMobileImages[currentImageIndex].src}
                  alt={teampoorMobileImages[currentImageIndex].alt}
                  className="w-full rounded"
                />

                <div className="mt-4 space-y-2">
                  <div className="flex flex-row gap-1 flex-wrap">
                    <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                      <p className="text-[10px] text-red-500">Mobile</p>
                    </div>

                    <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                      <p className="text-[10px] text-red-500">MongoDB</p>
                    </div>

                    <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                      <p className="text-[10px] text-red-500">Express</p>
                    </div>

                    <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                      <p className="text-[10px] text-red-500">React JS</p>
                    </div>

                    <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                      <p className="text-[10px] text-red-500">Node JS</p>
                    </div>
                  </div>
                  
                  <p className="font-bold text-xl">
                    TEAMPOOR - Motorcycle Parts & Services
                  </p>
                  <p className="text-sm">
                    {/* {teampoorMobileImages[currentImageIndex].description} */}
                    TeamPoor System for Managing Motorcycle Parts and Services,
                    a sophisticated web-based and mobile application designed to
                    transform the management of motorcycle shops. The system
                    aims to enhance workflow efficiency, minimize manual
                    processes, boost productivity, and elevate service delivery
                    and customer satisfaction within the motorcycle shop
                    environment.
                  </p>
                </div>

                <div
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded cursor-pointer"
                  onClick={prevImage}
                >
                  &lt;
                </div>
                <div
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded cursor-pointer"
                  onClick={nextImage}
                >
                  &gt;
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default Mobile;